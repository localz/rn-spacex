import React from "react";
import NavigationTestUtils from "react-navigation/NavigationTestUtils";
import { render, toJSON } from "@testing-library/react-native";

import App from "../App";

jest.mock("expo", () => ({
  AppLoading: "AppLoading"
}));

jest.mock("../navigation/AppNavigator", () => "AppNavigator");

describe("App", () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    const { container } = render(<App />);
    expect(toJSON(container)).toMatchInlineSnapshot(`
      <View
        collapsable={true}
        pointerEvents="box-none"
        style={
          Object {
            "flex": 1,
          }
        }
      >
        <AppLoading />
      </View>
    `);
  });

  it(`renders the root without loading screen`, () => {
    const { container } = render(<App skipLoadingScreen />);
    expect(toJSON(container)).toMatchInlineSnapshot(`
      <View
        collapsable={true}
        pointerEvents="box-none"
        style={
          Object {
            "flex": 1,
          }
        }
      >
        <View
          style={
            Object {
              "backgroundColor": "#fff",
              "flex": 1,
            }
          }
        >
          <AppNavigator />
        </View>
      </View>
    `);
  });
});
