import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Instagram, Mail, Phone, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from "@/components/ContactForm";



const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Expanded portfolio images with multiple photos for each subcategory
  const portfolioImages = [
    // Portrait Photography - Classic Portrait
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      title: "Classic Portrait",
      category: "Portrait"
      
    },

    
    // Portrait Photography - Studio Art
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
      title: "Studio Art",
      category: "Portrait"
    },
  

    // Portrait Photography - Natural Beauty
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=600&fit=crop",
      title: "Natural Beauty ",
      category: "Portrait"
    },
    

    // Wedding Photography - Ceremony
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      title: "Wedding Ceremony ",
      category: "Wedding"
    },
    

    // Wedding Photography - Bridal Portraits
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      title: "Bridal Portrait ",
      category: "Wedding"
    },
    

    // Wedding Photography - Reception & Details
    {
      id: 16,
      src: "/images/reception.png",
      title: "Reception Details ",
      category: "Wedding"
    },
    

    // Landscape Photography - Mountain Vista
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Mountain Vista ",
      category: "Landscape"
    },
    

    // Landscape Photography - Forest & Nature
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      title: "Forest Valley ",
      category: "Landscape"
    },
    

    // Landscape Photography - Ocean & Sunset
    {
      id: 25,
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
      title: "Ocean Sunset ",
      category: "Landscape"
    },
    

    // Event Photography - Corporate Events
    {
      id: 28,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      title: "Corporate Event ",
      category: "Event"
    },
    

    // Event Photography - Birthday Celebrations
    {
      id: 31,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      title: "Birthday Celebration ",
      category: "Event"
    },
    

    // Event Photography - Concert Performance
    {
      id: 34,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      title: "Concert Performance ",
      category: "Event"
    },
    

    // Street Photography - City Lights
    {
      id: 37,
      src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      title: "City Lights ",
      category: "Street"
    },
    {
      id: 38,
      src: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&h=600&fit=crop",
      title: "City Lights ",
      category: "Street"
    },


    // Street Photography - Urban Life
    {
      id: 40,
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      title: "Urban Life I",
      category: "Street"
    },


    // Street Photography - Architecture
    {
      id: 43,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      title: "Architecture ",
      category: "Street"
    },
  

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              UR Pixel Studio
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>
      

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20">
              <Camera className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            UR Pixel Studio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Capturing life's beautiful moments through the lens of creativity and passion
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-300/20"
        />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Portfolio</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A collection of my finest work, capturing emotions and stories through photography
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-3 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm text-white/70">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <img
                  src="/images/uday.png"
                  alt="Photographer"
                  className="w-full h-[800px] aspect-square object-cover rounded-2xl mb-6"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl font-bold text-white">About Me</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate photographer with over 5 years of experience capturing life's most precious moments. 
                My journey began with a simple love for storytelling through images, and it has evolved into a 
                professional pursuit of artistic excellence.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Specializing in portrait, wedding, and landscape photography, I believe every frame tells a unique story. 
                My approach combines technical expertise with creative vision to deliver images that resonate with emotion 
                and authenticity.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Portrait Photography
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Wedding Photography
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Landscape Photography
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Birthday Photography
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Event Photography
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white border border-white/20">
                  Graduation Photography
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="py-20 px-6">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-xl text-white/70 max-w-2xl mx-auto">
        Ready to capture your special moments? Let's create something beautiful together.
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Email */}
      <motion.a
        href="mailto:hello@urpixelstudio.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center block"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-purple-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-white/70">hello@urpixelstudio.com</p>
        </div>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+14107360765"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center block"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
            <Phone className="w-8 h-8 text-blue-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-white/70">+1 (410) 736-0765</p>
        </div>
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/urpixelstudio?igsh=c2EweXBndzkxand1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center block"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
            <Instagram className="w-8 h-8 text-pink-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
          <p className="text-white/70">@urpixelstudio</p>
        </div>
      </motion.a>
    </div>
  </div>
</section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
          </motion.div>

          <ContactForm />
        </div>
      </section>
      

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">
            © 2024 UR Pixel Studio. All rights reserved. Crafted with ❤️ for photography lovers.
          </p>
          <p className="text-white/60">
            © Developed by Pavan Jillella 👨‍💻
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={portfolioImages[selectedImage].src}
                alt={portfolioImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/50 backdrop-blur-xl rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {portfolioImages[selectedImage].title}
                  </h3>
                  <p className="text-white/70">
                    {portfolioImages[selectedImage].category}
                  </p>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};






export default Index;
