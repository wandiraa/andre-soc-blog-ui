import { Component, OnInit } from '@angular/core';
import { ChannelInterface, ChannelModel } from '../../_models/channel.model';
import { ChannelService } from '../../_services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels: ChannelInterface[];

  constructor(
    private channelService: ChannelService
  ) { }

  ngOnInit(): void {
    this.getChannels();
  }

  getChannels(): void
  {
    this.channelService.getChannels().subscribe(channels => {
      this.channels = channels.map(channel => new ChannelModel(channel));
    });
  }

  onRemove(channelId): void
  {
    this.channels = this.channels.filter(channel => channel.id !== channelId);
  }

}
