import { CountryModel } from "../models/country-model";
import { ContriesUrlByRegion } from "./api-routes";

export const GetCountriesByRegion = async (
  region: string
): Promise<CountryModel[]> => {
  const response = await fetch(ContriesUrlByRegion.get(region));
  return await response.json();
};
