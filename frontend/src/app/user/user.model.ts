export interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    photo: string;
    location: string;
    birthday: string;
    contact: {
        email: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
    projects: string[];
    team: string;
    about: string;
}