import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'user-profile',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    userId: string | null = "";
    message: string = 'Loading...';
    users: Array<User> = [];
    user: User = {
        id: '',
        firstname: '',
        lastname: '',
        photo: '',
        location: '',
        birthday: '',
        contact: {
            email: '',
            phone: ''
        },
        projects: [],
        team: ''
    };

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Initialize component
        this.route.paramMap.subscribe(params => {
            this.userId = params.get('id');
        });

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
                this.user = this.users.find(person => person.id === this.userId) || this.user;
                console.log('Fetched users:', this.users); // Debugging log
                console.log('Found user: ', this.user.id);
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
                this.message = `Error loading data: ${error.message}`;
            }
        );
    }
}