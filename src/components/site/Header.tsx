import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/learning-design", label: "Learning Design" },
  { to: "/technology", label: "Technology" },
  { to: "/consulting", label: "Consulting" },
  { to: "/development", label: "Development" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [logoSrc, setLogoSrc] = useState("/images/logo-sx-wt-15.png");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          {/* <div className="h-8 w-8 rounded-lg bg-accent-gradient grid place-items-center shadow-accent"> */}
          {/* <div className="h-15 w-40 rounded-lg mt-4 mb-4 bg-accent-gradient grid place-items-center shadow-accent"> */}
          <div
            className="h-10 w-10 rounded-lg grid place-items-center bg-transparent mb-4"
            onMouseEnter={() => setLogoSrc("images/logo-sx-wt-12.png")}
            onMouseLeave={() => setLogoSrc("images/logo-sx-wt-15.png")}
          >
            <img src={logoSrc} alt="Logo" className="object-contain rounded-lg" />
            <span className="whitespace-nowrap block text-xs text-gray-400 font-medium">Solutions & Beyond</span>
          </div>
          {/* <span className="text-primary-foreground font-display font-semibold tracking-tight text-lg">
            Axion<span className="text-accent">.</span>
          </span> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors relative group ${
                  active ? "text-primary-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/#contact">
            <Button variant="hero" size="sm">Start a project</Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 font-medium py-2"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/#contact" onClick={() => setOpen(false)}>
                <Button variant="hero" className="w-full">Start a project</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
