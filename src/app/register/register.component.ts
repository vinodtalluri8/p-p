import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../services/mock-data.service";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 mockDropDownData;
  mockMultiDropDownData;
  group;
  owner;
  fundtype;
  abstract1;
  selectedSystem;
  majorcategory;
  type;
  document;
  search;
  department;
  minorcategory;
  frequency;
  companywide;
  documenttitle;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService) {
    this.itemsPath = [
      { label: 'Register'},
      ];
  }

  ngOnInit() {
    this.preloadData();
  }

  preloadData() {
    this.mockService.getDropdownData().subscribe(
      (data) => {
        this.mockDropDownData = data;
      }
    );
    this.mockService.getMultiDropdownData().subscribe(
      (data) => {
        this.mockMultiDropDownData = data;
      }
    );
  }

    changeSystem(event) {
    if (event === 'none') {
      this.selectedSystem = [];
    } else {
      this.selectedSystem = event;
    }
  }

  disable() {
    if (!this.group || !this.owner || !this.fundtype || !this.abstract1 || !this.selectedSystem ||
      !this.majorcategory || !this.type || !this.document || !this.search || !this.department || !this.minorcategory
       || !this.frequency || !this.documenttitle || !this.companywide) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'group' : this.group,
        'owner' : this.owner,
        'fundtype' : this.fundtype,
        'abstract1' : this.abstract1,
        'selectedSystem' : this.selectedSystem,
        'majorcategory' : this.majorcategory,
        'type' : this.type,
        'document' : this.document,
        'search' : this.search,
        'department' : this.department,
        'minorcategory' : this.minorcategory,
        'frequency' : this.frequency,
        'companywide' : this.companywide,
        'documenttitle' : this.documenttitle
      };
    }

    console.log('dataJson', this.dataJson);
  }

  resetAll() {
      this.group = '';
      this.owner = '';
      this.fundtype = '';
      this.abstract1 = '';
      this.selectedSystem = [];
      this.majorcategory = '';
      this.type = '';
      this.document = '';
      this.search = '';
      this.department = '';
      this.minorcategory = '';
      this.frequency = '';
      this.companywide = '';
      this.documenttitle = '';
  }

}
