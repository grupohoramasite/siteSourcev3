import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
