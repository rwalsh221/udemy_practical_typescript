import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ProductsResponseWithParams,
  constructUrl,
  constructPrevOrNextUrl,
} from "@/utils";
import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData() as ProductsResponseWithParams;
  const { pageCount, page } = meta.pagination;
};

export default PaginationContainer;
