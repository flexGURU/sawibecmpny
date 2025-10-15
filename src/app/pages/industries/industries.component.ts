import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css',
})
export class IndustriesComponent {
  industries = [
    {
      name: 'Financial Services',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-coins',
    },
    {
      name: 'Manufacturing',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-industry',
    },
    {
      name: 'Healthcare',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-heartbeat',
    },
    {
      name: 'Technology',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-microchip',
    },
    {
      name: 'Education',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-graduation-cap',
    },
    {
      name: 'Retail & Wholesale',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-shopping-cart',
    },
    {
      name: 'Hospitality',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-hotel',
    },
    {
      name: 'Real Estate',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-building',
    },
    {
      name: 'NGOs',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-hand-holding-heart',
    },
    {
      name: 'Construction',
      notes:
        'Strong client relationships with tailored solutions for industry-specific challenges.',
      icon: 'fas fa-hard-hat',
    },
  ];
}
