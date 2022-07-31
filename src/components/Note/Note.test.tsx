import { render } from "@testing-library/react";
import { NoteProps } from "./Note.types";
import Note from "./Note";

describe("Note Component", () => {
  let props: NoteProps;
  beforeEach(() => {
    props = {
      className: '',
      children: 'Note test',
      square: true,
      variant: 'outlined' 
    };
  });

  const renderComponent = () => render(<Note {...props} />);

  it("Should render the Note component with all it's props", () => {
    const { asFragment } = renderComponent();
    const NoteComponent = (asFragment().firstElementChild as any).name;
    expect(NoteComponent).toEqual(NoteComponent);
  });
});
