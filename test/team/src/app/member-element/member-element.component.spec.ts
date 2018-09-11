import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberElementComponent } from './member-element.component';

describe('MemberElementComponent', () => {
  let component: MemberElementComponent;
  let fixture: ComponentFixture<MemberElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
