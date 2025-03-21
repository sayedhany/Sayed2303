import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { EMPTY, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'orange-task';
  subscriptions = new Subscription();
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setPageTitle();
  }

  setPageTitle() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        switchMap((route) => route?.data ?? EMPTY),
        tap((data) => console.log(data))
      )
      .subscribe((data) => {
        this.titleService.setTitle(data['title']);
      });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  
}
