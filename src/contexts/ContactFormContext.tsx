"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

interface ContactFormContextType {
  isPopupOpen: boolean;
  setIsPopupOpen: (isOpen: boolean) => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <ContactFormContext.Provider value={{ isPopupOpen, setIsPopupOpen }}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactFormContext() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactFormContext must be used within a ContactFormProvider');
  }
  return context;
}