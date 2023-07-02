import { Location } from './location';
export interface Contact {
  id?: number;
  name: string;
  lastName?: string;
  email?: string;
  telephoneNumber?: number | null;
  celularNumber: number | null;
  description?: string;
  avatar?: string;
  location: Location;
}

export const contactos: Contact[] = [];
