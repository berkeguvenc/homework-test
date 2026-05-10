export type Urun = {
  id: number;
  ad: string;
  fiyat: number;
  adet: number;
};

export function urunEkle(sepet: Urun[], urun: Urun): Urun[] {
  const urunIndex = sepet.findIndex((item) => item.id === urun.id);

  if (urunIndex !== -1) {
    return sepet.map((item, index) =>
      index === urunIndex ? { ...item, adet: item.adet + 1 } : item,
    );
  } else {
    return [...sepet, { ...urun, adet: 1 }];
  }
}

export function urunSil(sepet: Urun[], id: number): Urun[] {
  return sepet.filter((item) => item.id !== id);
}

export function toplamHesapla(sepet: Urun[]): number {
  return sepet.reduce((toplam, urun) => {
    return toplam + urun.fiyat * urun.adet;
  }, 0);
}

export function indirimUygula(toplam: number, kuponKodu: string): number {
  if (kuponKodu === "OGRENCI10") {
    return toplam * 0.9; // %10 indirim
  } else if (kuponKodu === "YENIYIL25") {
    return toplam * 0.75; // %25 indirim
  } else {
    return toplam;
  }
}

export function sepetiBosalt(sepet: Urun[]): Urun[] {
  sepet = [];
  return sepet;
}
