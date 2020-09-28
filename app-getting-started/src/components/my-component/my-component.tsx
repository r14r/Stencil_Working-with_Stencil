import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
	tag: 'my-component',
	styleUrl: 'my-component.css',
	shadow: true,
})
export class MyComponent {
	@Prop() first: string;
	@Prop() middle: string;
	@Prop() last: string;

	private getText(): string {
		return format(this.first, this.middle, this.last);
	}

	render() {
		console.log('my-component/render');
		return <div>Greetings from Component: I'm {this.getText()}</div>;
	}
}
