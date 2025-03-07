import { LOCATION_API_URL } from "../constants/environment-constans";

export const ContriesUrlByRegion = {
  get: (region: string) => `${LOCATION_API_URL}/v3.1/region/${region}`,
};
