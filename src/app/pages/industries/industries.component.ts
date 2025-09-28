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
    clients: '45+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-coins'
  },
  {
    name: 'Manufacturing',
    clients: '32+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-industry'
  },
  {
    name: 'Healthcare',
    clients: '28+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-heartbeat'
  },
  {
    name: 'Technology',
    clients: '35+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-microchip'
  },
  {
    name: 'Education',
    clients: '18+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-graduation-cap'
  },
  {
    name: 'Retail & Wholesale',
    clients: '25+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-shopping-cart'
  },
  {
    name: 'Hospitality',
    clients: '15+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-hotel'
  },
  {
    name: 'Real Estate',
    clients: '22+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-building'
  },
  {
    name: 'NGOs',
    clients: '12+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-hand-holding-heart'
  },
  {
    name: 'Construction',
    clients: '20+ clients',
    notes: 'Strong client relationships with tailored solutions for industry-specific challenges.',
    icon: 'fas fa-hard-hat'
  }
];

}
