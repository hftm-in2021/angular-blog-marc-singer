import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogOverviewCardComponent } from './blog-overview-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [BlogOverviewCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [BlogOverviewCardComponent],
})
export class BlogOverviewCardModule {}
