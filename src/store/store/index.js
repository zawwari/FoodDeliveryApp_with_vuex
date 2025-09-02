import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const store = createStore({ state, actions, mutations, getters });

export default store;
