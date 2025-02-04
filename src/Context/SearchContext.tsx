import { createContext, ReactNode, useContext, useState } from "react";
import { TripType } from "../Types/TripType";
import axios from "axios";
import { API_KEY } from "../constants/ApiKey";
import { useQuery } from "@tanstack/react-query";

export interface SearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;

  adults: number;
  children: number;
  infants: number;

  cabinClass: string;
  fromLocation: string;
  toLocation: string;
  date: string;
  returnDate?: string;
  limit: number;
}

interface SearchContextProps {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
  fetchResults: () => void;
  flightsDetails: any;
  isLoading: boolean;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);
export default function SearchProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    originSkyId: "",
    destinationSkyId: "",
    originEntityId: "",
    destinationEntityId: "",
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: "economy",
    date: "",
    returnDate: "",
    limit: 30,
  });
  console.log(searchParams);
  const getFlights = async () => {
    const { data } = await axios.get(
      "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
      {
        params: searchParams,
        headers: API_KEY,
      }
    );
    return data.data;
  };

  const {
    data: flightsDetails,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["flightsDetails"],
    queryFn: getFlights,
    enabled: false,
  });
  const fetchResults = () => {
    refetch();
  };
  console.log(flightsDetails);
  return (
    <SearchContext.Provider
      value={{ searchParams, setSearchParams, flightsDetails, fetchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
};
