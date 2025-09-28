import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { IndicatorsComponent } from '../../pages/indicators/indicators.component';
import { TechnologyComponent } from '../technology/technology.component';
import { IndustriesComponent } from '../industries/industries.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { AboutComponent } from '../about/about.component';
import { CtaComponent } from '../cta/cta.component';
import { Meta, Title } from '@angular/platform-browser';
import { ServicesComponent } from "../services/services.component";
import { ContactComponent } from "../../contact/contact.component";

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
    CtaComponent,
    ServicesComponent,
    ContactComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {



}
