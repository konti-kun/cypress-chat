import { Timestamp } from 'firebase/firestore';
import { WithId } from '~~/lib/firebase';

export type MessageDocumentData = {
  createdAt: Timestamp;
  content: string;
  senderId: string;
};

export type Message = WithId<MessageDocumentData>;