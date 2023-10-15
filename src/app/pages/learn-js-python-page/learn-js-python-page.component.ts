import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingNavigationComponent } from 'src/app/components/landing-navigation/landing-navigation.component';

@Component({
  selector: 'app-learn-js-python-page',
  standalone: true,
  imports: [CommonModule, LandingNavigationComponent],
  templateUrl: './learn-js-python-page.component.html',
  styleUrls: ['./learn-js-python-page.component.scss']
})
export class LearnJsPythonPageComponent {

}
