import { createContext,useContext } from "react";
export const AuthContext=createContext();
export const useAuthcontext=()=>useContext(AuthContext)