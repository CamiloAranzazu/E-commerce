import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heard',
  templateUrl: './heard.component.html',
  styleUrls: ['./heard.component.css']
})
export class HeardComponent implements OnInit {

  constructor( public route: Router) { }

  ngOnInit() {
  }


}
