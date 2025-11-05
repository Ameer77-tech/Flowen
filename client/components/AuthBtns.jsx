"use client";
import React from "react";
import { Button } from "./ui/button";
import { GitBranch } from "lucide-react";

export const GoogleButton = () => {
  const googleRedirect = () => {
    window.location.href = "http://localhost:3001/api/auth/google";
  };

  return (
    <Button
      onClick={googleRedirect}
      variant="outline"
      className="flex-1 flex items-center justify-center gap-2 active:bg-accent/50"
    >
      <GitBranch />
      Google
    </Button>
  );
};

export const GithubButton = () => {
  const githubRedirect = () => {
    window.location.href = "http://localhost:3001/api/auth/github";
  };

  return (
    <Button
      onClick={githubRedirect}
      variant="outline"
      className="flex-1 flex items-center justify-center gap-2 active:bg-accent/50"
    >
      <GitBranch />
      Github
    </Button>
  );
};
