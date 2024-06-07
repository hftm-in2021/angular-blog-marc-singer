import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailPageComponent } from './blog-detail-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: BlogDetailPageComponent,
  },
];

@NgModule({
  declarations: [BlogDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogDetailPageModule {}
