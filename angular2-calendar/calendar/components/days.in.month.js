System.register(['angular2/core', '../servises/date.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, date_service_1, router_1;
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
            }],
        execute: function() {
            DaysInMonth = (function () {
                function DaysInMonth(_router, _dateService) {
                    this._router = _router;
                    this._dateService = _dateService;
                    this.currDate = { date: 0, month: 0, year: 0 };
                }
                DaysInMonth.prototype.ngOnInit = function () {
                    this.currDate = this._dateService.getCurrentDate();
                };
                DaysInMonth.prototype.openMonth = function () {
                    document.getElementById("month").style.display = "block";
                };
                DaysInMonth.prototype.chandeDate = function (date, active) {
                    this.currDate.date = date;
                    if (active !== "thisMonth") {
                        if (parseInt(date, 10) > 15) {
                            if (+this.currDate.month !== 1) {
                                this.currDate.month -= 1;
                            }
                            else {
                                this.currDate.month = 12;
                                this.currDate.year -= 1;
                            }
                        }
                        else {
                            if (+this.currDate.month !== 12) {
                                this.currDate.month += 1;
                            }
                            else {
                                this.currDate.month = 1;
                                this.currDate.year += 1;
                            }
                        }
                        this._dateService.setDayInterface(this.currDate);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], DaysInMonth.prototype, "daysInMonth", void 0);
                DaysInMonth = __decorate([
                    core_1.Component({
                        selector: 'dais-month',
                        templateUrl: 'calendar/suportHtml/days.in.mount.html',
                        styleUrls: ['calendar/css/days.in.munth.css'],
                        directives: []
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