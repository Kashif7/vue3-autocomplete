import { createStore } from "vuex";
import { books } from "./books";
import { cities } from "./cities";

export const store = createStore({
  state() {
    return {
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
  },
  getters: {
    queryStringDataArray: (state) => (stateKey, searchQuery) => {
      try {
        const data = state[stateKey];

        //todo refactor validation to its own function
        if (data.form !== Array) {
          //todo - move to language file
          throw new Error(`Expected an 'Array', received '${data.form.name}'`);
        }

        if (data.type !== String) {
          //todo - move to language file
          throw new Error(`Expected 'String', received '${data.type.name}'`);
        }

        //note - querying is case insensitive
        return data.values.filter((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } catch (e) {
        console.error("queryStringDataArray failing", e);

        throw e;
      }
    },
    queryObjectDataArray: (state) => (stateKey, dataKey, searchQuery) => {
      try {
        const data = state[stateKey];

        //todo refactor validation to its own function
        if (data.form !== Array) {
          //todo - move to language file
          throw new Error(`Expected an 'Array', received '${data.form.name}'`);
        }

        if (data.type !== Object) {
          //todo - move to language file
          throw new Error(`Expected 'Object', received '${data.type.name}'`);
        }

        //note - querying is case insensitive
        return data.values.filter((value) =>
          value[dataKey].toLowerCase().includes(searchQuery.toLowerCase())
        );
      } catch (e) {
        console.error("queryObjectDataArray failing", e);

        throw e;
      }
    },
  },
});
