import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  messageFromChild: string = '';

  parentWillTakeAction(message) {
    this.messageFromChild = message;
  }
}
