import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor() { }

  opened: boolean;
  
  toggleSidenav() {
    this.opened = !this.opened;
  }

}
