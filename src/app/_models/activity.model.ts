export class ActivityModel {
  id: string;
  user: string;
  status: string;
  description: string;
  date: string;
  icon: string;
  imageUrl: string;

  constructor(activity) {
    if (activity._id) {
      this.id = activity._id;
    }
    this.user = activity.user;
    this.status = activity.status;
    this.description = activity.description;
    this.date = activity.date;
    this.icon = activity.icon;
    this.imageUrl = activity.imageUrl;
  }
}

export interface ActivityInterface {
  id: string;
  user: string;
  status: string;
  description: string;
  date: string;
  icon: string;
  imageUrl: string;
}
