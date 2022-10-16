import { getFirestore, collection, query, orderBy, DocumentReference, doc, setDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { MessageDocumentData } from '~~/types/message';
import { getConverter } from './firebase';

export const collectionName = 'messages';

export const messagesRef = () => collection(getFirestore(), 'messages').withConverter(getConverter<MessageDocumentData>());

export const messagesQuery = () => query(messagesRef(), orderBy('createdAt', 'asc'));

export const setMessage = async (ref: DocumentReference, message: MessageDocumentData) => {
  return setDoc(ref, message, { merge: true });
};

export const addMessage = async (content: string, uid: string) => {
  const messageRef = doc(messagesRef());
  return setMessage(messageRef, {
    content,
    senderId: uid,
    createdAt: serverTimestamp() as Timestamp,
  });
};