import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoosFormComponent } from './todoos-form.component';

describe('TodoosFormComponent', () => {
  let component: TodoosFormComponent;
  let fixture: ComponentFixture<TodoosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
