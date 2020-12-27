import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-contacts',
    template: `
        <div class="landing">
            <app-header></app-header>
            <app-intro-two></app-intro-two>
            <app-footer></app-footer>
        </div>`
})
export class ContactPageComponent implements OnInit, OnDestroy {
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }


}
