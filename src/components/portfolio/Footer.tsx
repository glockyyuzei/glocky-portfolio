export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center flex flex-col items-center justify-center gap-2">
      <p className="text-muted-foreground/60 text-xs">
        © {currentYear} Glocky Yuzei. All rights reserved.
      </p>
    </footer>
  );
}
