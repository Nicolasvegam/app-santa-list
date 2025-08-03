'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const EMOJI_OPTIONS = [
  '🎅', '🎄', '🎁', '⭐', '❄️', '☃️', '🦌', '🎉', '🎊', '🎈',
  '🏠', '🏢', '🏫', '🏪', '🏭', '🏡', '🏘️', '🏛️', '🏗️', '🏚️',
  '👨', '👩', '👧', '👦', '👶', '🧑', '👴', '👵', '🧓', '👤',
  '💼', '📚', '🎯', '🚀', '💡', '🔥', '✨', '💎', '🌟', '⚡',
  '🎨', '🎬', '🎮', '🎸', '🎹', '🎤', '🎧', '📷', '📹', '🎭'
];

interface EmojiPickerProps {
  selectedEmoji: string;
  onEmojiSelect: (emoji: string) => void;
}

export function EmojiPicker({ selectedEmoji, onEmojiSelect }: EmojiPickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-20 h-20 text-4xl"
        >
          {selectedEmoji || '😊'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Seleccionar Emoji</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-5 gap-2 p-4">
          {EMOJI_OPTIONS.map((emoji) => (
            <Button
              key={emoji}
              variant="ghost"
              size="icon"
              onClick={() => {
                onEmojiSelect(emoji);
                setOpen(false);
              }}
              className="w-12 h-12 text-2xl hover:bg-accent"
            >
              {emoji}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}