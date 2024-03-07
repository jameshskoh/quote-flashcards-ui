import { useRef, useState } from "react";

type Coordinates = {
  x: number;
  y: number;
};

export const Flashcards = () => {
  const [offset, setOffset] = useState<Coordinates>({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState<Coordinates>({ x: 0, y: 0 });
  const [isMouseDown, setMouseDown] = useState<boolean>(false);

  const cardRef = useRef<HTMLElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    setMouseDown(true);
    setStartPos({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const card = cardRef.current;

    if (!card || !isMouseDown) {
      return;
    }

    const dx = e.clientX - startPos.x;
    const dy = e.clientY - startPos.y;

    card.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseUp = (e: MouseEvent) => {
    setMouseDown(false);
  };

  return (
    <div className="relative m-auto aspect-[5/6] min-h-24 w-[90%] touch-none bg-amber-200">
      <div
        className="absolute block h-full w-full cursor-pointer select-none bg-amber-400"
        ref={cardRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div>
          <p>{isMouseDown ? "Dragging" : "Press and hold to drag"}</p>
        </div>
      </div>
    </div>
  );
};
