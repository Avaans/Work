'use client';
import { useState } from 'react';
import { runOCR } from '../lib/ocr';
import { translateText } from '../lib/translate';
import { useModel } from './ModelContext';

export default function UploadForm() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const { model } = useModel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Processing...');
    let ocrText = transcription;
    if (files) {
      for (const file of Array.from(files)) {
        if (file.type.startsWith('image/')) {
          const text = await runOCR(file, model);
          ocrText += `\n${text}`;
        }
      }
    }
    let translated = translation;
    if (ocrText && !translation) {
      translated = await translateText(ocrText, 'en', model);
    }
    setStatus(`OCR: ${ocrText}\nTranslation: ${translated}`);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="w-full"
      />
      <textarea
        className="input"
        placeholder="Transcription"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />
      <textarea
        className="input"
        placeholder="Translation"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />
      <input className="input" placeholder="Title" />
      <input className="input" placeholder="Author" />
      <input className="input" placeholder="Translator" />
      <input className="input" placeholder="Language" />
      <input className="input" placeholder="Script" />
      <input className="input" placeholder="Item Type" />
      <input className="input" placeholder="Dating Method (BCE/CE/AH)" />
      <input className="input" placeholder="Condition" />
      <input className="input" placeholder="Material" />
      <input className="input" placeholder="Place Made" />
      <input className="input" placeholder="Holding Institute" />
      <input className="input" placeholder="IIIF Manifest URL" />
      <textarea className="input" placeholder="Scribal Notes" />
      <textarea className="input" placeholder="Bibliography" />
      <textarea className="input" placeholder="Notes" />
      <button type="submit" className="btn-primary">Upload</button>
      {status && <pre className="whitespace-pre-wrap text-sm">{status}</pre>}
    </form>
  );
}
