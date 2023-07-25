import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType( metadata, {
	...metadata,
	edit: () => {
		const blockProps = useBlockProps();
		const innerBlocksProps = useInnerBlocksProps( blockProps );

		return (
			<dd {...innerBlocksProps} />
		);
	},
	save: () => {
		const saveBlockProps = useBlockProps.save();
		const saveInnerBlocksProps = useInnerBlocksProps.save( saveBlockProps );

		return (
			<dd {...saveInnerBlocksProps} />
		);
	},
} );
