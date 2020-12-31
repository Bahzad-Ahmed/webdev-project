import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
  }
  onCreateEmail(newID, newname,newsubject,date,newdata,type){
    this.dataservice.postdata(
      {id: newID,
        name: newname,
        subject: newsubject,
        datesent:date,
        data: newdata        
      }, type
    ).subscribe((response)=>{
      console.log('response:',response);
    });
  }

}
