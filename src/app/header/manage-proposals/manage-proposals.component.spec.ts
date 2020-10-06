import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProposalsComponent } from './manage-proposals.component';

describe('ManageProposalsComponent', () => {
  let component: ManageProposalsComponent;
  let fixture: ComponentFixture<ManageProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
