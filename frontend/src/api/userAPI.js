import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/student/login";
    return axiosClient.post(url, data);
  },
  loginTeacher(data) {
    const url = "/teacher/login";
    return axiosClient.post(url, data);
  },
  register(info) {
    const url = "/student/signup";
    const json = JSON.stringify(info);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data = new FormData();
    data.append("info", blob);
    return axiosClient.post(url, data);
  },
  getAllprofile() {
    const url = "user/profile";
    return axiosClient.get(url);
  },
};
export default userApi;
