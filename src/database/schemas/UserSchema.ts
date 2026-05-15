import Realm from 'realm';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;

  firstName!: string;

  lastName!: string;

  email!: string;

  phoneNumber!: string;

  address!: string;

  static schema: Realm.ObjectSchema = {
    name: 'User',

    primaryKey: '_id',

    properties: {
      _id: 'objectId',

      firstName: 'string',

      lastName: 'string',

      email: 'string',

      phoneNumber: 'string',

      address: 'string',
    },
  };
}
