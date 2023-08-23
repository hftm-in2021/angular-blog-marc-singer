import { Injectable } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingStateService {
  #state$ = new BehaviorSubject(false);
  state$ = this.#state$.asObservable(); // Export only read only observable

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.#state$.next(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.#state$.next(false);
          break;
        }
      }
    });
  }

  setLoadingState(isLoading: boolean) {
    this.#state$.next(isLoading);
  }

}
