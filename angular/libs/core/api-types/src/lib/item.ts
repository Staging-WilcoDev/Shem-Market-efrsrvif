import { Profile } from "./profile";

export interface Item {
  slug: string;
  title: string;
  description: string;
  image: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  seller: Profile;
}

export interface ItemResponse {
  item: Item;
}
