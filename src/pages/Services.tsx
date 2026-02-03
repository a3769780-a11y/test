import React, { useState } from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import Button from '../components/UI/Button';
import { CAKE_CATEGORIES } from '../constants';
import { Cake, Truck, Gift } from 'lucide-react';
import { ServiceType } from '../types';
import { Link as RouterLink } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>(ServiceType.CAKES);

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const occasion = formData.get('occasion');
    const date = formData.get('date');
    const wishes = formData.get('wishes');

    const phoneNumber = "493012345678";
    const message = `Hallo! Ich habe eine unverbindliche Anfrage:%0D%0A%0D%0AAnlass: ${occasion}%0D%0ADatum: ${date}%0D%0AWünsche: ${wishes}`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeader title="Unsere Leistungen" subtitle="Mit Liebe handgemacht" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab(ServiceType.CAKES)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
            activeTab === ServiceType.CAKES 
            ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
            : 'bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-white'
          }`}
        >
          <Cake className="h-5 w-5" /> Individuelle Torten
        </button>
        <button
          onClick={() => setActiveTab(ServiceType.DELIVERY)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
            activeTab === ServiceType.DELIVERY 
            ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
            : 'bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-white'
          }`}
        >
          <Truck className="h-5 w-5" /> Lieferung
        </button>
        <button
          onClick={() => setActiveTab(ServiceType.VOUCHER)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
            activeTab === ServiceType.VOUCHER 
            ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
            : 'bg-brand-surface text-brand-muted hover:text-brand-text hover:bg-white'
          }`}
        >
          <Gift className="h-5 w-5" /> Gutscheine
        </button>
      </div>

      {/* Content */}
      <div className="animate-in fade-in duration-500">
        
        {activeTab === ServiceType.CAKES && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-serif text-brand-text mb-4">Torten nach Maß</h3>
              <p className="text-brand-muted">
                Jede Torte ist ein Unikat. Wir beraten Sie ausführlich zu Geschmacksrichtungen, Design und Größe.
                Nutzen Sie gerne auch unseren <span className="text-brand-accent font-semibold">KI-Berater</span> unten rechts für erste Ideen!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CAKE_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-brand-surface rounded-xl overflow-hidden border border-white hover:border-brand-accent group shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-brand-text mb-2">{cat.title}</h4>
                    <p className="text-brand-muted mb-4 text-sm">{cat.description}</p>
                    <LinkButton to="/galerie">Galerie ansehen</LinkButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-surface p-8 rounded-xl max-w-2xl mx-auto border border-white shadow-md">
              <h4 className="text-xl font-serif text-brand-text mb-4 text-center">Unverbindliche Anfrage</h4>
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <input name="occasion" type="text" placeholder="Anlass (z.B. Hochzeit)" className="w-full bg-white p-3 rounded text-brand-text border border-brand-accent/20 focus:border-brand-accent focus:outline-none" />
                <input name="date" type="date" className="w-full bg-white p-3 rounded text-brand-text border border-brand-accent/20 focus:border-brand-accent focus:outline-none" />
                <textarea name="wishes" placeholder="Ihre Wünsche..." rows={3} className="w-full bg-white p-3 rounded text-brand-text border border-brand-accent/20 focus:border-brand-accent focus:outline-none" />
                <Button fullWidth>Anfrage via WhatsApp</Button>
              </form>
            </div>
          </div>
        )}

        {activeTab === ServiceType.DELIVERY && (
          <div className="max-w-3xl mx-auto bg-brand-surface p-8 rounded-xl border border-white shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-base p-4 rounded-full mb-6">
                <Truck className="h-10 w-10 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-serif text-brand-text mb-4">Lieferservice</h3>
              <p className="text-brand-muted mb-6">
                Wir liefern Ihre Torte sicher und gekühlt direkt zur Eventlocation. 
                Die Lieferung ist innerhalb von Berlin möglich.
              </p>
              <ul className="text-left space-y-3 text-brand-muted mb-8 bg-white p-6 rounded-lg w-full border border-brand-accent/10">
                <li className="flex justify-between">
                  <span>Lieferung Zone A (bis 5km)</span>
                  <span className="text-brand-accent font-mono">15,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Lieferung Zone B (bis 15km)</span>
                  <span className="text-brand-accent font-mono">25,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Lieferung Zone C (ab 15km)</span>
                  <span className="text-brand-accent font-mono">auf Anfrage</span>
                </li>
              </ul>
              <p className="text-sm text-brand-muted/70">
                *Für Hochzeitstorten inklusive Aufbau vor Ort.
              </p>
            </div>
          </div>
        )}

        {activeTab === ServiceType.VOUCHER && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
             <img src="https://picsum.photos/seed/voucher/500/400" className="rounded-xl shadow-lg border border-white" alt="Gutschein" />
             <div>
               <h3 className="text-2xl font-serif text-brand-text mb-4">Gutscheine verschenken</h3>
               <p className="text-brand-muted mb-6">
                 Unsere Gutscheine sind 3 Jahre gültig und können für alle Produkte und Leistungen eingelöst werden.
                 Sie erhalten den Gutschein hochwertig gedruckt per Post oder als PDF zum Selbstausdrucken.
               </p>
               <div className="bg-brand-surface p-6 rounded-lg border border-white shadow-md">
                 <h4 className="text-brand-text mb-4 font-semibold">Gutschein bestellen</h4>
                 <div className="space-y-3">
                   <select className="w-full bg-white p-3 rounded text-brand-text border border-brand-accent/20">
                     <option>Wert: 25 €</option>
                     <option>Wert: 50 €</option>
                     <option>Wert: 100 €</option>
                   </select>
                   <Button fullWidth>Zum Warenkorb</Button>
                 </div>
               </div>
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

const LinkButton = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <RouterLink to={to} className="text-brand-accent hover:text-brand-accentHover text-sm font-semibold uppercase tracking-wider transition-colors">
    {children}
  </RouterLink>
);

export default Services;