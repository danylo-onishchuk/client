export function writeCookie(name, value, expires) {
  const date = new Date();

  date.setDate(date.getDate() + expires);
  
  document.cookie = name + "=" + value + "; path=/; expires=" + date.toUTCString();
}
