import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './inbox/inbox.component';
import { TrashComponent } from './trash/trash.component';
import { AboutComponent } from './about/about.component';
import { SpamComponent } from './spam/spam.component';
import { ViewEmailComponent } from './view-email/view-email.component';
import { OutboxComponent } from './outbox/outbox.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDataComponent } from './add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InboxComponent,
    TrashComponent,
    AboutComponent,
    SpamComponent,
    ViewEmailComponent,
    OutboxComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
