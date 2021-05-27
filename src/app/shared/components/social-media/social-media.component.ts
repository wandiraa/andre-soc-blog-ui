import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  socialMedia = [
    {
      id: 1,
      icon: 'fa-twitter',
      routeTo: 'https://twitter.com/',
    },
    {
      id: 2,
      icon: 'fa-linkedin-in',
      routeTo: 'https://linkedin.com/in/andre-rizkiana-wandira-98058b146/',
    },
    {
      id: 3,
      icon: 'fa-facebook-f',
      routeTo: 'https://www.facebook.com/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
