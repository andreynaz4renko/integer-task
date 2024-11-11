declare global {
  namespace JSX {
    type IntrinsicElements = Record<keyof HTMLElementTagNameMap, Record<string, any>>;
  }
}
