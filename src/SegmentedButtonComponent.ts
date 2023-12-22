
namespace App
{
	/**
	 * Quick-and-dirty segmented button component.
	 * Construct it with a series of callback functions that construct buttons
	 * with Raw.Param values appended.
	 * 
	 * In production, you may want to use something a little more robust.
	 * This is only here to demonstrate how easy it is to create reusable
	 * components without using React.
	 */
	export class SegmentedButtonComponent
	{
		readonly head;
		
		/** */
		constructor(...segments: ((element: HTMLElement) => Raw.Param)[])
		{
			this.head = raw.div(
				// Calls to raw.css() create CSS content with rules
				// that are scoped to the element in which the CSS
				// rules have been defined, which in this case is the
				// .head element.
				raw.css(
					// RawJS appends generated class names to elements
					// when necessary. The selectors below ("> *") are
					// concatenated to the generated class name which
					// is assigned to the this.head element.
					"> *", {
						display: "inline-block",
						padding: "1em",
						borderRadius: "5px",
						userSelect: "none",
						webkitUserSelect: "none",
						cursor: "default",
					},
					"> .active", {
						backgroundColor: "hsl(215, 100%, 50%)",
						color: "white",
					}
				),
				// A closure embedded as a parameter within a raw.element
				// call gets automatically executed, and the return value is
				// interpreted as a Raw.Param and appended to the element
				// being created.
				() =>
				{
					const buttons: HTMLElement[] = [];
					
					for (const fn of segments)
					{
						const button = raw.div();
						
						// This code is a bit weird, but it's efficient. If you know jQuery,
						// then raw.get() is similar to jQuery's $() function. It wraps
						// the parameter in a RawJS context, and returns a function
						// that takes Raw.Param types, and assigns those parameters
						// to the captured elements (in this case, the button).
						// So this code is calling the button creation function, which
						// returns a bunch of Raw.Param values, which are then piped
						// back to the button div.
						raw.get(button)(
							raw.on("click", () => this.select(button)),
							fn(button)
						);
						
						buttons.push(button);
					}
					
					return buttons;
				}
				
			);
		}
		
		/**
		 * Selects a child element of the segmented button.
		 */
		select(childElement: HTMLElement)
		{
			toggleClass(childElement, "active");
		}
	}
	
	/**
	 * One-line class toggler function. Sets a class on a specific element, and erases
	 * the same class name from all sibling elements.
	 */
	function toggleClass(child: Element, cls: string)
	{
		Array.from(child.parentElement!.children).map(e => e.classList.toggle(cls, e === child));
	}
}
