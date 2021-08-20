import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
];

registerBlockType( name, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		);
	},
	save: () => {
		const saveBlockProps = useBlockProps.save();
		return (
			<div { ...saveBlockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
