import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel binding


@Component({

 selector: 'app-home',

 template: `

   <h1>{{ message }}</h1>

   <p>Timestamp: {{ timestamp }}</p>

   <!-- Search Bar -->

   <input type="text" [(ngModel)]="searchTerm" placeholder="Search by location, email, or about me..." />

   <ul>

     <li *ngFor="let user of filteredUsers">

       <strong>Location:</strong> {{ user.location }}<br />

       <strong>Birthday:</strong> {{ user.birthday }}<br />

       <strong>Email:</strong> {{ user.email }}<br />

       <strong>Phone Number:</strong> {{ user.phone_number }}<br />

       <strong>Projects Worked On:</strong> {{ user.projects_worked_on.join(', ') }}<br />

       <strong>Team:</strong> {{ user.team }}<br />

       <strong>Length of Service:</strong> {{ user.length_of_service }}<br />

       <strong>About Me:</strong> {{ user.about_me }}<br />

     </li>

   </ul>

 `,

 standalone: true,

 imports: [CommonModule, FormsModule], // Ensure FormsModule is added for ngModel

})

export class HomeComponent implements OnInit {

 message: string = 'Loading...';

 timestamp: string = '';

 users: Array<{

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


 // Fetch data on component initialization

 ngOnInit() {

   fetch('https://seniorprojectt.s3.amazonaws.com/lambda-output.json')

     .then((response) => {

       if (!response.ok) {

         throw new Error(`HTTP error! Status: ${response.status}`);

       }

       return response.json();

     })

     .then((data) => {

       this.message = 'User data loaded';

       this.timestamp = new Date().toISOString();

       this.users = data.users;

     })

     .catch((error) => {

       console.error('Error fetching JSON:', error);

       this.message = `Error loading message: ${error.message}`;

     });

 }

}