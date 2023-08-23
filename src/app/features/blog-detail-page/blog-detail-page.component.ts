import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
})
export class BlogDetailPageComponent {
  @Input({ required: true }) id!: number;
}
