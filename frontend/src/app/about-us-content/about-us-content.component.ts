import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-content',
  standalone: true,
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.css']
})
export class AboutUsContentComponent {
  @Input() message: string = '';
}
