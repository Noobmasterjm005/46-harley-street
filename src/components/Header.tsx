type Props = {
  onBook: () => void;
};

export function Header({ onBook }: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center gap-4 px-4 py-3">
        <a href="#top" className="shrink-0 rounded-md bg-ink px-2 py-1">
          <img src="/media/logo.svg" alt="Harley Street Implant Centre" className="h-12 w-auto" />
        </a>
        <nav className="ml-auto hidden gap-5 text-sm sm:flex" aria-label="Page">
          <a href="#programme">Programme</a>
          <a href="#process">Process</a>
          <a href="#questions">Questions</a>
        </nav>
        <button type="button" className="cta ml-auto px-3 py-2 text-sm sm:ml-0" onClick={onBook}>
          Book an implant consultation
        </button>
      </div>
    </header>
  );
}
