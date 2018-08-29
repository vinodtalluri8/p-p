import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-document-list',
  templateUrl: './search-document-list.component.html',
  styleUrls: ['./search-document-list.component.css']
})
export class SearchDocumentListComponent implements OnInit {

sales;
  isPaginator;
  filterable;
  exportFileName;
  selectedRows;
  loading;
  displayRows;
  colHeaders;
  itemsPath: MenuItem[];
  home: MenuItem;
  mockDropDownData;
  selectedProgram;
  selectedFilter;

  constructor(private router: Router) {
     this.isPaginator = true;
    this.filterable = true;
    this.exportFileName = 'Checklists Scheduled';
    this.selectedRows = 15;
    this.loading = false;
    this.home = { icon: 'fa fa-home' };

    this.itemsPath = [
      { label: 'Search'},
      { label: 'Document List' }];

    this.displayRows = [{ label: '15', value: 15 },
    { label: '20', value: 20 }, { label: '30', value: 30 },
    { label: '50', value: 50 }, { label: '100', value: 100 }];

      this.colHeaders = [
      { field: 'code', header: 'Title'},
      { field: 'description', header: 'Abstract'},
      { field: 'dailyTradeReconFlag', header: 'Group'},
      { field: 'tradeReconFlag', header: 'Department'},
      { field: 'monthlyRollFwdFlag', header: 'Frequency'},
      { field: 'tradeFailThresholdPercent', header: 'System'},
      { field: 'posFailThresholdPercent', header: 'Owner'},
      { field: 'tradeFailThresholdShares', header: 'Type'},
      { field: 'posFailThresholdShares', header: 'Fund Type'},
      { field: 'activeFlag', header: 'Major'},
      { field: 'dailyTradeReconFlag', header: 'Minor'},
      { field: 'tradeReconFlag', header: 'Last Post / Cert Date'},
      { field: 'monthlyRollFwdFlag', header: 'Active'},
      { field: 'tradeFailThresholdPercent', header: 'Company Wide'}
    ];
  }

  ngOnInit() {
    this.selectedFilter = 'Active Only';
    this.sales = [
      {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''},
            {code: 'AAAAAA', description: 'This is description', dailyTradeReconFlag: 'Y', tradeReconFlag: 'Y', monthlyRollFwdFlag: 'Y', tradeFailThresholdPercent: '0.25', posFailThresholdPercent: '0.25', tradeFailThresholdShares: '10.0', posFailThresholdShares: '10.0', activeFlag: 'Y', a: ''}
           ];

  }

      checkAndEnablePage(value: number) {
    if (this.sales.length > value) {
      this.isPaginator = true;
    } else {
      this.isPaginator = false;
    }
    this.selectedRows = value;
    // console.log(' mesagepage ', this.msgs);
  }

  addNew() {
    this.router.navigate(['/maintenance/dataproviderassign/add']);
  }
  editDataProvider() {
    this.router.navigate(['/maintenance/dataproviderassign/edit']);
  }
}
