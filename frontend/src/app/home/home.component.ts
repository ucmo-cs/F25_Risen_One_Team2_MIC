import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{ message }}</h1>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" [(ngModel)]="searchTerm" placeholder="Search by location, email, or about me..." />
    </div>

    <div class="container">
      <div class="card-data" *ngFor="let user of filteredUsers">
        <mat-card class="user-card" appearance="outlined">
          <img mat-card-image src="https://placehold.co/150x100" alt="User Image" />
          <mat-card-title>{{ user.firstname }}, {{ user.lastname }}</mat-card-title>
          <mat-card-content>{{ user.email }}</mat-card-content>
          <mat-card-content>{{ user.phone_number }}</mat-card-content>
        </mat-card>
      </div>
    </div>`,
  standalone: true,
  styleUrl: './home.component.css',
  imports: [CommonModule, FormsModule, MatCardModule], // Ensure FormsModule is added for ngModel
})
export class HomeComponent implements OnInit {
  message: string = 'Loading...';
  timestamp: string = '';
  users: Array<{
    id: string;
    firstname: string;
    lastname: string;
    location: string;
    birthday: string;
    email: string;
    phone_number: string;
    projects_worked_on: string[];
    team: string;
    length_of_service: string;
    about_me: string;
  }> = [];
  searchTerm: string = ''; // Bind this to the search input

  // Filter users based on search term
  get filteredUsers() {
    return this.users.filter((user) => {
      const searchTermLower = this.searchTerm.toLowerCase();
      return (
        user.location.toLowerCase().includes(searchTermLower) ||
        user.email.toLowerCase().includes(searchTermLower) ||
        user.about_me.toLowerCase().includes(searchTermLower)
      );
    });
  }

  validateNames() {
    this.users.forEach((user) => {
      if (user.firstname === '' || user.firstname == null) {
        user.firstname = 'John';
      }
      if (user.lastname === '' || user.lastname == null) {
        user.lastname = 'Doe';
      }
    });
  }

  // Fetch data on component initialization
  ngOnInit() {
    fetch('http://pedigoprojectbucketnew.s3-website.us-east-2.amazonaws.com/lambda-output.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.message = 'Employee Cards';
        this.timestamp = new Date().toISOString();
        this.users = data.users;
        this.validateNames();
        console.log(this.users);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
        this.message = `Error loading message: ${error.message}`;
      });
  }
}
