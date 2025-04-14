import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExComponent } from './list-ex.component';

describe('ListExComponent', () => {
  let component: ListExComponent;
  let fixture: ComponentFixture<ListExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
