import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/kapilchoudhari/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:kapilchoudhari@email.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+919876543210',
      label: 'Phone',
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* <div className="text-2xl font-bold mb-4">Kapil Choudhari</div>
          <p className="text-primary-foreground/80 mb-6">Frontend Architect • React Expert • Team Leader</p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div> */}
          <div className="border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Kapil Choudhari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
