import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Audit & Assurance',
      description:
        'Risk-based audit approach ensuring accuracy, transparency, and regulatory compliance for your business.',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=100&q=80',
      items: [
        'Statutory and regulatory audits',
        'Internal control assessments',
        'Forensic investigations',
        'SOX compliance reviews',
        'Risk management audits',
      ],
    },
    {
      title: 'Tax Advisory & Compliance',
      description:
        'Comprehensive tax solutions to optimize your tax position while ensuring full regulatory compliance.',
      image:
        'https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&w=100&q=80',
      items: [
        'Corporate & personal tax planning',
        'VAT, PAYE, and income tax returns',
        'Transfer pricing documentation',
        'Tax health checks and audits',
        'Cross-border tax advisory',
      ],
    },
    {
      title: 'Business Advisory',
      description:
        'Strategic consulting services to unlock value through operational efficiency and growth strategies.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=100&q=80',
      items: [
        'Business formation & restructuring',
        'Financial modeling & feasibility',
        'M&A advisory and due diligence',
        'Risk management frameworks',
        'Corporate governance advisory',
      ],
    },
    {
      title: 'Bookkeeping & Accounting',
      description:
        'Full-service accounting solutions enabling business owners to focus on core operations.',
      image:
        'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&w=100&q=80',
      items: [
        'Daily transaction processing',
        'Accounts receivable/payable',
        'Payroll processing & compliance',
        'Management reporting',
        'Financial statement preparation',
      ],
    },
    {
      title: 'ERP Implementation',
      description:
        'Digital transformation solutions through enterprise resource planning and cloud accounting systems.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=100&q=80',
      items: [
        'ERP system selection & analysis',
        'QuickBooks, Sage, SAP, Odoo',
        'Custom integration solutions',
        'Staff training & change management',
        'Cloud migration services',
      ],
    },
  ];
}
