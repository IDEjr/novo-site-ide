const MANUAL_ACCESS_COOKIE = 'manual_access';

export { MANUAL_ACCESS_COOKIE };

export async function getManualAccessToken(password: string) {
  const data = new TextEncoder().encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);

  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
}