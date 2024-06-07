import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewCardComponent } from './blog-overview-card.component';

describe('BlogOverviewCardComponent', () => {
  let component: BlogOverviewCardComponent;
  let fixture: ComponentFixture<BlogOverviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogOverviewCardComponent],
    });
    fixture = TestBed.createComponent(BlogOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
