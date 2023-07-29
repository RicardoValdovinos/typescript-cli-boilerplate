import { Text } from "ink";
import { render } from "ink-testing-library";
import React from "react";

type CounterProps = { count: number };

const Counter = ({ count }: CounterProps): React.ReactElement => (
	<Text>Count: {count}</Text>
);

const { lastFrame, rerender } = render(<Counter count={0} />);
lastFrame() === "Count: 0"; //=> true

rerender(<Counter count={1} />);
lastFrame() === "Count: 1"; //=> true
