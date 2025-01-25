export default function Footer() {
  return (
    <footer className="py-4 mt-auto text-sm text-center border-t text-slate-400 border-slate-200">
      <p className="mx-2">
        Crypto Hawkshaw © {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/TOMKIBOI"
          target="_blank"
          rel="author"
        >
          TOM KIBOI
        </a>
      </p>
    </footer>
  )
}
