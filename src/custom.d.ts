declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL?: string;
    readonly VITE_API_BASE_URL?: string;
    readonly VITE_GITHUB_URL?: string;
    // add other VITE_ env vars here as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
