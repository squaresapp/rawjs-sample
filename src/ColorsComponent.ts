
namespace App
{
	/** */
	export class ColorsComponent
	{
		readonly head;
		readonly colorsContainer;
		
		/** */
		constructor(routeName: string, roughHue: number)
		{
			this.head = raw.div(
				"colors-component",
				this.colorsContainer = raw.div(
					"colors-container",
					{
						textAlign: "center",
						maxWidth: "900px",
						margin: "auto",
					}
				),
			);
			
			for (let i = -1; ++i < 100;)
			{
				let hue = roughHue + Math.round(Math.random() * 20 - 10);
				if (hue >360)
					hue -= 360;
				
				if (hue < 0)
					hue += 360;
				
				const sat = Math.round(Math.random() * 100);
				const light = Math.round(Math.random() * 100);
				
				this.colorsContainer.append(raw.div(
					{
						display: "inline-block",
						width: "300px",
						height: "300px",
						border: "5px solid white",
						backgroundImage: `linear-gradient(
							-45deg,
							hsl(${hue}, ${sat}%, ${light}%),
							hsl(${hue}, ${sat}%, ${light - 20}%)
						)`,
					},
					Rawter.on(`/${routeName}/${hue}-${sat}-${light}`, () =>
					{
						this.head.append(
							new ColorViewerComponent(hue, sat, light).head
						);
					})
				));
			}
		}
	}
}
