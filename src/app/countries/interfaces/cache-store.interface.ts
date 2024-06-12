import { Country } from "./country";
import { Region } from "./region.type";


export interface CacheStore{
  byCapital: TerCountries;
  byCountries: TerCountries;
  byRegion: RegionCountries;
}

export interface TerCountries{
  term: string;
  countries: Country[];
}

export interface RegionCountries{
  region: Region;
  countries: Country[];
}

