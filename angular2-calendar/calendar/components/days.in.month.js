System.register(['angular2/core', '../servises/date.service', 'angular2/router', './month.in.year'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, date_service_1, router_1, month_in_year_1;
    var DaysInMonth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (date_service_1_1) {
                date_service_1 = date_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (month_in_year_1_1) {
                month_in_year_1 = month_in_year_1_1;
            }],
        execute: function() {
            DaysInMonth = (function () {
                function DaysInMonth(_router, _dateService) {
                    this._router = _router;
                    this._dateService = _dateService;
                    this.currDate = { date: 0, month: 0, year: 0 };
                    this.daysInMonth = [
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }]
                    ];
                    this.oneDay = { day: 0, active: null };
                }
                DaysInMonth.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dateService.getCurrentDate().then(function (dat) { return _this.currDate = dat; });
                    this.initDayInterface();
                };
                DaysInMonth.prototype.initDayInterface = function () {
                    var date = new Date(+this.currDate.year, +this.currDate.month, 1);
                    if (+date.getDay() == 1) {
                        date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() - 7);
                        for (var i = 0; i < 6; i += 1) {
                            for (var j = 0; j < 7; j += 1) {
                                this.oneDay.day = +date.getDate();
                                this.oneDay.active = (+this.currDate.month == date.getMonth()) ? true : false;
                                this.daysInMonth[i][j].day = this.oneDay.day;
                                this.daysInMonth[i][j].active = this.oneDay.active;
                                date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() + 1);
                            }
                        }
                    }
                    else {
                        date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() - (date.getDay() - 1));
                        for (var i = 0; i <= 6; i += 1) {
                            for (var j = 0; j <= 7; j += 1) {
                                this.oneDay.day = +date.getDate();
                                this.oneDay.active = (+this.currDate.month == date.getMonth()) ? true : false;
                                this.daysInMonth[i][j].day = this.oneDay.day;
                                this.daysInMonth[i][j].active = this.oneDay.active;
                                date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() + 1);
                            }
                        }
                    }
                };
                DaysInMonth.prototype.openMonth = function () {
                    this._router.navigateByUrl('/(months)');
                };
                DaysInMonth.prototype.chandeDate = function (date) {
                    this.currDate.date = date;
                };
                DaysInMonth = __decorate([
                    core_1.Component({
                        selector: 'dais-month',
                        templateUrl: 'calendar/suportHtml/days.in.mount.html',
                        styleUrls: ['calendar/css/days.in.munth.css'],
                        directives: [month_in_year_1.MonthInYear]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, date_service_1.DateService])
                ], DaysInMonth);
                return DaysInMonth;
            })();
            exports_1("DaysInMonth", DaysInMonth);
        }
    }
});
//# sourceMappingURL=days.in.month.js.map