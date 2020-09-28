import { Component, Prop, State, h } from '@stencil/core';

@Component({
	tag: 'rating-component',
	styleUrl: 'rating-component.css',
	shadow: true,
})
export class RatingComponent {
	@Prop() maxValue: number = 5;
	@Prop() value: number = 0;

	@State() starList: Array<object> = [];

	componentWillLoad() {
		console.log('rating-component/componentWillLoad:');
		this.createStarList(this.value);
	}
	componentDidLoad() {
		console.log('rating-component/componentDidLoad:');
	}

	componentWillUpdate() {
		console.log('rating-component/componentDidLoad:');
	}

	componentWillRender() {
		console.log('rating-component/componentWillUpdate:');
	}
	componentDidRender() {
		console.log('rating-component/componentDidRender:');
	}
	componentDidUpdate() {
		console.log('rating-component/componentDidUpdate:');
	}
	disconnectedCallback() {
		console.log('rating-component/disconnectedCallback:');
	}

	setValue(newValue) {
		console.log('rating-component/setValue:' + newValue);
		this.value = newValue;
		this.createStarList(this.value);
	}

	createStarList(numberOfStars: number) {
		console.log('rating-component/createStartList');
		let starList = [];

		for (let i = 1; i <= this.maxValue; i++) {
			if (i <= numberOfStars) {
				starList.push(
					<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>
						&#x2605;
					</span>,
				);
			} else {
				starList.push(
					<span class="rating" onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>
						&#x2606;
					</span>,
				);
			}
		}

		this.starList = starList;
	}

	render() {
		console.log('rating-component/render');
		return <div>{this.starList}</div>;
	}
}
