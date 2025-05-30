
export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Our Mission</h2>
          </div>
          
          <div className="glass-card p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
              "To empower development teams with AI-driven insights that elevate code quality, accelerate developer growth, and eliminate technical debt."
            </p>
            
            <div className="text-foreground/70 prose prose-lg max-w-3xl mx-auto">
              <p>
                At AuditFlow, we believe that great software isn't just about what it does today, but how well it can evolve tomorrow. Technical debt and code quality issues are the invisible barriers that slow innovation and frustrate developers.
              </p>
              <p className="mt-4">
                We built AuditFlow to shine a light on these hidden challenges, using advanced AI to not only identify issues but provide contextual learning opportunities that transform junior developers into senior talents faster than ever before.
              </p>
              <p className="mt-4">
                Our platform bridges the gap between AI-generated code and human expertise, creating a seamless workflow where technology enhances human capability rather than replacing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
