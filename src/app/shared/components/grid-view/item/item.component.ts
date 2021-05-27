import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemGridComponent implements OnInit {

  @Input() item;
  @Output() remove = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(itemId): void
  {
    this.remove.emit(itemId);
  }

}
