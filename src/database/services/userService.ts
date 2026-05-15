import Realm from 'realm';

import { realm } from '../realm';

import { User } from '../schemas/UserSchema';

export const createUser = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}) => {
  realm.write(() => {
    realm.create('User', {
      _id: new Realm.BSON.ObjectId(),

      firstName: data.firstName,

      lastName: data.lastName,

      email: data.email,

      phoneNumber: data.phoneNumber,

      address: data.address,
    });
  });
};

export const getUser = () => {
  const users = realm.objects<User>('User');

  return users[0];
};

export const updateUser = (id: Realm.BSON.ObjectId, updatedData: any) => {
  realm.write(() => {
    const user = realm.objectForPrimaryKey<User>('User', id);

    if (user) {
      Object.assign(user, updatedData);
    }
  });
};
