import { Company } from './Company';
import { User } from './user';

// import userColor from './User'; //avoid default export -import in ts ..
// import color from './User';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
