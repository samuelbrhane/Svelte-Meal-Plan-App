import { baseBackendUrl } from "../routes/authRoutes";
import axios from "axios";

// handle google authentication
export const googleAuth = async () => {
  let { data } = await axios.get(
    `${baseBackendUrl}/auth/o/google-oauth2/?redirect_uri=http://localhost:5173`
  );
  console.log("data: " + JSON.stringify(data));
  window.location.replace(data.authorization_url);
};
