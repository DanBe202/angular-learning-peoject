import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {JsonPipe} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardComponent,
    JsonPipe,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

}
