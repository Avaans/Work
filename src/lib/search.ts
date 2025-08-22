export interface SearchFilters {
  region?: string;
  language?: string;
  script?: string;
  itemType?: string;
  institute?: string;
  datingMethod?: string;
  start?: number;
  end?: number;
}

export interface SearchResult {
  id: string;
  title: string;
  snippet: string;
}

export async function semanticSearch(
  query: string,
  filters: SearchFilters,
  model: 'local' | 'cloud'
): Promise<SearchResult[]> {
  // Placeholder for semantic search integration.
  // Would call embedding service and ANN index.
  return Promise.resolve([
    { id: '1', title: 'Sample Manuscript', snippet: 'Example snippet' },
  ]);
}
