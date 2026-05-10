import {
  urunEkle,
  urunSil,
  toplamHesapla,
  indirimUygula,
  sepetiBosalt,
  type Urun,
} from "./sepet";

describe("Ürün sepet servisi", () => {
  let testSepet: Urun[] = [];
  const urun1: Urun = { id: 1, ad: "ürün 1", fiyat: 100, adet: 1 };
  const urun2: Urun = { id: 2, ad: "ürün 2", fiyat: 200, adet: 1 };
  const urun3: Urun = { id: 3, ad: "ürün 3", fiyat: 300, adet: 1 };

  beforeEach(() => {
    testSepet = [
      { id: 1, ad: "ürün 1", fiyat: 100, adet: 1 },
      { id: 2, ad: "ürün 2", fiyat: 200, adet: 1 },
      { id: 3, ad: "ürün 3", fiyat: 300, adet: 1 },
    ];
  });

  it("boş sepete ürün eklenme", () => {
    const eklenenUrun = urunEkle([], urun1);
    expect(eklenenUrun).toHaveLength(1);
  });

  it("aynı ürünü ekleme", () => {
    const eklenenUrun = urunEkle(testSepet, urun2);
    expect(eklenenUrun.find((u) => u.id === urun2.id)?.adet).toBe(2);
  });

  it("ürün silme", () => {
    const silinenUrun = urunSil(testSepet, urun3.id);
    expect(silinenUrun.find((u) => u.id === urun3.id)).toBeUndefined();
  });

  it("olmayan id silinme", () => {
    const silinenUrun = urunSil(testSepet, 9);
    expect(silinenUrun.find((u) => u.id === 9)).toBeUndefined();
  });

  it("sepet toplam", () => {
    const toplam = toplamHesapla(testSepet);
    expect(toplam).toBe(600);
  });

  it("boş sepet toplam", () => {
    const toplam = toplamHesapla([]);
    expect(toplam).toBe(0);
  });

  it("ogrenci10 indirim", () => {
    const indirimliTutar = indirimUygula(100, "OGRENCI10");
    expect(indirimliTutar).toBe(90);
  });

  it("yeniyil25 indirim", () => {
    const indirimliTutar = indirimUygula(100, "YENIYIL25");
    expect(indirimliTutar).toBe(75);
  });

  it("geçersiz kupon kodu", () => {
    const indirimliTutar = indirimUygula(100, "BERKE");
    expect(indirimliTutar).toBe(100);
  });

  it("sepeti boşalt", () => {
    const sepet = sepetiBosalt(testSepet);
    expect(sepet).toHaveLength(0);
  });
});
