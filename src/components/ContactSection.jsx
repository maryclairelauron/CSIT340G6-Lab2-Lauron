   import SectionHeading from './SectionHeading'
   import ContactLink from './ContactLink'

   function ContactSection() {
     return (
       <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
         <SectionHeading title="Contact" subtitle="Say hi." />
         <ul className="mt-8 space-y-3">
           <ContactLink label="Email" href="mailto:maryclaire.lauron@cit.edu" text="maryclaire.lauron@cit.edu" />
           <ContactLink label="GitHub" href="https://github.com/maryclairelauron" text="github.com/maryclairelauron" />
           <ContactLink label="LinkedIn" href="https://linkedin.com/in/maryclairelauron" text="linkedin.com/in/maryclairelauron" />
         </ul>
       </section>
     )
   }

   export default ContactSection