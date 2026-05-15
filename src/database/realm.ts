import Realm from 'realm';

import { User } from './schemas/UserSchema';

export const realm = new Realm({
  schema: [User],
  schemaVersion: 1,
});
