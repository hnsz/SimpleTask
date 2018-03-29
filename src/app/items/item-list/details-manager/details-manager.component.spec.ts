import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsManagerComponent } from './details-manager.component';

describe('DetailsManagerComponent', () => {
  let component: DetailsManagerComponent;
  let fixture: ComponentFixture<DetailsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
