"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { Icons } from "../../app/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

function setEmailError(error: string) {
  const emailInput = document.getElementById("email") as HTMLInputElement;
  emailInput.placeholder = error;
  emailInput.value = "";
  emailInput.classList.add("input-error");
}

function clearEmailError() {
  const emailInput = document.getElementById("email") as HTMLInputElement;
  emailInput.placeholder = "Enter your email adress";
  emailInput.classList.remove("input-error");
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsLoading(true);
      localStorage.setItem("email", email);
      await signIn("email", {
        email: email,
        callbackUrl: `${window.location.origin}/vault`,
      });
      setIsLoading(false);
    } else {
      setEmailError("Please enter a valid email address.");
    }
  }
  return (
    <div className="bg-base-100 flex items-center flex-1 py-16 mx-6">
      <div className="card mx-auto w-full max-w-xl">
        <div className="bg-base-200 rounded-xl">
          <div className="py-16 px-10">
            <h2 className="text-2xl font-semibold text-center">
              Create an account
            </h2>
            <h3 className="text-1xl font-semibold mb-4 text-center opacity-75">
              Enter your email below to create your account
            </h3>
            <form onSubmit={onSubmit} noValidate>
              <div className="mb-4">
                <div className="label">
                  <span className="label-text font-bold">Email</span>
                </div>
                <input
                  className="input input-bordered w-full input-accent"
                  id="email"
                  type="email"
                  placeholder="Enter your email adress"
                  onInput={clearEmailError}
                />
              </div>
              <button type="submit" className={"btn mt-2 w-full btn-accent"}>
                Sign-in with Email{" "}
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="mx-4 text-sm font-semibol opacity-75">
                Or continue with
              </p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              type="submit"
              className={"btn mt-2 w-full btn-secondary"}
              onClick={() =>
                signIn("google", {
                  callbackUrl: `${window.location.origin}/vault`,
                })
              }
            >
              <Icons.google className="mr-1 h-5 w-5" />
              Google
            </button>
            <button
              type="submit"
              className={"btn mt-4 w-full btn-secondary"}
              onClick={() =>
                signIn("github", {
                  callbackUrl: `${window.location.origin}/vault`,
                })
              }
            >
              <Icons.gitHub className="mr-1 h-5 w-5" />
              GitHub
            </button>

            <div className="text-center mt-4">
              By clicking continue, you agree to our{" "}
              <a href="/terms" className="text-accent hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
