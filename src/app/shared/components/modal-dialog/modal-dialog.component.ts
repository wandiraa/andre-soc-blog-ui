import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ModalDialog {
  title?: string;
  description?: string;
  buttonAction?: string;
  data?: any;
  closeText?: string;
  confirmText?: string;
  confirmClass?: string;
  isConfirm?: boolean;
  click?(): any;
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})

export class ModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: ModalDialog
  ) {
  }

  ngOnInit(): void
  {
    this.initDefault();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  initDefault(): void
  {
    this.data = {
      title: this.data.title ? this.data.title : 'Confirm',
      description: this.data.description ? this.data.description : 'Are you sure you want to remove this data?',
      click: this.data.click,
      closeText: this.data.closeText ? this.data.closeText : 'Back',
      confirmText: this.data.confirmText ? this.data.confirmText : 'Remove'
    };
  }
}
