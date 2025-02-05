interface Carrier {
  logoUrl: string;
  name: string;
}

interface Airport {
  displayCode: string;
  city: string;
  airport: string;
}

interface FlightLeg {
  origin: Airport;
  destination: Airport;
  durationInMinutes: number;
  departure: string;
  arrival: string;
  carriers: {
    marketing: Carrier[];
  };
}
interface FlightDetail {
  id: string;
  departure: string;
  arrival: string;
  price: number;
  duration: string;
  airline: string;
}

export interface FlightData {
  price: {
    formatted: string;
  };
  legs: FlightLeg[];
  itineraries: FlightDetail[];
}

export interface FlightResultCardProps {
  flightData: FlightData;
}
export interface FlightResultsListProps {
  flightsDetails: FlightData;
  visibleCount: number;
  showMoreResults: () => void;
}
