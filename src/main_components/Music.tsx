import { Box, Container, Typography, IconButton, Slider } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useState, useRef, useEffect, useCallback } from 'react';

interface Track {
  title: string;
  artist: string;
  album: string;
  year: number;
  coverImage: string;
  audioFile: string;
}

const tracks: Track[] = [
  {
    title: 'Bleak',
    artist: 'Opeth',
    album: 'Blackwater Park',
    year: 2001,
    coverImage: '/bleak/music/blackwater-park.jpg',
    audioFile: '/bleak/music/audio/bleak.mp3',
  },
  {
    title: 'Moonlapse Vertigo',
    artist: 'Opeth',
    album: 'Still Life',
    year: 1999,
    coverImage: '/bleak/music/still-life.jpg',
    audioFile: '/bleak/music/audio/moonlapse-vertigo.mp3',
  },
  {
    title: 'Serenity Painted Death',
    artist: 'Opeth',
    album: 'Still Life',
    year: 1999,
    coverImage: '/bleak/music/still-life.jpg',
    audioFile: '/bleak/music/audio/serenity-painted-death.mp3',
  },
  {
    title: 'Face of Melinda',
    artist: 'Opeth',
    album: 'Still Life',
    year: 1999,
    coverImage: '/bleak/music/still-life.jpg',
    audioFile: '/bleak/music/audio/face-of-melinda.mp3',
  },
  {
    title: 'Ending Credits',
    artist: 'Opeth',
    album: 'Damnation',
    year: 2003,
    coverImage: '/bleak/music/damnation.jpg',
    audioFile: '/bleak/music/audio/ending-credits.mp3',
  },
  {
    title: 'Beyond the Pale',
    artist: 'Pain of Salvation',
    album: 'Remedy Lane',
    year: 2002,
    coverImage: '/bleak/music/remedy-lane.jpg',
    audioFile: '/bleak/music/audio/beyond-the-pale.mp3',
  }
];

