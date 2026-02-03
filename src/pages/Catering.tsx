import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import Button from '../components/UI/Button';

const Catering: React.FC = () => {
  const handleCateringSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const type = formData.get('type');
    const guests = formData.get('guests');
    const details = formData.get('details');
    
    // Replace with your actual WhatsApp number
    const phoneNumber = "493012345678"; 
    
    const message = `Hallo! Ich interessiere mich für ein Catering:%0D%0A%0D%0AName: ${name}%0D%0AEvent: ${type}%0D%0AGäste: ${guests}%0D%0ADetails: ${details}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <div className="relative py-20 bg-brand-surface border-b border-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
             <SectionHeader title="Event Catering" subtitle="Sweet Tables & More" centered={false} />
             <p className="text-brand-text mb-6 leading-relaxed">
               Machen Sie Ihr Event unvergesslich mit einem exklusiven Sweet Table von Cake Princess Pastry.
               Wir arrangieren Torten, Cupcakes, Cake Pops und Macarons zu einem harmonischen Gesamtbild, 
               das perfekt auf Ihr Farb- und Themenkonzept abgestimmt ist.
             </p>
             <ul className="space-y-2 text-brand-muted mb-8">
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                 Firmenjubiläen & Events
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                 Hochzeiten & Verlobungen
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                 Baby Shower & Taufen
               </li>
             </ul>
          </div>
          <div>
            <img src="https://picsum.photos/seed/catering/800/600" alt="Sweet Table" className="rounded-xl shadow-2xl border border-white" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-brand-accent/10">
          <h3 className="text-2xl font-serif text-brand-text text-center mb-8">Catering Anfrage</h3>
          <form onSubmit={handleCateringSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" type="text" placeholder="Firma / Name" className="bg-brand-base/20 border border-brand-accent/20 text-brand-text p-4 rounded-md focus:border-brand-accent outline-none" />
              <input name="email" type="email" placeholder="Email Adresse" className="bg-brand-base/20 border border-brand-accent/20 text-brand-text p-4 rounded-md focus:border-brand-accent outline-none" />
              <input name="type" type="text" placeholder="Art des Events" className="bg-brand-base/20 border border-brand-accent/20 text-brand-text p-4 rounded-md focus:border-brand-accent outline-none" />
              <input name="guests" type="number" placeholder="Anzahl Gäste (ca.)" className="bg-brand-base/20 border border-brand-accent/20 text-brand-text p-4 rounded-md focus:border-brand-accent outline-none" />
            </div>
            <textarea name="details" placeholder="Erzählen Sie uns mehr über Ihre Vorstellungen..." rows={5} className="w-full bg-brand-base/20 border border-brand-accent/20 text-brand-text p-4 rounded-md focus:border-brand-accent outline-none"></textarea>
            <div className="text-center">
              <Button size="lg" className="w-full md:w-auto px-12">Auf WhatsApp anfragen</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Catering;