import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewCardModule } from '../../shared/blog-overview-card/blog-overview-card.module';
import { BlogOverviewPageComponent } from './blog-overview-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogOverviewPageComponent,
  },
];

@NgModule({
  declarations: [BlogOverviewPageComponent],
  imports: [
    CommonModule,
    BlogOverviewCardModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogOverviewPageModule {}
