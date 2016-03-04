import {Injectable} from 'angular2/core';
import {CurrentDate} from '../interface/current.date.interface';

@Injectable ()

export class DateService {

  currDate: CurrentDate = {date: "", month: "", year: ""};

  getCurrentDate() {
      let date = new Date();
      this.setDateToCurrDate(date);
      return Promise.resolve(this.currDate);
  }

  setDateToCurrDate(date) {
    this.currDate.date = date.getDate();
    this.currDate.month = date.getMonth();
    this.currDate.year = date.getFullYear();
  }

  changeCurrDate(curr: CurrentDate) {
  this.currDate.date = curr.date;
  this.currDate.month = curr.month;
  this.currDate.year = curr.year;
  }
}
