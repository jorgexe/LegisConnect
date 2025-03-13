"use client"

import { useState } from "react"
import { Bot, Send, X, LucideLoader } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ChatbotAssistant() {
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", content: "¡Hola! Soy LegisIA, tu asistente legislativo. ¿En qué puedo ayudarte hoy?" }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!chatInput.trim()) return

    // Añadir mensaje del usuario
    setChatMessages([...chatMessages, { role: "user", content: chatInput }])
    
    // Simular respuesta del bot
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setChatMessages(prev => [
        ...prev, 
        { 
          role: "bot", 
          content: getBotResponse(chatInput)
        }
      ])
    }, 1000)
    
    setChatInput("")
  }

  interface ChatMessage {
    role: "user" | "bot";
    content: string;
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes("propuesta") || lowerMessage.includes("iniciativa")) {
      return "Las propuestas legislativas pasan por varias etapas: iniciativa, análisis en comisiones, dictamen, votación en pleno y publicación. En LegisConnect puedes seguir cada etapa y ver quien apoya cada iniciativa."
    } else if (lowerMessage.includes("legislador") || lowerMessage.includes("diputado") || lowerMessage.includes("senador")) {
      return "Puedes encontrar información sobre todos los legisladores en la sección de 'Legisladores'. Allí podrás ver su historial de votación, propuestas presentadas y formas de contactarlos."
    } else if (lowerMessage.includes("votar") || lowerMessage.includes("apoyar")) {
      return "Para apoyar una propuesta, simplemente haz clic en el botón 'Apoyar' debajo de cualquier iniciativa. Tu apoyo será registrado y visible para los legisladores."
    } else {
      return "Gracias por tu pregunta. Como asistente legislativo, puedo ayudarte con información sobre propuestas, legisladores, procesos legislativos y cómo participar en LegisConnect. ¿Hay algo específico que quieras saber?"
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ventana de chat */}
      {chatOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: "450px" }}>
          {/* Encabezado del chat */}
          <div className="bg-[#0D3B39] text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/legisia-logo.png" />
                <AvatarFallback className="bg-[#C8A96A]"><Bot className="h-5 w-5" /></AvatarFallback>
              </Avatar>
              <span className="font-medium">LegisIA - Asistente Legislativo</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-[#0D3B39]/90"
              onClick={() => setChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Área de mensajes */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user" 
                      ? "bg-[#0D3B39] text-white rounded-br-none" 
                      : "bg-white border rounded-bl-none shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white border rounded-bl-none shadow-sm flex items-center gap-2">
                    <LucideLoader className="h-4 w-4 animate-spin" />
                    <span>LegisIA está respondiendo...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Área de entrada de texto */}
          <div className="border-t p-3 bg-white">
            <div className="flex gap-2">
              <Textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Escribe tu pregunta aquí..."
                className="resize-none min-h-10"
                rows={2}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                className="bg-[#0D3B39] hover:bg-[#0D3B39]/90"
                disabled={!chatInput.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              LegisIA puede proporcionar información general sobre temas legislativos
            </p>
          </div>
        </div>
      )}
      
      {/* Botón del chatbot */}
      <Button
        onClick={() => setChatOpen(!chatOpen)}
        size="lg"
        className={`rounded-full h-14 w-14 shadow-lg ${
          chatOpen ? "bg-red-500 hover:bg-red-600" : "bg-[#0D3B39] hover:bg-[#0D3B39]/90"
        }`}
      >
        {chatOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Bot className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}