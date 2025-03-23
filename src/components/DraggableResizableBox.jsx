import React, { useState, useRef } from "react";

const DraggableResizableBox = ({ box, updateBox }) => {
  const boxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startSize, setStartSize] = useState({ width: box.width, height: box.height });

  // 박스 드래그 시작
  const handleMouseDown = (e) => {
    if (isResizing) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - box.x, y: e.clientY - box.y });
  };

  // 크기 조절 시작
  const handleResizeStart = (e) => {
    e.stopPropagation(); // 드래그 이벤트 방지
    setIsResizing(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartSize({ width: box.width, height: box.height });
  };

  // 마우스 이동
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateBox(box.id, {
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
    if (isResizing) {
      updateBox(box.id, {
        width: Math.max(5, startSize.width + (e.clientX - startPos.x)),
        height: Math.max(5, startSize.height + (e.clientY - startPos.y)),
      });
    }
  };

  // 마우스 해제
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: box.x,
        top: box.y,
        width: box.width,
        height: box.height,
        border: "1px solid red",
        background: "rgba(255, 0, 0, 0.3)",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* 크기 조절 핸들 */}
      <div
        onMouseDown={handleResizeStart}
        style={{
          width: "5px",
          height: "5px",
          position: "absolute",
          bottom: "0",
          right: "0",
          background: "blue",
          cursor: "se-resize",
        }}
      />
      {/* 글로벌 이벤트 리스너 */}
      {isDragging || isResizing ? (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      ) : null}
    </div>
  );
};

export default DraggableResizableBox;
