export function isAuthenticated() {
  return fetch('/api/user')
    .then(res => res.ok)
    .catch(() => false);
}