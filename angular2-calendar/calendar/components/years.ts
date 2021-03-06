import { Component, OnInit, Input } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Router } from 'angular2/router';
import { CurrentDate } from '../interface/current.date.interface';
import { DateService } from '../servises/date.service';

@Component ({
  selector: 'years',
  templateUrl: 'calendar/suportHtml/years.html',
  styleUrls: ['calendar/css/years.css'],
  directives: []
})

export class Years implements OnInit {

  @Input() years: number[];
  constructor (
    private _router: Router,
    private _dateService: DateService
  ){}

  currDate : CurrentDate = {date: 0, month: 0, year: 0};

  ngOnInit () {
    this.currDate = this._dateService.getCurrentDate();

  }

  changeYear (year) { 
    this.currDate.year = +year;
    this._dateService.setDayInterface(this.currDate);
    this._dateService.setYears(this.currDate);

  }
}
