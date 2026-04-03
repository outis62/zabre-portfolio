import { useState, useCallback } from "react";

/**
 * @param {number} 
 * @returns {{ index, imgReady, handleSlideChange, onImageLoad }}
 */
export function useProjectSlider(total) {
  const [index, setIndex]       = useState(0);
  const [imgReady, setImgReady] = useState(false);

  const handleSlideChange = useCallback((swiper) => {
    setImgReady(false);
    setIndex(swiper.activeIndex);
  }, []);

  const onImageLoad = useCallback(() => setImgReady(true), []);

  return { index, imgReady, handleSlideChange, onImageLoad };
}