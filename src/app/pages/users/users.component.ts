import { Component } from '@angular/core';
import { users } from '../../../mock-db/users';
import { TableHeader } from 'src/interfaces/tableheader';
import { TableRow } from 'src/interfaces/tablerow';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [...users];

  headerData: TableHeader[] = [
    { name: 'Name' },
    { name: 'Role'},
    { name: 'Username' }
  ];

  rowData: TableRow[] = [];

  constructor() {
    this.rowData = this.users.map((user) => ({
      values: [user.firstName + " " + user.lastName, user.role, user.username]
    }));
  }
}