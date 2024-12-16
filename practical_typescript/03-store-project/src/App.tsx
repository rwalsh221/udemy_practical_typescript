import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

const App = () => {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);
  return (
    <div>
      <h1 className="text-7xl font-bold">APP</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => {
          console.log("hellow button");
        }}
      >
        Click Me
      </Button>
      <Cart></Cart>
    </div>
  );
};

export default App;
