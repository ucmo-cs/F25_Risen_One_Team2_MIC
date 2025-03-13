import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { UserApiService } from '../services/user.service';

@Component({
  selector: 'user-profile',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
    userId: string | null = "";
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

    constructor(private route: ActivatedRoute, private userService: UserApiService) { }

    ngOnInit(): void {
        // Initialize component
        this.route.paramMap.subscribe(params => {
            this.userId = params.get('id');
        });

        this.user = this.userService.getUserInfo(this.userId) || this.user;
    }
}