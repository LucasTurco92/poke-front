import { render } from '@testing-library/react';
import Header from '../header';

it('When it invokes the header component, should render it properly', ()=>{

    const { container } = render(<Header />);
    
    expect(container).toMatchSnapshot();
});