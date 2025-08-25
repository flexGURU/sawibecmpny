import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  features = [
    {
      icon: 'fas fa-certificate',
      title: 'Certified Professionals',
      description:
        'Our team consists of certified accountants and auditors with extensive experience.',
    },
    {
      icon: 'fas fa-cog',
      title: 'Technology-Driven',
      description:
        'We leverage advanced ERP systems and automation for efficient service delivery.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Ethical Practices',
      description:
        'We maintain the highest standards of integrity and regulatory compliance.',
    },
  ];

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
