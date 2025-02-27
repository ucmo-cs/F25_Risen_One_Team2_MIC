import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{ message }}</h1>

    <!-- Search Bar, Filter Dropdown, and Clear Button -->
    <div class="search-bar-container">
      <input type="text" [(ngModel)]="searchTerm" placeholder="Search..." />
      <select [(ngModel)]="filterBy">
        <option value="both">First & Last Name</option>
        <option value="location">Location</option>
        <option value="birthday">Birthday</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="projects_worked_on">Projects Worked</option>
        <option value="team">Team</option>
      </select>
      <button (click)="clearSearch()" class="search-button">Clear</button>
    </div>

    <div class="container">
      <div class="card-data" *ngFor="let user of filteredUsers">
        <mat-card class="user-card">
          <mat-card-header>
            <mat-card-title>{{ user.firstname }} {{ user.lastname }}</mat-card-title>
            <mat-card-subtitle>{{ user.team }}</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image [src]="user.photo" alt="User Image" class="user-photo" />
          <mat-card-content>
            <p>{{ user.contact.email }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, MatCardModule],
})

export class HomeComponent implements OnInit {
  message: string = 'Loading...';
  searchTerm: string = ''; 
  filterBy: string = 'both'; 
  users: Array<{
    id: string;
    firstname: string;
    lastname: string;
    photo: string;
    location: string;
    birthday: string;
    contact: {
      email: string;
      phone: string;
    };
    projects_worked_on: string[];
    team: string;
  }> = [];

  // Filter users based on selection
  get filteredUsers() {
    const searchTermLower = this.searchTerm.trim().toLowerCase();
    if (!searchTermLower) return this.users;

    return this.users.filter(user => {
      const firstNameLower = user.firstname?.toLowerCase() || '';
      const lastNameLower = user.lastname?.toLowerCase() || '';
      const locationLower = user.location?.toLowerCase() || '';
      const birthdayLower = user.birthday?.toLowerCase() || '';
      const emailLower = user.contact.email?.toLowerCase() || '';
      const phoneLower = user.contact.phone?.toLowerCase() || '';
      const projectsLower = user.projects_worked_on?.join(' ').toLowerCase() || '';
      const teamLower = user.team?.toLowerCase() || '';

      switch (this.filterBy) {
        case 'both': return `${firstNameLower} ${lastNameLower}`.includes(searchTermLower);
        case 'location': return locationLower.includes(searchTermLower);
        case 'birthday': return birthdayLower.includes(searchTermLower);
        case 'email': return emailLower.includes(searchTermLower);
        case 'phone': return phoneLower.includes(searchTermLower);
        case 'projects_worked_on': return projectsLower.includes(searchTermLower);
        case 'team': return teamLower.includes(searchTermLower);
        default: return false;
      }
    });
  }

  // Clear search input
  clearSearch() {
    this.searchTerm = '';
  }

  // Fetch data from S3 on component initialization
  ngOnInit() {
    fetch('http://riseonebiopagebucket.s3-website.us-east-2.amazonaws.com/lambda-output.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        this.message = 'Employee Cards';
        this.users = data.users;
        console.log('Fetched users:', this.users); // Debugging log
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
        this.message = `Error loading data: ${error.message}`;
      });
  }
}
