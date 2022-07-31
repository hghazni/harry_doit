import { render } from "@testing-library/react";
import { HeadingProps } from "./Heading.types";
import Heading from "./Heading";

describe("Heading Component", () => {
  let props: HeadingProps;
  beforeEach(() => {
    props = {
      className: '',
      children: 'heading test'
    };
  });

  const renderComponent = () => render(<Heading {...props} />);

  it("Should render the Heading component with all it's props", () => {
    const { asFragment } = renderComponent();
    const HeadingComponent = (asFragment().firstElementChild as any).name;
    expect(HeadingComponent).toEqual(HeadingComponent);
  });
});
