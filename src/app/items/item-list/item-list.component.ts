import {NgModule, Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, transition, style, animate, query, stagger, state} from '@angular/animations';
import {TaskDbService} from '../../taskdb.service';
import {Task} from '../../task';

@Component({
  templateUrl: './item-list.component.html',
  animations: [
    trigger('tableAnimation', [
      transition('* => *', [
        query(':leave',  [
          stagger(200, [
            animate('500ms', style({opacity: 0}))

          ])
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0, transform: 'translateX(-100%)'}),
          stagger(200, [
            animate('500ms ease-in', style({opacity: .8, transform: 'translateX(0)'}))
          ])
        ], {optional: true}),
      ]),
    ]),
  ],
  selector: 'app-item-list',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  private tasks: Task[];
  public items: Task[] = [];
  private dbFile: any;
  public revision = '';
  public debugOutput1: any;
  public debugOutput2: any;

  constructor(public route: ActivatedRoute, public taskDbService: TaskDbService) {
    this.debugOutput1 = '-';
    this.debugOutput2 = '-';
  }

  ngOnInit() {
    this.load();
  }
  load() {
    this.debugOutput1 = this.debugOutput2 = '-';
    this.taskDbService.getTasks().subscribe(res => {this.processGetResponse(res); this.showItems(); });
  }
  save() {
    this.debugOutput1 = this.debugOutput2 = '-';
    this.taskDbService.putTasks(this.dbFile).subscribe(res => this.processSaveResponse(res), err => this.debugOutput2 = err);
  }
  private processGetResponse(res) {
    this.dbFile = res;
    this.tasks = res.root;
    this.revision = res._rev;
    this.debugOutput1 = res;
  }
  processSaveResponse(res) {
    if (res.ok === true) {
      this.dbFile._rev = res.rev;
      this.revision = res.rev;
    }
    this.debugOutput1 = res;

  }
  toggle() {
    this.debugOutput1 = 'toggle';
    if (this.items.length === 0) {
      this.showItems();
    } else {
      this.hideItems();
    }
  }
  showItems() {
    this.items = this.tasks;
  }
  hideItems() {
    this.items = [];
  }

}
