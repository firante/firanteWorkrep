System.register(['angular2/core', 'angular2/router', '../servises/date.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, date_service_1;
    var Years;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (date_service_1_1) {
                date_service_1 = date_service_1_1;
            }],
        execute: function() {
            Years = (function () {
                function Years(_router, _dateService) {
                    this._router = _router;
                    this._dateService = _dateService;
                    this.currDate = { date: 0, month: 0, year: 0 };
                }
                Years.prototype.ngOnInit = function () {
                    this.currDate = this._dateService.getCurrentDate();
                };
                Years.prototype.changeYear = function (year) {
                    this.currDate.year = +year;
                    this._dateService.setDayInterface(this.currDate);
                    this._dateService.setYears(this.currDate);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Years.prototype, "years", void 0);
                Years = __decorate([
                    core_1.Component({
                        selector: 'years',
                        templateUrl: 'calendar/suportHtml/years.html',
                        styleUrls: ['calendar/css/years.css'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, date_service_1.DateService])
                ], Years);
                return Years;
            })();
            exports_1("Years", Years);
        }
    }
});
//# sourceMappingURL=years.js.map