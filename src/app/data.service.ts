import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getInbox(){
    return this.httpClient.get<any[]>(`${environment.apiBaseRoute}/get-inbox`)
  }

  public getoutbox(){
    return this.httpClient.get<any[]>(`${environment.apiBaseRoute}/get-outbox`)
  }

  public getspam(){
    return this.httpClient.get<any[]>(`${environment.apiBaseRoute}/get-spam`)
  }

  public getdeleted(){
    return this.httpClient.get<any[]>(`${environment.apiBaseRoute}/get-trash`)
  }

  public get_select(){
    return this.httpClient.get<any>(`${environment.apiBaseRoute}/get-select`); 
  }

  public getselectedfrom(){
    return this.httpClient.get<any>(`${environment.apiBaseRoute}/getselectedfrom`);
  }

  public postdata(data: any, type){
    if (type === "spam"){
      return this.httpClient.post<any>(`${environment.apiBaseRoute}/postspam`,data)
    }
    if (type=== "inbox"){
      return this.httpClient.post<any>(`${environment.apiBaseRoute}/postinbox`,data)
    }
    if (type==="outbox"){
      return this.httpClient.post<any>(`${environment.apiBaseRoute}/postoutbox`,data)
    }
    if (type=== "trash"){
      return this.httpClient.post<any>(`${environment.apiBaseRoute}/posttrash`,data)
    }
  }

  public delinbox(entry:any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/from-inbox-to-trash`,entry)
  }

  public delspam(entry:any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/from-spam-to-trash`,entry)
  }

  public deltrash(entry:any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/prem-delete-trash`,entry)
  }

  public deloutbox(entry:any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/prem-delete-outbox`,entry)
  }

  public post_select(entry: any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/post-select`,entry)
  }

  public post_selected_from(data: string){
    return this.httpClient.post<string>(`${environment.apiBaseRoute}/post-select-from`,{f:data})
  }
  public tospam(entry:any){
    return this.httpClient.post<any>(`${environment.apiBaseRoute}/from-inbox-to-spam`,entry)
  }
}