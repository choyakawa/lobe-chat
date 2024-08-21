import { ModelProviderCard } from '@/types/llm';

// ref:
// https://platform.openai.com/docs/models
// https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'miniG',
      displayName: 'miniG',
      enabled: true,
      functionCall: true,
      id: 'miniG',
      maxOutput: 8192,
      tokens: 32768,
      vision: true,
    },
  ],
  checkModel: 'miniG',
  enabled: true,
  id: 'openai',
  modelList: { showModelFetcher: true },
  name: 'OpenAI',
};

export default OpenAI;
