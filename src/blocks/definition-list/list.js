import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
	'simple-definition-list-blocks/term',
	'simple-definition-list-blocks/details',
];
const listSettings = {
	title: __(
		'definition list (Simple Definition List Blocks)',
		'simple-definition-list-blocks'
	),
	description: __(
		'Display a definition list. Add a term or details.',
		'simple-definition-list-blocks'
	),
	icon: 'admin-page',
	category: 'formatting',
	keywords: [ __( 'definition', 'simple-definition-list-blocks' ) ],
	attributes: {
		dt: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-simple-definition-list-blocks-term'
		},
		dd: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-simple-definition-list-blocks-details'
		},
	},

	edit( { className } ) {
		return (
			<dl className={ className }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
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

registerBlockType( 'simple-definition-list-blocks/list', listSettings );
