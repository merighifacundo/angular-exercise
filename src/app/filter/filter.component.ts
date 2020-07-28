import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  filterField: string = '';
  filterValue: number = 0;
  @Output() doFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  emitFilter(): void {
    const values = { filterField: this.filterField, filterValue: this.filterValue };
    this.emit(values);
  }

  clearFilter() {
    this.filterField = '';
    this.filterValue = 0;
    this.emit({ filterField: '', filterValue: 0 });
  }

  emit(values: object): void {
    this.doFilter.emit(values);
  }

}
