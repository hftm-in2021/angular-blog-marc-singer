import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlogBackendService, CreateBlog } from 'src/app/core/blog-backend.service';
import { LoadingStateService } from 'src/app/core/loading-state.service';

type BlogState = {
    // Optional error
    error?: string;
};
  
  @Injectable({providedIn: 'root', })
  export class BlogStateService {
    // Define the state
    #state = new BehaviorSubject<BlogState>({ error: undefined });
    state$ = this.#state.asObservable();  // Export only read only observable
  
    constructor(private blogService: BlogBackendService, private router: Router, private loadingState: LoadingStateService) {}
  
    // Adds a new blog entry
    async addBlog(entry: CreateBlog) {
        
        // Set state to loading
        this.#state.next({ error: undefined });
        this.loadingState.setLoadingState(true);
  
        try {
            // Add entry
            await this.blogService.addBlog(entry);
            // Move to overview
            this.router.navigate(['/overview']);
        } catch (error) {
            // On error return error message to component
            this.#state.next({
                error: (error as Error).message,
            });
        } finally {
            // Disable loading state in all cases
            this.loadingState.setLoadingState(false);
        }
    }
  }
