export const baseBackendUrl = import.meta.env.VITE_BACKEND_URL;
export const loginRoute = `${baseBackendUrl}/auth/jwt/create/`;
export const registerRoute = `${baseBackendUrl}/auth/users/`;
export const resetPasswordRoute = `${baseBackendUrl}/auth/users/reset_password/`;
export const verifyTokenRoute = `${baseBackendUrl}/auth/users/me/`;
export const activateAccountRoute = `${baseBackendUrl}/auth/users/activation/`;
