import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

interface myProps{
    provider:object
}
export const Registration: React.FC<myProps> =({provider}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="grdzlodev@gamil.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password..." required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col cursor-pointer">
          <CardContent className="text-start w-full">Create account</CardContent>
          <Button
            className="w-full bg-black text-white hover:text-black rounded-md">
            Sign in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
