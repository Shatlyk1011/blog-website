import { Timestamp } from "firebase/firestore";
interface Post {
  html: String;
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

export default Post;
