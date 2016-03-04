import { Component, OnInit } from 'angular2/core';
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
  directives: [MonthInYear]
})

export class DaysInMonth implements OnInit {
  constructor(
      private _router: Router,
      private _dateService: DateService
  ) {}

  currDate : CurrentDate = {date: "", month: "", year: ""};
  daysInMonth : DayInterface[][] = [
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}]
                                    ];
  oneDay: DayInterface = {day: 0, active: null};

  ngOnInit () {
      this._dateService.getCurrentDate().then(dat => this.currDate = dat);
      this.initDayInterface();
  }

  initDayInterface() {
    let date = new Date(+this.currDate.year, +this.currDate.month, 1);
    if(+date.getDay() == 1) {
      date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()-7);
      for(var i = 0; i < 6; i += 1) {
        for(var j = 0; j < 7; j += 1) {
          this.oneDay.day = +date.getDate();
          this.oneDay.active = (+this.currDate.month == date.getMonth()) ? true : false;
          this.daysInMonth[i][j].day = this.oneDay.day;
          this.daysInMonth[i][j].active = this.oneDay.active;
          date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()+1);
        }
      }
    } else {
      date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()-(date.getDay()-1));
      for(var i = 0; i <= 6; i += 1) {
        for(var j = 0; j <= 7; j += 1) {
          this.oneDay.day = +date.getDate();
          this.oneDay.active = (+this.currDate.month == date.getMonth()) ? true : false;
          this.daysInMonth[i][j].day = this.oneDay.day;
          this.daysInMonth[i][j].active = this.oneDay.active;
          date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()+1);
        }
      }
    }
  }

  openMonth () {
    this._dateService.changeCurrDate(this.currDate);
    this._router.navigateByUrl('/(months)');
  }

  chandeDate(date) {
    this.currDate.date = date;
  }
}
