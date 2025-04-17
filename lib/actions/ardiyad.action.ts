"use server";
import { supabase } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Ardiyada } from "@/types/index";

export const getArdiyad = async () => {
  const { data, error } = await supabase
    .from("ardiyad")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    return null;
  }
  revalidatePath("/receipt");
  return data;
};

export const createArdiyad = async (ardiyad: Ardiyada) => {
  const { data, error } = await supabase.from("ardiyad").insert([ardiyad]);
  if (error) {
    console.error(error);
    return null;
  }
  revalidatePath("/receipt");
  return data;
};
