import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridViewComponent implements OnInit {

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
