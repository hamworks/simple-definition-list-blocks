import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

registerBlockType( name, {
	...metadata,
	edit( { className } ) {
		return (
			<dd className={ className }>
				<InnerBlocks />
			</dd>
		);
	},

	save( { className } ) {
		return (
			<dd className={ className }>
				<InnerBlocks.Content />
			</dd>
		);
	},
} );
