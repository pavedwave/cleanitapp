import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTasks().subscribe(
      data => this.tasks$ = data 
    );
  }

}
