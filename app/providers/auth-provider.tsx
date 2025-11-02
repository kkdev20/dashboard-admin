"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: { username: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if user is logged in on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("dashboard-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    // Check credentials
    if (username === "userdemo" && password === "passworddemo") {
      const userData = { username };
      setUser(userData);
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("dashboard-user", JSON.stringify(userData));
      }
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("dashboard-user");
    }
    router.push("/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

