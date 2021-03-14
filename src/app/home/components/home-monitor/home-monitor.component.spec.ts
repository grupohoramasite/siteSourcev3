import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMonitorComponent } from './home-monitor.component';

describe('HomeMonitorComponent', () => {
  let component: HomeMonitorComponent;
  let fixture: ComponentFixture<HomeMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
