import { useState } from 'react';
import { getCakeRecommendation } from '../services/geminiService';

export type Message = {
    role: 'user' | 'ai';
    text: string;
};

export const useCakeConsultant = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: 'Hallo! Ich bin dein Cake Princess Assistent. Erzähl mir von deinem Anlass (z.B. Hochzeit, Geburtstag) und ich schlage dir tolle Tortenideen vor!' }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text }]);
        setIsLoading(true);

        try {
            const response = await getCakeRecommendation(text);
            setMessages(prev => [...prev, { role: 'ai', text: response }]);
        } catch (error) {
            console.error("Error fetching recommendation:", error);
            setMessages(prev => [...prev, { role: 'ai', text: 'Entschuldigung, ich habe gerade Schwierigkeiten, eine Verbindung herzustellen. Bitte versuche es später noch einmal.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        isLoading,
        sendMessage
    };
};
