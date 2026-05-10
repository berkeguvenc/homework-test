import { vi, describe, it, expect } from "vitest";
import { havaDurumuGetir } from "./hava";

describe("hava durumu servisi - Mock", () => {
  beforeAll(() => {
    vi.mock("./hava", () => ({
      havaDurumuGetir: vi.fn().mockResolvedValue({
        sehir: "Istanbul",
        derece: 25,
        durum: "yagmurlu",
      }),
    }));
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("İstanbul hava durumu", async () => {
    const data = await havaDurumuGetir("Istanbul");
    expect(data).toEqual({
      sehir: "Istanbul",
      derece: 25,
      durum: "yagmurlu",
    });
  });
});
