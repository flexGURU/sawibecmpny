import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {


  industries = [
    'Financial Services',
    'Manufacturing',
    'Retail & Wholesale',
    'Healthcare',
    'NGOs & Development',
    'Hospitality & Tourism',
    'Education',
    'Real Estate',
  ];
}
