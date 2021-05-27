export class ChannelModel {
  id: string;
  name: string;
  imageUrl: string;

  constructor(channel) {
    if (channel._id) {
      this.id = channel._id;
    }
    this.name = channel.name;
    this.imageUrl = channel.imageUrl;
  }
}

export interface ChannelInterface {
  id: string;
  name: string;
  imageUrl: string;
}
