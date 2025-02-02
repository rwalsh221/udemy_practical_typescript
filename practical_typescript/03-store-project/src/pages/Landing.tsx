import { Hero, FeaturedProducts } from "@/components";
import { LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Landing = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </>
  );
};

export default Landing;
