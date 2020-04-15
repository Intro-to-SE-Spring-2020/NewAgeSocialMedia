import React from "react";
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import LikeButton from './src/components/likeButton'; // The component being tested


describe("addLike", () => {
  it("should add a like", () => {
    const mockEvent = {
      target: {
        likes: 0
      }
    };

    const expected = {
      likes: 0
    };
    wrapper.instance().addLike(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });
});
