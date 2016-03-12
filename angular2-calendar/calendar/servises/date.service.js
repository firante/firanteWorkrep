System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DateService = (function () {
                function DateService() {
                    this.currDate = { date: 0, month: 0, year: 0 };
                    this.daysInMonth = [
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }],
                        [{ day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }, { day: 0, active: null }]
                    ];
                }
                DateService.prototype.getCurrentDate = function () {
                    if (this.currDate.date === 0 && this.currDate.month === 0 && this.currDate.year === 0) {
                        var date = new Date();
                        this.setDateToCurrDate(date);
                    }
                    return this.currDate;
                };
                DateService.prototype.setDateToCurrDate = function (date) {
                    this.currDate.date = +date.getDate();
                    this.currDate.month = +date.getMonth() + 1;
                    this.currDate.year = +date.getFullYear();
                };
                DateService.prototype.changeCurrDate = function (curr) {
                    this.currDate.date = curr.date;
                    this.currDate.month = curr.month;
                    this.currDate.year = curr.year;
                };
                DateService.prototype.getInitDayInterface = function (currDate) {
                    var date = new Date(currDate.year, currDate.month - 1, 1);
                    if (+date.getDay() === 1) {
                        date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() - 7);
                        for (var i = 0; i <= 5; i += 1) {
                            for (var j = 0; j <= 6; j += 1) {
                                this.daysInMonth[i][j].day = +date.getDate();
                                this.daysInMonth[i][j].active = (currDate.month - 1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
                                date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() + 1);
                            }
                        }
                    }
                    else {
                        date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() - ((date.getDay() !== 0) ? date.getDay() - 1 : 6));
                        for (var i = 0; i <= 5; i += 1) {
                            for (var j = 0; j <= 6; j += 1) {
                                this.daysInMonth[i][j].day = +date.getDate();
                                this.daysInMonth[i][j].active = (currDate.month - 1 === (+date.getMonth())) ? "thisMonth" : "otherMonth";
                                date = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() + 1);
                            }
                        }
                    }
                    return Promise.resolve(this.daysInMonth);
                };
                DateService.prototype.setDayInterface = function (currDate) {
                    this.getInitDayInterface(currDate);
                };
                DateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DateService);
                return DateService;
            })();
            exports_1("DateService", DateService);
        }
    }
});
//# sourceMappingURL=date.service.js.map