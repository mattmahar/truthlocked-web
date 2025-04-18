'use client';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Lock() {
  return (
    <Player
      autoplay
      loop
      src="/lock.json"
      className="w-44 h-44 mb-6"
    />
  );
}
