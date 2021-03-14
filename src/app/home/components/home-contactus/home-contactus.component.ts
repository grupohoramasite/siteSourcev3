import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-contactus',
  templateUrl: './home-contactus.component.html',
  styleUrls: ['./home-contactus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
