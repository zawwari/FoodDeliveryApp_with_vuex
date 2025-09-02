import axios from "axios";
import axiosClient from "../../axiosClient";

export default {
  searchData({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setDataValue", data.meals);
    });
  },
};
