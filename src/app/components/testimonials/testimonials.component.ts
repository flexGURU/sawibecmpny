import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Sarah Kiprotich',
      position: 'Chief Financial Officer',
      company: 'Makena Holdings Ltd',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?ixlib=rb-4.0.3&w=100&q=80',
      content:
        'Sawibe & Company transformed our financial operations completely. Their ERP implementation saved us 40% in processing time and their ongoing support is exceptional.',
    },
    {
      name: 'James Mwangi',
      position: 'Managing Director',
      company: 'TechStart Kenya',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80',
      content:
        'The tax advisory services helped us navigate complex regulations during our expansion. Professional, reliable, and always available when we need them.',
    },
    {
      name: 'Grace Wanjiku',
      position: 'Finance Manager',
      company: 'Green Valley Exports',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80',
      content:
        'Their audit team provided invaluable insights that improved our internal controls. We now have complete confidence in our financial reporting processes.',
    },
  ];
}
