import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="landing">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
            <app-header></app-header>
            <app-intro-two></app-intro-two>
            <app-portfolio-carousel></app-portfolio-carousel>
            <app-services [backgroundGray]="true"></app-services>
            <app-cta></app-cta>
            <app-service3 [backgroundGray]="true"></app-service3>
            <app-testimonials-carousel></app-testimonials-carousel>
            <app-contact [backgroundGray]="true"></app-contact>
            <app-footer></app-footer>
        </div>`
})
export class HomePageComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}
