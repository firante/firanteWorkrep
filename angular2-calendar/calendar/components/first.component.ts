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
  directives: [DaysInMonth, MonthInYear, Years],
  providers: [
    DateService,
    DaysInMonth,
    Years
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
    this._dateService.getInitDayInterface(this.currDate).then(daysIn => this.daysInMonth = daysIn);
    this._dateService.getYears(this.currDate).then(year => this.years = year);
  }

  openCall() {
    document.getElementById("days").style.display = "block";
  }
}
