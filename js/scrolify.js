$.scrollify({
    section : ".container",//1ページスクロールさせたいエリアクラス名
    scrollbars:"true",//スクロールバー表示・非表示設定
    interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
      scrollSpeed: 300, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".container").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
  
        $("header").append(pagination);//はじめのエリアにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
      }
  
    });