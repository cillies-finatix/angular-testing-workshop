import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  visible = signal(true);
}
