import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocumentListComponent } from './search-document-list.component';

describe('SearchDocumentListComponent', () => {
  let component: SearchDocumentListComponent;
  let fixture: ComponentFixture<SearchDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
