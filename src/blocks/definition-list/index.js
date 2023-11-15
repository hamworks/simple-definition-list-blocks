import { registerBlockType } from '@wordpress/blocks';
import { Icon, details } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

const { name, category } = metadata;

registerBlockType( name, {
	title: `${ __(
		'DL Tag',
		'simple-definition-list-blocks'
	) } (Simple Definition List Blocks)`,
	description: __(
		'dl tag. You can add dt tag, dd tag, or div tag inside.',
		'simple-definition-list-blocks'
	),
	category,
	icon: <Icon icon={ details } />,
	keywords: [
		'definition list',
		__( 'definition list', 'simple-definition-list-blocks' ),
		'dl',
		__( 'dl', 'simple-definition-list-blocks' ),
	],
	edit: Edit,
	save: Save,
} );
