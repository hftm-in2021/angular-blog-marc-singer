import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogStateService } from './state/blog-state.service';
import { CreateBlog } from 'src/app/core/blog-backend.service';

type InvalidFormGroup = {
  title: FormControl<string | null>;
  content: FormControl<string | null>;
};

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})

export class AddBlogPageComponent implements OnInit {
  form!: FormGroup<InvalidFormGroup>;

  constructor(public blogStateService: BlogStateService) {}

  ngOnInit() {
    this.form = new FormGroup<InvalidFormGroup>({
      title: new FormControl<string | null>('existing title', [Validators.required, Validators.pattern('^[A-Z]+(.)*'),]),
      content: new FormControl<string | null>(null),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.blogStateService.addBlog(this.form.value as CreateBlog);
    }
  }

}
