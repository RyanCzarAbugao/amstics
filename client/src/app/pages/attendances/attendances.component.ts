import { Component } from '@angular/core';
import { attendances } from '../../../mock-db/attendances';
import { TableHeader } from 'src/interfaces/tableheader';
import { TableRow } from 'src/interfaces/tablerow';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent {
  attendances = [...attendances];

  headerData: TableHeader[] = [
    { name: 'Date' },
    { name: 'Time' },
    { name: 'Status'},
    { name: 'Student' },
    { name: 'Class' },
    { name: 'Subject' },
    { name: 'Faculty' }
  ];

  rowData: TableRow[] = [];

  constructor() {
    this.rowData = this.attendances.map((attendance) => ({
      values: [
        new Date(attendance.date).toLocaleDateString("en-US"), 
        new Date(attendance.time).toLocaleTimeString(), 
        attendance.status, 
        attendance.student, 
        attendance.class, 
        attendance.subject, 
        attendance.faculty]
    }));
  }
}