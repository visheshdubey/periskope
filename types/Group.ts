export type Group = {
  id: number;
  name: string;
  avatar: any;
  lastActive: any;
  unreadMessages: number;
  unreadMessageCount: number;
  isDisapperingMessageActive: boolean;
  sendMessageProvision: string;
  created_at: string;
  updated_at: string;
  projectId: number;
  memberCount: number;
  Labels: Label[];
  project: Project;
};

export type Label = {
  id: number;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
};
export type Project = {
  id: number;
  name: string;
  color: string;
  bgColor: string;
  created_at: string;
  updated_at: string;
};
