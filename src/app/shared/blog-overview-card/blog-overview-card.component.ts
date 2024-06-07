import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Blog = {
  author: string;
  comments: number;
  contentPreview: string;
  createdByMe: boolean;
  id: number;
  likedByMe: boolean;
  likes: number;
  title: string;
};

@Component({
  selector: 'app-blog-overview-card',
  templateUrl: './blog-overview-card.component.html',
  styleUrls: ['./blog-overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogOverviewCardComponent {
  @Input({ required: true }) blog!: Blog;
  @Input({ required: true }) index!: number;
}
