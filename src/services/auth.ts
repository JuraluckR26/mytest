import httpClient from "@/services/httpClient";
import Login from "@/types/login";


const index = {
  login: (data: Login) => httpClient.post("/v1/auth", data),
};

export default index
