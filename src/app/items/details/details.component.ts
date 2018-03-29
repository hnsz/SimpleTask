import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Task} from '../../task';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() task: Task;


  constructor( )  { }

  ngOnInit() {
  }

}
