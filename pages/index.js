import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="flex justify-between text-blue-900">
        <h2>
          {" "}
          Hello,<b> {session?.user?.name}</b>
        </h2>
        <div className="flex gap-1 overflow-hidden text-black rounded-lg">
          <img
            src={session?.user?.image}
            alt=""
            className="w-8 h-8 rounded-full"
          />

          {/* <span className="px-2 font-medium text-center">{session?.user?.name}</span> */}
        </div>
      </div>
    </Layout>
  );
}
