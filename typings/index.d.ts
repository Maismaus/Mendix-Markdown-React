export {};

declare global {
    interface Window {
        foobar: SimpleMDEReact; // 👈️ turn off type checking
    }
}
