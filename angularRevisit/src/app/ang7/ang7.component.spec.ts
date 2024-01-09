import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang7Component } from './ang7.component';

describe('Ang7Component', () => {
  let component: Ang7Component;
  let fixture: ComponentFixture<Ang7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ang7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
