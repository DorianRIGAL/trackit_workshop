import { Component } from '@angular/core';
import { MealPlannerComponent } from './meal-planner.component';
import { NowComponent } from './now.component';

@Component({
  standalone: true,
  selector: 'wm-app',
  imports: [MealPlannerComponent, NowComponent],
  template: `
    <wm-now></wm-now>
    <h1>👨🏻‍🍳 Welcome to {{ title }}</h1>
    <wm-meal-planner></wm-meal-planner>
  `,
})
export class AppComponent {
  title = 'whiskmate';
}
