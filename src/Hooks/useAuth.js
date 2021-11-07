import { useContext } from "react";
import { FirebaseAuth } from "../Context/AuthContext";

export const useAuth = () => {
    return useContext(FirebaseAuth);
}