import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ModalVideoComponent} from '../modal-video/modal-video.component';
import {VideoService} from '../../../_services/video.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  menus = [
    {
      name: 'Video',
      routeTo: '#'
    },
    {
      name: 'People',
      routeTo: '#'
    },
    {
      name: 'Documents',
      routeTo: '#'
    },
    {
      name: 'Events',
      routeTo: '#'
    },
    {
      name: 'Communities',
      routeTo: '#'
    },
    {
      name: 'Favorites',
      routeTo: '#'
    },
    {
      name: 'Channels',
      routeTo: '#'
    }
  ];

  videos = [];

  constructor(
    public dialog: MatDialog,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.videos = this.videoService.$videos.value;
  }

  open(): void
  {
    this.dialog.open(ModalVideoComponent, {
      data: {
        feeds: this.videoService.$videos.value
      },
      autoFocus: false,
      width: '600px'
    });
  }

}
