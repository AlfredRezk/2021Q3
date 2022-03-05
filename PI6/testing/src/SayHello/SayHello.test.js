import { render , screen} from "@testing-library/react"
import SayHello from "./SayHello"; 
import userEvent from '@testing-library/user-event';

// describe('SayHello Component', () => {
// test("renders SayHello component", () => {
// 	// Arrange
// 	render(<SayHello />);
// 	// Act
// 	// Nothing

// 	// Assert
// 	const h1Element = screen.getByText("Hello world!", { exact: false });
// 	expect(h1Element).toBeInTheDocument();
// });

// })


describe('SayHello Component', () => { 
  test('renders "Hello World" as a text in the DOM ', () => { 
    render(<SayHello />);

    const h1Element = screen.getByText('hello world!')
    expect(h1Element).toBeInTheDocument();
  })

  test('render "Nice to see you" if the button was not Clicked', () => { 
    render(<SayHello />);

    const outputElement = screen.getByText('Nice to see you', { exact: false })
    expect(outputElement).toBeInTheDocument();
  });

  test('render "changed" if the button was clicked', () => { 
    // Arrange 
    render(<SayHello />)
    
    // Act 
    const btn = screen.getByRole('button');
    userEvent.click(btn);

    // Assert 
    const outputElement = screen.getByText("Changed", { exact: false });
    expect(outputElement).toBeInTheDocument();

  })


  test('does not render "Nice to see you" if the button was clicked', () => {
		// Arrange
		render(<SayHello />);

		// Act
		const btn = screen.getByRole("button");
		userEvent.click(btn);

		// Assert
		const outputElement = screen.queryByText("Nice to see you", { exact: false });
		expect(outputElement).toBeNull()
	});
})
