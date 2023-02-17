import {create} from "zustand";

export const useToken = create((set) => ({
    token: "",
    loading: true,
    error: "",
    setToken: (token: string) => set({token}),
}))