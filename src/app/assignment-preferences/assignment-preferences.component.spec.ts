import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPreferencesComponent } from './assignment-preferences.component';

describe('AssignmentPreferencesComponent', () => {
  let component: AssignmentPreferencesComponent;
  let fixture: ComponentFixture<AssignmentPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
