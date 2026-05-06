'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassNavbar } from '@/components/layout/glass-navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { waitlistService } from '@/lib/services/waitlist';
import { toast } from 'sonner';
import { CheckCircle2, Sparkles, ArrowRight, Mail, User } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      await waitlistService.join(values);
      setIsSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-primary-950 overflow-hidden pt-25">
      {/* Subtle Light Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />

      <GlassNavbar />

      <main className="flex-grow flex items-center py-20 relative z-10">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-600 text-xs font-black uppercase tracking-widest mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Launching Summer 2026</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 font-syne leading-[1.1] text-primary-950">
                Elevate Your <br />
                <span className="text-primary-600">Future</span> With Us.
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-inter max-w-lg">
                Join an exclusive community of forward-thinkers. Get early access to industry-leading courses, mentorship, and a network that scales with you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Priority enrollment",
                  "Early-bird scholarships",
                  "Private Community",
                  "Personalized roadmaps"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-inter font-semibold text-sm text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Card Shadow/Glow */}
              <div className="absolute inset-0 bg-primary-600/5 rounded-[2.5rem] blur-3xl" />

              <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black font-syne mb-3 text-primary-950">Reserve your spot</h2>
                        <p className="text-slate-500 font-inter">Limited seats available for the beta launch.</p>
                      </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-slate-500 font-black uppercase tracking-widest text-[10px]">First Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                      <Input
                                        placeholder="John"
                                        className="bg-slate-50 border-slate-200 pl-12 h-14 rounded-xl focus:bg-white focus:border-primary-600 focus:ring-primary-600/10 transition-all font-inter text-primary-950 placeholder:text-slate-400"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Last Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                      <Input
                                        placeholder="Doe"
                                        className="bg-slate-50 border-slate-200 pl-12 h-14 rounded-xl focus:bg-white focus:border-primary-600 focus:ring-primary-600/10 transition-all font-inter text-primary-950 placeholder:text-slate-400"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Email Address</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input
                                      placeholder="john@example.com"
                                      className="bg-slate-50 border-slate-200 pl-12 h-14 rounded-xl focus:bg-white focus:border-primary-600 focus:ring-primary-600/10 transition-all font-inter text-primary-950 placeholder:text-slate-400"
                                      {...field}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            disabled={isLoading}
                            variant="neon"
                            size="xl"
                            shape="pill"
                            className="w-full gap-3 group mt-4 h-16 shadow-lg shadow-neon/20 hover:shadow-neon/40"
                          >
                            {isLoading ? (
                              <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : (
                              <>
                                <span className="font-syne font-black uppercase tracking-wider">Join the Waitlist</span>
                                <span className="bg-black text-neon rounded-full p-2 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                  <ArrowRight size={18} />
                                </span>
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-primary-600/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-primary-600" />
                      </div>
                      <h2 className="text-4xl font-black font-syne mb-4 text-primary-950">You're in!</h2>
                      <p className="text-slate-600 mb-10 font-inter leading-relaxed">
                        We've reserved your spot, <span className="font-bold">{form.getValues().firstName}</span>. Watch your inbox at <br />
                        <span className="text-primary-600 font-bold">{form.getValues().email}</span> for updates.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="border-slate-200 text-slate-500 hover:text-primary-950 hover:bg-slate-50 rounded-full px-10 h-12 font-inter"
                      >
                        Back to Waitlist
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
}
