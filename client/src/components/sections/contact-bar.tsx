import { FloatingCard } from '@/components/ui/floating-card';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export default function ContactBar() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Pune, India',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'kapilchoudhari@email.com',
      link: 'mailto:kapilchoudhari@email.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/kapilchoudhari/',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {contactInfo.map((item, index) => (
              <FloatingCard
                key={item.title}
                delay={index * 0.1}
                className="bg-secondary p-6 rounded-xl border border-border"
              >
                <item.icon className="text-accent text-2xl mb-4 mx-auto" size={32} />
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
