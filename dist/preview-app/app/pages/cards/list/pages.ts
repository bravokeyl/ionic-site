import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/cards/list/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class ListPage {
    constructor() {

    }
}