import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

const Component = () => {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) {
    return <h2>is loading....</h2>;
  }

  if (isError) {
    return <h2>Error {error.message}</h2>;
  }

  return (
    <div>
      <h2>Tours</h2>
      {tours.map((tour) => (
        <p key={tour.id}>{tour.name}</p>
      ))}
    </div>
  );
};

export default Component;
