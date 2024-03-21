import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterModule } from './counter/counter.module';



@Component({
  selector: 'app-root',
  //standalone:true,
  //imports: [CounterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
