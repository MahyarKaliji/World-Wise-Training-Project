import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searcheParams, setSearchParams] = useSearchParams();
  const lat = searcheParams.get("lat");
  const lng = searcheParams.get("lng");

  return [lat, lng];
}
