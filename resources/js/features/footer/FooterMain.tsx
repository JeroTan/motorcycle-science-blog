export default function FooterMain() {
  return (
    <footer className="w-full border-t border-t-gray-500 bg-background py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg">Motorcycle Science Blog</h3>
            <p className="text-sm text-muted-foreground">
              Exploring the science behind motorcycles
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="/about" className="hover:underline text-muted-foreground hover:text-foreground">
              About
            </a>
            <a href="/contact" className="hover:underline text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <a href="/privacy" className="hover:underline text-muted-foreground hover:text-foreground">
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}