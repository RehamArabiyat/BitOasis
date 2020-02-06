import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class BitServiceService {
  public subject = webSocket('wss://api2.poloniex.com');


  constructor() { }





  setValue(){
    this.subject.subscribe();
    this.subject.next({ "command": "subscribe", "channel": 1002 });
  }


  //{ "command": "subscribe", "channel": 1002 }

}
