import { Component, OnInit } from '@angular/core';
import { BitServiceService } from '../services/bit-service.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {

  constructor(private bitService : BitServiceService ) {



  }

  ngOnInit() {
    this.bitService.setValue();
  }


}
