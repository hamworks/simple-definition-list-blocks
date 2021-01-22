import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
	'simple-definition-list-blocks/details-html',
];

registerBlockType( name, {
	...metadata,
	edit( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		);
	},

	save( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
