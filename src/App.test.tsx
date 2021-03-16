import { shallow } from "enzyme";
import Login from "./pages/login/index";

describe("Login component tests", () => {
  const wrapper = shallow(<Login />);
  it("Should have input for username and password", () => {
    expect(wrapper.find("username"));
    expect(wrapper.find("password"));
  });
  it("button should be working properly", () => {
    wrapper.find("InputSubmit").simulate("submit");
  });
});