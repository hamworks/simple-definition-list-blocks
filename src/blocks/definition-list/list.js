import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/editor';

const ALLOWED_BLOCKS = [ 'simple-definition-list-blocks/term', 'simple-definition-list-blocks/details' ];
const list_name = 'simple-definition-list-blocks/list';
const list_settings = {
	title: __( 'definition list (Simple Definition List Blocks)', 'simple-definition-list-blocks' ),
	description: __( 'Display a definition list. Add a term or details.', 'simple-definition-list-blocks' ),
	icon: 'admin-page',
	category: 'formatting',
	keywords: [ __( 'definition', 'simple-definition-list-blocks' ) ],

	edit( { className } ) {
		return (
			<dl className={ className }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS } />
			</dl>
		);
	},

	save( { className } ) {
		return (
			<dl className={ className }>
				<InnerBlocks.Content />
			</dl>
		);
	},
};

registerBlockType( list_name, list_settings );
