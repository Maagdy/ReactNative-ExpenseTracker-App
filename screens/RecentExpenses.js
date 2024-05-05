import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingIverlay";
import ErrorOverlay from "../components/UI/ErrorOverLay";
import { authContext } from "../store/AuthContext";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(authContext);

  useEffect(() => {
    async function getExpense() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpense(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }
    getExpense();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onPress={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      user={authCtx.userId}
      expenses={recentExpenses}
      fallBackText="No expenses registered in the last week"
      expensesPeriod="Last 7 days"
    />
  );
};

export default RecentExpenses;
