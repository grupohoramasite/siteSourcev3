import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvailabityComponent } from './home-availabity.component';

describe('HomeAvailabityComponent', () => {
  let component: HomeAvailabityComponent;
  let fixture: ComponentFixture<HomeAvailabityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAvailabityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAvailabityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
