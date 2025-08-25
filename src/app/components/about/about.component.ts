import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  features = [
    {
      title: 'Certified Excellence',
      description:
        'ICPAK certified professionals with international qualifications and local expertise',
    },
    {
      title: 'Technology Leadership',
      description:
        'Cutting-edge ERP solutions and cloud accounting platforms for digital transformation',
    },
    {
      title: 'Industry Expertise',
      description:
        'Deep sector knowledge across 10+ industries with tailored solutions',
    },
    {
      title: '24/7 Support',
      description:
        'Round-the-clock support and dedicated account management for peace of mind',
    },
    {
      title: 'Transparent Pricing',
      description:
        'Clear, upfront pricing with no hidden fees and detailed project scoping',
    },
    {
      title: 'Proven Results',
      description:
        '99% client retention rate with measurable improvements in efficiency and compliance',
    },
  ];
}
