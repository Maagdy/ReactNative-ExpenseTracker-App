import { StyleSheet, View, Text } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/style";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText, user }) => {
  const userExpenses = expenses.filter((expense) => expense.userID === user);
  let content = <Text style={styles.textInfo}>{fallBackText}</Text>;
  console.log("user expense", user);
  console.log(expenses);
  if (userExpenses.length > 0) {
    content = <ExpensesList expenses={userExpenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={userExpenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  textInfo: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "50%",
    fontSize: 20,
  },
});
