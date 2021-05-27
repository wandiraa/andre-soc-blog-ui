import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'file-attachment',
  templateUrl: './file-attachment.component.html',
  styleUrls: ['./file-attachment.component.scss']
})
export class FileAttachmentComponent implements OnInit {

  constructor() { }

  @Input() control: AbstractControl;
  @Input() iconButton = 'attach_file';
  @Input() textButton = 'File Attachment';
  @Input() multiple = false;
  files: Array<File> = [];

  ngOnInit(): void
  {
    if (this.control.value) {
      this.files = (Array.isArray(this.control.value)) ? this.control.value : [this.control.value];
    }
  }

  onSelectFile(event: any): void
  {
    if (event) {
      if (event.target.files.length > 0)
      {
        this.files = (this.multiple) ? [...this.files, event.target.files[0]] : [event.target.files[0]];
        this.control.setValue(this.files);
      }
    }
  }

  onRemove(index: number): void
  {
    this.files.splice(index, 1);
  }

}
