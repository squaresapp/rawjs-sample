
namespace App
{
	/**
	 * A top-level component that contains all other components within
	 * the app. Notice there is no inheritance from anything, not even HTMLElement!
	 * There's no need. This class will sit in the background behind the .head element,
	 * and objects of this class will be automatically garbage collected when the .head
	 * element is removed from the DOM. You don't even have to think about this.
	 */
	export class RootComponent
	{
		readonly head;
		private readonly animalsContainer;
		private readonly buttons;
		
		/** */
		constructor()
		{
			this.head = raw.div(
				raw.div(
					{
						padding: "0.5em",
						textAlign: "center",
					},
					this.buttons = new SegmentedButtonComponent(
						e => [
							raw.text("Reds"),
							Rawter.on("/reds", () =>
							{
								this.buttons.select(e);
								this.animalsContainer.replaceChildren(
									new ColorsComponent(0).head
								);
							}),
						],
						e => [
							raw.text("Greens"),
							Rawter.on("/greens", () =>
							{
								this.buttons.select(e);
								this.animalsContainer.replaceChildren(
									new ColorsComponent(130).head
								);
							})
						],
						e => [
							raw.text("Blues"),
							Rawter.on("/blues", () =>
							{
								this.buttons.select(e);
								this.animalsContainer.replaceChildren(
									new ColorsComponent(220).head
								);
							})
						]
					),
				),
				this.animalsContainer = raw.div(
					// Strings are interpreted as class names in RawJS.
					// It  can be good practise to annotate anonymous <div> elements like
					// this one with descriptive class names for no reason other than
					// debugging purposes, so that when you're in the element inspector,
					// you can more easily trace a <div> back to its location in your source.
					"animals-container"
				)
			);
		}
	}
}
