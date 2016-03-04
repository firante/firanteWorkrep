import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Router } from 'angular2/router';
import { CurrentDate } from '../interface/current.date.interface';
import { DateService } from '../servises/date.service';

@Component ({
  selector: 'dais-month',
  templateUrl: 'calendar/suportHtml/month.in.year.html',
  styleUrls: ['calendar/css/month.in.year.css'],
  directives: []
})

export class MonthInYear implements OnInit  {
  constructor(
      private _router: Router,
      private _dateService: DateService
  ) {}

  currDate : CurrentDate = {date: 0, month: 0, year: 0};

  ngOnInit () {
      this._dateService.getCurrentDate().then(dat => this.currDate = dat);
  }

  openYears() {
    this._router.navigateByUrl('/(years)');
  }

  changeMonth(month) {
    this.currDate.month = month;
  }
}
