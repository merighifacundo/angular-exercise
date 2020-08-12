import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'run-statistics';
  activities: any[];
  activitiesFiltered: any[];

  ngOnInit() {
    ajax('http://localhost:3000/api/activities')
      .subscribe(ajaxResponse => this.handleData(ajaxResponse.response));
  }

  getMins(activity) {
    const mins = activity.duration / 60000;
    return Math.trunc(mins);
  }

  getPace(activity) {
    return activity.distance / activity.duration;
  }

  getSec(activity) {
    const mins = activity.duration / 60000;
    const secs = mins % 1;
    return Math.trunc(secs * 60);
  }

  handleData(data) {
    this.activities = data.filter((activity) => activity.distance > 0);
    this.activitiesFiltered = this.activities.slice();
  }

  onActivitiesFiltered(activities: any[]) {
    this.activitiesFiltered = activities;
  }
}


