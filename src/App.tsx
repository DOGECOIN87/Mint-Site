import { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, Minus, Plus, Loader2, ArrowRight } from 'lucide-react';

export default function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [mintQuantity, setMintQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [mintedAmount, setMintedAmount] = useState(1337);
  const maxSupply = 5555;
  const pricePerNft = 0.05;

  const handleMint = () => {
    if (!isWalletConnected) return;
    
    setIsMinting(true);
    // Simulate network request
    setTimeout(() => {
      setIsMinting(false);
      setMintedAmount(prev => prev + mintQuantity);
    }, 2500);
  };

  const gallery = [
    { src: '2.png', name: 'Goldie', rarity: 'Common' },
    { src: '3.png', name: 'Smorez', rarity: 'Rare' },
    { src: '4.png', name: 'Frosted', rarity: 'Epic' },
    { src: '5.png', name: 'Toasted', rarity: 'Legendary' },
    { src: '6.png', name: 'Gorlock', rarity: 'Mythic' },
    { src: '7.png', name: 'Tombstone', rarity: 'Unique' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cookie-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-black text-2xl tracking-tighter"
          >
            COOKIE<span className="text-cookie-blue">CHAIN</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsWalletConnected(!isWalletConnected)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
              isWalletConnected 
                ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20' 
                : 'bg-cookie-blue text-black hover:bg-blue-400'
            }`}
          >
            <Wallet size={18} />
            {isWalletConnected ? '0x7F...3aQ9' : 'Connect Wallet'}
          </motion.button>
        </div>
      </nav>

      {/* Hero / Mint Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/bg.svg')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cookie-blue/5 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cookie-base/10 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          
          {/* Main Banner Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full relative rounded-3xl overflow-hidden border border-white/20 aspect-[2.35/1] sm:aspect-[3/1] lg:aspect-[4/1] shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-white/5 z-0"
          >
            <img 
              src="0.png" 
              alt="Sweetardios Banner" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
          </motion.div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start -mt-8 sm:-mt-16 lg:-mt-24 px-4 sm:px-8">
            
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-center lg:text-left lg:pt-32 drop-shadow-lg"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Public Sale is Live
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tighter uppercase drop-shadow-2xl">
                The Meme is<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cookie-base to-cookie-blue">The Tech.</span>
              </h1>
              <p className="text-lg text-white/50 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md">
                Join the chain. Mint Sweetardios. Rule memes. The most delicious non-fungible assets on the blockchain are waiting to be claimed.
              </p>
            </motion.div>

          {/* Right Column: Mint Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-md mx-auto lg:ml-auto relative z-20"
          >
            <div className="bg-black/60 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
              {/* Decorative glows */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cookie-blue/30 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cookie-dark/30 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold">Public Mint</h2>
                    <p className="text-white/50 text-sm mt-1">First come, first served.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display font-black text-cookie-base">{pricePerNft} <span className="text-sm text-white/50">SOL</span></p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-white/70">Total Minted</span>
                    <span>{mintedAmount} / {maxSupply}</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cookie-base to-cookie-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${(mintedAmount / maxSupply) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div className="bg-white/5 rounded-2xl p-2 flex items-center justify-between border border-white/10">
                  <button 
                    onClick={() => setMintQuantity(Math.max(1, mintQuantity - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-display font-bold text-2xl w-16 text-center">
                    {mintQuantity}
                  </span>
                  <button 
                    onClick={() => setMintQuantity(Math.min(10, mintQuantity + 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                {/* Mint Button */}
                <button
                  onClick={handleMint}
                  disabled={!isWalletConnected || isMinting}
                  className="w-full bg-white text-black font-display font-bold text-xl py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[0.98] active:scale-[0.95] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group"
                >
                  {isMinting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Minting...
                    </>
                  ) : !isWalletConnected ? (
                    'Connect Wallet to Mint'
                  ) : (
                    <>
                      Mint Now
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Footer text */}
                <p className="text-center text-xs text-white/40">
                  Max 10 per transaction. Solana Program.
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter">Meet The Chain</h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">Unique, crunchy, and slightly unhinged. Discover the characters that make up the Sweetardios universe.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={item.name}
                className="group relative rounded-3xl overflow-hidden aspect-video sm:aspect-square bg-white/5 border border-white/10 cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-display font-bold text-2xl">{item.name}</p>
                    <p className="text-sm text-cookie-base font-semibold mt-1 tracking-wide uppercase">{item.rarity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Sweetardios. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>RPC: https://api.cookiescan.io/</span>
            </div>
            <a 
              href="https://cookiescan.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              cookiescan.io
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
