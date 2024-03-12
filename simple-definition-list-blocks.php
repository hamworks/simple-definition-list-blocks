<?php
/**
 * Plugin Name:       Simple Definition List Blocks
 * Plugin URI:        https://github.com/chiilog/simple-definition-list-blocks
 * Description:       A simple definition list.
 * Author:            mel_cha
 * Author URI:        https://chiilog.com
 * Text Domain:       simple-definition-list-blocks
 * Version: 6.0.1
 * Requires at least: 5.8
 *
 * @package         Simple_Definition_List_Blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load text domain.
 */
add_action( 'init', function () {
	load_plugin_textdomain( 'simple-definition-list-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
} );

/**
 * Block registration.
 */
function simple_definition_list_blocks_register_block() {
	register_block_type( __DIR__ . '/build/blocks/definition-details' );
	register_block_type( __DIR__ . '/build/blocks/definition-details-html' );
	register_block_type( __DIR__ . '/build/blocks/definition-div' );
	register_block_type( __DIR__ . '/build/blocks/definition-list' );
	register_block_type( __DIR__ . '/build/blocks/definition-term' );
}

add_action( 'init', 'simple_definition_list_blocks_register_block' );
