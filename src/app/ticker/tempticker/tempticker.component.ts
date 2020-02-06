import { Component, OnInit } from '@angular/core';
import { BitServiceService } from 'src/app/services/bit-service.service';

@Component({
  selector: 'app-tempticker',
  templateUrl: './tempticker.component.html',
  styleUrls: ['./tempticker.component.scss']
})
export class TemptickerComponent implements OnInit {
tickerData;
  constructor(private bitService : BitServiceService ) {
    this.bitService.subject.subscribe(res => {
      //console.log(res);
      if(res[2]  && res[2].length>0  && res[2][0] == 171){
        this.tickerData = res[2];
      //  console.log(res[2]);
      }
    });

      }


  ngOnInit() {
  }

}
