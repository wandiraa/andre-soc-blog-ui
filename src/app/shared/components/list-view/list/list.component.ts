import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
