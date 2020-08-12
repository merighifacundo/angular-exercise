import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterActivitiesComponent } from './filter-activities.component';

describe('FilterActivitiesComponent', () => {
  const componentName = 'FilterActivitiesComponent';
  const activitiesMock = [
    {
      distance: 5553,
      duration: 2055152
    }, {
      distance: 1000,
      duration: 211155152
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FilterActivitiesComponent
      ],
    }).compileComponents();
  }));

  it(`should create the ${componentName}`, () => {
    const fixture = TestBed.createComponent(FilterActivitiesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should filter by minutes`, () => {
    const fixture = TestBed.createComponent(FilterActivitiesComponent);
    const app = fixture.componentInstance;
    const filtered = app.filterByMinutes(activitiesMock, 34);
    expect(filtered.length).toBe(1);
  });

  it(`should filter by distance`, () => {
    const fixture = TestBed.createComponent(FilterActivitiesComponent);
    const app = fixture.componentInstance;
    const filtered = app.filterByDistance(activitiesMock, 5);
    expect(filtered.length).toBe(1);
  });
});
