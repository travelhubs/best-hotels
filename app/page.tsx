import { supabase } from './lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')

  return (
    <main style={{ padding: "40px" }}>
      <h1>Hotels from Supabase</h1>

      {error && <p>Error: {error.message}</p>}

      {data && data.length === 0 && <p>No hotels found</p>}

      {data?.map((hotel) => (
        <div key={hotel.id} style={{ marginBottom: "20px" }}>
          <h2>{hotel.name}</h2>
          <p>City: {hotel.city}</p>
          <p>Price: ${hotel.price_min} - ${hotel.price_max}</p>
        </div>
      ))}
    </main>
  )
}