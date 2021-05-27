import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalVideoComponent } from '../modal-video/modal-video.component';
import { ModalPeopleComponent } from '../modal-people/modal-people.component';
import { ModalDocumentComponent } from '../modal-document/modal-document.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit {

  @Input() feeds;
  @Input() isLabel = true;
  @Input() type = 'videos';
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  constructor(
    public _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  savePlayer(player): void {
    this.player = player;
  }

  onStateChange(event): void {
  }

  openForm(): void {
    if (this.type === 'videos') {
      this._dialog.open(ModalVideoComponent, {
        data: {
          feeds: this.feeds
        },
        autoFocus: false,
        width: '600px'
      });
    }

    if (this.type === 'people') {
      this._dialog.open(ModalPeopleComponent, {
        data: {
          feeds: this.feeds
        },
        autoFocus: false,
        width: '600px'
      });
    }

    if (this.type === 'documents') {
      this._dialog.open(ModalDocumentComponent, {
        data: {
          feeds: this.feeds
        },
        autoFocus: false,
        width: '600px'
      });
    }
  }

}
