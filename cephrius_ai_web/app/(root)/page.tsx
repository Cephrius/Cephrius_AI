import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-background ">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Image
              src="/web_dark_logo.png"
              alt="web logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </header>
      <main className="bg-background text-white flex-1">
        <section className="container flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Unlock the Power of AI
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI product revolutionizes the way you approach your tasks.
              Experience unparalleled efficiency and precision power by
              OpenAI&apos;s GPT.
            </p>
          </div>
        </section>

        <section className="container py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Key Features
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Natural Language Processing</h3>
                <p className="text-muted-foreground"> 
                  Our AI understands and processes natural language with
                  unparalleled accuracy, enabling seamless communication
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Predictive Analytics</h3>
                <p className="text-muted-foreground">
                  Leverage our AI&apos;s predictive capabilities to make
                  informed decisions and stay ahead of the curve.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Streamline your processes with our AI-powered automation,
                  freeing up your time for more strategic tasks
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Our AI adapts to your unique needs, providing personalized
                  reponses to enhance your experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>Ready to elevate your productivity?</h2>
            <p>
              Experience the transformative power of our AI product. Get started
              today.`
            </p>
            <div>
              <Link href="/chat">
                <Button className="bg-accent text-black hover:bg-accent-foreground">
                  Try Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/web_dark_logo.png"
              alt="website logo"
              width={100}
              height={100}
            />
          </div>
          <nav className="flex gap-4 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground" prefetch={true}>
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={true}>
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={true}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
