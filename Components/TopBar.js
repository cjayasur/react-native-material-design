import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction />
    <Appbar.Content title="Material Design Tutorial" subtitle="CJ is Building UI in react-native" />
  </Appbar.Header>
);

export default TopBar;
