import Realm from 'realm';

export class AppointmentSchema extends Realm.Object<AppointmentSchema> {
  _id!: Realm.BSON.ObjectId;

  title!: string;

  description!: string;

  propertyId!: string;

  createdAt!: Date;

  static schema = {
    name: 'Appointment',

    primaryKey: '_id',

    properties: {
      _id: 'objectId',

      title: 'string',

      description: 'string',

      propertyId: 'string',

      createdAt: 'date',
    },
  };
}