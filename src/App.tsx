import { Download, Info } from 'lucide-react';
import { RotatingLogo } from './components/Logo';

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SIGAI-App.apk';
    link.download = 'SIGAI-App.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(-45deg, #E3F2FD, #BBDEFB, #90CAF9, #FFFFFF)',
      backgroundSize: '600% 600%',
      animation: 'gradientShift 8s ease infinite'
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <header className="px-8 py-6">
        <div className="h-16 w-16 mx-auto">
          <RotatingLogo />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center space-y-12">
          <div className="flex justify-center">
            <img
              src="/image copy copy.png"
              alt="SIGAI ACM TCET Logo"
              className="w-80 h-auto object-contain drop-shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E5C9A] leading-tight">
              Download SIGAI TCET App
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the official SIGAI TCET Student's Chapter mobile application for Android devices
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2E5C9A] to-[#4A6FA5] hover:from-[#1e4a7a] hover:to-[#2E5C9A] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Click Here to Download App
            </button>

            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
              <span className="text-gray-500">Available for Android</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm border-2 border-[#4FC3F7]/30 rounded-xl shadow-sm max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4FC3F7]/20 rounded-full flex items-center justify-center mt-0.5">
                <Info className="w-5 h-5 text-[#2E5C9A]" />
              </div>
              <p className="text-left text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#2E5C9A]">Note:</span> The iOS version is currently under development. Meanwhile, iOS users can access the platform through our web version at <br />
                    <b>
                      <a 
                        href="https://sigai-qr-app.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#2E5C9A] underline"
                      >
                        ACM SIGAI Web app
                      </a>
                    </b>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© 2025 SIGAI TCET Student's Chapter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
