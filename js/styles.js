$(document).ready(function(){
    $("input[type='button']").click(function(){
        var q1 = parseInt($("input[name='q1']:checked").val());
        var q2 = parseInt($("input[name='q2']:checked").val());
        var q3 = parseInt($("input[name='q3']:checked").val());
        var q4 = parseInt($("input[name='q4']:checked").val());
        var q5 = parseInt($("input[name='q5']:checked").val());
        var q6 = parseInt($("input[name='q6']:checked").val());
        var q7 = parseInt($("input[name='q7']:checked").val());
        var q8 = parseInt($("input[name='q8']:checked").val());
        var q9 = parseInt($("input[name='q9']:checked").val());
        var q10 = parseInt($("input[name='q10']:checked").val());
        var total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;
        document.getElementById('output').innerHTML="you have scored " + total;

        if(total >= 80) {
            document.getElementById('grade').innerHTML="EXCELLENT ";
        }
        else if(total >=50 && total < 80) {
            document.getElementById('grade').innerHTML="FAIR";
        }
        else {
          document.getElementById('grade').innerHTML="POOR";
        }
    });

});
