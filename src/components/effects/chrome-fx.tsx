"use client";

import { useEffect } from "react";

/**
 * ChromeFX — global interaction layer that mirrors the main site (app.js):
 *  - Glass cards get a mouse-follow spotlight (--mx / --my)
 *  - `.magnetic` buttons pull toward the cursor
 *  - `.tilt-3d` cards tilt in 3D
 *  - The top scroll-progress bar tracks page scroll
 *
 * Uses event delegation so it survives client-side navigation without re-binding.
 */
export function ChromeFX() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const allowMotionFX = finePointer && !reduceMotion && window.innerWidth > 900;

    let activeMagnetic: HTMLElement | null = null;
    let activeTilt: HTMLElement | null = null;

    const resetMagnetic = (wrap: HTMLElement) => {
      const inner = wrap.querySelector<HTMLElement>(".magnetic");
      if (inner) inner.style.transform = "translate(0, 0)";
    };

    const resetTilt = (el: HTMLElement) => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      // Glass spotlight
      const glass = target.closest<HTMLElement>(".glass");
      if (glass) {
        const rect = glass.getBoundingClientRect();
        glass.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        glass.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      if (!allowMotionFX) return;

      // Magnetic buttons
      const wrap = target.closest<HTMLElement>(".magnetic-wrap");
      if (wrap !== activeMagnetic) {
        if (activeMagnetic) resetMagnetic(activeMagnetic);
        activeMagnetic = wrap;
      }
      if (wrap) {
        const inner = wrap.querySelector<HTMLElement>(".magnetic");
        if (inner) {
          const rect = wrap.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          inner.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        }
      }

      // 3D tilt
      const tilt = target.closest<HTMLElement>(".tilt-3d");
      if (tilt !== activeTilt) {
        if (activeTilt) resetTilt(activeTilt);
        activeTilt = tilt;
      }
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${py * -8}deg) rotateY(${px * 10}deg) translateZ(6px)`;
      }
    };

    const onPointerLeave = () => {
      if (activeMagnetic) {
        resetMagnetic(activeMagnetic);
        activeMagnetic = null;
      }
      if (activeTilt) {
        resetTilt(activeTilt);
        activeTilt = null;
      }
    };

    const progress = document.querySelector<HTMLElement>(".scroll-progress span");
    const onScroll = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
