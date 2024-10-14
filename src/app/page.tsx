"use client"
import { Dashboard } from "@/components/ui/layouts/Dashboard";
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
