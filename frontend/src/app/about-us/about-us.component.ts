import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AboutUsContentComponent } from '../about-us-content/about-us-content.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsContentComponent, NgIf], // Use NgFor instead of NgForOf
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  //boolean for child visibility
  isVisible: boolean = false;
  //message for the child component
  message: string = '';

  //content based on which card is hovered
  missionCards = [
    { id: 1, title: 'Services', description: 'CI/CD<br>Cloud Solutions<br>DevSecOps<br>Agile<br>Data Center Migration<br>Cloud Migration' },
    { id: 2, title: 'Leaders', description: 'Meet the leaders who drive our company forward.' },
    { id: 3, title: 'Mission Statement', description: 'Our mission is to make the world a better place.' },
    { id: 4, title: 'Contact Us', description: 'Reach out to us for more information or inquiries.' },
  ];

  onHover(isHover:boolean, id:number) {
    //if the id is a valid button id, set description and display content
    if(id >=1 && id <= 4) {
      console.log("onHover Called...");
      this.message = this.missionCards[id-1].description;
      this.isVisible = isHover; 
    }
    else {
      //otherwise set visibility to false
      this.isVisible = isHover;  
    }
  }
}
