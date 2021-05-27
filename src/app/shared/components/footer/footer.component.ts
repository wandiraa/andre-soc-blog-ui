import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  date = new Date();
  menusFirst = [
    {
      name: 'About',
      routeTo: '#'
    },
    {
      name: 'For Business',
      routeTo: '#'
    },
    {
      name: 'Suggestions',
      routeTo: '#'
    },
    {
      name: 'Help & FAQs',
      routeTo: '#'
    },
    {
      name: 'Contacts',
      routeTo: '#'
    },
    {
      name: 'Pricing',
      routeTo: '#'
    }
  ];
  menusSecond = [
    {
      name: 'Privacy',
      routeTo: '#'
    },
    {
      name: 'Terms',
      routeTo: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
