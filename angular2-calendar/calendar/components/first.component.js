System.register(['angular2/core', './days.in.month', './month.in.year', './years', '../servises/date.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, days_in_month_1, month_in_year_1, years_1, date_service_1, router_1, router_2;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (days_in_month_1_1) {
                days_in_month_1 = days_in_month_1_1;
            },
            function (month_in_year_1_1) {
                month_in_year_1 = month_in_year_1_1;
            },
            function (years_1_1) {
                years_1 = years_1_1;
            },
            function (date_service_1_1) {
                date_service_1 = date_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent(_router, _dateService) {
                    this._router = _router;
                    this._dateService = _dateService;
                    this.currDate = { date: "", month: "", year: "" };
                }
                FirstComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dateService.getCurrentDate().then(function (dat) { return _this.currDate = dat; });
                };
                FirstComponent.prototype.openCall = function () {
                    this._router.navigateByUrl('/(days)');
                };
                FirstComponent.prototype.changeCurrDate = function (date) {
                    var dat = date.split('-');
                    this.currDate.date = dat[0];
                    this.currDate.month = dat[1];
                    this.currDate.year = dat[2];
                };
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar-app',
                        templateUrl: 'calendar/suportHtml/first.calendar.html',
                        styleUrls: ['calendar/css/first.calendar.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, router_1.RouterOutlet],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            date_service_1.DateService,
                            days_in_month_1.DaysInMonth
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            aux: '/days',
                            component: days_in_month_1.DaysInMonth,
                            as: 'Days'
                        },
                        {
                            path: '/',
                            aux: '/months',
                            component: month_in_year_1.MonthInYear,
                            as: 'DaysMonths'
                        },
                        {
                            path: '/',
                            aux: '/years',
                            component: years_1.Years,
                            as: 'DaysMonthYears'
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_2.Router, date_service_1.DateService])
                ], FirstComponent);
                return FirstComponent;
            })();
            exports_1("FirstComponent", FirstComponent);
        }
    }
});
//# sourceMappingURL=first.component.js.map