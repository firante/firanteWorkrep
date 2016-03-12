import {Injectable} from 'angular2/core';
import {CurrentDate} from '../interface/current.date.interface';
import {DayInterface} from '../interface/day.interface';

@Injectable ()

export class DateService {

  years: number[] = [];
  currDate: CurrentDate = {date: 0, month: 0, year: 0};
  daysInMonth : DayInterface[][] = [
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}],
                                      [{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null},{day: 0, active: null}]
                                    ];

  getCurrentDate() {
      if (this.currDate.date === 0 && this.currDate.month === 0 &&  this.currDate.year === 0) {
        let date = new Date();
        this.setDateToCurrDate(date);
      }
      return this.currDate;
  }

  setDateToCurrDate(date) {
    this.currDate.date = +date.getDate();
    this.currDate.month = +date.getMonth()+1;
    this.currDate.year = +date.getFullYear();
  }

  changeCurrDate(curr: CurrentDate) {
    this.currDate.date = curr.date;
    this.currDate.month = curr.month;
    this.currDate.year = curr.year;
  }

  getInitDayInterface(currDate) {
    let date = new Date(currDate.year, currDate.month-1, 1);
    if(+date.getDay() === 1) {
      date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()-7);
      for(var i = 0; i <= 5; i += 1) {
        for(var j = 0; j <= 6; j += 1) {
          this.daysInMonth[i][j].day = +date.getDate();
          this.daysInMonth[i][j].active = (currDate.month-1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
          date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()+1);
        }
      }
    } else {
      date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()-((date.getDay() !== 0) ? date.getDay()-1 : 6) );
      for(var i = 0; i <= 5; i += 1) {
        for(var j = 0; j <= 6; j += 1) {
          this.daysInMonth[i][j].day = +date.getDate();
          this.daysInMonth[i][j].active = (currDate.month-1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
          date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate()+1);

        }
      }
    }

    return Promise.resolve(this.daysInMonth);
  }

  setDayInterface(currDate) {
    this.getInitDayInterface(currDate);
  }

  getYears(currDate) {
    for(var i = 0; i < 25; i++) {
      this.years[i] = currDate.year - 12 + i;
    }
    return Promise.resolve(this.years);
  }

  setYears(currDate) {
    this.getYears(currDate);
  }
}
