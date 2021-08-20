import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

registerBlockType( name, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		return (
			<dd { ...blockProps }>
				<InnerBlocks />
			</dd>
		);
	},
	save: () => {
		const saveBlockProps = useBlockProps.save();
		return (
			<dd { ...saveBlockProps }>
				<InnerBlocks.Content />
			</dd>
		);
	},
} );
