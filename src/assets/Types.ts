import { Timestamp } from "firebase/firestore";
export interface Post {
  html: string;
  title: string;
  imageUrl: string;
  imageRef: string;
  comments: string[];
  tags: string[];
  timeToRead: number;
  userInfo: {
    author: string;
    userUid: string;
  };
  createdAt: Timestamp;
  readonly id?: string;
}

export interface PostDraft {
  html: string;
  title: string;
  tags: string[];
  userInfo: {
    author: string;
    userUid: string;
  };
  createdAt: Timestamp;
  readonly id?: string;
}
