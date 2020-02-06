import { Component, OnInit } from '@angular/core';
import { BitServiceService } from 'src/app/services/bit-service.service';

@Component({
  selector: 'app-view-ticker',
  templateUrl: './view-ticker.component.html',
  styleUrls: ['./view-ticker.component.scss']
})
export class ViewTickerComponent implements OnInit {

  tickerData;
  constructor(private bitService : BitServiceService ) {
    this.bitService.subject.subscribe(res => {
      //console.log(res);
      if(res[2]  && res[2].length>0  && res[2][0] == 171){
        this.tickerData = res[2];
        console.log(res[2]);
      }
    });

      }

  ngOnInit() {
  }

}
