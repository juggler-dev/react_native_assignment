import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ dropDownOptions, fetchData }) => {
  //Dropdown states
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(dropDownOptions);

  return (
    <View style={styles.dropdown}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value) => {
          fetchData(value);
        }}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdown: {
    alignItems: "center",
    justifyContent: "center",
    width: '50%'
  },
});
