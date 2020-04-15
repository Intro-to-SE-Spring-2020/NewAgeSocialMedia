import React from "react";
import { create } from "react-test-renderer";
import NewPost from './src/components/newPost'; // The component being tested

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
