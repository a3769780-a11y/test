import React, { useState } from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { X, ZoomIn, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Wedding' | 'Birthday' | 'Corporate' | 'Catering'>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const filters = ['All', 'Wedding', 'Birthday', 'Corporate', 'Catering'];

  const openLightbox = (item: GalleryItem) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  return (
    <div className="min-h-screen bg-brand-base relative">
      {/* Decorative background blur */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <SectionHeader title="The Collection" subtitle="Curated masterpieces from our atelier" />

        {/* Boutique Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-brand-accent/20 pb-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`pb-4 text-sm uppercase tracking-widest transition-all relative group ${
                filter === f 
                  ? 'text-brand-accent font-semibold' 
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {f === 'All' ? 'View All' : f}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-brand-accent transform transition-transform duration-300 ${filter === f ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </button>
          ))}
        </div>

        {/* Masonry Layout for "Art Gallery" Feel */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => openLightbox(item)}
              className="group relative break-inside-avoid bg-brand-surface p-3 rounded-sm shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-500 border border-white hover:border-brand-accent"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-[2px]">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                      <div className="bg-white text-brand-accent p-3 rounded-full mb-4 shadow-lg">
                        <ZoomIn className="h-6 w-6" />
                      </div>
                      <span className="text-white font-serif italic text-lg tracking-wide">View Details</span>
                   </div>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-4 pb-2 px-1 text-center">
                <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{item.category}</p>
                <h3 className="text-brand-text font-serif text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-brand-muted">
            <p>No creations found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={closeLightbox}
          ></div>
          
          <div className="relative bg-brand-surface border border-white w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row max-h-[90vh]">
            
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-brand-base/80 text-brand-text p-2 rounded-full hover:bg-brand-accent hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-brand-base/30 flex items-center justify-center p-0 md:p-4">
              <img 
                src={selectedItem.src} 
                alt={selectedItem.title} 
                className="max-h-[50vh] md:max-h-[85vh] w-auto object-contain shadow-2xl rounded-sm"
              />
            </div>

            {/* Modal Details */}
            <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-brand-surface border-l border-white">
              <div className="mb-auto">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-brand-accent h-4 w-4" />
                  <span className="text-brand-muted text-xs uppercase tracking-widest">{selectedItem.category} Collection</span>
                </div>
                <h2 className="text-4xl font-serif text-brand-text mb-6">{selectedItem.title}</h2>
                <div className="w-16 h-1 bg-brand-accent mb-6"></div>
                <p className="text-brand-muted font-light leading-relaxed mb-8">
                  Handcrafted with precision and passion. This design features our signature buttercream finish and edible art accents. Perfect for making a statement at your event.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <Link to="/ueber-mich"> 
                  <Button fullWidth className="group flex items-center justify-center gap-3 py-4">
                    Inquire About This Design <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <button 
                  onClick={closeLightbox}
                  className="w-full text-center text-brand-muted hover:text-brand-text text-sm py-2 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;