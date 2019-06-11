import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';

const description_name = 'simple-definition-list-blocks/details';
const description_settings = {
	title: __( 'dd tag (Simple Definition List Blocks)', 'simple-definition-list-blocks' ),
	description: __( 'Create dd html tag.', 'simple-definition-list-blocks' ),
	icon: 'editor-help',
	category: 'formatting',
	keywords: [ __( 'definition', 'simple-definition-list-blocks' ), __( 'details', 'simple-definition-list-blocks' ), __( 'dd', 'simple-definition-list-blocks' ) ],
	parent: [ 'simple-definition-list-blocks/list' ],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'dd',
		},
	},

	edit( { attributes: { content }, setAttributes, className } ) {
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		return (
			<RichText
				tagName="dd"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				placeholder={ __( 'Start writing dd tag contents.', 'simple-definition-list-blocks' ) }
			/>
		);
	},

	save( { attributes: { content }, className } ) {
		return <RichText.Content tagName="dd" value={ content } />;
	},
};

registerBlockType( description_name, description_settings );
