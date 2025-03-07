import { useEffect, useState } from "react";
import { GetCountriesByRegion } from "../../common/services/location-service";
import { CountryModel } from "../../common/models/country-model";

export const ShoppingCart = () => {
  const [countries, setCountries] = useState<CountryModel[]>();
  const [isLoading, setisLoading] = useState<boolean>();

  useEffect(() => {
    const loadCountriesData = async () => {
      setisLoading(true);
      try {
        const countriesData = await GetCountriesByRegion("america");
        setCountries(countriesData);
      } catch (error) {
        console.error("ERROR", error);
      } finally {
        setisLoading(false);
      }
    };

    loadCountriesData();
  }, []);

  return (
    <>
      <div>{"ShoppingCart"}</div>
      {countries?.map((country) => {
        return <div key={country.name.official}>{country.name.official}</div>;
      })}
      {isLoading && <div>{"Loading..."}</div>}
    </>
  );
};
