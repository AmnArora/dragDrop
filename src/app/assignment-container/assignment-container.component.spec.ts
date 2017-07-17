import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentContainerComponent } from './assignment-container.component';

describe('AssignmentContainerComponent', () => {
  let component: AssignmentContainerComponent;
  let fixture: ComponentFixture<AssignmentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
