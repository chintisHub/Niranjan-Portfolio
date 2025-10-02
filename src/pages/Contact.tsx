import Navigation from '@/components/Navigation';
import SocialIsland from '@/components/SocialIsland';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '5b467170-3d3e-4fa8-b4e0-f4b5a743bc68'); // Web3Forms public key
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at nallamniranjan@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SocialIsland />

      <main className="pt-24 pb-20 px-2 md:px-6 relative">
        <div className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-sm px-6 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden border border-white/40 shadow-2xl">
          <div className="mb-8">
            <Button
              onClick={handleBackClick}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-gray-50 text-black hover:text-gray-600 bg-white/20 backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50 mb-6">
              <p className="text-sm font-semibold text-slate-600 mb-3 tracking-wider uppercase">
                GET IN TOUCH
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-styrene tracking-tight">
                Contact.
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-slate-900 via-zinc-400 to-gray-800 rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <Card className="bg-white/70 backdrop-blur-md border border-white/50 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 font-styrene">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="w-full bg-slate-900/5 border-slate-300 focus:border-slate-900 focus:ring-slate-900 text-black placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 font-styrene">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    required
                    className="w-full bg-slate-900/5 border-slate-300 focus:border-slate-900 focus:ring-slate-900 text-black placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2 font-styrene">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's your message?"
                    required
                    rows={6}
                    className="w-full bg-slate-900/5 border-slate-300 focus:border-slate-900 focus:ring-slate-900 resize-none text-black placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 font-styrene font-medium text-lg group shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                      SEND
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <p className="text-slate-600 mb-3 font-styrene">Or email me directly at</p>
                  <a
                    href="mailto:nallamniranjan@gmail.com"
                    className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    <Mail size={18} />
                    nallamniranjan@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