const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const Music = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
    animFrameRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [updateProgress]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playTrack = (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(tracks[index].audioFile);
    audio.volume = muted ? 0 : volume;
    audio.play().catch(() => {});
    audio.onended = () => {
      if (index < tracks.length - 1) {
        playTrack(index + 1);
      } else {
        setIsPlaying(false);
        setPlayingIndex(null);
      }
    };
    audioRef.current = audio;
    setPlayingIndex(index);
    setIsPlaying(true);
  };

  const handleTrackClick = (index: number) => {
    if (playingIndex === index) {
      togglePlayPause();
    } else {
      playTrack(index);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current || playingIndex === null) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (playingIndex === null) return;
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    const prev = playingIndex > 0 ? playingIndex - 1 : tracks.length - 1;
    playTrack(prev);
  };

  const handleNext = () => {
    if (playingIndex === null) return;
    const next = playingIndex < tracks.length - 1 ? playingIndex + 1 : 0;
    playTrack(next);
  };

  const handleSeek = (_: Event, value: number | number[]) => {
    const val = value as number;
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  const handleVolumeChange = (_: Event, value: number | number[]) => {
    const val = value as number;
    setVolume(val);
    setMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.volume = volume || 0.7;
        setMuted(false);
      } else {
        audioRef.current.volume = 0;
        setMuted(true);
      }
    }
  };

  const currentTrack = playingIndex !== null ? tracks[playingIndex] : null;

  return (
    <Box sx={{ minHeight: '100vh', py: 8, pb: currentTrack ? 14 : 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ display: 'block', mb: 1, color: '#444' }}>
            LISTENING
          </Typography>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Music
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    py: 1.2,
                    px: 1.5,
                    borderBottom: '1px solid #141414',
                    transition: 'background 0.15s ease',
                    '&:hover': { bgcolor: '#111' },
                    cursor: 'pointer',
                    ...(playingIndex === index && {
                      bgcolor: '#0f0f0f',
                    }),
                  }}
                  onClick={() => handleTrackClick(index)}
                >
                  <Box sx={{ width: 28, display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                    {playingIndex === index && isPlaying ? (
                      <PauseIcon sx={{ fontSize: '1rem', color: '#e0e0e0' }} />
                    ) : playingIndex === index && !isPlaying ? (
                      <PlayArrowIcon sx={{ fontSize: '1rem', color: '#e0e0e0' }} />
                    ) : (
                      <Typography variant="body2" sx={{ color: '#333', fontSize: '0.75rem' }}>
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                    )}
                  </Box>

                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 0.5,
                      overflow: 'hidden',
                      flexShrink: 0,
                      bgcolor: '#1a1a1a',
                    }}
                  >
                    <Box
                      component="img"
                      src={track.coverImage}
                      alt={track.album}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: playingIndex === index ? '#e0e0e0' : '#999',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {track.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#444',
                        fontSize: '0.7rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {track.artist}
                    </Typography>
                  </Box>

                  <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right', flexShrink: 0 }}>
                    <Typography variant="body2" sx={{ color: '#333', fontSize: '0.7rem' }}>
                      {track.album}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#282828', fontSize: '0.65rem' }}>
                      {track.year}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* ===== PLAYER TRAY ===== */}
      {currentTrack && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: 72,
            bgcolor: '#0d0d0d',
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            alignItems: 'center',
            px: { xs: 1.5, md: 3 },
            zIndex: 1300,
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Left: track info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: { xs: 120, sm: 200 }, flexShrink: 0 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 0.5,
                overflow: 'hidden',
                flexShrink: 0,
                bgcolor: '#1a1a1a',
              }}
            >
              <Box
                component="img"
                src={currentTrack.coverImage}
                alt={currentTrack.album}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  color: '#e0e0e0',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  fontFamily: '"JetBrains Mono", monospace',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentTrack.title}
              </Typography>
              <Typography
                sx={{
                  color: '#555',
                  fontSize: '0.65rem',
                  fontFamily: '"JetBrains Mono", monospace',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentTrack.artist}
              </Typography>
            </Box>
          </Box>

          {/* Center: controls + timeline */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
            {/* Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: -0.5 }}>
              <IconButton onClick={handlePrev} sx={{ color: '#666', p: 0.5, '&:hover': { color: '#ccc' } }}>
                <SkipPreviousIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton
                onClick={togglePlayPause}
                sx={{
                  color: '#e0e0e0',
                  bgcolor: '#222',
                  width: 32,
                  height: 32,
                  '&:hover': { bgcolor: '#333' },
                }}
              >
                {isPlaying ? (
                  <PauseIcon sx={{ fontSize: '1rem' }} />
                ) : (
                  <PlayArrowIcon sx={{ fontSize: '1rem' }} />
                )}
              </IconButton>
              <IconButton onClick={handleNext} sx={{ color: '#666', p: 0.5, '&:hover': { color: '#ccc' } }}>
                <SkipNextIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>

            {/* Timeline */}
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 500, gap: 1 }}>
              <Typography sx={{ color: '#444', fontSize: '0.6rem', fontFamily: '"JetBrains Mono", monospace', minWidth: 32, textAlign: 'right' }}>
                {formatTime(currentTime)}
              </Typography>
              <Slider
                value={currentTime}
                max={duration || 100}
                onChange={handleSeek}
                sx={{
                  color: '#555',
                  height: 3,
                  '& .MuiSlider-thumb': {
                    width: 10,
                    height: 10,
                    bgcolor: '#ccc',
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 4px rgba(255,255,255,0.1)',
                    },
                  },
                  '& .MuiSlider-track': {
                    bgcolor: '#888',
                    border: 'none',
                  },
                  '& .MuiSlider-rail': {
                    bgcolor: '#222',
                  },
                }}
              />
              <Typography sx={{ color: '#444', fontSize: '0.6rem', fontFamily: '"JetBrains Mono", monospace', minWidth: 32 }}>
                {formatTime(duration)}
              </Typography>
            </Box>
          </Box>

          {/* Right: volume */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, width: 140, flexShrink: 0 }}>
            <IconButton onClick={toggleMute} sx={{ color: '#555', p: 0.5, '&:hover': { color: '#aaa' } }}>
              {muted || volume === 0 ? (
                <VolumeOffIcon sx={{ fontSize: '1rem' }} />
              ) : (
                <VolumeUpIcon sx={{ fontSize: '1rem' }} />
              )}
            </IconButton>
            <Slider
              value={muted ? 0 : volume}
              min={0}
              max={1}
              step={0.01}
              onChange={handleVolumeChange}
              sx={{
                color: '#555',
                height: 3,
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 8,
                  bgcolor: '#aaa',
                },
                '& .MuiSlider-track': {
                  bgcolor: '#666',
                  border: 'none',
                },
                '& .MuiSlider-rail': {
                  bgcolor: '#222',
                },
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Music;