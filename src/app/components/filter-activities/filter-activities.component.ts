import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-activities',
  templateUrl: './filter-activities.component.html',
  styleUrls: ['./filter-activities.component.scss']
})
export class FilterActivitiesComponent {
  @Input() activities: any[];
  @Output() activitiesChange = new EventEmitter<any>();
  filterField: string = 'all';
  filterValue: number = 0;

  onFilterActivities() {
    switch (this.filterField) {
      case  'distance':
        this.activitiesChange.emit(
          this.filterByDistance(this.activities, this.filterValue)
        );
        break;
      case 'minutes':
        this.activitiesChange.emit(
          this.filterByMinutes(this.activities, this.filterValue)
        );
        break;
      default:
        this.activitiesChange.emit(
          this.activities
        );
        break;
    }
  }

  filterByMinutes(activities: any[], valueToFilter: number) {
    return activities
      .filter( activity => Math.trunc(activity.duration / 60000) == valueToFilter);
  }

  filterByDistance(activities: any[], valueToFilter: number) {
    return activities
      .filter( activity => {
        return Math.trunc(activity.distance / 1000) == valueToFilter;
      });
  }

}

