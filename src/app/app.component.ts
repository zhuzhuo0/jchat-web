import { Component } from '@angular/core';
import '../assets/js/jmessage-sdk-web.2.6.0.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

declare var JMessage: any;

export class AppComponent {
  title = 'app';

  jmessage: any;

  constructor() {
    this.jmessage = new JMessage();
  }

  imInit() {

  }
}
