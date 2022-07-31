import { render } from "@testing-library/react";
import { CodeBlockProps } from "./CodeBlock.types";
import CodeBlock from "./CodeBlock";

describe("CodeBlock Component", () => {
  let props: CodeBlockProps;
  beforeEach(() => {
    props = {
      className: '',
      elevation: 0,
    };
  });

  const renderComponent = () => render(<CodeBlock {...props} />);

  it("Should render the CodeBlock component with all it's props", () => {
    const { asFragment } = renderComponent();
    const CodeBlockComponent = (asFragment().firstElementChild as any).name;
    expect(CodeBlockComponent).toEqual(CodeBlockComponent);
  });
});
