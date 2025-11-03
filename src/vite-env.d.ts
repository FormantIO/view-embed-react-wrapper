/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORYBOOK_AUTH_TOKEN?: string;
  readonly VITE_STORYBOOK_VIEW_ID?: string;
  readonly VITE_STORYBOOK_DEVICE_ID?: string;
  readonly VITE_STORYBOOK_API_BASE_URL?: string;
  readonly VITE_STORYBOOK_DATA_SRC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
