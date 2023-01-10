import { render } from '@testing-library/react';
import Home from '../home';

it('When it invokes the home page, should render it properly', ()=>{

    const { container } = render(<Home />);
    
    expect(container).toMatchSnapshot();
});