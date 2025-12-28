import React, { useState, useEffect, useRef } from 'react';
import { Mic, MessageSquare, X, Volume2, Play } from 'lucide-react';

const VoiceAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    // Hindi Script
    const hindiScript = `नमस्कार! आपका स्वागत है Unnao Electronics & CCTV Services में — Unnao में सुरक्षा और इलेक्ट्रॉनिक्स सेवा का भरोसेमंद नाम। अगर आप CCTV कैमरा लगवाना चाहते हैं, CP Plus CCTV कैमरा सर्विस, या इलेक्ट्रॉनिक्स रिपेयर की तलाश में हैं — तो आप बिल्कुल सही जगह पर हैं। हम प्रदान करते हैं CCTV कैमरा इंस्टॉलेशन, CCTV कैमरा रिपेयर और मेंटेनेंस, और CP Plus CCTV सर्विस सपोर्ट — घर, दुकान, ऑफिस, स्कूल और फैक्ट्री के लिए। इसके साथ ही हम करते हैं Smart Door Lock इंस्टॉलेशन, Digital Clock और Automatic Bell System, और सभी प्रकार की Electronics Service Near Unnao। अगर आपका कैमरा चालू नहीं हो रहा, मोबाइल में लाइव व्यू नहीं दिख रहा, या DVR में कोई समस्या है — तो हमारी एक्सपर्ट टीम तुरंत समाधान देती है। तेज़ सर्विस, सही दाम और भरोसेमंद काम — यही हमारी पहचान है। अभी कॉल करें: 8090090051। Unnao Electronics & CCTV Services — सुरक्षा भी, सर्विस भी, भरोसे के साथ।`;

    useEffect(() => {
        // Set initial greeting
        if (messages.length === 0) {
            setMessages([{ text: "नमस्कार! Unnao Electronics में आपका स्वागत है।", sender: 'bot' }]);
        }
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Auto-open logic after 1.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasAutoPlayed) {
                setIsOpen(true);
                speak(hindiScript);
                setHasAutoPlayed(true);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [hasAutoPlayed]);


    const speak = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const speech = new SpeechSynthesisUtterance(text);
            speech.rate = 0.9;
            speech.pitch = 1.0;
            speech.lang = 'hi-IN';

            const voices = window.speechSynthesis.getVoices();

            // Attempt 1: Google Hindi
            let selectedVoice = voices.find(v => v.name.includes("Google हिन्दी") || v.name.includes("Google Hindi"));
            // Attempt 2: Any Hindi Female
            if (!selectedVoice) selectedVoice = voices.find(v => v.lang === 'hi-IN' && v.name.toLowerCase().includes('female'));
            // Attempt 3: Any Hindi
            if (!selectedVoice) selectedVoice = voices.find(v => v.lang === 'hi-IN');
            // Attempt 4: Indian English Female (Backup)
            if (!selectedVoice) selectedVoice = voices.find(v => v.lang === 'en-IN' && v.name.toLowerCase().includes('female'));

            if (selectedVoice) speech.voice = selectedVoice;

            window.speechSynthesis.speak(speech);
        }
    };

    const handleListen = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Voice not supported in this browser. Please use Chrome.");
            return;
        }

        // eslint-disable-next-line no-undef
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = 'hi-IN'; // Set to Hindi
        recognition.continuous = false;
        recognition.interimResults = false;

        setIsListening(true);

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setMessages(prev => [...prev, { text, sender: 'user' }]);
            processInput(text.toLowerCase());
            setIsListening(false);
        };

        recognition.onerror = (e) => {
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    const processInput = (text) => {
        let response = "माफ़ कीजिये, मैं समझा नहीं। कृपया CCTV या सर्विस के बारे में पूछें।";

        if (text.includes('cctv') || text.includes('camera') || text.includes('monitoring')) {
            response = "हम CP Plus और Hikvision के बेस्ट CCTV कैमरे रखते हैं। इंस्टॉलेशन सर्विस भी उपलब्ध है उन्नाव में।";
        } else if (text.includes('price') || text.includes('cost') || text.includes('daam') || text.includes('rate')) {
            response = "CCTV कैमरा की शुरुआत ₹2000 से होती है। बेस्ट रेट के लिए शॉप पर विजिट करें।";
        } else if (text.includes('location') || text.includes('address') || text.includes('kahan') || text.includes('shop')) {
            response = "हमारी शॉप पुरानी बाज़ार, उन्नाव में है। विजय इलेक्ट्रॉनिक्स के नाम से।";
        } else if (text.includes('hello') || text.includes('hi') || text.includes('namaste') || text.includes('नमस्कार')) {
            response = "नमस्कार! विजय इलेक्ट्रॉनिक्स में आपका स्वागत है। मैं आपकी क्या मदद कर सकता हूँ?";
        } else if (text.includes('inverter') || text.includes('battery')) {
            response = "हमारे पास Luminous और Microtek के इन्वर्टर बैटरी अच्छे रेट पर मिलते हैं।";
        } else if (text.includes('repair') || text.includes('kharab') || text.includes('issue') || text.includes('problem')) {
            response = "हम CCTV, DVR, इन्वर्टर और इलेक्ट्रॉनिक्स रिपेयर करते हैं। हमारी एक्सपर्ट टीम तुरंत समाधान देगी।";
        } else if (text.includes('lock') || text.includes('door') || text.includes('darwaza')) {
            response = "हम Smart Door Lock इंस्टॉलेशन भी करते हैं। रखिए अपने घर को सुरक्षित।";
        } else if (text.includes('clock') || text.includes('ghadi') || text.includes('bell')) {
            response = "Digital Clock और Automatic Bell System स्कूल और फैक्ट्री के लिए उपलब्ध है।";
        }

        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
        speak(response);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-amazon-blue text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-40 border-2 border-amazon-yellow group"
                aria-label="Open AI Assistant"
            >
                <MessageSquare className="w-6 h-6 group-hover:text-amazon-yellow" />
                <span className="absolute -top-2 -right-2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amazon-yellow opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amazon-yellow"></span>
                </span>
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-200 animate-slideUp">
                    <div className="bg-amazon-light_blue text-white p-4 flex justify-between items-center shadow-md">
                        <div className="flex items-center gap-2">
                            <Volume2 className="w-5 h-5 text-amazon-yellow" />
                            <div>
                                <h3 className="font-bold text-sm">AI Voice Assistant</h3>
                                <p className="text-[10px] text-gray-300">में बात करें (Speak below)</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-amazon-yellow pr-2"><X className="w-5 h-5" /></button>
                    </div>

                    <div className="bg-blue-50 p-2 text-xs text-center border-b border-blue-100">
                        <button onClick={() => speak(hindiScript)} className="flex items-center justify-center gap-1 mx-auto text-blue-700 font-bold hover:underline">
                            <Play className="w-3 h-3" /> फिर से सुनें (Replay Intro)
                        </button>
                    </div>

                    <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-3 rounded-lg text-sm max-w-[85%] shadow-sm ${msg.sender === 'user'
                                    ? 'bg-[#007185] text-white rounded-br-none'
                                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-white border-t flex flex-col items-center justify-center gap-2">
                        <button
                            onClick={isListening ? null : handleListen}
                            className={`p-4 rounded-full transition-all duration-300 shadow-lg ${isListening
                                ? 'bg-red-500 animate-pulse scale-110 shadow-red-200'
                                : 'bg-amazon-yellow hover:bg-yellow-400 scale-100'
                                }`}
                        >
                            <Mic className={`w-6 h-6 ${isListening ? 'text-white' : 'text-black'}`} />
                        </button>
                        <p className="text-xs text-gray-500 font-medium">
                            {isListening ? "सुन रहा हूँ..." : "बोलने के लिए दबाएं (Tap to Speak)"}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default VoiceAssistant;
