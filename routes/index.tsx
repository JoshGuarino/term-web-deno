import { Head } from "$fresh/runtime.ts";
import Input from "../islands/Input.tsx";
import Output from "../islands/Output.tsx";
import Prompt from "../islands/Prompt.tsx";

export default function Terminal() {
  return (
    <div class="bg-gray-800 h-screen p-2 text-white font-bold">
      <Head>
        <title>JG Terminal</title>
      </Head>
      <main class="">
        <div>
          <Output />
          <Prompt />
          <Input />
        </div>
      </main>
    </div>
  );
}
