export interface Message {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  created_at: string;
  read: boolean;
  archived: boolean;
  service?: string;
  budget?: string;
}

export interface MessagePrevNext {
  id: string;
  name: string;
  subject: string;
}

export interface MessageNavigation {
  prev: MessagePrevNext;
  next: MessagePrevNext;
}
