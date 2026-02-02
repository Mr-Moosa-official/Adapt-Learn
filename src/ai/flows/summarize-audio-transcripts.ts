'use server';

/**
 * @fileOverview A flow to summarize audio transcripts using AI.
 *
 * - summarizeAudioTranscript - A function that handles the summarization of audio transcripts.
 * - SummarizeAudioTranscriptInput - The input type for the summarizeAudioTranscript function.
 * - SummarizeAudioTranscriptOutput - The return type for the summarizeAudioTranscript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAudioTranscriptInputSchema = z.object({
  transcript: z
    .string()
    .describe('The audio transcript to be summarized.'),
});
export type SummarizeAudioTranscriptInput = z.infer<typeof SummarizeAudioTranscriptInputSchema>;

const SummarizeAudioTranscriptOutputSchema = z.object({
  summary: z
    .string()
    .describe('The summarized audio transcript.'),
});
export type SummarizeAudioTranscriptOutput = z.infer<typeof SummarizeAudioTranscriptOutputSchema>;

export async function summarizeAudioTranscript(input: SummarizeAudioTranscriptInput): Promise<SummarizeAudioTranscriptOutput> {
  return summarizeAudioTranscriptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAudioTranscriptPrompt',
  input: {schema: SummarizeAudioTranscriptInputSchema},
  output: {schema: SummarizeAudioTranscriptOutputSchema},
  prompt: `Summarize the following audio transcript:\n\nTranscript: {{{transcript}}}`,
});

const summarizeAudioTranscriptFlow = ai.defineFlow(
  {
    name: 'summarizeAudioTranscriptFlow',
    inputSchema: SummarizeAudioTranscriptInputSchema,
    outputSchema: SummarizeAudioTranscriptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
