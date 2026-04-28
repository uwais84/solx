export const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-white/5">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className=" rounded-lg  grid place-items-center">
              <img src="images/logo-sx-wt-11.png" alt="Logo" className="h-20 w-40 rounded-lg" />
            </div>
            <span className="text-primary-foreground font-display font-semibold text-lg">
              Solutions & Beyond<span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-1 text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
            Enterprise digital architects. Learning, technology, strategy and
            development — engineered for global scale.
          </p>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-primary-foreground/40 mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="/learning-design" className="hover:text-accent transition-colors">Learning Design</a></li>
            <li><a href="/technology" className="hover:text-accent transition-colors">Technology Solutions</a></li>
            <li><a href="/consulting" className="hover:text-accent transition-colors">Strategic Consulting</a></li>
            <li><a href="/development" className="hover:text-accent transition-colors">Development Suite</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-primary-foreground/40 mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/70 font-mono">
            <li>hello@sol-x.dev</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <div>© {new Date().getFullYear()} Sol-X. All rights reserved.</div>
          {/* <div className="font-mono">SOC 2 · ISO 27001 · GDPR</div> */}
        </div>
      </div>
    </footer>
  );
};
