import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() message: string = 'Hi I am here';
  @Output() informParent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  takeAction() {
    this.informParent.emit('The child says ' + this.message);
  }
}
