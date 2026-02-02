'use server';
/**
 * @fileOverview Flow for generating video captions using AI.
 *
 * - generateVideoCaptions - A function that generates captions for a video.
 * - GenerateVideoCaptionsInput - The input type for the generateVideoCaptions function.
 * - GenerateVideoCaptionsOutput - The return type for the generateVideoCaptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVideoCaptionsInputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      "The video file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
});
export type GenerateVideoCaptionsInput = z.infer<typeof GenerateVideoCaptionsInputSchema>;

const GenerateVideoCaptionsOutputSchema = z.object({
  captions: z.string().describe('The generated captions for the video.'),
});
export type GenerateVideoCaptionsOutput = z.infer<typeof GenerateVideoCaptionsOutputSchema>;

export async function generateVideoCaptions(input: GenerateVideoCaptionsInput): Promise<GenerateVideoCaptionsOutput> {
  return generateVideoCaptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateVideoCaptionsPrompt',
  input: {schema: GenerateVideoCaptionsInputSchema},
  output: {schema: GenerateVideoCaptionsOutputSchema},
  prompt: `You are an AI caption generator for videos.  Given the video, generate captions that accurately describe the content.

Video: {{media url=videoDataUri}}`,
});

const generateVideoCaptionsFlow = ai.defineFlow(
  {
    name: 'generateVideoCaptionsFlow',
    inputSchema: GenerateVideoCaptionsInputSchema,
    outputSchema: GenerateVideoCaptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
