"use client";

import { useState, SubmitEvent } from "react";
import GradientText from "@/components/GradientText";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      console.error("NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set");
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-start gap-5 pt-12 sm:pt-15 pb-10 px-5 bg-black">
      <div className="flex items-center gap-3 font-mono w-full">
        <p className="text-orange-500 text-md">05</p>
        <p className="text-gray-500 text-sm font-bold">CONTACT</p>
        <hr className="border-t border-white/20 flex-1" />
      </div>
      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-manrope font-extrabold text-left">
        LET&apos;S CREATE SOMETHING<br /><GradientText
          colors={["#FF4D00", "#FFAA00"]}
          animationSpeed={6}
          className="inline-flex! m-0! max-w-none! rounded-none! font-extrabold! cursor-default! backdrop-blur-none! overflow-visible!"
        >EXCEPTIONAL</GradientText><span className="text-orange-500">.</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-sora w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-4xl text-sm sm:text-md sm:text-base text-left md:text-left">
        <p className="text-white">
          Right now I'm heads-down and not actively looking for new roles — but that doesn't mean the door's closed. I love talking through ideas, trading notes on tools and workflows, or jumping into a collaboration that sounds genuinely interesting.
        </p>
        <p className="text-white/60">
          Based in Tulsa, working from wherever the wifi's good. Reach out, and let's see where it goes.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 font-sora w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-4xl mt-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-mono text-xs text-gray-500 font-bold">
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-mono text-xs text-gray-500 font-bold">
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-mono text-xs text-gray-500 font-bold">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 self-start bg-orange-500 text-white rounded-lg py-2.5 px-8 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-orange-500 text-sm font-mono">
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm font-mono">
            Something went wrong. Try again, or email me directly.
          </p>
        )}
      </form>
    </div>
  );
}
