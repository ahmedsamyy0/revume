"use server";
import { signIn, signOut } from "@/app/auth";

export const signInAction = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const signOutAction = async () => {
  await signOut();
};
