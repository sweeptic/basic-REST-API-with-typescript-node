import faker from 'faker';

export default 'red';
// export const red = 'red';

//export very specific variables
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `user name: ${this.name}`;
  }
}
