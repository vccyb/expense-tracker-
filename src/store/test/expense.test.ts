import { describe, it, expect } from "vitest";
import { useExpenseStore } from "../expense"; // 根据你的文件路径调整

import { createPinia } from "pinia";
const pinia = createPinia();

describe("expense store", () => {
  const expenseStore = useExpenseStore(pinia);
  it("should have initial state", () => {
    expect(expenseStore.expense).toEqual(888);
  });
  it("should increment expense", () => {
    expenseStore.addExpense(100);
    expect(expenseStore.expense).toEqual(988);
  });
});
