import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserApiService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, MatCardModule],
})

export class HomeComponent implements OnInit {
  message: string = 'Loading...';
  searchTerm: string = ''; 
  filterBy: string = 'both'; 
  users: Array<User> = [];

  constructor(private router: Router, private userService: UserApiService) { }

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
      const projectsLower = user.projects?.join(' ').toLowerCase() || '';
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

  navigateToUser(userId: string) {
    console.log('Navigating to user:', userId); // Debugging log
    this.router.navigate(['/user', userId]);
  }

  // Clear search input
  clearSearch() {
    this.searchTerm = '';
  }

  // Fetch data from S3 on component initialization
  ngOnInit() {
    const zachBucket = 'http://pedigoprojectbucketnew.s3-website.us-east-2.amazonaws.com/lambda-output.json';
    const calebBucket = 'http://riseonebiopagebucket.s3-website.us-east-2.amazonaws.com/lambda-output.json';
    fetch(zachBucket)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        this.message = 'Risen One Employees';
        this.users = data.users;
        this.userService.setUsers(data.users);
        console.log('Fetched users:', this.users); // Debugging log
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
        this.message = `Error loading data: ${error.message}`;
      }
    );
  }
}
