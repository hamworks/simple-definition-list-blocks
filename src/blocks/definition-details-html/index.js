import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType( metadata, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		return (
			<dd { ...blockProps }>
				<InnerBlocks
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
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
