"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <div className="flex items-center justify-center w-full"
     style={{
       minHeight: '100vh',
       minWidth: '100vw',
       margin: '0',
       padding: '0',
       background: 'linear-gradient(to bottom, hsl(225, 35.71%, 21.96%), hsl(225, 23.68%, 29.8%))'
     }}>
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="gap-2">
          <CardTitle className="text-2xl">
            <img src="comm-ai.png" alt="McINTIRE{AI}" style={{ width: '529px', height: '60px' }} />
          </CardTitle>
          <CardDescription>
            * BETA *
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={() => signIn("azure-ad")}>Login with UVA Credentials</Button>
          {props.isDevMode ? (
            <Button onClick={() => signIn("localdev")}>
              Basic Auth (DEV ONLY)
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};