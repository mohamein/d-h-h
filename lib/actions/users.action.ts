/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "@/lib/utils";
import { User } from "@/types/index";

import { revalidatePath } from "next/cache";

export const getUsers = async () => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("Error fetching users:", error);
      return null;
    }

    return data as User[];
  } catch (error) {
    console.error("Error at fetching users:", error);
    return null;
  }
};

export const createUser = async (user: User): Promise<any | null> => {
  try {
    // Validate the user object structure before inserting
    if (!user || !user.username || !user.email) {
      console.error("Invalid user object. Ensure it matches the schema.");
      return null;
    }

    const { data, error } = await supabase.from("users").insert(user);

    if (error) {
      console.error("Error creating user:", error);
      return null;
    }

    revalidatePath("/dashboard/staff");
    return data;
  } catch (error) {
    console.error("Error at creating user", error);
    return null;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<any | null> => {
  try {
    if (!email || !password) {
      console.error("Email and password must not be empty.");
      return null;
    }

    // 1. get the user from table users with matching email
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (userError || !userData) {
      console.error("Error fetching user:", userError);
      return null;
    }
    console.log(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // revalidatePath("/dashboard");
    return userData;
  } catch (error) {
    console.log("Error logging in user:", error);
    return null;
  }
};
