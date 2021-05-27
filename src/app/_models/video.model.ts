export class VideoModel {
  id: string;
  title: string;
  author: string;
  views: number;
  url: string;

  constructor(video) {
    if (video._id) {
      this.id = video._id;
    }
    this.title = video.title;
    this.author = video.author;
    this.views = video.views;
    this.url = this.setVideo(video.url);
  }

  setVideo(videoUrl): any {
    const REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

    const convertToArr = videoUrl.match(REGEX);

    if (convertToArr.length > 0)
    {
      videoUrl = convertToArr[1];
    }

    return videoUrl;
  }
}

export interface VideoInterface {
  id: string;
  title: string;
  author: string;
  views: string;
  url: string;
}
