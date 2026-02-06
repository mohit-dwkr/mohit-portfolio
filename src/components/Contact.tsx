import { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Netlify Submission Logic
    const formDataObject = new FormData();
    formDataObject.append("form-name", "contact");
    formDataObject.append("name", formData.name);
    formDataObject.append("email", formData.email);
    formDataObject.append("message", formData.message);

    try {
      await fetch("/", {
        method: "POST",
        body: formDataObject,
      });
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = '919630955951'; // Replace with actual number
    const message = encodeURIComponent('Hello! I need a website .');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:diwakarmohit0007@gmail.com';
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-small uppercase tracking-widest">Contact</span>
          <h2 className="heading-section mt-4">Let's Work Together</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="card-elevated p-8 md:p-10">
            <h3 className="heading-card mb-6">Send a Message</h3>
           <form 
  onSubmit={handleSubmit} 
  name="contact" 
  data-netlify="true" 
  className="space-y-6"
>
  {/* --- 2. Ye hidden field React/Netlify ke liye compulsory hai --- */}
  <input type="hidden" name="form-name" value="contact" />

  <div>
    <label
      htmlFor="name"
      className="block text-sm font-medium mb-2"
    >
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name" // Dhyan rakhein ye name "name" hi ho
      value={formData.name}
      onChange={handleChange}
      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all ${
        errors.name ? 'border-destructive' : 'border-input'
      }`}
      placeholder="Your name"
    />
    {errors.name && (
      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
    )}
  </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none ${
                    errors.message ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Direct Connect */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="heading-card mb-4">Direct Connect</h3>
              <p className="text-body">
                Prefer a more direct approach? Feel free to reach out via
                WhatsApp or email. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-4 p-5 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Chat on WhatsApp</div>
                  <div className="text-small">Quick response guaranteed</div>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="w-full flex items-center gap-4 p-5 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Send an Email</div>
                 <div className="text-small">diwakarmohit0007@gmail.com</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
