import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListViewComponent implements OnInit {

  @Input() items;
  @Output() remove = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(itemId): void
  {
    this.remove.emit(itemId);
  }

}
