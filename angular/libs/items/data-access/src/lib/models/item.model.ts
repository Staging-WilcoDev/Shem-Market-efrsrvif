import { Item, Comment } from "@realworld/core/api-types";

export interface ItemState {
  data: Item;
  comments: Comment[];
}

export const itemInitialState: ItemState = {
  data: {
    slug: "",
    title: "",
    description: "",
    image: "",
    tagList: [],
    createdAt: "",
    updatedAt: "",
    favorited: false,
    favoritesCount: 0,
    seller: {
      username: "",
      bio: "",
      image: "",
      following: false,
      loading: false,
    },
  },
  comments: [],
};
