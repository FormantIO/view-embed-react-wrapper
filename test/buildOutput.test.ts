import * as fs from "fs";
import * as path from "path";

describe("Build output", () => {
  const distDir = path.resolve(__dirname, "../dist");
  const esModule = path.join(distDir, "index.es.js");
  const umdModule = path.join(distDir, "index.umd.js");

  it("dist files exist", () => {
    expect(fs.existsSync(esModule)).toBe(true);
    expect(fs.existsSync(umdModule)).toBe(true);
  });

  describe("ES module does not bundle React internals", () => {
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(esModule, "utf-8");
    });

    it("does not contain __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => {
      expect(content).not.toContain(
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      );
    });

    it("does not contain bundled react-jsx-runtime source", () => {
      expect(content).not.toContain("react-jsx-runtime.production");
    });

    it("imports jsx-runtime as an external module", () => {
      expect(content).toContain('from "react/jsx-runtime"');
    });

    it("imports react as an external module", () => {
      expect(content).toContain('from "react"');
    });
  });

  describe("UMD module does not bundle React internals", () => {
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(umdModule, "utf-8");
    });

    it("does not contain __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => {
      expect(content).not.toContain(
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      );
    });

    it("does not contain bundled react-jsx-runtime source", () => {
      expect(content).not.toContain("react-jsx-runtime.production");
    });
  });
});
