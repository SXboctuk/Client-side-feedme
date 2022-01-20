import React from 'react';

const SvgUser = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M16.5 18C16.5 18 18 18 18 16.5C18 15 16.5 10.5 9 10.5C1.5 10.5 0 15 0 16.5C0 18 1.5 18 1.5 18H16.5ZM13.5 4.5C13.5 5.69347 13.0259 6.83807 12.182 7.68198C11.3381 8.52589 10.1935 9 9 9C7.80653 9 6.66193 8.52589 5.81802 7.68198C4.97411 6.83807 4.5 5.69347 4.5 4.5C4.5 3.30653 4.97411 2.16193 5.81802 1.31802C6.66193 0.474106 7.80653 0 9 0C10.1935 0 11.3381 0.474106 12.182 1.31802C13.0259 2.16193 13.5 3.30653 13.5 4.5Z"
				fill={props.fill ? props.fill : '#494949'}
			/>
		</svg>
	);
};

export default SvgUser;
