declare module 'aos' {
  interface AosOptions {
    duration?: number;
    delay?: number;
    offset?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: string | boolean | (() => boolean);
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
}

declare module 'aos/dist/aos.css';
