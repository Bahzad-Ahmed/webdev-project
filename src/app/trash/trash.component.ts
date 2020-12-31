import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  emails=[];
  constructor(public dataService : DataService,  public router : Router) { }

  ngOnInit(): void {
    this.dataService.getdeleted().subscribe((response:any)=>{
      this.emails = response;
    })

  }
  public selectEmail(email){
    
    this.dataService.post_select(email).subscribe((response)=>{
      console.log('response:',response);})
      this.dataService.post_selected_from("trash").subscribe((response)=>{
        console.log('response:',response);})
      this.router.navigateByUrl("view-email");
  }
  public del(i: {id,name,subject,datesent,data}){
    
    this.dataService.deltrash(i).subscribe((response)=>{
      console.log('response:',response);
    });
     window.location.reload(); 
  }
}
