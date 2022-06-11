import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: any 
  constructor() {}

  ngOnInit(): void {
    console.log(history.state);
    this.item = history.state;
  }
}
