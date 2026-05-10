export type HavaDurumu = {
  sehir: string;
  derece: number;
  durum: "guneşli" | "yagmurlu" | "karli" | "bulutlu";
};

export async function havaDurumuGetir(sehir: string): Promise<HavaDurumu> {
  const res = await fetch(`https://api.example.com/weather?city=${sehir}`);
  const data = await res.json();

  if (res.ok === false) {
    throw new Error("Hava durumu alınamadı");
  }

  return data;
}
