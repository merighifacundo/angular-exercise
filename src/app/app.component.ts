import { Component, OnInit, Input } from '@angular/core';
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


  doFilter(event) {
    this.activitiesFiltered = this.activities;
    if (event.filterField) {
      this.activitiesFiltered = this.activities.filter(activity => {
        if (event.filterField === 'duration') {
          return this.getMins(Number(activity[event.filterField])) === event.filterValue;
        } else {
          return activity[event.filterField] === event.filterValue;
        }
      });
    }
  }

  getMins(activity) {
    const duration = (typeof activity === 'number') ? activity : activity.duration;
    const mins = duration / 60000;
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

  ngOnInit() {
    ajax('http://localhost:3000/api/activities')
    .subscribe(ajaxResponse => this.handleData(ajaxResponse.response));
  }
}


