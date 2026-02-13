"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-zinc-50 dark:bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-200px] w-[600px] h-[600px] bg-[#6c47ff]/20 blur-[150px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center max-w-4xl mt-20">
        <Badge className="mb-6 px-4 py-1 text-sm bg-[#6c47ff]/10 text-[#6c47ff] border-none">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Resume Intelligence
        </Badge>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight"
        >
          Analyze Your Resume.
          <br />
          <span className="text-[#6c47ff]">
            Accelerate Your Career.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl"
        >
          Get AI-powered resume feedback, skill gap analysis, job match scoring,
          and a personalized roadmap to land your dream role.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10"
        >
          <SignInButton>
            <Button
              size="lg"
              className="bg-[#6c47ff] hover:bg-[#5936e6] text-white rounded-full px-8 py-6 text-lg cursor-pointer"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </SignInButton>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 max-w-5xl w-full">
        {[
          "Smart Resume Scoring",
          "Skill Gap Detection",
          "Personalized Career Roadmap",
        ].map((feature, i) => (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <CheckCircle className="mx-auto mb-4 text-[#6c47ff]" />
              <h3 className="font-semibold text-lg">{feature}</h3>
              <p className="text-sm text-zinc-500 mt-2">
                AI-driven insights tailored to your career goals.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* PRICING */}
      <section className="mt-28 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-10">Simple Pricing</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <Card className="rounded-2xl p-6 border">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-4">$0</p>
            <ul className="text-sm text-zinc-500 space-y-2">
              <li>Basic Resume Score</li>
              <li>Limited AI Suggestions</li>
              <li>1 Career Report</li>
            </ul>
          </Card>

          <Card className="rounded-2xl p-6 border border-[#6c47ff] shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-[#6c47ff]">
              Pro
            </h3>
            <p className="text-3xl font-bold mb-4">$19/mo</p>
            <ul className="text-sm text-zinc-500 space-y-2">
              <li>Advanced AI Analysis</li>
              <li>Unlimited Reports</li>
              <li>Job Match Scoring</li>
              <li>Growth Roadmap</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-28 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-10">
          Loved by Professionals
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <Card className="p-6 rounded-2xl">
            <p className="text-zinc-600 dark:text-zinc-400">
              “This platform helped me identify missing skills and land a
              better role in just 2 months.”
            </p>
            <p className="mt-4 font-semibold">— Software Engineer</p>
          </Card>

          <Card className="p-6 rounded-2xl">
            <p className="text-zinc-600 dark:text-zinc-400">
              “The AI insights are incredibly accurate. It feels like a
              personal career coach.”
            </p>
            <p className="mt-4 font-semibold">— Product Manager</p>
          </Card>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-32 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Level Up Your Career?
        </h2>
        <SignInButton>
          <Button
            size="lg"
            className="bg-[#6c47ff] hover:bg-[#5936e6] text-white rounded-full px-8 py-6 text-lg cursor-pointer"
          >
            Start Analyzing Now
          </Button>
        </SignInButton>
      </section>
    </main>
  );
}
