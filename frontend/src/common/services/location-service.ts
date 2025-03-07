import { CountryModel } from "../models/country-model";
import { ContriesUrlByRegion } from "./api-routes";

export const GetCountriesByRegion = async (
  region: string,
  signal: AbortSignal
): Promise<CountryModel[]> => {
  const response = await fetch(ContriesUrlByRegion.get(region), { signal });
  return (await response.json()).data;
};
