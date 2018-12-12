import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitenavComponent } from './sitenav/sitenav.component';
import { UsersComponent } from './users/users.component';
import { StatsComponent } from './stats/stats.component';
import { MapsComponent } from './maps/maps.component';
import { PhotosComponent } from './photos/photos.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    SitenavComponent,
    UsersComponent,
    StatsComponent,
    MapsComponent,
    PhotosComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
