import { useEffect, useState } from "react";
import { GetCountriesByRegion } from "../../common/services/location-service";
import { CountryModel } from "../../common/models/country-model";

export const ShoppingCart = () => {
  const [countries, setCountries] = useState<CountryModel[]>();
  const [isLoading, setisLoading] = useState<boolean>();

  useEffect(() => {
    const controller = new AbortController();
    let cancel = false;
    const loadCountriesData = async () => {
      setisLoading(true);
      try {
        const countriesData = await GetCountriesByRegion(
          "america",
          controller.signal
        );
        if (!cancel) setCountries(countriesData);
      } catch (error) {
        console.error("ERROR", !!error);
      } finally {
        setisLoading(false);
      }
    };

    loadCountriesData();

    return () => {
      controller.abort();
      cancel = true;
    };
  }, []);

  return (
    <>
      <div>{"ShoppingCart"}</div>
      <pre>{JSON.stringify(countries)}</pre>
      {isLoading && <div>{"Loading..."}</div>}
    </>
  );
};
