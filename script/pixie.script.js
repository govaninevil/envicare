$(document).ready(function() {


    $(document).on('click','.menu-btn',function(event){
        $('body').toggleClass('menu-open');
    });

	$('.collage.body h3').each(function() {
        var tis = $(this), state = false, answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active',state);
        });
    });

    
    if ($(".common-tabs-box").length > 0) {
        $('.common-tabs-box').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
        });
    }
    
});