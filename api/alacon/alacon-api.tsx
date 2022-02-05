import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export type alacon = {
  id: number;
  name: string;
};

const supabaseUrl = "https://hrmfthevsewxkzgixzlb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useNames = () => {
  const [names, setNames] = useState<alacon[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getName = async () => {
      const { data: alacon, error } = await supabase.from("alacon").select("*");
      setNames(alacon || []);
    };
    getName();
  }, []);

  return {
    names,
    error,
  };
};
