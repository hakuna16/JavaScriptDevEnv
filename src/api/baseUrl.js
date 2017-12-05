export default function getBaseUrl() {
  const inDevlopment = window.location.hostname === 'localhost';
  return inDevlopment ? 'http://localhost:3001/' : '/';
}
