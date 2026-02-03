import React, { useState } from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import Button from '../components/UI/Button';
import { Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Cafe: React.FC = () => {
  const [reservationStatus, setReservationStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleReservationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReservationStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
        setReservationStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setReservationStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeader title="Das Café" subtitle="Ein Ort zum Genießen" />
      
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <p className="text-lg text-brand-text leading-relaxed">
            In unserem gemütlichen Café im Herzen der Stadt laden wir Sie ein, die Zeit für einen Moment anzuhalten.
            Genießen Sie frisch gerösteten Kaffee, hausgemachte Limonaden und natürlich unsere Auswahl an
            Törtchen, Macarons und Kuchenstücken.
          </p>
          <div className="flex items-start gap-4 bg-brand-surface p-6 rounded-lg border border-white shadow-sm">
            <Clock className="h-6 w-6 text-brand-accent mt-1" />
            <div>
              <h4 className="text-brand-text font-serif font-bold mb-2">Öffnungszeiten</h4>
              <ul className="text-brand-muted space-y-1">
                <li className="flex justify-between w-48"><span>Mo - Mi:</span> <span>Ruhetag</span></li>
                <li className="flex justify-between w-48"><span>Do - Sa:</span> <span>10:00 - 18:00</span></li>
                <li className="flex justify-between w-48"><span>So:</span> <span>12:00 - 17:00</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/cafe1/300/400" className="rounded-lg w-full h-full object-cover shadow-lg border border-white" alt="Cafe Interior" />
          <img src="https://picsum.photos/seed/cafe2/300/400" className="rounded-lg w-full h-full object-cover mt-8 shadow-lg border border-white" alt="Coffee and Cake" />
        </div>
      </div>

      <div className="bg-brand-surface border border-white p-8 md:p-12 rounded-2xl max-w-3xl mx-auto text-center shadow-xl">
        <h3 className="text-3xl font-serif text-brand-text mb-6">Tischreservierung</h3>
        <p className="text-brand-muted mb-8">
          Sichern Sie sich Ihren Lieblingsplatz für das Frühstück oder die Kaffeetafel.
        </p>

        {reservationStatus === 'success' && (
          <div className="mb-6 p-4 bg-brand-accent/10 border border-brand-accent text-brand-text rounded-md flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle className="h-5 w-5 text-brand-accent" />
            <span>Reservierung erfolgreich angefragt!</span>
          </div>
        )}
        {reservationStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-500 text-red-800 rounded-md flex items-center justify-center gap-2 animate-in fade-in">
            <AlertCircle className="h-5 w-5" />
            <span>Fehler beim Senden. Bitte versuchen Sie es erneut.</span>
          </div>
        )}

        <form onSubmit={handleReservationSubmit} className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <label className="block text-sm text-brand-muted mb-1">Datum</label>
            <input name="date" required type="date" className="w-full bg-white p-3 rounded text-brand-text border border-brand-text/10 focus:border-brand-accent outline-none" />
          </div>
          <div>
            <label className="block text-sm text-brand-muted mb-1">Uhrzeit</label>
            <input name="time" required type="time" className="w-full bg-white p-3 rounded text-brand-text border border-brand-text/10 focus:border-brand-accent outline-none" />
          </div>
          <div>
            <label className="block text-sm text-brand-muted mb-1">Personen</label>
            <select name="guests" className="w-full bg-white p-3 rounded text-brand-text border border-brand-text/10 focus:border-brand-accent outline-none">
              <option>2 Personen</option>
              <option>3 Personen</option>
              <option>4 Personen</option>
              <option>5+ Personen</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-brand-muted mb-1">Name</label>
            <input name="name" required type="text" placeholder="Ihr Name" className="w-full bg-white p-3 rounded text-brand-text border border-brand-text/10 focus:border-brand-accent outline-none" />
          </div>
          <div className="md:col-span-2">
            <Button 
              fullWidth 
              disabled={reservationStatus === 'submitting'}
              className="flex items-center justify-center gap-2"
            >
              {reservationStatus === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Senden...
                </>
              ) : (
                'Reservierung absenden'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cafe;