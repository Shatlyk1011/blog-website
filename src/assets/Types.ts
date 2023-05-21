import { Timestamp } from "firebase/firestore";

export interface Comment {
  author: string;
  authorId: string | number;
  text: string;
  createdAt: Timestamp;
  editedAt?: Timestamp;
  likedBy: string[];
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
  createdAt: Timestamp | string;
  editedAt?: Timestamp | null;
  readonly id?: string;
}

export interface PostDraft {
  html: string;
  title: string;
  tags: string[];
  timeToRead: number;
  imageUrl?: string;
  userInfo: {
    author: string;
    userUid: string;
  };
  readonly id?: string;
}
