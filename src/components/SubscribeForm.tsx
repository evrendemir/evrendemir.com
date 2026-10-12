"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";

// Şimdilik e-postayı hiçbir yere göndermiyor; bülten servisi seçilince buraya bağlanacak.
export default function SubscribeForm({ cta = "Kaydol", dark = false }: { cta?: string; dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.p
            key="done"
            className="py-4 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Teşekkürler! Yeni bir şey çıktığında ilk sen duyacaksın. ✦
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-2 rounded-full border p-1.5 pl-5 transition-colors focus-within:border-accent ${
              dark ? "border-bg/20" : "border-line"
            }`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-posta adresin"
              aria-label="E-posta adresin"
              className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105"
            >
              {cta}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
