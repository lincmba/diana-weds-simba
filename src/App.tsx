import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/collage.jpg)',
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 100%)',
          maskImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 40%, rgba(0,0,0,1) 100%)',
        }}
        />

      <div className="relative h-full flex flex-col items-center justify-center px-6" style={{ color: '#1a3a52' }}>
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wider" style={{ fontFamily: "'Playfair Display', serif", color: '#1a3a52' }}>
              <span className="italic">Diana</span>
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16" style={{ backgroundColor: '#c85a2d', opacity: 0.7 }}></div>
              <Heart className="w-6 h-6 fill-current" style={{ color: '#c85a2d' }} />
              <div className="h-px w-16" style={{ backgroundColor: '#c85a2d', opacity: 0.7 }}></div>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-wider" style={{ fontFamily: "'Playfair Display', serif", color: '#1a3a52' }}>
              <span className="italic">Simba</span>
            </h1>
          </div>

          <div className="space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl italic tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c85a2d' }}>
              We are getting married
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-2xl sm:text-3xl md:text-4xl italic tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1a3a52' }}>
              Save the Date
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest" style={{ fontFamily: "'Playfair Display', serif", color: '#1a3a52' }}>
              2<sup className="text-2xl">nd</sup> June 2026
            </p>

            <div className="pt-8">
              <a
                href="https://paywith.nobuk.africa/hufdcqecnd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-sm md:text-base tracking-widest uppercase font-light rounded-full shadow-lg hover:shadow-xl hover:from-amber-800 hover:to-amber-900 transition-all duration-300 transform hover:scale-105"
            >
              Send Your Love & Support
              </a>
            </div>

            <p className="text-sm sm:text-base italic pt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1a3a52', opacity: 0.95 }}>
               Your presence will mean the world to us,
               <br className="hidden sm:block" />
               and any support towards our new beginning will be deeply appreciated.
            </p>
            <p className="text-sm sm:text-base italic pt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1a3a52', opacity: 0.95 }}>
               #MouseToLioness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
