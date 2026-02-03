import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getCakeRecommendation = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "Ich kann leider gerade keine Verbindung zu meinem Back-Assistenten herstellen. Bitte versuchen Sie es später.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      Du bist der "Cake Princess Assistant", ein freundlicher und kreativer KI-Experte für Torten und Gebäck der "Cake Princess Pastry".
      Deine Aufgabe ist es, Kunden zu beraten, welche Art von Torte für ihren Anlass perfekt wäre.
      
      Stil:
      - Elegant, höflich, ein bisschen verspielt ("Princess"-Vibe).
      - Du schlägst Geschmacksrichtungen vor (z.B. Himbeer-Vanille, Dunkle Schokolade-Salzkaramell).
      - Du schlägst Designs vor (z.B. Dripping Cake, Naked Cake, Fondant-Figuren).
      - Du antwortest auf Deutsch.
      - Halte die Antworten kurz und inspirierend (max 100 Wörter).
      
      Wenn der Kunde nach Preisen fragt, verweise bitte höflich auf das Kontaktformular für ein individuelles Angebot.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Entschuldigung, ich habe gerade keine Idee. Fragen Sie mich etwas anderes!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hoppla, da ist etwas schiefgelaufen. Mein Zuckerguss ist geschmolzen! Bitte versuchen Sie es später noch einmal.";
  }
};
