import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="w-24 h-1 bg-brand-accent mx-auto mb-4 rounded-full" />
      )}
      {subtitle && (
        <p className="text-brand-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;