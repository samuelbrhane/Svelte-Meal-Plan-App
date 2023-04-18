import authStore from "../../stores/authStore";

export const logout = () => {
  // update authStore
  authStore.update((authData) => {
    authData.loading = false;
    authData.isAuthenticated = false;
    authData.token = null;
    authData.userName = "";
    authData.userEmail = "";
    return authData;
  });

  //   remove token from local storage
  localStorage.removeItem("platePlanToken");
};
