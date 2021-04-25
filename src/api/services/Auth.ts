import { call, HttpType } from "api/Api";
import { User } from "types";

interface GetUsersResponse {
  data: User[];
}

const Auth = {
  getUser: async (token: string) => {
    return call<GetUsersResponse>("/users", token, HttpType.GET);
  },
};

export default Auth;
