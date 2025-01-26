import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { AxiosResponse } from "axios";

const Login = () => {
  const loginAsGuestUser = () => {
    console.log("guest user");
  };

  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput type="email" label="email" name="identifier" />
            <FormInput type="password" name="password" />
            <SubmitBtn text="login" className="w-full mt-4" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="w-full mt-4"
            >
              Guest User
            </Button>
            <p className="text-center mt-4">
              Not a member?&nbsp;
              <Button type="button" asChild variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
