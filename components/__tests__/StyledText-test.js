import React from "react";
import { render, toJSON } from "@testing-library/react-native";

import { MonoText } from "../StyledText";

test.only(`renders correctly`, () => {
  const { container } = render(<MonoText>Snapshot test!</MonoText>);

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
      <Text
        style={
          Array [
            undefined,
            Object {
              "fontFamily": "space-mono",
            },
          ]
        }
      >
        Snapshot test!
      </Text>
    </View>
  `);
});
