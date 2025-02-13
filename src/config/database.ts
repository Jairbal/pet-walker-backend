import { createClient } from "@supabase/supabase-js";

process.loadEnvFile();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default supabase;
