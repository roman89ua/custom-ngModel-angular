import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appState = 'on';

  handleChange(): void {
    console.log(this.appState);
  }
}
