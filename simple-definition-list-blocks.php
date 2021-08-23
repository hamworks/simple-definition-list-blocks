<?php
/**
 * Plugin Name:     Simple Definition List Blocks
 * Plugin URI:      https://github.com/chiilog/simple-definition-list-blocks
 * Description:     A simple definition list.
 * Author:          mel_cha
 * Author URI:      https://chiilog.com
 * Text Domain:     simple-definition-list-blocks
 * Version: 4.0.1
 *
 * @package         Simple_Definition_List_Blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load text domain.
 */
function simple_definition_list_blocks_load_textdomain() {
	load_plugin_textdomain( 'simple-definition-list-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'init', 'simple_definition_list_blocks_load_textdomain' );

/**
 * Block registration.
 */
function simple_definition_list_blocks_register_block() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_register_script(
		'simple-definition-list-blocks',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	register_block_type(
		'simple-definition-list-blocks/list',
		array(
			'editor_script' => 'simple-definition-list-blocks',
		)
	);

	register_block_type(
		'simple-definition-list-blocks/term',
		array(
			'editor_script' => 'simple-definition-list-blocks',
		)
	);

	register_block_type(
		'simple-definition-list-blocks/details',
		array(
			'editor_script' => 'simple-definition-list-blocks',
		)
	);

	register_block_type(
		'simple-definition-list-blocks/details-html',
		array(
			'editor_script' => 'simple-definition-list-blocks',
		)
	);

	register_block_type(
		'simple-definition-list-blocks/div',
		array(
			'editor_script' => 'simple-definition-list-blocks',
		)
	);
}

add_action( 'init', 'simple_definition_list_blocks_register_block' );
