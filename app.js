import $ from 'jquery';
import _ from 'lodash';
import Bacon from 'baconjs';
import * as bmatcher from 'bacon-matchers';

console.log($.fn.jquery);
console.log(_.VERSION);
console.log(Bacon);

Bacon.fromArray([1,2,3]).where().equalTo(2).assign(console, "log");
