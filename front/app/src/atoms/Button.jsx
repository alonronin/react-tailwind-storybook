import React from 'react';
import cn from 'classnames';

const Button = ({ disabled, className, children, ...props }) => (
	<button
		className={cn(
		    'font-bold text-white py-2 px-4 rounded',
            {
                'bg-blue-500 hover:bg-blue-700': !disabled,
                'bg-gray-400 text-gray-500': disabled
            },
			className
		)}
		disabled={disabled}
		{...props}
	>
		{children}
	</button>
);

export default Button;
