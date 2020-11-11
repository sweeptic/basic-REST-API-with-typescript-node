import { Company } from './Company';
import { User } from './user';

// import userColor from './User'; //avoid default export -import in ts ..
// import color from './User';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);
