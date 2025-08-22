/* eslint-disable */
import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";

const sbUrl = "https://dlqqyqfqxbcpdppvtrlv.supabase.co";
const sbKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRscXF5cWZxeGJjcGRwcHZ0cmx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTk3OTksImV4cCI6MjAxMTIzNTc5OX0.XD9bd81HQ9FBQ9JTZrHXt1OzHXdgS8QPQ09s89MER6s";

const supabase = createClient(sbUrl, sbKey);
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null;
});

export default function useSupabase() {
  return supabase;
}
