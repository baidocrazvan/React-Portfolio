import { ThemeToggle } from "../components/ThemeToggle";
export const NotFound = () => (
  <>
    <ThemeToggle />
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-foreground transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">404 – Not Found</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-primary text-primary-foreground rounded shadow hover:bg-primary/80 transition"
      >
        Go Home
      </a>
    </div>
  </>
);
