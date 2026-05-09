export function selamla(isim: string): string {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  const isHaftaIci = day >= 1 && day <= 5;

  if (hour >= 6 && hour < 12) {
    return isHaftaIci
      ? `Günaydın ${isim}, iyi çalışmalar!`
      : `Günaydın ${isim}, keyifli bir gün geçir!`;
  }

  if (hour >= 12 && hour < 18) return `İyi günler ${isim}`;
  if (hour >= 18 && hour < 22) return `İyi akşamlar ${isim}`;

  return `İyi geceler ${isim}`;
}
