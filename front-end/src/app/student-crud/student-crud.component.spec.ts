import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudencrudComponent } from './student-crud.component';

describe('StudentCrudComponent', () => {
  let component: StudencrudComponent;
  let fixture: ComponentFixture<StudencrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudencrudComponent]
    });
    fixture = TestBed.createComponent(StudencrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
