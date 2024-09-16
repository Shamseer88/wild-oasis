import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lgdnbhpollmovclcbpuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZG5iaHBvbGxtb3ZjbGNicHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0ODc4NTYsImV4cCI6MjA0MjA2Mzg1Nn0.FFGwS--k5qXhLP1diLWcNjPYD4BkTMJvYULLBi8NdcU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
