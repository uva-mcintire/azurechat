"use client";
import { signIn } from "next-auth/react";
import { FC } from "react";
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
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-theme">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader className="gap-2">
          <CardTitle className="text-2xl">
            <img src="comm-ai.png" alt="McINTIRE{AI}" style={{ width: '529px', height: '60px' }} />
          </CardTitle>
          <CardDescription>
            BETA version. Running OpenAI GPT-4o.
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