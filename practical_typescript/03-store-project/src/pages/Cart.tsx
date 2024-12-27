import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to={"/"} className="text-7xl text-red-900">
        Back Home
      </Link>
      <div>
        <Button asChild size="lg">
          <Link to={"/"}>Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;