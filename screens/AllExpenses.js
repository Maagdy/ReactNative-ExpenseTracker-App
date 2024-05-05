import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { authContext } from "../store/AuthContext";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(authContext);

  return (
    <ExpensesOutput
      user={authCtx.userId}
      expenses={expensesCtx.expenses}
      fallBackText="No expenses registered yet."
      expensesPeriod="Total"
    />
  );
};

export default AllExpenses;
