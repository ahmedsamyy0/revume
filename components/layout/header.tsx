import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { NavBar } from "./navbar";
import { auth } from "@/app/auth";
import UserDropdown from "../UserDropdown";

export async function Header() {
  const session = await auth();

  console.log(session?.user);
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Revume</span>
          </Link>
          <NavBar />
        </div>
        {!session?.user ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        ) : (
          <UserDropdown />
        )}
      </div>
    </header>
  );
}
