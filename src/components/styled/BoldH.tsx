import {styled, Typography, TypographyProps} from "@mui/material";
import React from 'react';

const BoldH = ({children, ...props}) => {


	const styledBoldH4 = styled(Typography)<TypographyProps>(({theme}) => ({
		fontWeight: 700,
	}))

	return (
		<Typography {...props} fontWeight={700} variant={'h4'}>
			{children}
		</Typography>
	);
};

export default BoldH;