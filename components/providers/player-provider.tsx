"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { PlayerContext, defaultPlayerState } from '@/context/player-context';
import type { Track } from '@/types/music';

type Props = {
  children: React.ReactNode;
};

export function PlayerProvider({ children }: Props) {
  const [state, setState] = useState(defaultPlayerState);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const historyRef = useRef<Track[]>([]);

  const loadAndPlay = useCallback(async (track: Track) => {
    if (!audioRef.current) return;
    try {
      audioRef.current.src = track.previewUrl ?? '';
      audioRef.current.currentTime = 0;
      if (track.previewUrl) {
        await audioRef.current.play();
        setState((prev) => ({ ...prev, isPlaying: true }));
      } else {
        audioRef.current.pause();
        setState((prev) => ({ ...prev, isPlaying: false }));
      }
    } catch (error) {
      console.error('Failed to play track', error);
    }
  }, []);

  const playNext = useCallback(() => {
    setState((prev) => {
      const [nextTrack, ...rest] = prev.queue;
      if (!nextTrack) {
        audioRef.current?.pause();
        return {
          ...prev,
          isPlaying: false,
          currentTrack: prev.currentTrack,
          queue: []
        };
      }
      if (prev.currentTrack) {
        historyRef.current = [prev.currentTrack, ...historyRef.current].slice(0, 20);
      }
      void loadAndPlay(nextTrack);
      return {
        ...prev,
        currentTrack: nextTrack,
        queue: rest,
        isPlaying: true
      };
    });
  }, [loadAndPlay]);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = defaultPlayerState.volume;

    const handleEnded = () => {
      playNext();
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current?.removeEventListener('ended', handleEnded);
      audioRef.current?.pause();
    };
  }, [playNext]);

  const playTrack = useCallback(
    (track: Track, queue?: Track[]) => {
      setState((prev) => {
        if (prev.currentTrack) {
          historyRef.current = [prev.currentTrack, ...historyRef.current].slice(0, 20);
        }
        return {
          currentTrack: track,
          isPlaying: true,
          queue: queue ?? prev.queue,
          volume: prev.volume
        };
      });
      loadAndPlay(track);
    },
    [loadAndPlay]
  );

  const togglePlay = useCallback(() => {
    setState((prev) => {
      if (!prev.currentTrack || !audioRef.current) {
        return prev;
      }

      if (prev.isPlaying) {
        audioRef.current.pause();
      } else {
        void audioRef.current.play();
      }

      return { ...prev, isPlaying: !prev.isPlaying };
    });
  }, []);

  const playPrevious = useCallback(() => {
    const [previousTrack, ...restHistory] = historyRef.current;
    if (!previousTrack) return;

    historyRef.current = restHistory;
    setState((prev) => {
      if (prev.currentTrack) {
        return {
          ...prev,
          currentTrack: previousTrack,
          isPlaying: true
        };
      }
      return prev;
    });
    loadAndPlay(previousTrack);
  }, [loadAndPlay]);

  const setVolume = useCallback((value: number) => {
    const volume = Math.min(1, Math.max(0, value));
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    setState((prev) => ({ ...prev, volume }));
  }, []);

  const contextValue = {
    ...state,
    playTrack,
    togglePlay,
    playNext,
    playPrevious,
    setVolume
  };

  return <PlayerContext.Provider value={contextValue}>{children}</PlayerContext.Provider>;
}
