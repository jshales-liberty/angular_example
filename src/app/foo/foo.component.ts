import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

@Input() title;

  constructor() { }

  ngOnInit() {
  }

}
