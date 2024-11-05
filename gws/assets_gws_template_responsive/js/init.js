// 即時実行
(function($) {
	'use strict';

	// JS の Global な設定
	// HTML中で事前に設定されていた場合はその内容を優先する
	var MEL_SETTINGS = window.MEL_SETTINGS || {};
	var MEL_YOUTUBE_SETTINGS = window.MEL_YOUTUBE_SETTINGS || {};
	var MEL_CMS_SETTINGS = window.MEL_CMS_SETTINGS || {};
	var helper = {
		getMediaMode: function() {
			return window.innerWidth < 981 ? 'small' : 'large';
		},
		getPath: function(uri) {
			// URI から pathname 相当を取得
			// a 要素を生成して pathname を取得することで確実な処理を期待
			var path = $('<a />')
				.attr('href', uri)
				.prop('pathname');
			if (path.match(/^[^\/]/)) path = '/' + path;
			return path;
		},
		getCurrentPath: function() {
			// meta[property="og:url"] から現在のパスを取得, og:url が無ければ location.pathname を使う
			return (
				helper.getPath($('meta[property="og:url"]').attr('content')) ||
				location.pathname
			);
		}
	};

	window.MEL_SETTINGS = $.extend(
		{
			current_path: helper.getCurrentPath(),
			// Header, Footer's external file path
			footer_container_path:
				'/gws_template_responsive/assets_gws_template_responsive/default/include/_footer.html',

			// Header
			header_path: '/gws_template_responsive/assets_gws_template_responsive/include/me01_header.html',

			// Footer
			footer_main_path:
				'/gws_template_responsive/assets_gws_template_responsive/include/me01_footer.html',
			footer_atw_path:
				'/gws_template_responsive/assets_gws_template_responsive/include/_footer_atw.html',
			footer_sns_path:
				'/gws_template_responsive/assets_gws_template_responsive/include/_footer_sns.html',

			local_nav_path: '',
			helper: helper
		},
		MEL_SETTINGS
	);

	// LiveSite
	var $root = $('#ls-canvas');
	if ($root.length) {
		var $header = $('[data-js-gs18-header]').parents('.ls-row');
		var $footer = $('[data-js-gs18-footer]').parents('.ls-row');
		var $main = $('<main role="main" class="gs18-Main" />');

		$main.append($root.children());
		$root.append($main);
		$root.prepend($header);
		$root.append($footer);
	}

	// Set Modal
	if (MEL_CMS_SETTINGS.user_country === 'US') {
		$('body').setModal({
			contentPath: '/gws_template_responsive/assets_gws_template_responsive/include/_modal_us-transition/index.html'
		});
	} else if (
		window.MEL_SETTINGS.country === 'TH' &&
		window.MEL_SETTINGS.dialogContentPath
	) {
		$('body').setModalTH({
			contentPath: window.MEL_SETTINGS.dialogContentPath
		});
	} else {
		$('[data-js-gs18-modal]').setModal();
	}

	// Construction of Header
	$('[data-js-gs18-header]').includeHeader({
		path: window.MEL_SETTINGS.header_path,
		// is-current の自動付与を止めたい場合は enableSetCurrent: false を設定
		enableSetCurrent: false,
		enableFlyOut: false,
		noajax: $('[data-js-gs18-header]').data('js-gs18-header') === 'noajax',
		callback: function($header) {
			// Reading MarsFlag does not work unless it creates a Header.
			var $marsFlagScript = $('<script/>').attr({
				src: '//c.marsflag.com/mf/mfx/1.0/js/mfx-sbox.js',
				charset: 'UTF-8'
			});
			$('body').append($marsFlagScript);
			// NOTE: If additional processing is required after header display, pass function to callback
			// console.log("some callbacks", $header)
		}
	});

	// Local Navigation の構築
	$('[data-js-gs18-local-nav]').includeLocalNav({
		path: window.MEL_SETTINGS.local_nav_path,
		local_nav_json_path: window.MEL_SETTINGS.local_nav_json_path,
		callback: function($localNav) {
			// NOTE: localNav 表示後に追加の処理が必要な場合は callback に関数を渡す
			// console.log("some callbacks", $localNav)
		}
	});

	// Static Local Navigation の高さ調整
	$('[data-js-gs18-static-local-nav]').tidyStaticLocalNav();

	// Construction of Footer
	$('[data-js-gs18-footer]').includeFooter({
		path: window.MEL_SETTINGS.footer_container_path,
		mainPath: window.MEL_SETTINGS.footer_main_path,
		atwPath: window.MEL_SETTINGS.footer_atw_path,
		snsPath: window.MEL_SETTINGS.footer_sns_path,
		noajax: $('[data-js-gs18-footer]').data('js-gs18-footer') === 'noajax',
		callback: function($footer) {
			// NOTE: If additional processing is necessary after footer display, pass the function to callback
			// console.log("some callbacks", $footer)
			var includeParts = function($target, path, callback) {
				// eslint-disable-next-line no-redeclare
				var callback = callback || function() {};
				path &&
					$.ajax({
						url: path
					}).done(function(data) {
						$target.after(data);
						$target.remove();
						callback();
					});
			};

			// Include Main
			includeParts(
				$('[data-js-gs18-footer-main]'),
				window.MEL_SETTINGS.footer_main_path
			);

			// Include ATW
			includeParts(
				$('[data-js-gs18-footer-atw]'),
				window.MEL_SETTINGS.footer_atw_path
			);

			// Include SNS
			includeParts(
				$('[data-js-gs18-footer-sns]'),
				window.MEL_SETTINGS.footer_sns_path,
				function() {
					// Callbacks here

					//Footer WeChat
					$('[data-js-gs18-footer-wechat]').on('click', function(e) {
						e.preventDefault();
						$(this)
							.find('[data-js-gs18-footer-wechat-target]')
							.slideToggle();
						$(this).blur();
					});
				}
			);
		}
	});

	// Note: Locations Regions
	$('[data-js-gs18-location=locations]').includeRegions({
		type: 'locations',
		callback: function($createdRegions) {
			// NOTE: [data-js-gs18-location] がページに1つだけの前提
			$('[data-js-gs18-location]').append($createdRegions);
		}
	});

	// Note: AtW Regions
	$('[data-js-gs18-location=AtW]').includeRegions({
		type: 'AtW',
		callback: function($createdRegions) {
			// NOTE: [data-js-gs18-location] がページに1つだけの前提
			$('[data-js-gs18-location]').append($createdRegions);
		}
	});

	// Set Learn More Tile
	$('[data-js-gs18-learn-more-tile]').setLearnMoreTile();

	// Set Learn More News
	$('[data-js-gs18-learn-more-news]').setLearnMoreNews();

	// Set Related Links
	$('[data-js-gs18-related-slide]').setRelatedLinks();

	$('[data-js-gs18-youtube]').jsYouTube({
		youtube_settings: window.MEL_YOUTUBE_SETTINGS
	});

	// Set Custom Accorion UI
	var accordionSelectors = [
		{
			body: '[data-js-gs18-accordion]',
			trigger: '[data-js-gs18-accordion-trigger]',
			content: '[data-js-gs18-accordion-content]'
		},
		{
			body: '[data-js-accordion]',
			trigger: '[data-js-accordion-trigger]',
			content: '[data-js-accordion-content]'
		}
	];

	$(accordionSelectors).each(function(index, selectors) {
		$(selectors.body).setCustomAccordion({
			selectors: selectors
		});
	});

	// Set Local Smooth Scroll
	$('main').setLocalSmoothScroll();

	// DOMContentLoaded
	$(function() {
		'use strict';
		//RSS Feed 表示
		$('[data-js-gs18-feeds]').getFeeds();

		//ページTopスクロール
		$('[data-js-gs18-gotop]').on('click', function(e) {
			e.preventDefault();
			$(this).goTopScroll();
		});

		//Pulldown Link
		$('[data-js-gs18-pulldown-link]').pulldownLink();
		//MicroMacro Panel
		$('[data-js-gs18-micro-macro]').microMacro();

		//History Slider
		$('[data-js-history-slide]').slick({
			dots: true,
			arrows: false,
			infinite: false,
			customPaging: function(slick, i) {
				// dotsに年代を表示
				// data-history-dotsから値を取得
				var HistoryYear = slick.$slides.eq(i).data('history-dots');
				return '<span>' + HistoryYear + '</span>';
			}
		});
		//Responsive Table
		$('[data-js-gs18-responsive-table]').setResponsiveTable();

		//Facebook Page Plugin リサイズ
		$('[data-js-facebook]').jsFacebookResize();

		//キャプションの横幅をイメージの横幅に揃える
		$('[data-js-gs18-adjust-caption-width]').adjustCaptionWidth();

		// Set VI Changer - Top Page VI
		// NOTE: 不要になっているかもしれない。
		$('[data-js-gs18-top-slide]').setViChanger({
			selectors: {
				mainViewArea: '[data-js-gs18-top-slide-body]',
				mainWrapper: '[data-js-gs18-top-slide-main]',
				naviWrapper: '[data-js-gs18-top-slide-nav]',
				prevBtn: '[data-js-gs18-top-slide-prev]',
				nextBtn: '[data-js-gs18-top-slide-next]',
				pauseBtn: '[data-js-gs18-top-slide-pause]'
			},
			pauseActiveClassName: 'is-active',
			auto: 5000
		});

		// Set VI Changer - News Page VI
		$('[data-js-gs18-news-slide]').setViChanger({
			selectors: {
				mainViewArea: '[data-js-gs18-news-slide-body]',
				mainWrapper: '[data-js-gs18-news-slide-main]',
				naviWrapper: '[data-js-gs18-news-slide-nav]',
				prevBtn: '[data-js-gs18-news-slide-prev]',
				nextBtn: '[data-js-gs18-news-slide-next]',
				imgCol: '[data-js-gs18-news-slide-imgcol]'
			},
			auto: null,
			isSetImageHeight: true
		});

		// Set VI Changer - Heme Page HeroImage VI
		$('[data-js-gs18-hero-image-slide-start]');
		var $heroImageSlide = $('[data-js-gs18-hero-image-slide]');
		var heroImageStartIndex = $heroImageSlide.attr(
			'data-js-gs18-hero-image-slide-start'
		);
		heroImageStartIndex = parseInt(heroImageStartIndex);
		heroImageStartIndex = isNaN(heroImageStartIndex)
			? 0
			: heroImageStartIndex - 1;

		$heroImageSlide.setViChanger({
			selectors: {
				mainViewArea: '[data-js-gs18-hero-image-slide-body]',
				mainWrapper: '[data-js-gs18-hero-image-slide-main]',
				naviWrapper: '[data-js-gs18-hero-image-slide-nav]',
				pauseBtn: '[data-js-gs18-hero-image-slide-pause]'
			},
			naviActiveClassName: 'is-active',
			startIndex: heroImageStartIndex,
			auto: 5000
		});
	});
})(window.jQuery3 || jQuery);
