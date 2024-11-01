import { Route, Routes, useNavigate } from "react-router-dom";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

import DashboardLayout from "./template/DashboardLayout";
import Home from "./pages/dashboard";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  if (!isSignedIn) {
    navigate(`/sign-in`);
  }
  return <>{children}</>;
}

export default function AllRoutes() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route
        path="/sign-in"
        element={
          <SignedOut>
            <SignInPage />
          </SignedOut>
        }
      />
      <Route
        path="/sign-up"
        element={
          <SignedOut>
            <SignUpPage />
          </SignedOut>
        }
      />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
