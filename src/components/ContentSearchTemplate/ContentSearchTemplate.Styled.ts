import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ContentSearchTemplateWrapper = styled.div``;
export const ContentSearchTemplateGrid1x3 = styled.div`
	display: grid;
	grid-template-columns: 25% 75%;
	grid-gap: 40px;

	@media (max-width: ${styles.screenSize.sm}) {
		grid-template-columns: 100%;
	}
`;
export const ContentSearchTemplateRightElem = styled.div`
	width: 100%;
`;
export const ContentSearchTemplateSelectedPageBlock = styled.div`
	display: flex;
	margin-bottom: 40px;
`;
export const ContentSearchTemplateVariant = styled(Link)`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.textMain};

	position: relative;

	&:not(:first-child) {
		margin-left: ${styles.distances.mdPlus};
	}

	&[aria-selected] {
		&:after {
			display: block;
			content: '';
			width: 100%;
			height: 2px;
			background: ${({ theme }) => theme.colors.primary};
			border-radius: ${({ theme }) => theme.borderRadius};
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
`;
