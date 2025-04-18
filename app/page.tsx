export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl md:text-4xl font-light text-center mb-6">
        Is this the thing you’ve never said out loud?
      </h1>

      <textarea
        className="w-full max-w-xl h-40 p-4 text-lg bg-black border border-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-white/20"
        placeholder="Type your truth here..."
      ></textarea>

      <button
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Lock It Away
      </button>
    </main>
  );
}
