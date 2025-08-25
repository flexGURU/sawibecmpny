import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { IndicatorsComponent } from '../../components/indicators/indicators.component';
import { TechnologyComponent } from '../../components/technology/technology.component';
import { IndustriesComponent } from '../../components/industries/industries.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { AboutComponent } from "../../components/about/about.component";
import { CtaComponent } from "../../components/cta/cta.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeroComponent,
    IndicatorsComponent,
    TechnologyComponent,
    IndustriesComponent,
    TestimonialsComponent,
    AboutComponent,
    CtaComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
}
