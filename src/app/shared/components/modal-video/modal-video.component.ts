import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VideoService} from '../../../_services/video.service';
import {VideoModel} from '../../../_models/video.model';
import {ActivityService} from '../../../_services/activity.service';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {

  videoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private videoService: VideoService,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    const max = this.data.feeds.reduce((prev, current) => (prev.y > current.y) ? prev : current);

    this.videoForm = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('Waseem Arshad', [Validators.required]),
      views: new FormControl(0),
      url: new FormControl('', [Validators.required])
    });
  }

  onSave(): void
  {
    const { value } = this.videoForm;
    // const formValue = new VideoModel(this.videoForm.value);

    this.videoService.addVideo(value).subscribe(video => {
      // console.log(video);
      this.createActivity(video.data.video);
      this.data.feeds.push(new VideoModel(video.data.video));
      this.dialogRef.close();
    });
  }

  createActivity(video): void
  {
    const requiredData = {
      user: 'Waseem Arshad',
      status: 'Upload a video',
      description: video.title,
      date: 'a seconds ago',
      icon: 'fas fa-video',
      imageUrl: 'https://img.icons8.com/bubbles/2x/user-male.png'
    };

    this.activityService.store(requiredData).subscribe(activity => {
      this.activityService.$activity.next([...this.activityService.$activity.value, activity.data.activity]);
    });
  }

}
