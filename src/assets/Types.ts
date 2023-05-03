import { Timestamp, FieldValue } from "firebase/firestore";

export interface Comment {
  author: string;
  text: string;
  createdAt: Timestamp;
  editedAt?: Timestamp;
  likes: number | string;
  reply: [];
  id: string;
}
export interface Post {
  html: string;
  title: string;
  imageUrl: string;
  imageRef: string;
  comments: Comment[] | [];
  tags: string[];
  timeToRead: number;
  userInfo: {
    author: string;
    userUid: string;
  };
  createdAt?: Timestamp;
  editedAt?: Timestamp | null;
  readonly id?: string;
}

export interface PostDraft {
  html: string;
  title: string;
  tags: string[];
  timeToRead: number;
  userInfo: {
    author: string;
    userUid: string;
  };
  readonly id?: string;
}
