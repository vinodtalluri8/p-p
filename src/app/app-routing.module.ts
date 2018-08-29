import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { RegisterComponent } from "./register/register.component";
import { SearchDocumentListComponent } from "./search/search-document-list/search-document-list.component";


const routes: Routes = [
  // { path:'createevent', component: CreateEventComponent, children:[
  //   { path:'createeventresults', component: CreateEventResultsComponent}
  // ]},
  // { path:'createglobalregistration', component: CreateGlobalRegistrationComponent},
  // { path:'searchevents', component: SearchEventsComponent},
  // { path:'searchdocuments', component: SearchDocumentsComponent},
  // { path:'searcheventslist', component: SearchEventsListComponent},
  // { path:'modifyevent', component: ModifyEventComponent},
  // { path:'searchdocumentslist', component: SearchDocumentsListComponent},
  // { path:'createlistevent', component: CreateListEventComponent}
  { path:'search', component: SearchComponent},
  { path:'register', component: RegisterComponent},
  { path:'documentlist', component: SearchDocumentListComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
