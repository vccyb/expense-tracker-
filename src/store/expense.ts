import { defineStore } from "pinia";

export const useExpenseStore = defineStore("expense", {
  state: () => {
    return {
      expense: 888,
    };
  },
  actions: {
    // 添加消费
    addExpense(amount: number) {
      this.expense += amount;
    },
  },
});
