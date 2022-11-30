import { Head } from "$fresh/runtime.ts";
import Input from "../islands/Input.tsx";

export default function Terminal() {
  return (
    <html>
      <Head>
        <title>Feenix Terminal</title>
      </Head>
      <body class="bg-gray-800 h-screen p-2 text-white font-bold flex justify-evenly items-center">
        <div class="bg-black opacity-70 border-2 rounded-lg h-4/5 w-4/5 p-2">
          <Input />
        </div>
      </body>
    </html>
  );
}
