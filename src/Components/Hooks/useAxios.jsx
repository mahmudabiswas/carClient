import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxios = () => {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error calling in inter septor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logOut the user");
          logOut()
            .then()
            .catch((err) => {
              console.log(err.massage);
            });
        }
      }
    );
  }, []);
  return instance;
};

export default UseAxios;
