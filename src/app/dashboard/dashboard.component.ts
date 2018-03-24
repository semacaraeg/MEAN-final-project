import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @Input() movie;
  
  constructor() { }

  ngOnInit() {
  }

  
  
}
