declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_PERSPECTIVE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}