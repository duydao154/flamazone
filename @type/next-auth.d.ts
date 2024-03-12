// here we can make changes to existing type

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]; // we extend the user object in session so it also contains the id field
  }
}
