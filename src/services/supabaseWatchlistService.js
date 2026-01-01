export async function AddStock(supabase, userId, symbol){
    return supabase.from("watchlist").insert({symbol, user_id:userId});
}

export async function RemoveStock(supabse,id){
    return supabase.from("watchlist").delete().eq("id", id)
}

export async function FetchWatchlist(supabase, userId){
    const {data} = supabase.from("watchlist")
        .select("*")
        .eq("user_id", userId)

    return data || null;
    
}