import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

import Link from "next/link";
import LoginForm from "./login-form";
import { cn } from "@/lib/utils";
import DarkToggle from "@/components/dark-toggle";

const LoginPage = () => {
  return (
    <section className="container relative items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0  h-screen flex">
      <DarkToggle className="absolute right-4 top-4 md:right-8 md:top-8" />
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          CMS App
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eum dignissimos voluptates cupiditate ea quasi.
            </p>
            <footer className="text-sm">Arief Rachman Hakim</footer>
          </blockquote>
        </div>
      </div>
      <div className="mx-auto flex   item-center  flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Login an account</h1>
          <p className="text-sm text-muted-foreground">Enter your data and below to login your account</p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don{"'"}t have an Account?
          <Link href="/register" className="underline underline-offset-4 hover:text-primary pl-2">
            Register
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
