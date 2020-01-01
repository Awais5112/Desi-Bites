import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnacksPage } from './add-snacks.page';

describe('AddSnacksPage', () => {
  let component: AddSnacksPage;
  let fixture: ComponentFixture<AddSnacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSnacksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
