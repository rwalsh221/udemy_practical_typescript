import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export const FirstColumn = () => {
  return <h4>firstcolumn</h4>;
};
export const SecondColumn = () => {
  return <h4>SecondColumn</h4>;
};
export const ThirdColumn = () => {
  return <h4>ThirdColumn</h4>;
};
export const ForthColumn = () => {
  return <h4>ForthColumn</h4>;
};
