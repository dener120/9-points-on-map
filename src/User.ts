import faker from '@faker-js/faker'
import {Mappable} from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number
    };
    color: string;

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.color = 'black';
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}
