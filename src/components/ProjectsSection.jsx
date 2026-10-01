   import SectionHeading from './SectionHeading'
   import ProjectCard from './ProjectCard'

   function ProjectsSection() {
     return (
       <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
         <SectionHeading title="Projects" subtitle="Things I have built." />
         <div className="mt-8 grid gap-6 sm:grid-cols-2">
           <ProjectCard
             year="2026"
             title="Courtify"
             description="A web and mobile pickleball reservation system that makes finding courts, booking schedules, and managing reservations easier."
             tech="HTML, CSS, JavaScript, PHP, MySQL"
             link="https://github.com/maryclairelauron"
           />
           <ProjectCard
             year="2026"
             title="Encantadia: The Quest"
             description="OOP2JAVAGAMEPROJECT A 2D platformer game made in Java using the LibGDX framework, based on the popular Filipino fantasy series Encantadia."
             tech="HTML · CSS · JavaScript"
             link="https://github.com/kenj-1/OOP2JAVAGAMEPROJECT"
           />
           <ProjectCard
             year="2025"
             title="Clinic Records"
             description="A desktop app for our database class that keeps visit records for a small clinic."
             tech="Java · MySQL"
             link="https://github.com/maryclairelauron/clinic-records"
           />
           <ProjectCard
             year="2024"
             title="Org Event Page"
             description="A one-page site for our org's freshman orientation, with the schedule and venue."
             tech="HTML · Bootstrap"
             link="https://github.com/maryclairelauron/org-event-page"
           />
         </div>
       </section>
     )
   }

   export default ProjectsSection