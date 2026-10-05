export function scrollState(top, height, viewport) {
 const distance = height - viewport;
 const progress = distance <= 0 ? (top <= 0 ? 1 : 0) : Math.max(0, Math.min(1, -top / distance));
 return {progress, stage: Math.min(2, Math.floor(progress * 3))};
}
