import { createClient, type ContentfulClientApi } from 'contentful';

const createContentfulClient = (preview = false): ContentfulClientApi => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? 'master',
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_TOKEN ?? ''
      : process.env.CONTENTFUL_DELIVERY_TOKEN ?? '',
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
};

export const contentfulClient = createContentfulClient();
export const contentfulPreviewClient = createContentfulClient(true);
export const getContentfulClient = (preview = false) =>
  preview ? contentfulPreviewClient : contentfulClient;
