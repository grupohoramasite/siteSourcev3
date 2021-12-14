import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatureComponent implements OnInit {
  features = [  ];

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.features = [
      {
        title: 'home.feature.backup.title',
        description: 'home.feature.backup.description',
        image: {
          src: 'assets/styles/SVG/backup-icon.svg',
          alt: this.translateService.instant('home.feature.backup.title')
        }
      },
      {
        title: 'home.feature.identity.title',
        description: 'home.feature.identity.description',
        image: {
          src: 'assets/styles/SVG/identity-icon.svg',
          alt: this.translateService.instant('home.feature.identity.title')
        }
      },
      {
        title: 'home.feature.high-availability.title',
        description: 'home.feature.high-availability.description',
        image: {
          src: 'assets/styles/SVG/high-availability-icon.svg',
          alt: this.translateService.instant('home.feature.high-availability.title')
        }
      },
    ];
  }

}
