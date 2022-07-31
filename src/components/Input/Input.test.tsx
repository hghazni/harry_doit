import { render } from "@testing-library/react";
import { InputProps } from "./Input.types";
import Input from "./Input";

describe("Input Component", () => {
  let props: InputProps;
  beforeEach(() => {
    props = {
      className: '',
      error: true,
      type: "number",
      id: "organizationID",
      label: "Your organisation ID",
      onChange: () => console.log('onChange'),
      inputProps: {maxLength: 10}
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it("Should render the Input component with all it's props", () => {
    const { asFragment } = renderComponent();
    const InputComponent = (asFragment().firstElementChild as any).name;
    expect(InputComponent).toEqual(InputComponent);
  });
});
