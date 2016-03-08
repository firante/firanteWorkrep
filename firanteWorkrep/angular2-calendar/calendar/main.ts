///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component, provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {FirstComponent} from './components/first.component';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';



bootstrap(FirstComponent, [ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})]);
