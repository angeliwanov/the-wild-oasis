import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zvtlsprgfsmsevnitlqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dGxzcHJnZnNtc2V2bml0bHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyNzI5NzgsImV4cCI6MjAxMDg0ODk3OH0.diiEWaLTOwmCVHHNTGN165_oopvQhwL6miX4__Ze4H4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
