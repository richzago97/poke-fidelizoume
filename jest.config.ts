export default {
   preset: "ts-jest",
   moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
   },
   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
   testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
