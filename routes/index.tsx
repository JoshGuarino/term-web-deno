import { Head } from "$fresh/runtime.ts";

export default function Terminal() {
  return (
    <div class="bg-black h-screen text-white text-lg font-bold">
      <Head>
        <title>JG Terminal</title>
      </Head>
      <main>
        <div class="text-blue-400">~</div> 
        <span class="text-green-400">{'>'}</span> <input autoFocus class="bg-black focus:outline-none w-11/12"></input>
      </main>
    </div>
  );
}
