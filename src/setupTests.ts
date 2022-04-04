// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// https://github.com/testing-library/react-testing-library/issues/1025#issuecomment-1064081086
global.IS_REACT_ACT_ENVIRONMENT = true;
