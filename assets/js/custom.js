    $(document).ready(function () {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");
    var close = document.getElementById("menu-close");
  
    toggle.addEventListener("click", function(e) {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      } else {
        menu.classList.add("open");
      }
    });
  
    close.addEventListener("click", function(e) {
      menu.classList.remove("open");
    });
  
    // Close menu after click on smaller screens
    $(window).on("resize", function() {
      if ($(window).width() < 846) {
        $(".main-menu a").on("click", function() {
          menu.classList.remove("open");
        });
      }
    });
  
    $(".owl-carousel").owlCarousel({
      items: 4,
      lazyLoad: true,
      loop: true,
      dots: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  
    $(".hover").mouseleave(function() {
      $(this).removeClass("hover");
    });
      $(".isotope-wrapper").each(function () {
        var $isotopeBox = $(".isotope-box", this);
        var $filterCheckboxes = $('input[name="isotope-filter"]', this);
    
        var filterItems = function () {
          var filterValue = $filterCheckboxes.filter(":checked").data("type") || "*";
          if (filterValue !== "*") {
            filterValue = '[data-type="' + filterValue + '"]';
          }
          $isotopeBox.isotope({ filter: filterValue });
        };
    
        $isotopeBox.isotope({
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
        });
    
        $filterCheckboxes.on("change", filterItems);
        filterItems();
      });
    });    