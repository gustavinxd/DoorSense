interface LogoHomeProps {
    size: number;
}

export default function LogoHome({size}: LogoHomeProps){
    return(
        <svg
        width={size}
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height={size}
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        >
        <defs>
		<clipPath id="16a72c5297">
			<path d="M 12 17 L 184 17 L 184 358 L 12 358 Z M 12 17 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="8fbd20d110">
			<path d="M 351.992188 186.410156 L 180.722656 357.679688 L 11.726562 188.6875 L 183 17.417969 Z M 351.992188 186.410156 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="49f94b5f72">
			<path d="M 351.992188 186.410156 L 180.722656 357.679688 L 11.726562 188.6875 L 183 17.417969 Z M 351.992188 186.410156 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="76bde7b172">
			<path d="M 191 17 L 364 17 L 364 358 L 191 358 Z M 191 17 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="fe7cb5e0fb">
			<path d="M 23.007812 188.589844 L 194.277344 17.320312 L 363.269531 186.3125 L 192 357.582031 Z M 23.007812 188.589844 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="78fedb1287">
			<path d="M 23.007812 188.589844 L 194.277344 17.320312 L 363.269531 186.3125 L 192 357.582031 Z M 23.007812 188.589844 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="20038fcdae">
			<path d="M 23.007812 188.589844 L 194.277344 17.320312 L 363.269531 186.3125 L 192 357.582031 Z M 23.007812 188.589844 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="b83aecdfb1">
			<path d="M 82.617188 104.667969 L 202.441406 104.667969 L 202.441406 270.332031 L 82.617188 270.332031 Z M 82.617188 104.667969 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="a1fbbe654b">
			<path d="M 164.257812 264.875 C 172.46875 261.175781 179.554688 255.59375 185.199219 248.257812 C 190.777344 241.109375 195.105469 232.082031 198.054688 221.484375 C 200.9375 211.074219 202.441406 198.910156 202.441406 185.242188 C 202.441406 172.261719 200.9375 160.726562 198.054688 150.882812 C 195.105469 140.847656 190.714844 132.320312 185.136719 125.488281 C 179.429688 118.589844 172.40625 113.261719 164.128906 109.8125 C 156.042969 106.425781 146.886719 104.667969 136.855469 104.667969 L 82.617188 104.667969 L 82.617188 270.332031 L 136.855469 270.332031 C 146.886719 270.332031 156.105469 268.511719 164.257812 264.875 Z M 134.160156 141.164062 C 138.609375 141.164062 142.625 141.914062 146.074219 143.484375 C 149.519531 144.988281 152.34375 147.183594 154.789062 150.191406 C 157.296875 153.265625 159.238281 157.214844 160.621094 161.980469 C 162.0625 166.933594 162.75 172.890625 162.75 179.664062 L 162.75 190.886719 C 162.75 198.472656 162 205.183594 160.554688 210.761719 C 159.175781 216.15625 157.171875 220.605469 154.664062 224.054688 C 152.21875 227.378906 149.332031 229.824219 145.945312 231.453125 C 142.5 233.085938 138.546875 233.960938 134.222656 233.960938 L 121.304688 233.960938 L 121.304688 141.164062 Z M 134.160156 141.164062 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="e5c87004cc">
			<path d="M 193.035156 99.363281 L 310 99.363281 L 310 272.269531 L 193.035156 272.269531 Z M 193.035156 99.363281 " clip-rule="nonzero" />
		</clipPath>
		<clipPath id="074e694836">
			<path d="M 229.328125 268.972656 C 236.167969 271.191406 243.453125 272.269531 250.988281 272.269531 C 259.285156 272.269531 267.074219 271.253906 274.042969 269.355469 C 281.328125 267.328125 287.722656 264.035156 292.980469 259.601562 C 298.363281 255.105469 302.542969 249.214844 305.519531 242.121094 C 308.433594 235.152344 309.890625 226.730469 309.890625 217.101562 C 309.890625 209.1875 308.6875 202.34375 306.28125 196.707031 C 303.875 191.070312 300.644531 186.320312 296.71875 182.457031 C 292.851562 178.722656 288.484375 175.554688 283.542969 173.148438 C 278.984375 170.867188 274.234375 168.839844 269.417969 167.132812 C 264.796875 165.484375 260.234375 163.964844 255.738281 162.570312 C 251.683594 161.304688 248.011719 159.847656 244.84375 158.136719 C 242.058594 156.679688 239.777344 154.90625 238.132812 152.878906 C 236.738281 151.296875 236.105469 149.207031 236.105469 146.546875 C 236.105469 143.316406 237.246094 140.785156 239.652344 138.695312 C 242.25 136.476562 246.429688 135.335938 252.003906 135.335938 C 256.941406 135.335938 260.679688 136.667969 263.277344 139.453125 C 266 142.367188 267.265625 146.292969 267.265625 151.550781 L 267.265625 159.023438 L 307.039062 159.023438 L 307.039062 150.855469 C 307.039062 142.113281 305.519531 134.386719 302.605469 127.863281 C 299.628906 121.339844 295.578125 115.828125 290.511719 111.585938 C 285.507812 107.40625 279.554688 104.238281 272.902344 102.277344 C 266.441406 100.3125 259.539062 99.363281 252.253906 99.363281 C 245.097656 99.363281 238.066406 100.3125 231.480469 102.277344 C 224.703125 104.238281 218.6875 107.277344 213.496094 111.332031 C 208.238281 115.449219 203.992188 120.644531 200.890625 126.851562 C 197.722656 133.058594 196.140625 140.402344 196.140625 148.636719 C 196.140625 155.097656 196.902344 160.859375 198.421875 165.800781 C 199.941406 170.742188 202.09375 175.175781 204.878906 178.847656 C 207.605469 182.523438 210.769531 185.6875 214.316406 188.285156 C 217.738281 190.753906 221.347656 192.972656 225.210938 194.746094 C 228.882812 196.519531 232.8125 198.039062 236.738281 199.367188 C 240.476562 200.636719 244.085938 201.839844 247.632812 203.105469 C 250.988281 204.308594 254.21875 205.511719 257.257812 206.84375 C 259.980469 208.046875 262.324219 209.4375 264.351562 211.023438 C 266.125 212.480469 267.519531 214.125 268.53125 216.089844 C 269.484375 217.925781 269.988281 220.332031 269.988281 223.121094 C 269.988281 224.828125 269.734375 226.414062 269.101562 227.996094 C 268.597656 229.453125 267.773438 230.71875 266.507812 231.859375 C 265.238281 233.0625 263.527344 234.078125 261.25 234.898438 C 258.90625 235.785156 255.867188 236.167969 252.253906 236.167969 C 249.089844 236.167969 246.238281 235.722656 243.894531 234.773438 C 241.613281 233.886719 239.714844 232.621094 238.195312 230.972656 C 236.613281 229.328125 235.472656 227.363281 234.648438 225.019531 C 233.761719 222.550781 233.316406 219.761719 233.316406 216.660156 C 233.316406 216.214844 233.316406 215.644531 233.382812 215.011719 C 233.445312 213.9375 233.507812 213.300781 233.507812 212.984375 L 233.507812 207.601562 L 193.226562 207.601562 L 193.226562 212.984375 C 193.226562 213.492188 193.164062 214.125 193.164062 214.824219 C 193.101562 215.898438 193.035156 216.976562 193.035156 217.988281 C 193.035156 226.792969 194.621094 234.644531 197.789062 241.421875 C 200.953125 248.199219 205.324219 253.964844 210.707031 258.523438 C 216.027344 263.273438 222.296875 266.695312 229.328125 268.972656 Z M 229.328125 268.972656 " clip-rule="nonzero" />
		</clipPath>
	</defs>
	<g clip-path="url(#16a72c5297)">
		<g clip-path="url(#8fbd20d110)">
			<g clip-path="url(#49f94b5f72)">
				<path fill="#38b6ff" d="M 183.222656 17.640625 L 180.703125 357.3125 L 12.125 188.734375 Z M 183.222656 17.640625 " fill-opacity="1" fill-rule="nonzero" />
			</g>
		</g>
	</g>
	<g clip-path="url(#76bde7b172)">
		<g clip-path="url(#fe7cb5e0fb)">
			<g clip-path="url(#78fedb1287)">
				<g clip-path="url(#20038fcdae)">
					<path fill="#000000" d="M 191.832031 357.414062 L 194.445312 17.535156 L 363.078125 186.164062 Z M 191.832031 357.414062 " fill-opacity="1" fill-rule="nonzero" />
				</g>
			</g>
		</g>
	</g>
	<g clip-path="url(#b83aecdfb1)">
		<g clip-path="url(#a1fbbe654b)">
			<path fill="#ffffff" d="M 82.617188 104.667969 L 202.441406 104.667969 L 202.441406 270.332031 L 82.617188 270.332031 Z M 82.617188 104.667969 " fill-opacity="1" fill-rule="nonzero" />
		</g>
	</g>
	<g clip-path="url(#e5c87004cc)">
		<g clip-path="url(#074e694836)">
			<path fill="#ffffff" d="M 193.035156 99.363281 L 309.828125 99.363281 L 309.828125 272.269531 L 193.035156 272.269531 Z M 193.035156 99.363281 " fill-opacity="1" fill-rule="nonzero" />
		</g>
	</g>
</svg>
);
}