import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CrudService } from '../../shared/services/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-value-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ValueListComponent implements OnInit {

  constructor(private crudService: CrudService, public router: Router) { }
  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      custom: [
        {
          name: 'edit',
          title: '<i class="nb-edit"></i>'
        },
        // {
        //   name: 'delete',
        //   title: '<i class="nb-trash"></i>'
        // }
      ]
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Code',
        type: 'string',
      },
      lastName: {
        title: 'Name',
        type: 'string',
      }
    },
  };
  ngOnInit() {
  }
  addOptionsValue() {
    this.router.navigate(['/pages/customer/value/add']);
  }
}