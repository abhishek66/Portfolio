"use client";

import { useState, useEffect } from "react";
import { Tag } from "@/components/ui/Tag";
import { caseStudies } from "@/lib/caseStudies";

const featured = caseStudies.filter((s) => s.client !== "STAHL");
const track = [...featured, ...featured];

export function CaseStudiesCarousel() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => s === null ? null : (s - 1 + featured.length) % featured.length);
  const next = () => setSelected((s) => s === null ? null : (s + 1) % featured.length);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setSelected(null);
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  const study = selected !== null ? featured[selected] : null;

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
        @keyframes modal-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-spin-in {
          0%   { opacity: 0; transform: rotate(-180deg) scale(0.4); }
          70%  { opacity: 1; transform: rotate(8deg)    scale(1.03); }
          100% { opacity: 1; transform: rotate(0deg)    scale(1);    }
        }
        .modal-backdrop { animation: modal-backdrop-in 200ms ease forwards; }
        .modal-panel    { animation: modal-spin-in 480ms cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}</style>
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex gap-5 marquee-track${paused ? " paused" : ""}`}
          style={{ width: "max-content" }}
        >
          {track.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i % featured.length)}
              className="w-[360px] flex-shrink-0 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 flex flex-col gap-4 cursor-pointer text-left transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--bg-elevated)] hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display font-semibold text-2xl text-gold leading-tight">
                  {item.client ?? item.university}
                </span>
                <span className="font-data text-xs text-[var(--text-muted)] flex-shrink-0 mt-1">{item.year}</span>
              </div>
              <p className="font-ui font-light text-base text-[var(--text-secondary)] leading-snug line-clamp-2">
                {item.title}
              </p>
              <div className="mt-auto">
                <Tag>{item.skill}</Tag>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal overlay */}
      {study && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.60)" }}
          onClick={() => setSelected(null)}
        >
          {/* Left arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous case study"
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:-translate-x-0.5"
            style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next case study"
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full transition-all duration-200 hover:translate-x-0.5"
            style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="modal-panel relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-8"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.22)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors duration-200 hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              {study.client && (
                <p className="font-display text-xl text-gold mb-1">{study.client}</p>
              )}
              <h2 className="font-display text-2xl text-[var(--text-primary)] leading-snug">
                {study.title}
              </h2>
              <p className="mt-1 font-data text-xs text-[var(--text-muted)]">{study.programme}</p>
              <p className="mt-2 font-ui font-light text-sm text-[var(--text-secondary)]">{study.subtitle}</p>
            </div>

            {/* Problem + Solution */}
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-4">
                <p className="mb-2 font-data text-[10px] uppercase tracking-widest text-gold">The Problem</p>
                <p className="font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed">{study.problem}</p>
              </div>
              <div className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-4">
                <p className="mb-2 font-data text-[10px] uppercase tracking-widest text-gold">The Solution</p>
                <p className="font-ui font-light text-sm text-[var(--text-secondary)] leading-relaxed">{study.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <p className="mb-3 font-data text-[10px] uppercase tracking-widest text-gold">The Outcome</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {study.results.map((r, j) => (
                  <div key={j} className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-3">
                    <p className="font-display font-normal text-xl text-gold leading-none">{r.metric}</p>
                    <p className="mt-1 font-data text-xs leading-snug text-[var(--text-muted)]">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="mb-3 font-data text-[10px] uppercase tracking-widest text-gold">Tools &amp; Methods</p>
              <div className="flex flex-wrap gap-2">
                {study.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>

            {/* Dot nav + mobile arrows */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button type="button" onClick={prev} aria-label="Previous" className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-label={`Go to case study ${i + 1}`}
                    style={{
                      width: selected === i ? "20px" : "7px",
                      height: "7px",
                      borderRadius: "9999px",
                      background: selected === i ? "#10B981" : "rgba(16,185,129,0.30)",
                      transition: "width 250ms ease, background 250ms ease",
                    }}
                  />
                ))}
              </div>
              <button type="button" onClick={next} aria-label="Next" className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", color: "#10B981" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
