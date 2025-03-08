export interface User {
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
    projects: string[];
    team: string;
}