import { registerBlockType } from '@wordpress/blocks';
import { group, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

const { name, attributes, category, parent } = metadata;

registerBlockType( name, {
	title: `${ __(
		'DIV Tag',
		'simple-definition-list-blocks'
	) } (Simple Definition List Blocks)`,
	description: __(
		'Add a div tag for inside the dl tag.',
		'simple-definition-list-blocks'
	),
	category,
	icon: <Icon icon={ group } />,
	keywords: [
		'definition list',
		__( 'definition list', 'simple-definition-list-blocks' ),
		'div',
		__( 'div', 'simple-definition-list-blocks' ),
	],
	parent,
	attributes,
	edit: Edit,
	save: Save,
} );
