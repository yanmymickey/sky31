/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function() {

    $("#index_zzw_main").mouseenter(function() {
        $("#zzw_prev_btn").trigger("mouseenter");
        $("#zzw_next_btn").trigger("mouseenter");
        $("#timedot_c").show();
    });
    $("#index_zzw_main").mouseleave(function() {
        $("#zzw_prev_btn").trigger("mouseleave");
        $("#zzw_next_btn").trigger("mouseleave");
        $("#timedot_c").hide();
    });

    $("#maskleft").mouseenter(function() {
        $("#zzw_prev_btn").trigger("mouseenter");
        $("#zzw_next_btn").trigger("mouseenter");
        $("#timedot_c").show();
    });
    $("#maskleft").mouseleave(function() {
        $("#zzw_prev_btn").trigger("mouseleave");
        $("#zzw_next_btn").trigger("mouseleave");
        $("#timedot_c").hide();
    });

    $("#maskright").mouseenter(function() {
        $("#zzw_prev_btn").trigger("mouseenter");
        $("#zzw_next_btn").trigger("mouseenter");
        $("#timedot_c").show();
    });
    $("#maskright").mouseleave(function() {
        $("#zzw_prev_btn").trigger("mouseleave");
        $("#zzw_next_btn").trigger("mouseleave");
        $("#timedot_c").hide();
    });
    $("#index_timelinebox").mouseleave(function() {
        $("#zzw_prev_btn").trigger("mouseleave");
        $("#zzw_next_btn").trigger("mouseleave");
        $("#timedot_c").hide();
    });

    bindtimex();
    $("#index_zzw .prev_btn").click(function() {

        $(".zzw_item_3 h3").hide();

        $("#index_zzw_main").animate({
            left: '-990px'
        },
        "600",
        function() {

            $("#index_zzw_main .zzw_item").last().prependTo($("#index_zzw_main"));

            $.each($("#index_zzw_main .zzw_item"),
            function() {
                var _this = $(this);
                var po = parseInt($(this).attr("po"));
                if (po == 5) {
                    po = 0
                }

                $(this).removeClass().addClass("zzw_item").addClass("zzw_item_" + String(po + 1)).attr("po", String(po + 1));

                $("#zzw_prev_btn").trigger("mouseover");

            });
            var i = $("#index_timelinebox span.timex_current");
            if (i.prev().length > 0) {
                i.removeClass("timex_current").prev().addClass("timex_current");
            } else {
                i.removeClass("timex_current");
                $("#index_timelinebox span.timex").last().addClass("timex_current");
            }

            bindtimex();
            $("#index_zzw_main").mouseenter();
            $(".zzw_item h3").hide();
            $(".zzw_item_3 h3").fadeIn();
            $("#index_zzw_main").css("left", "-1980px");

        });

    });

    $("#index_zzw .next_btn").click(function() {

        $(".zzw_item_3 h3").hide();

        $("#index_zzw_main").animate({
            left: '-2970px'
        },
        "600",
        function() {

            $("#index_zzw_main .zzw_item").first().appendTo($("#index_zzw_main"));

            $.each($("#index_zzw_main .zzw_item"),
            function() {
                var _this = $(this);
                var po = parseInt($(this).attr("po"));
                if (po == 1) {
                    po = 6
                }

                $(this).removeClass().addClass("zzw_item").addClass("zzw_item_" + String(po - 1)).attr("po", String(po - 1));
                $("#zzw_next_btn").trigger("mouseover");

            });
            var i = $("#index_timelinebox span.timex_current");
            if (i.next().length > 0) {
                i.removeClass("timex_current").next().addClass("timex_current");
            } else {
                i.removeClass("timex_current");
                $("#index_timelinebox span.timex").first().addClass("timex_current");
            }

            bindtimex();
            $("#index_zzw_main").mouseenter();
            $(".zzw_item h3").hide();
            $(".zzw_item_3 h3").fadeIn();
            $("#index_zzw_main").css("left", "-1980px");

        });

    });


    $("#zzw_prev_btn").hover(function() {

        var now = parseInt($(".zzw_item_3").attr("c"));

        if (now == 1) {
            now = 6
        }

        $(this).css("background-position", "0px " + (6 - (now - 1) * 74) + "px");

    },
    function() {

        $(this).css("background-position", "0px 6px");
    });

    $("#zzw_next_btn").hover(function() {

        var now = parseInt($(".zzw_item_3").attr("c"));

        if (now == 5) {
            now = 0
        }

        $(this).css("background-position", "-174px " + (6 - (now + 1) * 74) + "px");

    },
    function() {

        $(this).css("background-position", "-174px 6px");
    });

});
function bindtimex() {
    $("#index_timelinebox span.timex").unbind();
    $("#index_timelinebox span.timex_current").prev().bind("mouseenter",
    function() {

        $("#zzw_prev_btn").click();
    });
    $("#index_timelinebox span.timex_current").next().bind("mouseenter",
    function() {

        $("#zzw_next_btn").click();
    });
}
console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");