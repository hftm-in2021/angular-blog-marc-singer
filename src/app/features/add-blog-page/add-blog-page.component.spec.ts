import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogPageComponent } from './add-blog-page.component';

describe('AddBlogPageComponent', () => {
  let component: AddBlogPageComponent;
  let fixture: ComponentFixture<AddBlogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogPageComponent],
    });
    fixture = TestBed.createComponent(AddBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
