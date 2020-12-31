import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent implements OnInit {
  emails=[];
  constructor(public dataService : DataService , 
    public router : Router) { }

  ngOnInit(): void {
    this.dataService.getspam().subscribe((response:any)=>{
      this.emails = response;
    })

  }
  public selectEmail(email){
    console.log(email);
    this.dataService.post_select(email).subscribe((response)=>{
      console.log('response:',response);})
      this.dataService.post_selected_from("spam").subscribe((response)=>{
        console.log('response:',response);})
      this.router.navigateByUrl("view-email");
  }
  public del(i: {id,name,subject,datesent,data}){
    console.log(i);
    this.dataService.delspam(i).subscribe((response)=>{
      console.log('response:',response);
    });
    window.location.reload();
    
  }
}