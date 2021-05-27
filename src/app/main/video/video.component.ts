import {Component, DoCheck, OnInit} from '@angular/core';
import { VideoInterface, VideoModel } from '../../_models/video.model';
import { VideoService } from '../../_services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, DoCheck {

  videos: VideoInterface[] = [];

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.getVideos();
  }

  ngDoCheck(): void {
    if (this.videoService.$videos.value.length !== this.videos.length) {
      this.getVideos();
    }
  }

  getVideos(): void
  {
    this.videoService.getVideos().subscribe(videos => {
      this.videoService.$videos.next(videos.map(video => new VideoModel(video)));
      this.videos = videos.map(video => new VideoModel(video));
    });
  }

}
