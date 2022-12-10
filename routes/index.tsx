import { Head } from "$fresh/runtime.ts";
import Terminal from "../islands/Terminal.tsx";
import config from "../config.json" assert { type: "json" };

export default function Home() {
  return (
    <html>
      <Head>
        <title>JG | Terminal</title>
      </Head>
      <body 
        class="bg-gradient-to-b from-gray-800 to-red-900 h-screen p-6 text-white font-bold justify-evenly items-center bg-cover"
      >
        <div class="bg-black opacity-80 border-2 rounded-lg h-full w-full p-2 overflow-auto">
          <Terminal user={config.user} host={config.host}/>
        </div>
      </body>
    </html>
  );
}
