import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatureComponent implements OnInit {
  features = [
    {
      title: this.translateService.instant('home.feature.backup.title'),
      description: this.translateService.instant('home.feature.backup.description'),
      image: {
        src: 'assets/styles/SVG/backup-icon.svg',
        alt: this.translateService.instant('home.feature.backup.title')
      }
    },
    {
      title: this.translateService.instant('home.feature.identity.title'),
      description: this.translateService.instant('home.feature.identity.description'),
      image: {
        src: 'assets/styles/SVG/identity-icon.svg',
        alt: this.translateService.instant('home.feature.identity.title')
      }
    },
    {
      title: this.translateService.instant('home.feature.high-availability.title'),
      description: this.translateService.instant('home.feature.high-availability.description'),
      image: {
        src: 'assets/styles/SVG/high-availability-icon.svg',
        alt: this.translateService.instant('home.feature.high-availability.title')
      }
    },
  ];

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
