import axiosClient from "@/lib/axiosClient";
import { LoginFormInput } from "@/zod/forms";

type UserWithToken = {
    user: User
    token: string
}

export const authService = {
    login: (data: LoginFormInput) => axiosClient.post<UserWithToken>("auth/login", data),
    me: () => axiosClient.get<User>("auth/me"),

}