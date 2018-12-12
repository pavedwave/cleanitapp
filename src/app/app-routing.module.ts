import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MapsComponent } from './maps/maps.component';
import { PhotosComponent } from './photos/photos.component';
import { StatsComponent } from './stats/stats.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
