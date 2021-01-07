import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-service',
    template: `
        <div class="landing">
            <app-header></app-header>
            <app-intro></app-intro>
            <app-home-hero></app-home-hero>
            <app-services-carousel [backgroundGray]="true"></app-services-carousel>
            <app-footer></app-footer>
        </div>`
})
export class ServicePageComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}
