import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { auth } from "@/app/auth";
import SignoutButton from "./SignoutButton";

const UserDropdown = async () => {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="overflow-hidden w-10 h-10 rounded-full border">
          <img src={session?.user?.image || ""} alt="user image" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{session?.user?.name || "-"}</DropdownMenuItem>

        <SignoutButton fitContent={false} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
