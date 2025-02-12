import { useState, useEffect } from "react";

import { getSuperheroes } from "../services/superheroesService";

import type { Superhero } from "../types/superhero";

export function useSuperheroes() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSuperheroes = async () => {
    try {
      setLoading(true);
      const data = await getSuperheroes();
      setSuperheroes(data);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return { superheroes, loading, fetchSuperheroes };
}