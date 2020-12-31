import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-email',
  templateUrl: './view-email.component.html',
  styleUrls: ['./view-email.component.css']
})
export class ViewEmailComponent implements OnInit {

  a={};
  from;
  constructor(public dataservice : DataService, public router : Router) { }

  ngOnInit(): void {
    
    this.dataservice.get_select().subscribe((response:any)=>{
      this.a=response;
      console.log(this.a)
    });
    
    this.dataservice.getselectedfrom().subscribe((response:any)=>{
  
      console.log(response)
      this.from=response.f
    });
    
  }
  public delitem(){
    if (this.from=="inbox"){
      this.dataservice.delinbox(this.a).subscribe((response)=>{
        console.log('response:',response);
      this.router.navigateByUrl("inbox");
      });
    }
    else if (this.from=="outbox"){
      this.dataservice.deloutbox(this.a).subscribe((response)=>{
        console.log('response:',response);
        this.router.navigateByUrl("outbox");
      });
    }
    else if (this.from=="spam"){
      this.dataservice.delspam(this.a).subscribe((response)=>{
        console.log('response:',response);
        this.router.navigateByUrl("spam");
      });
    }
    else if (this.from=="trash"){
      this.dataservice.deltrash(this.a).subscribe((response)=>{
        console.log('response:',response);
      });
      this.router.navigateByUrl("trash");
    }
  }
  public tospam(){
    this.dataservice.tospam(this.a).subscribe((response)=>{
      console.log('response:',response);
    });
    this.router.navigateByUrl("inbox");
  }
}
