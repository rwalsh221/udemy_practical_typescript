import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { type ProductsResponse } from "@/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  // const [layout, setLayout] = useState<"grid" | "list">("grid");

  const [layout, setLayout] = useState<{
    layout: "grid" | "list";
    component: typeof ProductsGrid | typeof ProductsList;
  }>({ layout: "grid", component: ProductsGrid });

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md ">
            {totalProducts} product{totalProducts > 1 ? "s" : null}
          </h4>
          <div className="flex gap-x-4">
            <Button
              onClick={() =>
                setLayout({
                  ...layout,
                  layout: "grid",
                  component: ProductsGrid,
                })
              }
              variant={layout.layout === "grid" ? "default" : "ghost"}
            >
              <LayoutGrid size="icon" />
            </Button>
            <Button
              onClick={() =>
                setLayout({
                  ...layout,
                  layout: "list",
                  component: ProductsList,
                })
              }
              variant={layout.layout === "list" ? "default" : "ghost"}
            >
              <List size="icon" />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16 capitalize">
            sorry no products match your search
          </h5>
        ) : (
          <layout.component />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
