import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  emails=[];
  constructor(public dataService : DataService,
    public router : Router) { }

  ngOnInit(): void {
    this.dataService.getInbox().subscribe((response:any)=>{
      this.emails = response;
    })

  }
  public selectEmail(email){
    console.log(email);
    this.dataService.post_select(email).subscribe((response)=>{
      console.log('response:',response);})
    this.dataService.post_selected_from("inbox").subscribe((response)=>{
      console.log('response:',response);})
    this.router.navigateByUrl("view-email");
  }

  public del(i: {id,name,subject,datesent,data}){
    console.log(i);
    this.dataService.delinbox(i).subscribe((response)=>{
      console.log('response:',response);
    });
    window.location.reload();
    
  }
}
