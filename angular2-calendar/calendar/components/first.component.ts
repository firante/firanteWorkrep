import { Component, OnInit } from 'angular2/core';
import { DayInterface} from '../interface/day.interface';
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
  directives: [ROUTER_DIRECTIVES, RouterLink, RouterOutlet, DaysInMonth, MonthInYear, Years],
  providers: [
    ROUTER_PROVIDERS,
    DateService,
    DaysInMonth
  ]
})

export class FirstComponent implements OnInit {

constructor(
    private _router: Router,
    private _dateService: DateService
  ) {}

  currDate : CurrentDate = {date: 0, month: 0, year: 0};

  daysInMonth : DayInterface[][] = [
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}]
                                    ];

  years: number[] = [];

  ngOnInit () {
    this.currDate = this._dateService.getCurrentDate();
    for(var i = 0; i < 25; i++) {
      this.years.push(this.currDate.year - 12 + i);
    }
    this._dateService.getInitDayInterface(this.currDate).then(daysIn => this.daysInMonth = daysIn);
  }

  openCall() {
    document.getElementById("days").style.display = "block";
  }

  changeCurrDate(date) {
    let dat = date.split('-');
    alert(1);
    var month = this.currDate.month;
    this.currDate.date = dat[0];
    this.currDate.month = dat[1];
    this.currDate.year = dat[2];
    alert(this.currDate.month +" "+  month);
    if(this.currDate.month !== month) {
      this._dateService.getInitDayInterface(this.currDate).then(daysIn => this.daysInMonth = daysIn);
    }


  }
}
