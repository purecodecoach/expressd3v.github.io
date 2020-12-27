import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-service3',
    templateUrl: './service3.component.html',
    styleUrls: ['./service3.component.scss']
})
export class Service3Component implements OnInit {
    @Input('backgroundGray') public backgroundGray;

    constructor() {
    }

    ngOnInit() {
    }

}
