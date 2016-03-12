import { Component, OnInit, Input } from 'angular2/core';
import { CurrentDate } from '../interface/current.date.interface';
import { DayInterface } from '../interface/day.interface';
import { DateService } from '../servises/date.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Router } from 'angular2/router';
import { MonthInYear } from './month.in.year';

@Component ({
  selector: 'dais-month',
  templateUrl: 'calendar/suportHtml/days.in.mount.html',
  styleUrls: ['calendar/css/days.in.munth.css'],
  directives: []
})

export class DaysInMonth implements OnInit {

  @Input() daysInMonth: DayInterface[][];


  constructor(
      private _router: Router,
      private _dateService: DateService
  ) {}

  currDate : CurrentDate = {date: 0, month: 0, year: 0};

  ngOnInit () {
    this.currDate = this._dateService.getCurrentDate();
  }

  openMonth () {
    document.getElementById("month").style.display = "block";
  }

  chandeDate(date) {
    this.currDate.date = date;
  }

}
