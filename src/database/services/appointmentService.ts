import Realm from 'realm';

import { realm } from '../realm';

export const createAppointment = (
  title: string,
  description: string,
  propertyId: string,
) => {
  try {
    realm.write(() => {
      realm.create('Appointment', {
        _id: new Realm.BSON.ObjectId(),

        title,

        description,

        propertyId,

        createdAt: new Date(),
      });
    });

    return true;
  } catch (error) {
    console.log(
      'Create Appointment Error',
      error,
    );

    return false;
  }
};

export const getAppointments =
  () => {
    return realm
      .objects('Appointment')
      .sorted('createdAt', true);
  };