export async function translateText(
  text: string,
  targetLang: string,
  model: 'local' | 'cloud'
): Promise<string> {
  // Placeholder for translation integration.
  // Swap between local GPT-OSS-20B and cloud Qwen 3 235B.
  return Promise.resolve(`[${targetLang} translation]`);
}
