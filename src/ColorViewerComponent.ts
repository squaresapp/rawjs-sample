
namespace App
{
	/** */
	export class ColorViewerComponent
	{
		readonly head;
		
		/** */
		constructor(hue: number, sat: number, light: number)
		{
			const cssColor = `hsl(${hue}, ${sat}%, ${light}%)`;
			
			this.head = raw.div(
				UI.escape(),
				"color-viewer-component",
				{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					margin: "auto",
					padding: "10px",
					width: "fit-content",
					height: "fit-content",
					boxShadow: "0 0 100px 10000px rgba(0, 0, 0, 0.5)",
					backgroundColor: "white",
					zIndex: 1
				},
				raw.div(
					{
						width: "500px",
						height: "500px",
						backgroundColor: cssColor
					},
				),
				raw.div(
					{
						textAlign: "center",
						padding: "1em",
					},
					raw.text("CSS color: " + cssColor)
				)
			);
		}
	}
}
