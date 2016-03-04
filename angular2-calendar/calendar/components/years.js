System.register([], function(exports_1) {
    var Years;
    return {
        setters:[],
        execute: function() {
            Р;
            Years = (function () {
                function Years(_router, _dateService) {
                    this._router = _router;
                    this._dateService = _dateService;
                    this.years = [];
                }
                Years.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dateService.getCurrentDate().then(function (dat) {
                        for (var i = 0; i < 25; i++) {
                            _this.years.push(+dat.year - 12 + i);
                        }
                    });
                };
                return Years;
            })();
            exports_1("Years", Years);
        }
    }
});
//# sourceMappingURL=years.js.map