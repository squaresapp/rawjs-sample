
namespace App
{
	/** */
	function startup()
	{
		document.head.append(
			// The raw.style function creates a <style> element, but it's
			// parameters follow a format which isn't like other elements like
			// raw.div and raw.section. Instead, the parameters are designed 
			// to make creating inline style sheets as expedient as possible.
			raw.style(
				"*", {
					// Setting every element to position: relative by default
					// is a cheat-code for making CSS positioning suck a lot less.
					position: "relative",
					boxSizing: "border-box",
					padding: 0,
					margin: 0,
					fontSize: "inherit"
				},
				"HTML, BODY", {
					// You can use an array of values in the inline CSS values,
					// which creates a fallback property definition, similar to
					// the effect in CSS if you define the same property multiple
					// times with different values for different browsers.
					minHeight: ["100dvh", "100vh"]
				},
				"HTML", {
					backgroundColor: "black",
				},
				"BODY", {
					fontFamily: "sans-serif",
					color: "white",
				}
			)
		);
		// Create a root component here, and append it's head element.
		// The RootComponent controller class will operate the background,
		// and will be automatically garbage collected in the case when the 
		// root's .head element is removed from the DOM.
		const root = new RootComponent();
		document.body.append(root.head);
		
		Rawter.go();
	}
	
	window.addEventListener("DOMContentLoaded", startup);
}
