"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap-util";
import { setLenisInstance } from "@/lib/lenis-instance";
import { jumpToHashSection } from "@/lib/scroll-to-section";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, LenisRef, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const LenisSmoothScroll = () => {
    const lenisRef = useRef<LenisRef>(null);
    const pathname = usePathname();

    useEffect(() => {
        // Ticker synchronisation: hand Lenis the real frame delta from GSAP
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // Keep standard GSAP lag smoothing active (absorbs up to 500ms lag without harsh jumps)
        gsap.ticker.lagSmoothing(500, 33);

        const lenis = lenisRef.current?.lenis;
        lenis?.on("scroll", ScrollTrigger.update);

        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(update);
            lenis?.off("scroll", ScrollTrigger.update);
        };
    }, []);

    // Shared with scroll-to-section so in-page links scroll through Lenis, not around it. `useLenis` re-renders once
    // the instance exists (it is created after this component's first effects run).
    const lenisInstance = useLenis();
    useEffect(() => {
        setLenisInstance(lenisInstance ?? null);
        return () => setLenisInstance(null);
    }, [lenisInstance]);

    // Whenever the route changes: land on the URL's #section if it has one, otherwise on the top; refresh triggers.
    // The very first run is the page load itself: the browser already put the page where it belongs (top, a restored
    // position after reload, or a #section), and forcing the top here would yank a user who has already started
    // scrolling or clicking before hydration finished.
    const isFirstRun = useRef(true);
    useEffect(() => {
        const firstRun = isFirstRun.current;
        isFirstRun.current = false;

        if (!jumpToHashSection() && !firstRun) {
            const lenis = lenisRef.current?.lenis;
            lenis?.scrollTo(0, { immediate: true });
            window.scrollTo(0, 0);
        }

        // Small timeout allows Next.js page components to mount and calculate heights
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 120);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                duration: 0.9, // Responsive & silky, removes floaty/sluggish latency
                smoothWheel: true,
                wheelMultiplier: 1.05,
                touchMultiplier: 1.4,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard expoOut
            }}
            ref={lenisRef}
        />
    );
};

export default LenisSmoothScroll;