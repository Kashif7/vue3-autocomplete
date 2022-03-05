import { books } from "./books";
import { cities } from "./cities";

export const storeState = {
  books: {
    type: Object,
    form: Array,
    values: books,
  },
  cities: {
    type: String,
    form: Array,
    values: cities,
  },
};
