import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing06-testing-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing06-testing-library.component.html',
  styleUrls: ['./testing06-testing-library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Testing06TestingLibraryComponent {

}
