import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

// import userColor from './User'; //avoid default export -import in ts ..
// import color from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

// console.log(user);
// console.log(company);
