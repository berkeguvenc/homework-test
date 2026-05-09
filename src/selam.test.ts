import { vi } from "vitest";
import { selamla } from "./selam";

describe("selam servisi", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("pazartesi saat 9", () => {
    vi.setSystemTime(new Date("2026-05-11T09:00:00"));
    expect(selamla("Berke")).toBe("Günaydın Berke, iyi çalışmalar!");
  });

  it("cumartesi saat 9", () => {
    vi.setSystemTime(new Date("2026-05-09T09:00:00"));
    expect(selamla("Berke")).toBe("Günaydın Berke, keyifli bir gün geçir!");
  });

  it("salı saat 14", () => {
    vi.setSystemTime(new Date("2026-05-12T14:00:00"));
    expect(selamla("Berke")).toBe("İyi günler Berke");
  });

  it("cuma saat 20", () => {
    vi.setSystemTime(new Date("2026-05-08T20:00:00"));
    expect(selamla("Berke")).toBe("İyi akşamlar Berke");
  });

  it("çarşamba saat 23", () => {
    vi.setSystemTime(new Date("2026-05-13T23:00:00"));
    expect(selamla("Berke")).toBe("İyi geceler Berke");
  });
});
