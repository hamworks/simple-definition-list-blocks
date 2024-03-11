import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
	'simple-definition-list-blocks/div',
];

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: InnerBlocks.ButtonBlockAppender,
	} );

	return <dl { ...innerBlocksProps } />;
}
