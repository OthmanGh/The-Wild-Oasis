import supabase from './supabase';

export const getCabins = async () => {
  const { data, error } = await supabase.from('Cabins').select('id');

  if (error) {
    console.error(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
};
