import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}
//setShowContact
export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 
  const [buttonText, setButtonText] = useState<String>("Send message")

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Create a new FormData object
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    form.append('access_key', 'fc3c8b0a-c0c0-4af4-8107-a8acb075d98e');

    try {
      setButtonText("Sending")
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,

      }
    );

      const data = await response.json();

      if (data.success) {
        // Handle success (e.g., show a success message)
       // event.target.reset();
       setButtonText("Sent")
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error:', data.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
    finally{
         
       setTimeout(() => {
        setButtonText('Send message')
        onClose()
        
       }, 3000);
          setFormData({
            
              name: '',
              email: '',
              message: '',
            }
          )
          
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="contact-form p-8 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-400"
        >
          <X />
        </button>
        <h2 className="matrix-text text-4xl font-bold text-emerald-500 mb-6">Contact Me</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 
                       placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 
                       placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-black/50 border-2 border-emerald-500 rounded-lg px-4 py-2 text-emerald-400 
                       placeholder-emerald-700 focus:outline-none focus:border-emerald-400"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button disabled ={buttonText==="Send message"?false:true}
            type="submit"
            className="w-full py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 
                     transition-colors font-medium flex items-center justify-center space-x-2  disabled:bg-emerald-100"
          >
            <Send className="w-5 h-5" />
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
