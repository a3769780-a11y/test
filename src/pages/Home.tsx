import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Plus, MessageCircle, Play, Heart, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeader from '../components/UI/SectionHeader';
import Button from '../components/UI/Button';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [reservationStatus, setReservationStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleReservationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReservationStatus('submitting');
    // Simulation of API call
    setTimeout(() => {
      setReservationStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setReservationStatus('idle'), 5000);
    }, 1500);
  };

  const handleCakeInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const occasion = formData.get('occasion');
    const date = formData.get('date');
    const vision = formData.get('vision');
    const name = formData.get('name');
    
    const phoneNumber = "493012345678"; 
    
    const message = `Hallo! Ich habe eine Anfrage für eine Torte:%0D%0A%0D%0AName: ${name}%0D%0AAnlass: ${occasion}%0D%0ADatum: ${date}%0D%0AIdee: ${vision}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const categories = [
    { title: "CHILDREN'S CAKE", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop", type: 'outline' },
    { title: "WEDDING CAKE", image: "https://images.unsplash.com/photo-1562772379-08ae7e4324a2?q=80&w=800&auto=format&fit=crop", type: 'filled' },
    { title: "SEASONAL CAKE", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", type: 'outline' },
  ];

  const works = [
    { title: "Orchid Embrace", img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600&auto=format&fit=crop" },
    { title: "Woodland Whimsy", img: "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=600&auto=format&fit=crop" },
    { title: "Sprinkle Joy Cupcake", img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" },
    { title: "Berry Bliss Slice", img: "https://images.unsplash.com/photo-1563729768-6af7c46d6618?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-brand-base overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION - MAGNIFICENT EDITORIAL STYLE */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-brand-pink/30 rounded-full blur-[120px]"></div>
           <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-brand-lavender/30 rounded-full blur-[120px]"></div>
           <img 
             src="https://www.svgrepo.com/show/493630/flower-floral-design.svg" 
             className="absolute bottom-0 left-0 w-[30rem] h-[30rem] opacity-[0.03] -translate-x-1/4 translate-y-1/4 rotate-12" 
             alt="decor" 
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Typography */}
          <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left">
             <div className="inline-flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                <span className="h-px w-12 bg-brand-text/30"></span>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-muted">Est. 2025 • London</span>
             </div>
             
             <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif text-brand-text leading-[1.0] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
               <span className="block">Sweet</span>
               <span className="block font-light italic text-brand-gold relative z-10">
                 Elegance
                 <svg className="absolute -bottom-2 left-0 w-full h-4 text-brand-pink -z-10 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
               </span>
             </h1>
             
             <p className="text-brand-muted text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
               Where artisan pastry meets modern design. Discover handcrafted cakes that turn your moments into unforgettable memories.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
               <Link to="/leistungen">
                 <Button variant="primary" size="lg" className="shadow-2xl shadow-brand-accent/20 hover:-translate-y-1">View Collection</Button>
               </Link>
               <Button variant="outline" size="lg" onClick={() => document.getElementById('reservation-section')?.scrollIntoView({behavior: 'smooth'})}>Book a Table</Button>
             </div>
          </div>

          {/* Right: Grand Arch Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center lg:justify-end h-full">
             <div className="relative w-full max-w-md aspect-[3/4] animate-in fade-in zoom-in-95 duration-1000">
                
                {/* Main Arch */}
                <div className="absolute inset-0 rounded-t-full rounded-b-[300px] overflow-hidden border-[8px] border-white shadow-2xl z-20">
                   <img 
                     src="https://images.unsplash.com/photo-1562772379-08ae7e4324a2?q=80&w=1000&auto=format&fit=crop" 
                     alt="Signature Cake" 
                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms]"
                   />
                </div>
                
                {/* Floating Badge (Spinning) */}
                <div className="absolute -bottom-12 -left-8 lg:-left-12 z-30 bg-brand-base p-2 rounded-full shadow-xl">
                   <div className="bg-white rounded-full p-1">
                      <div className="relative w-28 h-28 border border-dashed border-brand-gold rounded-full flex items-center justify-center animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                          <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74, 0 a 37,37 0 1,1 -74, 0" fill="none" />
                          <text className="text-[11px] uppercase font-bold tracking-[0.2em] fill-brand-text">
                            <textPath href="#curve" startOffset="0%">
                              • Freshly Baked • Made With Love
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Heart className="w-5 h-5 text-brand-accent fill-current" />
                      </div>
                   </div>
                </div>

                {/* Offset Border Effect */}
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-t-full rounded-b-[300px] -z-10"></div>
             </div>
          </div>

        </div>
      </section>

      {/* 2. TRADITION BANNER (Refined) */}
      <section className="relative h-[50vh] overflow-hidden">
         <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1602351447937-745cb72061d5?q=80&w=1920&auto=format&fit=crop" 
              alt="Baking Tradition" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-text/40 backdrop-blur-[1px]"></div>
         </div>
         
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-white/80 font-script text-3xl mb-2">Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
              A Slice Of Tradition
            </h2>
            <div className="h-px w-20 bg-white/50 mb-6"></div>
            <p className="text-white/90 font-light max-w-lg text-sm md:text-base tracking-wide leading-relaxed mb-8">
              Discover the rich flavor and soft texture of our signature vanilla butter cake, baked fresh daily using recipes passed down through generations.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-text">Discover More</Button>
         </div>
      </section>

      {/* 3. CATEGORIES (Refined Ovals) */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <SectionHeader title="The Collections" subtitle="Curated For Every Celebration" />
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center mt-12">
          {categories.map((cat, idx) => (
             <div key={idx} className={`relative flex flex-col items-center text-center group w-full ${cat.type === 'filled' ? 'md:-translate-y-12' : ''}`}>
                <div 
                  className={`
                    w-full max-w-[280px] aspect-[2/3] rounded-[1000px] overflow-hidden relative transition-all duration-700 
                    ${cat.type === 'outline' 
                      ? 'border border-brand-text/10 bg-white/50 p-8 hover:border-brand-gold hover:shadow-xl' 
                      : 'bg-brand-text shadow-2xl scale-105'}
                  `}
                >
                   {cat.type === 'filled' ? (
                     <>
                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                           <h3 className="text-2xl font-serif mb-4 leading-tight text-center drop-shadow-lg">
                             {cat.title.split(' ').map((w, i) => <span key={i} className="block">{w}</span>)}
                           </h3>
                           <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-8 hover:scale-110 transition-transform cursor-pointer">
                             <Play className="w-6 h-6 fill-white text-white" />
                           </div>
                           <Link to="/galerie" className="absolute bottom-10 text-xs uppercase tracking-[0.2em] border-b border-white/50 pb-1">View Gallery</Link>
                        </div>
                     </>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-brand-base/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-12 h-0.5 bg-brand-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
                        <h3 className="text-xl font-serif text-brand-text uppercase tracking-widest px-4 relative z-10">
                          {cat.title.split(' ').map((w, i) => <span key={i} className="block mb-2">{w}</span>)}
                        </h3>
                     </div>
                   )}
                </div>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/leistungen">
             <Button variant="primary" size="md" className="px-10">All Categories</Button>
          </Link>
        </div>
      </section>

      {/* 4. OUR WORKS (Clean Masonry) */}
      <section className="bg-brand-text py-24 text-white relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div className="text-left">
                 <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Selected Works</h2>
                 <p className="text-white/60 font-light italic">Recent masterpieces from our kitchen</p>
               </div>
               <Link to="/galerie">
                 <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-brand-text mt-6 md:mt-0">View Portfolio</Button>
               </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {works.map((work, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-sm ${idx % 2 === 1 ? 'lg:mt-12' : ''}`}>
                  <div className="aspect-[3/4] w-full bg-brand-muted/20 overflow-hidden">
                    <img 
                      src={work.img} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transform">
                     <p className="text-brand-gold text-[10px] uppercase tracking-widest mb-1">Signature</p>
                     <p className="text-white font-serif text-lg tracking-wide">{work.title}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 5. RESERVATION SECTION */}
      <section id="reservation-section" className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-sm overflow-hidden">
          
          {/* Image Side */}
          <div className="relative min-h-[500px] hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-text/20 mix-blend-multiply"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <h3 className="text-4xl font-serif text-white mb-2">Reserve Your Spot</h3>
               <p className="text-white/90">Join us for an unforgettable afternoon tea.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brand-surface p-12 flex flex-col justify-center border-l border-white">
            <div className="mb-8">
              <h3 className="text-3xl font-serif text-brand-text mb-2">Table Reservation</h3>
              <div className="h-1 w-20 bg-brand-accent"></div>
              {reservationStatus === 'success' && (
                <div className="mt-4 p-4 bg-brand-accent/10 border border-brand-accent text-brand-text rounded-md flex items-center gap-2 animate-in fade-in">
                  <CheckCircle className="h-5 w-5 text-brand-accent" />
                  <span>Reservation request sent successfully!</span>
                </div>
              )}
              {reservationStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-500 text-red-800 rounded-md flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="h-5 w-5" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </div>
            
            <form onSubmit={handleReservationSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-muted font-bold">Date</label>
                    <input name="date" required type="date" className="w-full bg-white border border-brand-text/10 focus:border-brand-accent text-brand-text px-4 py-3 outline-none transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-brand-muted font-bold">Time</label>
                    <input name="time" required type="time" className="w-full bg-white border border-brand-text/10 focus:border-brand-accent text-brand-text px-4 py-3 outline-none transition-colors" />
                 </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-brand-muted font-bold">Name</label>
                <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white border border-brand-text/10 focus:border-brand-accent text-brand-text px-4 py-3 outline-none transition-colors placeholder-brand-muted/50" />
              </div>
              
              <button 
                type="submit" 
                disabled={reservationStatus === 'submitting'}
                className="w-full bg-brand-accent text-white font-bold uppercase tracking-widest py-4 hover:bg-brand-accentHover transition-colors shadow-lg shadow-brand-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {reservationStatus === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  'Request Booking'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FAQ & CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-12">
             <div className="bg-brand-pink py-2 px-6 rounded-full text-center uppercase tracking-widest text-[10px] font-bold mb-8 w-fit mx-auto text-brand-text">
                Support & Details
             </div>
             
             <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                   <h3 className="text-3xl font-serif text-brand-text mb-6">Common Questions</h3>
                   {[
                     "How far in advance should I order?",
                     "Do you offer tastings for wedding cakes?", 
                     "Can you accommodate severe nut allergies?"
                   ].map((q, i) => (
                     <div key={i} className="border-b border-brand-muted/10 pb-4 group cursor-pointer hover:pl-2 transition-all duration-300">
                        <div className="flex justify-between items-center">
                           <h5 className="text-base font-medium text-brand-text group-hover:text-brand-accent transition-colors">{q}</h5>
                           <Plus className="w-4 h-4 text-brand-gold opacity-50 group-hover:opacity-100" />
                        </div>
                     </div>
                   ))}
                </div>
                
                <div className="bg-brand-surface border border-brand-text/5 p-8 lg:p-12 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden h-full shadow-lg">
                   {/* Decor */}
                   <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-brand-pink rounded-full blur-2xl opacity-50"></div>
                   
                   <div className="bg-white p-5 rounded-full mb-6 shadow-sm relative z-10 border border-brand-text/5">
                      <MessageCircle className="w-8 h-8 text-brand-text" />
                   </div>
                   <h4 className="font-bold text-xl mb-2 text-brand-text relative z-10">Have a specific vision?</h4>
                   <p className="text-brand-muted mb-8 relative z-10">Our AI Cake Consultant is ready to help you brainstorm ideas instantly.</p>
                   <Button variant="outline" size="md" className="relative z-10">Chat With Us</Button>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* 7. BLOG (Refined) */}
      <section className="bg-brand-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
             <div>
               <h2 className="text-3xl font-serif text-white mb-2">Journal</h2>
               <p className="text-white/60 text-sm">Stories from the bakery</p>
             </div>
             <a href="#" className="text-xs uppercase tracking-widest hover:text-brand-gold transition-colors">View All Posts</a>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
             {/* Main Featured Article */}
             <div className="relative h-[400px] group overflow-hidden border border-white/5 rounded-sm">
                <img src="https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" alt="Blog 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="text-[10px] uppercase tracking-widest text-brand-gold mb-2">Mar 22, 2025</div>
                   <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">Why Our Cakes Are Always Fresh</h3>
                   <p className="text-white/70 text-sm line-clamp-2 max-w-md">Discover the secret behind our moist textures and why we strictly bake to order, ensuring every bite is perfect.</p>
                </div>
             </div>
             
             {/* Smaller Articles */}
             <div className="grid grid-rows-2 gap-8">
                <div className="flex gap-6 items-center group cursor-pointer">
                   <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                      <img src="https://images.unsplash.com/photo-1616031036224-345371660999?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="mini" />
                   </div>
                   <div>
                      <div className="text-[10px] text-brand-gold mb-1">Apr 10, 2025</div>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-brand-gold transition-colors">5 Elegant Cakes For Spring</h3>
                      <p className="text-white/50 text-xs">Floral inspirations and pastel palettes for the season.</p>
                   </div>
                </div>
                
                <div className="flex gap-6 items-center group cursor-pointer">
                   <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
                      <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="mini 2" />
                   </div>
                   <div>
                      <div className="text-[10px] text-brand-gold mb-1">Feb 17, 2025</div>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-brand-gold transition-colors">Storage Tips</h3>
                      <p className="text-white/50 text-xs">How to keep your custom cake tasting fresh for days.</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER BANNER */}
      <section className="bg-brand-pink py-20 mt-12 relative overflow-hidden">
         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-text mb-6">
              <span className="italic block mb-2">Ready To Taste</span>
              Sweet Elegance?
            </h2>
            <p className="text-brand-muted max-w-lg mx-auto mb-10 text-lg">
              Book your consultation today and let us bring your dream cake to life.
            </p>
            <Button variant="primary" size="lg" className="px-12 py-5 text-sm">Start Your Order</Button>
         </div>
         
         {/* Background Decor */}
         <div className="absolute top-10 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
      </section>

    </div>
  );
};

export default Home;