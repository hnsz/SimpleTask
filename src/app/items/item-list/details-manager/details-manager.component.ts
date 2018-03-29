import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-manager',
  templateUrl: './details-manager.component.html',
  styleUrls: ['./details-manager.component.css']
})
export class DetailsManagerComponent implements OnInit {
  public data;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.paramMap.get('id');
  }

}
