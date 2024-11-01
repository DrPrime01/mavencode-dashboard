import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center size-full pt-5 sm:pt-10">
      <SignIn
        path="/sign-in"
        signUpUrl={import.meta.env.VITE_CLERK_SIGN_UP_URL}
      />
    </div>
  );
}
