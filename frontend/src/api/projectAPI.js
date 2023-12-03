import axiosClient from "./axiosClient";

const projectApi = {
    published() {
    const url = "/projects/published";
    return axiosClient.get(url);
  }
};
export default projectApi;
