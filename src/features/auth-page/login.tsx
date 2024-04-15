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
    <div className="flex flex-col items-center justify-center w-full h-screen"
     style={{
       background: 'linear-gradient(to bottom, hsl(225, 35.71%, 21.96%), hsl(225, 23.68%, 29.8%)) !important'
     }}>
      <img src="comm-ai.png" alt="McINTIRE{AI}" style={{ width: '529px', height: '60px', marginBottom: '20px' }} />
      <p className="text-xl text-white mb-8">* BETA *</p>
      <Button className="bg-primary text-white py-2 px-4 rounded" onClick={() => signIn("azure-ad")}>
        Login with UVA Credentials
      </Button>
      {props.isDevMode && (
        <Button className="bg-secondary text-white py-2 px-4 rounded mt-2" onClick={() => signIn("localdev")}>
          Basic Auth (DEV ONLY)
        </Button>
      )}
    </div>
  );
};