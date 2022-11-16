import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animation';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit  {
  fabButtons = [
    {
      icon: 'fa-whatsapp',
      link: 'https://wa.me/+905316712079/?text=%C3%87obanbey%20Websitesine%20Ho%C5%9F%20Geldiniz'
    },
    {
      icon: 'fa-facebook',
      link: 'https://www.facebook.com/cobanbeyticaretodasi/'
    },
    {
      icon: 'fa-instagram',
      link: 'https://www.instagram.com/cobanbeyticaretodasi/?igshid=t3m6jmo1mw1i'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() { }

  ngOnInit(): void {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
