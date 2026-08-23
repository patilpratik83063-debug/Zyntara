import React, { useEffect, useRef } from 'react';

interface InteractiveCanvasProps {
  className?: string;
  nodeCount?: number;
  interactive?: boolean;
}

export const InteractiveCanvas: React.FC<InteractiveCanvasProps> = ({
  className = '',
  nodeCount = 42,
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes definition with luxury palette
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      colorType: 'indigo' | 'champagne' | 'ivory';
    }

    const nodes: Node[] = [];
    const count = Math.min(nodeCount, Math.floor(width / 35));

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      const colorType: 'indigo' | 'champagne' | 'ivory' = 
        typeRand < 0.5 ? 'indigo' : typeRand < 0.8 ? 'champagne' : 'ivory';

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.4 + 0.6,
        baseAlpha: Math.random() * 0.35 + 0.15,
        colorType
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle celestial orbital track in background
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.save();
      ctx.strokeStyle = 'rgba(139, 124, 255, 0.025)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.58, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Subtle mouse repulsion/attraction
        const dx = mousePos.current.x - node.x;
        const dy = mousePos.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let alpha = node.baseAlpha;
        if (dist < 180) {
          alpha = Math.min(0.85, node.baseAlpha + (1 - dist / 180) * 0.45);
          node.x -= (dx / dist) * 0.25;
          node.y -= (dy / dist) * 0.25;
        }

        if (node.colorType === 'indigo') {
          ctx.fillStyle = `rgba(139, 124, 255, ${alpha})`;
        } else if (node.colorType === 'champagne') {
          ctx.fillStyle = `rgba(214, 183, 122, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(245, 243, 238, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with delicate lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const lineDx = node.x - other.x;
          const lineDy = node.y - other.y;
          const lineDist = Math.sqrt(lineDx * lineDx + lineDy * lineDy);

          if (lineDist < 120) {
            const lineAlpha = (1 - lineDist / 120) * 0.12;
            ctx.strokeStyle = `rgba(139, 124, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodeCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full opacity-60 ${className}`}
      aria-hidden="true"
    />
  );
};
