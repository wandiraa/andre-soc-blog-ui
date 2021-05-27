import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PeopleService} from '../../../_services/people.service';
import {PeopleModel} from '../../../_models/people.model';

@Component({
  selector: 'app-modal-people',
  templateUrl: './modal-people.component.html',
  styleUrls: ['./modal-people.component.scss']
})
export class ModalPeopleComponent implements OnInit {

  peopleForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    const max = this.data.feeds.reduce((prev, current) => (prev.y > current.y) ? prev : current);

    this.peopleForm = this._formBuilder.group({
      title: new FormControl('Lorem Ipsum', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      views: new FormControl(0),
      url: new FormControl('', [Validators.required])
    });
  }

  onSave(): void
  {
    const { value } = this.peopleForm;
    const formData = new FormData();

    formData.append('title', value.title);
    formData.append('author', value.author);
    formData.append('views', value.views);
    formData.append('url', value.url[0]);

    this.peopleService.addPeople(formData)
      .subscribe(people => {
        this.data.feeds.push(people.data.people);
        this.dialogRef.close();
      });
  }

}
