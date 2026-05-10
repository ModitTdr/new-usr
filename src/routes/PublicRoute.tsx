import { useAuth } from "@/hook/useAuth";
import LoadingPage from "@/pages/LoadingPage";
import React from "react";
import { Navigate } from "react-router";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <LoadingPage />

  if (isAuthenticated) return <Navigate to="/" />
  return <>{children}</>
};

export default PublicRoute;