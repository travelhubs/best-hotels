import { supabase } from './lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "30px" }}>Hotels from Supabase</h1>

      {error && <p>Error: {error.message}</p>}

      <div style={{ display: "grid", gap: "20px" }}>
        {data?.map((hotel) => (
          <div
            key={hotel.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{hotel.name}</h2>
            <p style={{ margin: "5px 0" }}>City: {hotel.city}</p>
            <p style={{ margin: "5px 0" }}>
              Price: ${hotel.price_min} - ${hotel.price_max}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}