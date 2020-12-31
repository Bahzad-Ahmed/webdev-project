import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InboxComponent} from './inbox/inbox.component';
import {OutboxComponent} from './outbox/outbox.component';
import {SpamComponent} from "./spam/spam.component";
import {TrashComponent} from "./trash/trash.component";
import {AboutComponent} from "./about/about.component";
import {ViewEmailComponent} from './view-email/view-email.component';
import {AddDataComponent} from "./add-data/add-data.component";



const routes: Routes = [
  {path : "", component: AboutComponent},
  {path : "inbox", component : InboxComponent},
  {path : "outbox", component : OutboxComponent},
  {path: "view-email", component: ViewEmailComponent},
  {path: "spam", component: SpamComponent},
  {path: "trash", component:TrashComponent},
  {path: "add-data",component: AddDataComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
