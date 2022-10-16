import { DocumentData, FirestoreDataConverter, PartialWithFieldValue, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export type WithId<T> = T & { id: string };

const getConverter = <T extends DocumentData>(): FirestoreDataConverter<WithId<T>> => ({
  toFirestore: (data: PartialWithFieldValue<WithId<T>>): DocumentData => {
    const dataWithoutId = (({ id, ...rest }) => rest)(data);
    return dataWithoutId;
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<T>, options: SnapshotOptions): WithId<T> => {
    return { id: snapshot.id, ...snapshot.data(options) };
  },
});