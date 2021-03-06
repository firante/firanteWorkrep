///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/core', 'angular2/platform/browser', './components/first.component', 'angular2/router'], function(exports_1) {
    var core_1, browser_1, first_component_1, router_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(first_component_1.FirstComponent, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=main.js.map