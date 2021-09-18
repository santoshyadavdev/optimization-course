import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DepartmentItem } from '../department-datasource';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentListComponent implements OnInit {

  displayedColumns = ['id', 'name'];

  @Input() deptList: DepartmentItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
