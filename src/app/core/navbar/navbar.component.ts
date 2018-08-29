
/**
 * This file should contains all logic
 * or the data releated to side nav bar
 */

import {
  Component, OnDestroy, ViewEncapsulation, Input, HostListener, Inject, OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, RouterLink, UrlSegment, RouterLinkActive } from '@angular/router';
import {
  MediaChange,
  MatchMedia,
  ObservableMedia,
  BreakPointRegistry
} from '@angular/flex-layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      displayName: 'Search',
      route: 'search'
      // children: [
      //   {
      //     displayName: 'Create Event',
      //     route: 'createevent'
      //   },
      //   {
      //     displayName: 'Create Global Registration',
      //     route: 'createglobalregistration'
      //   }
      //  ]
    },
    {
      displayName: 'Register',
      route: 'register'
      // children: [
      //   {
      //     displayName: 'Search Events',
      //     route: 'searchevents'
      //   },
      //   {
      //     displayName: 'Search Documents',
      //     route: 'searchdocuments'
      //   }
      //  ]
    },
    {
      displayName: 'User Guide',
      route: ''
    }
  ];
  ngOnInit() {
  }

}
