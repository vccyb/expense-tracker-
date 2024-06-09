<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <button class="btn btn-accent" @click="handleClick">Accent</button>
  <div>{{ counterStore.count }}</div>
  <div>{{ expenseStore.expense }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/counter";
import { useExpenseStore } from "@/store/expense";
const counterStore = useCounterStore();
const expenseStore = useExpenseStore();

const handleClick = () => {
  expenseStore.addExpense(100);
};
</script>
