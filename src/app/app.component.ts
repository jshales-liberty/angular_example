import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jonathans app';
  color = 'red';
  potato;

  catchTheThing(event){
this.potato =event;
  }
}
