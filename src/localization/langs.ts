export interface Language {
    key: string;
    nativeName: string;
    prefix: string;
}

export default [
    {
        key: "en",
        nativeName: "English",
        prefix: "🇺🇸",
    },
] satisfies Language[];
