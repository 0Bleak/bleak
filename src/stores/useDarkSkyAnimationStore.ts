import { create } from "zustand";

interface Pixel {
  id: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  z: number;
  size: number;
}

interface DarkSkyAnimationStore {
  pixels: Pixel[];
  animationFrameId: number | null; 
  initializePixels: () => void;
  movePixels: () => void;
  startAnimation: (canvas: HTMLCanvasElement) => void;
  stopAnimation: () => void;
}

const useDarkSkyAnimationStore = create<DarkSkyAnimationStore>((set, get) => ({
  pixels: [],
  animationFrameId: null,

  initializePixels: () => {
    const pixels: Pixel[] = [];
    const numPixels = 100;
    for (let i = 0; i < numPixels; i++) {
      
      const z = Math.random() * 10 + 1;
      pixels.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        z,
        size: 2 / z,
      });
    }
    set({ pixels });
  },

  movePixels: () =>
    set((state) => ({
      pixels: state.pixels.map((pixel) => {
        let newX = pixel.x + pixel.speedX / pixel.z;
        let newY = pixel.y + pixel.speedY / pixel.z;

        if (newX > 100) newX = 0;
        if (newX < 0) newX = 100;
        if (newY > 100) newY = 0;
        if (newY < 0) newY = 100;

        return { ...pixel, x: newX, y: newY };
      }),
    })),

    startAnimation: (canvas) => {
      const { animationFrameId } = get();
      
      if (animationFrameId !== null) return;
    
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
    
      const animate = () => {
        const { pixels, movePixels } = get();
    
        ctx.fillStyle = `rgba(0, 0, 0, 1)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        pixels.forEach((pixel) => {
          const brightness = 1 / pixel.z;
          const trailLength = 5; 
    
          for (let i = 0; i < trailLength; i++) {
            const trailBrightness = brightness * (1 - i / trailLength);
            ctx.fillStyle = `rgba(255, 255, 255, ${trailBrightness})`;
            ctx.fillRect(
              ((pixel.x - pixel.speedX * i) / 100) * canvas.width,
              ((pixel.y - pixel.speedY * i) / 100) * canvas.height,
              pixel.size,
              pixel.size
            );
          }
    
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.fillRect(
            (pixel.x / 100) * canvas.width,
            (pixel.y / 100) * canvas.height,
            pixel.size,
            pixel.size
          );
        });
    
        movePixels();
    
        const frameId = requestAnimationFrame(animate);
        set({ animationFrameId: frameId });
      };
    
      const frameId = requestAnimationFrame(animate);
      set({ animationFrameId: frameId });
    },

  stopAnimation: () => {
    const { animationFrameId } = get();
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      set({ animationFrameId: null });
    }
  },
}));

export default useDarkSkyAnimationStore;