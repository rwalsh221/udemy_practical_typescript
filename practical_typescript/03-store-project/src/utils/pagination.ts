type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({
  pageNumber,
  pathname,
  search,
}: ConstructUrlParams): string => {
  return "/products";
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathName: string;
};

export const ConstructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathName,
}: ConstructPrevOrNextParams): {
  prevUrl: string;
  nextUrl: string;
} => {
  const prevUrl = "products";
  const nextUrl = "products";
  return { prevUrl, nextUrl };
};
