import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Heart,
  ShoppingBag,
  Calendar,
  User,
  Phone,
  ArrowRight,
  Quote
} from 'lucide-react';

// --- Types ---
interface CaftanItem {
  id: number;
  name: string;
  type: 'Location' | 'Vente';
  price: string;
  image: string;
  category: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

// --- Constants ---
const CAFTANS: CaftanItem[] = [
  { id: 1, name: "Sultana Gold", type: 'Vente', price: "4500 DH", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop", category: "Mariage" },
  { id: 2, name: "Majestic Rose", type: 'Location', price: "800 DH", image: "https://images.unsplash.com/photo-1594235412411-29888173f95d?q=80&w=800&auto=format&fit=crop", category: "Luxe" },
  { id: 3, name: "Emerald Queen", type: 'Vente', price: "3800 DH", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop", category: "Mariage" },
  { id: 4, name: "Pearl White", type: 'Location', price: "1200 DH", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", category: "Mariage" },
  { id: 5, name: "Sapphire Night", type: 'Vente', price: "5200 DH", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop", category: "Luxe" },
  { id: 6, name: "Desert Sand", type: 'Location', price: "600 DH", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop", category: "Simple" }
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Salma B.", text: "Le caftan était absolument magnifique pour mon mariage. Service impeccable !", rating: 5 },
  { id: 2, name: "Yasmine K.", text: "Une collection unique. J'ai loué une robe pour une soirée et j'ai reçu tellement de compliments.", rating: 5 },
  { id: 3, name: "Nadia T.", text: "Qualité exceptionnelle des tissus. La vente s'est très bien passée.", rating: 4 }
];

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594235412411-29888173f95d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Collection', href: '#collection' },
    { name: 'Catégories', href: '#categories' },
    { name: 'Témoignages', href: '#temoignages' },
    { name: 'Réservation', href: '#reservation' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-serif font-bold tracking-[0.2em] text-brand-dark">
          CAFTAN <span className="text-brand-gold">LADIES</span>
        </a>

        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/212000000000" target="_blank" className="btn-luxury !py-2 !px-6 !text-xs">
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-brand-pink absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-serif text-brand-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/212000000000" target="_blank" className="btn-luxury text-center">
                WhatsApp Booking
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594235412411-29888173f95d?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Caftan" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-pink font-medium tracking-[0.5em] uppercase text-sm mb-6 block drop-shadow-md">Haute Couture Marocaine</span>
          <h1 className="text-7xl md:text-9xl text-white font-serif mb-6 drop-shadow-2xl leading-tight">
            Caftan Ladies
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-widest mb-12 max-w-2xl mx-auto italic">
            Elegant Moroccan Caftans for Every Special Occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#collection" className="btn-luxury min-w-[200px] flex items-center justify-center gap-2">
              View Collection
            </a>
            <a 
              href="https://wa.me/212000000000" 
              target="_blank"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all min-w-[200px] flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Découvrir</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-brand-cream moroccan-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl gold-border">
              <img 
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop" 
                alt="Brand Story" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-pink/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold-gradient text-sm font-bold tracking-[0.3em] uppercase mb-6">L'Héritage & Le Style</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-brand-dark">
              À Propos de la <span className="italic">Marque</span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light">
              "Caftan Ladies offers a unique collection of Moroccan caftans designed for weddings, engagements, and special celebrations. Our mission is to combine traditional Moroccan elegance with modern style."
            </p>
            <div className="space-y-6">
              {[
                "Tissus de haute qualité importés",
                "Broderies artisanales faites main",
                "Coupes sur mesure et ajustements",
                "Service de conciergerie de luxe"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                    <Star size={12} className="text-brand-gold" />
                  </div>
                  <span className="text-brand-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturedCollection = () => {
  return (
    <section id="collection" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-4">Sélection Exclusive</h2>
          <h3 className="text-5xl font-serif text-brand-dark">Collection Vedette</h3>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CAFTANS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.type === 'Location' ? 'bg-brand-pink text-brand-dark' : 'bg-brand-gold text-white'}`}>
                    {item.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Détails <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-serif mb-2 text-brand-dark">{item.name}</h4>
                <p className="text-brand-gold font-bold text-lg">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: "Caftans de Mariage", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
    { name: "Caftans de Luxe", img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600&auto=format&fit=crop" },
    { name: "Élégance Simple", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop" },
    { name: "Nouvelle Collection", img: "https://images.unsplash.com/photo-1594235412411-29888173f95d?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="categories" className="py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
              <img 
                src={c.img} 
                alt={c.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-0 w-full text-center px-6">
                <h4 className="text-white text-2xl font-serif mb-4">{c.name}</h4>
                <div className="w-10 h-px bg-brand-gold mx-auto group-hover:w-20 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Star />, title: "Premium quality fabrics", desc: "Soie, velours et dentelles de premier choix." },
    { icon: <Heart />, title: "Unique Moroccan designs", desc: "Créations exclusives inspirées de la royauté." },
    { icon: <ShoppingBag />, title: "Affordable rental prices", desc: "Le luxe accessible pour vos événements." },
    { icon: <MessageCircle />, title: "Easy WhatsApp reservation", desc: "Réponse rapide et service personnalisé." }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 bg-brand-beige rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-inner">
                {React.cloneElement(r.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-xl font-serif mb-4 text-brand-dark">{r.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-32 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote size={300} className="text-brand-gold" />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-serif text-brand-dark">Paroles de Clientes</h3>
          <div className="section-divider"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <motion.div 
              key={t.id}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 rounded-[2.5rem] relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
              <h5 className="font-bold text-brand-dark tracking-widest uppercase text-xs">— {t.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramGallery = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-4xl font-serif text-brand-dark">Instagram Gallery</h3>
            <p className="text-brand-gold font-medium mt-2">@caftanladies_official</p>
          </div>
          <a href="#" className="text-xs font-bold uppercase tracking-widest border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors">Follow Us</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative cursor-pointer">
              <img 
                src={img} 
                alt="Instagram" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="reservation" className="py-32 bg-brand-cream moroccan-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row gold-border">
          <div className="lg:w-1/2 p-12 lg:p-24">
            <h3 className="text-5xl font-serif mb-10 text-brand-dark">Réserver votre <span className="italic text-brand-gold">Caftan</span></h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-2">
                    <User size={12} /> Nom Complet
                  </label>
                  <input type="text" className="w-full bg-brand-beige/50 border-b border-brand-pink py-3 focus:border-brand-gold outline-none transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-2">
                    <Phone size={12} /> Téléphone
                  </label>
                  <input type="tel" className="w-full bg-brand-beige/50 border-b border-brand-pink py-3 focus:border-brand-gold outline-none transition-colors" placeholder="+212 ..." />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-2">
                    <Calendar size={12} /> Date de l'événement
                  </label>
                  <input type="date" className="w-full bg-brand-beige/50 border-b border-brand-pink py-3 focus:border-brand-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-2">
                    <ShoppingBag size={12} /> Caftan Préféré
                  </label>
                  <select className="w-full bg-brand-beige/50 border-b border-brand-pink py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
                    <option>Sélectionner un modèle</option>
                    {CAFTANS.map(c => <option key={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn-luxury w-full py-5 text-lg shadow-xl shadow-brand-gold/20">
                Envoyer la demande
              </button>
            </form>
            
            <div className="mt-12 pt-12 border-t border-brand-pink text-center">
              <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Ou réservez instantanément</p>
              <a 
                href="https://wa.me/212000000000" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle size={28} />
                WhatsApp Booking
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1594235412411-29888173f95d?q=80&w=1200&auto=format&fit=crop" 
              alt="Booking" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-gold/20 backdrop-blur-[2px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-serif text-brand-dark">Notre Boutique</h3>
          <div className="section-divider"></div>
          <p className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={18} className="text-brand-gold" />
            Centre Ville, Larache, Maroc
          </p>
        </div>
        <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.26363046782!2d-6.15!3d35.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0bc00000000001%3A0x8f00000000000000!2sLarache!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
          <div className="absolute top-10 left-10 glass-card p-8 rounded-3xl max-w-xs">
            <h4 className="text-xl font-serif mb-4">Horaires d'ouverture</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex justify-between"><span>Lun - Ven:</span> <span>10:00 - 19:00</span></p>
              <p className="flex justify-between"><span>Samedi:</span> <span>10:00 - 18:00</span></p>
              <p className="flex justify-between text-brand-gold font-bold"><span>Dimanche:</span> <span>Fermé</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-4xl font-serif font-bold tracking-[0.3em] mb-8 block">
              CAFTAN <span className="text-brand-gold">LADIES</span>
            </a>
            <p className="text-white/50 max-w-md leading-relaxed mb-10">
              L'excellence de la haute couture marocaine. Nous créons des pièces d'exception pour sublimer vos moments les plus précieux avec élégance et tradition.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-8">Navigation</h5>
            <ul className="space-y-4 text-white/60">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Catégories</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">Réservation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-8">Contact</h5>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3"><Phone size={14} className="text-brand-gold" /> +212 6 00 00 00 00</li>
              <li className="flex items-center gap-3"><MessageCircle size={14} className="text-brand-gold" /> WhatsApp Booking</li>
              <li className="flex items-center gap-3"><MapPin size={14} className="text-brand-gold" /> Larache, Maroc</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Caftan Ladies. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedCollection />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <InstagramGallery />
      <BookingSection />
      <Location />
      <Footer />
    </div>
  );
}
