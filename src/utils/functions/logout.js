import authStore from "../../stores/authStore";

export const logout = () => {
  // update authStore
  authStore.set({
    loading: false,
    isAuthenticated: false,
    token: null,
    userName: "",
    userEmail: "",
  });

  //   remove token from local storage
  localStorage.removeItem("platePlanToken");
};
