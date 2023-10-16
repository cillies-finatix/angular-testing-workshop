import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testing-ff-testing-library',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testing-ff-testing-library.component.html',
  styleUrls: ['./testing-ff-testing-library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingFfTestingLibraryComponent {

}
