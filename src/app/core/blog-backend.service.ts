import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

import { z } from 'zod';
import { Observable, map } from 'rxjs';

const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  contentPreview: z.string(),
  author: z.string(),
  likes: z.number(),
  comments: z.number(),
  likedByMe: z.boolean(),
  createdByMe: z.boolean(),
});

const BlogArraySchema = z.array(BlogSchema);

const CreateBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlog = z.infer<typeof CreateBlogSchema>;

export type Blog = z.infer<typeof BlogSchema>;

@Injectable({
  providedIn: 'root',
})
export class BlogBackendService {
  constructor(private httpClient: HttpClient) {}

  getBlogPosts(): Observable<Blog[]> {
    return this.httpClient
      .get<Blog[]>(`${environment.serviceUrl}/entries`)
      .pipe(map((blogs) => BlogArraySchema.parse(blogs)));
  }

  addBlog(blog: CreateBlog) {
    CreateBlogSchema.parse(blog);
    return this.httpClient
      .post<void>(`${environment.serviceUrl}/entries`, blog)
      .subscribe(() => console.log('Sucessfully added new blog entry'), 
        (err) => console.error('Error when adding new blog entry: ', err));
  }
}
