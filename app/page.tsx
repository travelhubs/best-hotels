import { supabase } from './lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')

  return (
    <main style={{ padding: "40px" }}>
      <h1>Hotels from Supabase</h1>

      {error && <p>Error: {error.message}</p>}

      {data?.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.city}</p>
        </div>
      ))}
    </main>
  )
}