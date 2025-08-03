import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EmailPasswordForm from "@/components/app/login/EmailPasswordForm";
import GoogleSignInButton from "@/components/app/login/GoogleSignInButton";
import NavBar from "@/components/app/landing_page/Navbar";

export default function LoginPage() {
  return (
    <>
        <NavBar items={[
            { label: "Home", href: "/" },
            { label: "Login", href: "/login" },
            { label: "Register", href: "/register" },
          ]} />
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <EmailPasswordForm />

          <div className="flex items-center gap-2">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-muted-foreground">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <GoogleSignInButton />
        </CardContent>
      </Card>
    </div>
    </>
    );
}
