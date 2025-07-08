"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJoMnYtNGgtMmMtMSAwLTIgMS0yIDJ6TTMwIDRDMTMuNDMxIDQgMCAxNy40MzEgMCAzNHMxMy40MzEgMzAgMzAgMzAgMzAtMTMuNDMxIDMwLTMwUzQ2LjU2OSA0IDMwIDR6TTEwLjIyNSA0Mi42OGMtNS41NTYtOS45NDItMi4zLTIyLjUyNyA3LjY0MS0yOC4wODJDMjcuODA5IDkuMDQyIDQwLjM5NSAxMi4yOTcgNDUuOTUgMjIuMjM5YzUuNTU2IDkuOTQzIDIuMyAyMi41MjgtNy42NDEgMjguMDgyLTkuOTQyIDUuNTU1LTIyLjUyNyAyLjMtMjguMDg0LTcuNjQxeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat repeat-x bg-size-60px-60px" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Services de Dépannage Informatique</h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100 drop-shadow">
            Solutions rapides et efficaces pour tous vos problèmes informatiques, que ce soit pour votre ordinateur, réseau ou logiciels.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#details" className="bg-white text-indigo-900 hover:bg-indigo-100 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl">
              Découvrir nos offres
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl">
              Demander une intervention
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
