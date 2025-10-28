"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DraggableCardContainerProps {
  className?: string;
  children?: React.ReactNode;
}

interface DraggableCardBodyProps {
  className?: string;
  children?: React.ReactNode;
  rotate?: string;
}

export function DraggableCardContainer({
  className,
  children,
}: DraggableCardContainerProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full min-h-[400px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DraggableCardBody({
  className,
  children,
  rotate = "0deg",
}: DraggableCardBodyProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0, cardX: 0, cardY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      cardX: position.x,
      cardY: position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;

    setPosition({
      x: dragStartPos.current.cardX + deltaX,
      y: dragStartPos.current.cardY + deltaY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = ((e.clientY - centerY) / rect.height) * -10;
    const rotateY = ((e.clientX - centerX) / rect.width) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotation({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out",
        isDragging && "scale-105 shadow-2xl",
        className
      )}
      style={{
        transform: `
          translate(${position.x}px, ${position.y}px)
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
          rotate(${rotate})
        `,
        transformStyle: "preserve-3d",
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none select-none">{children}</div>
    </div>
  );
}
