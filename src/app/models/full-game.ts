import {SystemRequirement} from "./system-requirement";
import {Screenshot} from "./screenshot";

export interface FullGame {
  id: number;
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  minimum_system_requirements: SystemRequirement;
  platform: string;
  publisher: string;
  release_date: Date;
  screenshots: Screenshot[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
}
