import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center size-full pt-5 sm:pt-10">
      <SignUp
        path="/sign-up"
        signInUrl={import.meta.env.VITE_CLERK_SIGN_IN_URL}
      />
    </div>
  );
}
