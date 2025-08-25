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
      icon: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=100&q=80',
      clients: 45,
    },
    {
      name: 'Manufacturing',
      icon: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=100&q=80',
      clients: 32,
    },
    {
      name: 'Healthcare',
      icon: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&w=100&q=80',
      clients: 28,
    },
    {
      name: 'Technology',
      icon: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&w=100&q=80',
      clients: 35,
    },
    {
      name: 'Education',
      icon: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&w=100&q=80',
      clients: 18,
    },
    {
      name: 'Retail & Wholesale',
      icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=100&q=80',
      clients: 25,
    },
    {
      name: 'Hospitality',
      icon: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&w=100&q=80',
      clients: 15,
    },
    {
      name: 'Real Estate',
      icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=100&q=80',
      clients: 22,
    },
    {
      name: 'NGOs',
      icon: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&w=100&q=80',
      clients: 12,
    },
    {
      name: 'Construction',
      icon: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=100&q=80',
      clients: 20,
    },
  ];
}
