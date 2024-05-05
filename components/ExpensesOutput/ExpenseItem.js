import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  function pressedExpenseHandler() {
    navigation.navigate("ManageExpenses", { expenseId: id });
  }

  return (
    <Pressable
      onPress={pressedExpenseHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ {amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "space-between",
    elevation: 3,
    flexDirection: "row",
    marginVertical: 12,
    borderRadius: 8,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 90,
  },
  amount: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
