import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

const termSettings = {
	title: __(
		'dt tag (Simple Definition List Blocks)',
		'simple-definition-list-blocks'
	),
	description: __( 'Create dt html tag.', 'simple-definition-list-blocks' ),
	icon: 'info',
	category: 'formatting',
	keywords: [
		__( 'definition', 'simple-definition-list-blocks' ),
		__( 'terms', 'simple-definition-list-blocks' ),
		__( 'dd', 'simple-definition-list-blocks' ),
	],
	parent: [ 'simple-definition-list-blocks/list' ],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'dt',
		},
	},

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
};

registerBlockType( 'simple-definition-list-blocks/term', termSettings );
