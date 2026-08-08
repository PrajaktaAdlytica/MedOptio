"use client";

import { ArrowRight, RotateCcw, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandLogo } from "./Brand";

const entryBeats = [
  {
    at: 0,
    eyebrow: "Medication operations",
    title: "Every medication action carries context.",
  },
  {
    at: 3.2,
    eyebrow: "One connected workflow",
    title: "Review, refill, and follow-up should move together.",
  },
  {
    at: 6.4,
    eyebrow: "MedOptio",
    title: "Intelligent medication care. Human at the core.",
  },
] as const;

export function EntrySequence() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"intro" | "docked">("intro");
  const [complete, setComplete] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeBeat, setActiveBeat] = useState(0);

  const collapseIntro = useCallback(() => {
    videoRef.current?.pause();
    setMode("docked");
    setComplete(true);
    window.sessionStorage.setItem("medoptio-entry-seen", "true");
    window.setTimeout(() => window.dispatchEvent(new Event("resize")), 420);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem("medoptio-entry-seen") === "true") {
      const timeout = window.setTimeout(() => {
        videoRef.current?.pause();
        setMode("docked");
        setComplete(true);
      }, 0);

      return () => window.clearTimeout(timeout);
    }

    videoRef.current?.play().catch(() => setComplete(true));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("intro-locked", mode === "intro");

    return () => document.documentElement.classList.remove("intro-locked");
  }, [mode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mode === "intro") collapseIntro();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collapseIntro, mode]);

  const replayIntro = () => {
    const video = videoRef.current;
    if (!video) return;

    setMode("intro");
    setComplete(false);
    setActiveBeat(0);
    video.currentTime = 0;
    video.play().catch(() => setComplete(true));
  };

  const replayInPlace = () => {
    const video = videoRef.current;
    if (!video) return;

    setComplete(false);
    setActiveBeat(0);
    video.currentTime = 0;
    video.play().catch(() => setComplete(true));
  };

  const updateBeat = () => {
    const currentTime = videoRef.current?.currentTime ?? 0;
    const nextBeat = entryBeats.reduce(
      (selected, beat, index) => (currentTime >= beat.at ? index : selected),
      0,
    );
    setActiveBeat(nextBeat);
  };

  const beat = entryBeats[activeBeat];

  return (
    <section
      className={`entry-sequence ${mode === "docked" ? "is-docked" : "is-intro"} ${complete ? "is-complete" : ""}`}
      aria-label="MedOptio introduction"
    >
      <video
        ref={videoRef}
        autoPlay
        muted={muted}
        playsInline
        poster="/media/medoptio-entry-poster.png"
        preload="auto"
        onEnded={() => setComplete(true)}
        onError={() => setComplete(true)}
        onTimeUpdate={updateBeat}
      >
        <source src="/media/medoptio-entry.mp4" type="video/mp4" />
      </video>

      <div className="entry-shade" aria-hidden="true" />

      <div className="entry-topbar">
        <BrandLogo className="entry-brand" />
        <div className="entry-controls">
          <button
            type="button"
            onClick={() => setMuted((value) => !value)}
            aria-label={muted ? "Turn intro sound on" : "Mute intro sound"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button className="entry-skip" type="button" onClick={collapseIntro}>
            Skip intro <SkipForward size={17} />
          </button>
        </div>
      </div>

      <div className="entry-copy" aria-live="polite">
        <span>{complete ? "Introduction complete" : beat.eyebrow}</span>
        <h1>{complete ? "Medication care, connected around people." : beat.title}</h1>
        <p>
          {complete
            ? "Continue into MedOptio, or watch the sequence again."
            : "Human-supervised workflows for safer reviews, refills, and follow-ups."}
        </p>
        <div className="entry-progress" aria-hidden="true">
          {entryBeats.map((item, index) => (
            <span className={index <= activeBeat ? "active" : ""} key={item.at} />
          ))}
        </div>
      </div>

      <div className="entry-complete-actions">
        <button className="button entry-replay" type="button" onClick={replayInPlace}>
          <RotateCcw size={17} /> Watch again
        </button>
        <button className="button entry-enter" type="button" onClick={collapseIntro}>
          Enter MedOptio <ArrowRight size={18} />
        </button>
      </div>

      <button className="entry-dock-action" type="button" onClick={replayIntro}>
        <span>
          <RotateCcw size={15} /> Replay intro
        </span>
        <small>10 sec</small>
      </button>
    </section>
  );
}
