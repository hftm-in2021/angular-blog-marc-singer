import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogPageComponent } from './add-blog-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: AddBlogPageComponent,
  },
];

@NgModule({
  declarations: [AddBlogPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddBlogPageModule {}
