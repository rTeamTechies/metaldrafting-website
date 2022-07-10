import { Component, OnInit } from '@angular/core';
import "animate.css";


interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }
}
