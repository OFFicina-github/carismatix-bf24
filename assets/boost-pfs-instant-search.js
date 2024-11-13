/** VERSION: 1.0.0 Please do not delete this line. Thank you! **/
// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		//suggestionMode: 'test',
		//suggestionPosition: 'left'
	}
};

(function() {
	BoostPFS.inject(this);

  // Clear button for the Form Search
  HTMLDocument.prototype.ready = function () {
    return new Promise(function(resolve, reject) {
      if (document.readyState === 'complete') {
        resolve(document);
      } else {
        document.addEventListener('DOMContentLoaded', function() {
          resolve(document);
        });
      }
    });
  }
  
  document.ready().then(function(){
    var inputSearchFormSelector = jQ('.boost-pfs-search-input');
    var clearSearchFormSelector = jQ('.boost-pfs-search-form-btn-clear');

    if(!!inputSearchFormSelector.val()) {
      clearSearchFormSelector.show();
    }
    
    inputSearchFormSelector.on('change keydown keyup', function(){
      if(!!jQ(this).val()) {
        clearSearchFormSelector.show();
      } else {
        clearSearchFormSelector.hide();
      }
    })

    clearSearchFormSelector.on("click", function(){
      inputSearchFormSelector.val("");
      jQ(this).hide();
      jQ('body').addClass("abc");
    });
  })// End Clear button for the Form Search
  

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function() {
		var suggestionElement = this.$uiMenuElement;
		var searchElement = this.$element;
		var searchBoxId = this.id;
	};

  // Bind Event for input search Mobile
  var bindEventsMobile = InstantSearchMobile.prototype.bindEvents;
  InstantSearchMobile.prototype.bindEvents = function() {
    bindEventsMobile.call(this);

    var self = this;
    var searchButtonMobile = '.site-nav--mobile .search-button, .js-search-destop';
    var searchInputMobile = '.search-input-group input[type="search"], .wg-search-form .search-input';
    var searchCloseButtonMobile = '.drawer__close > button, .drawer_back a';
    jQ(searchButtonMobile).off('click').click(function(e) {
      e.preventDefault();
      //e.stopPropagation();
      jQ(searchInputMobile).focus();
      self.openSuggestionMobile();
      jQ(searchCloseButtonMobile).trigger('click');

    });
  }
  
  // Bind Event for input search style 3
  var bindEvents = InstantSearchStyle3.prototype.bindEvents;
  InstantSearchStyle3.prototype.bindEvents = function() {
    bindEvents.call(this);

    var self = this;
    var searchButtonDesktop = '.site-header__links .search-button';
    var searchInputDesktop = '#SearchContainer #search-input';
    var searchCloseButtonDesktop = '.drawer__close > button';
    jQ(searchButtonDesktop).off('click').click(function(e) {
      e.preventDefault();
      //e.stopPropagation();
      jQ(searchInputDesktop).focus();
      self.openSuggestionStyle3();
      jQ(searchCloseButtonDesktop).trigger('click');

    });
  }

  // Fix search for the Flow theme
  jQ('.site-header__links .search-button').on('click', function() {
    setTimeout(function() {
      boostPFS.initSearchBox();
      if(Utils.isCollectionPage()) jQ('.search-input-group > .boost-pfs-search-box').val('');
    }, 500);
  });

  InstantSearchMobile.prototype.beforeRender = function() {
    var buttonClass = 'a.header__icon-wrapper.header__icon-wrapper.tap-area.hidden-lap.hidden-desk';
    
    var self = this;
    var button = jQ(buttonClass);
  
    button.on('click',function(e) {
      console.log('click');
      e.stopPropagation();
      e.preventDefault();
      self.openSuggestionMobile()
    });
  }

  var productTemplate = InstantSearchResultItemProduct.prototype.getTemplate;
  InstantSearchResultItemProduct.prototype.getTemplate = function (tempType) {
      if (tempType) return productTemplate.call(this, tempType);
  
      return '<li class="{{class.searchSuggestionItem}} {{class.searchSuggestionItem}}-product {{class.searchUiAutocompleteItem}}" aria-label="{{escapedBlockType}}: {{escapedTitle}}" data-id="{{id}}">' +
          '<a href="{{url}}" {{newTabAttribute}}>' +
          '{{itemProductImage}}' +
          '<div class="{{class.searchSuggestion}}-right">' +
          '<p class="{{class.searchSuggestion}}-product-title">{{title}}</p>' +
          '{{itemSubtitle}}' +
          '{{itemProductVendor}}' +
          '{{itemProductPrice}}' +
          '</div>' +
          '</a>' +
          '</li>';
  }
  
  var productCompile = InstantSearchResultItemProduct.prototype.compileTemplate;
  
  InstantSearchResultItemProduct.prototype.compileTemplate = function () {
      if (!this.isShow) return '';
  
      var itemHtml = productCompile.call(this);
      itemHtml = itemHtml.replace(/{{itemSubtitle}}/g, buildSubtitle(this.data));
  
      return itemHtml;
  }
  
  function buildSubtitle(data) {
      var html = '';
      var subtitle = Utils.getProductMetafield(data, 'custom', 'sottotitolo');
      if (subtitle !== null) {
          html += '<p class="boost-pfs-isw-subtitle"><small>' + subtitle + '</small></p>';
      }
      return html;
  }
})();

jQ('.header__search-bar').removeClass('predictive-search');