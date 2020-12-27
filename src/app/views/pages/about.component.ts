import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <div class="landing">
            <app-header></app-header>
            <app-hero></app-hero>
            <app-footer></app-footer>
        </div>`
})
export class AboutPageComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
