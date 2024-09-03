import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { enviroment } from '../enviroments/enviroment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enviroments';

  constructor() {
    console.log(`Enviroment message: ${enviroment.message}`);
  }
}
