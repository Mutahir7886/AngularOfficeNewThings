import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parrentMessage:string ;
  inputmessage:string;

check($event):any{
  this.parrentMessage = $event
}

ptag(){
  this.inputmessage='HELLO HOW ARE U'
}



}

