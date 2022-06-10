export interface PersonI {
  createdAt: string;
  name: string;
  country: string;
  email: string;
  experience: number;
  jobTitle: string;
  id: string;
}

export interface PersonListI {
  items: PersonI[];
  count: number;
}
