import { type FC } from 'react';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient is now handled by BackgroundAnimation component */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Aurora <span className="text-blue-400">AI</span> terminal.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Biz terminal bilan ishlashni osonlashtiradigan AI yechimlarini yaratamiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#services" 
                className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                xizmatlarimiz
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                biz bilan bog'laning
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Xizmatlarimiz</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aurora terminal agenti sizga quyidagi imkoniyatlarni taqdim etadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Aqlli buyruq tavsiyalari</h3>
              <p className="text-gray-300">Ehtiyojlaringiz va kontekstga asoslangan intellektual buyruq tavsiyalarini oling.</p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Tabiiy til interfeysi</h3>
              <p className="text-gray-300">Murakkab buyruq sintaksisini yodlash o'rniga, terminal bilan tabiiy tilda muloqot qiling.</p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">Buyruq tushuntirishlari</h3>
              <p className="text-gray-300">Buyruqlarni bajarishdan oldin ularning nima qilishini batafsil tushuntirishlarini oling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Terminal Demo</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aurora terminal agentining ishlashini ko'ring
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a2e] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Aurora Terminal</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="bg-black rounded p-4 font-mono text-green-400">
                <p>$ aurora</p>
                <p className="text-white">Aurora Terminal Agentiga xush kelibsiz! Sizga qanday yordam bera olaman?</p>
                <p>$ tizimimdagi katta fayllarni topishga yordam bering</p>
                <p className="text-white">Men yordam beraman. Quyidagi buyruqni sinab ko'ring:</p>
                <p className="text-blue-400">find / -type f -size +100M -exec ls -lh {} \; 2&gt; /dev/null | sort -rh</p>
                <p>$ bu buyruq nima qiladi?</p>
                <p className="text-white">Bu buyruq quyidagilarni bajaradi:</p>
                <p className="text-white">1. Tizimingizda 100MB dan katta barcha fayllarni qidiradi</p>
                <p className="text-white">2. Har bir fayl uchun batafsil ma'lumotlarni ko'rsatadi</p>
                <p className="text-white">3. Xatolik xabarlarini yo'q qiladi</p>
                <p className="text-white">4. Natijalarni hajmi bo'yicha tartiblaydi (eng kattasidan boshlab)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Biz bilan bog'laning</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aurora terminal agentini sinab ko'rish uchun yuklab oling
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <a 
              href="#" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-center text-lg transition-colors"
            >
              Aurora Terminal Agentini yuklab olish
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 