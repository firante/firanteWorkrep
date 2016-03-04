import { Component, OnInit } from 'angular2/core';
import { DaysInMonth } from './days.in.month';
import { MonthInYear } from './month.in.year';
import { Years } from './years';
import { CurrentDate } from '../interface/current.date.interface';
import { DateService } from '../servises/date.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, RouterOutlet } from 'angular2/router';
import { Router, AuxRoute } from 'angular2/router';

@Component ({
  selector: 'calendar-app',
  templateUrl: 'calendar/suportHtml/first.calendar.html',
  styleUrls: ['calendar/css/first.calendar.css'],
  directives: [ROUTER_DIRECTIVES, RouterLink, RouterOutlet],
  providers: [
    ROUTER_PROVIDERS,
    DateService,
    DaysInMonth
  ]
})

@RouteConfig([
  {
    path: '/',
    aux: '/days',
    component: DaysInMonth,
    as: 'Days'
  },
  {
    path: '/',
    aux: '/months',
    component: MonthInYear,
    as: 'DaysMonths'
  },
  {
    path: '/',
    aux: '/years',
    component: Years,
    as: 'DaysMonthYears'
  }
])

export class FirstComponent implements OnInit {
currDate : CurrentDate = {date: "", month: "", year: ""};
constructor(
    private _router: Router,
    private _dateService: DateService
  ) {}

  ngOnInit () {
    this._dateService.getThisDate().then(dat => this.currDate = dat);
  }

  openCall() {
    this._router.navigateByUrl('/(days)');
  }
  changeCurrDate(date) {
    let dat = date.split('-');
    this.currDate.date = dat[0];
    this.currDate.month = dat[1];
    this.currDate.year = dat[2];
  }
}
