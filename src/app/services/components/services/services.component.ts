import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'services.securityaudit.title',
      description: 'services.securityaudit.description',
      imgsrc: '/assets/services/security@2x.png'
    },
    {
      title: 'services.implementation.title',
      description: 'services.implementation.description',
      imgsrc: '/assets/services/implementacion@2x.png'
    },
    {
      title: 'services.racadministration.title',
      description: 'services.racadministration.description',
      imgsrc: '/assets/services/oracleRAC@2x.png'
    },
    {
      title: 'services.standaloneadministration.title',
      description: 'services.standaloneadministration.description',
      imgsrc: '/assets/services/man-working-1200@2x.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
