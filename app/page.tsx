import { supabase } from './lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('hotels')
    .select('*')

  return (
    <main style={{ padding: "40px" }}>
      <h1>Hotels from Supabase</h1>

      <p>Data: {JSON.stringify(data)}</p>
      <p>Error: {JSON.stringify(error)}</p>
    </main>
  )
}