import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "city/selected":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, error, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
        console.log(data);
        // setCities(data);
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...!",
        });
        // alert("There was an error loading data...!");
      }
      // finally {
      //   setIsLoading(false);
      // }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    if (id === currentCity.id) return;

    dispatch({ type: "loading" });

    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "city/selected", payload: data });
      // setCurrentCity(data);
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...?",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
      // setCities((prevCities) => [...prevCities, data]);
      console.log(data);
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating city.",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  async function deleteCity(cityId) {
    dispatch({ type: "loading" });

    try {
      // setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${cityId}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: cityId });

      // setCities((prevCities) =>
      //   prevCities.filter((city) => city.id !== cityId)
      // );
      // console.log(data);
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city.",
      });
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };

CitiesProvider.propTypes = {
  children: PropTypes.element,
};
