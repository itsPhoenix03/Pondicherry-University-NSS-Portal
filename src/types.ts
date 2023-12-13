export type UserType = {
  _id: string;
  image: string;
  name: string;
  email: string;
  department: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  religion: string;
  castCategory: string;
  mobileNumber: string;
  nativeState: string;
  presentAddress: string;
  permanentAddress: string;
  fatherName: string;
  motherName: string;
  isAdmin: boolean;
};

export type EventType = {
  _id?: string;
  event_name: string;
  tags: string[];
  description: string;
  event_date: string;
  event_location: string;
  event_time: string;
};

export type NewsType = {
  _id?: string;
  title: string;
  image: string;
  article_abstract: string;
  article: string;
  createdAt?: string;
};
