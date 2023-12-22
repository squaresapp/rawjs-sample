
namespace App
{
	/**
	 * A component that renders random colors around the specified hue.
	 */
	export class ColorsComponent
	{
		readonly head;
		
		/** */
		constructor(roughHue: number)
		{
			this.head = raw.div({
				textAlign: "center",
				maxWidth: "900px",
				margin: "auto",
			});
			
			for (let i = -1; ++i < 100;)
			{
				const hue = roughHue + Math.round(Math.random() * 20 - 10);
				const sat = Math.round(Math.random() * 100);
				const light = Math.round(Math.random() * 100);
				
				this.head.append(raw.div(
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
					}
				));
			}
		}
	}
}
