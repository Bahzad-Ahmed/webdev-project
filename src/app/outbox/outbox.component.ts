import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
  emails=[];
  constructor(public dataService : DataService,
    public router : Router) { }

  ngOnInit(): void {
    this.dataService.getoutbox().subscribe((response:any)=>{
      this.emails = response;
    })

  }
  public selectEmail(email){
    console.log(email);
    this.dataService.post_select(email).subscribe((response)=>{
      console.log('response:',response);})
      this.dataService.post_selected_from("outbox").subscribe((response)=>{
        console.log('response:',response);})
      this.router.navigateByUrl("view-email");
  }
  public del(i: {id,name,subject,datesent,data}){
    console.log(i);
    this.dataService.deloutbox(i).subscribe((response)=>{
      console.log('response:',response);
    });
    window.location.reload();
    
}
}
