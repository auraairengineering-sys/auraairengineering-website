"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faqs";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line/70 overflow-hidden rounded-xl border border-line/70 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-canvas sm:px-6"
            >
              <span className="font-display text-base font-semibold text-primary sm:text-[17px]">
                {item.q}
              </span>
              <Plus
                className={`mt-0.5 h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink-soft sm:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
