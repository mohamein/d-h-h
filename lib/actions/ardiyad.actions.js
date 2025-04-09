'use server';
import {supabase} from '@/lib/utils';
import { revalidatePath } from 'next/cache';

export const getArdiyad = async () => {
    const { data, error } = await supabase.from('ardiyad').select('*').order('id', { ascending: false });
    if (error) {
        console.error(error);
        return null;
    }
    revalidatePath("/receipt")
    return data;
}