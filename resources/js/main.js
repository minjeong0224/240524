$(function(){

    // 로그인
    $(".login_submit").click(function(){
        $(".popup_login").removeClass("active");
        $(".page_2").addClass("active");
    });

    // 관리자 페이지
    
    // tab 클릭 
    $(".top_nav .tab").click(function(e){
        e.preventDefault();
        if ($(".side_nav").hasClass("active")) {
            $(".side_nav").removeClass("active");
            $(".table_section").removeClass("active");
            $(".dashbord_section").removeClass("active");
        } 
        else {
            $(".side_nav").addClass("active");
            $(".table_section").addClass("active");
            $(".dashbord_section").addClass("active");
        }
        $(".side_nav").animate({
            width: "toggle"
        });
    });

    // 모바일 nav
    $(".top_nav .tab").click(function() {
        if ($(window).width() < 1280) {
            $(".side_nav_mobile").toggleClass("active");
            $(".side_nav_bg").toggleClass("active");    
        }
    });

    // 아코디언 메뉴
    $(".side_nav > ul > li").click(function(e) {
        e.preventDefault();
    
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(this).find("ul").slideToggle();
        $(this).siblings().find("ul").slideUp();

        $(this).find(".arrow").toggleClass("active");
        $(this).siblings().find(".arrow").removeClass("active");

    });

    $(".side_nav > ul > li ul li").click(function(e) {
        e.preventDefault();
        $(this).addClass("active");
        // console.log("Active class added to: ", $(this));
        $(this).siblings().removeClass("active");   
        e.stopPropagation();
    });
        
    
    // 모바일
        $(".side_nav_mobile > ul > li").click(function(e){
            e.preventDefault();
    
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
    
            $(this).find("ul").slideToggle();
            $(this).siblings().find("ul").slideUp();
    
            $(this).find(".arrow").toggleClass("active");
            $(this).siblings().find(".arrow").removeClass("active");
        });
        $(".side_nav_mobile > ul > li ul li").click(function(e) {
            e.preventDefault();
    
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            e.stopPropagation();
        });

    $(document).click(function(e) {
        if (!$(e.target).closest(".popup_logout, .top_nav .right .util").length) {
            $(".popup_logout").removeClass("active");
            $(".page_2").removeClass("active");
            $(".popup_logout").hide();
        }
    });
    
    $(".top_nav .right .util").click(function() {
        $(".popup_logout").toggle();
    });
    
    $(".popup_logout ul li.logout").click(function(e){
        e.preventDefault();
        $(".popup_logout").removeClass("active");
        $(".page_2").removeClass("active");
        $(".popup_logout").hide();
    });

    // 등록 팝업 열기
        $(".button_admin").click(function(){
        $(".popup_register").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 등록 팝업 닫기
    $(".popup_close").click(function(){
        $(".popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    }); 

    // 등록 수정 버튼 클릭 이벤트
    $(".popup_button_re").click(function(){   
        $(".popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $(".alert_popup_dim").addClass("active");
        $(".alert_popup_info").addClass("active");
        $(".alert_popup_error").removeClass("active");
    });

    $(".alert_popup_info_cancle_btn").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_info").removeClass("active");
    });
    $(".alert_popup_accept_btn").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_info").removeClass("active");
    });

    // 아이디 버튼 클릭 이벤트
    $(".button_id").click(function(){
        $(".popup_reform").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 아이디 팝업 닫기
    $(".popup_close").click(function(){
        $(".popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });

    // 아이디 수정 버튼 클릭 이벤트
    $(".popup_button_re").click(function(){   
        $(".popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        $(".popup_reform").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $(".alert_popup_dim").addClass("active");
        $(".alert_popup_error").addClass("active");

    });
    $(".alert_popup_error").click(function(){
        $(".alert_popup_dim").removeClass("active");
        $(".alert_popup_error").removeClass("active");
    });

    // 페이지네이션 hover 이벤트
    $(".pagination ul li").hover(function(){
        $(".pagination ul li.on").removeClass("on");
        $(this).addClass("on");
        $(".pagination ul li.active").removeClass("on");
    });

    // 페이지네이션 클릭 이벤트
    $(".pagination ul li").click(function() {
        $(".pagination ul li.active").removeClass("active");
        $(this).addClass("active");
        $(".pagination ul li.on").removeClass("on");
    });

    // 리사이즈
    $(window).resize(function(){
        const winWidth = $(window).width();
        if(winWidth <= 1280){
        }
        else{
            $(".side_nav_mobile").removeClass("active");
            $(".side_nav_bg").removeClass("active");
            $(".table_section").removeClass("active");
        }
    });




    // 대쉬보드 섹션
        // XR 주간 콘텐츠 이용 현황 그래프
        var ctxL = $('#chart_L_canvas');
        var chartL = new Chart(ctxL, {
            type: 'line',
            data: {
                labels: ['Mar1', 'Mar3', 'Mar5', 'Mar7', 'Mar9', 'Mar11', 'Mar13'],
                    datasets: [{
                        label: '', // 첫 번째 데이터셋
                        data: [5, 9, 7, 8, 3, 4, 5],
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        pointBackgroundColor :'rgba(0, 87, 210)',
                        borderColor: 'rgba(0, 87, 210)',
                        borderWidth: 2
                    },
                    {
                        label: '', // 두 번째 데이터셋
                        data: [11, 5, 17, 10, 9, 8, 15],
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        pointBackgroundColor: 'rgba(45, 239, 165)',
                        borderColor: 'rgba(45, 239, 165)',
                        borderWidth: 2
                    }, 
                    {
                        label: '',   // 세 번째 데이터셋
                        data: [12, 19, 3, 5, 2, 3, 9],
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        pointBackgroundColor : 'rgba(229, 55, 171)',
                        borderColor: 'rgba(229, 55, 171)',
                        borderWidth: 2
                    }
                ]},
            options: {
                scales: {
                    y: {
                        grid: {
                            drawBorder: false
                        },
                        beginAtZero: true,
                        title: {
                            display: false,
                            text: ' ' // Y축 라벨 변경
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // 범례 숨기기
                    }
                }
            }
        });
    
        // VR 주간 콘텐츠 이용 현황 그래프
        var ctxR = $('#chart_R_canvas');
        var chartR = new Chart(ctxR, {
            type: 'line',
            data: {
                labels: ['Mar1', 'Mar3', 'Mar5', 'Mar7', 'Mar9', 'Mar11', 'Mar13'],
                datasets: [{
                    label: '', // 첫 번째 데이터셋
                    data: [5, 9, 7, 8, 3, 4, 5],
                    pointBackgroundColor: 'rgba(0, 87, 210)',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgba(0, 87, 210)',
                    borderWidth: 2
                },
                {
                    label: '',  // 두 번째 데이터셋
                    data:  [12, 19, 3, 5, 2, 3, 9],
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    pointBackgroundColor:'rgba(45, 239, 165)',
                    borderColor: 'rgba(45, 239, 165)',
                    borderWidth: 2
                }, 
                {
                    label: '', // 세 번째 데이터셋
                    data: [11, 5, 17, 10, 9, 8, 15],
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    pointBackgroundColor: 'rgba(229, 55, 171)',
                    borderColor: 'rgba(229, 55, 171)',
                    borderWidth: 2
                }
            ]},
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: false,
                                text: ' ' // Y축 라벨 변경
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false, // 범례 숨기기
                            padding: 30 
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: true
                }   
                
        });
});


