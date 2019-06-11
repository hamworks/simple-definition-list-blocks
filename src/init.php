<?php
/**
 * Initialize.
 *
 * @package Simple_Definition_List_Blocks
 */

namespace Simple_Definition_List_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'enqueue_block_editor_assets',
	function () {
		$deps = [
			'wp-api-fetch',
			'wp-blocks',
			'wp-components',
			'wp-data',
			'wp-element',
			'wp-editor',
			'wp-edit-post',
			'wp-i18n',
			'wp-plugins',
		];
		wp_enqueue_script( 'simple-definition-list-blocks', plugins_url( 'dist/blocks.js', PLUGIN_FILE ), $deps, 1, true );
	}
);
