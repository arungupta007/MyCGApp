import Realm from 'realm';

import { User } from './schemas/UserSchema';
import {AppointmentSchema} from './schemas/AppointmentSchema';

export const realm = new Realm({
  schema: [User, AppointmentSchema],
  schemaVersion: 2,
});
// import Realm from 'realm';

// import {UserSchema} from './schemas/UserSchema';

// import {AppointmentSchema} from './schemas/AppointmentSchema';

// export default new Realm({
//   schema: [
//     UserSchema,
//     AppointmentSchema,
//   ],

//   schemaVersion: 2,
// });