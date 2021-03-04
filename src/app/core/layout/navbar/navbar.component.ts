import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  mobileMenuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpened = !this.mobileMenuOpened;
  }

}
