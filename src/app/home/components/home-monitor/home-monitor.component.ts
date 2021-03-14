import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-monitor',
  templateUrl: './home-monitor.component.html',
  styleUrls: ['./home-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMonitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
