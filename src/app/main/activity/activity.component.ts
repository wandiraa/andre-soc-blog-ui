import {Component, DoCheck, OnInit} from '@angular/core';
import { ActivityInterface, ActivityModel } from '../../_models/activity.model';
import { ActivityService } from '../../_services/activity.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogComponent} from '../../shared/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, DoCheck {

  activities: ActivityInterface[] = [];

  constructor(
    private activityService: ActivityService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getActivities();
  }

  ngDoCheck(): void
  {
    if (this.activities.length !== this.activityService.$activity.value.length) {
      this.getActivities();
    }
  }

  getActivities(): void
  {
    this.activityService.getActivities().subscribe(activities => {
      this.activityService.$activity.next(activities.map(activity => new ActivityModel(activity)));
      this.activities = activities.map(activity => new ActivityModel(activity));
    });
  }

  onRemove(activityId): void {
    this.dialog.open(ModalDialogComponent, {
      data: {
        title: 'Attention',
        description: 'Are you sure want to remove your Activity?',
        confirmText: 'Yes',
        click: () => this.onRemoveConfirm(activityId)
      },
      autoFocus: false,
      width: '600px'
    });
  }

  onRemoveConfirm(activityId): void
  {
    this.activityService.remove(activityId).subscribe(activities => {
      this.activities = this.activities.filter(activity => activity.id !== activityId);
    });
  }

}
