import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})

export class UserApiService {
  users: Array<User> = [];

  constructor() { }

  public getUsers() {
    return this.users;
  }

  public setUsers(users: Array<User>) {
    if (users.length !== 0) { this.users = users; }
  }

  public getUserInfo(uuid: string | null) {
    let user: User = {
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
    return this.users.find(person => person.id === uuid) || user;
  }

  public getProjects() {
    //TODO change this to get project data from the backend
    const projects = [
      {
        uuid: "468879bf-8e44-4c95-8321-edd2b8fb0108",
        projectFullName: "SOME FULL PROJECT NAME",
        projectName: "SFPN",
        startDate: "12/31/2024",
        status: "Active"
      },
      {
        uuid: "8242e65d-75ac-4f4b-b761-05b9343b8507",
        projectFullName: "PROJECT OF IMPORTANCE",
        projectName: "POI",
        startDate: "12/31/2024",
        status: "Active"
      }
    ]

    return new Promise((resolve) => { resolve(projects) });
  }
}
