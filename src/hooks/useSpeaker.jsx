import { useEffect, useState } from 'react';

const useSpeaker = () => {
  const [isSupported, setIsSupported] = useState(true);
  const [voices, setVoices] = useState([]);

  const speak = text => {
      if (text) {
        let utterance = new SpeechSynthesisUtterance();
            utterance.pitch = .1;
            utterance.rate = .8;
            utterance.voice = voices[5];
            utterance.text = text;
            utterance.volume = 0.8;
            window.speechSynthesis.speak(utterance);
        }
    };

  useEffect(() => {
    const supported = 'speechSynthesis' in window;
    setIsSupported(supported);
    if (supported) {
      const handleVoicesChanged = () => {
        setVoices(speechSynthesis.getVoices());
      };
      speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      setVoices(speechSynthesis.getVoices());
      return () => {
        speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  return { isSupported, voices, speak };
};

export default useSpeaker;