import { act, render, screen } from '@testing-library/preact';
import { createContext, h } from 'preact';
import { useContext, useState } from 'preact/hooks';

const ExampleContext = createContext('foo');

// Set the context value for ExampleProvider
let setProviderState;

// This provider exposes its state setter to the parent scope so we can set context directly
function ExampleProvider({ children }) {
    const [value, setValue] = useState('foo');
    setProviderState = setValue;

    return (
        <ExampleContext.Provider value={value}>
            {children}
        </ExampleContext.Provider>
    );
}

test('using ExampleContext.Consumer works correctly', async () => {

    render(
        <ExampleProvider>
            <ExampleContext.Consumer>{(value) => <div>{value}</div>}</ExampleContext.Consumer>
        </ExampleProvider>
    );

    await act(() => {
        setProviderState('bar');
    });

    expect(screen.getByText('bar')).toBeInTheDocument();
});

test('using useContext throws an error', async () => {
    function ExampleConsumer() {
        const value = useContext(ExampleContext);
        return <div>{value}</div>;
    }

    render(
        <ExampleProvider>
            <ExampleConsumer></ExampleConsumer>
        </ExampleProvider>
    );

    await act(() => {
        setProviderState('bar');
    });

    expect(screen.getByText('bar')).toBeInTheDocument();
});
