import { Component, OnInit } from '@angular/core';
import { MockDataService } from "../services/mock-data.service";
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mockDropDownData;
  mockMultiDropDownData;
  titleContains;
  system;
  owner;
  requirementsource;
  iccflag;
  group;
  majorcategory;
  type;
  active;
  drworkbook;
  department;
  minorcategory;
  frequency;
  companywide;
  dataJson;
  itemsPath: MenuItem[];

  constructor(private mockService: MockDataService, private router: Router) {
    this.itemsPath = [
      { label: 'Search'},
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

  disable() {
    if (!this.titleContains || !this.system || !this.owner || !this.requirementsource || !this.iccflag ||
      !this.group || !this.majorcategory || !this.type || !this.active || !this.drworkbook || !this.department
       || !this.minorcategory || !this.frequency || !this.companywide) {
      return true;
    } else {
      return false;
    }
  }

  saveData() {
    if (!this.disable()) {
      this.dataJson = {
        'titleContains' : this.titleContains,
        'system' : this.system,
        'owner' : this.owner,
        'requirementsource' : this.requirementsource,
        'iccflag' : this.iccflag,
        'group' : this.group,
        'majorcategory' : this.majorcategory,
        'type' : this.type,
        'active' : this.active,
        'drworkbook' : this.drworkbook,
        'department' : this.department,
        'minorcategory' : this.minorcategory,
        'frequency' : this.frequency,
        'companywide' : this.companywide
      };
    }

    console.log('dataJson', this.dataJson);
    this.router.navigate(['documentlist']);
  }

  resetAll() {
        this.titleContains = '';
        this.system = '';
        this.owner = '';
        this.requirementsource = '';
        this.iccflag = '';
        this.group = '';
        this.majorcategory = '';
        this.type = '';
        this.active = '';
        this.drworkbook = '';
        this.department = '';
        this.minorcategory = '';
        this.frequency = '';
        this.companywide = '';
  }

}
