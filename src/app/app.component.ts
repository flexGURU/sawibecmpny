import { Component, inject } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  meta = inject(Meta);
  title = inject(Title);
  ngOnInit(): void {
    // Set the page title
    this.title.setTitle("Sawibe & Company | Kenya's Leading Accounting Firm");

    // Set meta tags
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Sawibe & Company Limited is Kenya’s leading full-service accounting firm providing audit, tax, ERP, and financial advisory solutions.',
      },
      {
        name: 'keywords',
        content: 'Accounting, Audit, ERP, Tax, Financial Services, Kenya',
      },
      { name: 'author', content: 'Sawibe & Company Limited' },
      {
        property: 'og:title',
        content: 'Sawibe & Company | Trusted Financial Partner',
      },
      {
        property: 'og:description',
        content:
          'Certified Public Accountants firm in Kenya delivering innovative accounting, audit, and ERP solutions to businesses across Africa.',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.sawibe.co.ke/' },
    ]);
  }
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
}
