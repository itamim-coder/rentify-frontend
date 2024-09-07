import MainLayout from "@/components/layouts/MainLayout";
import RegisterForm from "@/components/RegisterForm";
import SignInForm from "@/components/SigninForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Import the SignInForm component

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Tabs defaultValue="signin" className="w-[400px] ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign in</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                  Welcome to Rentify
                </h2>

                <CardDescription>
                  Access your account by entering your credentials. If you don't
                  have an account, please register.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignInForm /> {/* Use the SignInForm component here */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create a New Account</CardTitle>
                <CardDescription>
                  Join our community by filling out the form below. Already have
                  an account? Sign in instead.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Registration form code here */}
                <RegisterForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Login;
