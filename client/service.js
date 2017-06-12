export function get() {
  return fetch("/api")
    .then((res) => res.json());
}
