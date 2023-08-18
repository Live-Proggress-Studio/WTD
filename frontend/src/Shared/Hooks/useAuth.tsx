import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@App/Providers/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
}
