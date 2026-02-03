import React, { useState } from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Award } from 'lucide-react';

const About: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate submission
    setTimeout(() => {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const InputField = ({ name, type = "text", label, required = false, placeholder }: any) => (
    <div className="relative group">
      <label className={`block text-xs uppercase tracking-widest text-brand-muted mb-2 transition-colors ${focusedField === name ? 'text-brand-accent' : ''}`}>
        {label} {required && '*'}
      </label>
      <input 
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        className="w-full bg-white border border-brand-text/10 text-brand-text px-4 py-4 rounded-sm outline-none transition-all duration-300 focus:border-brand-accent focus:shadow-[0_0_15px_rgba(0,0,0,0.05)] placeholder-brand-muted/50"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-base relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lavender rounded-full blur-[100px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-32 relative z-10">
        
        {/* Intro Section - Asymmetrical Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 border-2 border-brand-accent/30 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://picsum.photos/seed/portrait/600/700" 
              alt="Sarah - Cake Princess" 
              className="relative rounded-sm shadow-2xl w-full object-cover aspect-[4/5] filter sepia-[.2] hover:sepia-0 transition-all duration-700"
            />
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
              <Award className="w-4 h-4" /> The Artist Behind the Apron
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-text mb-8 leading-tight">
              Crafting Sweet <br/>
              <span className="text-brand-accent">Memories</span>
            </h1>
            
            <div className="space-y-6 text-brand-muted text-lg font-light leading-relaxed border-l-2 border-brand-text/10 pl-6">
              <p>
                "Baking is more than a recipe; it's an architecture of taste."
              </p>
              <p>
                My name is Sarah. After years of training in the patisseries of Paris and Vienna, 
                I returned to Berlin with a singular vision: to create cakes that are as visually 
                striking as they are delicious.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
               {[
                 { year: '2010', title: 'Vienna', sub: 'Traditional Arts' },
                 { year: '2013', title: 'Munich', sub: 'Master Class' },
                 { year: '2015', title: 'Berlin', sub: 'Grand Opening' },
               ].map((item, i) => (
                 <div key={i} className="bg-brand-surface border border-brand-text/5 p-4 hover:border-brand-accent/50 transition-colors group shadow-sm">
                    <span className="text-brand-accent font-mono text-sm">{item.year}</span>
                    <h4 className="text-brand-text font-serif text-xl mt-1">{item.title}</h4>
                    <p className="text-brand-muted text-xs mt-1 group-hover:text-brand-text transition-colors">{item.sub}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Contact Section - "Top End" Glass/Dark Panel */}
        <div className="relative">
          <SectionHeader title="Get in Touch" subtitle="Let's start a conversation" />
          
          <div className="grid lg:grid-cols-5 gap-0 bg-brand-surface border border-white rounded-2xl overflow-hidden shadow-2xl">
             
             {/* Info Panel (Left) */}
             <div className="lg:col-span-2 bg-brand-text p-10 flex flex-col justify-between border-r border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-transparent"></div>
                
                <div className="space-y-8 z-10">
                  <h3 className="text-2xl font-serif text-white">Contact Info</h3>
                  
                  <div className="space-y-6">
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-brand-accent transition-all">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Cake Princess Pastry</p>
                        <p className="text-white/60 text-sm">Schlossstraße 12<br/>10115 Berlin</p>
                      </div>
                    </a>

                    <a href="tel:+493012345678" className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-brand-accent transition-all">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Call Us</p>
                        <p className="text-white/60 text-sm">+49 30 12345678</p>
                      </div>
                    </a>

                    <a href="mailto:info@cakeprincess.de" className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-full text-white group-hover:bg-brand-accent transition-all">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email Us</p>
                        <p className="text-white/60 text-sm">info@cakeprincess.de</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                   <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                     <p className="text-white/80 text-xs italic">
                       "Every message is the beginning of a beautiful creation. I personally review all inquiries."
                     </p>
                     <p className="text-white text-xs font-bold mt-2">- Sarah</p>
                   </div>
                </div>
             </div>

             {/* Form Panel (Right) */}
             <div className="lg:col-span-3 p-10 lg:p-12 bg-brand-surface">
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <InputField name="name" label="Your Name" required placeholder="Jane Doe" />
                    <InputField name="email" type="email" label="Your Email" required placeholder="jane@example.com" />
                  </div>
                  
                  <div className="relative group">
                    <label className={`block text-xs uppercase tracking-widest text-brand-muted mb-2 transition-colors ${focusedField === 'message' ? 'text-brand-accent' : ''}`}>
                      Message *
                    </label>
                    <textarea 
                      name="message" 
                      required 
                      rows={5}
                      placeholder="How can we sweeten your day?"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-white border border-brand-text/10 text-brand-text px-4 py-4 rounded-sm outline-none transition-all duration-300 focus:border-brand-accent focus:shadow-[0_0_15px_rgba(0,0,0,0.05)] placeholder-brand-muted/50 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Status Messages */}
                    <div className="flex-1 mr-4">
                      {formStatus === 'success' && (
                        <div className="flex items-center gap-2 text-brand-accent animate-in fade-in slide-in-from-left-4">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">Message sent successfully.</span>
                        </div>
                      )}
                      {formStatus === 'error' && (
                        <div className="flex items-center gap-2 text-red-600 animate-in fade-in slide-in-from-left-4">
                          <AlertCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">Failed to send. Please try again.</span>
                        </div>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="bg-brand-text hover:bg-brand-accent text-white px-10 py-4 rounded-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
                    >
                      {formStatus === 'submitting' ? <Loader2 className="animate-spin h-5 w-5" /> : 'Send Message'}
                    </button>
                  </div>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;