$(function() {
    var startTime = $.now();

    var charCounts = {
        'No Added Value': 0,
        'Improved': 100,
        'Enhanced': 150,
        'Superior': 200,
        'Conserving': 250,
        'Restorative': 300,
        'Exclude': 70,
    };
    //current
    $(".submit").click(function(){
        if(checkCharacterCount() ){
            $("#id_total_time").val( Math.floor(($.now() - startTime) / 1000 ));
            $("form").submit();
        } else {
            return false;
        }
    });

    function checkCharacterCount() {
        var errorCount = 0;
        $.each($("textarea"), function(index, value){
            var requiredCount = parseInt($(value).siblings('.required-count').text());
            if ( $(value).val().length < requiredCount && requiredCount !== 0 ){
                errorCount++;
                $(value).addClass('error');
                console.log(errorCount);
            } else {
                $(value).removeClass('error');
                console.log("no error")
            }
        });
        return errorCount === 0;
    };

    //Default setting required count to 250
    if (parseInt($(".data").html()) === 1){
        $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
    };

    //character count for textarea

    $("textarea").keyup(function(){
        var text_and_span = $(this).siblings();
        var current_span = text_and_span.siblings('.current-count');
        var textCount = current_span.text( $(this).val().length);
        return textCount
    });

    $("select").change(function(){
        var row = $(this).parent().siblings(".row");
        var text = $(this).children(':selected').text();
        if (text === "Include") {
            text = $(this).parent().siblings("h4").find("select").children(':selected').text()
        }

        if (text === "Exclude") {
            $(this).parents().siblings("h4").last().children().hide();
        } else {
            $(this).parents().siblings("h4").last().children().show();
        }
        row.find(".required-count").text(charCounts[text]);
    });

    function getLastValue(dropdown) {
        // takes in the selector for the dropdown
        return dropdown.children().last().val();
    };

    function writePossiblePoints(selector, points) {
        // takes in the selector for the place to write
        selector.text(points);
    };

    function possiblePoints() {
        var points = getLastValue( $("#id_QL1_2_loa"));
        writePossiblePoints( $("#ql12-possible-points"), points);

        var points = getLastValue( $("#id_QL2_3_loa"));
        writePossiblePoints( $("#ql23-possible-points"), points);

        var points = getLastValue( $("#id_QL2_5_loa"));
        writePossiblePoints( $("#ql25-possible-points"), points);

        var points = getLastValue( $("#id_QL3_2_loa"));
        writePossiblePoints( $("#ql32-possible-points"), points);

        var points = getLastValue( $("#id_QL3_3_loa"));
        writePossiblePoints( $("#ql33-possible-points"), points);

        var points = getLastValue( $("#id_NW1_2_loa"));
        writePossiblePoints( $("#nw12-possible-points"), points);

        var points = getLastValue( $("#id_NW2_3_loa"));
        writePossiblePoints( $("#nw23-possible-points"), points);

        var points = getLastValue( $("#id_NW3_4_loa"));
        writePossiblePoints( $("#nw34-possible-points"), points);

        var points = getLastValue( $("#id_CR1_1_loa"));
        writePossiblePoints( $("#cr11-possible-points"), points);

        var points = getLastValue( $("#id_CR2_2_loa"));
        writePossiblePoints( $("#cr22-possible-points"), points);

    };

    function selectedPoints(){
        // dropdown
        // h4 id  ----------------------- dropdown + :selected
        if (parseInt($(".data").html()) === 1) {
            $("#id_QL1_2_loa").val('16').ready(function() {
                $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
            });
        };
        $("#id_QL1_2_loa").change(function() {
            $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
        });
         if (parseInt($(".data").html()) === 1) {
            $("#id_QL2_3_loa").val('11').ready(function() {
                $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
            });
        };
        $("#id_QL2_3_loa").change(function() {
            $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
        });
         if (parseInt($(".data").html()) === 1) {
            $("#id_QL2_5_loa").val('15').ready(function() {
                $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
            });
        };
        $("#id_QL2_5_loa").change(function() {
            $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
        });

        if (parseInt($(".data").html()) === 1) {
            $("#id_QL3_2_loa").val('14').ready(function() {
                $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
            });
        };
        $("#id_QL3_2_loa").change(function() {
            $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1) {
            $("#id_QL3_3_loa").val('13').ready(function() {
                $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
            });
        };
        $("#id_QL3_3_loa").change(function() {
            $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1){
            $("#id_NW1_2_loa").val('18').ready(function() {
                $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
            });
        };
        $("#id_NW1_2_loa").change(function() {
            $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1){
            $("#id_NW2_3_loa").val('18').ready(function() {
                $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
            });
        };
        $("#id_NW2_3_loa").change(function() {
            $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1){
            $("#id_NW3_4_loa").val('19').ready(function() {
                $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
            });
        };
        $("#id_NW3_4_loa").change(function() {
            $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1){
            $("#id_CR1_1_loa").val('25').ready(function() {
                $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
            });
        };
        $("#id_CR1_1_loa").change(function() {
            $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
        });
        if (parseInt($(".data").html()) === 1){
            $("#id_CR2_2_loa").val('20').ready(function() {
                $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
            });
        };
        $("#id_CR2_2_loa").change(function() {
            $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
        });

    };


    function included(){
        $("#id_QL1_2_inc").change(function(){
           if ($("#id_QL1_2_inc :selected").val() == 1) {
               $("#id_QL1_2_loa").val(0);
               writePossiblePoints( $("#ql12-selected-points"), 0 );
               writePossiblePoints( $("#ql12-possible-points"), 0 );
           }
           else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#ql12-possible-points"), getLastValue($("#id_QL1_2_loa")));
                   $("#id_QL1_2_loa").val('16').ready(function () {
                       $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql12-possible-points"), getLastValue($("#id_QL1_2_loa")) );
                   $("#ql12-selected-points").text($("#id_QL1_2_loa :selected").val());
               };
           };
        });
         $("#id_QL2_3_inc").change(function(){
           if ($("#id_QL2_3_inc :selected").val() == 1) {
               $("#id_QL2_3_loa").val(0);
               writePossiblePoints( $("#ql23-selected-points"), 0 );
               writePossiblePoints( $("#ql23-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#ql23-possible-points"), getLastValue($("#id_QL2_3_loa")));
                   $("#id_QL2_3_loa").val('11').ready(function () {
                       $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql23-possible-points"), getLastValue($("#id_QL2_3_loa")) );
                   $("#ql23-selected-points").text($("#id_QL2_3_loa :selected").val());
               };
           };
        });
        $("#id_QL2_5_inc").change(function(){
           if ($("#id_QL2_5_inc :selected").val() == 1) {
               $("#id_QL2_5_loa").val(0);
               writePossiblePoints( $("#ql25-selected-points"), 0 );
               writePossiblePoints( $("#ql25-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#ql25-possible-points"), getLastValue($("#id_QL2_5_loa")));
                   $("#id_QL2_5_loa").val('15').ready(function () {
                       $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql25-possible-points"), getLastValue($("#id_QL2_5_loa")) );
                   $("#ql25-selected-points").text($("#id_QL2_5_loa :selected").val());
               };
           };
        });
         $("#id_QL3_2_inc").change(function(){
           if ($("#id_QL3_2_inc :selected").val() == 1) {
               $("#id_QL3_2_loa").val(0);
               writePossiblePoints( $("#ql32-selected-points"), 0 );
               writePossiblePoints( $("#ql32-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#ql32-possible-points"), getLastValue($("#id_QL3_2_loa")));
                   $("#id_QL3_2_loa").val('14').ready(function () {
                       $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql32-possible-points"), getLastValue($("#id_QL3_2_loa")) );
                   $("#ql32-selected-points").text($("#id_QL3_2_loa :selected").val());
               };
           };
        });
         $("#id_QL3_3_inc").change(function(){
           if ($("#id_QL3_3_inc :selected").val() == 1) {
               $("#id_QL3_3_loa").val(0);
               writePossiblePoints( $("#ql33-selected-points"), 0 );
               writePossiblePoints( $("#ql33-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#ql33-possible-points"), getLastValue($("#id_QL3_3_loa")));
                   $("#id_QL3_3_loa").val('18').ready(function () {
                       $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#ql33-possible-points"), getLastValue($("#id_QL3_3_loa")) );
                   $("#ql33-selected-points").text($("#id_QL3_3_loa :selected").val());
               };
           };
        });
         $("#id_NW1_2_inc").change(function(){
           if ($("#id_NW1_2_inc :selected").val() == 1) {
               $("#id_NW1_2_loa").val(0);
               writePossiblePoints( $("#nw12-selected-points"), 0 );
               writePossiblePoints( $("#nw12-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#nw12-possible-points"), getLastValue($("#id_NW1_2_loa")));
                   $("#id_NW1_2_loa").val('18').ready(function () {
                       $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw12-possible-points"), getLastValue($("#id_NW1_2_loa")) );
                   $("#nw12-selected-points").text($("#id_NW1_2_loa :selected").val());
               };
           };
        });
         $("#id_NW2_3_inc").change(function(){
           if ($("#id_NW2_3_inc :selected").val() == 1) {
               $("#id_NW2_3_loa").val(0);
               writePossiblePoints( $("#nw23-selected-points"), 0 );
               writePossiblePoints( $("#nw23-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#nw23-possible-points"), getLastValue($("#id_NW2_3_loa")));
                   $("#id_NW2_3_loa").val('18').ready(function () {
                       $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw23-possible-points"), getLastValue($("#id_NW2_3_loa")) );
                   $("#nw23-selected-points").text($("#id_NW2_3_loa :selected").val());
               };
           };
        });
         $("#id_NW3_4_inc").change(function(){
           if ($("#id_NW3_4_inc :selected").val() == 1) {
               $("#id_NW3_4_loa").val(0);
               writePossiblePoints( $("#nw34-selected-points"), 0 );
               writePossiblePoints( $("#nw34-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#nw34-possible-points"), getLastValue($("#id_NW3_4_loa")));
                   $("#id_NW3_4_loa").val('19').ready(function () {
                       $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#nw34-possible-points"), getLastValue($("#id_NW3_4_loa")) );
                   $("#nw34-selected-points").text($("#id_NW3_4_loa :selected").val());
               };
           };
        });
         $("#id_CR1_1_inc").change(function(){
           if ($("#id_CR1_1_inc :selected").val() == 1) {
               $("#id_CR1_1_loa").val(0);
               writePossiblePoints( $("#cr11-selected-points"), 0 );
               writePossiblePoints( $("#cr11-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#cr11-possible-points"), getLastValue($("#id_CR1_1_loa")));
                   $("#id_CR1_1_loa").val('25').ready(function () {
                       $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#cr11-possible-points"), getLastValue($("#id_CR1_1_loa")) );
                   $("#cr11-selected-points").text($("#id_CR1_1_loa :selected").val());
               };
           };
        });
         $("#id_CR2_2_inc").change(function(){
           if ($("#id_CR2_2_inc :selected").val() == 1) {
               $("#id_CR2_2_loa").val(0);
               writePossiblePoints( $("#cr22-selected-points"), 0 );
               writePossiblePoints( $("#cr22-possible-points"), 0 );
           } else {
               if (parseInt($(".data").html()) === 1) {
                   writePossiblePoints($("#cr22-possible-points"), getLastValue($("#id_CR2_2_loa")));
                   $("#id_CR2_2_loa").val('20').ready(function () {
                       $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
                       $("select").parent().siblings(".row").find(".required-count").text(charCounts['Restorative']);
                   })
               }
               else {
                   writePossiblePoints( $("#cr22-possible-points"), getLastValue($("#id_CR2_2_loa")) );
                   $("#cr22-selected-points").text($("#id_CR2_2_loa :selected").val());
               };
           };
        });
    };


     function totalPossibelPoints() {
        var arr = $(".possible-points");
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += parseInt(arr[i].innerHTML);
        };
        $("#total-possible").text(total);
    };

    function totalSelectedPoints() {
        var arr = $(".selected-points");
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += parseInt(arr[i].innerHTML);
        };
        $("#total-selected").text(total);
    };

    $("select").ready(function(){
        setTimeout(function(){
            totalSelectedPoints();
        }, 1);
    });

    $("select").change(function(){
        setTimeout(function(){
            totalPossibelPoints();
            totalSelectedPoints();
        }, 1);
    });

    if (parseInt($(".data").html()) === 1){
        $(".version-one").show();
    };

    $("#id_total_time").hide();


    possiblePoints();
    selectedPoints();
    included();
    totalPossibelPoints();
    totalSelectedPoints();

});



