$(document).ready(function(){
    $('.carousel__inner').slick({
    prevArrow: $('.carousel__button--left'), // 「前へ」のカスタムボタン
    nextArrow: $('.carousel__button--right'),  // 「次へ」のカスタムボタン
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    dotsClass: "dot-customize",
    responsive: [
        {
            breakpoint: 768, // 1024px以下の場合
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false // 矢印ボタンを非表示
            }
        }
    ]
    }
    );

    //アコーディオンのスムーズ設定
    $('details').each(function() {
        const details = $(this);
        const content = details.find('.accodion__container-item__answer');

        // 初期状態でdetailsがopenの場合に対応
        if (details.attr('open')) {
            content.css('max-height', content.prop('scrollHeight') + 'px');
        }

        // summaryクリックイベント
        details.find('summary').on('click', function(e) {
          e.preventDefault(); // デフォルトの開閉動作を無効化
        
            const isOpen = details.attr('open') !== undefined;

          // 他のアコーディオンを閉じる場合（オプション）
            $('details[open]').not(details).each(function() {
                const otherContent = $(this).find('.accodion__container-item__answer');
                $(this).removeAttr('open');
                otherContent.animate({ maxHeight: 0 }, 300);
            });

            // 開閉アニメーション
            if (isOpen) {
                content.animate({ maxHeight: 0 }, 300, function() {
                details.removeAttr('open');
                });
            } else {
                details.attr('open', 'true');
                content.animate({ maxHeight: content.prop('scrollHeight') + 'px' }, 300);
        }
        });
    });
});