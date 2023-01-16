import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xgksgbbwwrnvqbvuguwx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhna3NnYmJ3d3JudnFidnVndXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwOTY2MTgsImV4cCI6MTk4ODY3MjYxOH0.vRi3Ukf0UoXeR0Epvf9ED7uB68vDmsFsx2fhvgmU6NQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
