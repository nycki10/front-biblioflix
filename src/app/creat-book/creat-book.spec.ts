import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBook } from './creat-book';

describe('CreatBook', () => {
  let component: CreatBook;
  let fixture: ComponentFixture<CreatBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatBook],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
