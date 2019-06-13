<?php
/**
 * Plugin Name:     Simple Definition List Blocks
 * Plugin URI:      https://github.com/chiilog/simple-definition-list-blocks
 * Description:     A simple definition list.
 * Author:          mel_cha
 * Author URI:      https://chiilog.com
 * Text Domain:     simple-definition-list-blocks
 * Domain Path:     /languages
 * Version:         nightly
 *
 * @package         Simple_Definition_List_Blocks
 */

namespace Simple_Definition_List_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Plugin file path.

 * @type string
 */
const PLUGIN_FILE = __FILE__;

/**
 * Get plugin information.
 *
 * @return array {
 *     Array of plugin information for the strings.
 *
 *     @type string $Name        Plugin mame.
 *     @type string $PluginURI   Plugin URL.
 *     @type string $Version     Version.
 *     @type string $Description Description.
 *     @type string $Author      Author name.
 *     @type string $AuthorURI   Author URL.
 *     @type string $TextDomain  textdomain.
 *     @type string $DomainPath  mo file dir.
 *     @type string $Network     Multisite.
 * }
 */
function get_plugin_data() {
	static $data = null;
	if ( empty( $data ) ) {
		$data = \get_file_data(
			__FILE__,
			[
				'Name'        => 'Plugin Name',
				'PluginURI'   => 'Plugin URI',
				'Version'     => 'Version',
				'Description' => 'Description',
				'Author'      => 'Author',
				'AuthorURI'   => 'Author URI',
				'TextDomain'  => 'Text Domain',
				'DomainPath'  => 'Domain Path',
				'Network'     => 'Network',
			]
		);
	}

	return $data;
}

require_once dirname( __FILE__ ) . '/src/init.php';
