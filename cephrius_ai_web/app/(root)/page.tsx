"use client";

import LoadingSpinner from "@/components/pageLoader";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  
    return () => clearTimeout(timer)  
  }, [])
  

  return (
    <div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#171717",
              zIndex: 9999,
            }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex min-h-screen flex-col bg-background ">
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-background">
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

              {/* Your main content goes here */}
            </header>
            <main className="bg-background text-white flex-1 animate-fade-up">
              <section className="container flex flex-col space-y-20 items-center justify-center py-16 px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center flex flex-col py-10 pt-10 ">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Unlock the True Power of AI
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Cephrius AI revolutionizes the way you approach your tasks.
                    Experience unparalleled efficiency and precision powered by
                    OpenAI&apos;s GPT 3.5 and 4.0.
                  </p>
                </div>

                <div className="mx-auto max-w-6xl  ">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-10">
                    Key Features
                  </h2>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">
                        Natural Language Processing
                      </h3>
                      <p className="text-muted-foreground">
                        Cephrius AI understands and processes natural language with
                        unparalleled accuracy, enabling seamless communication.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">
                        Predictive Analytics
                      </h3>
                      <p className="text-muted-foreground">
                        Leverage our AI&apos;s predictive capabilities to make
                        informed decisions and stay ahead of the curve.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">Automated Workflows</h3>
                      <p className="text-muted-foreground">
                        Streamline your processes with our AI-powered
                        automation, freeing up your time for more strategic
                        tasks.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-xl font-bold">
                        Personalized Recommendations
                      </h3>
                      <p className="text-muted-foreground">
                        Cephrius AI adapts to your unique needs, providing
                        personalized responses to enhance your experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="container py-14 mt-40 px-4 sm:px-6 lg:px-8 mt- bg-muted ">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Ready to elevate your productivity?
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Experience the transformative power of Cephrius AI product. Get
                    started today.
                  </p>
                  <div className="mt-8">
                    <Link href="/chat">
                      <Button className="bg-accent text-black hover:bg-accent-foreground">
                        Try Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
            </main>

            <footer className="sticky border-t border-neutral-800 bg-background">
              <div className="container flex flex-col items-center justify-between gap-4 py-8 px-4 sm:flex-row sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/web_dark_logo.png"
                    alt="website logo"
                    width={100}
                    height={100}
                  />
                </div>
                <nav className="  flex gap-4 text-sm font-medium text-muted-foreground">
                  <Link
                    href="#"
                    className="hover:text-foreground"
                    prefetch={true}
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-foreground"
                    prefetch={true}
                  >
                    Terms
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-foreground"
                    prefetch={true}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </div>
  );
}
