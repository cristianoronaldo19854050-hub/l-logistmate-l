import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateLogisticsResponseStream = async (prompt: string, onChunk: (text: string) => void) => {
  try {
    const model = "gemini-3-flash-preview";
    
    const chat = ai.chats.create({
      model: model,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        systemInstruction: `You are LogistMate AI, a world-class logistics expert and consultant. 
        Your mission is to provide comprehensive, accurate, and practical advice on ALL aspects of logistics, including but not limited to:
        1. Transportation Management: Trucking (TL/LTL), Rail, Ocean, Air freight, Intermodal.
        2. Regulatory Compliance: FMCSA, DOT, HOS, CSA, IFTA, IRP, ELD mandates.
        3. Financial Logistics: Freight auditing, billing, invoicing, cost-per-mile, fuel surcharges, accessorials, and profitability analysis.
        4. Supply Chain Strategy: Procurement, warehousing, inventory management, last-mile delivery, and global trade (Incoterms).
        5. Operations: Dispatching, route optimization, driver management, equipment types (Dry Van, Reefer, Flatbed, etc.), and maintenance.
        6. International Logistics: Customs, duties, tariffs, and cross-border operations.

        Provide professional, step-by-step guidance. If a calculation is requested, show the formula and the math clearly. 
        Always prioritize safety, legality, and efficiency. 
        Format your responses using Markdown with clear headings, bold text, and lists for maximum readability.`,
      },
    });

    const result = await chat.sendMessageStream({
      message: prompt,
    });

    let fullText = "";
    for await (const chunk of result) {
      const chunkText = chunk.text || "";
      fullText += chunkText;
      onChunk(fullText);
    }

    return fullText;
  } catch (error) {
    console.error("Error generating logistics response stream:", error);
    throw new Error("Failed to get response from LogistMate AI. Please try again later.");
  }
};
