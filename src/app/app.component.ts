import { Component, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component'
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'c4c';
  event$ 
 
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    
    this.event$ = this.router.events
      .subscribe(
        ( event: NavigationEvent ) => {
          if ( event instanceof NavigationStart ) {

            if (event.url === '/home' || event.url === '/trainee/evaluate' || event.url === '/' ) {
              this.document.body.classList.remove('flex');
              this.document.body.classList.remove('flex-col');
              this.document.body.classList.remove('min-h-screen');
              this.document.body.classList.remove('bg-custom-gray-800');

              const nav = document.getElementsByTagName("nav");

              nav[0].classList.remove('shadow-custom-shadow');
              nav[0].classList.add("page-header");
            } else {
              this.document.body.classList.add('flex');
              this.document.body.classList.add('flex-col');
              this.document.body.classList.add('min-h-screen');
              this.document.body.classList.add('bg-custom-gray-800');

              const nav = document.getElementsByTagName("nav");
              nav[0].classList.remove('page-heade');
              nav[0].classList.add("shadow-custom-shadow");
            }
          }
        });


  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
