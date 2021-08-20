import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType( metadata, {
	...metadata,
	edit( { attributes: { content }, setAttributes } ) {
		const blockProps = useBlockProps();
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		return (
			<RichText
				{ ...blockProps }
				tagName="dd"
				onChange={ onChangeContent }
				value={ content }
				placeholder={ __(
					'Start writing dd tag contents.',
					'simple-definition-list-blocks'
				) }
			/>
		);
	},

	save( { attributes: { content } } ) {
		const saveBlockProps = useBlockProps.save();
		return (
			<RichText.Content
				{ ...saveBlockProps }
				tagName="dd"
				value={ content }
			/>
		);
	},
} );
