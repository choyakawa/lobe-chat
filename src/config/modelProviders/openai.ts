import { ModelProviderCard } from '@/types/llm';

// ref:
// https://platform.openai.com/docs/models
// https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'Currently points to gpt-4o-mini-2024-07-18',
      displayName: 'GPT-4o mini',
      enabled: false,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_385,
      tokens: 128_000,
      vision: true,
    },
  ],
  checkModel: 'gpt-4o-mini',
  enabled: false,
  id: 'openai',
  modelList: { showModelFetcher: true },
  name: 'OpenAI',
};

export default OpenAI;
