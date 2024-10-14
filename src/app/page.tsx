"use client"
import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/ui/layouts/Dashboard";
import { LoginForm } from "@/components/ui/layouts/LoginForm";
import Image from "next/image";
import { createContext } from "react";
export const Context = createContext([]) 
export default function Home() {
  return (
    <div className="w-full">
      {/* შესვლა */}
      <div>
        {/* <LoginForm/> */}
      </div>

      {/* ინტერფეისი viewer */}
      <div>
        <Dashboard/>
      </div>
    </div>
  );
}
