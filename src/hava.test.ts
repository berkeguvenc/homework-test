import { vi } from "vitest";
import { havaDurumuGetir } from "./hava";

describe("hava durumu servisi", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("istanbul için api", async () => {
    const mockData = { sehir: "Istanbul", derece: 25, durum: "guneşli" };

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    } as Response);

    const sonuc = await havaDurumuGetir("Istanbul");

    expect(sonuc).toEqual(mockData);
  });

  it("doğru url test", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    await havaDurumuGetir("Istanbul");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.example.com/weather?city=Istanbul",
    );
  });

  it("api hatası test", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    } as Response);

    await expect(havaDurumuGetir("Istanbul")).rejects.toThrow(
      "Hava durumu alınamadı",
    );
  });

  it("Network hatası test", async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("Network Hatası"));

    await expect(havaDurumuGetir("Bursa")).rejects.toThrow("Network Hatası");
  });
});
