import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialLists } from './material-lists';

describe('MaterialLists', () => {
  let component: MaterialLists;
  let fixture: ComponentFixture<MaterialLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialLists],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
