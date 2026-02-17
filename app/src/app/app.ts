import { Component, signal } from '@angular/core';
import { WorkOrderSchedule } from './work-order-schedule/work-order-schedule';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [WorkOrderSchedule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('app');
}
