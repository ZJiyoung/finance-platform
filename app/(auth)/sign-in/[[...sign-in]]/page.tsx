/*
const SignInPage = () => {
  return <div>Sign in page</div>;
};

export default SignInPage;
*/

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
