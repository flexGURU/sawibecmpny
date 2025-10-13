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
      title: 'Accounting Services',
      description:
        'Comprehensive accounting solutions to support compliance, decision-making, and operational efficiency.',
      icon: 'fas fa-calculator',
      items: [
        'Financial Accounting: Preparation of financial statements compliant with IFRS and local standards.',
        'Management Accounting: Budgeting, forecasting, and performance analysis.',
        'Bookkeeping: Daily transaction recording, reconciliations, and reporting.',
        'Payroll Accounting: Salary processing, statutory deductions, and compliance.',
      ],
    },
    {
      title: 'Audit Services',
      description:
        'Independent and specialized audits ensuring transparency, accountability, and risk management.',
      icon: 'fas fa-balance-scale',
      items: [
        'Statutory Audits: Examination of financial statements for regulatory compliance.',
        'Internal Audits: Evaluation of internal controls, governance, and risk management.',
        'Forensic Audits: Investigations into fraud, mismanagement, or irregularities.',
        'Compliance Audits: Verification of adherence to tax laws, donor, and industry standards.',
      ],
    },
    {
      title: 'Taxation Services',
      description:
        'Full-spectrum tax advisory and compliance services for individuals and businesses in Kenya and beyond.',
      icon: 'fas fa-file-invoice-dollar',
      items: [
        'Corporate Tax: Planning, compliance, and advisory for businesses.',
        'Personal Income Tax: Filing and advisory services for individuals.',
        'VAT (Value Added Tax): Registration, filing, and compliance support.',
        'Withholding Tax: Advisory and compliance for deductions and remittances.',
        'International Taxation: Cross-border advisory and treaty compliance.',
      ],
    },
    {
      title: 'ERP & Digital Transformation',
      description:
        'Technology-driven ERP and financial management systems tailored to industry-specific needs.',
      icon: 'fas fa-network-wired',
      items: [
        'SAP Business One: Integrated ERP for SMEs across finance and operations.',
        'QuickBooks Enterprise: Advanced financial management and reporting.',
        'Sage Intacct: Cloud-based ERP for financial services and nonprofits.',
        'Odoo ERP: Open-source modular ERP for manufacturing, retail, and services.',
        'Custom ERP Implementation: Tailored, industry-specific integrations.',
      ],
    },
    {
      title: 'Financial Analysis & Strategic Insights',
      description:
        'Data-driven financial assessment and performance intelligence for informed decision-making and growth.',
      icon: 'fas fa-chart-line',
      items: [
        'Financial Health Evaluation: Comprehensive review of profitability, liquidity, solvency, and efficiency through ratio and trend analysis.',
        'Budgeting & Forecasting: Data-backed projections and scenario modeling for resource optimization and long-term planning.',
        'Investment Advisory: Financial and commercial due diligence, market research, business plan, investment memorandum, business valuation and negotiation support.',
        'Risk & Variance Control: Early identification of financial risks through variance tracking and sensitivity analysis.',
        'Reporting & Stakeholder Insights: Clear dashboards and reports that enhance transparency, compliance, and investor confidence.',
      ],
    }
  ];
}
