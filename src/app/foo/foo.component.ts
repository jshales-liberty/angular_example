import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
thing="222222222"
@Input() title;
@Output() spud = new EventEmitter();

  constructor() { }
clickedTheButton(){
  this.spud.emit(this.thing);
}
  ngOnInit() {
  }

}
