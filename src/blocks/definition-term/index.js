import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import metadata from './block.json';
const { name } = metadata;

registerBlockType( name, {
	...metadata,
	edit( { attributes: { content }, setAttributes, className } ) {
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		return (
			<RichText
				tagName="dt"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				placeholder={ __(
					'Start writing dt tag contents.',
					'simple-definition-list-blocks'
				) }
			/>
		);
	},

	save( { attributes: { content }, className } ) {
		return <RichText.Content tagName="dt" value={ content } />;
	},
} );
