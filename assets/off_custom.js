document.addEventListener("DOMContentLoaded", function () {
  console.log("-fl4v10-");

  //customizzazione megamenu
  function updateMegaMenuTitles() {
    const elements = document.querySelectorAll("a.link--faded");
    elements.forEach((element) => {
      const text = element.textContent;
      if (text.includes("__big")) {
        const newText = text.replace("__big", "");
        element.textContent = newText;
        element.classList.add("heading--small");
      }
    });
  }
  updateMegaMenuTitles();

  function wrapAll(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);

    Array.from(elements).forEach((element) => {
      wrapper.appendChild(element);
    });
  }

  //___Marchi
  const menuMarchiCol1Elements = document.querySelectorAll(
    "#desktop-menu-1 .mega-menu__column:nth-child(n+6):nth-child(-n+12)"
  );
  const menuMarchiCol2Elements = document.querySelectorAll(
    "#desktop-menu-1 .mega-menu__column:nth-child(n+13)"
  );

  const wrapperMarchi1 = document.createElement("div");
  wrapperMarchi1.className = "menu_ctrl marchi1";
  wrapAll(menuMarchiCol1Elements, wrapperMarchi1);

  const wrapperMarchi2 = document.createElement("div");
  wrapperMarchi2.className = "menu_ctrl marchi2";
  wrapAll(menuMarchiCol2Elements, wrapperMarchi2);

  //___Kit
  const menuKitElements = document.querySelectorAll(
    "#desktop-menu-2 .mega-menu__column:nth-child(n+2):nth-child(-n+8)"
  );

  const wrapperElements1 = document.createElement("div");
  wrapperElements1.className = "menu_ctrl kit";
  wrapAll(menuKitElements, wrapperElements1);

  //___Attrezzature
  const menuAttrezzatureCol1Elements = document.querySelectorAll(
    "#desktop-menu-7 .mega-menu__column:nth-child(n+5):nth-child(-n+10)"
  );
  const menuAttrezzatureCol2Elements = document.querySelectorAll(
    "#desktop-menu-7 .mega-menu__column:nth-child(n+11)"
  );

  const wrapperAttrezzature1 = document.createElement("div");
  wrapperAttrezzature1.className = "menu_ctrl attrezzature1";
  wrapAll(menuAttrezzatureCol1Elements, wrapperAttrezzature1);

  const wrapperAttrezzature2 = document.createElement("div");
  wrapperAttrezzature2.className = "menu_ctrl attrezzature2";
  wrapAll(menuAttrezzatureCol2Elements, wrapperAttrezzature2);

  const menuAttrezzatureFirstChild = document.querySelector(
    "#desktop-menu-7 .mega-menu__columns-wrapper > .mega-menu__column:first-child"
  );
  const menuAttrezzatureSecondChild = document.querySelector(
    "#desktop-menu-7 .mega-menu__columns-wrapper > .mega-menu__column:nth-child(2) a"
  );
  const margine =
    parseInt(window.getComputedStyle(menuAttrezzatureFirstChild).height) + 23;
  menuAttrezzatureSecondChild.style.marginTop = margine + "px";

  //___Strumenti
  const menuStrumentiCol1Elements = document.querySelectorAll(
    "#desktop-menu-6 .mega-menu__column:nth-child(n+3):nth-child(-n+7)"
  );
  const menuStrumentiCol2Elements = document.querySelectorAll(
    "#desktop-menu-6 .mega-menu__column:nth-child(n+8)"
  );

  const wrapperStrumenti1 = document.createElement("div");
  wrapperStrumenti1.className = "menu_ctrl strumenti1";
  wrapAll(menuStrumentiCol1Elements, wrapperStrumenti1);

  const wrapperStrumenti2 = document.createElement("div");
  wrapperStrumenti2.className = "menu_ctrl strumenti1";
  wrapAll(menuStrumentiCol2Elements, wrapperStrumenti2);

  //custom menu bar
  const hookMenu1 = document.querySelector(
    'li.header__linklist-item[data-item-title="Kit"]'
  );
  const hookMenu2 = document.querySelector(
    'li.header__linklist-item[data-item-title="Guide"]'
  );

  const newDivAfter = document.createElement("div");
  newDivAfter.style.color = "#4bdd0e";
  newDivAfter.innerHTML = "///";

  hookMenu1.parentNode.insertBefore(newDivAfter, hookMenu1.nextSibling);

  const newDivBefore = document.createElement("div");
  newDivBefore.style.color = "#4bdd0e";
  newDivBefore.innerHTML = "///";

  hookMenu2.parentNode.insertBefore(newDivBefore, hookMenu2);

  //customizzazione megamenu___END

  //pagine prodotto NO VENDITA ___

  if (document.querySelector("#product h1.product-meta__title")) {
    const getProductTitle = document.querySelector(
      "#product h1.product-meta__title"
    ).textContent;

    if (getProductTitle === "Cartec Ceramic Guard Coating SiCarbon+") {
      document.body.classList.add("centro_autorizzato");

      const addToCartButton = document.querySelector(
        ".centro_autorizzato button#AddToCart .loader-button__text"
      );
      if (addToCartButton) {
        addToCartButton.textContent = "Trova il centro autorizzato più vicino";

        addToCartButton.addEventListener("click", function () {
          window.location.href =
            "https://new-focal-test.myshopify.com/blogs/news";
          console.log("click");
        });
      }
    }
  }

  //fade titolo collections
  const titoloCollections = document.querySelector(
    ".boost-pfs-filter-collection-header-wrapper .boost-pfs-container-default-box"
  );
  setTimeout(function () {
    if (titoloCollections) {
      titoloCollections.classList.add("visibile");
    }
  }, 2000);

  //customizzazione up-bar
  const upBar = document.querySelector(
    ".announcement-bar__message.text--xsmall p"
  );
  //upBar.html('<img style="margin:0 5px; height: 18px;" src="https://cdn.shopify.com/s/files/1/0660/5252/2209/files/lettering_carismatix_c31cb1f6-7169-4adb-8c98-6857b5147578_400x.png?v=1663582740" alt="Carismatix"> È IL NUOVO MARCHIO DI <img style="height: 36px; margin: -8px 5px -8px 5px;" src="https://cdn.shopify.com/s/files/1/0660/5252/2209/files/cartec_quadrato.jpg?v=1665413033" alt="Cartec"> ITALIA → <button class="link" data-action="open-content">Cosa cambia?</button>');

  //rimuovo barra da prodotti no vendita
  var productTitle = document.querySelector("h1.product-meta__title");
  if (productTitle) {
    productTitle = productTitle.textContent;
  }
  const box_grigio = document.querySelector(".box_decor_gray");
  const barra_aggiungi = document.querySelector(".product-sticky-form");

  //nomi prodotti NoVendita
  const CeramicGuard = "Cartec Ceramic Guard Coating SiCarbon+";
  const QuarzProfessional = "CARPRO C.QUARTZ Professional";
  const QuarzFinest = "CARPRO C.QUARTZ Finest Reserve Kit";
  const DQuartz = "CARPRO D.Quartz";
  const CarproImmortal = "CARPRO Immortal™";
  const Sti4000 = "STI Revive 4000";
  const Sti9000 = "STI Revive 9000";

  //miniatura prodotto
  setTimeout(function () {
    // Funzione helper per rimuovere l'elemento successivo
    function removeNextIfTitleContains(query, text) {
      document.querySelectorAll(query).forEach(function (item) {
        if (item.textContent.includes(text)) {
          if (item.nextElementSibling) {
            item.nextElementSibling.remove();
          }
        }
      });
    }

    // Applica la funzione ai vari titoli
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "CeramicGuard"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "QuarzProfessional"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "QuarzFinest"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "DQuartz"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "CarproImmortal"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "Sti4000"
    );
    removeNextIfTitleContains(
      "product-item.product-item .product-item-meta__title",
      "Sti9000"
    );
  }, 1000);

  if (
    productTitle == CeramicGuard ||
    productTitle == QuarzProfessional ||
    productTitle == QuarzFinest ||
    productTitle == DQuartz
  ) {
    box_grigio.remove();
    barra_aggiungi.remove();
  }
  //prodotti no vendita FINE ___

  // Abilita page header
  const pageHeader = document.querySelector(
    ".boost-pfs-enable-instant-search .page-header .page-header__text-wrapper"
  );

  setTimeout(function () {
    const hasDistributore = Array.from(
      document.querySelectorAll("span.breadcrumb__link")
    ).some((link) => link.innerText.includes("Diventa Distributore Esclusivo"));

    const hasTeam = Array.from(
      document.querySelectorAll("span.breadcrumb__link")
    ).some((link) => link.innerText.includes("Entra nel Team"));

    const hasProClub = Array.from(
      document.querySelectorAll("span.breadcrumb__link")
    ).some((link) => link.innerText.includes("Carismatix Pro Club"));

    if (hasDistributore || hasTeam || hasProClub) {
      if (pageHeader) {
        pageHeader.classList.add("visibile");
      }
    }
  }, 1000);

  // Separo righe - multi-line-text - SCHEDA TECNICA
  setTimeout(function () {
    const getTab = document.querySelector(
      "#block-template--16611716104421__product-content-58e82b46-6d21-489f-95ed-5cffdacd23a4-content p"
    );
    if (getTab) {
      const newTextTab = getTab.textContent.replace(/, /g, "\n");
      getTab.innerHTML = newTextTab;
    }
  }, 1000);

  //clicco la sezione
  setTimeout(function () {
    console.log("add");
    // Seleziona gli elementi e aggiunge la classe
    const elements = document.querySelectorAll(".eapps-google-maps-small");
    elements.forEach((element) => {
      element.classList.add("eapps-google-maps-bar-opened");
    });
  }, 5000);

  //mini cart visibility
  document
    .querySelectorAll('a[aria-controls="mini-cart"]')
    .forEach(function (element) {
      element.addEventListener("click", function () {
        const checkoutButton = document.querySelector(
          "#mini-cart .checkout-button"
        );
        if (checkoutButton) {
          checkoutButton.addEventListener("mouseenter", function () {
            document.querySelector("#rawa-button").classList.add("none");
          });

          checkoutButton.addEventListener("mouseleave", function () {
            document.querySelector("#rawa-button").classList.remove("none");
          });
        }
      });
    });

  //mini cart visibility
  document
    .querySelectorAll('a[aria-controls="mini-cart"]')
    .forEach(function (element) {
      element.addEventListener("click", function () {
        const checkoutButton = document.querySelector(
          "#mini-cart .checkout-button"
        );
        if (checkoutButton) {
          checkoutButton.addEventListener("mouseenter", function () {
            document.querySelector("#rawa-button").classList.add("none");
          });

          checkoutButton.addEventListener("mouseleave", function () {
            document.querySelector("#rawa-button").classList.remove("none");
          });
        }
      });
    });

  //cart bundle customization
  const bundleElements = document.querySelectorAll(
    "#cart .th_bundle_discount_text"
  );
  bundleElements.forEach(function (element) {
    if (element.textContent.indexOf("Bundle") !== -1) {
      let ancestor = element;
      for (let i = 0; i < 7; i++) {
        ancestor = ancestor.parentNode;
      }
      const quantitySelector = ancestor.querySelector(".quantity-selector");
      if (quantitySelector) {
        quantitySelector.remove();
      }
    }
  });

  //autoscroll mobile rivenditori
  window.addEventListener("load", function () {
    if (
      window.location.href === "https://carismatix.it/pages/rivenditori" &&
      window.innerWidth < 767
    ) {
      setTimeout(function () {
        window.scroll({
          top: window.scrollY + 160,
          left: 0,
          behavior: "smooth",
        });
      }, 2000);
    }
  });

  //class per landingp prodotti Marco
  const heroBoxLanding = document.querySelector("#cartec_refinish_hero_box");
  if (heroBoxLanding) {
    document.body.classList.add("landing_product_page");
  }

  //bug shinemate
  const shineMateVendor = document.querySelector(".product-meta__vendor a"); //Shinemate
  const optionShinemate = document.querySelectorAll(
    ".product .product-form .product-form__variants .select-wrapper button"
  );
  const customerBodyAccount = document.querySelector("body#customers-account");

  setTimeout(function () {
    if (customerBodyAccount) {
      customerBodyAccount.classList.remove("boost-pfs-enable-instant-search");
      console.log("remove");
    }
  }, 2000);

  //risolvo il problema delle varianti scontate
  var etichetta = document.querySelector(
    ".product-meta__price-list-container .product-meta__label-list"
  );
  var testoSelect = "VALORE_IMPROBABILE";

  // Aggiunge eventi di click e keyup agli elementi specificati
  document
    .querySelectorAll("combo-box .combo-box__option-item")
    .forEach(function (item) {
      item.addEventListener("click", handleChange);
      item.addEventListener("keyup", handleChange);
    });

  function handleChange() {
    var testoAttuale = document.querySelector(
      "#product-custom .product-form__option-selector .select__selected-value"
    ).textContent;

    if (testoAttuale !== testoSelect) {
      //console.log("Il testo del div è cambiato!");

      if (etichetta) {
        setTimeout(function () {
          //console.log("Tento di appendere la stringa dell'etichetta.");
          document
            .querySelector(
              ".product-meta__price-list-container .price.price--compare"
            )
            .appendChild(etichetta.cloneNode(true));
        }, 10);
      } else {
        //console.log("La stringa dell'etichetta non esiste!");
      }

      testoSelect = testoAttuale;
    }
  }

  //tolgo righe extra pagina account utente > programma fedeltà
  setTimeout(() => {
    const puntiNegativi = document.querySelectorAll(".bon-text-danger");
    if (puntiNegativi) {
      puntiNegativi.forEach(function (elemento) {
        elemento.parentNode.remove();
      });
    }
  }, 2000);

  /*etichetta in differenza euro*/
  function cleanAndParsePrice(priceString) {
    var cleanedPrice = priceString.replace("€", "").replace(",", ".");
    var parsedPrice = parseFloat(cleanedPrice);
    return parsedPrice;
  }
  function formatPrice(priceNumero) {
    var formattedPrice = priceNumero.toFixed(2).replace(".", ",") + "€";
    return formattedPrice;
  }
  function differenza_prezzo_on_sales() {
    var itemslistCollection = document.querySelectorAll(
      ".boost-pfs-filter-product-item"
    );

    if (itemslistCollection) {
      itemslistCollection.forEach(function (item) {
        var $this = item;

        if ($this.querySelector(".etichetta_sales_in_euro")) {
          var salesPrice = cleanAndParsePrice(
            $this.querySelector("span.boost-pfs-filter-product-item-sale-price")
              .textContent
          );
          var comparedPrice = cleanAndParsePrice(
            $this.querySelector("s").textContent
          );

          var diffPrice = comparedPrice - salesPrice;
          var diffPriceFormattato = formatPrice(diffPrice);

          var etichettaSale = $this.querySelector(".sale");

          if (etichettaSale) {
            etichettaSale.textContent = "RISPARMIA " + diffPriceFormattato;
          }
        }
      });
    }
  }
  //etichetta in differenza euro - al caricamento
  setTimeout(function () {
    differenza_prezzo_on_sales();
  }, 1000);
  // Etichetta in differenza euro - al cambio di content box filtri
  var contenitore_filtri_collection = document.querySelector(
    ".boost-pfs-filter-products"
  );
  if (contenitore_filtri_collection) {
    var observer = new MutationObserver(function (mutations) {
      setTimeout(function () {
        differenza_prezzo_on_sales();
      }, 1000);
    });
    var config = { childList: true, subtree: true };
    observer.observe(contenitore_filtri_collection, config);
  }

  //bundle - volume | acquisto multiplo, utente deve poter scegliere 1 variante per tutto il pacchetto

  const selects = document.querySelectorAll(
    "select.th_pb_wf.th_pb_qty_grid_select_cls.wc_single_option_selector"
  );

  // Verifica che gli elementi siano stati selezionati correttamente
  console.log("Select elements found:", selects.length);

  // Aggiungi un event listener al primo elemento <select>
  if (selects.length > 0) {
    selects[0].addEventListener("change", function () {
      console.log("Change event detected");
      const selectedValue = this.value;
      selects.forEach((select, index) => {
        if (index !== 0) {
          select.value = selectedValue;
        }
      });
    });

    selects[0].addEventListener("input", function () {
      console.log("Input event detected");
      const selectedValue = this.value;
      selects.forEach((select, index) => {
        if (index !== 0) {
          select.value = selectedValue;
        }
      });
    });
  } else {
    console.log("No select elements found");
  }

  // WISHLIST

  setTimeout(function () {
    var wishlistHeader = document.querySelector(".swym-wishlist-detail-header");
    //console.log(wishlistHeader);
    if (wishlistHeader) {
      // Applica lo stile CSS
      wishlistHeader.style.justifyContent = "space-between";
      wishlistHeader.style.flexDirection = "row-reverse";

      // Crea i nuovi elementi
      var newHtml =
        '<div><a href="https://carismatix.it/account" class="fade-in" style="display:inline-block;margin-right:20px;">Torna al tuo Account</a><a href="https://carismatix.it/" class="fade-in">Torna alla Home</a></div>';

      // Inserisci i nuovi elementi come primi elementi
      wishlistHeader.innerHTML = newHtml + wishlistHeader.innerHTML;
    }
  }, 2000);

  // Se bundle KIT allora whishlist in fixed
  setTimeout(function () {
    var titoloBundleElement = document.querySelector(
      ".thpb_combo_wflex .thpb_combo_title .thpb_combo_wflex"
    );
    var targetSection = document.querySelector(".thpb_combo_cta_btn_section");

    if (
      titoloBundleElement &&
      titoloBundleElement.textContent.includes("Questo KIT contiene")
    ) {
      var buttonWishlist = document.querySelector(
        ".swym-button-bar.swym-wishlist-button-bar.swym-inject"
      );
      if (buttonWishlist) {
        buttonWishlist.remove();
        targetSection.appendChild(buttonWishlist);
        buttonWishlist.classList.add("attivo_bundle");
      } else {
        console.log("no_wbtn");
      }
    }
  }, 2500);

  // aggiornamento numerino carrello quando metto in carrello prodotto da wishlist
  setTimeout(function () {
    const notificationBanner = document.querySelector(
      ".swym-wishlist-notifications-container"
    );
    if (notificationBanner) {
      //console.log('ifpassed');
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          let notificationBannerNoProd = document.querySelector(
            ".swym-wishlist-notifications-container .swym-details"
          );

          if (
            mutation.addedNodes.length > 0 &&
            (!notificationBannerNoProd ||
              !notificationBannerNoProd.textContent.includes(
                "Non puoi aggiungere"
              ))
          ) {
            //console.log('mutationpassed');
            let numerinoCarrello = document.querySelector(
              "cart-count.header__cart-count"
            );
            let newNumber = parseInt(numerinoCarrello.textContent) + 1;
            numerinoCarrello.textContent = newNumber;
          }
        });
        
      });
      observer.observe(notificationBanner, { childList: true });
    }
  }, 2500);

});
