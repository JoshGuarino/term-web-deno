import { Head } from "$fresh/runtime.ts";
import Input from "../islands/Input.tsx";

export default function Terminal() {
  return (
    <div class="bg-black h-screen p-2 text-white text-lg font-bold">
      <Head>
        <title>JG Terminal</title>
      </Head>
      <main>
        <div class="text-blue-400">~</div>
        <span class="text-green-400">{'> '}</span> 
        <Input />
      </main>
    </div>
  );
}
