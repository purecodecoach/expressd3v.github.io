import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NguCarouselModule} from '@ngu/carousel';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutes} from './routing';

import {HomePageComponent} from '../pages/home.component';
import {AboutPageComponent} from '../pages/about.component';
import {ServicePageComponent} from '../pages/service.component';
import {PortfolioPageComponent} from '../pages/portfolio.component';
import {ContactPageComponent} from '../pages/contact.component';

import {HeaderComponent} from '../components/header/header.component';
import {IntroOneComponent} from '../components/intro-one/intro-one.component';
import {IntroTwoComponent} from '../components/intro-two/intro-two.component';
import {PortfoliosComponent} from '../components/portfolios/portfolios.component';
import {ServicesComponent} from '../components/services/services.component';
import {CtaComponent} from '../components/cta/cta.component';
import {PricingsComponent} from '../components/pricings/pricings.component';
import {ContactComponent} from '../components/contact/contact.component';
import {FooterComponent} from '../components/footer/footer.component';
import {TestimonialsComponent} from '../components/testimonials/testimonials.component';
import {PortfolioCarouselComponent} from '../components/portfolio-carousel/portfolio-carousel.component';
import {TestimonialsCarouselComponent} from '../components/testimonials-carousel/testimonials-carousel.component';
import {ServicesCarouselComponent} from '../components/services-carousel/services-carousel.component';
import {DemoComponent} from '../components/demo/demo.component';
import {HomeHeroComponent} from '../components/home-hero/home-hero.component';

import {WINDOW_PROVIDERS} from '../../shared/helpers/window.helper';

import {SharedMaterialModule} from 'app/shared/shared-material.module';
import {SharedDirectivesModule} from 'app/shared/directives/shared-directives.module';
import {SharedComponentsModule} from 'app/shared/components/shared-components.module';
import {IntroThreeComponent} from '../components/intro-three/intro-three.component';
import {Service3Component} from '../components/service3/service3.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {ImageGridComponent} from '../components/image-grid/image-grid.component';
import {HeroComponent} from '../components/about-us/hero/hero.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        SharedDirectivesModule,
        SharedComponentsModule,
        SharedMaterialModule,
        FlexLayoutModule,
        NguCarouselModule,
        RouterModule.forChild(HomeRoutes),
        IvyCarouselModule
    ],
    declarations: [
        HomePageComponent,
        AboutPageComponent,
        ServicePageComponent,
        PortfolioPageComponent,
        ContactPageComponent,
        HeaderComponent,
        IntroOneComponent,
        IntroTwoComponent,
        PortfoliosComponent,
        ServicesComponent,
        CtaComponent,
        PricingsComponent,
        ContactComponent,
        FooterComponent,
        TestimonialsComponent,
        PortfolioCarouselComponent,
        TestimonialsCarouselComponent,
        ServicesCarouselComponent,
        DemoComponent,
        IntroThreeComponent,
        Service3Component,
        HomeHeroComponent,
        ImageGridComponent,
        HeroComponent,
    ],
    providers: [WINDOW_PROVIDERS]

})
export class Module {
}
