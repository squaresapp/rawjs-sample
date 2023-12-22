
namespace App
{
	/**
	 * Most projects will have a namespace of utility functions
	 * that reused across the entire project. One such function is
	 * an "escape" function, in order to provide a quick way to make
	 * a modal escapable.
	 */
	export namespace UI
	{
		/** */
		export function escape(): Raw.Param
		{
			return [
				// RawJS supports remote attachment targets. This means
				// that the element that receives the event is different from
				// the element where the event is attached. We want the 
				// attachment of the keydown event to be contingent upon
				// the existence of the element receiving the UI.escape()
				// function, but we want the window to be the receiver
				// of the event, so that the keydown event can be captured
				// anywhere. 
				e => raw.on(window, "keydown", () =>
				{
					e.remove();
				})
			]
		}
	}
}
