import { registerBlockType } from '@wordpress/blocks';
import { title, Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import { Save } from './save';

const { name, category, attributes, parent, supports } = metadata;

registerBlockType( name, {
	title: `${ __(
		'DT Tag',
		'simple-definition-list-blocks'
	) } (Simple Definition List Blocks)`,
	description: __(
		'Add a dt tag for inside the dl tag.',
		'simple-definition-list-blocks'
	),
	category,
	icon: <Icon icon={ title } />,
	parent,
	attributes,
	supports,
	keywords: [
		'definition list',
		__( 'definition list', 'simple-definition-list-blocks' ),
		'dt',
		__( 'dt', 'simple-definition-list-blocks' ),
	],
	edit: Edit,
	save: Save,
} );
