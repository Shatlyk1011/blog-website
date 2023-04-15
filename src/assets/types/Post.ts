interface Post {
  html: String;
  title: string;
  imageUrl: string;
  imageRef: string;
  createdAt: Date;
  comments: string[];
  author: string;
  userUid: string;
  readonly id?: string;
  timestamp?: string;
}

export default Post;
