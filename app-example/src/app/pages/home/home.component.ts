import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products = [
    { title: 'Galaxy S20 Neu', description: '', price: 20 },
    { title: 'Elecktor Fahrad', description: '', price: 420 },
    { title: 'Zahnbürste Neu', description: '', price: 30 },
    { title: 'Kinderschuhe', description: '', price: 13 },
    { title: 'Raspberry 4', description: '', price: 25 },
    { title: 'Opel Corsa MY200', description: '', price: 20 },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  
}
