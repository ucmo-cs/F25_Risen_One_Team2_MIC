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
        username: '',
        firstname: '',
        lastname: '',
        photo: '',
        location: '',
        birthday: '',
        contact: {
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        },
        projects: [],
        team: '',
        about: ''
    };

    constructor(private route: ActivatedRoute, private userService: UserApiService) { }

    setupClickEvents() {
        const paper = document.querySelector('.paper');
        const flipButton = document.querySelector('button');

        flipButton?.addEventListener('click', () => {
            paper?.classList.toggle('flip');
        });

        const leftSide = paper?.querySelector('.page.left');
        leftSide?.addEventListener('click', () => {
            leftSide?.classList.toggle('open');
        });

        const rightSide = paper?.querySelector('.page.right');
        rightSide?.addEventListener('click', () => {
            rightSide?.classList.toggle('open');
        });

        const centerSide = paper?.querySelector('.page.center');
        centerSide?.addEventListener('click', () => {
            centerSide?.classList.toggle('open');
        });
    }

    ngOnInit(): void {
        // Setup click events for flipping the card
        this.setupClickEvents();

        // Initialize component
        this.route.paramMap.subscribe(params => {
            this.userId = params.get('id');
        });

        this.user = this.userService.getUserInfo(this.userId) || this.user;
    }
}