import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

// import userColor from './User'; //avoid default export -import in ts ..
// import color from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

//implicit check
customMap.addMarker(user);
customMap.addMarker(company);
