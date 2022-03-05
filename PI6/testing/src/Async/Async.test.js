import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe('Async Component', () => { 
  test('render Posts if request succeeds', async() => { 
    render(<Async />)
    
    const liElements = await screen.findAllByRole('listitem');
    expect(liElements).not.toHaveLength(0)

  })
})