import React from "react";
import { Button } from "./ui/button";
import { signOutAction } from "@/lib/actions/auth";

const SignoutButton = ({ fitContent = true }: { fitContent?: boolean }) => {
  return (
    <Button
      size="sm"
      onClick={signOutAction}
      className={`${fitContent ? "w-fit" : "w-full"}`}
    >
      Sign Out
    </Button>
  );
};

export default SignoutButton;
