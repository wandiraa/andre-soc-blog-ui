import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentService } from '../../../_services/document.service';
import {ActivityService} from '../../../_services/activity.service';

@Component({
  selector: 'app-modal-document',
  templateUrl: './modal-document.component.html',
  styleUrls: ['./modal-document.component.scss']
})
export class ModalDocumentComponent implements OnInit {

  documentForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private documentService: DocumentService,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    const max = this.data.feeds.reduce((prev, current) => (prev.y > current.y) ? prev : current);

    this.documentForm = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('Arshad Noor', [Validators.required]),
      views: new FormControl(0),
      url: new FormControl('', [Validators.required])
    });
  }

  onSave(): void
  {
    const { value } = this.documentForm;

    const formData = new FormData();

    formData.append('title', value.title);
    formData.append('author', value.author);
    formData.append('views', value.views);
    formData.append('url', value.url[0]);

    this.documentService.addDocuments(formData)
      .subscribe(document => {
        this.createActivity(document.data.document);
        this.data.feeds.push(document.data.document);
        this.dialogRef.close();
    });
  }

  createActivity(document): void
  {
    const requiredData = {
      user: 'Waseem Arshad',
      status: 'Upload a document',
      description: document.title,
      date: 'a seconds ago',
      icon: 'far fa-sticky-note',
      imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png'
    };

    this.activityService.store(requiredData).subscribe(activity => {
      this.activityService.$activity.next([...this.activityService.$activity.value, activity.data.activity]);
    });
  }

}
