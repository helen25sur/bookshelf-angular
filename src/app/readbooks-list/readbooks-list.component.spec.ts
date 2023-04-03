import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbooksListComponent } from './readbooks-list.component';

describe('ReadbooksListComponent', () => {
  let component: ReadbooksListComponent;
  let fixture: ComponentFixture<ReadbooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadbooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadbooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
