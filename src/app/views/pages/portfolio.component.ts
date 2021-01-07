import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-portfolio',
    template: `
        <div class="landing">
            <app-header></app-header>
            <app-intro></app-intro>
            <app-image-grid></app-image-grid>
            <app-portfolios></app-portfolios>
            <app-footer></app-footer>
        </div>`
})
export class PortfolioPageComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}
