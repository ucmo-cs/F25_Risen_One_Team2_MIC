import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AboutUsContentComponent } from '../about-us-content/about-us-content.component';
import { ICONS } from '../constants/icon.constants';

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
  currentCard: any;
  //message for the child component
  headerMessage: string = '';
  contentMessage: string = '';
  //global svg icons for child element
  facebookIcon = 'assets/icons/facebook.svg';
  instagramIcon = 'assets/icons/instagram.svg';
  linkedinIcon = 'assets/icons/linkedin.svg';
  cloudcomputingIcon = 'assets/icons/cloudcomputing.svg'
  cicdIcon = 'assets/icons/cicd.svg'
  datacenterMigrationIcon = 'assets/icons/datacentermigration.svg'

  //content based on which card is hovered
  missionCards = [
    { id: 1, 
      headerMessage: 'Our Services',
      contentMessage: ['CI-CD', 'Cloud Computing'],
      icons: [this.cicdIcon, this.cloudcomputingIcon],
      layout: '2'
    },
    { id: 2, headerMessage: 'About Us',
      contentMessage: 'Risen One Consulting (WOSB)  is an innovative technology solutions consulting firm focusing on cloud and modernization efforts. Our goal is to achieve focus, strategic, and safe modernization efforts using the latest technology and expertise. Our Midwest values and leading expertise in both private and public sectors make us an excellent choice for your business.',
      layout: '1'
    },
    { id: 3, headerMessage: 'Our mission statement',
      contentMessage: 'Our mission is to create meaningful solutions that empower individuals, businesses, and communities to thrive in a constantly evolving world. We are committed to delivering high-quality products and services that foster innovation, sustainability, and growth. By prioritizing integrity, collaboration, and excellence, we aim to build lasting relationships with our clients, partners, and stakeholders, creating value that drives positive change.',
      layout: '1'
    },
    { id: 4, 
      headerMessage: 'Contact Us',
      contentMessage: [`Instagram`, 'Facebook', 'LinkedIn'],
      icons: [this.instagramIcon, this.facebookIcon, this.linkedinIcon],
      layout: '2'
    },
  ];

  //default value for hover state
  ngOnInit(): void {
    this.onHover(true, 2);
  }

  onHover(isVisible: boolean, cardId: number) {
    this.isVisible = isVisible;
    this.currentCard = this.missionCards.find(card => card.id === cardId);
  }
}