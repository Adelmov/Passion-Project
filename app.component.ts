import { Component } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passion-project';
  faSync = faSync;
}
