import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  technologies = [
    {
      name: 'SAP Business One',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=100&q=80',
      description: 'Enterprise resource planning for growing businesses',
    },
    {
      name: 'QuickBooks Enterprise',
      logo: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&w=100&q=80',
      description: 'Advanced accounting and financial management',
    },
    {
      name: 'Sage Intacct',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=100&q=80',
      description: 'Cloud financial management software',
    },
    {
      name: 'Odoo ERP',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=100&q=80',
      description: 'Open-source business applications suite',
    },
  ];
}
