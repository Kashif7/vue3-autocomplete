import { createStore } from "vuex";
import { storeState } from "./storeState";
import { storeGetters } from "./storeGetters";

export const store = createStore({
  state() {
    return storeState;
  },
  getters: storeGetters,
});
