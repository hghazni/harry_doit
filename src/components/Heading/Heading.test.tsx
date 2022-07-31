import { render } from "@testing-library/react";
import { HeadingProps } from "./Heading.types";
import Heading from "./Heading";

describe("Heading Component", () => {
  let props: HeadingProps;
  beforeEach(() => {
    props = {
      className: '',
      variant: 'h4',
    };
  });

  const renderComponent = () => render(<Heading {...props}>Run the following gcloud commands in sequence:</Heading>);

  it("Should render the Heading component with all it's props", () => {
    const { asFragment } = renderComponent();
    const HeadingComponent = (asFragment().firstElementChild as any).name;
    expect(HeadingComponent).toEqual(HeadingComponent);
  });
});
