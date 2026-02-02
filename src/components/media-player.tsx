"use client";

import { useState, useRef, useEffect } from "react";
import { generateVideoCaptions } from "@/ai/flows/generate-video-captions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Play, Pause, FileUp, Captions } from "lucide-react";

export function MediaPlayer() {
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"video" | "audio" | null>(null);
  const [captions, setCaptions] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (mediaFile) {
      const url = URL.createObjectURL(mediaFile);
      setMediaUrl(url);
      setMediaType(mediaFile.type.startsWith("video") ? "video" : "audio");
      setCaptions(null);
      setIsPlaying(false);
      return () => URL.revokeObjectURL(url);
    }
  }, [mediaFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("video/") && !file.type.startsWith("audio/")) {
        toast({
          variant: "destructive",
          title: "Invalid File Type",
          description: "Please select a valid video or audio file.",
        });
        return;
      }
      setMediaFile(file);
    }
  };

  const handleGenerateCaptions = async () => {
    if (!mediaFile) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a video or audio file first.",
      });
      return;
    }

    setIsLoading(true);
    setCaptions(null);

    const reader = new FileReader();
    reader.readAsDataURL(mediaFile);
    reader.onload = async () => {
      try {
        const dataUri = reader.result as string;
        const result = await generateVideoCaptions({ videoDataUri: dataUri });
        setCaptions(result.captions);
      } catch (error) {
        console.error("Error generating captions:", error);
        toast({
          variant: "destructive",
          title: "Caption Generation Failed",
          description: "An error occurred while generating captions.",
        });
      } finally {
        setIsLoading(false);
      }
    };
  };

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);


  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="media-upload">Upload Media File</Label>
        <div className="mt-1 flex gap-2">
          <Input id="media-upload" type="file" onChange={handleFileChange} accept="video/*,audio/*"/>
        </div>
      </div>
      
      {mediaUrl && (
        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-lg border bg-muted">
            {mediaType === "video" ? (
              <video
                ref={mediaRef as React.RefObject<HTMLVideoElement>}
                src={mediaUrl}
                className="aspect-video w-full"
                onPlay={onPlay}
                onPause={onPause}
                controls
              />
            ) : (
              <div className="p-4">
                <audio
                    ref={mediaRef as React.RefObject<HTMLAudioElement>}
                    src={mediaUrl}
                    className="w-full"
                    onPlay={onPlay}
                    onPause={onPause}
                    controls
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          onClick={handleGenerateCaptions}
          disabled={isLoading || !mediaFile}
          className="w-full sm:w-auto"
        >
          {isLoading ? (
            <Loader2 className="mr-2 animate-spin" />
          ) : (
            <Captions className="mr-2" />
          )}
          {isLoading ? "Generating..." : "Generate Captions"}
        </Button>
      </div>

      {(isLoading || captions) && (
         <div className="space-y-2">
            <h3 className="font-semibold text-lg">Transcript</h3>
            <ScrollArea className="h-48 w-full rounded-md border p-4">
            {isLoading && !captions ? (
                <div className="flex items-center justify-center h-full">
                    <p className="text-muted-foreground">Generating transcript...</p>
                </div>
            ) : (
                <p className="whitespace-pre-wrap">{captions}</p>
            )}
            </ScrollArea>
        </div>
      )}
    </div>
  );
}
