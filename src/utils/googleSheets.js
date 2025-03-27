export async function logExport(user, filterSummary) {
  return fetch('/api/export', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, filterSummary })
  });
}