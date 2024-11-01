import { Route, Routes, useNavigate } from "react-router-dom";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

import DashboardLayout from "./template/DashboardLayout";
import Home from "./pages/dashboard";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";
import Components from "./pages/dashboard/Components";
import Pages from "./pages/dashboard/Pages";
import Forms from "./pages/dashboard/Forms";
import Gallery from "./pages/dashboard/Gallery";
import Documentation from "./pages/dashboard/Documentation";
import Interface from "./pages/dashboard/Interface";

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
        <Route path="interface" element={<Interface />} />
        <Route path="components" element={<Components />} />
        <Route path="pages" element={<Pages />} />
        <Route path="forms" element={<Forms />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="documentation" element={<Documentation />} />
      </Route>
    </Routes>
  );
}
