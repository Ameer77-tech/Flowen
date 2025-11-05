import { GithubButton, GoogleButton } from "@/components/AuthBtns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GitBranch, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <Card className="w-full border-0 sm:w-3/4 md:w-2/3 lg:w-2/5">
      <CardHeader className={"mb-5"}>
        <CardTitle className="text-3xl font-medium tracking-tighter text-primary md:text-4xl lg:text-5xl">
          Create Your Account
        </CardTitle>
        <CardDescription className="text-sm md:text-base lg:text-lg">
          Join our community and start managing your tasks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="flex flex-col gap-4">
          <Input placeholder="Username" className={"lg:text-lg lg:py-2"} />
          <Input
            placeholder="Email"
            type="email"
            className={"lg:text-lg lg:py-2"}
          />
          <Input
            placeholder="Password"
            type="password"
            className={"lg:text-lg lg:py-2"}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            className={"lg:text-lg lg:py-2"}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
        <div className="border-accent w-full h-[1px] border relative my-10">
          <span className="text-muted-foreground bg-card absolute left-1/2 -translate-x-1/2 -top-3 w-40 lg:w-50 text-center">
            Or Continue With
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <GithubButton />
          <GoogleButton />
        </div>
      </CardContent>
      <CardFooter className="text-center text-sm text-muted-foreground mt-2">
        Already have an account?{" "}
        <Link href={"/login"} className="underline cursor-pointer">
          Log in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Form;
