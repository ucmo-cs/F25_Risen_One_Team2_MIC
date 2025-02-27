import { NgSwitch, CommonModule, NgSwitchCase, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-us-content',
  standalone: true,
  imports: [MatCardModule, NgSwitch, NgSwitchCase, NgFor, NgIf],
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.css']
})
export class AboutUsContentComponent {
  @Input() cardData: any;
}