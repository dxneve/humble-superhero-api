import axios from "axios";

import { API_URL } from "../config";

import type { Superhero } from "../types/superhero";

export const getSuperheroes = async () => {
  const response = await axios.get<Superhero[]>(API_URL);
  return response.data;
};

export const createSuperhero = async (superhero: Omit<Superhero, "id">) => {
  await axios.post(API_URL, superhero);
};
