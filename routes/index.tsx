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
        class="from-gray-800 to-red-900 h-screen p-6 text-white font-bold justify-evenly items-center bg-cover"
        style="background-image: url(futurecity2.png);"
      >
        <Terminal user={config.user} host={config.host}/>
      </body>
    </html>
  );
}
