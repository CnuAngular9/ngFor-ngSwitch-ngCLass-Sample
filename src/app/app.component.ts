import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  month = 1;
  AllColors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

  isSelectedStyle = false;
}
