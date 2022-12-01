import { Head } from "$fresh/runtime.ts";
import Terminal from "../islands/Terminal.tsx";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Feenix Terminal</title>
      </Head>
      <body 
        style="background-image: url('city.jpeg');"
        class="bg-gray-800 h-screen p-2 text-white font-bold flex justify-evenly items-center"
      >
        <div class="bg-black opacity-80 border-2 rounded-lg h-4/5 w-4/5 p-2">
          <Terminal />
        </div>
      </body>
    </html>
  );
}
