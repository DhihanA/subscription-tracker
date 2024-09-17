import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
// import { createClient } from "@supabase/supabase-js";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import ClientComponent from "@/components/ClientComponent";


export default async function ProtectedPage() {
  // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log(user ? JSON.stringify(user, null, 2) : 'nothing');

  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase
  .from('user_subs')
  .select();


  return (
    <ClientComponent user={user} data={data} />
  );
}
