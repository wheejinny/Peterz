//Screen Size 1080 * 1920 (9:16)

/* ====================================== base structure ====================================== */
//화면 전체 크기 설정
Screen_Set ("1080", "1920", "");
Obj_Overflow ("screen_default", "1");
//화면 전체 배경
// Obj_Background ("screen_default", "2", "image/main_bg.png");
Video_Make ("screen_default", "bg_video", "image/Plexus_bg.webm");


/* ====================================== main structure ====================================== */

//하단부 ---------------------------------------------------------------------------------------//
Obj_Make (1, "screen_default", "base_order", "0", "1363", "1080", "557", "", "");

//메인 메뉴부 ---------------------------------------------------------------------------------//
Obj_Make (1, "screen_default", "base_menu", "0", "175", "1080", "1194", "", "");

//슬라이드 메뉴부 ------------------------------------------------------------------------------//
Obj_Make (1, "screen_default", "base_slide_bgr", "0", "1920", "1080", "703", "", "");
Obj_Make (1, "screen_default", "base_slide", "0", "-1422", "1080", "1659", "", "");

//상단부 ---------------------------------------------------------------------------------------//
Obj_Make (1, "screen_default", "base_top", "0", "0", "1080", "175", "", "");



/* ======================================= 상단부 structure ====================================== */
//top box
Obj_Make (1, "base_top", "top_title", "0", "0", "1080", "175", "", "");
Obj_Overflow ("top_title", "1");
Obj_Make (1, "base_top", "top_upper", "0", "0", "1080", "70", "", "");

//top_upper
//상단부 로고 영역
Obj_Background ("top_upper", "2", "image/top_bar.png");
//WOW 로고 버튼
Obj_Make (2, "top_upper", "upper_logo_btn_left", "0", "0", "160", "70", "BTN;upper_logo_btn_left;", "");
Obj_Make (1, "upper_logo_btn_left", "upper_logo_btn_left_bg", "0", "0", "160", "70", "", "");
Obj_Background ("upper_logo_btn_left_bg", "2", "image/logo_bg.png");
Obj_Make (4, "upper_logo_btn_left", "upper_logo_btn_left_logo", "0", "0", "160", "70", "image/logo_wow.png", "");

//매장 로고 버튼
// Obj_Make (2, "top_upper", "upper_logo_btn_right", "920", "0", "160", "70", "BTN;upper_logo_btn_right;", "");
// Obj_Make (4, "upper_logo_btn_right", "upper_logo_btn_right_bg", "0", "0", "160", "70", "image/logo_bg_right.png", "");
// Obj_Make (4, "upper_logo_btn_right", "upper_logo_btn_right_logo", "0", "0", "160", "70", "image/logo_right.png", "");

//상단부 타이틀 01 - 추천
Obj_Make (1, "top_title", "top_title_bar_01", "0", "58", "1080", "100", "", "");
Obj_Background ("top_title_bar_01", "2", "image/top_title_bar_01.png");
Obj_Shadow_XY("top_title_bar_01", "0", "5", "10", "rgba(0, 0, 0, 0.3)");
//정렬을 위한 DIV
Obj_Make (1, "top_title_bar_01", "top_title_bar_01_gbox", "0", "12", "1080", "88", "", "");
Obj_Class ("top_title_bar_01_gbox", "flex_container");
//Flag 이미지
Obj_Make (4, "top_title_bar_01_gbox", "top_title_bar_01_gbox_flag", "0", "0", "116", "88", "image/flag_hot.gif", "");
Obj_AB_RE ("top_title_bar_01_gbox_flag", "2");
//타이틀
Obj_Make (3, "top_title_bar_01_gbox", "top_title_bar_01_gbox_title_shadow", "132", "21", "", "50", "추천", "");
Txt_Font ("top_title_bar_01_gbox_title_shadow", "5", "46", "rgba(0,0,0,0.4)", "", "1", "", "");
Obj_Class ("top_title_bar_01_gbox_title_shadow", "top_bar_gradient_shadow");
Obj_Make (3, "top_title_bar_01_gbox", "top_title_bar_01_gbox_title", "15", "20", "", "50", "추천", "");
Txt_Font ("top_title_bar_01_gbox_title", "5", "46", "#ffe1a6", "", "1", "", "");
Obj_Class ("top_title_bar_01_gbox_title", "top_bar_hot_gradient");
Obj_AB_RE ("top_title_bar_01_gbox_title", "2");
//타이틀2
Obj_Make (3, "top_title_bar_01_gbox", "top_title_bar_01_gbox_title2", "25", "20", "", "50", "메뉴", "");
Obj_Shadow_XY("top_title_bar_01_gbox_title2", "1", "1", "3", "rgba(0,0,0,0.4)");
Txt_Font ("top_title_bar_01_gbox_title2", "1", "46", "#ffffff", "", "1", "", "");
Obj_AB_RE ("top_title_bar_01_gbox_title2", "2");

//설명영역 전체 DIV
Obj_Make (1, "top_title_bar_01_gbox", "top_title_bar_01_gbox_info", "10", "0", "460", "88", "", "");
Obj_AB_RE ("top_title_bar_01_gbox_info", "2");
//세로 선 이미지
Obj_Make (4, "top_title_bar_01_gbox_info", "top_title_bar_01_gbox_info_line", "30", "14", "2", "61", "image/top_title_line.png", "");
//설명영역 세로 중앙정렬을 위해 만든 DIV
Obj_Make (1, "top_title_bar_01_gbox_info", "top_title_bar_01_gbox_info_mbox", "50", "0", "430", "88", "", "");
//설명영역
Obj_Make (3, "top_title_bar_01_gbox_info_mbox", "top_title_bar_01_gbox_info_mbox_txt", "0", "0", "", "50", "고객님께 추천드리는 최신 HOT 메뉴입니다. 히트메뉴 등 다양한 메뉴를 확인해 보세요.", "");
Obj_Shadow_XY("top_title_bar_01_gbox_info_mbox_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("top_title_bar_01_gbox_info_mbox_txt", "4", "16", "#aad7ff", "", "", "", "");
Obj_Class ("top_title_bar_01_gbox_info_mbox_txt", "info_detail");
Div_Txt_Align("top_title_bar_01_gbox_info_mbox", "1", "2");


//상단부 타이틀 02 - 선택
Obj_Make (1, "top_title", "top_title_bar_02", "0", "-40", "1080", "100", "", "");
Obj_Background ("top_title_bar_02", "2", "image/top_title_bar_01.png");
Obj_Shadow_XY("top_title_bar_02", "0", "5", "10", "rgba(0, 0, 0, 0.3)");
//정렬을 위한 DIV
Obj_Make (1, "top_title_bar_02", "top_title_bar_02_gbox", "0", "12", "1080", "88", "", "");
Obj_Class ("top_title_bar_02_gbox", "flex_container");
//Flag 이미지
Obj_Make (4, "top_title_bar_02_gbox", "top_title_bar_02_gbox_flag", "0", "0", "116", "88", "image/flag_select.gif", "");
Obj_AB_RE ("top_title_bar_02_gbox_flag", "2");
//타이틀
Obj_Make (3, "top_title_bar_02_gbox", "top_title_bar_02_gbox_title_shadow", "132", "21", "", "50", "커피", "");
Txt_Font ("top_title_bar_02_gbox_title_shadow", "5", "46", "rgba(0,0,0,0.4)", "", "1", "", "");
Obj_Class ("top_title_bar_02_gbox_title_shadow", "top_bar_gradient_shadow");
Obj_Make (3, "top_title_bar_02_gbox", "top_title_bar_02_gbox_title", "15", "20", "", "50", "커피", "");
Txt_Font ("top_title_bar_02_gbox_title", "5", "46", "#97ffff", "", "", "", "");
Obj_Class ("top_title_bar_02_gbox_title", "top_bar_select_gradient");
Obj_AB_RE ("top_title_bar_02_gbox_title", "2");
//타이틀2
Obj_Make (3, "top_title_bar_02_gbox", "top_title_bar_02_gbox_title2", "25", "20", "", "50", "메뉴", "");
Obj_Shadow_XY("top_title_bar_02_gbox_title2", "1", "1", "3", "rgba(0,0,0,0.4)");
Txt_Font ("top_title_bar_02_gbox_title2", "1", "46", "#ffffff", "", "1", "", "");
Obj_AB_RE ("top_title_bar_02_gbox_title2", "2");

//설명영역 전체 DIV
Obj_Make (1, "top_title_bar_02_gbox", "top_title_bar_02_gbox_info", "10", "0", "460", "88", "", "");
Obj_AB_RE ("top_title_bar_02_gbox_info", "2");
//세로 선 이미지
Obj_Make (4, "top_title_bar_02_gbox_info", "top_title_bar_02_gbox_info_line", "30", "14", "2", "61", "image/top_title_line.png", "");
//설명영역 세로 중앙정렬을 위해 만든 DIV
Obj_Make (1, "top_title_bar_02_gbox_info", "top_title_bar_02_gbox_info_mbox", "50", "0", "430", "88", "", "");
//설명영역
Obj_Make (3, "top_title_bar_02_gbox_info_mbox", "top_title_bar_02_gbox_info_mbox_txt", "0", "0", "", "50", "선택한 메뉴의 간략한 설명", "");
Obj_Shadow_XY("top_title_bar_02_gbox_info_mbox_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("top_title_bar_02_gbox_info_mbox_txt", "4", "16", "#aad7ff", "", "", "", "");
Obj_Class ("top_title_bar_02_gbox_info_mbox_txt", "info_detail");
Div_Txt_Align("top_title_bar_02_gbox_info_mbox", "1", "2");


//상단부 타이틀 03 - 메뉴종류 
Obj_Make (1, "top_title", "top_title_bar_03", "0", "-40", "1080", "100", "", "");
Obj_Background ("top_title_bar_03", "2", "image/top_title_bar_02.png");
Obj_Shadow_XY("top_title_bar_03", "0", "5", "10", "rgba(0, 0, 0, 0.3)");
//정렬을 위한 DIV
Obj_Make (1, "top_title_bar_03", "top_title_bar_03_gbox", "0", "12", "1080", "88", "", "");
Obj_Class ("top_title_bar_03_gbox", "flex_container");
//Flag 이미지
Obj_Make (4, "top_title_bar_03_gbox", "top_title_bar_03_gbox_flag", "0", "0", "116", "88", "image/flag_all.gif", "");
Obj_AB_RE ("top_title_bar_03_gbox_flag", "2");
//타이틀
Obj_Make (3, "top_title_bar_03_gbox", "top_title_bar_03_gbox_title_shadow", "132", "21", "", "50", "메뉴종류 선택", "");
Txt_Font ("top_title_bar_03_gbox_title_shadow", "5", "46", "rgba(0,0,0,0.4)", "", "1", "", "");
Obj_Class ("top_title_bar_03_gbox_title_shadow", "top_bar_gradient_shadow");
Obj_Make (3, "top_title_bar_03_gbox", "top_title_bar_03_gbox_title", "15", "20", "", "50", "메뉴종류 선택", "");
Txt_Font ("top_title_bar_03_gbox_title", "5", "46", "#badefe", "", "", "", "");
Obj_Class ("top_title_bar_03_gbox_title", "top_bar_kind_gradient");
Obj_AB_RE ("top_title_bar_03_gbox_title", "2");

//설명영역 전체 DIV
Obj_Make (1, "top_title_bar_03_gbox", "top_title_bar_03_gbox_info", "10", "0", "460", "88", "", "");
Obj_AB_RE ("top_title_bar_03_gbox_info", "2");
//세로 선 이미지
Obj_Make (4, "top_title_bar_03_gbox_info", "top_title_bar_03_gbox_info_line", "30", "14", "2", "61", "image/top_title_line.png", "");
//설명영역 세로 중앙정렬을 위해 만든 DIV
Obj_Make (1, "top_title_bar_03_gbox_info", "top_title_bar_03_gbox_info_mbox", "50", "0", "430", "88", "", "");
//설명영역
Obj_Make (3, "top_title_bar_03_gbox_info_mbox", "top_title_bar_03_gbox_info_mbox_txt", "0", "0", "", "50", "원하는 메뉴를 선택하세요.", "");
Obj_Shadow_XY("top_title_bar_03_gbox_info_mbox_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("top_title_bar_03_gbox_info_mbox_txt", "4", "16", "#aad7ff", "", "", "", "");
Obj_Class ("top_title_bar_03_gbox_info_mbox_txt", "info_detail");
Div_Txt_Align("top_title_bar_03_gbox_info_mbox", "1", "2");



//언어선택 영역
Obj_Make (1, "top_title", "top_title_lang_btn", "974", "86", "81", "55", "", "");
Obj_Radius("top_title_lang_btn", "6");
Obj_Shadow_XY("top_title_lang_btn", "0", "3", "7", "rgba(0, 0, 0, 0.4)");
//언어선택 버튼 kr
Obj_Make (2, "top_title_lang_btn", "top_title_lang_btn_kr", "0", "0", "81", "55", "BTN;top_title_lang_btn;", "");
Obj_Radius("top_title_lang_btn_kr", "6");
Obj_Background ("top_title_lang_btn_kr", "2", "image/lang_btn_kr_n.png");
Btn_Click ("top_title_lang_btn_kr", "0", "0", "81", "55", "image/lang_btn_kr_y.png", "");
//언어선택 버튼 ch
Obj_Make (2, "top_title_lang_btn", "top_title_lang_btn_ch", "0", "0", "81", "55", "BTN;top_title_lang_btn;", "");
Obj_Radius("top_title_lang_btn_ch", "6");
Obj_Background ("top_title_lang_btn_ch", "2", "image/lang_btn_ch_n.png");
Btn_Click ("top_title_lang_btn_ch", "0", "0", "81", "55", "image/lang_btn_ch_y.png", "");
//언어선택 버튼 jp
Obj_Make (2, "top_title_lang_btn", "top_title_lang_btn_jp", "0", "0", "81", "55", "BTN;top_title_lang_btn;", "");
Obj_Radius("top_title_lang_btn_jp", "6");
Obj_Background ("top_title_lang_btn_jp", "2", "image/lang_btn_jp_n.png");
Btn_Click ("top_title_lang_btn_jp", "0", "0", "81", "55", "image/lang_btn_jp_y.png", "");
//언어선택 버튼 us
Obj_Make (2, "top_title_lang_btn", "top_title_lang_btn_us", "0", "0", "81", "55", "BTN;top_title_lang_btn;", "");
Obj_Radius("top_title_lang_btn_us", "6");
Obj_Background ("top_title_lang_btn_us", "2", "image/lang_btn_us_n.png");
Btn_Click ("top_title_lang_btn_us", "0", "0", "81", "55", "image/lang_btn_us_y.png", "");

//언어선택 버튼 숨기기
Obj_View ("top_title_lang_btn_kr", "1");
Obj_View ("top_title_lang_btn_ch", "2");
Obj_View ("top_title_lang_btn_jp", "2");
Obj_View ("top_title_lang_btn_us", "2");




/* ====================================== order structure ===================================== */
//하단부 영역

//bottom box
Obj_Background ("base_order", "2", "image/bottom_board.png");

//base_order
//주문 정보 영역
Obj_Make (1, "base_order", "order_info", "0", "18", "1080", "200", "", "");
//현재 주문 영역
Obj_Make (1, "base_order", "order_now", "0", "218", "1080", "339", "", "");

//order_info
//주문 정보 영역 요소
Obj_Make (1, "order_info", "order_info_qty", "25", "25", "415", "68", "", "");
Obj_Make (1, "order_info", "order_info_amt", "25", "107", "415", "68", "", "");

//order_info_qty
//주문 수량 제목
Obj_Make (3, "order_info_qty", "order_info_qty_title_txt", "0", "0", "150", "", "주문수량", "");
Txt_Font ("order_info_qty_title_txt", "3", "26", "#cbe6fd", "", "2", "", "");
Div_Txt_Align ("order_info_qty", "2", "2");
Obj_Shadow_XY ("order_info_qty_title_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
//주문 수량 숫자
Obj_Make (3, "order_info_qty", "order_info_qty_num_txt", "150", "18", "250", "40", "1,000", "");
Txt_Font ("order_info_qty_num_txt", "5", "36", "#ffffff", "", "3", "", "");
Obj_Shadow_XY ("order_info_qty_num_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
//'개' 표시
// Obj_Class ("order_info_qty_num_txt", "order_qty_kr_after");

//order_info_amt
//주문 총액 제목
Obj_Make (3, "order_info_amt", "order_info_amt_title_txt", "0", "0", "150", "", "주문총액", "");
Txt_Font ("order_info_amt_title_txt", "3", "26", "#cbe6fd", "", "2", "", "");
Div_Txt_Align ("order_info_amt", "2", "2");
Obj_Shadow_XY ("order_info_amt_title_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
//주문 총액 숫자
Obj_Make (3, "order_info_amt", "order_info_amt_num_txt", "150", "18", "250", "40", "1,000,000", "");
Txt_Font ("order_info_amt_num_txt", "5", "36", "#ffff00", "", "3", "", "");
Obj_Shadow_XY ("order_info_amt_num_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
//환율 한화 '원' 표시
Obj_Class ("order_info_amt_num_txt", "order_amt_won_b");

//order_info_del
//주문영역 전체취소 버튼
Obj_Make (2, "order_info", "order_info_del_btn", "490", "25", "220", "150", "BTN;order_info_del_btn;", "");
Obj_Radius("order_info_del_btn", "6");
Obj_Background ("order_info_del_btn", "2", "image/alldel_btn_n.png");
Obj_Shadow_XY ("order_info_del_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("order_info_del_btn", "0", "0", "220", "150", "image/alldel_btn_y.png", "#4e749e");
Obj_Make (4, "order_info_del_btn", "order_info_del_dis_img", "0", "0", "332", "152", "image/alldel_btn_d.png", "");
Obj_View ("order_info_del_dis_img", "2");
//주문영역 전추취소 버튼 텍스트
Obj_Make (3, "order_info_del_btn", "order_info_del_txt", "100", "2", "110", "100", "전체<br>취소", "");
Txt_Font ("order_info_del_txt", "3", "30", "#99c4ec", "", "", "", "");
Obj_Shadow_XY ("order_info_del_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("order_info_del_btn", "2", "2");

//order_info_pay
//주문영역 결제하기 버튼
Obj_Make (2, "order_info", "order_info_pay_btn", "735", "25", "320", "150", "BTN;order_info_pay_btn;", "");
Obj_Radius("order_info_pay_btn", "6");
Obj_Background ("order_info_pay_btn", "2", "image/payment_btn_n.png");
Obj_Shadow_XY ("order_info_pay_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("order_info_pay_btn", "0", "0", "320", "150", "image/payment_btn_y.png", "#caf5cb");
Obj_Make (4, "order_info_pay_btn", "order_info_pay_dis_img", "0", "0", "320", "150", "image/payment_btn_d.png", "");
Obj_View ("order_info_pay_dis_img", "2");
//주문영역 결제하기 버튼 텍스트
Obj_Make (3, "order_info_pay_btn", "order_info_pay_txt", "160", "2", "150", "120", "결제<br>하기", "");
Txt_Font ("order_info_pay_txt", "3", "40", "#e4ffe5", "", "", "", "");
Obj_Shadow_XY ("order_info_pay_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("order_info_pay_btn", "2", "2");

//order_now
//현재 주문내역 영역
//주문내역 이전 버튼
Obj_Make (2, "order_now", "order_now_prev_btn", "25", "20", "60", "264", "BTN;order_now_prev_btn;", "");
Obj_Radius("order_now_prev_btn", "6");
Obj_Shadow_XY ("order_now_prev_btn", "2", "2", "5", "rgba(0,0,0,0.2)");
//order_now_prev_btn
//주문내역 이전 버튼 요소
Obj_Background ("order_now_prev_btn", "2", "image/bottom_prev_n.png");
Btn_Click ("order_now_prev_btn", "0", "0", "60", "264", "image/bottom_prev_y.png", "");
Obj_Make (4, "order_now_prev_btn", "order_now_prev_dis_img", "0", "0", "60", "264", "image/bottom_prev_d.png", "");

//주문내역 다음 버튼
Obj_Make (2, "order_now", "order_now_next_btn", "993", "20", "60", "264", "BTN;order_now_next_btn;", "");
Obj_Radius("order_now_next_btn", "6");
Obj_Shadow_XY ("order_now_next_btn", "2", "2", "5", "rgba(0,0,0,0.2)");
//order_now_next_btn
//주문내역 다음 버튼 요소
Obj_Background ("order_now_next_btn", "2", "image/bottom_next_n.png");
Btn_Click ("order_now_next_btn", "0", "0", "60", "264", "image/bottom_next_y.png", "");
Obj_Make (4, "order_now_next_btn", "order_now_next_dis_img", "0", "0", "60", "264", "image/bottom_next_d.png", "");

//현재 주문내역 노출 영역
Obj_Make (1, "order_now", "order_now_box", "100", "20", "880", "264", "", "");
Obj_Overflow ("order_now_box", "1");

//주문내역 리스트 네비게이션 영역
Obj_Make (1, "order_now", "order_now_nav", "0", "301", "1062", "23", "", "");
Obj_Class ("order_now_nav", "flex_r_center_box");

Obj_View ("order_now_prev_dis_img", "1");
Obj_View ("order_now_next_dis_img", "2");
Btn_Enable ("order_now_prev_btn", "2");

//order_now_box
//order_now_list
//현재 주문내역 전체 리스트 영역
Obj_Make (1, "order_now_box", "order_now_list", "25", "23", "1720", "264", "", "");
Obj_Class ("order_now_list", "flex_r_start_box");
//현재 주문내역 리스트별 영역
Obj_Make (1, "order_now_list", "order_now_list01", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list02", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list03", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list04", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list05", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list06", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list07", "0", "0", "185", "220", "", "");
Obj_Make (1, "order_now_list", "order_now_list08", "0", "0", "185", "220", "", "");

Obj_Class ("order_now_list01", "main_order_menu");
Obj_Class ("order_now_list02", "main_order_menu");
Obj_Class ("order_now_list03", "main_order_menu");
Obj_Class ("order_now_list04", "main_order_menu");
Obj_Class ("order_now_list05", "main_order_menu");
Obj_Class ("order_now_list06", "main_order_menu");
Obj_Class ("order_now_list07", "main_order_menu");
Obj_Class ("order_now_list08", "main_order_menu");

Obj_AB_RE ("order_now_list01", "2");
Obj_AB_RE ("order_now_list02", "2");
Obj_AB_RE ("order_now_list03", "2");
Obj_AB_RE ("order_now_list04", "2");
Obj_AB_RE ("order_now_list05", "2");
Obj_AB_RE ("order_now_list06", "2");
Obj_AB_RE ("order_now_list07", "2");
Obj_AB_RE ("order_now_list08", "2");


//order_now_list01
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list01", "order_now_list01_menu_btn", "0", "0", "185", "220", "BTN;order_now_list01_menu_btn;", "");
Obj_Class ("order_now_list01_menu_btn", "menu_btn");
Obj_Background ("order_now_list01_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list01_menu_btn", "6");
Obj_Shadow_XY ("order_now_list01_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list01_menu_btn", "order_now_list01_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list01_menu_btn", "order_now_list01_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list01_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list01_menu_btn", "order_now_list01_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list01_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list01_title", "order_now_list01_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list01_title_over", "1");
Obj_Make (1, "order_now_list01_title_over", "order_now_list01_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list01_title_over_box", "order_now_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀메뉴타이틀메뉴메뉴타이틀메뉴타이틀메뉴", "");
Txt_Font ("order_now_list01_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list01_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list01_menu_btn", "order_now_list01_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list01_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list01_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list01_qty", "order_now_list01_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list01_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list01_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list01_menu_btn", "order_now_list01_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list01_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list01_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list01_amt", "order_now_list01_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list01_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list01_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list01_menu_btn", "order_now_list01_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list01_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list01", "order_now_list01_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list01", "order_now_list01_plus_btn", "0", "0", "45", "71", "BTN;order_now_list01_plus_btn;", "");
Obj_Radius_Rect ("order_now_list01_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list01_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list01_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list01", "order_now_list01_minus_btn", "0", "71", "45", "69", "BTN;order_now_list01_minus_btn;", "");
Obj_Background ("order_now_list01_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list01_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list01", "order_now_list01_del_btn", "142", "-12", "58", "58", "BTN;order_now_list01_del_btn;", "");
Obj_Background ("order_now_list01_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list01_menu_btn", "order_now_list01_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list01_menu_box", "6");

//order_now_list02
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list02", "order_now_list02_menu_btn", "0", "0", "185", "220", "BTN;order_now_list02_menu_btn;", "");
Obj_Class ("order_now_list02_menu_btn", "menu_btn");
Obj_Background ("order_now_list02_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list02_menu_btn", "6");
Obj_Shadow_XY ("order_now_list02_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list02_menu_btn", "order_now_list02_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list02_menu_btn", "order_now_list02_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list02_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list02_menu_btn", "order_now_list02_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list02_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list02_title", "order_now_list02_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list02_title_over", "1");
Obj_Make (1, "order_now_list02_title_over", "order_now_list02_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list02_title_over_box", "order_now_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀메뉴타이틀메뉴메뉴타이틀", "");
Txt_Font ("order_now_list02_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list02_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list02_menu_btn", "order_now_list02_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list02_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list02_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list02_qty", "order_now_list02_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list02_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list02_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list02_menu_btn", "order_now_list02_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list02_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list02_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list02_amt", "order_now_list02_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list02_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list02_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list02_menu_btn", "order_now_list02_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list02_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list02", "order_now_list02_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list02", "order_now_list02_plus_btn", "0", "0", "45", "71", "BTN;order_now_list02_plus_btn;", "");
Obj_Radius_Rect ("order_now_list02_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list02_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list02_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list02", "order_now_list02_minus_btn", "0", "71", "45", "69", "BTN;order_now_list02_minus_btn;", "");
Obj_Background ("order_now_list02_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list02_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list02", "order_now_list02_del_btn", "142", "-12", "58", "58", "BTN;order_now_list02_del_btn;", "");
Obj_Background ("order_now_list02_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list02_menu_btn", "order_now_list02_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list02_menu_box", "6");


//order_now_list03
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list03", "order_now_list03_menu_btn", "0", "0", "185", "220", "BTN;order_now_list03_menu_btn;", "");
Obj_Class ("order_now_list03_menu_btn", "menu_btn");
Obj_Background ("order_now_list03_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list03_menu_btn", "6");
Obj_Shadow_XY ("order_now_list03_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list03_menu_btn", "order_now_list03_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list03_menu_btn", "order_now_list03_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list03_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list03_menu_btn", "order_now_list03_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list03_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list03_title", "order_now_list03_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list03_title_over", "1");
Obj_Make (1, "order_now_list03_title_over", "order_now_list03_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list03_title_over_box", "order_now_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list03_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list03_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list03_menu_btn", "order_now_list03_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list03_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list03_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list03_qty", "order_now_list03_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list03_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list03_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list03_menu_btn", "order_now_list03_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list03_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list03_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list03_amt", "order_now_list03_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list03_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list03_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list03_menu_btn", "order_now_list03_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list03_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list03", "order_now_list03_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list03", "order_now_list03_plus_btn", "0", "0", "45", "71", "BTN;order_now_list03_plus_btn;", "");
Obj_Radius_Rect ("order_now_list03_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list03_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list03_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list03", "order_now_list03_minus_btn", "0", "71", "45", "69", "BTN;order_now_list03_minus_btn;", "");
Obj_Background ("order_now_list03_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list03_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list03", "order_now_list03_del_btn", "142", "-12", "58", "58", "BTN;order_now_list03_del_btn;", "");
Obj_Background ("order_now_list03_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list03_menu_btn", "order_now_list03_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list03_menu_box", "6");


//order_now_list04
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list04", "order_now_list04_menu_btn", "0", "0", "185", "220", "BTN;order_now_list04_menu_btn;", "");
Obj_Class ("order_now_list04_menu_btn", "menu_btn");
Obj_Background ("order_now_list04_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list04_menu_btn", "6");
Obj_Shadow_XY ("order_now_list04_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list04_menu_btn", "order_now_list04_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list04_menu_btn", "order_now_list04_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list04_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list04_menu_btn", "order_now_list04_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list04_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list04_title", "order_now_list04_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list04_title_over", "1");
Obj_Make (1, "order_now_list04_title_over", "order_now_list04_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list04_title_over_box", "order_now_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list04_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list04_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list04_menu_btn", "order_now_list04_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list04_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list04_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list04_qty", "order_now_list04_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list04_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list04_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list04_menu_btn", "order_now_list04_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list04_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list04_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list04_amt", "order_now_list04_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list04_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list04_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list04_menu_btn", "order_now_list04_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list04_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list04", "order_now_list04_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list04", "order_now_list04_plus_btn", "0", "0", "45", "71", "BTN;order_now_list04_plus_btn;", "");
Obj_Radius_Rect ("order_now_list04_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list04_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list04_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list04", "order_now_list04_minus_btn", "0", "71", "45", "69", "BTN;order_now_list04_minus_btn;", "");
Obj_Background ("order_now_list04_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list04_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list04", "order_now_list04_del_btn", "142", "-12", "58", "58", "BTN;order_now_list04_del_btn;", "");
Obj_Background ("order_now_list04_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list04_menu_btn", "order_now_list04_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list04_menu_box", "6");


//order_now_list05
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list05", "order_now_list05_menu_btn", "0", "0", "185", "220", "BTN;order_now_list05_menu_btn;", "");
Obj_Class ("order_now_list05_menu_btn", "menu_btn");
Obj_Background ("order_now_list05_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list05_menu_btn", "6");
Obj_Shadow_XY ("order_now_list05_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list05_menu_btn", "order_now_list05_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list05_menu_btn", "order_now_list05_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list05_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list05_menu_btn", "order_now_list05_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list05_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list05_title", "order_now_list05_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list05_title_over", "1");
Obj_Make (1, "order_now_list05_title_over", "order_now_list05_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list05_title_over_box", "order_now_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list05_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list05_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list05_menu_btn", "order_now_list05_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list05_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list05_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list05_qty", "order_now_list05_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list05_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list05_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list05_menu_btn", "order_now_list05_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list05_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list05_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list05_amt", "order_now_list05_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list05_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list05_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list05_menu_btn", "order_now_list05_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list05_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list05", "order_now_list05_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list05", "order_now_list05_plus_btn", "0", "0", "45", "71", "BTN;order_now_list05_plus_btn;", "");
Obj_Radius_Rect ("order_now_list05_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list05_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list05_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list05", "order_now_list05_minus_btn", "0", "71", "45", "69", "BTN;order_now_list05_minus_btn;", "");
Obj_Background ("order_now_list05_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list05_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list05", "order_now_list05_del_btn", "142", "-12", "58", "58", "BTN;order_now_list05_del_btn;", "");
Obj_Background ("order_now_list05_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list05_menu_btn", "order_now_list05_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list05_menu_box", "6");


//order_now_list06
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list06", "order_now_list06_menu_btn", "0", "0", "185", "220", "BTN;order_now_list06_menu_btn;", "");
Obj_Class ("order_now_list06_menu_btn", "menu_btn");
Obj_Background ("order_now_list06_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list06_menu_btn", "6");
Obj_Shadow_XY ("order_now_list06_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list06_menu_btn", "order_now_list06_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list06_menu_btn", "order_now_list06_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list06_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list06_menu_btn", "order_now_list06_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list06_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list06_title", "order_now_list06_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list06_title_over", "1");
Obj_Make (1, "order_now_list06_title_over", "order_now_list06_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list06_title_over_box", "order_now_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list06_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list06_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list06_menu_btn", "order_now_list06_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list06_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list06_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list06_qty", "order_now_list06_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list06_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list06_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list06_menu_btn", "order_now_list06_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list06_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list06_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list06_amt", "order_now_list06_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list06_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list06_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list06_menu_btn", "order_now_list06_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list06_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list06", "order_now_list06_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list06", "order_now_list06_plus_btn", "0", "0", "45", "71", "BTN;order_now_list06_plus_btn;", "");
Obj_Radius_Rect ("order_now_list06_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list06_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list06_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list06", "order_now_list06_minus_btn", "0", "71", "45", "69", "BTN;order_now_list06_minus_btn;", "");
Obj_Background ("order_now_list06_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list06_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list06", "order_now_list06_del_btn", "142", "-12", "58", "58", "BTN;order_now_list06_del_btn;", "");
Obj_Background ("order_now_list06_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list06_menu_btn", "order_now_list06_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list06_menu_box", "6");


//order_now_list07
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list07", "order_now_list07_menu_btn", "0", "0", "185", "220", "BTN;order_now_list07_menu_btn;", "");
Obj_Class ("order_now_list07_menu_btn", "menu_btn");
Obj_Background ("order_now_list07_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list07_menu_btn", "6");
Obj_Shadow_XY ("order_now_list07_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list07_menu_btn", "order_now_list07_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list07_menu_btn", "order_now_list07_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list07_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list07_menu_btn", "order_now_list07_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list07_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list07_title", "order_now_list07_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list07_title_over", "1");
Obj_Make (1, "order_now_list07_title_over", "order_now_list07_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list07_title_over_box", "order_now_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list07_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list07_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list07_menu_btn", "order_now_list07_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list07_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list07_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list07_qty", "order_now_list07_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list07_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list07_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list07_menu_btn", "order_now_list07_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list07_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list07_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list07_amt", "order_now_list07_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list07_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list07_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list07_menu_btn", "order_now_list07_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list07_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list07", "order_now_list07_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list07", "order_now_list07_plus_btn", "0", "0", "45", "71", "BTN;order_now_list07_plus_btn;", "");
Obj_Radius_Rect ("order_now_list07_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list07_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list07_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list07", "order_now_list07_minus_btn", "0", "71", "45", "69", "BTN;order_now_list07_minus_btn;", "");
Obj_Background ("order_now_list07_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list07_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list07", "order_now_list07_del_btn", "142", "-12", "58", "58", "BTN;order_now_list07_del_btn;", "");
Obj_Background ("order_now_list07_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list07_menu_btn", "order_now_list07_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list07_menu_box", "6");


//order_now_list08
//현재 주문내역 메뉴 버튼
Obj_Make (2, "order_now_list08", "order_now_list08_menu_btn", "0", "0", "185", "220", "BTN;order_now_list08_menu_btn;", "");
Obj_Class ("order_now_list08_menu_btn", "menu_btn");
Obj_Background ("order_now_list08_menu_btn", "1", "#eeeeee");
Obj_Radius ("order_now_list08_menu_btn", "6");
Obj_Shadow_XY ("order_now_list08_menu_btn", "4", "4", "7", "rgba(0,0,0,0.4)");
//이미지 버튼
Obj_Make (4, "order_now_list08_menu_btn", "order_now_list08_menu_img", "45", "0", "140", "140", "image/sample_img_01.png", "");
Obj_Make (4, "order_now_list08_menu_btn", "order_now_list08_cover_img", "45", "0", "140", "140", "image/menu_img_light.png", "")
Obj_Radius_Rect ("order_now_list08_menu_img", "0", "6", "0", "0" );
//타이틀
Obj_Make (1, "order_now_list08_menu_btn", "order_now_list08_title", "0", "140", "185", "80", "", "");
Obj_Class ("order_now_list08_title", "order_menu_title_bg");
Obj_Make (1, "order_now_list08_title", "order_now_list08_title_over", "7", "6", "172", "36", "", "");
Obj_Overflow ("order_now_list08_title_over", "1");
Obj_Make (1, "order_now_list08_title_over", "order_now_list08_title_over_box", "0", "0", "172", "36", "", "");
Obj_Make (3, "order_now_list08_title_over_box", "order_now_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("order_now_list08_title_over_box_txt", "2", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align("order_now_list08_title_over_box", "2", "2");
//수량
Obj_Make (1, "order_now_list08_menu_btn", "order_now_list08_qty", "7", "188", "55", "25", "", "");
Obj_Background ("order_now_list08_qty", "1", "#173763");
Obj_Radius_Rect ("order_now_list08_qty", "3", "0", "3", "0" );
Obj_Make (3, "order_now_list08_qty", "order_now_list08_qty_txt", "0", "3", "55", "17", "99", "");
Txt_Font ("order_now_list08_qty_txt", "2", "16", "#35fffe", "", "2", "", "");
Obj_Class ("order_now_list08_qty_txt", "order_qty_after_kr");
//가격
Obj_Make (1, "order_now_list08_menu_btn", "order_now_list08_amt", "64", "188", "115", "25", "", "");
Obj_Background ("order_now_list08_amt", "1", "#173763");
Obj_Radius_Rect ("order_now_list08_amt", "0", "3", "0", "3" );
Obj_Make (3, "order_now_list08_amt", "order_now_list08_amt_txt", "0", "3", "105", "17", "12,000", "");
Txt_Font ("order_now_list08_amt_txt", "2", "16", "#35fffe", "", "3", "", "");
Obj_Class ("order_now_list08_amt_txt", "order_menu_amt_won_b");
//커버
Obj_Make (1, "order_now_list08_menu_btn", "order_now_list08_menu_btn_border", "0", "0", "185", "220", "", "");
Obj_Class ("order_now_list08_menu_btn_border", "order_menu_border");
//셋트 표시
Obj_Make (4, "order_now_list08", "order_now_list08_set_bar", "128", "109", "57", "31", "image/set_tag.png", "");
//플러스 버튼 
Obj_Make (2, "order_now_list08", "order_now_list08_plus_btn", "0", "0", "45", "71", "BTN;order_now_list08_plus_btn;", "");
Obj_Radius_Rect ("order_now_list08_plus_btn", "6", "0", "0", "0" );
Obj_Background ("order_now_list08_plus_btn", "2", "image/order_plus_btn_n.png");
Btn_Click ("order_now_list08_plus_btn", "0", "0", "45", "71", "image/order_plus_btn_y.png", "");
//마이너스 버튼 
Obj_Make (2, "order_now_list08", "order_now_list08_minus_btn", "0", "71", "45", "69", "BTN;order_now_list08_minus_btn;", "");
Obj_Background ("order_now_list08_minus_btn", "2", "image/order_minus_btn_n.png");
Btn_Click ("order_now_list08_minus_btn", "0", "0", "45", "69", "image/order_minus_btn_y.png", "");
//삭제 버튼
Obj_Make (2, "order_now_list08", "order_now_list08_del_btn", "142", "-12", "58", "58", "BTN;order_now_list08_del_btn;", "");
Obj_Background ("order_now_list08_del_btn", "2", "image/bottom_menu_del.png");
// light 애니메이션용 div
Obj_Make (1, "order_now_list08_menu_btn", "order_now_list08_menu_box", "0", "00", "185", "220", "", "");
Obj_Radius ("order_now_list08_menu_box", "6");


 


//order_now_nav
//주문내역 네비게이션
//order_now_nav01
//주문내역 네비게이션 01번 영역
Obj_Make (1, "order_now_nav", "order_now_nav01", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav01", "order_now_nav01_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav01", "order_now_nav01_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav02
//주문내역 네비게이션 02번 영역
Obj_Make (1, "order_now_nav", "order_now_nav02", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav02", "order_now_nav02_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav02", "order_now_nav02_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav03
//주문내역 네비게이션 03번 영역
Obj_Make (1, "order_now_nav", "order_now_nav03", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav03", "order_now_nav03_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav03", "order_now_nav03_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav04
//주문내역 네비게이션 04번 영역
Obj_Make (1, "order_now_nav", "order_now_nav04", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav04", "order_now_nav04_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav04", "order_now_nav04_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav05
//주문내역 네비게이션 05번 영역
Obj_Make (1, "order_now_nav", "order_now_nav05", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav05", "order_now_nav05_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav05", "order_now_nav05_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav06
//주문내역 네비게이션 06번 영역
Obj_Make (1, "order_now_nav", "order_now_nav06", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav06", "order_now_nav06_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav06", "order_now_nav06_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

//order_now_nav07
//주문내역 네비게이션 07번 영역
Obj_Make (1, "order_now_nav", "order_now_nav07", "0", "0", "24", "23", "", "");
Obj_Make (4, "order_now_nav07", "order_now_nav07_on_img", "0", "0", "24", "23", "image/bottom_location_y.png", "");
Obj_Make (4, "order_now_nav07", "order_now_nav07_off_img", "0", "0", "24", "23", "image/bottom_location_n.png", "");

Obj_Class ("order_now_nav01", "main_order_nav");
Obj_Class ("order_now_nav02", "main_order_nav");
Obj_Class ("order_now_nav03", "main_order_nav");
Obj_Class ("order_now_nav04", "main_order_nav");
Obj_Class ("order_now_nav05", "main_order_nav");
Obj_Class ("order_now_nav06", "main_order_nav");
Obj_Class ("order_now_nav07", "main_order_nav");

Obj_AB_RE("order_now_nav01", "2");
Obj_AB_RE("order_now_nav02", "2");
Obj_AB_RE("order_now_nav03", "2");
Obj_AB_RE("order_now_nav04", "2");
Obj_AB_RE("order_now_nav05", "2");
Obj_AB_RE("order_now_nav06", "2");
Obj_AB_RE("order_now_nav07", "2");



/* ====================================== click_arrow structure ====================================== */
//클릭하세요.
//한국어
Obj_Make (4, "base_menu", "click_arrow", "670", "10", "222", "36", "image/click_arrow_kr.png", "");
Obj_Ani ("click_arrow", "flash", "", "3", "4", "0", "");



/* ====================================== menu structure ====================================== */
//base_menu
//메뉴 네비게이션 영역
Obj_Make (1, "base_menu", "menu_nav", "25", "1111", "1030", "79", "", "");

//메뉴 페이지 및 메뉴버튼 노출 영역
Obj_Make (1, "base_menu", "menu_box", "0", "0", "1080", "1115", "", "");
Obj_Overflow ("menu_box", "1");

//menu_nav
//메뉴 네비게이션 표시부 노출영역
Obj_Make (1, "menu_nav", "menu_nav_page", "0", "26", "1021", "34", "", "");
Obj_Class ("menu_nav_page", "flex_r_center_box");

//메뉴 네비게이션 이전 버튼
Obj_Make (2, "menu_nav", "menu_nav_prev_btn", "0", "0", "244", "70", "BTN;menu_nav_prev_btn;", "");
//메뉴 네비게이션 다음 버튼
Obj_Make (2, "menu_nav", "menu_nav_next_btn", "786", "0", "244", "70", "BTN;menu_nav_next_btn;", "");
//버튼 그림자
Obj_Shadow_XY ("menu_nav_prev_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Shadow_XY ("menu_nav_next_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//menu_nav_prev_btn
//메뉴 네비게이션 이전 버튼 요소
Obj_Background ("menu_nav_prev_btn", "2", "image/main_prev_n.png");
Btn_Click ("menu_nav_prev_btn", "0", "0", "244", "70", "image/main_prev_y.png", "");
Obj_Make (4, "menu_nav_prev_btn", "menu_nav_prev_dis_img", "0", "0", "244", "70", "image/main_prev_d.png", "");
// Obj_View ("menu_nav_prev_dis_img", "2");
//메뉴 네비게이션 이전 버튼 텍스트
Obj_Make (3, "menu_nav_prev_btn", "menu_nav_prev_txt", "54", "2", "190", "55", "이전", "");
Txt_Font ("menu_nav_prev_txt", "3", "30", "#ffffff", "", "", "", "");
Obj_Shadow ("menu_nav_prev_txt", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("menu_nav_prev_btn", "2", "2");
Btn_Enable ("menu_nav_prev_btn", "2");

//menu_nav_next_btn
//메뉴 네비게이션 다음 버튼 요소
Obj_Background ("menu_nav_next_btn", "2", "image/main_next_n.png");
Btn_Click ("menu_nav_next_btn", "0", "0", "244", "70", "image/main_next_y.png", "");
Obj_Make (4, "menu_nav_next_btn", "menu_nav_next_dis_img", "0", "0", "244", "70", "image/main_next_d.png", "");
Obj_View ("menu_nav_next_dis_img", "2");
//메뉴 네비게이션 다음 버튼 텍스트
Obj_Make (3, "menu_nav_next_btn", "menu_nav_next_txt", "0", "0", "190", "55", "다음", "");
Txt_Font ("menu_nav_next_txt", "3", "30", "#ffffff", "", "", "", "");
Obj_Shadow ("menu_nav_next_txt", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("menu_nav_next_btn", "2", "2");

//menu_nav_page
//메뉴 네비게이션 페이지별 div
//menu_nav_p01
//메뉴 네비게이션 01번
Obj_Make (1, "menu_nav_page", "menu_nav_p01", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p01", "menu_nav_p01_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p01", "menu_nav_p01_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p02
//메뉴 네비게이션 02번
Obj_Make (1, "menu_nav_page", "menu_nav_p02", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p02", "menu_nav_p02_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p02", "menu_nav_p02_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p03
//메뉴 네비게이션 03번
Obj_Make (1, "menu_nav_page", "menu_nav_p03", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p03", "menu_nav_p03_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p03", "menu_nav_p03_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p04
//메뉴 네비게이션 04번
Obj_Make (1, "menu_nav_page", "menu_nav_p04", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p04", "menu_nav_p04_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p04", "menu_nav_p04_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p05
//메뉴 네비게이션 05번
Obj_Make (1, "menu_nav_page", "menu_nav_p05", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p05", "menu_nav_p05_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p05", "menu_nav_p05_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p06
//메뉴 네비게이션 06번
Obj_Make (1, "menu_nav_page", "menu_nav_p06", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p06", "menu_nav_p06_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p06", "menu_nav_p06_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//menu_nav_p07
//메뉴 네비게이션 07번
Obj_Make (1, "menu_nav_page", "menu_nav_p07", "0", "0", "33", "34", "", "");
Obj_Make (4, "menu_nav_p07", "menu_nav_p07_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "menu_nav_p07", "menu_nav_p07_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

Obj_Class ("menu_nav_p01", "main_nav");
Obj_Class ("menu_nav_p02", "main_nav");
Obj_Class ("menu_nav_p03", "main_nav");
Obj_Class ("menu_nav_p04", "main_nav");
Obj_Class ("menu_nav_p05", "main_nav");
Obj_Class ("menu_nav_p06", "main_nav");
Obj_Class ("menu_nav_p07", "main_nav");

Obj_AB_RE("menu_nav_p01", "2");
Obj_AB_RE("menu_nav_p02", "2");
Obj_AB_RE("menu_nav_p03", "2");
Obj_AB_RE("menu_nav_p04", "2");
Obj_AB_RE("menu_nav_p05", "2");
Obj_AB_RE("menu_nav_p06", "2");
Obj_AB_RE("menu_nav_p07", "2");


// 4 x 3 ---------------------------------------------------------------------------------------------------

// 6 x 4 ---------------------------------------------------------------------------------------------------




/* ======================================= 슬라이드 메뉴부 structure ====================================== */
//배경 바닥과 검정 그라데이션 ------------------------------------------------------------------------------//
Obj_Background ("base_slide", "2", "image/main_slide_bak.png");
Obj_Background ("base_slide_bgr", "2", "image/main_slide_bgr.png");
Obj_Overflow ("base_slide", "1");

//배경 패턴 -----------------------------------------------------------------------------------------------//
Obj_Make (1, "base_slide", "sl_pattern", "0", "0", "1080", "646", "", "");
Obj_Background ("sl_pattern", "2", "image/main_slide_pattern.png");



//카테고리 메뉴 영역 -------------------------------------------------------------------------------------------//
Obj_Make (1, "base_slide", "sl_menu", "0", "453", "1080", "998", "", "");

//추천메뉴 영역 -------------------------------------------------------------------------------------------//
Obj_Make (1, "base_slide", "sl_banner", "0", "215", "1080", "238", "", "");

//메뉴 네비게이션 영역 ------------------------------------------------------------------------------------//
Obj_Make (1, "base_slide", "sl_nav", "60", "1435", "961", "80", "", "");

//카테고리 메뉴 버튼 및 닫기 버튼 영역 -------------------------------------------------------------------------//
Obj_Make (1, "base_slide", "sl_toggle_btn", "430", "1582", "220", "70", "", "");





//추천메뉴 영역 -------------------------------------------------------------------------------------------//
Obj_Make (2, "sl_banner", "sl_banner_btn", "30", "0", "1020", "238", "BTN;sl_banner_btn;", "");
Obj_Background ("sl_banner_btn", "2", "image/main_slide_banner02_n.png");
Btn_Click ("sl_banner_btn", "0", "0", "1020", "238", "image/main_slide_banner02_y.png", "");



//카테고리 메뉴 영역 -------------------------------------------------------------------------------------------//
//타이틀 
Obj_Make (1, "sl_menu", "sl_menu_title", "0", "0", "1080", "175", "", "");
Obj_Background ("sl_menu_title", "2", "image/main_slide_title_bg.png");
Obj_Make (4, "sl_menu_title", "sl_menu_title_light", "13", "-225", "848", "540", "image/main_slide_light.png", "");
Obj_Ani ("sl_menu_title_light", "band_eff3", "", "3", "6", "0", "");
Obj_Make (4, "sl_menu_title", "sl_menu_title_txt", "328", "27", "428", "95", "image/main_slide_title.png", "");
Obj_Make (4, "sl_menu_title", "sl_menu_title_txt_big", "267", "45", "550", "125", "image/main_slide_title_big.png", "");


//카테고리 메뉴
//카테고리 메뉴 페이지 노출 영역
Obj_Make (1, "sl_menu", "sl_menu_box", "0", "175", "2160", "1065", "", "");
Obj_Overflow ("sl_menu_box", "1");

//카테고리 메뉴 01, 02, 03 페이지 버튼 영역 
Obj_Make (1, "sl_menu_box", "sl_menu_box_p01", "0060", "0", "1000", "100", "", "");
Obj_Make (1, "sl_menu_box", "sl_menu_box_p02", "1140", "0", "1000", "100", "", "");
Obj_Make (1, "sl_menu_box", "sl_menu_box_p03", "2220", "0", "1000", "100", "", "");

Obj_Class ("sl_menu_box_p01", "flex_container_wrap");
Obj_Class ("sl_menu_box_p02", "flex_container_wrap");
Obj_Class ("sl_menu_box_p03", "flex_container_wrap");



//카테고리 메뉴 01페이지 버튼 리스트 영역
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0101_btn", "0", "0", "469", "130", "sl_menu_box_p0101_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0102_btn", "0", "0", "469", "130", "sl_menu_box_p0102_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0103_btn", "0", "0", "469", "130", "sl_menu_box_p0103_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0104_btn", "0", "0", "469", "130", "sl_menu_box_p0104_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0105_btn", "0", "0", "469", "130", "sl_menu_box_p0105_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0106_btn", "0", "0", "469", "130", "sl_menu_box_p0106_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0107_btn", "0", "0", "469", "130", "sl_menu_box_p0107_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0108_btn", "0", "0", "469", "130", "sl_menu_box_p0108_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0109_btn", "0", "0", "469", "130", "sl_menu_box_p0109_btn;", "");
Obj_Make (2, "sl_menu_box_p01", "sl_menu_box_p0110_btn", "0", "0", "469", "130", "sl_menu_box_p0110_btn;", "");

Obj_Class ("sl_menu_box_p0101_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0102_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0103_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0104_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0105_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0106_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0107_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0108_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0109_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0110_btn", "sl_menu");

Obj_AB_RE("sl_menu_box_p0101_btn", "2");
Obj_AB_RE("sl_menu_box_p0102_btn", "2");
Obj_AB_RE("sl_menu_box_p0103_btn", "2");
Obj_AB_RE("sl_menu_box_p0104_btn", "2");
Obj_AB_RE("sl_menu_box_p0105_btn", "2");
Obj_AB_RE("sl_menu_box_p0106_btn", "2");
Obj_AB_RE("sl_menu_box_p0107_btn", "2");
Obj_AB_RE("sl_menu_box_p0108_btn", "2");
Obj_AB_RE("sl_menu_box_p0109_btn", "2");
Obj_AB_RE("sl_menu_box_p0110_btn", "2");


//버튼 0101
//배경
Obj_Make (4, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0101_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0101_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0101_btn_rec", "sl_menu_box_p0101_btn_rec_img", "0", "0", "130", "130", "image/sample_img_01.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0101_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0101_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0101_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0101_btn", "sl_menu_box_p0101_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0101_btn_tbox", "sl_menu_box_p0101_btn_txt", "0", "0", "319", "130", "에스프레소", "");
Txt_Font ("sl_menu_box_p0101_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0101_btn_tbox", "2", "2");

//버튼 0102
//배경
Obj_Make (4, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg02.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0102_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0102_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0102_btn_rec", "sl_menu_box_p0102_btn_rec_img", "0", "0", "130", "130", "image/sample_img_02.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0102_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0102_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0102_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0102_btn", "sl_menu_box_p0102_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0102_btn_tbox", "sl_menu_box_p0102_btn_txt", "0", "0", "319", "130", "라떼", "");
Txt_Font ("sl_menu_box_p0102_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0102_btn_tbox", "2", "2");

//버튼 0103
//배경
Obj_Make (4, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg03.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0103_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0103_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0103_btn_rec", "sl_menu_box_p0103_btn_rec_img", "0", "0", "130", "130", "image/sample_img_03.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0103_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0103_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0103_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0103_btn", "sl_menu_box_p0103_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0103_btn_tbox", "sl_menu_box_p0103_btn_txt", "0", "0", "319", "130", "콜드 브루", "");
Txt_Font ("sl_menu_box_p0103_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0103_btn_tbox", "2", "2");

//버튼 0104
//배경
Obj_Make (4, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0104_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0104_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0104_btn_rec", "sl_menu_box_p0104_btn_rec_img", "0", "0", "130", "130", "image/sample_img_04.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0104_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0104_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0104_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0104_btn", "sl_menu_box_p0104_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0104_btn_tbox", "sl_menu_box_p0104_btn_txt", "0", "0", "319", "130", "프라푸치노", "");
Txt_Font ("sl_menu_box_p0104_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0104_btn_tbox", "2", "2");

//버튼 0105
//배경
Obj_Make (4, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg02.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0105_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0105_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0105_btn_rec", "sl_menu_box_p0105_btn_rec_img", "0", "0", "130", "130", "image/sample_img_05.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0105_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0105_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0105_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0105_btn", "sl_menu_box_p0105_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0105_btn_tbox", "sl_menu_box_p0105_btn_txt", "0", "0", "319", "130", "블렌디드", "");
Txt_Font ("sl_menu_box_p0105_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0105_btn_tbox", "2", "2");

//버튼 0106
//배경
Obj_Make (4, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg03.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0106_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0106_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0106_btn_rec", "sl_menu_box_p0106_btn_rec_img", "0", "0", "130", "130", "image/sample_img_01.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0106_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0106_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0106_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0106_btn", "sl_menu_box_p0106_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0106_btn_tbox", "sl_menu_box_p0106_btn_txt", "0", "0", "319", "130", "티", "");
Txt_Font ("sl_menu_box_p0106_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0106_btn_tbox", "2", "2");

//버튼 0107
//배경
Obj_Make (4, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0107_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0107_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0107_btn_rec", "sl_menu_box_p0107_btn_rec_img", "0", "0", "130", "130", "image/sample_img_02.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0107_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0107_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0107_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0107_btn", "sl_menu_box_p0107_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0107_btn_tbox", "sl_menu_box_p0107_btn_txt", "0", "0", "319", "130", "생과일", "");
Txt_Font ("sl_menu_box_p0107_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0107_btn_tbox", "2", "2");

//버튼 0108
//배경
Obj_Make (4, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg02.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0108_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0108_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0108_btn_rec", "sl_menu_box_p0108_btn_rec_img", "0", "0", "130", "130", "image/sample_img_03.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0108_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0108_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0108_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0108_btn", "sl_menu_box_p0108_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0108_btn_tbox", "sl_menu_box_p0108_btn_txt", "0", "0", "319", "130", "주스", "");
Txt_Font ("sl_menu_box_p0108_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0108_btn_tbox", "2", "2");

//버튼 0109
//배경
Obj_Make (4, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg03.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0109_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0109_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0109_btn_rec", "sl_menu_box_p0109_btn_rec_img", "0", "0", "130", "130", "image/sample_img_04.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0109_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0109_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0109_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0109_btn", "sl_menu_box_p0109_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0109_btn_tbox", "sl_menu_box_p0109_btn_txt", "0", "0", "319", "130", "과일 & 요거트", "");
Txt_Font ("sl_menu_box_p0109_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0109_btn_tbox", "2", "2");

//버튼 0110
//배경
Obj_Make (4, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0110_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0110_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0110_btn_rec", "sl_menu_box_p0110_btn_rec_img", "0", "0", "130", "130", "image/sample_img_05.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0110_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0110_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0110_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0110_btn", "sl_menu_box_p0110_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0110_btn_tbox", "sl_menu_box_p0110_btn_txt", "0", "0", "319", "130", "아이스크림", "");
Txt_Font ("sl_menu_box_p0110_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0110_btn_tbox", "2", "2");



//카테고리 메뉴 02페이지 버튼 리스트 영역
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0201_btn", "0", "0", "469", "130", "sl_menu_box_p0201_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0202_btn", "0", "0", "469", "130", "sl_menu_box_p0202_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0203_btn", "0", "0", "469", "130", "sl_menu_box_p0203_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0204_btn", "0", "0", "469", "130", "sl_menu_box_p0204_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0205_btn", "0", "0", "469", "130", "sl_menu_box_p0205_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0206_btn", "0", "0", "469", "130", "sl_menu_box_p0206_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0207_btn", "0", "0", "469", "130", "sl_menu_box_p0207_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0208_btn", "0", "0", "469", "130", "sl_menu_box_p0208_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0209_btn", "0", "0", "469", "130", "sl_menu_box_p0209_btn;", "");
Obj_Make (2, "sl_menu_box_p02", "sl_menu_box_p0210_btn", "0", "0", "469", "130", "sl_menu_box_p0210_btn;", "");

Obj_Class ("sl_menu_box_p0201_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0202_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0203_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0204_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0205_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0206_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0207_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0208_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0209_btn", "sl_menu");
Obj_Class ("sl_menu_box_p0210_btn", "sl_menu");

Obj_AB_RE("sl_menu_box_p0201_btn", "2");
Obj_AB_RE("sl_menu_box_p0202_btn", "2");
Obj_AB_RE("sl_menu_box_p0203_btn", "2");
Obj_AB_RE("sl_menu_box_p0204_btn", "2");
Obj_AB_RE("sl_menu_box_p0205_btn", "2");
Obj_AB_RE("sl_menu_box_p0206_btn", "2");
Obj_AB_RE("sl_menu_box_p0207_btn", "2");
Obj_AB_RE("sl_menu_box_p0208_btn", "2");
Obj_AB_RE("sl_menu_box_p0209_btn", "2");
Obj_AB_RE("sl_menu_box_p0210_btn", "2");


//버튼 0201
//배경
Obj_Make (4, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0201_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0201_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0201_btn_rec", "sl_menu_box_p0201_btn_rec_img", "0", "0", "130", "130", "image/sample_img_01.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0201_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0201_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0201_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0201_btn", "sl_menu_box_p0201_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0201_btn_tbox", "sl_menu_box_p0201_btn_txt", "0", "0", "319", "130", "에스프레소", "");
Txt_Font ("sl_menu_box_p0201_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0201_btn_tbox", "2", "2");

//버튼 0202
//배경
Obj_Make (4, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg02.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0202_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0202_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0202_btn_rec", "sl_menu_box_p0202_btn_rec_img", "0", "0", "130", "130", "image/sample_img_02.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0202_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0202_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0202_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0202_btn", "sl_menu_box_p0202_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0202_btn_tbox", "sl_menu_box_p0202_btn_txt", "0", "0", "319", "130", "라떼", "");
Txt_Font ("sl_menu_box_p0202_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0202_btn_tbox", "2", "2");

//버튼 0203
//배경
Obj_Make (4, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg03.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0203_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0203_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0203_btn_rec", "sl_menu_box_p0203_btn_rec_img", "0", "0", "130", "130", "image/sample_img_03.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0203_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0203_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0203_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0203_btn", "sl_menu_box_p0203_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0203_btn_tbox", "sl_menu_box_p0203_btn_txt", "0", "0", "319", "130", "콜드브루", "");
Txt_Font ("sl_menu_box_p0203_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0203_btn_tbox", "2", "2");

//버튼 0204
//배경
Obj_Make (4, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg01.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0204_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0204_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0204_btn_rec", "sl_menu_box_p0204_btn_rec_img", "0", "0", "130", "130", "image/sample_img_04.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0204_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0204_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0204_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0204_btn", "sl_menu_box_p0204_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0204_btn_tbox", "sl_menu_box_p0204_btn_txt", "0", "0", "319", "130", "프라프치노", "");
Txt_Font ("sl_menu_box_p0204_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0204_btn_tbox", "2", "2");

//버튼 0205
//배경
Obj_Make (4, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg02.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0205_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0205_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0205_btn_rec", "sl_menu_box_p0205_btn_rec_img", "0", "0", "130", "130", "image/sample_img_05.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0205_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0205_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0205_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0205_btn", "sl_menu_box_p0205_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0205_btn_tbox", "sl_menu_box_p0205_btn_txt", "0", "0", "319", "130", "블렌디드", "");
Txt_Font ("sl_menu_box_p0205_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0205_btn_tbox", "2", "2");

//버튼 0206
//배경
Obj_Make (4, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_bg", "130", "0", "339", "130", "image/sl_menu_box_bg03.png", "");
//이미지
Obj_Make (1, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_rec", "0", "0", "130", "130", "", "");
Obj_Background ("sl_menu_box_p0206_btn_rec", "1", "#eeeeee");
Obj_Overflow ("sl_menu_box_p0206_btn_rec", "1");
Obj_Make (4, "sl_menu_box_p0206_btn_rec", "sl_menu_box_p0206_btn_rec_img", "0", "0", "130", "130", "image/sample_img_01.png", "");
//라인
Obj_Make (1, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_line", "129", "0", "1", "130", "", "");
Obj_Background ("sl_menu_box_p0206_btn_line", "1", "rgba(0,0,0,0.07)");
//그라데이션
Obj_Make (4, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_gr", "0", "0", "469", "130", "image/sl_menu_box_gr.png", "");
// Btn_Click ("sl_menu_box_p0206_btn", "0", "0", "469", "130", "image/sl_menu_box_gr_y.png", "");
//테두리 음영
Obj_Make (1, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_light", "0", "0", "469", "130", "", "");
Obj_Class ("sl_menu_box_p0206_btn_light", "sl_menu_box_border");
//텍스트
Obj_Make (1, "sl_menu_box_p0206_btn", "sl_menu_box_p0206_btn_tbox", "140", "0", "319", "130", "", "");
Obj_Make (3, "sl_menu_box_p0206_btn_tbox", "sl_menu_box_p0206_btn_txt", "0", "0", "319", "130", "티", "");
Txt_Font ("sl_menu_box_p0206_btn_txt", "3", "28", "#333333", "", "", "", "");
//가로, 세로 중앙 정렬
Div_Txt_Align ("sl_menu_box_p0206_btn_tbox", "2", "2");





//메뉴 네비게이션 영역 ------------------------------------------------------------------------------------//
//sl_nav
//메뉴 네비게이션 표시부 노출영역
Obj_Make (1, "sl_nav", "sl_nav_page", "7", "33", "961", "34", "", "");
Obj_Class ("sl_nav_page", "flex_r_center_box");

//메뉴 네비게이션 이전 버튼
Obj_Make (2, "sl_nav", "sl_nav_prev_btn", "0", "0", "245", "95", "BTN;sl_nav_prev_btn;", "");
//메뉴 네비게이션 다음 버튼
Obj_Make (2, "sl_nav", "sl_nav_next_btn", "717", "0", "245", "95", "BTN;sl_nav_next_btn;", "");
//버튼 그림자
Obj_Shadow_XY ("sl_nav_prev_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Shadow_XY ("sl_nav_next_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//sl_nav_prev_btn
//메뉴 네비게이션 이전 버튼 요소
Obj_Background ("sl_nav_prev_btn", "2", "image/slide_prev_btn_n.png");
Btn_Click ("sl_nav_prev_btn", "0", "0", "245", "95", "image/slide_prev_btn_y.png", "rgba(255,255,255,0.7)");
Obj_Make (4, "sl_nav_prev_btn", "sl_nav_prev_dis_img", "0", "0", "245", "95", "image/slide_prev_btn_d.png", "");
// Obj_View ("sl_nav_prev_dis_img", "2");
//메뉴 네비게이션 이전 버튼 텍스트
Obj_Make (3, "sl_nav_prev_btn", "sl_nav_prev_txt", "54", "2", "190", "95", "이전", "");
Txt_Font ("sl_nav_prev_txt", "3", "34", "#ffffff", "", "", "", "");
Obj_Shadow ("sl_nav_prev_txt", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("sl_nav_prev_btn", "2", "2");
Btn_Enable ("sl_nav_prev_btn", "2");

//sl_nav_next_btn
//메뉴 네비게이션 다음 버튼 요소
Obj_Background ("sl_nav_next_btn", "2", "image/slide_next_btn_n.png");
Btn_Click ("sl_nav_next_btn", "0", "0", "245", "95", "image/slide_next_btn_y.png", "rgba(255,255,255,0.7)");
Obj_Make (4, "sl_nav_next_btn", "sl_nav_next_dis_img", "0", "0", "245", "95", "image/slide_next_btn_d.png", "");
Obj_View ("sl_nav_next_dis_img", "2");
//메뉴 네비게이션 다음 버튼 텍스트
Obj_Make (3, "sl_nav_next_btn", "sl_nav_next_txt", "0", "0", "190", "95", "다음", "");
Txt_Font ("sl_nav_next_txt", "3", "34", "#ffffff", "", "", "", "");
Obj_Shadow ("sl_nav_next_txt", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("sl_nav_next_btn", "2", "2");

//sl_nav_page
//메뉴 네비게이션 페이지별 div
//sl_nav_p01
//메뉴 네비게이션 01번
Obj_Make (1, "sl_nav_page", "sl_nav_p01", "0", "0", "33", "34", "", "");
Obj_Make (4, "sl_nav_p01", "sl_nav_p01_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "sl_nav_p01", "sl_nav_p01_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//sl_nav_p02
//메뉴 네비게이션 02번
Obj_Make (1, "sl_nav_page", "sl_nav_p02", "0", "0", "33", "34", "", "");
Obj_Make (4, "sl_nav_p02", "sl_nav_p02_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "sl_nav_p02", "sl_nav_p02_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

//sl_nav_p03
//메뉴 네비게이션 03번
Obj_Make (1, "sl_nav_page", "sl_nav_p03", "0", "0", "33", "34", "", "");
Obj_Make (4, "sl_nav_p03", "sl_nav_p03_on_img", "0", "0", "33", "34", "image/menu_location_y.png", "");
Obj_Make (4, "sl_nav_p03", "sl_nav_p03_off_img", "0", "0", "33", "34", "image/menu_location_n.png", "");

Obj_Class ("sl_nav_p01", "sl_nav");
Obj_Class ("sl_nav_p02", "sl_nav");
Obj_Class ("sl_nav_p03", "sl_nav");

Obj_AB_RE("sl_nav_p01", "2");
Obj_AB_RE("sl_nav_p02", "2");
Obj_AB_RE("sl_nav_p03", "2");


//카테고리 메뉴 버튼 및 닫기 버튼 영역 -------------------------------------------------------------------------//
//닫기
//sl_toggle_btn_close
Obj_Make (2, "sl_toggle_btn", "sl_toggle_btn_close_btn", "0", "0", "220", "70", "BTN;sl_toggle_btn_close_btn;", "");
Obj_Opacity ("sl_toggle_btn_close_btn", "0");

Obj_Make (1, "sl_toggle_btn_close_btn", "sl_toggle_btn_close_btn_box", "0", "0", "0", "0", "", "");
Obj_Make (4, "sl_toggle_btn_close_btn_box", "sl_toggle_btn_close_btn_box_img", "0", "0", "35", "35", "image/main_slide_icon_close.png", "");
Obj_Make (3, "sl_toggle_btn_close_btn_box", "sl_toggle_btn_close_btn_box_txt", "15", "-8", "", "", "닫기", "");
Txt_Font ("sl_toggle_btn_close_btn_box_txt", "3", "28", "#dfffe0", "", "2", "", "");
Obj_Shadow_XY("sl_toggle_btn_close_btn_box_txt", "1", "1", "3", "rgba(0, 0, 0, 0.5)");

Div_HV_Center("sl_toggle_btn_close_btn_box", "2", "50", "50");
Obj_AB_RE("sl_toggle_btn_close_btn_box", "1");
Obj_AB_RE("sl_toggle_btn_close_btn_box_img", "2");
Obj_AB_RE("sl_toggle_btn_close_btn_box_txt", "2");

//카테고리 메뉴 
//sl_toggle_btn_menu
Obj_Make (2, "sl_toggle_btn", "sl_toggle_btn_menu_btn", "0", "0", "220", "70", "BTN;sl_toggle_btn_menu_btn;", "");
Obj_Opacity ("sl_toggle_btn_menu_btn", "0");

Obj_Make (1, "sl_toggle_btn_menu_btn", "sl_toggle_btn_menu_btn_box", "0", "0", "0", "0", "", "");
Obj_Make (4, "sl_toggle_btn_menu_btn_box", "sl_toggle_btn_menu_btn_box_img", "0", "0", "35", "35", "image/main_slide_icon_menu.png", "");
Obj_Make (3, "sl_toggle_btn_menu_btn_box", "sl_toggle_btn_menu_btn_box_txt", "15", "-8", "", "", "전체메뉴", "");
Txt_Font ("sl_toggle_btn_menu_btn_box_txt", "3", "28", "#dfffe0", "", "2", "", "");
Obj_Shadow_XY("sl_toggle_btn_menu_btn_box_txt", "1", "1", "3", "rgba(0, 0, 0, 0.5)");

Div_HV_Center("sl_toggle_btn_menu_btn_box", "2", "50", "50");
Obj_AB_RE("sl_toggle_btn_menu_btn_box", "1");
Obj_AB_RE("sl_toggle_btn_menu_btn_box_img", "2");
Obj_AB_RE("sl_toggle_btn_menu_btn_box_txt", "2");

//메뉴 ON, 닫기 OFF
Obj_View ("sl_toggle_btn_menu_btn", "1");
Obj_View ("sl_toggle_btn_close_btn", "2");





//일반메뉴
Obj_Position ("sl_menu", "0", "355");
Obj_Position ("sl_menu_title", "0", "-90");
Obj_Position ("sl_menu_title_light", "-58", "-210");
Obj_View ("sl_menu_title_txt", "2");
Obj_View ("sl_menu_title_txt_big", "1");
Obj_View ("sl_banner", "2");






/* ===================================== pop_mn structure ====================================== */
//기본 팝업
//pop_mn
Obj_Make (1, "screen_default", "pop_mn", "10", "350", "988", "659", "1", "");
Obj_Background ("pop_mn", "2", "image/pop_mn_board.png");
Obj_Overflow ("pop_mn_back", "1");

//pop_mn_photo
//팝업 메뉴사진 영역
Obj_Make (1, "pop_mn", "pop_mn_photo", "44", "40", "296", "296", "", "");
Obj_Radius ("pop_mn_photo", "6");
Obj_Overflow ("pop_mn_photo", "1");
Obj_Background ("pop_mn_photo", "1", "#082c5d");

//팝업 메뉴사진 이미지
Obj_Make (4, "pop_mn_photo", "pop_mn_photo_img", "0", "0", "296", "296", "image/noimage_w.png", "");
Obj_Make (4, "pop_mn", "pop_mn_photo_cover_img", "44", "40", "297", "297", "image/pop_mn_imgbox_light.png", "");

//팝업 메뉴정보 영역
Obj_Make (1, "pop_mn", "pop_mn_info", "366", "40", "568", "392", "", "");
//pop_mn_title
//팝업 메뉴 타이틀 텍스트
Obj_Make (1, "pop_mn_info", "pop_mn_info_title_over", "0", "0", "568", "45", "", "");
Obj_Overflow ("pop_mn_info_title_over", "1");
Obj_Make (1, "pop_mn_info_title_over", "pop_mn_info_title_over_box", "0", "0", "568", "45", "", "");
Obj_Make (3, "pop_mn_info_title_over_box", "pop_mn_title_over_box_txt", "0", "0", "", "", "메뉴타이틀메뉴타이틀메뉴타이틀메뉴타이틀", "");
Txt_Font ("pop_mn_title_over_box_txt", "3", "38", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("pop_mn_title_over_box_txt", "3", "3", "1", "rgba(0,0,0,0.2)");
Div_Txt_Align ("pop_mn_info_title_over_box", "1", "2");
Obj_Class ("pop_mn_title_over_box_txt", "line_height_12");
// Txt_Fill_Font("pop_mn_title_over_box_txt", "40", "33");

//pop_mn_price
//팝업 메뉴 가격 텍스트
Obj_Make (3, "pop_mn_info", "pop_mn_price_txt", "0", "72", "200", "30", "6,000", "");
Txt_Font ("pop_mn_price_txt", "3", "26", "#000000", "", "1", "", "");
Obj_Shadow_XY ("pop_mn_price_txt", "1", "1", "1", "rgba(255,255,255,0.3)");
Obj_Class ("pop_mn_price_txt", "pop_won");

//pop_mn_info
//팝업 메뉴 세부정보 텍스트
Obj_Make (1, "pop_mn_info", "pop_mn_detail_box", "0", "110", "568", "185", "", "");
Obj_Class ("pop_mn_detail_box", "txt_scrollbar");
Obj_Make (3, "pop_mn_detail_box", "pop_mn_detail_txt", "0", "0", "", "", "메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다.메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. ", ""); //<------ 메뉴설명
Txt_Font ("pop_mn_detail_txt", "2", "18", "#000000", "", "1", "", "");
Obj_Class ("pop_mn_detail_txt", "info_detail");
Txt_Drag_Scroll ("pop_mn_detail_box");

//pop_mn_amt_txt
//팝업 메뉴 총액 텍스트
Obj_Make (3, "pop_mn_info", "pop_mn_amt_txt", "0", "365", "265", "30", "합계금액 :", "");
Txt_Font ("pop_mn_amt_txt", "3", "24", "#000000", "", "1", "", "");

//pop_mn_amt_num
//팝업 메뉴 총액 숫자
Obj_Make (3, "pop_mn_info", "pop_mn_amt_num", "270", "340", "300", "55", "18,000", "");
Txt_Font ("pop_mn_amt_num", "3", "50", "#000000", "", "3", "", "");
Obj_Shadow_XY ("pop_mn_amt_num", "1", "1", "1", "rgba(255,255,255,0.3)");
Obj_Class ("pop_mn_amt_num", "pop_big_won");

//pop_mn_qty
//팝업 메뉴 수량 영역
Obj_Make (1, "pop_mn", "pop_mn_qty", "44", "352", "297", "80", "", "");
//pop_mn_qty_num
//팝업 현재 수량 표시 영역
Obj_Make (1, "pop_mn_qty", "pop_mn_qty_box", "95", "0", "106", "79", "", "");
//팝업 현재 수량 표시 텍스트
Obj_Make (3, "pop_mn_qty_box", "pop_mn_qty_txt", "0", "0", "106", "79", "3", "");
Txt_Font ("pop_mn_qty_txt", "3", "55", "#000000", "", "2", "", "");
Div_Txt_Align ("pop_mn_qty_box", "2", "2");

//pop_mn_qty_minus_btn
//팝업 수량 마이너스 버튼
Obj_Make (2, "pop_mn_qty", "pop_mn_qty_minus_btn", "0", "0", "80", "80", "BTN;pop_mn_qty_minus_btn;", "");
Obj_Radius ("pop_mn_qty_minus_btn", "6");
Obj_Shadow_XY ("pop_mn_qty_minus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_mn_qty_minus_btn", "2", "image/pop_mn_qty_minus_n.png");
Btn_Click ("pop_mn_qty_minus_btn", "0", "0", "80", "80", "image/pop_mn_qty_minus_y.png", "");
Obj_Make (4, "pop_mn_qty_minus_btn", "pop_mn_qty_minus_dis_img", "0", "0", "80", "80", "image/pop_mn_qty_minus_d.png", "");
Obj_View ("pop_mn_qty_minus_dis_img", "2");

//pop_mn_qty_plus_btn
//팝업 수량 플러스 버튼
Obj_Make (2, "pop_mn_qty", "pop_mn_qty_plus_btn", "217", "0", "80", "80", "BTN;pop_mn_qty_plus_btn;", "");
Obj_Radius ("pop_mn_qty_plus_btn", "6");
Obj_Shadow_XY ("pop_mn_qty_plus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_mn_qty_plus_btn", "2", "image/pop_mn_qty_plus_n.png");
Btn_Click ("pop_mn_qty_plus_btn", "0", "0", "80", "80", "image/pop_mn_qty_plus_y.png", "");
Obj_Make (4, "pop_mn_qty_plus_btn", "pop_mn_qty_plus_dis_img", "0", "0", "80", "80", "image/pop_mn_qty_plus_d.png", "");
Obj_View ("pop_mn_qty_plus_dis_img", "2");

//pop_mn_btn_box
//팝업 버튼 영역
Obj_Make (1, "pop_mn", "pop_mn_btn_box", "225", "496", "528", "90", "", "");

//pop_mn_cancel_btn
//팝업 취소 버튼
Obj_Make (2, "pop_mn_btn_box", "pop_mn_cancel_btn", "0", "0", "244", "90", "BTN;pop_mn_cancel_btn;", "");
Obj_Radius ("pop_mn_cancel_btn", "6");
Obj_Shadow_XY ("pop_mn_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_mn_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_mn_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_mn_cancel_btn", "pop_mn_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_mn_cancel_dis_img", "2");
//pop_mn_cancel_txt
//팝업 취소 버튼 텍스트
Obj_Make (3, "pop_mn_cancel_btn", "pop_mn_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_mn_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_mn_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_mn_cancel_btn", "2", "2");
// Btn_Enable ("pop_mn_cancel_btn", "2");

//pop_mn_ok_btn
//팝업 확인 버튼
Obj_Make (2, "pop_mn_btn_box", "pop_mn_ok_btn", "284", "0", "244", "90", "BTN;pop_mn_ok_btn;", "");
Obj_Radius ("pop_mn_ok_btn", "6");
Obj_Shadow_XY ("pop_mn_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_mn_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_mn_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_mn_ok_btn", "pop_mn_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_mn_ok_dis_img", "2");
//pop_mn_ok_txt
//팝업 확인 버튼 텍스트
Obj_Make (3, "pop_mn_ok_btn", "pop_mn_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_mn_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_mn_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_mn_ok_btn", "2", "2");


//팝업 띠 영역
//pop_mn_band
Obj_Make (1, "pop_mn", "pop_mn_band", "24", "7", "136", "103", "", "");

//DC%
Obj_Make (4, "pop_mn_band", "pop_mn_band_d_img", "0", "0", "136", "103", "image/band_discount_cut.png", "");
Obj_Ani ("pop_mn_band_d_img", "band_eff", "", "1", "4", "0", "");
//Hit
Obj_Make (4, "pop_mn_band", "pop_mn_band_h_img", "0", "0", "136", "103", "image/band_hit_cut.png", "");
Obj_Ani ("pop_mn_band_h_img", "band_eff", "", "1", "4", "0", "");
//New
Obj_Make (4, "pop_mn_band", "pop_mn_band_n_img", "0", "0", "136", "103", "image/band_new_cut.png", "");
Obj_Ani ("pop_mn_band_n_img", "band_eff", "", "1", "4", "0", "");

//띠 숨김
Obj_View ("pop_mn_band_d_img", "2");
Obj_View ("pop_mn_band_h_img", "2");
Obj_View ("pop_mn_band_n_img", "1");




/* ===================================== pop_op structure ====================================== */
//기본 팝업 - 옵션 있음
//pop_op
Obj_Make (1, "screen_default", "pop_op", "11", "20", "1068", "1894", "1", "");
Obj_Background ("pop_op", "2", "image/pop_option_board04.png");
Obj_Overflow ("pop_op_back", "1");

//pop_op_photo
//팝업 메뉴사진 영역
Obj_Make (1, "pop_op", "pop_op_photo", "44", "40", "296", "296", "", "");
Obj_Radius ("pop_op_photo", "6");
Obj_Overflow ("pop_op_photo", "1");
Obj_Background ("pop_op_photo", "1", "#082c5d");

//팝업 메뉴사진 이미지
Obj_Make (4, "pop_op_photo", "pop_op_photo_img", "0", "0", "296", "296", "image/noimage_w.png", "");
Obj_Make (4, "pop_op", "pop_op_photo_cover_img", "44", "40", "297", "297", "image/pop_mn_imgbox_light.png", "");


//팝업 메뉴정보 영역
Obj_Make (1, "pop_op", "pop_op_info", "366", "40", "648", "392", "", "");
//pop_op_title
//팝업 메뉴 타이틀 텍스트
Obj_Make (1, "pop_op_info", "pop_op_info_title_over", "0", "0", "648", "45", "", "");
Obj_Overflow ("pop_op_info_title_over", "1");
Obj_Make (1, "pop_op_info_title_over", "pop_op_info_title_over_box", "0", "0", "648", "45", "", "");
Obj_Make (3, "pop_op_info_title_over_box", "pop_op_title_over_box_txt", "0", "0", "", "", "메뉴타이틀메뉴타이틀메뉴타이틀메뉴타이틀", "");
Txt_Font ("pop_op_title_over_box_txt", "3", "38", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("pop_op_title_over_box_txt", "3", "3", "1", "rgba(0,0,0,0.2)");
Div_Txt_Align ("pop_op_info_title_over_box", "1", "2");
Obj_Class ("pop_op_title_over_box_txt", "line_height_12");
// Txt_Fill_Font("pop_op_title_over_box_txt", "40", "33");

//pop_op_price
//팝업 메뉴 가격 텍스트
Obj_Make (3, "pop_op_info", "pop_op_price_txt", "0", "72", "200", "30", "6,000", "");
Txt_Font ("pop_op_price_txt", "3", "26", "#000000", "", "1", "", "");
Obj_Shadow_XY ("pop_op_price_txt", "1", "1", "1", "rgba(255,255,255,0.3)");
Obj_Class ("pop_op_price_txt", "pop_won");

//pop_op_info
//팝업 메뉴 세부정보 텍스트
Obj_Make (1, "pop_op_info", "pop_op_detail_box", "0", "110", "648", "95", "", "");
Obj_Class ("pop_op_detail_box", "txt_scrollbar");
Obj_Make (3, "pop_op_detail_box", "pop_op_detail_txt", "0", "0", "", "", "메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다.메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. ", ""); //<------ 메뉴설명
Txt_Font ("pop_op_detail_txt", "2", "18", "#000000", "", "1", "", "");
Obj_Class ("pop_op_detail_txt", "info_detail");
Txt_Drag_Scroll ("pop_op_detail_box");

//옵션내용 타이틀
Obj_Make (3, "pop_op_info", "pop_op_option_title", "0", "226", "90", "20", "OPTION", "");
Txt_Font ("pop_op_option_title", "3", "14", "#3191d9", "", "2", "", "");

//옵션내용
Obj_Make (3, "pop_op_info", "pop_op_option_con", "10", "253", "630", "37", "큰사이즈, 샷추가2, 생크림토핑, 깔루아시럽, 큰사이즈, 샷추가2, 생크림토핑, 깔루아시럽, 큰사이즈, 샷추가2, 생크림토핑, 깔루아시럽", "");
Txt_Font ("pop_op_option_con", "2", "15", "#000000", "", "1", "", "");
Obj_Class ("pop_op_option_con", "line_height_12");

//옵션내용 합계
Obj_Make (3, "pop_op_info", "pop_op_option_total", "497", "218", "150", "25", "10,500", "");
Txt_Font ("pop_op_option_total", "3", "22", "#000000", "", "3", "", "");
Obj_Class ("pop_op_option_total", "pop_op_option_m_kr");


//pop_op_amt_txt
//팝업 메뉴 총액 텍스트
Obj_Make (3, "pop_op_info", "pop_op_amt_txt", "0", "365", "265", "30", "합계금액 :", "");
Txt_Font ("pop_op_amt_txt", "3", "24", "#000000", "", "1", "", "");

//pop_op_amt
//팝업 메뉴 총액 숫자
Obj_Make (3, "pop_op_info", "pop_op_amt_num", "348", "340", "300", "55", "18,000", "");
Txt_Font ("pop_op_amt_num", "3", "50", "#000000", "", "3", "", "");
Obj_Shadow_XY ("pop_op_amt_num", "1", "1", "1", "rgba(255,255,255,0.3)");
Obj_Class ("pop_op_amt_num", "pop_big_won");

//pop_op_qty
//팝업 메뉴 수량 영역
Obj_Make (1, "pop_op", "pop_op_qty", "44", "352", "297", "80", "", "");
//pop_op_qty_num
//팝업 현재 수량 표시 영역
Obj_Make (1, "pop_op_qty", "pop_op_qty_box", "95", "0", "106", "79", "", "");
//팝업 현재 수량 표시 텍스트
Obj_Make (3, "pop_op_qty_box", "pop_op_qty_txt", "0", "0", "106", "79", "3", "");
Txt_Font ("pop_op_qty_txt", "3", "55", "#000000", "", "2", "", "");
Div_Txt_Align ("pop_op_qty_box", "2", "2");

//pop_op_qty_minus_btn
//팝업 수량 마이너스 버튼
Obj_Make (2, "pop_op_qty", "pop_op_qty_minus_btn", "0", "0", "80", "80", "BTN;pop_op_qty_minus_btn;", "");
Obj_Radius ("pop_op_qty_minus_btn", "6");
Obj_Shadow_XY ("pop_op_qty_minus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_qty_minus_btn", "2", "image/pop_mn_qty_minus_n.png");
Btn_Click ("pop_op_qty_minus_btn", "0", "0", "80", "80", "image/pop_mn_qty_minus_y.png", "");
Obj_Make (4, "pop_op_qty_minus_btn", "pop_op_qty_minus_dis_img", "0", "0", "80", "80", "image/pop_mn_qty_minus_d.png", "");
Obj_View ("pop_op_qty_minus_dis_img", "2");

//pop_op_qty_plus_btn
//팝업 수량 플러스 버튼
Obj_Make (2, "pop_op_qty", "pop_op_qty_plus_btn", "217", "0", "80", "80", "BTN;pop_op_qty_plus_btn;", "");
Obj_Radius ("pop_op_qty_plus_btn", "6");
Obj_Shadow_XY ("pop_op_qty_plus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_qty_plus_btn", "2", "image/pop_mn_qty_plus_n.png");
Btn_Click ("pop_op_qty_plus_btn", "0", "0", "80", "80", "image/pop_mn_qty_plus_y.png", "");
Obj_Make (4, "pop_op_qty_plus_btn", "pop_op_qty_plus_dis_img", "0", "0", "80", "80", "image/pop_mn_qty_plus_d.png", "");
Obj_View ("pop_op_qty_plus_dis_img", "2");


//팝업 띠 영역
//pop_mn_band
Obj_Make (1, "pop_op", "pop_op_band", "24", "7", "136", "103", "", "");

//DC%
Obj_Make (4, "pop_op_band", "pop_op_band_d_img", "0", "0", "136", "103", "image/band_discount_cut.png", "");
Obj_Ani ("pop_op_band_d_img", "band_eff", "", "1", "4", "0", "");
//Hit
Obj_Make (4, "pop_op_band", "pop_op_band_h_img", "0", "0", "136", "103", "image/band_hit_cut.png", "");
Obj_Ani ("pop_op_band_h_img", "band_eff", "", "1", "4", "0", "");
//New
Obj_Make (4, "pop_op_band", "pop_op_band_n_img", "0", "0", "136", "103", "image/band_new_cut.png", "");
Obj_Ani ("pop_op_band_n_img", "band_eff", "", "1", "4", "0", "");

//띠 숨김
Obj_View ("pop_op_band_d_img", "2");
Obj_View ("pop_op_band_h_img", "1");
Obj_View ("pop_op_band_n_img", "2");


//옵션바 아이콘,타이틀,총액 영역
Obj_Make (1, "pop_op", "pop_op_bar_box", "85", "483", "320", "40", "", "");

Obj_Make (3, "pop_op_bar_box", "pop_op_bar_title_txt_shadow", "0", "0", "320", "33", "SELECT AN OPTION", "");
Txt_Font ("pop_op_bar_title_txt_shadow", "3", "34", "rgba(0,0,0,0.4)", "", "1", "", "");
Obj_Class ("pop_op_bar_title_txt_shadow", "choice_gradient_shadow");
//타이틀 
Obj_Make (3, "pop_op_bar_box", "pop_op_bar_title_txt", "1", "1", "320", "33", "SELECT AN OPTION", "");
Txt_Font ("pop_op_bar_title_txt", "3", "34", "#ffffff", "", "1", "", "");
Obj_Class ("pop_op_bar_title_txt", "choice_gradient");


//옵션 STEP 버튼 영역
Obj_Make (1, "pop_op", "pop_op_step", "393", "470", "631", "65", "", "");

//옵션 STEP 버튼 container
Obj_Make (1, "pop_op_step", "pop_op_step_box", "1", "1", "630", "64", "", "");
Obj_Class ("pop_op_step_box", "step_main_box");

//STEP 01 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n01", "0", "0", "64", "64", "BTN;pop_op_step_box_n01;", "");
Obj_Background ("pop_op_step_box_n01", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n01", "pop_op_step_box_n01_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n01", "pop_op_step_box_n01_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n01_dis_img", "2");
Obj_View ("pop_op_step_box_n01_act_img", "2");
Btn_Click ("pop_op_step_box_n01", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n01", "step_num_box");
Obj_Make (3, "pop_op_step_box_n01", "pop_op_step_box_n01_txt", "1", "21", "60", "35", "1", "");
Txt_Font ("pop_op_step_box_n01_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n01", "2");

//STEP 02 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n02", "0", "0", "64", "64", "BTN;pop_op_step_box_n02;", "");
Obj_Background ("pop_op_step_box_n02", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n02", "pop_op_step_box_n02_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n02", "pop_op_step_box_n02_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n02_dis_img", "2");
Obj_View ("pop_op_step_box_n02_act_img", "2");
Btn_Click ("pop_op_step_box_n02", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n02", "step_num_box");
Obj_Make (3, "pop_op_step_box_n02", "pop_op_step_box_n02_txt", "1", "21", "60", "35", "2", "");
Txt_Font ("pop_op_step_box_n02_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n02", "2");

//STEP 03 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n03", "0", "0", "64", "64", "BTN;pop_op_step_box_n03;", "");
Obj_Background ("pop_op_step_box_n03", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n03", "pop_op_step_box_n03_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n03", "pop_op_step_box_n03_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n03_dis_img", "2");
Obj_View ("pop_op_step_box_n03_act_img", "2");
Btn_Click ("pop_op_step_box_n03", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n03", "step_num_box");
Obj_Make (3, "pop_op_step_box_n03", "pop_op_step_box_n03_txt", "1", "21", "60", "35", "3", "");
Txt_Font ("pop_op_step_box_n03_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n03", "2");

//STEP 04 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n04", "0", "0", "64", "64", "BTN;pop_op_step_box_n04;", "");
Obj_Background ("pop_op_step_box_n04", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n04", "pop_op_step_box_n04_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n04", "pop_op_step_box_n04_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n04_dis_img", "2");
Obj_View ("pop_op_step_box_n04_act_img", "2");
Btn_Click ("pop_op_step_box_n04", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n04", "step_num_box");
Obj_Make (3, "pop_op_step_box_n04", "pop_op_step_box_n04_txt", "1", "21", "60", "35", "4", "");
Txt_Font ("pop_op_step_box_n04_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n04", "2");

//STEP 05 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n05", "0", "0", "64", "64", "BTN;pop_op_step_box_n05;", "");
Obj_Background ("pop_op_step_box_n05", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n05", "pop_op_step_box_n05_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n05", "pop_op_step_box_n05_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n05_dis_img", "2");
Obj_View ("pop_op_step_box_n05_act_img", "2");
Btn_Click ("pop_op_step_box_n05", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n05", "step_num_box");
Obj_Make (3, "pop_op_step_box_n05", "pop_op_step_box_n05_txt", "1", "21", "60", "35", "5", "");
Txt_Font ("pop_op_step_box_n05_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n05", "2");

//STEP 06 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n06", "0", "0", "64", "64", "BTN;pop_op_step_box_n06;", "");
Obj_Background ("pop_op_step_box_n06", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n06", "pop_op_step_box_n06_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n06", "pop_op_step_box_n06_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n06_dis_img", "2");
Obj_View ("pop_op_step_box_n06_act_img", "2");
Btn_Click ("pop_op_step_box_n06", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n06", "step_num_box");
Obj_Make (3, "pop_op_step_box_n06", "pop_op_step_box_n06_txt", "1", "21", "60", "35", "6", "");
Txt_Font ("pop_op_step_box_n06_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n06", "2");

//STEP 07 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n07", "0", "0", "64", "64", "BTN;pop_op_step_box_n07;", "");
Obj_Background ("pop_op_step_box_n07", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n07", "pop_op_step_box_n07_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n07", "pop_op_step_box_n07_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n07_dis_img", "2");
Obj_View ("pop_op_step_box_n07_act_img", "2");
Btn_Click ("pop_op_step_box_n07", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n07", "step_num_box");
Obj_Make (3, "pop_op_step_box_n07", "pop_op_step_box_n07_txt", "1", "21", "60", "35", "7", "");
Txt_Font ("pop_op_step_box_n07_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n07", "2");

//STEP 08 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n08", "0", "0", "64", "64", "BTN;pop_op_step_box_n08;", "");
Obj_Background ("pop_op_step_box_n08", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n08", "pop_op_step_box_n08_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n08", "pop_op_step_box_n08_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n08_dis_img", "2");
Obj_View ("pop_op_step_box_n08_act_img", "2");
Btn_Click ("pop_op_step_box_n08", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n08", "step_num_box");
Obj_Make (3, "pop_op_step_box_n08", "pop_op_step_box_n08_txt", "1", "21", "60", "35", "8", "");
Txt_Font ("pop_op_step_box_n08_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n08", "2");

//STEP 09 버튼
Obj_Make (2, "pop_op_step_box", "pop_op_step_box_n09", "0", "0", "64", "64", "BTN;pop_op_step_box_n09;", "");
Obj_Background ("pop_op_step_box_n09", "2", "image/op_step_b_n.png");
Obj_Make (4, "pop_op_step_box_n09", "pop_op_step_box_n09_dis_img", "0", "0", "64", "64", "image/op_step_b_d.png", "");
Obj_Make (4, "pop_op_step_box_n09", "pop_op_step_box_n09_act_img", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_View ("pop_op_step_box_n09_dis_img", "2");
Obj_View ("pop_op_step_box_n09_act_img", "2");
Btn_Click ("pop_op_step_box_n09", "0", "0", "64", "64", "image/op_step_b_y.png", "");
Obj_Class ("pop_op_step_box_n09", "step_num_box");
Obj_Make (3, "pop_op_step_box_n09", "pop_op_step_box_n09_txt", "1", "21", "60", "35", "9", "");
Txt_Font ("pop_op_step_box_n09_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_AB_RE ("pop_op_step_box_n09", "2");

//STEP 버튼 활성화 녹색박스
// Obj_Make (4, "pop_op_step", "pop_op_step_actbox", "1", "0", "62", "62", "image/pop_op_step_actbox.png", "");
Obj_Make (1, "pop_op_step", "pop_op_step_actbox", "2", "0", "56", "56", "", "");
Obj_Class ("pop_op_step_actbox", "op_step_actbox_s");
Obj_Ani ("pop_op_step_actbox", "flash", "0", "1", "3", "0", "");


//STEP 옵션 영역
Obj_Make (1, "pop_op", "pop_op_op_m", "14", "546", "1030", "1160", "", "");
Obj_Overflow ("pop_op_op_m", "1");

//STEP 옵션메뉴 전체 영역
Obj_Make (1, "pop_op_op_m", "op_m_box", "30", "30", "970", "10140", "", "");

//STEP 옵션 박스
Obj_Make (1, "op_m_box", "stepbox01", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox02", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox03", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox04", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox05", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox06", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox07", "0", "000", "970", "260", "", "");
Obj_Make (1, "op_m_box", "stepbox08", "0", "000", "970", "260", "", "");

Obj_Class ("stepbox01", "stepbox_margin");
Obj_Class ("stepbox02", "stepbox_margin");
Obj_Class ("stepbox03", "stepbox_margin");
Obj_Class ("stepbox04", "stepbox_margin");
Obj_Class ("stepbox05", "stepbox_margin");
Obj_Class ("stepbox06", "stepbox_margin");
Obj_Class ("stepbox07", "stepbox_margin");
Obj_Class ("stepbox08", "stepbox_margin");

Obj_AB_RE ("stepbox01", "2");
Obj_AB_RE ("stepbox02", "2");
Obj_AB_RE ("stepbox03", "2");
Obj_AB_RE ("stepbox04", "2");
Obj_AB_RE ("stepbox05", "2");
Obj_AB_RE ("stepbox06", "2");
Obj_AB_RE ("stepbox07", "2");
Obj_AB_RE ("stepbox08", "2");


//STEP 옵션 영역 위, 아래 그라데이션 덮개
Obj_Make (4, "pop_op_op_m", "pop_op_op_mcover_t", "0", "0", "1030", "25", "image/pop_op_mcover_t.png", "");
Obj_Make (4, "pop_op_op_m", "pop_op_op_mcover_b", "0", "1133", "1030", "27", "image/pop_op_mcover_b.png", "");


//STEP 옵션 01 -----------------------------------------------
//활성 전체 테두리 박스
// Obj_Make (1, "stepbox01", "stepbox01_actbox", "-4", "-4", "900", "260", "", "");
// Obj_Class ("stepbox01_actbox", "op_step_actbox");
// Obj_View ("stepbox01_actbox", "2");
// Obj_Make (4, "stepbox01", "stepbox01_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg", "");

// Obj_Svg_Make ("stepbox01", "stepbox01_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg");
// Obj_View ("stepbox01_actbox", "2");

Obj_Make (1, "stepbox01", "stepbox01_actbox", "-4", "-4", "900", "260", "");
Obj_Class ("stepbox01_actbox", "stepbox_actbox_s");
Obj_View ("stepbox01_actbox", "2");



//다음 버튼
Obj_Make (2, "stepbox01", "stepbox01_next_btn", "910", "0", "60", "125", "BTN;stepbox01_next_btn;", "");
Obj_Radius ("stepbox01_next_btn", "6");
Obj_Shadow_XY ("stepbox01_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox01_next_btn", "2", "image/pop_option_next_n.png");
Btn_Click ("stepbox01_next_btn", "0", "0", "60", "125", "image/pop_option_next_y.png", "");
Obj_Make (4, "stepbox01_next_btn", "stepbox01_next_dis_img", "0", "0", "60", "125", "image/pop_option_next_d.png", "");
Obj_View ("stepbox01_next_dis_img", "2");

//이전 버튼
Obj_Make (2, "stepbox01", "stepbox01_prev_btn", "910", "135", "60", "125", "BTN;stepbox01_prev_btn;", "");
Obj_Radius ("stepbox01_prev_btn", "6");
Obj_Shadow_XY ("stepbox01_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox01_prev_btn", "2", "image/pop_option_prev_n.png");
Btn_Click ("stepbox01_prev_btn", "0", "0", "60", "125", "image/pop_option_prev_y.png", "");
Obj_Make (4, "stepbox01_prev_btn", "stepbox01_prev_dis_img", "0", "0", "60", "125", "image/pop_option_prev_d.png", "");
Obj_View ("stepbox01_prev_dis_img", "2");


//타이틀 영역
Obj_Make (1, "stepbox01", "stepbox01_tbox", "0", "0", "185", "260", "", "");
Obj_Background ("stepbox01_tbox", "2", "image/pop_op_step_tbox01_n.png");
//SETP Num
Obj_Make (3, "stepbox01_tbox", "stepbox01_tbox_num", "65", "23", "19", "15", "1", "");
Txt_Font ("stepbox01_tbox_num", "5", "13", "#ffffff", "", "2", "", "");
//타이틀
Obj_Make (3, "stepbox01_tbox", "stepbox01_tbox_txt", "20", "55", "150", "150", "옵션메뉴명1", "");
Txt_Font ("stepbox01_tbox_txt", "3", "26", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("stepbox01_tbox_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
Obj_Class ("stepbox01_tbox_txt", "line_height_11");


//네비게이션 영역
Obj_Make (1, "stepbox01", "stepbox01_nav", "17", "192", "150", "16", "", "");
Obj_Class ("stepbox01_nav", "flex_container");
//01번 영역
Obj_Make (1, "stepbox01_nav", "stepbox01_nav01", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox01_nav01", "stepbox01_nav01_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox01_nav01", "stepbox01_nav01_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//02번 영역
Obj_Make (1, "stepbox01_nav", "stepbox01_nav02", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox01_nav02", "stepbox01_nav02_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox01_nav02", "stepbox01_nav02_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//03번 영역
Obj_Make (1, "stepbox01_nav", "stepbox01_nav03", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox01_nav03", "stepbox01_nav03_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox01_nav03", "stepbox01_nav03_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//04번 영역
Obj_Make (1, "stepbox01_nav", "stepbox01_nav04", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox01_nav04", "stepbox01_nav04_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox01_nav04", "stepbox01_nav04_on", "0", "0", "17", "16", "image/step_location_y.png", "");

Obj_Class ("stepbox01_nav01", "pop_op_step_nav");
Obj_Class ("stepbox01_nav02", "pop_op_step_nav");
Obj_Class ("stepbox01_nav03", "pop_op_step_nav");
Obj_Class ("stepbox01_nav04", "pop_op_step_nav");

Obj_AB_RE("stepbox01_nav01", "2");
Obj_AB_RE("stepbox01_nav02", "2");
Obj_AB_RE("stepbox01_nav03", "2");
Obj_AB_RE("stepbox01_nav04", "2");

Obj_View ("stepbox01_nav01_on", "1");
Obj_View ("stepbox01_nav02_on", "2");
Obj_View ("stepbox01_nav03_on", "2");
Obj_View ("stepbox01_nav04_on", "2");


//선택안함 영역
Obj_Make (1, "stepbox01_tbox", "stepbox01_tbox_noselect", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox01_tbox_noselect", "stepbox01_tbox_noselect_txt", "20", "13", "120", "20", "선택안함", "");
Txt_Font ("stepbox01_tbox_noselect_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox01_tbox_noselect_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//체크표시
Obj_Make (4, "stepbox01_tbox_noselect", "stepbox01_tbox_noselect_check", "141", "10", "28", "28", "image/op_step_check_n.png", "");
//선택안함 버튼
Obj_Make (2, "stepbox01_tbox_noselect", "stepbox01_tbox_noselect_btn", "0", "0", "185", "45", "BTN;stepbox01_tbox_noselect_btn;", "");
Obj_Opacity("stepbox01_tbox_noselect_btn", "0");

//필수선택 영역
Obj_Make (1, "stepbox01_tbox", "stepbox01_tbox_must", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox01_tbox_must", "stepbox01_tbox_must_txt", "20", "13", "120", "20", "필수선택", "");
Txt_Font ("stepbox01_tbox_must_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox01_tbox_must_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//필수선택 아이콘
Obj_Make (4, "stepbox01_tbox_must", "stepbox01_tbox_must_icon", "141", "10", "28", "28", "image/op_step_must.png", "");
Obj_View ("stepbox01_tbox_must", "2");


//메뉴 영역 
Obj_Make (1, "stepbox01", "stepbox01_mbox", "185", "0", "715", "260", "", "");
Obj_Background ("stepbox01_mbox", "2", "image/pop_op_step_mbox.png");
Obj_Overflow ("stepbox01_mbox", "1");


//옵션내역 전체 리스트 영역
Obj_Make (1, "stepbox01_mbox", "stepbox01_list", "25", "20", "1384", "220", "", "");
Obj_Class ("stepbox01_list", "flex_r_start_box");

//옵션내역 리스트별 영역
Obj_Make (1, "stepbox01_list", "stepbox01_list01", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list02", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list03", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list04", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list05", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list06", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list07", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox01_list", "stepbox01_list08", "0", "0", "145", "220", "", "");

Obj_Class ("stepbox01_list01", "pop_op_menu");
Obj_Class ("stepbox01_list02", "pop_op_menu");
Obj_Class ("stepbox01_list03", "pop_op_menu");
Obj_Class ("stepbox01_list04", "pop_op_menu");
Obj_Class ("stepbox01_list05", "pop_op_menu");
Obj_Class ("stepbox01_list06", "pop_op_menu");
Obj_Class ("stepbox01_list07", "pop_op_menu");
Obj_Class ("stepbox01_list08", "pop_op_menu");

Obj_AB_RE ("stepbox01_list01", "2");
Obj_AB_RE ("stepbox01_list02", "2");
Obj_AB_RE ("stepbox01_list03", "2");
Obj_AB_RE ("stepbox01_list04", "2");
Obj_AB_RE ("stepbox01_list05", "2");
Obj_AB_RE ("stepbox01_list06", "2");
Obj_AB_RE ("stepbox01_list08", "2");
Obj_AB_RE ("stepbox01_list07", "2");



//옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list01", "stepbox01_list01_btn", "000", "000", "145", "220", "BTN;stepbox01_list01_btn;", "");
Obj_Class ("stepbox01_list01_btn", "menu_btn");
Obj_Overflow ("stepbox01_list01_btn", "1");
Obj_Background ("stepbox01_list01_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list01_btn", "6");
Obj_Shadow_XY ("stepbox01_list01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list01_btn", "stepbox01_list01_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list01_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list01_overflow", "stepbox01_list01_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list01_overflow", "stepbox01_list01_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list01_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list01_overflow", "stepbox01_list01_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list01_btn", "stepbox01_list01_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list01_btn", "stepbox01_list01_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list01_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list01_title", "stepbox01_list01_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list01_title_over", "1");
Obj_Make (1, "stepbox01_list01_title_over", "stepbox01_list01_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list01_title_over_box", "stepbox01_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list01_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list01_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list01_title", "stepbox01_list01_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list01_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list01_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list01_btn", "stepbox01_list01_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list01_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list01_amt", "stepbox01_list01_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list01_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list01", "stepbox01_list01_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list01_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list01_change", "stepbox01_list01_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list01_change_txtbox", "stepbox01_list01_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list01_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list01_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list01_btn", "stepbox01_list01_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list01_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list01_check_bac", "2");
Obj_View ("stepbox01_list01_check_img", "2");


//옵션내역 02번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list02", "stepbox01_list02_btn", "000", "000", "145", "220", "BTN;stepbox01_list02_btn;", "");
Obj_Class ("stepbox01_list02_btn", "menu_btn");
Obj_Overflow ("stepbox01_list02_btn", "1");
Obj_Background ("stepbox01_list02_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list02_btn", "6");
Obj_Shadow_XY ("stepbox01_list02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list02_btn", "stepbox01_list02_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list02_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list02_overflow", "stepbox01_list02_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list02_overflow", "stepbox01_list02_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list02_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list02_overflow", "stepbox01_list02_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list02_btn", "stepbox01_list02_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list02_btn", "stepbox01_list02_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list02_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list02_title", "stepbox01_list02_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list02_title_over", "1");
Obj_Make (1, "stepbox01_list02_title_over", "stepbox01_list02_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list02_title_over_box", "stepbox01_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list02_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list02_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list02_title", "stepbox01_list02_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list02_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list02_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list02_btn", "stepbox01_list02_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list02_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list02_amt", "stepbox01_list02_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list02_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list02", "stepbox01_list02_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list02_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list02_change", "stepbox01_list02_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list02_change_txtbox", "stepbox01_list02_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list02_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list02_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list02_btn", "stepbox01_list02_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list02_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list02_check_bac", "2");
Obj_View ("stepbox01_list02_check_img", "2");


//옵션내역 03번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list03", "stepbox01_list03_btn", "000", "000", "145", "220", "BTN;stepbox01_list03_btn;", "");
Obj_Class ("stepbox01_list03_btn", "menu_btn");
Obj_Overflow ("stepbox01_list03_btn", "1");
Obj_Background ("stepbox01_list03_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list03_btn", "6");
Obj_Shadow_XY ("stepbox01_list03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list03_btn", "stepbox01_list03_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list03_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list03_overflow", "stepbox01_list03_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list03_overflow", "stepbox01_list03_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list03_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list03_overflow", "stepbox01_list03_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list03_btn", "stepbox01_list03_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list03_btn", "stepbox01_list03_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list03_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list03_title", "stepbox01_list03_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list03_title_over", "1");
Obj_Make (1, "stepbox01_list03_title_over", "stepbox01_list03_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list03_title_over_box", "stepbox01_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list03_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list03_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list03_title", "stepbox01_list03_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list03_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list03_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list03_btn", "stepbox01_list03_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list03_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list03_amt", "stepbox01_list03_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list03_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list03", "stepbox01_list03_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list03_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list03_change", "stepbox01_list03_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list03_change_txtbox", "stepbox01_list03_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list03_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list03_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list03_btn", "stepbox01_list03_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list03_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list03_check_bac", "2");
Obj_View ("stepbox01_list03_check_img", "2");


//옵션내역 04번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list04", "stepbox01_list04_btn", "000", "000", "145", "220", "BTN;stepbox01_list04_btn;", "");
Obj_Class ("stepbox01_list04_btn", "menu_btn");
Obj_Overflow ("stepbox01_list04_btn", "1");
Obj_Background ("stepbox01_list04_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list04_btn", "6");
Obj_Shadow_XY ("stepbox01_list04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list04_btn", "stepbox01_list04_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list04_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list04_overflow", "stepbox01_list04_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list04_overflow", "stepbox01_list04_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list04_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list04_overflow", "stepbox01_list04_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list04_btn", "stepbox01_list04_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list04_btn", "stepbox01_list04_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list04_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list04_title", "stepbox01_list04_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list04_title_over", "1");
Obj_Make (1, "stepbox01_list04_title_over", "stepbox01_list04_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list04_title_over_box", "stepbox01_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list04_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list04_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list04_title", "stepbox01_list04_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list04_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list04_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list04_btn", "stepbox01_list04_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list04_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list04_amt", "stepbox01_list04_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list04_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list04", "stepbox01_list04_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list04_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list04_change", "stepbox01_list04_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list04_change_txtbox", "stepbox01_list04_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list04_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list04_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list04_btn", "stepbox01_list04_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list04_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list04_check_bac", "2");
Obj_View ("stepbox01_list04_check_img", "2");


//옵션내역 05번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list05", "stepbox01_list05_btn", "000", "000", "145", "220", "BTN;stepbox01_list05_btn;", "");
Obj_Class ("stepbox01_list05_btn", "menu_btn");
Obj_Overflow ("stepbox01_list05_btn", "1");
Obj_Background ("stepbox01_list05_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list05_btn", "6");
Obj_Shadow_XY ("stepbox01_list05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list05_btn", "stepbox01_list05_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list05_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list05_overflow", "stepbox01_list05_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list05_overflow", "stepbox01_list05_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list05_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list05_overflow", "stepbox01_list05_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list05_btn", "stepbox01_list05_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list05_btn", "stepbox01_list05_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list05_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list05_title", "stepbox01_list05_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list05_title_over", "1");
Obj_Make (1, "stepbox01_list05_title_over", "stepbox01_list05_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list05_title_over_box", "stepbox01_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list05_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list05_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list05_title", "stepbox01_list05_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list05_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list05_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list05_btn", "stepbox01_list05_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list05_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list05_amt", "stepbox01_list05_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list05_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list05", "stepbox01_list05_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list05_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list05_change", "stepbox01_list05_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list05_change_txtbox", "stepbox01_list05_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list05_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list05_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list05_btn", "stepbox01_list05_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list05_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list05_check_bac", "2");
Obj_View ("stepbox01_list05_check_img", "2");


//옵션내역 06번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list06", "stepbox01_list06_btn", "000", "000", "145", "220", "BTN;stepbox01_list06_btn;", "");
Obj_Class ("stepbox01_list06_btn", "menu_btn");
Obj_Overflow ("stepbox01_list06_btn", "1");
Obj_Background ("stepbox01_list06_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list06_btn", "6");
Obj_Shadow_XY ("stepbox01_list06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list06_btn", "stepbox01_list06_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list06_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list06_overflow", "stepbox01_list06_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list06_overflow", "stepbox01_list06_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list06_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list06_overflow", "stepbox01_list06_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list06_btn", "stepbox01_list06_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list06_btn", "stepbox01_list06_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list06_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list06_title", "stepbox01_list06_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list06_title_over", "1");
Obj_Make (1, "stepbox01_list06_title_over", "stepbox01_list06_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list06_title_over_box", "stepbox01_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list06_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list06_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list06_title", "stepbox01_list06_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list06_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list06_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list06_btn", "stepbox01_list06_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list06_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list06_amt", "stepbox01_list06_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list06_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list06", "stepbox01_list06_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list06_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list06_change", "stepbox01_list06_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list06_change_txtbox", "stepbox01_list06_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list06_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list06_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list06_btn", "stepbox01_list06_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list06_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list06_check_bac", "2");
Obj_View ("stepbox01_list06_check_img", "2");


//옵션내역 07번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list07", "stepbox01_list07_btn", "000", "000", "145", "220", "BTN;stepbox01_list07_btn;", "");
Obj_Class ("stepbox01_list07_btn", "menu_btn");
Obj_Overflow ("stepbox01_list07_btn", "1");
Obj_Background ("stepbox01_list07_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list07_btn", "6");
Obj_Shadow_XY ("stepbox01_list07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list07_btn", "stepbox01_list07_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list07_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list07_overflow", "stepbox01_list07_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list07_overflow", "stepbox01_list07_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list07_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list07_overflow", "stepbox01_list07_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list07_btn", "stepbox01_list07_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list07_btn", "stepbox01_list07_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list07_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list07_title", "stepbox01_list07_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list07_title_over", "1");
Obj_Make (1, "stepbox01_list07_title_over", "stepbox01_list07_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list07_title_over_box", "stepbox01_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list07_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list07_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list07_title", "stepbox01_list07_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list07_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list07_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list07_btn", "stepbox01_list07_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list07_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list07_amt", "stepbox01_list07_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list07_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list07", "stepbox01_list07_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list07_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list07_change", "stepbox01_list07_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list07_change_txtbox", "stepbox01_list07_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list07_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list07_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list07_btn", "stepbox01_list07_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list07_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list07_check_bac", "2");
Obj_View ("stepbox01_list07_check_img", "2");


//옵션내역 08번 메뉴 버튼 요소
Obj_Make (2, "stepbox01_list08", "stepbox01_list08_btn", "000", "000", "145", "220", "BTN;stepbox01_list08_btn;", "");
Obj_Class ("stepbox01_list08_btn", "menu_btn");
Obj_Overflow ("stepbox01_list08_btn", "1");
Obj_Background ("stepbox01_list08_btn", "1", "#ffffff");
Obj_Radius ("stepbox01_list08_btn", "6");
Obj_Shadow_XY ("stepbox01_list08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox01_list08_btn", "stepbox01_list08_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox01_list08_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox01_list08_overflow", "stepbox01_list08_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox01_list08_overflow", "stepbox01_list08_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox01_list08_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox01_list08_overflow", "stepbox01_list08_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox01_list08_btn", "stepbox01_list08_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox01_list08_btn", "stepbox01_list08_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox01_list08_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox01_list08_title", "stepbox01_list08_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox01_list08_title_over", "1");
Obj_Make (1, "stepbox01_list08_title_over", "stepbox01_list08_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox01_list08_title_over_box", "stepbox01_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox01_list08_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list08_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox01_list08_title", "stepbox01_list08_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox01_list08_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox01_list08_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox01_list08_btn", "stepbox01_list08_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox01_list08_amt", "op_menu_amt");
Obj_Make (3, "stepbox01_list08_amt", "stepbox01_list08_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox01_list08_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox01_list08", "stepbox01_list08_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox01_list08_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox01_list08_change", "stepbox01_list08_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox01_list08_change_txtbox", "stepbox01_list08_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox01_list08_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox01_list08_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox01_list08_btn", "stepbox01_list08_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox01_list08_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox01_list08_check_bac", "2");
Obj_View ("stepbox01_list08_check_img", "2");



//변경가능 표시부분 애니메이션
Obj_Ani ("stepbox01_list01_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list02_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list03_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list04_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list05_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list06_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list07_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox01_list08_change", "bounce_change", "0", "1", "2", "0", "");



//비활성화 덮개
Obj_Make (1, "stepbox01", "stepbox01_cover", "0", "0", "970", "260", "", "");
Obj_View ("stepbox01_cover", "2");






//STEP 옵션 02 -----------------------------------------------
// //활성 전체 테두리 박스
// Obj_Make (1, "stepbox02", "stepbox02_actbox", "-4", "-4", "900", "260", "", "");
// Obj_Class ("stepbox02_actbox", "op_step_actbox");
// Obj_View ("stepbox02_actbox", "2");
// Obj_Make (4, "stepbox02", "stepbox02_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg", "");

// Obj_Svg_Make ("stepbox02", "stepbox02_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg");
// Obj_View ("stepbox02_actbox", "2");

Obj_Make (1, "stepbox02", "stepbox02_actbox", "-4", "-4", "900", "260", "");
Obj_Class ("stepbox02_actbox", "stepbox_actbox_s");
Obj_View ("stepbox02_actbox", "2");


//다음 버튼
Obj_Make (2, "stepbox02", "stepbox02_next_btn", "910", "0", "60", "125", "BTN;stepbox02_next_btn;", "");
Obj_Radius ("stepbox02_next_btn", "6");
Obj_Shadow_XY ("stepbox02_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox02_next_btn", "2", "image/pop_option_next_n.png");
Btn_Click ("stepbox02_next_btn", "0", "0", "60", "125", "image/pop_option_next_y.png", "");
Obj_Make (4, "stepbox02_next_btn", "stepbox02_next_dis_img", "0", "0", "60", "125", "image/pop_option_next_d.png", "");
Obj_View ("stepbox02_next_dis_img", "2");

//이전 버튼
Obj_Make (2, "stepbox02", "stepbox02_prev_btn", "910", "135", "60", "125", "BTN;stepbox02_prev_btn;", "");
Obj_Radius ("stepbox02_prev_btn", "6");
Obj_Shadow_XY ("stepbox02_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox02_prev_btn", "2", "image/pop_option_prev_n.png");
Btn_Click ("stepbox02_prev_btn", "0", "0", "60", "125", "image/pop_option_prev_y.png", "");
Obj_Make (4, "stepbox02_prev_btn", "stepbox02_prev_dis_img", "0", "0", "60", "125", "image/pop_option_prev_d.png", "");
Obj_View ("stepbox02_prev_dis_img", "2");


//타이틀 영역
Obj_Make (1, "stepbox02", "stepbox02_tbox", "0", "0", "185", "260", "", "");
Obj_Background ("stepbox02_tbox", "2", "image/pop_op_step_tbox02_n.png");
//SETP Num
Obj_Make (3, "stepbox02_tbox", "stepbox02_tbox_num", "65", "23", "19", "15", "2", "");
Txt_Font ("stepbox02_tbox_num", "5", "13", "#ffffff", "", "2", "", "");
//타이틀
Obj_Make (3, "stepbox02_tbox", "stepbox02_tbox_txt", "20", "55", "150", "150", "옵션메뉴명2", "");
Txt_Font ("stepbox02_tbox_txt", "3", "26", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("stepbox02_tbox_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
Obj_Class ("stepbox02_tbox_txt", "line_height_11");


//네비게이션 영역
Obj_Make (1, "stepbox02", "stepbox02_nav", "17", "192", "150", "16", "", "");
Obj_Class ("stepbox02_nav", "flex_container");
//01번 영역
Obj_Make (1, "stepbox02_nav", "stepbox02_nav01", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox02_nav01", "stepbox02_nav01_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox02_nav01", "stepbox02_nav01_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//02번 영역
Obj_Make (1, "stepbox02_nav", "stepbox02_nav02", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox02_nav02", "stepbox02_nav02_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox02_nav02", "stepbox02_nav02_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//03번 영역
Obj_Make (1, "stepbox02_nav", "stepbox02_nav03", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox02_nav03", "stepbox02_nav03_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox02_nav03", "stepbox02_nav03_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//04번 영역
Obj_Make (1, "stepbox02_nav", "stepbox02_nav04", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox02_nav04", "stepbox02_nav04_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox02_nav04", "stepbox02_nav04_on", "0", "0", "17", "16", "image/step_location_y.png", "");

Obj_Class ("stepbox02_nav01", "pop_op_step_nav");
Obj_Class ("stepbox02_nav02", "pop_op_step_nav");
Obj_Class ("stepbox02_nav03", "pop_op_step_nav");
Obj_Class ("stepbox02_nav04", "pop_op_step_nav");

Obj_AB_RE("stepbox02_nav01", "2");
Obj_AB_RE("stepbox02_nav02", "2");
Obj_AB_RE("stepbox02_nav03", "2");
Obj_AB_RE("stepbox02_nav04", "2");

Obj_View ("stepbox02_nav01_on", "1");
Obj_View ("stepbox02_nav02_on", "2");
Obj_View ("stepbox02_nav03_on", "2");
Obj_View ("stepbox02_nav04_on", "2");


//선택안함 영역
Obj_Make (1, "stepbox02_tbox", "stepbox02_tbox_noselect", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox02_tbox_noselect", "stepbox02_tbox_noselect_txt", "20", "13", "120", "20", "선택안함", "");
Txt_Font ("stepbox02_tbox_noselect_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox02_tbox_noselect_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//체크표시
Obj_Make (4, "stepbox02_tbox_noselect", "stepbox02_tbox_noselect_check", "141", "10", "28", "28", "image/op_step_check_n.png", "");
//선택안함 버튼
Obj_Make (2, "stepbox02_tbox_noselect", "stepbox02_tbox_noselect_btn", "0", "0", "185", "45", "BTN;stepbox02_tbox_noselect_btn;", "");
Obj_Opacity("stepbox02_tbox_noselect_btn", "0");

//필수선택 영역
Obj_Make (1, "stepbox02_tbox", "stepbox02_tbox_must", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox02_tbox_must", "stepbox02_tbox_must_txt", "20", "13", "120", "20", "필수선택", "");
Txt_Font ("stepbox02_tbox_must_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox02_tbox_must_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//필수선택 아이콘
Obj_Make (4, "stepbox02_tbox_must", "stepbox02_tbox_must_icon", "141", "10", "28", "28", "image/op_step_must.png", "");
Obj_View ("stepbox02_tbox_must", "2");


//메뉴 영역 
Obj_Make (1, "stepbox02", "stepbox02_mbox", "185", "0", "715", "260", "", "");
Obj_Background ("stepbox02_mbox", "2", "image/pop_op_step_mbox.png");
Obj_Overflow ("stepbox02_mbox", "1");


//옵션내역 전체 리스트 영역
Obj_Make (1, "stepbox02_mbox", "stepbox02_list", "25", "20", "1384", "220", "", "");
Obj_Class ("stepbox02_list", "flex_r_start_box");

//옵션내역 리스트별 영역
Obj_Make (1, "stepbox02_list", "stepbox02_list01", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list02", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list03", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list04", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list05", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list06", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list07", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox02_list", "stepbox02_list08", "0", "0", "145", "220", "", "");

Obj_Class ("stepbox02_list01", "pop_op_menu");
Obj_Class ("stepbox02_list02", "pop_op_menu");
Obj_Class ("stepbox02_list03", "pop_op_menu");
Obj_Class ("stepbox02_list04", "pop_op_menu");
Obj_Class ("stepbox02_list05", "pop_op_menu");
Obj_Class ("stepbox02_list06", "pop_op_menu");
Obj_Class ("stepbox02_list07", "pop_op_menu");
Obj_Class ("stepbox02_list08", "pop_op_menu");

Obj_AB_RE ("stepbox02_list01", "2");
Obj_AB_RE ("stepbox02_list02", "2");
Obj_AB_RE ("stepbox02_list03", "2");
Obj_AB_RE ("stepbox02_list04", "2");
Obj_AB_RE ("stepbox02_list05", "2");
Obj_AB_RE ("stepbox02_list06", "2");
Obj_AB_RE ("stepbox02_list08", "2");
Obj_AB_RE ("stepbox02_list07", "2");



//옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list01", "stepbox02_list01_btn", "000", "000", "145", "220", "BTN;stepbox02_list01_btn;", "");
Obj_Class ("stepbox02_list01_btn", "menu_btn");
Obj_Overflow ("stepbox02_list01_btn", "1");
Obj_Background ("stepbox02_list01_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list01_btn", "6");
Obj_Shadow_XY ("stepbox02_list01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list01_btn", "stepbox02_list01_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list01_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list01_overflow", "stepbox02_list01_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list01_overflow", "stepbox02_list01_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list01_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list01_overflow", "stepbox02_list01_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list01_btn", "stepbox02_list01_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list01_btn", "stepbox02_list01_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list01_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list01_title", "stepbox02_list01_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list01_title_over", "1");
Obj_Make (1, "stepbox02_list01_title_over", "stepbox02_list01_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list01_title_over_box", "stepbox02_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list01_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list01_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list01_title", "stepbox02_list01_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list01_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list01_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list01_btn", "stepbox02_list01_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list01_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list01_amt", "stepbox02_list01_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list01_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list01", "stepbox02_list01_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list01_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list01_change", "stepbox02_list01_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list01_change_txtbox", "stepbox02_list01_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list01_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list01_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list01_btn", "stepbox02_list01_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list01_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list01_check_bac", "2");
Obj_View ("stepbox02_list01_check_img", "2");


//옵션내역 02번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list02", "stepbox02_list02_btn", "000", "000", "145", "220", "BTN;stepbox02_list02_btn;", "");
Obj_Class ("stepbox02_list02_btn", "menu_btn");
Obj_Overflow ("stepbox02_list02_btn", "1");
Obj_Background ("stepbox02_list02_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list02_btn", "6");
Obj_Shadow_XY ("stepbox02_list02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list02_btn", "stepbox02_list02_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list02_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list02_overflow", "stepbox02_list02_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list02_overflow", "stepbox02_list02_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list02_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list02_overflow", "stepbox02_list02_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list02_btn", "stepbox02_list02_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list02_btn", "stepbox02_list02_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list02_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list02_title", "stepbox02_list02_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list02_title_over", "1");
Obj_Make (1, "stepbox02_list02_title_over", "stepbox02_list02_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list02_title_over_box", "stepbox02_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list02_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list02_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list02_title", "stepbox02_list02_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list02_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list02_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list02_btn", "stepbox02_list02_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list02_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list02_amt", "stepbox02_list02_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list02_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list02", "stepbox02_list02_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list02_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list02_change", "stepbox02_list02_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list02_change_txtbox", "stepbox02_list02_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list02_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list02_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list02_btn", "stepbox02_list02_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list02_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list02_check_bac", "2");
Obj_View ("stepbox02_list02_check_img", "2");


//옵션내역 03번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list03", "stepbox02_list03_btn", "000", "000", "145", "220", "BTN;stepbox02_list03_btn;", "");
Obj_Class ("stepbox02_list03_btn", "menu_btn");
Obj_Overflow ("stepbox02_list03_btn", "1");
Obj_Background ("stepbox02_list03_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list03_btn", "6");
Obj_Shadow_XY ("stepbox02_list03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list03_btn", "stepbox02_list03_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list03_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list03_overflow", "stepbox02_list03_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list03_overflow", "stepbox02_list03_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list03_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list03_overflow", "stepbox02_list03_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list03_btn", "stepbox02_list03_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list03_btn", "stepbox02_list03_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list03_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list03_title", "stepbox02_list03_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list03_title_over", "1");
Obj_Make (1, "stepbox02_list03_title_over", "stepbox02_list03_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list03_title_over_box", "stepbox02_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list03_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list03_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list03_title", "stepbox02_list03_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list03_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list03_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list03_btn", "stepbox02_list03_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list03_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list03_amt", "stepbox02_list03_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list03_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list03", "stepbox02_list03_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list03_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list03_change", "stepbox02_list03_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list03_change_txtbox", "stepbox02_list03_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list03_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list03_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list03_btn", "stepbox02_list03_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list03_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list03_check_bac", "2");
Obj_View ("stepbox02_list03_check_img", "2");


//옵션내역 04번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list04", "stepbox02_list04_btn", "000", "000", "145", "220", "BTN;stepbox02_list04_btn;", "");
Obj_Class ("stepbox02_list04_btn", "menu_btn");
Obj_Overflow ("stepbox02_list04_btn", "1");
Obj_Background ("stepbox02_list04_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list04_btn", "6");
Obj_Shadow_XY ("stepbox02_list04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list04_btn", "stepbox02_list04_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list04_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list04_overflow", "stepbox02_list04_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list04_overflow", "stepbox02_list04_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list04_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list04_overflow", "stepbox02_list04_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list04_btn", "stepbox02_list04_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list04_btn", "stepbox02_list04_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list04_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list04_title", "stepbox02_list04_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list04_title_over", "1");
Obj_Make (1, "stepbox02_list04_title_over", "stepbox02_list04_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list04_title_over_box", "stepbox02_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list04_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list04_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list04_title", "stepbox02_list04_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list04_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list04_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list04_btn", "stepbox02_list04_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list04_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list04_amt", "stepbox02_list04_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list04_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list04", "stepbox02_list04_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list04_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list04_change", "stepbox02_list04_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list04_change_txtbox", "stepbox02_list04_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list04_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list04_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list04_btn", "stepbox02_list04_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list04_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list04_check_bac", "2");
Obj_View ("stepbox02_list04_check_img", "2");


//옵션내역 05번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list05", "stepbox02_list05_btn", "000", "000", "145", "220", "BTN;stepbox02_list05_btn;", "");
Obj_Class ("stepbox02_list05_btn", "menu_btn");
Obj_Overflow ("stepbox02_list05_btn", "1");
Obj_Background ("stepbox02_list05_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list05_btn", "6");
Obj_Shadow_XY ("stepbox02_list05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list05_btn", "stepbox02_list05_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list05_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list05_overflow", "stepbox02_list05_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list05_overflow", "stepbox02_list05_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list05_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list05_overflow", "stepbox02_list05_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list05_btn", "stepbox02_list05_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list05_btn", "stepbox02_list05_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list05_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list05_title", "stepbox02_list05_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list05_title_over", "1");
Obj_Make (1, "stepbox02_list05_title_over", "stepbox02_list05_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list05_title_over_box", "stepbox02_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list05_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list05_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list05_title", "stepbox02_list05_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list05_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list05_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list05_btn", "stepbox02_list05_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list05_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list05_amt", "stepbox02_list05_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list05_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list05", "stepbox02_list05_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list05_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list05_change", "stepbox02_list05_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list05_change_txtbox", "stepbox02_list05_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list05_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list05_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list05_btn", "stepbox02_list05_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list05_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list05_check_bac", "2");
Obj_View ("stepbox02_list05_check_img", "2");


//옵션내역 06번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list06", "stepbox02_list06_btn", "000", "000", "145", "220", "BTN;stepbox02_list06_btn;", "");
Obj_Class ("stepbox02_list06_btn", "menu_btn");
Obj_Overflow ("stepbox02_list06_btn", "1");
Obj_Background ("stepbox02_list06_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list06_btn", "6");
Obj_Shadow_XY ("stepbox02_list06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list06_btn", "stepbox02_list06_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list06_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list06_overflow", "stepbox02_list06_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list06_overflow", "stepbox02_list06_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list06_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list06_overflow", "stepbox02_list06_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list06_btn", "stepbox02_list06_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list06_btn", "stepbox02_list06_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list06_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list06_title", "stepbox02_list06_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list06_title_over", "1");
Obj_Make (1, "stepbox02_list06_title_over", "stepbox02_list06_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list06_title_over_box", "stepbox02_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list06_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list06_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list06_title", "stepbox02_list06_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list06_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list06_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list06_btn", "stepbox02_list06_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list06_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list06_amt", "stepbox02_list06_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list06_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list06", "stepbox02_list06_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list06_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list06_change", "stepbox02_list06_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list06_change_txtbox", "stepbox02_list06_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list06_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list06_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list06_btn", "stepbox02_list06_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list06_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list06_check_bac", "2");
Obj_View ("stepbox02_list06_check_img", "2");


//옵션내역 07번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list07", "stepbox02_list07_btn", "000", "000", "145", "220", "BTN;stepbox02_list07_btn;", "");
Obj_Class ("stepbox02_list07_btn", "menu_btn");
Obj_Overflow ("stepbox02_list07_btn", "1");
Obj_Background ("stepbox02_list07_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list07_btn", "6");
Obj_Shadow_XY ("stepbox02_list07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list07_btn", "stepbox02_list07_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list07_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list07_overflow", "stepbox02_list07_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list07_overflow", "stepbox02_list07_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list07_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list07_overflow", "stepbox02_list07_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list07_btn", "stepbox02_list07_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list07_btn", "stepbox02_list07_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list07_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list07_title", "stepbox02_list07_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list07_title_over", "1");
Obj_Make (1, "stepbox02_list07_title_over", "stepbox02_list07_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list07_title_over_box", "stepbox02_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list07_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list07_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list07_title", "stepbox02_list07_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list07_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list07_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list07_btn", "stepbox02_list07_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list07_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list07_amt", "stepbox02_list07_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list07_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list07", "stepbox02_list07_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list07_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list07_change", "stepbox02_list07_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list07_change_txtbox", "stepbox02_list07_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list07_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list07_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list07_btn", "stepbox02_list07_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list07_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list07_check_bac", "2");
Obj_View ("stepbox02_list07_check_img", "2");


//옵션내역 08번 메뉴 버튼 요소
Obj_Make (2, "stepbox02_list08", "stepbox02_list08_btn", "000", "000", "145", "220", "BTN;stepbox02_list08_btn;", "");
Obj_Class ("stepbox02_list08_btn", "menu_btn");
Obj_Overflow ("stepbox02_list08_btn", "1");
Obj_Background ("stepbox02_list08_btn", "1", "#ffffff");
Obj_Radius ("stepbox02_list08_btn", "6");
Obj_Shadow_XY ("stepbox02_list08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox02_list08_btn", "stepbox02_list08_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox02_list08_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox02_list08_overflow", "stepbox02_list08_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox02_list08_overflow", "stepbox02_list08_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox02_list08_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox02_list08_overflow", "stepbox02_list08_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox02_list08_btn", "stepbox02_list08_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox02_list08_btn", "stepbox02_list08_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox02_list08_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox02_list08_title", "stepbox02_list08_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox02_list08_title_over", "1");
Obj_Make (1, "stepbox02_list08_title_over", "stepbox02_list08_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox02_list08_title_over_box", "stepbox02_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox02_list08_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list08_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox02_list08_title", "stepbox02_list08_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox02_list08_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox02_list08_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox02_list08_btn", "stepbox02_list08_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox02_list08_amt", "op_menu_amt");
Obj_Make (3, "stepbox02_list08_amt", "stepbox02_list08_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox02_list08_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox02_list08", "stepbox02_list08_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox02_list08_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox02_list08_change", "stepbox02_list08_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox02_list08_change_txtbox", "stepbox02_list08_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox02_list08_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox02_list08_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox02_list08_btn", "stepbox02_list08_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox02_list08_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox02_list08_check_bac", "2");
Obj_View ("stepbox02_list08_check_img", "2");



//변경가능 표시부분 애니메이션
Obj_Ani ("stepbox02_list01_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list02_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list03_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list04_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list05_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list06_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list07_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox02_list08_change", "bounce_change", "0", "1", "2", "0", "");



//비활성화 덮개
Obj_Make (1, "stepbox02", "stepbox02_cover", "0", "0", "970", "260", "", "");
Obj_View ("stepbox02_cover", "2");







//STEP 옵션 03 -----------------------------------------------
//활성 전체 테두리 박스
// Obj_Make (1, "stepbox03", "stepbox03_actbox", "-4", "-4", "900", "260", "", "");
// Obj_Class ("stepbox03_actbox", "op_step_actbox");
// Obj_View ("stepbox03_actbox", "2");
// Obj_Make (4, "stepbox03", "stepbox03_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg", "");

// Obj_Svg_Make ("stepbox03", "stepbox03_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg");
// Obj_View ("stepbox03_actbox", "2");

Obj_Make (1, "stepbox03", "stepbox03_actbox", "-4", "-4", "900", "260", "");
Obj_Class ("stepbox03_actbox", "stepbox_actbox_s");
Obj_View ("stepbox03_actbox", "2");



//다음 버튼
Obj_Make (2, "stepbox03", "stepbox03_next_btn", "910", "0", "60", "125", "BTN;stepbox03_next_btn;", "");
Obj_Radius ("stepbox03_next_btn", "6");
Obj_Shadow_XY ("stepbox03_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox03_next_btn", "2", "image/pop_option_next_n.png");
Btn_Click ("stepbox03_next_btn", "0", "0", "60", "125", "image/pop_option_next_y.png", "");
Obj_Make (4, "stepbox03_next_btn", "stepbox03_next_dis_img", "0", "0", "60", "125", "image/pop_option_next_d.png", "");
Obj_View ("stepbox03_next_dis_img", "2");

//이전 버튼
Obj_Make (2, "stepbox03", "stepbox03_prev_btn", "910", "135", "60", "125", "BTN;stepbox03_prev_btn;", "");
Obj_Radius ("stepbox03_prev_btn", "6");
Obj_Shadow_XY ("stepbox03_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox03_prev_btn", "2", "image/pop_option_prev_n.png");
Btn_Click ("stepbox03_prev_btn", "0", "0", "60", "125", "image/pop_option_prev_y.png", "");
Obj_Make (4, "stepbox03_prev_btn", "stepbox03_prev_dis_img", "0", "0", "60", "125", "image/pop_option_prev_d.png", "");
Obj_View ("stepbox03_prev_dis_img", "2");


//타이틀 영역
Obj_Make (1, "stepbox03", "stepbox03_tbox", "0", "0", "185", "260", "", "");
Obj_Background ("stepbox03_tbox", "2", "image/pop_op_step_tbox03_n.png");
//SETP Num
Obj_Make (3, "stepbox03_tbox", "stepbox03_tbox_num", "65", "23", "19", "15", "3", "");
Txt_Font ("stepbox03_tbox_num", "5", "13", "#ffffff", "", "2", "", "");
//타이틀
Obj_Make (3, "stepbox03_tbox", "stepbox03_tbox_txt", "20", "55", "150", "150", "옵션메뉴명3", "");
Txt_Font ("stepbox03_tbox_txt", "3", "26", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("stepbox03_tbox_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
Obj_Class ("stepbox03_tbox_txt", "line_height_11");


//네비게이션 영역
Obj_Make (1, "stepbox03", "stepbox03_nav", "17", "192", "150", "16", "", "");
Obj_Class ("stepbox03_nav", "flex_container");
//01번 영역
Obj_Make (1, "stepbox03_nav", "stepbox03_nav01", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox03_nav01", "stepbox03_nav01_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox03_nav01", "stepbox03_nav01_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//02번 영역
Obj_Make (1, "stepbox03_nav", "stepbox03_nav02", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox03_nav02", "stepbox03_nav02_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox03_nav02", "stepbox03_nav02_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//03번 영역
Obj_Make (1, "stepbox03_nav", "stepbox03_nav03", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox03_nav03", "stepbox03_nav03_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox03_nav03", "stepbox03_nav03_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//04번 영역
Obj_Make (1, "stepbox03_nav", "stepbox03_nav04", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox03_nav04", "stepbox03_nav04_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox03_nav04", "stepbox03_nav04_on", "0", "0", "17", "16", "image/step_location_y.png", "");

Obj_Class ("stepbox03_nav01", "pop_op_step_nav");
Obj_Class ("stepbox03_nav02", "pop_op_step_nav");
Obj_Class ("stepbox03_nav03", "pop_op_step_nav");
Obj_Class ("stepbox03_nav04", "pop_op_step_nav");

Obj_AB_RE("stepbox03_nav01", "2");
Obj_AB_RE("stepbox03_nav02", "2");
Obj_AB_RE("stepbox03_nav03", "2");
Obj_AB_RE("stepbox03_nav04", "2");

Obj_View ("stepbox03_nav01_on", "1");
Obj_View ("stepbox03_nav02_on", "2");
Obj_View ("stepbox03_nav03_on", "2");
Obj_View ("stepbox03_nav04_on", "2");


//선택안함 영역
Obj_Make (1, "stepbox03_tbox", "stepbox03_tbox_noselect", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox03_tbox_noselect", "stepbox03_tbox_noselect_txt", "20", "13", "120", "20", "선택안함", "");
Txt_Font ("stepbox03_tbox_noselect_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox03_tbox_noselect_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//체크표시
Obj_Make (4, "stepbox03_tbox_noselect", "stepbox03_tbox_noselect_check", "141", "10", "28", "28", "image/op_step_check_n.png", "");
//선택안함 버튼
Obj_Make (2, "stepbox03_tbox_noselect", "stepbox03_tbox_noselect_btn", "0", "0", "185", "45", "BTN;stepbox03_tbox_noselect_btn;", "");
Obj_Opacity("stepbox03_tbox_noselect_btn", "0");

//필수선택 영역
Obj_Make (1, "stepbox03_tbox", "stepbox03_tbox_must", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox03_tbox_must", "stepbox03_tbox_must_txt", "20", "13", "120", "20", "필수선택", "");
Txt_Font ("stepbox03_tbox_must_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox03_tbox_must_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//필수선택 아이콘
Obj_Make (4, "stepbox03_tbox_must", "stepbox03_tbox_must_icon", "141", "10", "28", "28", "image/op_step_must.png", "");
Obj_View ("stepbox03_tbox_must", "2");


//메뉴 영역 
Obj_Make (1, "stepbox03", "stepbox03_mbox", "185", "0", "715", "260", "", "");
Obj_Background ("stepbox03_mbox", "2", "image/pop_op_step_mbox.png");
Obj_Overflow ("stepbox03_mbox", "1");


//옵션내역 전체 리스트 영역
Obj_Make (1, "stepbox03_mbox", "stepbox03_list", "25", "20", "1384", "220", "", "");
Obj_Class ("stepbox03_list", "flex_r_start_box");

//옵션내역 리스트별 영역
Obj_Make (1, "stepbox03_list", "stepbox03_list01", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list02", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list03", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list04", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list05", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list06", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list07", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox03_list", "stepbox03_list08", "0", "0", "145", "220", "", "");

Obj_Class ("stepbox03_list01", "pop_op_menu");
Obj_Class ("stepbox03_list02", "pop_op_menu");
Obj_Class ("stepbox03_list03", "pop_op_menu");
Obj_Class ("stepbox03_list04", "pop_op_menu");
Obj_Class ("stepbox03_list05", "pop_op_menu");
Obj_Class ("stepbox03_list06", "pop_op_menu");
Obj_Class ("stepbox03_list07", "pop_op_menu");
Obj_Class ("stepbox03_list08", "pop_op_menu");

Obj_AB_RE ("stepbox03_list01", "2");
Obj_AB_RE ("stepbox03_list02", "2");
Obj_AB_RE ("stepbox03_list03", "2");
Obj_AB_RE ("stepbox03_list04", "2");
Obj_AB_RE ("stepbox03_list05", "2");
Obj_AB_RE ("stepbox03_list06", "2");
Obj_AB_RE ("stepbox03_list08", "2");
Obj_AB_RE ("stepbox03_list07", "2");



//옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list01", "stepbox03_list01_btn", "000", "000", "145", "220", "BTN;stepbox03_list01_btn;", "");
Obj_Class ("stepbox03_list01_btn", "menu_btn");
Obj_Overflow ("stepbox03_list01_btn", "1");
Obj_Background ("stepbox03_list01_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list01_btn", "6");
Obj_Shadow_XY ("stepbox03_list01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list01_btn", "stepbox03_list01_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list01_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list01_overflow", "stepbox03_list01_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list01_overflow", "stepbox03_list01_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list01_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list01_overflow", "stepbox03_list01_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list01_btn", "stepbox03_list01_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list01_btn", "stepbox03_list01_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list01_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list01_title", "stepbox03_list01_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list01_title_over", "1");
Obj_Make (1, "stepbox03_list01_title_over", "stepbox03_list01_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list01_title_over_box", "stepbox03_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list01_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list01_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list01_title", "stepbox03_list01_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list01_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list01_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list01_btn", "stepbox03_list01_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list01_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list01_amt", "stepbox03_list01_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list01_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list01", "stepbox03_list01_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list01_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list01_change", "stepbox03_list01_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list01_change_txtbox", "stepbox03_list01_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list01_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list01_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list01_btn", "stepbox03_list01_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list01_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list01_check_bac", "2");
Obj_View ("stepbox03_list01_check_img", "2");


//옵션내역 02번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list02", "stepbox03_list02_btn", "000", "000", "145", "220", "BTN;stepbox03_list02_btn;", "");
Obj_Class ("stepbox03_list02_btn", "menu_btn");
Obj_Overflow ("stepbox03_list02_btn", "1");
Obj_Background ("stepbox03_list02_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list02_btn", "6");
Obj_Shadow_XY ("stepbox03_list02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list02_btn", "stepbox03_list02_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list02_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list02_overflow", "stepbox03_list02_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list02_overflow", "stepbox03_list02_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list02_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list02_overflow", "stepbox03_list02_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list02_btn", "stepbox03_list02_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list02_btn", "stepbox03_list02_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list02_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list02_title", "stepbox03_list02_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list02_title_over", "1");
Obj_Make (1, "stepbox03_list02_title_over", "stepbox03_list02_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list02_title_over_box", "stepbox03_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list02_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list02_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list02_title", "stepbox03_list02_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list02_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list02_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list02_btn", "stepbox03_list02_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list02_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list02_amt", "stepbox03_list02_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list02_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list02", "stepbox03_list02_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list02_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list02_change", "stepbox03_list02_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list02_change_txtbox", "stepbox03_list02_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list02_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list02_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list02_btn", "stepbox03_list02_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list02_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list02_check_bac", "2");
Obj_View ("stepbox03_list02_check_img", "2");


//옵션내역 03번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list03", "stepbox03_list03_btn", "000", "000", "145", "220", "BTN;stepbox03_list03_btn;", "");
Obj_Class ("stepbox03_list03_btn", "menu_btn");
Obj_Overflow ("stepbox03_list03_btn", "1");
Obj_Background ("stepbox03_list03_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list03_btn", "6");
Obj_Shadow_XY ("stepbox03_list03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list03_btn", "stepbox03_list03_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list03_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list03_overflow", "stepbox03_list03_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list03_overflow", "stepbox03_list03_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list03_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list03_overflow", "stepbox03_list03_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list03_btn", "stepbox03_list03_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list03_btn", "stepbox03_list03_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list03_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list03_title", "stepbox03_list03_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list03_title_over", "1");
Obj_Make (1, "stepbox03_list03_title_over", "stepbox03_list03_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list03_title_over_box", "stepbox03_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list03_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list03_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list03_title", "stepbox03_list03_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list03_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list03_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list03_btn", "stepbox03_list03_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list03_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list03_amt", "stepbox03_list03_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list03_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list03", "stepbox03_list03_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list03_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list03_change", "stepbox03_list03_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list03_change_txtbox", "stepbox03_list03_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list03_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list03_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list03_btn", "stepbox03_list03_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list03_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list03_check_bac", "2");
Obj_View ("stepbox03_list03_check_img", "2");


//옵션내역 04번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list04", "stepbox03_list04_btn", "000", "000", "145", "220", "BTN;stepbox03_list04_btn;", "");
Obj_Class ("stepbox03_list04_btn", "menu_btn");
Obj_Overflow ("stepbox03_list04_btn", "1");
Obj_Background ("stepbox03_list04_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list04_btn", "6");
Obj_Shadow_XY ("stepbox03_list04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list04_btn", "stepbox03_list04_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list04_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list04_overflow", "stepbox03_list04_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list04_overflow", "stepbox03_list04_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list04_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list04_overflow", "stepbox03_list04_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list04_btn", "stepbox03_list04_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list04_btn", "stepbox03_list04_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list04_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list04_title", "stepbox03_list04_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list04_title_over", "1");
Obj_Make (1, "stepbox03_list04_title_over", "stepbox03_list04_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list04_title_over_box", "stepbox03_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list04_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list04_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list04_title", "stepbox03_list04_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list04_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list04_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list04_btn", "stepbox03_list04_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list04_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list04_amt", "stepbox03_list04_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list04_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list04", "stepbox03_list04_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list04_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list04_change", "stepbox03_list04_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list04_change_txtbox", "stepbox03_list04_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list04_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list04_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list04_btn", "stepbox03_list04_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list04_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list04_check_bac", "2");
Obj_View ("stepbox03_list04_check_img", "2");


//옵션내역 05번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list05", "stepbox03_list05_btn", "000", "000", "145", "220", "BTN;stepbox03_list05_btn;", "");
Obj_Class ("stepbox03_list05_btn", "menu_btn");
Obj_Overflow ("stepbox03_list05_btn", "1");
Obj_Background ("stepbox03_list05_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list05_btn", "6");
Obj_Shadow_XY ("stepbox03_list05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list05_btn", "stepbox03_list05_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list05_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list05_overflow", "stepbox03_list05_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list05_overflow", "stepbox03_list05_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list05_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list05_overflow", "stepbox03_list05_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list05_btn", "stepbox03_list05_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list05_btn", "stepbox03_list05_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list05_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list05_title", "stepbox03_list05_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list05_title_over", "1");
Obj_Make (1, "stepbox03_list05_title_over", "stepbox03_list05_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list05_title_over_box", "stepbox03_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list05_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list05_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list05_title", "stepbox03_list05_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list05_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list05_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list05_btn", "stepbox03_list05_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list05_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list05_amt", "stepbox03_list05_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list05_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list05", "stepbox03_list05_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list05_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list05_change", "stepbox03_list05_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list05_change_txtbox", "stepbox03_list05_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list05_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list05_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list05_btn", "stepbox03_list05_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list05_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list05_check_bac", "2");
Obj_View ("stepbox03_list05_check_img", "2");


//옵션내역 06번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list06", "stepbox03_list06_btn", "000", "000", "145", "220", "BTN;stepbox03_list06_btn;", "");
Obj_Class ("stepbox03_list06_btn", "menu_btn");
Obj_Overflow ("stepbox03_list06_btn", "1");
Obj_Background ("stepbox03_list06_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list06_btn", "6");
Obj_Shadow_XY ("stepbox03_list06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list06_btn", "stepbox03_list06_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list06_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list06_overflow", "stepbox03_list06_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list06_overflow", "stepbox03_list06_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list06_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list06_overflow", "stepbox03_list06_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list06_btn", "stepbox03_list06_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list06_btn", "stepbox03_list06_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list06_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list06_title", "stepbox03_list06_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list06_title_over", "1");
Obj_Make (1, "stepbox03_list06_title_over", "stepbox03_list06_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list06_title_over_box", "stepbox03_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list06_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list06_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list06_title", "stepbox03_list06_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list06_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list06_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list06_btn", "stepbox03_list06_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list06_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list06_amt", "stepbox03_list06_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list06_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list06", "stepbox03_list06_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list06_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list06_change", "stepbox03_list06_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list06_change_txtbox", "stepbox03_list06_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list06_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list06_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list06_btn", "stepbox03_list06_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list06_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list06_check_bac", "2");
Obj_View ("stepbox03_list06_check_img", "2");


//옵션내역 07번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list07", "stepbox03_list07_btn", "000", "000", "145", "220", "BTN;stepbox03_list07_btn;", "");
Obj_Class ("stepbox03_list07_btn", "menu_btn");
Obj_Overflow ("stepbox03_list07_btn", "1");
Obj_Background ("stepbox03_list07_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list07_btn", "6");
Obj_Shadow_XY ("stepbox03_list07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list07_btn", "stepbox03_list07_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list07_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list07_overflow", "stepbox03_list07_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list07_overflow", "stepbox03_list07_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list07_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list07_overflow", "stepbox03_list07_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list07_btn", "stepbox03_list07_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list07_btn", "stepbox03_list07_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list07_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list07_title", "stepbox03_list07_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list07_title_over", "1");
Obj_Make (1, "stepbox03_list07_title_over", "stepbox03_list07_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list07_title_over_box", "stepbox03_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list07_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list07_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list07_title", "stepbox03_list07_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list07_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list07_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list07_btn", "stepbox03_list07_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list07_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list07_amt", "stepbox03_list07_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list07_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list07", "stepbox03_list07_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list07_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list07_change", "stepbox03_list07_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list07_change_txtbox", "stepbox03_list07_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list07_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list07_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list07_btn", "stepbox03_list07_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list07_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list07_check_bac", "2");
Obj_View ("stepbox03_list07_check_img", "2");


//옵션내역 08번 메뉴 버튼 요소
Obj_Make (2, "stepbox03_list08", "stepbox03_list08_btn", "000", "000", "145", "220", "BTN;stepbox03_list08_btn;", "");
Obj_Class ("stepbox03_list08_btn", "menu_btn");
Obj_Overflow ("stepbox03_list08_btn", "1");
Obj_Background ("stepbox03_list08_btn", "1", "#ffffff");
Obj_Radius ("stepbox03_list08_btn", "6");
Obj_Shadow_XY ("stepbox03_list08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox03_list08_btn", "stepbox03_list08_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox03_list08_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox03_list08_overflow", "stepbox03_list08_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox03_list08_overflow", "stepbox03_list08_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox03_list08_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox03_list08_overflow", "stepbox03_list08_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox03_list08_btn", "stepbox03_list08_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox03_list08_btn", "stepbox03_list08_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox03_list08_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox03_list08_title", "stepbox03_list08_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox03_list08_title_over", "1");
Obj_Make (1, "stepbox03_list08_title_over", "stepbox03_list08_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox03_list08_title_over_box", "stepbox03_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox03_list08_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list08_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox03_list08_title", "stepbox03_list08_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox03_list08_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox03_list08_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox03_list08_btn", "stepbox03_list08_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox03_list08_amt", "op_menu_amt");
Obj_Make (3, "stepbox03_list08_amt", "stepbox03_list08_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox03_list08_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox03_list08", "stepbox03_list08_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox03_list08_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox03_list08_change", "stepbox03_list08_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox03_list08_change_txtbox", "stepbox03_list08_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox03_list08_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox03_list08_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox03_list08_btn", "stepbox03_list08_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox03_list08_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox03_list08_check_bac", "2");
Obj_View ("stepbox03_list08_check_img", "2");



//변경가능 표시부분 애니메이션
Obj_Ani ("stepbox03_list01_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list02_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list03_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list04_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list05_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list06_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list07_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox03_list08_change", "bounce_change", "0", "1", "2", "0", "");



//비활성화 덮개
Obj_Make (1, "stepbox03", "stepbox03_cover", "0", "0", "970", "260", "", "");
Obj_View ("stepbox03_cover", "2");







//STEP 옵션 04 -----------------------------------------------
//활성 전체 테두리 박스
// Obj_Make (1, "stepbox04", "stepbox04_actbox", "-4", "-4", "900", "260", "", "");
// Obj_Class ("stepbox04_actbox", "op_step_actbox");
// Obj_View ("stepbox04_actbox", "2");
// Obj_Make (4, "stepbox04", "stepbox04_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg", "");

// Obj_Svg_Make ("stepbox04", "stepbox04_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg");
// Obj_View ("stepbox04_actbox", "2");

Obj_Make (1, "stepbox04", "stepbox04_actbox", "-4", "-4", "900", "260", "");
Obj_Class ("stepbox04_actbox", "stepbox_actbox_s");
Obj_View ("stepbox04_actbox", "2");


//다음 버튼
Obj_Make (2, "stepbox04", "stepbox04_next_btn", "910", "0", "60", "125", "BTN;stepbox04_next_btn;", "");
Obj_Radius ("stepbox04_next_btn", "6");
Obj_Shadow_XY ("stepbox04_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox04_next_btn", "2", "image/pop_option_next_n.png");
Btn_Click ("stepbox04_next_btn", "0", "0", "60", "125", "image/pop_option_next_y.png", "");
Obj_Make (4, "stepbox04_next_btn", "stepbox04_next_dis_img", "0", "0", "60", "125", "image/pop_option_next_d.png", "");
Obj_View ("stepbox04_next_dis_img", "2");

//이전 버튼
Obj_Make (2, "stepbox04", "stepbox04_prev_btn", "910", "135", "60", "125", "BTN;stepbox04_prev_btn;", "");
Obj_Radius ("stepbox04_prev_btn", "6");
Obj_Shadow_XY ("stepbox04_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox04_prev_btn", "2", "image/pop_option_prev_n.png");
Btn_Click ("stepbox04_prev_btn", "0", "0", "60", "125", "image/pop_option_prev_y.png", "");
Obj_Make (4, "stepbox04_prev_btn", "stepbox04_prev_dis_img", "0", "0", "60", "125", "image/pop_option_prev_d.png", "");
Obj_View ("stepbox04_prev_dis_img", "2");


//타이틀 영역
Obj_Make (1, "stepbox04", "stepbox04_tbox", "0", "0", "185", "260", "", "");
Obj_Background ("stepbox04_tbox", "2", "image/pop_op_step_tbox04_n.png");
//SETP Num
Obj_Make (3, "stepbox04_tbox", "stepbox04_tbox_num", "65", "23", "19", "15", "4", "");
Txt_Font ("stepbox04_tbox_num", "5", "13", "#ffffff", "", "2", "", "");
//타이틀
Obj_Make (3, "stepbox04_tbox", "stepbox04_tbox_txt", "20", "55", "150", "150", "옵션메뉴명4", "");
Txt_Font ("stepbox04_tbox_txt", "3", "26", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("stepbox04_tbox_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
Obj_Class ("stepbox04_tbox_txt", "line_height_11");


//네비게이션 영역
Obj_Make (1, "stepbox04", "stepbox04_nav", "17", "192", "150", "16", "", "");
Obj_Class ("stepbox04_nav", "flex_container");
//01번 영역
Obj_Make (1, "stepbox04_nav", "stepbox04_nav01", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox04_nav01", "stepbox04_nav01_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox04_nav01", "stepbox04_nav01_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//02번 영역
Obj_Make (1, "stepbox04_nav", "stepbox04_nav02", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox04_nav02", "stepbox04_nav02_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox04_nav02", "stepbox04_nav02_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//03번 영역
Obj_Make (1, "stepbox04_nav", "stepbox04_nav03", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox04_nav03", "stepbox04_nav03_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox04_nav03", "stepbox04_nav03_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//04번 영역
Obj_Make (1, "stepbox04_nav", "stepbox04_nav04", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox04_nav04", "stepbox04_nav04_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox04_nav04", "stepbox04_nav04_on", "0", "0", "17", "16", "image/step_location_y.png", "");

Obj_Class ("stepbox04_nav01", "pop_op_step_nav");
Obj_Class ("stepbox04_nav02", "pop_op_step_nav");
Obj_Class ("stepbox04_nav03", "pop_op_step_nav");
Obj_Class ("stepbox04_nav04", "pop_op_step_nav");

Obj_AB_RE("stepbox04_nav01", "2");
Obj_AB_RE("stepbox04_nav02", "2");
Obj_AB_RE("stepbox04_nav03", "2");
Obj_AB_RE("stepbox04_nav04", "2");

Obj_View ("stepbox04_nav01_on", "1");
Obj_View ("stepbox04_nav02_on", "2");
Obj_View ("stepbox04_nav03_on", "2");
Obj_View ("stepbox04_nav04_on", "2");


//선택안함 영역
Obj_Make (1, "stepbox04_tbox", "stepbox04_tbox_noselect", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox04_tbox_noselect", "stepbox04_tbox_noselect_txt", "20", "13", "120", "20", "선택안함", "");
Txt_Font ("stepbox04_tbox_noselect_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox04_tbox_noselect_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//체크표시
Obj_Make (4, "stepbox04_tbox_noselect", "stepbox04_tbox_noselect_check", "141", "10", "28", "28", "image/op_step_check_n.png", "");
//선택안함 버튼
Obj_Make (2, "stepbox04_tbox_noselect", "stepbox04_tbox_noselect_btn", "0", "0", "185", "45", "BTN;stepbox04_tbox_noselect_btn;", "");
Obj_Opacity("stepbox04_tbox_noselect_btn", "0");

//필수선택 영역
Obj_Make (1, "stepbox04_tbox", "stepbox04_tbox_must", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox04_tbox_must", "stepbox04_tbox_must_txt", "20", "13", "120", "20", "필수선택", "");
Txt_Font ("stepbox04_tbox_must_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox04_tbox_must_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//필수선택 아이콘
Obj_Make (4, "stepbox04_tbox_must", "stepbox04_tbox_must_icon", "141", "10", "28", "28", "image/op_step_must.png", "");
Obj_View ("stepbox04_tbox_must", "2");


//메뉴 영역 
Obj_Make (1, "stepbox04", "stepbox04_mbox", "185", "0", "715", "260", "", "");
Obj_Background ("stepbox04_mbox", "2", "image/pop_op_step_mbox.png");
Obj_Overflow ("stepbox04_mbox", "1");


//옵션내역 전체 리스트 영역
Obj_Make (1, "stepbox04_mbox", "stepbox04_list", "25", "20", "1384", "220", "", "");
Obj_Class ("stepbox04_list", "flex_r_start_box");

//옵션내역 리스트별 영역
Obj_Make (1, "stepbox04_list", "stepbox04_list01", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list02", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list03", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list04", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list05", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list06", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list07", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox04_list", "stepbox04_list08", "0", "0", "145", "220", "", "");

Obj_Class ("stepbox04_list01", "pop_op_menu");
Obj_Class ("stepbox04_list02", "pop_op_menu");
Obj_Class ("stepbox04_list03", "pop_op_menu");
Obj_Class ("stepbox04_list04", "pop_op_menu");
Obj_Class ("stepbox04_list05", "pop_op_menu");
Obj_Class ("stepbox04_list06", "pop_op_menu");
Obj_Class ("stepbox04_list07", "pop_op_menu");
Obj_Class ("stepbox04_list08", "pop_op_menu");

Obj_AB_RE ("stepbox04_list01", "2");
Obj_AB_RE ("stepbox04_list02", "2");
Obj_AB_RE ("stepbox04_list03", "2");
Obj_AB_RE ("stepbox04_list04", "2");
Obj_AB_RE ("stepbox04_list05", "2");
Obj_AB_RE ("stepbox04_list06", "2");
Obj_AB_RE ("stepbox04_list08", "2");
Obj_AB_RE ("stepbox04_list07", "2");



//옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list01", "stepbox04_list01_btn", "000", "000", "145", "220", "BTN;stepbox04_list01_btn;", "");
Obj_Class ("stepbox04_list01_btn", "menu_btn");
Obj_Overflow ("stepbox04_list01_btn", "1");
Obj_Background ("stepbox04_list01_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list01_btn", "6");
Obj_Shadow_XY ("stepbox04_list01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list01_btn", "stepbox04_list01_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list01_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list01_overflow", "stepbox04_list01_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list01_overflow", "stepbox04_list01_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list01_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list01_overflow", "stepbox04_list01_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list01_btn", "stepbox04_list01_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list01_btn", "stepbox04_list01_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list01_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list01_title", "stepbox04_list01_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list01_title_over", "1");
Obj_Make (1, "stepbox04_list01_title_over", "stepbox04_list01_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list01_title_over_box", "stepbox04_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list01_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list01_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list01_title", "stepbox04_list01_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list01_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list01_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list01_btn", "stepbox04_list01_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list01_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list01_amt", "stepbox04_list01_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list01_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list01", "stepbox04_list01_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list01_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list01_change", "stepbox04_list01_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list01_change_txtbox", "stepbox04_list01_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list01_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list01_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list01_btn", "stepbox04_list01_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list01_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list01_check_bac", "2");
Obj_View ("stepbox04_list01_check_img", "2");


//옵션내역 02번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list02", "stepbox04_list02_btn", "000", "000", "145", "220", "BTN;stepbox04_list02_btn;", "");
Obj_Class ("stepbox04_list02_btn", "menu_btn");
Obj_Overflow ("stepbox04_list02_btn", "1");
Obj_Background ("stepbox04_list02_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list02_btn", "6");
Obj_Shadow_XY ("stepbox04_list02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list02_btn", "stepbox04_list02_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list02_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list02_overflow", "stepbox04_list02_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list02_overflow", "stepbox04_list02_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list02_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list02_overflow", "stepbox04_list02_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list02_btn", "stepbox04_list02_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list02_btn", "stepbox04_list02_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list02_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list02_title", "stepbox04_list02_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list02_title_over", "1");
Obj_Make (1, "stepbox04_list02_title_over", "stepbox04_list02_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list02_title_over_box", "stepbox04_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list02_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list02_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list02_title", "stepbox04_list02_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list02_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list02_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list02_btn", "stepbox04_list02_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list02_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list02_amt", "stepbox04_list02_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list02_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list02", "stepbox04_list02_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list02_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list02_change", "stepbox04_list02_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list02_change_txtbox", "stepbox04_list02_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list02_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list02_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list02_btn", "stepbox04_list02_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list02_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list02_check_bac", "2");
Obj_View ("stepbox04_list02_check_img", "2");


//옵션내역 03번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list03", "stepbox04_list03_btn", "000", "000", "145", "220", "BTN;stepbox04_list03_btn;", "");
Obj_Class ("stepbox04_list03_btn", "menu_btn");
Obj_Overflow ("stepbox04_list03_btn", "1");
Obj_Background ("stepbox04_list03_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list03_btn", "6");
Obj_Shadow_XY ("stepbox04_list03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list03_btn", "stepbox04_list03_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list03_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list03_overflow", "stepbox04_list03_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list03_overflow", "stepbox04_list03_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list03_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list03_overflow", "stepbox04_list03_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list03_btn", "stepbox04_list03_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list03_btn", "stepbox04_list03_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list03_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list03_title", "stepbox04_list03_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list03_title_over", "1");
Obj_Make (1, "stepbox04_list03_title_over", "stepbox04_list03_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list03_title_over_box", "stepbox04_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list03_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list03_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list03_title", "stepbox04_list03_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list03_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list03_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list03_btn", "stepbox04_list03_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list03_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list03_amt", "stepbox04_list03_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list03_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list03", "stepbox04_list03_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list03_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list03_change", "stepbox04_list03_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list03_change_txtbox", "stepbox04_list03_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list03_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list03_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list03_btn", "stepbox04_list03_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list03_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list03_check_bac", "2");
Obj_View ("stepbox04_list03_check_img", "2");


//옵션내역 04번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list04", "stepbox04_list04_btn", "000", "000", "145", "220", "BTN;stepbox04_list04_btn;", "");
Obj_Class ("stepbox04_list04_btn", "menu_btn");
Obj_Overflow ("stepbox04_list04_btn", "1");
Obj_Background ("stepbox04_list04_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list04_btn", "6");
Obj_Shadow_XY ("stepbox04_list04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list04_btn", "stepbox04_list04_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list04_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list04_overflow", "stepbox04_list04_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list04_overflow", "stepbox04_list04_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list04_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list04_overflow", "stepbox04_list04_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list04_btn", "stepbox04_list04_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list04_btn", "stepbox04_list04_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list04_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list04_title", "stepbox04_list04_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list04_title_over", "1");
Obj_Make (1, "stepbox04_list04_title_over", "stepbox04_list04_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list04_title_over_box", "stepbox04_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list04_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list04_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list04_title", "stepbox04_list04_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list04_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list04_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list04_btn", "stepbox04_list04_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list04_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list04_amt", "stepbox04_list04_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list04_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list04", "stepbox04_list04_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list04_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list04_change", "stepbox04_list04_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list04_change_txtbox", "stepbox04_list04_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list04_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list04_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list04_btn", "stepbox04_list04_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list04_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list04_check_bac", "2");
Obj_View ("stepbox04_list04_check_img", "2");


//옵션내역 05번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list05", "stepbox04_list05_btn", "000", "000", "145", "220", "BTN;stepbox04_list05_btn;", "");
Obj_Class ("stepbox04_list05_btn", "menu_btn");
Obj_Overflow ("stepbox04_list05_btn", "1");
Obj_Background ("stepbox04_list05_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list05_btn", "6");
Obj_Shadow_XY ("stepbox04_list05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list05_btn", "stepbox04_list05_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list05_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list05_overflow", "stepbox04_list05_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list05_overflow", "stepbox04_list05_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list05_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list05_overflow", "stepbox04_list05_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list05_btn", "stepbox04_list05_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list05_btn", "stepbox04_list05_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list05_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list05_title", "stepbox04_list05_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list05_title_over", "1");
Obj_Make (1, "stepbox04_list05_title_over", "stepbox04_list05_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list05_title_over_box", "stepbox04_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list05_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list05_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list05_title", "stepbox04_list05_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list05_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list05_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list05_btn", "stepbox04_list05_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list05_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list05_amt", "stepbox04_list05_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list05_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list05", "stepbox04_list05_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list05_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list05_change", "stepbox04_list05_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list05_change_txtbox", "stepbox04_list05_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list05_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list05_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list05_btn", "stepbox04_list05_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list05_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list05_check_bac", "2");
Obj_View ("stepbox04_list05_check_img", "2");


//옵션내역 06번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list06", "stepbox04_list06_btn", "000", "000", "145", "220", "BTN;stepbox04_list06_btn;", "");
Obj_Class ("stepbox04_list06_btn", "menu_btn");
Obj_Overflow ("stepbox04_list06_btn", "1");
Obj_Background ("stepbox04_list06_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list06_btn", "6");
Obj_Shadow_XY ("stepbox04_list06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list06_btn", "stepbox04_list06_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list06_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list06_overflow", "stepbox04_list06_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list06_overflow", "stepbox04_list06_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list06_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list06_overflow", "stepbox04_list06_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list06_btn", "stepbox04_list06_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list06_btn", "stepbox04_list06_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list06_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list06_title", "stepbox04_list06_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list06_title_over", "1");
Obj_Make (1, "stepbox04_list06_title_over", "stepbox04_list06_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list06_title_over_box", "stepbox04_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list06_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list06_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list06_title", "stepbox04_list06_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list06_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list06_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list06_btn", "stepbox04_list06_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list06_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list06_amt", "stepbox04_list06_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list06_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list06", "stepbox04_list06_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list06_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list06_change", "stepbox04_list06_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list06_change_txtbox", "stepbox04_list06_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list06_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list06_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list06_btn", "stepbox04_list06_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list06_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list06_check_bac", "2");
Obj_View ("stepbox04_list06_check_img", "2");


//옵션내역 07번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list07", "stepbox04_list07_btn", "000", "000", "145", "220", "BTN;stepbox04_list07_btn;", "");
Obj_Class ("stepbox04_list07_btn", "menu_btn");
Obj_Overflow ("stepbox04_list07_btn", "1");
Obj_Background ("stepbox04_list07_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list07_btn", "6");
Obj_Shadow_XY ("stepbox04_list07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list07_btn", "stepbox04_list07_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list07_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list07_overflow", "stepbox04_list07_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list07_overflow", "stepbox04_list07_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list07_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list07_overflow", "stepbox04_list07_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list07_btn", "stepbox04_list07_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list07_btn", "stepbox04_list07_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list07_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list07_title", "stepbox04_list07_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list07_title_over", "1");
Obj_Make (1, "stepbox04_list07_title_over", "stepbox04_list07_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list07_title_over_box", "stepbox04_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list07_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list07_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list07_title", "stepbox04_list07_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list07_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list07_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list07_btn", "stepbox04_list07_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list07_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list07_amt", "stepbox04_list07_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list07_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list07", "stepbox04_list07_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list07_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list07_change", "stepbox04_list07_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list07_change_txtbox", "stepbox04_list07_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list07_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list07_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list07_btn", "stepbox04_list07_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list07_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list07_check_bac", "2");
Obj_View ("stepbox04_list07_check_img", "2");


//옵션내역 08번 메뉴 버튼 요소
Obj_Make (2, "stepbox04_list08", "stepbox04_list08_btn", "000", "000", "145", "220", "BTN;stepbox04_list08_btn;", "");
Obj_Class ("stepbox04_list08_btn", "menu_btn");
Obj_Overflow ("stepbox04_list08_btn", "1");
Obj_Background ("stepbox04_list08_btn", "1", "#ffffff");
Obj_Radius ("stepbox04_list08_btn", "6");
Obj_Shadow_XY ("stepbox04_list08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox04_list08_btn", "stepbox04_list08_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox04_list08_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox04_list08_overflow", "stepbox04_list08_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox04_list08_overflow", "stepbox04_list08_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox04_list08_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox04_list08_overflow", "stepbox04_list08_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox04_list08_btn", "stepbox04_list08_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox04_list08_btn", "stepbox04_list08_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox04_list08_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox04_list08_title", "stepbox04_list08_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox04_list08_title_over", "1");
Obj_Make (1, "stepbox04_list08_title_over", "stepbox04_list08_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox04_list08_title_over_box", "stepbox04_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox04_list08_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list08_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox04_list08_title", "stepbox04_list08_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox04_list08_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox04_list08_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox04_list08_btn", "stepbox04_list08_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox04_list08_amt", "op_menu_amt");
Obj_Make (3, "stepbox04_list08_amt", "stepbox04_list08_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox04_list08_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox04_list08", "stepbox04_list08_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox04_list08_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox04_list08_change", "stepbox04_list08_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox04_list08_change_txtbox", "stepbox04_list08_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox04_list08_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox04_list08_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox04_list08_btn", "stepbox04_list08_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox04_list08_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox04_list08_check_bac", "2");
Obj_View ("stepbox04_list08_check_img", "2");



//변경가능 표시부분 애니메이션
Obj_Ani ("stepbox04_list01_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list02_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list03_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list04_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list05_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list06_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list07_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox04_list08_change", "bounce_change", "0", "1", "2", "0", "");



//비활성화 덮개
Obj_Make (1, "stepbox04", "stepbox04_cover", "0", "0", "970", "260", "", "");
Obj_View ("stepbox04_cover", "2");







//STEP 옵션 05 -----------------------------------------------
//활성 전체 테두리 박스
// Obj_Make (1, "stepbox05", "stepbox05_actbox", "-4", "-4", "900", "260", "", "");
// Obj_Class ("stepbox05_actbox", "op_step_actbox");
// Obj_View ("stepbox05_actbox", "2");
// Obj_Make (4, "stepbox05", "stepbox05_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg", "");

// Obj_Svg_Make ("stepbox05", "stepbox05_actbox", "-4", "-4", "908", "268", "image/pop_op_border_b.svg");
// Obj_View ("stepbox05_actbox", "2");

Obj_Make (1, "stepbox05", "stepbox05_actbox", "-4", "-4", "900", "260", "");
Obj_Class ("stepbox05_actbox", "stepbox_actbox_s");
Obj_View ("stepbox05_actbox", "2");



//다음 버튼
Obj_Make (2, "stepbox05", "stepbox05_next_btn", "910", "0", "60", "125", "BTN;stepbox05_next_btn;", "");
Obj_Radius ("stepbox05_next_btn", "6");
Obj_Shadow_XY ("stepbox05_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox05_next_btn", "2", "image/pop_option_next_n.png");
Btn_Click ("stepbox05_next_btn", "0", "0", "60", "125", "image/pop_option_next_y.png", "");
Obj_Make (4, "stepbox05_next_btn", "stepbox05_next_dis_img", "0", "0", "60", "125", "image/pop_option_next_d.png", "");
Obj_View ("stepbox05_next_dis_img", "2");

//이전 버튼
Obj_Make (2, "stepbox05", "stepbox05_prev_btn", "910", "135", "60", "125", "BTN;stepbox05_prev_btn;", "");
Obj_Radius ("stepbox05_prev_btn", "6");
Obj_Shadow_XY ("stepbox05_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
Obj_Background ("stepbox05_prev_btn", "2", "image/pop_option_prev_n.png");
Btn_Click ("stepbox05_prev_btn", "0", "0", "60", "125", "image/pop_option_prev_y.png", "");
Obj_Make (4, "stepbox05_prev_btn", "stepbox05_prev_dis_img", "0", "0", "60", "125", "image/pop_option_prev_d.png", "");
Obj_View ("stepbox05_prev_dis_img", "2");


//타이틀 영역
Obj_Make (1, "stepbox05", "stepbox05_tbox", "0", "0", "185", "260", "", "");
Obj_Background ("stepbox05_tbox", "2", "image/pop_op_step_tbox01_n.png");
//SETP Num
Obj_Make (3, "stepbox05_tbox", "stepbox05_tbox_num", "65", "23", "19", "15", "5", "");
Txt_Font ("stepbox05_tbox_num", "5", "13", "#ffffff", "", "2", "", "");
//타이틀
Obj_Make (3, "stepbox05_tbox", "stepbox05_tbox_txt", "20", "55", "150", "150", "옵션메뉴명5", "");
Txt_Font ("stepbox05_tbox_txt", "3", "26", "#ffffff", "", "1", "", "");
Obj_Shadow_XY ("stepbox05_tbox_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
Obj_Class ("stepbox05_tbox_txt", "line_height_11");


//네비게이션 영역
Obj_Make (1, "stepbox05", "stepbox05_nav", "17", "192", "150", "16", "", "");
Obj_Class ("stepbox05_nav", "flex_container");
//01번 영역
Obj_Make (1, "stepbox05_nav", "stepbox05_nav01", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox05_nav01", "stepbox05_nav01_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox05_nav01", "stepbox05_nav01_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//02번 영역
Obj_Make (1, "stepbox05_nav", "stepbox05_nav02", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox05_nav02", "stepbox05_nav02_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox05_nav02", "stepbox05_nav02_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//03번 영역
Obj_Make (1, "stepbox05_nav", "stepbox05_nav03", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox05_nav03", "stepbox05_nav03_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox05_nav03", "stepbox05_nav03_on", "0", "0", "17", "16", "image/step_location_y.png", "");
//04번 영역
Obj_Make (1, "stepbox05_nav", "stepbox05_nav04", "0", "0", "17", "16", "", "");
Obj_Make (4, "stepbox05_nav04", "stepbox05_nav04_off", "0", "0", "17", "16", "image/step_location_n.png", "");
Obj_Make (4, "stepbox05_nav04", "stepbox05_nav04_on", "0", "0", "17", "16", "image/step_location_y.png", "");

Obj_Class ("stepbox05_nav01", "pop_op_step_nav");
Obj_Class ("stepbox05_nav02", "pop_op_step_nav");
Obj_Class ("stepbox05_nav03", "pop_op_step_nav");
Obj_Class ("stepbox05_nav04", "pop_op_step_nav");

Obj_AB_RE("stepbox05_nav01", "2");
Obj_AB_RE("stepbox05_nav02", "2");
Obj_AB_RE("stepbox05_nav03", "2");
Obj_AB_RE("stepbox05_nav04", "2");

Obj_View ("stepbox05_nav01_on", "1");
Obj_View ("stepbox05_nav02_on", "2");
Obj_View ("stepbox05_nav03_on", "2");
Obj_View ("stepbox05_nav04_on", "2");


//선택안함 영역
Obj_Make (1, "stepbox05_tbox", "stepbox05_tbox_noselect", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox05_tbox_noselect", "stepbox05_tbox_noselect_txt", "20", "13", "120", "20", "선택안함", "");
Txt_Font ("stepbox05_tbox_noselect_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox05_tbox_noselect_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//체크표시
Obj_Make (4, "stepbox05_tbox_noselect", "stepbox05_tbox_noselect_check", "141", "10", "28", "28", "image/op_step_check_n.png", "");
//선택안함 버튼
Obj_Make (2, "stepbox05_tbox_noselect", "stepbox05_tbox_noselect_btn", "0", "0", "185", "45", "BTN;stepbox05_tbox_noselect_btn;", "");
Obj_Opacity("stepbox05_tbox_noselect_btn", "0");

//필수선택 영역
Obj_Make (1, "stepbox05_tbox", "stepbox05_tbox_must", "0", "215", "185", "45", "", "");
Obj_Make (3, "stepbox05_tbox_must", "stepbox05_tbox_must_txt", "20", "13", "120", "20", "필수선택", "");
Txt_Font ("stepbox05_tbox_must_txt", "3", "18", "#d2eaff", "", "1", "", "");
Obj_Shadow_XY ("stepbox05_tbox_must_txt", "2", "2", "4", "rgba(0,0,0,0.3)");
//필수선택 아이콘
Obj_Make (4, "stepbox05_tbox_must", "stepbox05_tbox_must_icon", "141", "10", "28", "28", "image/op_step_must.png", "");
Obj_View ("stepbox05_tbox_must", "2");


//메뉴 영역 
Obj_Make (1, "stepbox05", "stepbox05_mbox", "185", "0", "715", "260", "", "");
Obj_Background ("stepbox05_mbox", "2", "image/pop_op_step_mbox.png");
Obj_Overflow ("stepbox05_mbox", "1");


//옵션내역 전체 리스트 영역
Obj_Make (1, "stepbox05_mbox", "stepbox05_list", "25", "20", "1384", "220", "", "");
Obj_Class ("stepbox05_list", "flex_r_start_box");

//옵션내역 리스트별 영역
Obj_Make (1, "stepbox05_list", "stepbox05_list01", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list02", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list03", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list04", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list05", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list06", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list07", "0", "0", "145", "220", "", "");
Obj_Make (1, "stepbox05_list", "stepbox05_list08", "0", "0", "145", "220", "", "");

Obj_Class ("stepbox05_list01", "pop_op_menu");
Obj_Class ("stepbox05_list02", "pop_op_menu");
Obj_Class ("stepbox05_list03", "pop_op_menu");
Obj_Class ("stepbox05_list04", "pop_op_menu");
Obj_Class ("stepbox05_list05", "pop_op_menu");
Obj_Class ("stepbox05_list06", "pop_op_menu");
Obj_Class ("stepbox05_list07", "pop_op_menu");
Obj_Class ("stepbox05_list08", "pop_op_menu");

Obj_AB_RE ("stepbox05_list01", "2");
Obj_AB_RE ("stepbox05_list02", "2");
Obj_AB_RE ("stepbox05_list03", "2");
Obj_AB_RE ("stepbox05_list04", "2");
Obj_AB_RE ("stepbox05_list05", "2");
Obj_AB_RE ("stepbox05_list06", "2");
Obj_AB_RE ("stepbox05_list08", "2");
Obj_AB_RE ("stepbox05_list07", "2");



//옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list01", "stepbox05_list01_btn", "000", "000", "145", "220", "BTN;stepbox05_list01_btn;", "");
Obj_Class ("stepbox05_list01_btn", "menu_btn");
Obj_Overflow ("stepbox05_list01_btn", "1");
Obj_Background ("stepbox05_list01_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list01_btn", "6");
Obj_Shadow_XY ("stepbox05_list01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list01_btn", "stepbox05_list01_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list01_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list01_overflow", "stepbox05_list01_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list01_overflow", "stepbox05_list01_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list01_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list01_overflow", "stepbox05_list01_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list01_btn", "stepbox05_list01_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list01_btn", "stepbox05_list01_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list01_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list01_title", "stepbox05_list01_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list01_title_over", "1");
Obj_Make (1, "stepbox05_list01_title_over", "stepbox05_list01_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list01_title_over_box", "stepbox05_list01_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list01_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list01_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list01_title", "stepbox05_list01_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list01_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list01_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list01_btn", "stepbox05_list01_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list01_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list01_amt", "stepbox05_list01_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list01_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list01", "stepbox05_list01_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list01_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list01_change", "stepbox05_list01_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list01_change_txtbox", "stepbox05_list01_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list01_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list01_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list01_btn", "stepbox05_list01_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list01_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list01_check_bac", "2");
Obj_View ("stepbox05_list01_check_img", "2");


//옵션내역 02번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list02", "stepbox05_list02_btn", "000", "000", "145", "220", "BTN;stepbox05_list02_btn;", "");
Obj_Class ("stepbox05_list02_btn", "menu_btn");
Obj_Overflow ("stepbox05_list02_btn", "1");
Obj_Background ("stepbox05_list02_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list02_btn", "6");
Obj_Shadow_XY ("stepbox05_list02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list02_btn", "stepbox05_list02_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list02_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list02_overflow", "stepbox05_list02_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list02_overflow", "stepbox05_list02_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list02_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list02_overflow", "stepbox05_list02_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list02_btn", "stepbox05_list02_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list02_btn", "stepbox05_list02_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list02_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list02_title", "stepbox05_list02_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list02_title_over", "1");
Obj_Make (1, "stepbox05_list02_title_over", "stepbox05_list02_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list02_title_over_box", "stepbox05_list02_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list02_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list02_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list02_title", "stepbox05_list02_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list02_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list02_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list02_btn", "stepbox05_list02_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list02_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list02_amt", "stepbox05_list02_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list02_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list02", "stepbox05_list02_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list02_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list02_change", "stepbox05_list02_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list02_change_txtbox", "stepbox05_list02_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list02_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list02_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list02_btn", "stepbox05_list02_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list02_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list02_check_bac", "2");
Obj_View ("stepbox05_list02_check_img", "2");


//옵션내역 03번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list03", "stepbox05_list03_btn", "000", "000", "145", "220", "BTN;stepbox05_list03_btn;", "");
Obj_Class ("stepbox05_list03_btn", "menu_btn");
Obj_Overflow ("stepbox05_list03_btn", "1");
Obj_Background ("stepbox05_list03_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list03_btn", "6");
Obj_Shadow_XY ("stepbox05_list03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list03_btn", "stepbox05_list03_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list03_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list03_overflow", "stepbox05_list03_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list03_overflow", "stepbox05_list03_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list03_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list03_overflow", "stepbox05_list03_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list03_btn", "stepbox05_list03_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list03_btn", "stepbox05_list03_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list03_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list03_title", "stepbox05_list03_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list03_title_over", "1");
Obj_Make (1, "stepbox05_list03_title_over", "stepbox05_list03_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list03_title_over_box", "stepbox05_list03_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list03_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list03_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list03_title", "stepbox05_list03_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list03_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list03_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list03_btn", "stepbox05_list03_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list03_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list03_amt", "stepbox05_list03_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list03_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list03", "stepbox05_list03_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list03_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list03_change", "stepbox05_list03_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list03_change_txtbox", "stepbox05_list03_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list03_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list03_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list03_btn", "stepbox05_list03_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list03_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list03_check_bac", "2");
Obj_View ("stepbox05_list03_check_img", "2");


//옵션내역 04번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list04", "stepbox05_list04_btn", "000", "000", "145", "220", "BTN;stepbox05_list04_btn;", "");
Obj_Class ("stepbox05_list04_btn", "menu_btn");
Obj_Overflow ("stepbox05_list04_btn", "1");
Obj_Background ("stepbox05_list04_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list04_btn", "6");
Obj_Shadow_XY ("stepbox05_list04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list04_btn", "stepbox05_list04_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list04_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list04_overflow", "stepbox05_list04_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list04_overflow", "stepbox05_list04_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list04_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list04_overflow", "stepbox05_list04_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list04_btn", "stepbox05_list04_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list04_btn", "stepbox05_list04_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list04_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list04_title", "stepbox05_list04_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list04_title_over", "1");
Obj_Make (1, "stepbox05_list04_title_over", "stepbox05_list04_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list04_title_over_box", "stepbox05_list04_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list04_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list04_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list04_title", "stepbox05_list04_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list04_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list04_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list04_btn", "stepbox05_list04_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list04_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list04_amt", "stepbox05_list04_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list04_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list04", "stepbox05_list04_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list04_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list04_change", "stepbox05_list04_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list04_change_txtbox", "stepbox05_list04_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list04_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list04_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list04_btn", "stepbox05_list04_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list04_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list04_check_bac", "2");
Obj_View ("stepbox05_list04_check_img", "2");


//옵션내역 05번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list05", "stepbox05_list05_btn", "000", "000", "145", "220", "BTN;stepbox05_list05_btn;", "");
Obj_Class ("stepbox05_list05_btn", "menu_btn");
Obj_Overflow ("stepbox05_list05_btn", "1");
Obj_Background ("stepbox05_list05_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list05_btn", "6");
Obj_Shadow_XY ("stepbox05_list05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list05_btn", "stepbox05_list05_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list05_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list05_overflow", "stepbox05_list05_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list05_overflow", "stepbox05_list05_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list05_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list05_overflow", "stepbox05_list05_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list05_btn", "stepbox05_list05_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list05_btn", "stepbox05_list05_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list05_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list05_title", "stepbox05_list05_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list05_title_over", "1");
Obj_Make (1, "stepbox05_list05_title_over", "stepbox05_list05_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list05_title_over_box", "stepbox05_list05_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list05_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list05_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list05_title", "stepbox05_list05_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list05_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list05_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list05_btn", "stepbox05_list05_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list05_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list05_amt", "stepbox05_list05_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list05_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list05", "stepbox05_list05_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list05_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list05_change", "stepbox05_list05_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list05_change_txtbox", "stepbox05_list05_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list05_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list05_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list05_btn", "stepbox05_list05_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list05_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list05_check_bac", "2");
Obj_View ("stepbox05_list05_check_img", "2");


//옵션내역 06번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list06", "stepbox05_list06_btn", "000", "000", "145", "220", "BTN;stepbox05_list06_btn;", "");
Obj_Class ("stepbox05_list06_btn", "menu_btn");
Obj_Overflow ("stepbox05_list06_btn", "1");
Obj_Background ("stepbox05_list06_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list06_btn", "6");
Obj_Shadow_XY ("stepbox05_list06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list06_btn", "stepbox05_list06_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list06_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list06_overflow", "stepbox05_list06_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list06_overflow", "stepbox05_list06_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list06_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list06_overflow", "stepbox05_list06_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list06_btn", "stepbox05_list06_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list06_btn", "stepbox05_list06_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list06_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list06_title", "stepbox05_list06_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list06_title_over", "1");
Obj_Make (1, "stepbox05_list06_title_over", "stepbox05_list06_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list06_title_over_box", "stepbox05_list06_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list06_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list06_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list06_title", "stepbox05_list06_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list06_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list06_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list06_btn", "stepbox05_list06_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list06_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list06_amt", "stepbox05_list06_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list06_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list06", "stepbox05_list06_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list06_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list06_change", "stepbox05_list06_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list06_change_txtbox", "stepbox05_list06_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list06_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list06_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list06_btn", "stepbox05_list06_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list06_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list06_check_bac", "2");
Obj_View ("stepbox05_list06_check_img", "2");


//옵션내역 07번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list07", "stepbox05_list07_btn", "000", "000", "145", "220", "BTN;stepbox05_list07_btn;", "");
Obj_Class ("stepbox05_list07_btn", "menu_btn");
Obj_Overflow ("stepbox05_list07_btn", "1");
Obj_Background ("stepbox05_list07_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list07_btn", "6");
Obj_Shadow_XY ("stepbox05_list07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list07_btn", "stepbox05_list07_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list07_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list07_overflow", "stepbox05_list07_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list07_overflow", "stepbox05_list07_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list07_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list07_overflow", "stepbox05_list07_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list07_btn", "stepbox05_list07_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list07_btn", "stepbox05_list07_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list07_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list07_title", "stepbox05_list07_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list07_title_over", "1");
Obj_Make (1, "stepbox05_list07_title_over", "stepbox05_list07_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list07_title_over_box", "stepbox05_list07_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list07_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list07_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list07_title", "stepbox05_list07_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list07_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list07_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list07_btn", "stepbox05_list07_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list07_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list07_amt", "stepbox05_list07_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list07_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list07", "stepbox05_list07_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list07_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list07_change", "stepbox05_list07_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list07_change_txtbox", "stepbox05_list07_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list07_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list07_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list07_btn", "stepbox05_list07_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list07_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list07_check_bac", "2");
Obj_View ("stepbox05_list07_check_img", "2");


//옵션내역 08번 메뉴 버튼 요소
Obj_Make (2, "stepbox05_list08", "stepbox05_list08_btn", "000", "000", "145", "220", "BTN;stepbox05_list08_btn;", "");
Obj_Class ("stepbox05_list08_btn", "menu_btn");
Obj_Overflow ("stepbox05_list08_btn", "1");
Obj_Background ("stepbox05_list08_btn", "1", "#ffffff");
Obj_Radius ("stepbox05_list08_btn", "6");
Obj_Shadow_XY ("stepbox05_list08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");

//이미지 overflow 영역
Obj_Make (1, "stepbox05_list08_btn", "stepbox05_list08_overflow", "0", "0", "145", "145", "", "");
Obj_Class ("stepbox05_list08_overflow", "img_upper_radius");
//메뉴 버튼 이미지
Obj_Make (4, "stepbox05_list08_overflow", "stepbox05_list08_menu_img", "0", "0", "145", "145", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "stepbox05_list08_overflow", "stepbox05_list08_check_bac", "0", "0", "145", "145", "", "");
Obj_Background ("stepbox05_list08_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "stepbox05_list08_overflow", "stepbox05_list08_check_img", "0", "0", "145", "145", "image/pop_op_step_check.png", "");
//빛 cover
Obj_Make (4, "stepbox05_list08_btn", "stepbox05_list08_cover_img01", "0", "0", "145", "145", "image/menu_img_light.png", "");

//메뉴 타이틀 영역
Obj_Make (1, "stepbox05_list08_btn", "stepbox05_list08_title", "0", "145", "145", "75", "", "");
Obj_Class ("stepbox05_list08_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "stepbox05_list08_title", "stepbox05_list08_title_over", "10", "7", "125", "38", "", "");
Obj_Overflow ("stepbox05_list08_title_over", "1");
Obj_Make (1, "stepbox05_list08_title_over", "stepbox05_list08_title_over_box", "0", "0", "125", "38", "", "");
Obj_Make (3, "stepbox05_list08_title_over_box", "stepbox05_list08_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("stepbox05_list08_title_over_box_txt", "3", "16", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list08_title_over_box", "2", "2");
//금액
Obj_Make (3, "stepbox05_list08_title", "stepbox05_list08_title_money", "0", "48", "145", "", "5,000", "");
Txt_Font ("stepbox05_list08_title_money", "2", "15", "#ffffff", "", "2", "", "");
Obj_Class ("stepbox05_list08_title_money", "pop_op_menu_won");

//현재 수량 영역
Obj_Make (1, "stepbox05_list08_btn", "stepbox05_list08_amt", "0", "0", "34", "34", "", "");
Obj_Class ("stepbox05_list08_amt", "op_menu_amt");
Obj_Make (3, "stepbox05_list08_amt", "stepbox05_list08_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("stepbox05_list08_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//옵션 변경가능 표시
Obj_Make (1, "stepbox05_list08", "stepbox05_list08_change", "85", "-10", "71", "48", "", "");
Obj_Background ("stepbox05_list08_change", "2", "image/pop_op_change_bg.png");
Obj_Make (1, "stepbox05_list08_change", "stepbox05_list08_change_txtbox", "4", "2", "65", "30", "", "");
Obj_Make (3, "stepbox05_list08_change_txtbox", "stepbox05_list08_change_txtbox_txt", "0", "0", "65", "30", "변경", "");
Txt_Font ("stepbox05_list08_change_txtbox_txt", "2", "15", "#ffffff", "", "2", "", "");
Div_Txt_Align ("stepbox05_list08_change_txtbox", "2", "2");
//border
Obj_Make (1, "stepbox05_list08_btn", "stepbox05_list08_btn_border", "0", "0", "145", "220", "", "");
Obj_Class ("stepbox05_list08_btn_border", "order_menu_border");
//체크 이미지 on/off
Obj_View ("stepbox05_list08_check_bac", "2");
Obj_View ("stepbox05_list08_check_img", "2");



//변경가능 표시부분 애니메이션
Obj_Ani ("stepbox05_list01_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list02_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list03_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list04_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list05_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list06_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list07_change", "bounce_change", "0", "1", "2", "0", "");
Obj_Ani ("stepbox05_list08_change", "bounce_change", "0", "1", "2", "0", "");



//비활성화 덮개
Obj_Make (1, "stepbox05", "stepbox05_cover", "0", "0", "970", "260", "", "");
Obj_View ("stepbox05_cover", "2");


//buttons div
//pop_op_btn_box
//팝업 버튼 영역
Obj_Make (1, "pop_op", "pop_op_btn_box", "250", "1741", "528", "90", "", "");

//pop_op_cancel_btn
//팝업 취소 버튼
Obj_Make (2, "pop_op_btn_box", "pop_op_cancel_btn", "0", "0", "244", "90", "BTN;pop_op_cancel_btn;", "");
Obj_Radius ("pop_op_cancel_btn", "6");
Obj_Shadow_XY ("pop_op_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_op_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_op_cancel_btn", "pop_op_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_op_cancel_dis_img", "2");
//pop_op_cancel_txt
//팝업 취소 버튼 텍스트
Obj_Make (3, "pop_op_cancel_btn", "pop_op_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_op_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_op_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_op_cancel_btn", "2", "2");

//pop_op_ok_btn
//팝업 확인 버튼
Obj_Make (2, "pop_op_btn_box", "pop_op_ok_btn", "284", "0", "244", "90", "BTN;pop_op_ok_btn;", "");
Obj_Radius ("pop_op_ok_btn", "6");
Obj_Shadow_XY ("pop_op_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_op_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_op_ok_btn", "pop_op_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_op_ok_dis_img", "2");
//pop_op_ok_txt
//팝업 확인 버튼 텍스트
Obj_Make (3, "pop_op_ok_btn", "pop_op_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_op_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_op_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_op_ok_btn", "2", "2");






















/* ===================================== pop_qu structure ====================================== */

//pop_qu
Obj_Make (1, "screen_default", "pop_qu", "10", "355", "898", "638", "1", "");
Obj_Background ("pop_qu", "2", "image/op_ch_quantity_board.png");

//pop_qu_photo
//팝업 메뉴사진 영역
Obj_Make (1, "pop_qu", "pop_qu_photo", "44", "50", "270", "270", "", "");
Obj_Radius ("pop_qu_photo", "6");
Obj_Overflow ("pop_qu_photo", "1");
Obj_Background ("pop_qu_photo", "1", "#082c5d");
//팝업 메뉴사진 이미지
Obj_Make (4, "pop_qu_photo", "pop_qu_photo_img", "0", "0", "270", "270", "image/noimage_w.png", "");
Obj_Make (4, "pop_qu", "pop_qu_photo_cover_img", "44", "50", "271", "271", "image/op_ch_quantity_photo_light.png", "");

//팝업 메뉴정보 영역
Obj_Make (1, "pop_qu", "pop_qu_info", "344", "50", "500", "255", "", "");
//pop_qu_title
//팝업 메뉴 타이틀 텍스트
Obj_Make (1, "pop_qu_info", "pop_qu_info_title_over", "0", "0", "500", "45", "", "");
Obj_Overflow ("pop_qu_info_title_over", "1");
Obj_Make (1, "pop_qu_info_title_over", "pop_qu_info_title_over_box", "0", "0", "500", "45", "", "");
Obj_Make (3, "pop_qu_info_title_over_box", "pop_qu_info_title_over_box_txt", "0", "0", "500", "", "가나다라마바사아자차카타파하가나다라", "");
Txt_Font ("pop_qu_info_title_over_box_txt", "3", "38", "#222222", "", "1", "", "");
Obj_Class ("pop_qu_info_title_over_box_txt", "line_height_12");
// Txt_Fill_Font ("pop_qu_info_title_over_box_txt", "40", "34");

//pop_qu_price
//팝업 메뉴 가격 원화 표시 이미지
//팝업 메뉴 가격 텍스트
Obj_Make (3, "pop_qu_info", "pop_qu_price_txt", "0", "72", "200", "30", "6,000", "");
Txt_Font ("pop_qu_price_txt", "3", "26", "#000000", "", "1", "", "");
Obj_Class ("pop_qu_price_txt", "pop_won");
//pop_qu_info
//팝업 메뉴 세부정보 텍스트
Obj_Make (1, "pop_qu_info", "pop_qu_detail_box", "0", "113", "500", "155", "", "");
// Txt_Iscroll ("pop_qu_detail_box");
Obj_Class ("pop_qu_detail_box", "txt_scrollbar");
Obj_Make (3, "pop_qu_detail_box", "pop_qu_detail_txt", "0", "0", "", "", "메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다.", "");
Txt_Font ("pop_qu_detail_txt", "2", "18", "#000000", "", "1", "", "");
Obj_Class ("pop_qu_detail_txt", "info_detail");
Txt_Drag_Scroll ("pop_qu_detail_box");
//pop_qu_amt
//팝업 메뉴 총액 텍스트
Obj_Make (3, "pop_qu_info", "pop_qu_amt_txt", "235", "316", "270", "44", "18,000", "");
Txt_Font ("pop_qu_amt_txt", "3", "45", "#000000", "", "3", "", "");
Obj_Class ("pop_qu_amt_txt", "pop_big_won");

//pop_qu_qty
//팝업 메뉴 수량 영역
Obj_Make (1, "pop_qu", "pop_qu_qty", "44", "330", "270", "80", "", "");
//pop_qu_qty_num
//팝업 현재 수량 표시 영역
Obj_Make (1, "pop_qu_qty", "pop_qu_qty_box", "90", "0", "90", "80", "", "");
//팝업 현재 수량 표시 텍스트
Obj_Make (3, "pop_qu_qty_box", "pop_qu_qty_txt", "0", "0", "90", "80", "3", "");
Txt_Font ("pop_qu_qty_txt", "3", "55", "#000000", "", "2", "", "");
Div_Txt_Align ("pop_qu_qty_box", "2", "2");


//pop_qu_qty_minus_btn
//팝업 수량 마이너스 버튼
Obj_Make (2, "pop_qu_qty", "pop_qu_qty_minus_btn", "0", "0", "80", "80", "BTN;pop_qu_qty_minus_btn;", "");
Obj_Radius ("pop_qu_qty_minus_btn", "6");
Obj_Shadow_XY ("pop_qu_qty_minus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_qu_qty_minus_btn", "2", "image/option_quantity_minus_n.png");
Btn_Click ("pop_qu_qty_minus_btn", "0", "0", "80", "80", "image/option_quantity_minus_y.png", "");
Obj_Make (4, "pop_qu_qty_minus_btn", "pop_qu_qty_minus_dis_img", "0", "0", "80", "80", "image/option_quantity_minus_d.png", "");
Obj_View ("pop_qu_qty_minus_dis_img", "2");

//pop_qu_qty_plus_btn
//팝업 수량 플러스 버튼
Obj_Make (2, "pop_qu_qty", "pop_qu_qty_plus_btn", "190", "0", "80", "80", "BTN;pop_qu_qty_plus_btn;", "");
Obj_Radius ("pop_qu_qty_plus_btn", "6");
Obj_Shadow_XY ("pop_qu_qty_plus_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_qu_qty_plus_btn", "2", "image/option_quantity_plus_n.png");
Btn_Click ("pop_qu_qty_plus_btn", "0", "0", "80", "80", "image/option_quantity_plus_y.png", "");
Obj_Make (4, "pop_qu_qty_plus_btn", "pop_qu_qty_plus_dis_img", "0", "0", "80", "80", "image/option_quantity_plus_d.png", "");
Obj_View ("pop_qu_qty_plus_dis_img", "2");


//buttons div
//pop_qu_btn_box
//팝업 버튼 영역
Obj_Make (1, "pop_qu", "pop_qu_btn_box", "180", "475", "528", "90", "", "");

//pop_qu_cancel_btn
//팝업 취소 버튼
Obj_Make (2, "pop_qu_btn_box", "pop_qu_cancel_btn", "0", "0", "244", "90", "BTN;pop_qu_cancel_btn;", "");
Obj_Radius ("pop_qu_cancel_btn", "6");
Obj_Shadow_XY ("pop_qu_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_qu_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_qu_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_qu_cancel_btn", "pop_qu_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_qu_cancel_dis_img", "2");
//pop_qu_cancel_txt
//팝업 취소 버튼 텍스트
Obj_Make (3, "pop_qu_cancel_btn", "pop_qu_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_qu_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_qu_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_qu_cancel_btn", "2", "2");

//pop_qu_ok_btn
//팝업 확인 버튼
Obj_Make (2, "pop_qu_btn_box", "pop_qu_ok_btn", "284", "0", "244", "90", "BTN;pop_qu_ok_btn;", "");
Obj_Radius ("pop_qu_ok_btn", "6");
Obj_Shadow_XY ("pop_qu_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_qu_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_qu_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_qu_ok_btn", "pop_qu_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_qu_ok_dis_img", "2");
//pop_qu_ok_txt
//팝업 확인 버튼 텍스트
Obj_Make (3, "pop_qu_ok_btn", "pop_qu_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_qu_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_qu_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_qu_ok_btn", "2", "2");







/* ===================================== pop_op_choice structure ====================================== */
//pop_op_choice
Obj_Make (1, "screen_default", "pop_op_choice", "10", "200", "988", "1007", "1", "");
Obj_Background ("pop_op_choice", "2", "image/pop_option_choice_board.png");
Obj_Overflow ("pop_op_choice", "1");

//타이틀 영역
Obj_Make (1, "pop_op_choice", "pop_op_choice_title", "14", "10", "950", "100", "", "");
//타이틀 그림자
Obj_Make (3, "pop_op_choice_title", "pop_op_choice_title_txt_shadow", "91", "28", "500", "50", "SELECT AN OPTION", "");
Txt_Font ("pop_op_choice_title_txt_shadow", "3", "50", "rgba(0,0,0,0.4)", "", "1", "", "");
Obj_Class ("pop_op_choice_title_txt_shadow", "choice_gradient_shadow");
//타이틀 
Obj_Make (3, "pop_op_choice_title", "pop_op_choice_title_txt", "90", "27", "500", "50", "SELECT AN OPTION", "");
Txt_Font ("pop_op_choice_title_txt", "3", "50", "#ffffff", "", "1", "", "");
Obj_Class ("pop_op_choice_title_txt", "choice_gradient");
//종류 텍스트
Obj_Make (3, "pop_op_choice_title", "pop_op_choice_title_menu", "500", "30", "420", "50", "음료수", "");
Txt_Font ("pop_op_choice_title_menu", "3", "42", "#d2eaff", "", "3", "", "");
Obj_Shadow ("pop_op_choice_title_menu", "6", "rgba(0,0,0,0.6)");

//옵션 영역
Obj_Make (1, "pop_op_choice", "pop_op_choice_m", "44", "135", "890", "669", "", "");

//pop_op_choice_m
//옵션내역 영역
//옵션내역 이전 버튼
Obj_Make (2, "pop_op_choice_m", "pop_op_choice_m_prev_btn", "0", "0", "60", "621", "BTN;pop_op_choice_m_prev_btn;", "");
Obj_Radius ("pop_op_choice_m_prev_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_prev_btn", "3", "3", "5", "rgba(0,0,0,0.3)");
//옵션내역 다음 버튼
Obj_Make (2, "pop_op_choice_m", "pop_op_choice_m_next_btn", "830", "0", "60", "621", "BTN;pop_op_choice_m_next_btn;", "");
Obj_Radius ("pop_op_choice_m_next_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_next_btn", "3", "3", "5", "rgba(0,0,0,0.3)");

//옵션내역 노출 영역
Obj_Make (1, "pop_op_choice_m", "pop_op_choice_m_box", "70", "0", "750", "621", "", "");
Obj_Make (1, "pop_op_choice_m_box", "pop_op_choice_m_box_overflow", "0", "0", "750", "621", "", "");
Obj_Overflow ("pop_op_choice_m_box_overflow", "1");

//옵션내역 리스트 네비게이션 영역
Obj_Make (1, "pop_op_choice_m", "pop_op_choice_m_nav", "0", "433", "890", "19", "", "");
Obj_Class ("pop_op_choice_m_nav", "flex_r_center_box");

//pop_op_choice_m_prev_btn
//옵션내역 이전 버튼 요소
Obj_Background ("pop_op_choice_m_prev_btn", "2", "image/pop_option_choice_prev_n.png");
Btn_Click ("pop_op_choice_m_prev_btn", "0", "0", "60", "621", "image/pop_option_choice_prev_y.png", "");
Obj_Make (4, "pop_op_choice_m_prev_btn", "pop_op_choice_m_prev_dis_img", "0", "0", "60", "621", "image/pop_option_choice_prev_d.png", "");
Obj_View ("pop_op_choice_m_prev_dis_img", "2");

//pop_op_choice_m_next_btn
//옵션내역 다음 버튼 요소
Obj_Background ("pop_op_choice_m_next_btn", "2", "image/pop_option_choice_next_n.png");
Btn_Click ("pop_op_choice_m_next_btn", "0", "0", "60", "621", "image/pop_option_choice_next_y.png", "");
Obj_Make (4, "pop_op_choice_m_next_btn", "pop_op_choice_m_next_dis_img", "0", "0", "60", "621", "image/pop_option_choice_next_d.png", "");
Obj_View ("pop_op_choice_m_next_dis_img", "2");

//op_list
//옵션내역 전체 리스트 영역
Obj_Make (1, "pop_op_choice_m_box_overflow", "pop_op_choice_m_list", "0", "25", "1500", "580", "", "");
//옵션내역 페이지 영역
Obj_Make (1, "pop_op_choice_m_list", "pop_op_choice_m_list01", "000", "0", "750", "300", "", "");
Obj_Make (1, "pop_op_choice_m_list", "pop_op_choice_m_list02", "750", "0", "750", "300", "", "");

Obj_Class ("pop_op_choice_m_list01", "flex_container_wrap");
Obj_Class ("pop_op_choice_m_list02", "flex_container_wrap");


//옵션내역 리스트별 영역
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0101", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0102", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0103", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0104", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0105", "0", "0", "118", "177", "", "");

Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0106", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0107", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0108", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0109", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0110", "0", "0", "118", "177", "", "");

Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0111", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0112", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0113", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0114", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list01", "pop_op_choice_m_list0115", "0", "0", "118", "177", "", "");

Obj_Class ("pop_op_choice_m_list0101", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0102", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0103", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0104", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0105", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0106", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0107", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0108", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0109", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0110", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0111", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0112", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0113", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0114", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0115", "pop_op_choice_menu");

Obj_AB_RE("pop_op_choice_m_list0101", "2");
Obj_AB_RE("pop_op_choice_m_list0102", "2");
Obj_AB_RE("pop_op_choice_m_list0103", "2");
Obj_AB_RE("pop_op_choice_m_list0104", "2");
Obj_AB_RE("pop_op_choice_m_list0105", "2");
Obj_AB_RE("pop_op_choice_m_list0106", "2");
Obj_AB_RE("pop_op_choice_m_list0107", "2");
Obj_AB_RE("pop_op_choice_m_list0108", "2");
Obj_AB_RE("pop_op_choice_m_list0109", "2");
Obj_AB_RE("pop_op_choice_m_list0110", "2");
Obj_AB_RE("pop_op_choice_m_list0111", "2");
Obj_AB_RE("pop_op_choice_m_list0112", "2");
Obj_AB_RE("pop_op_choice_m_list0113", "2");
Obj_AB_RE("pop_op_choice_m_list0114", "2");
Obj_AB_RE("pop_op_choice_m_list0115", "2");


//테스트용 빈 리스트 영역
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0201", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0202", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0203", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0204", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0205", "0", "0", "118", "177", "", "");

Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0206", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0207", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0208", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0209", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0210", "0", "0", "118", "177", "", "");

Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0211", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0212", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0213", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0214", "0", "0", "118", "177", "", "");
Obj_Make (1, "pop_op_choice_m_list02", "pop_op_choice_m_list0215", "0", "0", "118", "177", "", "");

Obj_Class ("pop_op_choice_m_list0201", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0202", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0203", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0204", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0205", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0206", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0207", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0208", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0209", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0210", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0211", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0212", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0213", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0214", "pop_op_choice_menu");
Obj_Class ("pop_op_choice_m_list0215", "pop_op_choice_menu");

Obj_AB_RE("pop_op_choice_m_list0201", "2");
Obj_AB_RE("pop_op_choice_m_list0202", "2");
Obj_AB_RE("pop_op_choice_m_list0203", "2");
Obj_AB_RE("pop_op_choice_m_list0204", "2");
Obj_AB_RE("pop_op_choice_m_list0205", "2");
Obj_AB_RE("pop_op_choice_m_list0206", "2");
Obj_AB_RE("pop_op_choice_m_list0207", "2");
Obj_AB_RE("pop_op_choice_m_list0208", "2");
Obj_AB_RE("pop_op_choice_m_list0209", "2");
Obj_AB_RE("pop_op_choice_m_list0210", "2");
Obj_AB_RE("pop_op_choice_m_list0211", "2");
Obj_AB_RE("pop_op_choice_m_list0212", "2");
Obj_AB_RE("pop_op_choice_m_list0213", "2");
Obj_AB_RE("pop_op_choice_m_list0214", "2");
Obj_AB_RE("pop_op_choice_m_list0215", "2");



//pop_op_choice_m_list0101
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0101", "pop_op_choice_m_list0101_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0101_btn;", "");
Obj_Class ("pop_op_choice_m_list0101_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0101_btn", "1");
Obj_Background ("pop_op_choice_m_list0101_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0101_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0101_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0101_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0101_btn", "pop_op_choice_m_list0101_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0101_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0101_overflow", "pop_op_choice_m_list0101_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0101_overflow", "pop_op_choice_m_list0101_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0101_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0101_overflow", "pop_op_choice_m_list0101_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0101_btn", "pop_op_choice_m_list0101_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0101_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0101_btn", "pop_op_choice_m_list0101_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0101_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0101_title", "pop_op_choice_m_list0101_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0101_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0101_title_over", "pop_op_choice_m_list0101_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0101_title_over_box", "pop_op_choice_m_list0101_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0101_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0101_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0101_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0101_title", "pop_op_choice_m_list0101_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0101_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0101_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0101_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0101_btn", "pop_op_choice_m_list0101_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0101_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0101_amt", "pop_op_choice_m_list0101_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0101_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0101_btn", "pop_op_choice_m_list0101_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0101_btn_border", "order_menu_border");
//수량표시 on/off
// Obj_View ("pop_op_choice_m_list0101_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0101_check_bac", "2");
Obj_View ("pop_op_choice_m_list0101_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0101_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0101_amt", "op_menu_amt_y");

//pop_op_choice_m_list0102
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0102", "pop_op_choice_m_list0102_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0102_btn;", "");
Obj_Class ("pop_op_choice_m_list0102_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0102_btn", "1");
Obj_Background ("pop_op_choice_m_list0102_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0102_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0102_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0102_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0102_btn", "pop_op_choice_m_list0102_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0102_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0102_overflow", "pop_op_choice_m_list0102_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0102_overflow", "pop_op_choice_m_list0102_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0102_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0102_overflow", "pop_op_choice_m_list0102_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0102_btn", "pop_op_choice_m_list0102_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0102_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0102_btn", "pop_op_choice_m_list0102_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0102_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0102_title", "pop_op_choice_m_list0102_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0102_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0102_title_over", "pop_op_choice_m_list0102_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0102_title_over_box", "pop_op_choice_m_list0102_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0102_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0102_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0102_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0102_title", "pop_op_choice_m_list0102_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0102_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0102_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0102_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0102_btn", "pop_op_choice_m_list0102_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0102_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0102_amt", "pop_op_choice_m_list0102_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0102_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0102_btn", "pop_op_choice_m_list0102_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0102_btn_border", "order_menu_border");
// Obj_View ("pop_op_choice_m_list0102_amt", "2");
//체크 이미지 on/off
// Obj_View ("pop_op_choice_m_list0102_check_bac", "2");
// Obj_View ("pop_op_choice_m_list0102_check_img", "2");
Obj_Class_Change ("pop_op_choice_m_list0102_title", "op_menu_title_bg_y");
Obj_Class_Change ("pop_op_choice_m_list0102_amt", "op_menu_amt_y");

//pop_op_choice_m_list0103
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0103", "pop_op_choice_m_list0103_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0103_btn;", "");
Obj_Class ("pop_op_choice_m_list0103_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0103_btn", "1");
Obj_Background ("pop_op_choice_m_list0103_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0103_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0103_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0103_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0103_btn", "pop_op_choice_m_list0103_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0103_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0103_overflow", "pop_op_choice_m_list0103_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0103_overflow", "pop_op_choice_m_list0103_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0103_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0103_overflow", "pop_op_choice_m_list0103_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0103_btn", "pop_op_choice_m_list0103_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0103_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0103_btn", "pop_op_choice_m_list0103_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0103_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0103_title", "pop_op_choice_m_list0103_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0103_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0103_title_over", "pop_op_choice_m_list0103_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0103_title_over_box", "pop_op_choice_m_list0103_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0103_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0103_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0103_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0103_title", "pop_op_choice_m_list0103_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0103_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0103_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0103_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0103_btn", "pop_op_choice_m_list0103_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0103_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0103_amt", "pop_op_choice_m_list0103_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0103_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0103_btn", "pop_op_choice_m_list0103_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0103_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0103_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0103_check_bac", "2");
Obj_View ("pop_op_choice_m_list0103_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0103_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0103_amt", "op_menu_amt_y");

//pop_op_choice_m_list0104
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0104", "pop_op_choice_m_list0104_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0104_btn;", "");
Obj_Class ("pop_op_choice_m_list0104_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0104_btn", "1");
Obj_Background ("pop_op_choice_m_list0104_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0104_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0104_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0104_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0104_btn", "pop_op_choice_m_list0104_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0104_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0104_overflow", "pop_op_choice_m_list0104_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0104_overflow", "pop_op_choice_m_list0104_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0104_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0104_overflow", "pop_op_choice_m_list0104_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0104_btn", "pop_op_choice_m_list0104_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0104_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0104_btn", "pop_op_choice_m_list0104_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0104_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0104_title", "pop_op_choice_m_list0104_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0104_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0104_title_over", "pop_op_choice_m_list0104_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0104_title_over_box", "pop_op_choice_m_list0104_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0104_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0104_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0104_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0104_title", "pop_op_choice_m_list0104_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0104_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0104_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0104_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0104_btn", "pop_op_choice_m_list0104_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0104_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0104_amt", "pop_op_choice_m_list0104_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0104_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0104_btn", "pop_op_choice_m_list0104_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0104_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0104_amt", "2");
//체크 이미지 on/off
// Obj_View ("pop_op_choice_m_list0104_check_bac", "2");
// Obj_View ("pop_op_choice_m_list0104_check_img", "2");
Obj_Class_Change ("pop_op_choice_m_list0104_title", "op_menu_title_bg_y");
Obj_Class_Change ("pop_op_choice_m_list0104_amt", "op_menu_amt_y");

//pop_op_choice_m_list0105
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0105", "pop_op_choice_m_list0105_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0105_btn;", "");
Obj_Class ("pop_op_choice_m_list0105_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0105_btn", "1");
Obj_Background ("pop_op_choice_m_list0105_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0105_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0105_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0105_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0105_btn", "pop_op_choice_m_list0105_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0105_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0105_overflow", "pop_op_choice_m_list0105_menu_img", "0", "0", "118", "118", "image/noimage.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0105_overflow", "pop_op_choice_m_list0105_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0105_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0105_overflow", "pop_op_choice_m_list0105_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0105_btn", "pop_op_choice_m_list0105_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0105_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0105_btn", "pop_op_choice_m_list0105_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0105_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0105_title", "pop_op_choice_m_list0105_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0105_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0105_title_over", "pop_op_choice_m_list0105_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0105_title_over_box", "pop_op_choice_m_list0105_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0105_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0105_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0105_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0105_title", "pop_op_choice_m_list0105_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0105_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0105_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0105_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0105_btn", "pop_op_choice_m_list0105_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0105_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0105_amt", "pop_op_choice_m_list0105_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0105_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0105_btn", "pop_op_choice_m_list0105_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0105_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0105_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0105_check_bac", "2");
Obj_View ("pop_op_choice_m_list0105_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0105_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0105_amt", "op_menu_amt_y");

//pop_op_choice_m_list0106
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0106", "pop_op_choice_m_list0106_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0106_btn;", "");
Obj_Class ("pop_op_choice_m_list0106_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0106_btn", "1");
Obj_Background ("pop_op_choice_m_list0106_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0106_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0106_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0106_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0106_btn", "pop_op_choice_m_list0106_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0106_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0106_overflow", "pop_op_choice_m_list0106_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0106_overflow", "pop_op_choice_m_list0106_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0106_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0106_overflow", "pop_op_choice_m_list0106_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0106_btn", "pop_op_choice_m_list0106_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0106_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0106_btn", "pop_op_choice_m_list0106_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0106_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0106_title", "pop_op_choice_m_list0106_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0106_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0106_title_over", "pop_op_choice_m_list0106_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0106_title_over_box", "pop_op_choice_m_list0106_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0106_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0106_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0106_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0106_title", "pop_op_choice_m_list0106_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0106_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0106_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0106_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0106_btn", "pop_op_choice_m_list0106_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0106_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0106_amt", "pop_op_choice_m_list0106_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0106_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0106_btn", "pop_op_choice_m_list0106_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0106_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0106_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0106_check_bac", "2");
Obj_View ("pop_op_choice_m_list0106_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0106_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0106_amt", "op_menu_amt_y");

//pop_op_choice_m_list0107
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0107", "pop_op_choice_m_list0107_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0107_btn;", "");
Obj_Class ("pop_op_choice_m_list0107_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0107_btn", "1");
Obj_Background ("pop_op_choice_m_list0107_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0107_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0107_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0107_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0107_btn", "pop_op_choice_m_list0107_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0107_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0107_overflow", "pop_op_choice_m_list0107_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0107_overflow", "pop_op_choice_m_list0107_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0107_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0107_overflow", "pop_op_choice_m_list0107_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0107_btn", "pop_op_choice_m_list0107_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0107_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0107_btn", "pop_op_choice_m_list0107_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0107_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0107_title", "pop_op_choice_m_list0107_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0107_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0107_title_over", "pop_op_choice_m_list0107_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0107_title_over_box", "pop_op_choice_m_list0107_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0107_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0107_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0107_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0107_title", "pop_op_choice_m_list0107_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0107_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0107_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0107_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0107_btn", "pop_op_choice_m_list0107_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0107_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0107_amt", "pop_op_choice_m_list0107_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0107_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0107_btn", "pop_op_choice_m_list0107_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0107_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0107_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0107_check_bac", "2");
Obj_View ("pop_op_choice_m_list0107_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0107_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0107_amt", "op_menu_amt_y");

//pop_op_choice_m_list0111
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0111", "pop_op_choice_m_list0111_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0111_btn;", "");
Obj_Class ("pop_op_choice_m_list0111_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0111_btn", "1");
Obj_Background ("pop_op_choice_m_list0111_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0111_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0111_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0111_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0111_btn", "pop_op_choice_m_list0111_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0111_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0111_overflow", "pop_op_choice_m_list0111_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0111_overflow", "pop_op_choice_m_list0111_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0111_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0111_overflow", "pop_op_choice_m_list0111_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0111_btn", "pop_op_choice_m_list0111_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0111_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0111_btn", "pop_op_choice_m_list0111_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0111_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0111_title", "pop_op_choice_m_list0111_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0111_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0111_title_over", "pop_op_choice_m_list0111_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0111_title_over_box", "pop_op_choice_m_list0111_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0111_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0111_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0111_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0111_title", "pop_op_choice_m_list0111_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0111_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0111_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0111_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0111_btn", "pop_op_choice_m_list0111_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0111_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0111_amt", "pop_op_choice_m_list0111_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0111_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0111_btn", "pop_op_choice_m_list0111_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0111_btn_border", "order_menu_border");
//수량표시 on/off
Obj_View ("pop_op_choice_m_list0111_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0111_check_bac", "2");
Obj_View ("pop_op_choice_m_list0111_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0111_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0111_amt", "op_menu_amt_y");


//pop_op_choice_m_list0201
//현재 옵션내역 01번 메뉴 버튼 요소
Obj_Make (2, "pop_op_choice_m_list0201", "pop_op_choice_m_list0201_btn", "000", "000", "118", "177", "BTN;pop_op_choice_m_list0201_btn;", "");
Obj_Class ("pop_op_choice_m_list0201_btn", "menu_btn");
Obj_Overflow ("pop_op_choice_m_list0201_btn", "1");
Obj_Background ("pop_op_choice_m_list0201_btn", "1", "#ffffff");
Obj_Radius ("pop_op_choice_m_list0201_btn", "6");
Obj_Shadow_XY ("pop_op_choice_m_list0201_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
//pop_op_choice_m_list0201_menu_img
//이미지 overflow 영역
Obj_Make (1, "pop_op_choice_m_list0201_btn", "pop_op_choice_m_list0201_overflow", "0", "0", "118", "118", "", "");
Obj_Class ("pop_op_choice_m_list0201_overflow", "img_upper_radius");
//현재 옵션내역 01번 메뉴 버튼 이미지
Obj_Make (4, "pop_op_choice_m_list0201_overflow", "pop_op_choice_m_list0201_menu_img", "0", "0", "118", "118", "image/sample_img_01.png", "");
//체크 이미지 
Obj_Make (1, "pop_op_choice_m_list0201_overflow", "pop_op_choice_m_list0201_check_bac", "0", "0", "118", "118", "", "");
Obj_Background ("pop_op_choice_m_list0201_check_bac", "1", "rgba(255, 255, 255, 0.6)");
Obj_Make (4, "pop_op_choice_m_list0201_overflow", "pop_op_choice_m_list0201_check_img", "28", "31", "70", "70", "image/pop_check.png", "");
//빛 cover
Obj_Make (4, "pop_op_choice_m_list0201_btn", "pop_op_choice_m_list0201_cover_img01", "0", "0", "118", "118", "image/menu_img_light.png", "");
//pop_op_choice_m_list0201_title
//현재 옵션내역 01번 메뉴 타이틀 영역
Obj_Make (1, "pop_op_choice_m_list0201_btn", "pop_op_choice_m_list0201_title", "0", "118", "118", "59", "", "");
Obj_Class ("pop_op_choice_m_list0201_title", "op_menu_title_bg");
//타이틀 
Obj_Make (1, "pop_op_choice_m_list0201_title", "pop_op_choice_m_list0201_title_over", "5", "5", "108", "30", "", "");
Obj_Overflow ("pop_op_choice_m_list0201_title_over", "1");
Obj_Make (1, "pop_op_choice_m_list0201_title_over", "pop_op_choice_m_list0201_title_over_box", "0", "0", "108", "30", "", "");
Obj_Make (3, "pop_op_choice_m_list0201_title_over_box", "pop_op_choice_m_list0201_title_over_box_txt", "0", "0", "", "", "메뉴타이틀", "");
Txt_Font ("pop_op_choice_m_list0201_title_over_box_txt", "3", "13", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_op_choice_m_list0201_title_over_box", "2", "2");
// Txt_Fill_Font ("pop_op_choice_m_list0201_title_over_box_txt", "16", "13");
//금액
Obj_Make (3, "pop_op_choice_m_list0201_title", "pop_op_choice_m_list0201_title_money", "5", "37", "108", "", "5,000", "");
Txt_Font ("pop_op_choice_m_list0201_title_money", "2", "13", "#ffffff", "", "2", "", "");
Obj_Class ("pop_op_choice_m_list0201_title_money", "pop_op_menu_won");
//pop_op_choice_m_list0201_amt
//현재 옵션내역 01번 현재 수량 영역
Obj_Make (1, "pop_op_choice_m_list0201_btn", "pop_op_choice_m_list0201_amt", "0", "0", "34", "34", "", "");
Obj_Class ("pop_op_choice_m_list0201_amt", "op_menu_amt");
Obj_Make (3, "pop_op_choice_m_list0201_amt", "pop_op_choice_m_list0201_amt_txt", "5", "5", "25", "20", "99", "");
Txt_Font ("pop_op_choice_m_list0201_amt_txt", "2", "20", "#ffffff", "", "2", "", "");
//border
Obj_Make (1, "pop_op_choice_m_list0201_btn", "pop_op_choice_m_list0201_btn_border", "0", "0", "118", "177", "", "");
Obj_Class ("pop_op_choice_m_list0201_btn_border", "order_menu_border");
//수량표시 on/off
// Obj_View ("pop_op_choice_m_list0201_amt", "2");
//체크 이미지 on/off
Obj_View ("pop_op_choice_m_list0201_check_bac", "2");
Obj_View ("pop_op_choice_m_list0201_check_img", "2");
// Obj_Class_Change ("pop_op_choice_m_list0201_title", "op_menu_title_bg_y");
// Obj_Class_Change ("pop_op_choice_m_list0201_amt", "op_menu_amt_y");




//옵션내역 리스트 네비게이션 영역
Obj_Make (1, "pop_op_choice_m", "pop_op_choice_m_nav", "0", "637", "877", "19", "", "");

//pop_op_choice_m_nav01
//옵션내역 네비게이션 01번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav01", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav01", "pop_op_choice_m_nav01_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav01", "pop_op_choice_m_nav01_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav02
//옵션내역 네비게이션 02번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav02", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav02", "pop_op_choice_m_nav02_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav02", "pop_op_choice_m_nav02_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav03
//옵션내역 네비게이션 03번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav03", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav03", "pop_op_choice_m_nav03_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav03", "pop_op_choice_m_nav03_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav04
//옵션내역 네비게이션 04번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav04", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav04", "pop_op_choice_m_nav04_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav04", "pop_op_choice_m_nav04_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav05
//옵션내역 네비게이션 05번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav05", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav05", "pop_op_choice_m_nav05_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav05", "pop_op_choice_m_nav05_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav06
//옵션내역 네비게이션 06번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav06", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav06", "pop_op_choice_m_nav06_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav06", "pop_op_choice_m_nav06_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

//pop_op_choice_m_nav07
//옵션내역 네비게이션 07번 영역
Obj_Make (1, "pop_op_choice_m_nav", "pop_op_choice_m_nav07", "0", "0", "20", "19", "", "");
Obj_Make (4, "pop_op_choice_m_nav07", "pop_op_choice_m_nav07_on_img", "0", "0", "20", "19", "image/pop_bottom_location_y.png", "");
Obj_Make (4, "pop_op_choice_m_nav07", "pop_op_choice_m_nav07_off_img", "0", "0", "20", "19", "image/pop_bottom_location_n.png", "");

Obj_Class ("pop_op_choice_m_nav01", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav02", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav03", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav04", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav05", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav06", "pop_op_choice_nav");
Obj_Class ("pop_op_choice_m_nav07", "pop_op_choice_nav");

Obj_AB_RE("pop_op_choice_m_nav01", "2");
Obj_AB_RE("pop_op_choice_m_nav02", "2");
Obj_AB_RE("pop_op_choice_m_nav03", "2");
Obj_AB_RE("pop_op_choice_m_nav04", "2");
Obj_AB_RE("pop_op_choice_m_nav05", "2");
Obj_AB_RE("pop_op_choice_m_nav06", "2");
Obj_AB_RE("pop_op_choice_m_nav07", "2");




//buttons div
//버튼 영역
//취소, 확인
Obj_Make (1, "pop_op_choice", "pop_op_choice_btn_box", "225", "844", "528", "90", "", "");

//pop_op_choice_cancel_btn
//취소 버튼
Obj_Make (2, "pop_op_choice_btn_box", "pop_op_choice_cancel_btn", "0", "0", "244", "90", "BTN;pop_op_choice_cancel_btn;", "");
Obj_Radius ("pop_op_choice_cancel_btn", "6");
Obj_Shadow_XY ("pop_op_choice_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_choice_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_op_choice_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_op_choice_cancel_btn", "pop_op_choice_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_op_choice_cancel_dis_img", "2");
//pop_op_choice_cancel_txt
//취소 버튼 텍스트
Obj_Make (3, "pop_op_choice_cancel_btn", "pop_op_choice_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_op_choice_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_op_choice_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_op_choice_cancel_btn", "2", "2");

//pop_op_choice_ok_btn
//확인 버튼
Obj_Make (2, "pop_op_choice_btn_box", "pop_op_choice_ok_btn", "284", "0", "244", "90", "BTN;pop_op_choice_ok_btn;", "");
Obj_Radius ("pop_op_choice_ok_btn", "6");
Obj_Shadow_XY ("pop_op_choice_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_op_choice_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_op_choice_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_op_choice_ok_btn", "pop_op_choice_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_op_choice_ok_dis_img", "2");
//pop_op_choice_ok_txt
//확인 버튼 텍스트
Obj_Make (3, "pop_op_choice_ok_btn", "pop_op_choice_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_op_choice_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_op_choice_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_op_choice_ok_btn", "2", "2");






/* ===================================== pop_sv structure ====================================== */
//승인요청 팝업 - 옵션 없음
//written in from 2018 04 04

// //pop_sv
// Obj_Make (1, "screen_default", "pop_sv", "0", "500", "688", "554", "1", "");
// Obj_Background ("pop_sv", "2", "image/savedata_board.png");
// Obj_Overflow ("pop_sv_back", "1");

// //제목 영역
// Obj_Make (1, "pop_sv", "pop_sv_info", "14", "15", "650", "269", "", "");

// //제목 영문 영역
// Obj_Make (1, "pop_sv_info", "pop_sv_info_en", "0", "75", "650", "60", "", "");
// //pop_sv_info_en_txt
// //영문 타이틀 1
// Obj_Make (3, "pop_sv_info_en", "pop_sv_info_en_txt_01", "115", "0", "235", "60", "SAVING", "");
// Txt_Font ("pop_sv_info_en_txt_01", "8", "65", "#184e9d", "", "3", "1", "");
// //영문 타이틀 2
// Obj_Make (3, "pop_sv_info_en", "pop_sv_info_en_txt_02", "365", "0", "160", "60", "DATA", "");
// Txt_Font ("pop_sv_info_en_txt_02", "7", "65", "#184e9d", "", "1", "", "");

// //제목 한글 영역
// Obj_Make (1, "pop_sv_info", "pop_sv_info_kr", "0", "160", "650", "40", "", "");
// Div_HV_Center("pop_sv_info_kr", "2", "50", "73");
// Obj_Class ("pop_sv_info_kr", "flex_container pop_txt_center");
// //한글 타이틀 1
// Obj_Make (3, "pop_sv_info_kr", "pop_sv_info_kr_txt_01", "0", "0", "0", "40", "자료저장", "");
// Txt_Font ("pop_sv_info_kr_txt_01", "3", "36", "#2979cc", "", "2", "1", "");
// Obj_AB_RE ("pop_sv_info_kr_txt_01", "2");
// //한글 타이틀 2
// Obj_Make (3, "pop_sv_info_kr", "pop_sv_info_kr_txt_02", "0", "0", "150", "40", "중 입니다.", "");
// Txt_Font ("pop_sv_info_kr_txt_02", "3", "36", "#222222", "", "2", "1", "");
// Obj_AB_RE ("pop_sv_info_kr_txt_02", "2");

// //제목 작은영문 영역
// Obj_Make (1, "pop_sv_info", "pop_sv_info_en_s", "0", "212", "650", "20", "", "");
// //작은영문
// Obj_Make (3, "pop_sv_info_en_s", "pop_sv_info_en_s_txt", "0", "0", "650", "20", "Please wait...", "");
// Txt_Font ("pop_sv_info_en_s_txt", "3", "20", "#7f838f", "", "2", "", "");

// //팝업 gif 영역
// Obj_Make (4, "pop_sv", "pop_sv_gif", "14", "284", "650", "242", "image/savedata_motion_03.gif", "");



/* ===================================== pop_pk structure ====================================== */
//포장선택 팝업 

//pop_pk
Obj_Make (1, "screen_default", "pop_pk", "10", "350", "918", "798", "1", "");
Obj_Overflow ("pop_pk_back", "1");

Obj_Make (4, "pop_pk", "pop_pk_tap", "166", "-40", "585", "118", "image/pop_pk_board_tap.png", "");
Obj_Make (4, "pop_pk", "pop_pk_icon01", "441", "-62", "130", "139", "image/pop_pk_board_icon01.png", "");
Obj_Make (4, "pop_pk", "pop_pk_icon02", "341", "-54", "162", "131", "image/pop_pk_board_icon02.png", "");

Obj_Make (1, "pop_pk", "pop_pk_box", "0", "0", "918", "798", "", "");
Obj_Background ("pop_pk_box", "2", "image/pop_pk_board.png");


//제목 영역
Obj_Make (1, "pop_pk_box", "pop_pk_box_info", "14", "45", "880", "155", "", "");
Obj_Make (1, "pop_pk_box_info", "pop_pk_box_info_title", "0", "160", "880", "40", "", "");
Div_HV_Center("pop_pk_box_info_title", "2", "50", "50");
Obj_Class ("pop_pk_box_info_title", "flex_container pop_txt_center");
//예제 한글 타이틀
//타이틀 1
Obj_Make (3, "pop_pk_box_info_title", "pop_pk_box_info_title_txt_01", "0", "0", "0", "40", "매장 ", "");
Txt_Font ("pop_pk_box_info_title_txt_01", "5", "50", "#ffe200", "", "3", "", "");
Obj_Shadow_XY("pop_pk_box_info_title_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_pk_box_info_title_txt_01", "2");
//타이틀 2
Obj_Make (3, "pop_pk_box_info_title", "pop_pk_box_info_title_txt_02", "0", "0", "0", "40", "또는 ", "");
Txt_Font ("pop_pk_box_info_title_txt_02", "2", "50", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_pk_box_info_title_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_pk_box_info_title_txt_02", "2");
//타이틀 3
Obj_Make (3, "pop_pk_box_info_title", "pop_pk_box_info_title_txt_03", "0", "0", "0", "40", "포장", "");
Txt_Font ("pop_pk_box_info_title_txt_03", "5", "50", "#ffe200", "", "1", "", "");
Obj_Shadow_XY("pop_pk_box_info_title_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_pk_box_info_title_txt_03", "2");
//타이틀 4
Obj_Make (3, "pop_pk_box_info_title", "pop_pk_box_info_title_txt_04", "0", "0", "0", "40", "을 선택해 주세요.", "");
Txt_Font ("pop_pk_box_info_title_txt_04", "2", "50", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_pk_box_info_title_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_pk_box_info_title_txt_04", "2");

// //제목 한글
// Obj_Make (1, "pop_pk_box_info", "pop_pk_box_info_kr", "0", "160", "880", "40", "", "");
// Div_HV_Center("pop_pk_box_info_kr", "2", "50", "50");
// Obj_Class ("pop_pk_box_info_kr", "flex_container pop_txt_center");
// //타이틀 1
// Obj_Make (3, "pop_pk_box_info_kr", "pop_pk_box_info_kr_txt_01", "0", "0", "0", "40", "매장 ", "");
// Txt_Font ("pop_pk_box_info_kr_txt_01", "5", "50", "#ffe200", "", "3", "", "");
// Obj_Shadow_XY("pop_pk_box_info_kr_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_kr_txt_01", "2");
// //타이틀 2
// Obj_Make (3, "pop_pk_box_info_kr", "pop_pk_box_info_kr_txt_02", "0", "0", "0", "40", "또는 ", "");
// Txt_Font ("pop_pk_box_info_kr_txt_02", "2", "50", "#ffffff", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_kr_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_kr_txt_02", "2");
// //타이틀 3
// Obj_Make (3, "pop_pk_box_info_kr", "pop_pk_box_info_kr_txt_03", "0", "0", "0", "40", "포장", "");
// Txt_Font ("pop_pk_box_info_kr_txt_03", "5", "50", "#ffe200", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_kr_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_kr_txt_03", "2");
// //타이틀 4
// Obj_Make (3, "pop_pk_box_info_kr", "pop_pk_box_info_kr_txt_04", "0", "0", "0", "40", "을 선택해 주세요.", "");
// Txt_Font ("pop_pk_box_info_kr_txt_04", "2", "50", "#ffffff", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_kr_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_kr_txt_04", "2");

// //제목 중국어
// Obj_Make (1, "pop_pk_box_info", "pop_pk_box_info_ch", "0", "160", "880", "40", "", "");
// Div_HV_Center("pop_pk_box_info_ch", "2", "50", "50");
// Obj_Class ("pop_pk_box_info_ch", "flex_container pop_txt_center");
// //타이틀 1
// Obj_Make (3, "pop_pk_box_info_ch", "pop_pk_box_info_ch_txt_01", "0", "0", "0", "40", "请选择商店或包装。", "");
// Txt_Font ("pop_pk_box_info_ch_txt_01", "7", "50", "#ffffff", "", "3", "", "");
// Obj_Shadow_XY("pop_pk_box_info_ch_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_ch_txt_01", "2");

// //제목 일본어
// Obj_Make (1, "pop_pk_box_info", "pop_pk_box_info_jp", "0", "160", "880", "40", "", "");
// Div_HV_Center("pop_pk_box_info_jp", "2", "50", "50");
// Obj_Class ("pop_pk_box_info_jp", "flex_container pop_txt_center");
// //타이틀 1
// Obj_Make (3, "pop_pk_box_info_jp", "pop_pk_box_info_jp_txt_01", "0", "0", "0", "40", "店頭", "");
// Txt_Font ("pop_pk_box_info_jp_txt_01", "6", "45", "#ffe200", "", "3", "1", "");
// Obj_Shadow_XY("pop_pk_box_info_jp_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_jp_txt_01", "2");
// //타이틀 2
// Obj_Make (3, "pop_pk_box_info_jp", "pop_pk_box_info_jp_txt_02", "0", "0", "0", "40", "または", "");
// Txt_Font ("pop_pk_box_info_jp_txt_02", "6", "45", "#ffffff", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_jp_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_jp_txt_02", "2");
// //타이틀 3
// Obj_Make (3, "pop_pk_box_info_jp", "pop_pk_box_info_jp_txt_03", "0", "0", "0", "40", "パッケージ", "");
// Txt_Font ("pop_pk_box_info_jp_txt_03", "6", "45", "#ffe200", "", "1", "1", "");
// Obj_Shadow_XY("pop_pk_box_info_jp_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_jp_txt_03", "2");
// //타이틀 4
// Obj_Make (3, "pop_pk_box_info_jp", "pop_pk_box_info_jp_txt_04", "0", "0", "0", "40", "を選択します。", "");
// Txt_Font ("pop_pk_box_info_jp_txt_04", "6", "45", "#ffffff", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_jp_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_jp_txt_04", "2");

// //제목 영어
// Obj_Make (1, "pop_pk_box_info", "pop_pk_box_info_us", "0", "160", "880", "40", "", "");
// Div_HV_Center("pop_pk_box_info_us", "2", "50", "50");
// Obj_Class ("pop_pk_box_info_us", "flex_container pop_txt_center");
// //타이틀 1
// Obj_Make (3, "pop_pk_box_info_us", "pop_pk_box_info_us_txt_01", "0", "0", "0", "40", "PLEASE SELECT ", "");
// Txt_Font ("pop_pk_box_info_us_txt_01", "2", "42", "#ffffff", "", "3", "", "");
// Obj_Shadow_XY("pop_pk_box_info_us_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_us_txt_01", "2");
// //타이틀 2
// Obj_Make (3, "pop_pk_box_info_us", "pop_pk_box_info_us_txt_02", "0", "0", "0", "40", "THE STORE ", "");
// Txt_Font ("pop_pk_box_info_us_txt_02", "2", "42", "#ffe200", "", "1", "1", "");
// Obj_Shadow_XY("pop_pk_box_info_us_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_us_txt_02", "2");
// //타이틀 3
// Obj_Make (3, "pop_pk_box_info_us", "pop_pk_box_info_us_txt_03", "0", "0", "0", "40", "or ", "");
// Txt_Font ("pop_pk_box_info_us_txt_03", "2", "42", "#ffffff", "", "1", "", "");
// Obj_Shadow_XY("pop_pk_box_info_us_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_us_txt_03", "2");
// //타이틀 4
// Obj_Make (3, "pop_pk_box_info_us", "pop_pk_box_info_us_txt_04", "0", "0", "0", "40", "PACKAGING.", "");
// Txt_Font ("pop_pk_box_info_us_txt_04", "2", "42", "#ffe200", "", "1", "1", "");
// Obj_Shadow_XY("pop_pk_box_info_us_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
// Obj_AB_RE ("pop_pk_box_info_us_txt_04", "2");

// Obj_View ("pop_pk_box_info_kr", "1");
// Obj_View ("pop_pk_box_info_ch", "2");
// Obj_View ("pop_pk_box_info_jp", "2");
// Obj_View ("pop_pk_box_info_us", "2");


//선택 영역
Obj_Make (1, "pop_pk_box", "pop_pk_box_sel", "154", "250", "600", "290", "", "");

//매장
//매장 버튼
Obj_Make (2, "pop_pk_box_sel", "pop_pk_box_sel_btn_store", "0", "0", "270", "290", "BTN;pop_pk_box_sel_btn_store;", "");
Obj_Radius ("pop_pk_box_sel_btn_store", "6");
Obj_Shadow_XY("pop_pk_box_sel_btn_store", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_pk_box_sel_btn_store", "2", "image/pk_store_btn_n.png");
Btn_Click ("pop_pk_box_sel_btn_store", "0", "0", "270", "290", "image/pk_store_btn_y.png", "");
Obj_Make (4, "pop_pk_box_sel_btn_store", "pop_pk_box_sel_btn_store_dis_img", "0", "0", "270", "290", "image/pk_store_btn_d.png", "");
Obj_View ("pop_pk_box_sel_btn_store_dis_img", "2");
//매장 버튼 텍스트 kr
Obj_Make (3, "pop_pk_box_sel_btn_store", "pop_pk_box_sel_btn_store_txt_kr", "4", "11", "270", "40", "매장", "");
Txt_Font ("pop_pk_box_sel_btn_store_txt_kr", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_pk_box_sel_btn_store_txt_kr", "6", "rgba(0,0,0,0.6)");
//체크 이미지
Obj_Make (1, "pop_pk_box_sel_btn_store", "pop_pk_box_sel_btn_store_check", "0", "0", "270", "290", "", "");
Obj_Background ("pop_pk_box_sel_btn_store_check", "1", "rgba(0,0,0,0.4)");
Obj_Radius ("pop_pk_box_sel_btn_store_check", "6");
Obj_Make (4, "pop_pk_box_sel_btn_store_check", "pop_pk_box_sel_btn_store_check_img", "44", "105", "191", "145", "image/pop_pk_sel_btn_check_img.png", "");
//체크 이미지 우선 안보이게 셋팅
// Obj_View ("pop_pk_box_sel_btn_store_check", "2");

//포장
//포장 버튼
Obj_Make (2, "pop_pk_box_sel", "pop_pk_box_sel_btn_pak", "330", "0", "270", "290", "BTN;pop_pk_box_sel_btn_pak;", "");
Obj_Radius ("pop_pk_box_sel_btn_pak", "6");
Obj_Shadow_XY("pop_pk_box_sel_btn_pak", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_pk_box_sel_btn_pak", "2", "image/pk_pak_btn_n.png");
Btn_Click ("pop_pk_box_sel_btn_pak", "0", "0", "270", "290", "image/pk_pak_btn_y.png", "");
Obj_Make (4, "pop_pk_box_sel_btn_pak", "pop_pk_box_sel_btn_pak_dis_img", "0", "0", "270", "290", "image/pk_pak_btn_d.png", "");
Obj_View ("pop_pk_box_sel_btn_pak_dis_img", "2");
//포장 버튼 텍스트 kr
Obj_Make (3, "pop_pk_box_sel_btn_pak", "pop_pk_box_sel_btn_pak_txt_kr", "4", "11", "270", "40", "포장", "");
Txt_Font ("pop_pk_box_sel_btn_pak_txt_kr", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_pk_box_sel_btn_pak_txt_kr", "6", "rgba(0,0,0,0.6)");
//체크 이미지
Obj_Make (1, "pop_pk_box_sel_btn_pak", "pop_pk_box_sel_btn_pak_check", "0", "0", "270", "290", "", "");
Obj_Background ("pop_pk_box_sel_btn_pak_check", "1", "rgba(0,0,0,0.4)");
Obj_Radius ("pop_pk_box_sel_btn_pak_check", "6");
Obj_Make (4, "pop_pk_box_sel_btn_pak_check", "pop_pk_box_sel_btn_pak_check_img", "44", "105", "191", "145", "image/pop_pk_sel_btn_check_img.png", "");
//체크 이미지 우선 안보이게 셋팅
// Obj_View ("pop_pk_box_sel_btn_pak_check", "2");


//버튼 영역
Obj_Make (1, "pop_pk_box", "pop_pk_box_btn", "190", "635", "528", "70", "", "");

//취소
//취소 버튼
Obj_Make (2, "pop_pk_box_btn", "pop_pk_box_btn_cancel", "0", "0", "244", "90", "BTN;pop_pk_box_btn_cancel;", "");
Obj_Radius ("pop_pk_box_btn_cancel", "6");
Obj_Shadow_XY ("pop_pk_box_btn_cancel", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_pk_box_btn_cancel", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_pk_box_btn_cancel", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_pk_box_btn_cancel", "pop_pk_box_btn_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_pk_box_btn_cancel_dis_img", "2");
//txt
//취소 버튼 텍스트
Obj_Make (3, "pop_pk_box_btn_cancel", "pop_pk_box_btn_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_pk_box_btn_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_pk_box_btn_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_pk_box_btn_cancel", "2", "2");

//ok
//확인 버튼
//확인 버튼 영역
Obj_Make (1, "pop_pk_box_btn", "pop_pk_box_btn_ok_box", "284", "0", "244", "90", "", "");

//확인 버튼 라운드 Ani
Obj_Make (1, "pop_pk_box_btn_ok_box", "pop_pk_box_btn_ok_anibox", "0", "0", "244", "90", "", "");
Obj_Radius ("pop_pk_box_btn_ok_anibox", "6");

Obj_Make (2, "pop_pk_box_btn_ok_box", "pop_pk_box_btn_ok", "0", "0", "244", "90", "BTN;pop_pk_box_btn_ok;", "");
Obj_Radius ("pop_pk_box_btn_ok", "6");
Obj_Shadow_XY ("pop_pk_box_btn_ok", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_pk_box_btn_ok", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_pk_box_btn_ok", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_pk_box_btn_ok", "pop_pk_box_btn_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_pk_box_btn_ok_dis_img", "2");
//txt
//확인 버튼 텍스트
Obj_Make (3, "pop_pk_box_btn_ok", "pop_pk_box_btn_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_pk_box_btn_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_pk_box_btn_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_pk_box_btn_ok", "2", "2");


// Obj_Ani ("pop_pk_box_btn_ok_box", "pulse3", "", "1", "1", "0", "");
// Obj_Ani ("pop_pk_box_btn_ok_anibox", "lightOut4", "", "1", "1", "0", "");





/* ==================================== pop_msg structure =================================== */
//메세지 팝업

//pop_msg
Obj_Make (1, "screen_default", "pop_msg", "10", "400", "838", "698", "1", "");
Obj_Overflow ("pop_msg_back", "1");

Obj_Make (4, "pop_msg", "pop_msg_tap", "174", "-40", "490", "118", "image/message_board_tap.png", "");
Obj_Make (4, "pop_msg", "pop_msg_icon", "347", "-93", "144", "179", "image/message_board_icon.png", "");

Obj_Make (1, "pop_msg", "pop_msg_box", "0", "0", "838", "698", "", "");
Obj_Background ("pop_msg_box", "2", "image/message_board.png");

//타이틀 영역
Obj_Make (1, "pop_msg_box", "pop_msg_title", "14", "10", "800", "210", "", "");
//아이콘 모션 영역
Obj_Make (1, "pop_msg_title", "pop_msg_title_icon", "0", "20", "170", "190", "", "");
//타이틀 아이콘 이미지 - 정보
// Obj_Make (4, "pop_msg_title_icon", "pop_msg_title_icon_info_img", "0", "0", "170", "210", "image/message_icon_info.svg", "");
Obj_Svg_Make ("pop_msg_title_icon", "pop_msg_title_icon_info_img", "0", "0", "170", "210", "image/message_icon_info.svg");
//타이틀 아이콘 이미지 - 에러
// Obj_Make (4, "pop_msg_title_icon", "pop_msg_title_icon_error_img", "0", "0", "170", "210", "image/message_icon_error.svg", "");
Obj_Svg_Make ("pop_msg_title_icon", "pop_msg_title_icon_error_img", "0", "0", "170", "210", "image/message_icon_error.svg");
//타이틀 아이콘 이미지 - 경고
// Obj_Make (4, "pop_msg_title_icon", "pop_msg_title_icon_warning_img", "0", "0", "170", "210", "image/message_icon_warning.svg", "");
Obj_Svg_Make ("pop_msg_title_icon", "pop_msg_title_icon_warning_img", "0", "0", "170", "210", "image/message_icon_warning.svg");
//타이틀 아이콘 이미지 - 질문
// Obj_Make (4, "pop_msg_title_icon", "pop_msg_title_icon_question_img", "0", "0", "170", "210", "image/message_icon_question.svg", "");
Obj_Svg_Make ("pop_msg_title_icon", "pop_msg_title_icon_question_img", "0", "0", "170", "210", "image/message_icon_question.svg");

Obj_View ("pop_msg_title_icon_info_img", "1");
Obj_View ("pop_msg_title_icon_error_img", "2");
Obj_View ("pop_msg_title_icon_warning_img", "2");
Obj_View ("pop_msg_title_icon_question_img", "2");

//타이틀 텍스트 영역
Obj_Make (1, "pop_msg_title", "pop_msg_title_area", "170", "65", "620", "115", "", "");
Obj_Overflow ("pop_msg_title_area", "1");
Obj_Make (1, "pop_msg_title_area", "pop_msg_title_area_over", "0", "0", "620", "115", "", "");
//타이틀 텍스트
Obj_Make (3, "pop_msg_title_area_over", "pop_msg_title_area_over_txt", "0", "0", "0", "0", "타이틀타이틀타이틀타이틀타이틀타이틀타이틀", "");
Txt_Font ("pop_msg_title_area_over_txt", "2", "46", "#ffffff", "", "1", "", "");
Obj_Shadow ("pop_msg_title_area_over_txt", "6", "rgba(0,0,0,0.6)");
Obj_Class ("pop_msg_title_area_over_txt", "line_height_12");
Div_Txt_Align ("pop_msg_title_area_over", "1", "2")

//팝업 메뉴 세부정보 텍스트
Obj_Make (1, "pop_msg", "pop_msg_detail_box", "55", "255", "735", "200", "", "");
Obj_Class ("pop_msg_detail_box", "txt_scrollbar");
Obj_Make (3, "pop_msg_detail_box", "pop_msg_detail_box_txt", "0", "0", "", "", "메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다. 메뉴 설명이 들어가는 자리입니다.", "");
Txt_Font ("pop_msg_detail_box_txt", "2", "18", "#000000", "", "1", "", "");
Obj_Class ("pop_msg_detail_box_txt", "info_detail");
Txt_Drag_Scroll ("pop_msg_detail_box");


//버튼 영역
Obj_Make (1, "pop_msg", "pop_msg_btn_box", "150", "535", "528", "90", "", "");
//pop_msg_btn_box
//버튼 세트별 영역 - 아니오, 예 버튼 세트
Obj_Make (1, "pop_msg_btn_box", "pop_msg_btn_box_set_a", "0", "0", "528", "90", "", "");
//버튼 세트별 영역 - 취소, 확인 버튼 세트
Obj_Make (1, "pop_msg_btn_box", "pop_msg_btn_box_set_b", "0", "0", "528", "90", "", "");

//pop_msg_btn_box_set_a
//no
//아니오 버튼
Obj_Make (2, "pop_msg_btn_box_set_a", "pop_msg_no_btn", "0", "0", "244", "90", "BTN;pop_msg_no_btn;", "");
Obj_Radius ("pop_msg_no_btn", "6");
Obj_Shadow_XY ("pop_msg_no_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_msg_no_btn", "2", "image/message_no_n.png");
Btn_Click ("pop_msg_no_btn", "0", "0", "244", "90", "image/message_no_y.png", "");
Obj_Make (4, "pop_msg_no_btn", "pop_msg_no_dis_img", "0", "0", "244", "90", "image/message_no_d.png", "");
Obj_View ("pop_msg_no_dis_img", "2");
//아니오 버튼 텍스트
Obj_Make (3, "pop_msg_no_btn", "pop_msg_no_txt", "72", "0", "171", "90", "아니오", "");
Txt_Font ("pop_msg_no_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_msg_no_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_msg_no_btn", "2", "2");
//yes
//예 버튼
Obj_Make (2, "pop_msg_btn_box_set_a", "pop_msg_yes_btn", "284", "0", "244", "90", "BTN;pop_msg_yes_btn;", "");
Obj_Radius ("pop_msg_yes_btn", "6");
Obj_Shadow_XY ("pop_msg_yes_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_msg_yes_btn", "2", "image/message_yes_n.png");
Btn_Click ("pop_msg_yes_btn", "0", "0", "244", "90", "image/message_yes_y.png", "");
Obj_Make (4, "pop_msg_yes_btn", "pop_msg_yes_dis_img", "0", "0", "244", "90", "image/message_yes_d.png", "");
Obj_View ("pop_msg_yes_dis_img", "2");
//예 버튼 텍스트
Obj_Make (3, "pop_msg_yes_btn", "pop_msg_yes_txt", "72", "0", "171", "90", "예", "");
Txt_Font ("pop_msg_yes_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_msg_yes_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_msg_yes_btn", "2", "2");


//pop_msg_btn_box_set_b
//cancel
//취소 버튼
Obj_Make (2, "pop_msg_btn_box_set_b", "pop_msg_cancel_btn", "0", "0", "244", "90", "BTN;pop_msg_cancel_btn;", "");
Obj_Radius ("pop_msg_cancel_btn", "6");
Obj_Shadow_XY ("pop_msg_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_msg_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_msg_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_msg_cancel_btn", "pop_msg_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_msg_cancel_dis_img", "2");
//취소 버튼 텍스트
Obj_Make (3, "pop_msg_cancel_btn", "pop_msg_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_msg_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_msg_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_msg_cancel_btn", "2", "2");
// Btn_Enable ("pop_msg_cancel_txt", "2");
//ok
//확인 버튼
Obj_Make (2, "pop_msg_btn_box_set_b", "pop_msg_ok_btn", "284", "0", "244", "90", "BTN;pop_msg_ok_btn;", "");
Obj_Radius ("pop_msg_ok_btn", "6");
Obj_Shadow_XY ("pop_msg_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_msg_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_msg_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_msg_ok_btn", "pop_msg_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_msg_ok_dis_img", "2");
//확인 버튼 텍스트
Obj_Make (3, "pop_msg_ok_btn", "pop_msg_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_msg_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_msg_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_msg_ok_btn", "2", "2");












/* ===================================== pop_history structure ====================================== */

//pop_history
Obj_Make (1, "screen_default", "pop_history", "10", "210", "988", "1340", "1", "");
Obj_Overflow ("pop_history_back", "1");

Obj_Make (4, "pop_history", "pop_history_tap", "229", "-40", "530", "118", "image/pop_history_board_tap.png", "");
Obj_Make (4, "pop_history", "pop_history_icon", "408", "-74", "174", "185", "image/pop_history_board_icon.png", "");

Obj_Make (1, "pop_history", "pop_history_box", "0", "0", "988", "1340", "", "");
Obj_Background ("pop_history_box", "2", "image/pop_history_board.png");


//타이틀 영역
Obj_Make (1, "pop_history", "pop_history_title", "14", "45", "950", "116", "", "");
Obj_Make (3, "pop_history_title", "pop_history_title_txt", "0", "0", "950", "116", "주문내역", "");
Txt_Font ("pop_history_title_txt", "5", "46", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_history_title", "2", "2");


//버튼정보
Obj_Make (1, "pop_history", "pop_history_btn_info", "44", "190", "890", "30", "", "");
Obj_Make (4, "pop_history_btn_info", "pop_history_btn_info_icon", "0", "2", "19", "18", "image/small_txt_icon_exclamation.png", "");
Obj_Make (3, "pop_history_btn_info", "pop_history_btn_info_txt", "7", "0", "600", "30", "식사 장소를 변경할 수 있습니다.", "");
Txt_Font ("pop_history_btn_info_txt", "2", "20", "#222222", "", "1", "", "");
Obj_AB_RE ("pop_history_btn_info_icon", "2");
Obj_AB_RE ("pop_history_btn_info_txt", "2");


//매장 버튼
Obj_Make (2, "pop_history", "pop_history_btn_store", "44", "220", "438", "90", "BTN;pop_history_btn_store;", "");
Obj_Radius ("pop_history_btn_store", "6");
Obj_Shadow_XY ("pop_history_btn_store", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_Background ("pop_history_btn_store", "2", "image/pop_history_btn_store_n.png");
Obj_Make (4, "pop_history_btn_store", "pop_history_btn_store_dis_img", "0", "0", "438", "90", "image/pop_history_btn_store_d.png", "");
Obj_Make (1, "pop_history_btn_store", "pop_history_btn_store_check_box", "371", "30", "46", "37", "", "");
Obj_Make (4, "pop_history_btn_store_check_box", "pop_history_btn_store_check_img", "0", "0", "46", "37", "image/pop_history_btn_check.png", "");
Obj_View ("pop_history_btn_store_dis_img", "2");
Obj_View ("pop_history_btn_store_check_box", "2");
//매장 버튼 텍스트
Obj_Make (3, "pop_history_btn_store", "pop_history_btn_store_txt", "143", "25", "222", "40", "매장", "");
Txt_Font ("pop_history_btn_store_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_history_btn_store_txt", "1", "1", "3", "rgba(0,0,0,0.4)");


//포장 버튼
Obj_Make (2, "pop_history", "pop_history_btn_pak", "496", "220", "438", "90", "BTN;pop_history_btn_pak;", "");
Obj_Radius ("pop_history_btn_pak", "6");
Obj_Shadow_XY ("pop_history_btn_pak", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_Background ("pop_history_btn_pak", "2", "image/pop_history_btn_pak_n.png");
Obj_Make (4, "pop_history_btn_pak", "pop_history_btn_pak_dis_img", "0", "0", "438", "90", "image/pop_history_btn_pak_d.png", "");
Obj_Make (1, "pop_history_btn_pak", "pop_history_btn_pak_check_box", "371", "30", "46", "37", "", "");
Obj_Make (4, "pop_history_btn_pak_check_box", "pop_history_btn_pak_check_img", "0", "0", "46", "37", "image/pop_history_btn_check.png", "");
Obj_View ("pop_history_btn_pak_dis_img", "2");
Obj_View ("pop_history_btn_pak_check_box", "2");
//포장 버튼 텍스트
Obj_Make (3, "pop_history_btn_pak", "pop_history_btn_pak_txt", "143", "25", "222", "40", "포장", "");
Txt_Font ("pop_history_btn_pak_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_history_btn_pak_txt", "1", "1", "3", "rgba(0,0,0,0.4)");



//리스트 타이틀 영역
Obj_Make (1, "pop_history", "pop_history_list", "44", "326", "890", "65", "", "");
//이름
Obj_Make (1, "pop_history_list", "pop_history_list_title", "0", "0", "575", "65", "", "");
Obj_Make (3, "pop_history_list_title", "pop_history_list_title_txt", "0", "0", "575", "65", "주문 상세 내역", "");
Txt_Font ("pop_history_list_title_txt", "3", "26", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_history_list_title", "2", "2");
//수량
Obj_Make (1, "pop_history_list", "pop_history_list_qt", "577", "0", "115", "65", "", "");
Obj_Make (3, "pop_history_list_qt", "pop_history_list_qt_txt", "0", "0", "115", "65", "수량", "");
Txt_Font ("pop_history_list_qt_txt", "3", "26", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_history_list_qt", "2", "2");
//금액
Obj_Make (1, "pop_history_list", "pop_history_list_money", "694", "0", "196", "65", "", "");
Obj_Make (3, "pop_history_list_money", "pop_history_list_money_txt", "0", "0", "196", "65", "금액", "");
Txt_Font ("pop_history_list_money_txt", "3", "26", "#ffffff", "", "2", "", "");
Div_Txt_Align ("pop_history_list_money", "2", "2");


//총 수량, 금액 영역
Obj_Make (1, "pop_history", "pop_history_total", "44", "1028", "890", "80", "", "");

//수량
Obj_Make (1, "pop_history_total", "pop_history_total_qt_title", "0", "0", "145", "80", "", "");
Obj_Make (3, "pop_history_total_qt_title", "pop_history_total_qt_title_txt", "0", "0", "145", "80", "수량", "");
Txt_Font ("pop_history_total_qt_title_txt", "2", "26", "#d2eaff", "", "2", "", "");
Div_Txt_Align ("pop_history_total_qt_title", "2", "2");
//수량 숫자
Obj_Make (1, "pop_history_total", "pop_history_total_qt_num", "150", "0", "194", "80", "", "");
Obj_Make (3, "pop_history_total_qt_num", "pop_history_total_qt_num_txt", "0", "0", "194", "80", "1,000", "");
Txt_Font ("pop_history_total_qt_num_txt", "2", "44", "#ffffff", "", "3", "", "");
Div_Txt_Align ("pop_history_total_qt_num", "3", "2");

//금액
Obj_Make (1, "pop_history_total", "pop_history_total_amoumt_title", "366", "0", "145", "80", "", "");
Obj_Make (3, "pop_history_total_amoumt_title", "pop_history_total_amoumt_title_txt", "0", "0", "145", "80", "총 금액", "");
Txt_Font ("pop_history_total_amoumt_title_txt", "2", "26", "#d2eaff", "", "2", "", "");
Div_Txt_Align ("pop_history_total_amoumt_title", "2", "2");
//금액 숫자
Obj_Make (1, "pop_history_total", "pop_history_total_amoumt_num", "516", "0", "354", "80", "", "");
Obj_Make (3, "pop_history_total_amoumt_num", "pop_history_total_amoumt_num_txt", "0", "0", "354", "80", "1,000,000", "");
Txt_Font ("pop_history_total_amoumt_num_txt", "2", "44", "#ffe200", "", "3", "", "");
Obj_Class ("pop_history_total_amoumt_num_txt", "order_amt_won_b");
Div_Txt_Align ("pop_history_total_amoumt_num", "3", "2");





//팝업 메뉴 세부정보 텍스트
Obj_Make (1, "pop_history", "history_box", "54", "400", "870", "618", "", "");
Obj_Overflow ("history_box", "1");


Obj_Make (1, "history_box", "history_box_area", "0", "0", "850", "0", "", "");


//구매내역01 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox01", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox01", "history_box_area_setbox01_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox01_bar", "2", "image/pop_history_list_bar01.png");
//구매내역01 삭제 버튼
Obj_Make (2, "history_box_area_setbox01", "history_box_area_setbox01_del", "7", "8", "48", "48", "BTN;history_box_area_setbox01_del;", "");
Obj_Background ("history_box_area_setbox01_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox01_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역01 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox01", "history_box_area_setbox01_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox01_zoom;", "");
Obj_Background ("history_box_area_setbox01_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox01_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역01 텍스트
Obj_Make (1, "history_box_area_setbox01_bar", "history_box_area_setbox01_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox01_bar_over", "1");
Obj_Make (1, "history_box_area_setbox01_bar_over", "history_box_area_setbox01_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox01_bar_over_box", "history_box_area_setbox01_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox01_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox01_bar_over_box", "1", "2");
//구매내역01 수량
Obj_Make (3, "history_box_area_setbox01_bar", "history_box_area_setbox01_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox01_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역01 금액
Obj_Make (3, "history_box_area_setbox01_bar", "history_box_area_setbox01_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox01_bar_amt", "2", "26", "#000000", "", "3", "", "");

//옵션01 영역
Menu_Make (1, "history_box_area_setbox01", "history_box_area_setbox01_s01", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox01_s01", "2", "image/pop_history_list_bar02.png");
//옵션01 텍스트
Obj_Make (1, "history_box_area_setbox01_s01", "history_box_area_setbox01_s01_over", "100", "9", "455", "44", "", "");
Obj_Overflow ("history_box_area_setbox01_s01_over", "1");
Obj_Make (1, "history_box_area_setbox01_s01_over", "history_box_area_setbox01_s01_over_box", "0", "0", "455", "44", "", "");
Obj_Make (3, "history_box_area_setbox01_s01_over_box", "history_box_area_setbox01_s01_over_box_txt", "0", "0", "455", "44", "옵션 타이틀", "");
Txt_Font ("history_box_area_setbox01_s01_over_box_txt", "2", "22", "#747474", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox01_s01_over_box", "1", "2");
//옵션01 수량
Obj_Make (3, "history_box_area_setbox01_s01", "history_box_area_setbox01_s01_qt", "568", "18", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox01_s01_qt", "2", "22", "#747474", "", "3", "", "");
//옵션01 금액
Obj_Make (3, "history_box_area_setbox01_s01", "history_box_area_setbox01_s01_amt", "688", "18", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox01_s01_amt", "2", "22", "#747474", "", "3", "", "");

//옵션02 영역
Menu_Make (1, "history_box_area_setbox01", "history_box_area_setbox01_s02", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox01_s02", "2", "image/pop_history_list_bar02.png");
//옵션02 텍스트
Obj_Make (1, "history_box_area_setbox01_s02", "history_box_area_setbox01_s02_over", "100", "9", "455", "44", "", "");
Obj_Overflow ("history_box_area_setbox01_s02_over", "1");
Obj_Make (1, "history_box_area_setbox01_s02_over", "history_box_area_setbox01_s02_over_box", "0", "0", "455", "44", "", "");
Obj_Make (3, "history_box_area_setbox01_s02_over_box", "history_box_area_setbox01_s02_over_box_txt", "0", "0", "455", "44", "옵션 타이틀", "");
Txt_Font ("history_box_area_setbox01_s02_over_box_txt", "2", "22", "#747474", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox01_s02_over_box", "1", "2");
//옵션02 수량
Obj_Make (3, "history_box_area_setbox01_s02", "history_box_area_setbox01_s02_qt", "568", "18", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox01_s02_qt", "2", "22", "#747474", "", "3", "", "");
//옵션02 금액
Obj_Make (3, "history_box_area_setbox01_s02", "history_box_area_setbox01_s02_amt", "688", "18", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox01_s02_amt", "2", "22", "#747474", "", "3", "", "");


//구매내역02 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox02", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox02", "history_box_area_setbox02_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox02_bar", "2", "image/pop_history_list_bar01.png");
//구매내역02 삭제 버튼
Obj_Make (2, "history_box_area_setbox02", "history_box_area_setbox02_del", "7", "8", "48", "48", "BTN;history_box_area_setbox02_del;", "");
Obj_Background ("history_box_area_setbox02_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox02_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역02 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox02", "history_box_area_setbox02_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox02_zoom;", "");
Obj_Background ("history_box_area_setbox02_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox02_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역02 텍스트
Obj_Make (1, "history_box_area_setbox02_bar", "history_box_area_setbox02_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox02_bar_over", "1");
Obj_Make (1, "history_box_area_setbox02_bar_over", "history_box_area_setbox02_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox02_bar_over_box", "history_box_area_setbox02_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox02_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox02_bar_over_box", "1", "2");
//구매내역02 수량
Obj_Make (3, "history_box_area_setbox02_bar", "history_box_area_setbox02_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox02_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역02 금액
Obj_Make (3, "history_box_area_setbox02_bar", "history_box_area_setbox02_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox02_bar_amt", "2", "26", "#000000", "", "3", "", "");

//옵션01 영역
Menu_Make (1, "history_box_area_setbox02", "history_box_area_setbox02_s01", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox02_s01", "2", "image/pop_history_list_bar02.png");
//옵션01 텍스트
Obj_Make (1, "history_box_area_setbox02_s01", "history_box_area_setbox02_s01_over", "100", "9", "455", "44", "", "");
Obj_Overflow ("history_box_area_setbox02_s01_over", "1");
Obj_Make (1, "history_box_area_setbox02_s01_over", "history_box_area_setbox02_s01_over_box", "0", "0", "455", "44", "", "");
Obj_Make (3, "history_box_area_setbox02_s01_over_box", "history_box_area_setbox02_s01_over_box_txt", "0", "0", "455", "44", "옵션 타이틀", "");
Txt_Font ("history_box_area_setbox02_s01_over_box_txt", "2", "22", "#747474", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox02_s01_over_box", "1", "2");
//옵션01 수량
Obj_Make (3, "history_box_area_setbox02_s01", "history_box_area_setbox02_s01_qt", "568", "18", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox02_s01_qt", "2", "22", "#747474", "", "3", "", "");
//옵션01 금액
Obj_Make (3, "history_box_area_setbox02_s01", "history_box_area_setbox02_s01_amt", "688", "18", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox02_s01_amt", "2", "22", "#747474", "", "3", "", "");

//옵션02 영역
Menu_Make (1, "history_box_area_setbox02", "history_box_area_setbox02_s02", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox02_s02", "2", "image/pop_history_list_bar02.png");
//옵션02 텍스트
Obj_Make (1, "history_box_area_setbox02_s02", "history_box_area_setbox02_s02_over", "100", "9", "455", "44", "", "");
Obj_Overflow ("history_box_area_setbox02_s02_over", "1");
Obj_Make (1, "history_box_area_setbox02_s02_over", "history_box_area_setbox02_s02_over_box", "0", "0", "455", "44", "", "");
Obj_Make (3, "history_box_area_setbox02_s02_over_box", "history_box_area_setbox02_s02_over_box_txt", "0", "0", "455", "44", "옵션 타이틀", "");
Txt_Font ("history_box_area_setbox02_s02_over_box_txt", "2", "22", "#747474", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox02_s02_over_box", "1", "2");
//옵션02 수량
Obj_Make (3, "history_box_area_setbox02_s02", "history_box_area_setbox02_s02_qt", "568", "18", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox02_s02_qt", "2", "22", "#747474", "", "3", "", "");
//옵션02 금액
Obj_Make (3, "history_box_area_setbox02_s02", "history_box_area_setbox02_s02_amt", "688", "18", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox02_s02_amt", "2", "22", "#747474", "", "3", "", "");


//구매내역03 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox03", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox03", "history_box_area_setbox03_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox03_bar", "2", "image/pop_history_list_bar01.png");
//구매내역03 삭제 버튼
Obj_Make (2, "history_box_area_setbox03", "history_box_area_setbox03_del", "7", "8", "48", "48", "BTN;history_box_area_setbox03_del;", "");
Obj_Background ("history_box_area_setbox03_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox03_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역03 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox03", "history_box_area_setbox03_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox03_zoom;", "");
Obj_Background ("history_box_area_setbox03_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox03_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역03 텍스트
Obj_Make (1, "history_box_area_setbox03_bar", "history_box_area_setbox03_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox03_bar_over", "1");
Obj_Make (1, "history_box_area_setbox03_bar_over", "history_box_area_setbox03_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox03_bar_over_box", "history_box_area_setbox03_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox03_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox03_bar_over_box", "1", "2");
//구매내역03 수량
Obj_Make (3, "history_box_area_setbox03_bar", "history_box_area_setbox03_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox03_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역03 금액
Obj_Make (3, "history_box_area_setbox03_bar", "history_box_area_setbox03_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox03_bar_amt", "2", "26", "#000000", "", "3", "", "");


//구매내역04 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox04", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox04", "history_box_area_setbox04_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox04_bar", "2", "image/pop_history_list_bar01.png");
//구매내역04 삭제 버튼
Obj_Make (2, "history_box_area_setbox04", "history_box_area_setbox04_del", "7", "8", "48", "48", "BTN;history_box_area_setbox04_del;", "");
Obj_Background ("history_box_area_setbox04_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox04_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역04 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox04", "history_box_area_setbox04_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox04_zoom;", "");
Obj_Background ("history_box_area_setbox04_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox04_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역04 텍스트
Obj_Make (1, "history_box_area_setbox04_bar", "history_box_area_setbox04_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox04_bar_over", "1");
Obj_Make (1, "history_box_area_setbox04_bar_over", "history_box_area_setbox04_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox04_bar_over_box", "history_box_area_setbox04_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox04_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox04_bar_over_box", "1", "2");
//구매내역04 수량
Obj_Make (3, "history_box_area_setbox04_bar", "history_box_area_setbox04_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox04_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역04 금액
Obj_Make (3, "history_box_area_setbox04_bar", "history_box_area_setbox04_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox04_bar_amt", "2", "26", "#000000", "", "3", "", "");


//구매내역05 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox05", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox05", "history_box_area_setbox05_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox05_bar", "2", "image/pop_history_list_bar01.png");
//구매내역05 삭제 버튼
Obj_Make (2, "history_box_area_setbox05", "history_box_area_setbox05_del", "7", "8", "48", "48", "BTN;history_box_area_setbox05_del;", "");
Obj_Background ("history_box_area_setbox05_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox05_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역05 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox05", "history_box_area_setbox05_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox05_zoom;", "");
Obj_Background ("history_box_area_setbox05_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox05_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역05 텍스트
Obj_Make (1, "history_box_area_setbox05_bar", "history_box_area_setbox05_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox05_bar_over", "1");
Obj_Make (1, "history_box_area_setbox05_bar_over", "history_box_area_setbox05_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox05_bar_over_box", "history_box_area_setbox05_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox05_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox05_bar_over_box", "1", "2");
//구매내역05 수량
Obj_Make (3, "history_box_area_setbox05_bar", "history_box_area_setbox05_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox05_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역05 금액
Obj_Make (3, "history_box_area_setbox05_bar", "history_box_area_setbox05_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox05_bar_amt", "2", "26", "#000000", "", "3", "", "");


//구매내역06 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox06", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox06", "history_box_area_setbox06_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox06_bar", "2", "image/pop_history_list_bar01.png");
//구매내역06 삭제 버튼
Obj_Make (2, "history_box_area_setbox06", "history_box_area_setbox06_del", "7", "8", "48", "48", "BTN;history_box_area_setbox06_del;", "");
Obj_Background ("history_box_area_setbox06_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox06_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역06 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox06", "history_box_area_setbox06_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox06_zoom;", "");
Obj_Background ("history_box_area_setbox06_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox06_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역06 텍스트
Obj_Make (1, "history_box_area_setbox06_bar", "history_box_area_setbox06_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox06_bar_over", "1");
Obj_Make (1, "history_box_area_setbox06_bar_over", "history_box_area_setbox06_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox06_bar_over_box", "history_box_area_setbox06_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox06_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox06_bar_over_box", "1", "2");
//구매내역06 수량
Obj_Make (3, "history_box_area_setbox06_bar", "history_box_area_setbox06_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox06_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역06 금액
Obj_Make (3, "history_box_area_setbox06_bar", "history_box_area_setbox06_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox06_bar_amt", "2", "26", "#000000", "", "3", "", "");


//구매내역07 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox07", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox07", "history_box_area_setbox07_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox07_bar", "2", "image/pop_history_list_bar01.png");
//구매내역07 삭제 버튼
Obj_Make (2, "history_box_area_setbox07", "history_box_area_setbox07_del", "7", "8", "48", "48", "BTN;history_box_area_setbox07_del;", "");
Obj_Background ("history_box_area_setbox07_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox07_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역07 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox07", "history_box_area_setbox07_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox07_zoom;", "");
Obj_Background ("history_box_area_setbox07_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox07_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역07 텍스트
Obj_Make (1, "history_box_area_setbox07_bar", "history_box_area_setbox07_bar_over", "65", "7", "445", "48", "", "");
Obj_Overflow ("history_box_area_setbox07_bar_over", "1");
Obj_Make (1, "history_box_area_setbox07_bar_over", "history_box_area_setbox07_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox07_bar_over_box", "history_box_area_setbox07_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox07_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox07_bar_over_box", "1", "2");
//구매내역07 수량
Obj_Make (3, "history_box_area_setbox07_bar", "history_box_area_setbox07_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox07_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역07 금액
Obj_Make (3, "history_box_area_setbox07_bar", "history_box_area_setbox07_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox07_bar_amt", "2", "26", "#000000", "", "3", "", "");


//구매내역08 박스
Menu_Make (1, "history_box_area", "history_box_area_setbox08", "0", "0", "850", "", "2");
Menu_Make (1, "history_box_area_setbox08", "history_box_area_setbox08_bar", "0", "0", "850", "62", "2");
Obj_Background ("history_box_area_setbox08_bar", "2", "image/pop_history_list_bar01.png");
//구매내역08 삭제 버튼
Obj_Make (2, "history_box_area_setbox08", "history_box_area_setbox08_del", "7", "8", "48", "48", "BTN;history_box_area_setbox08_del;", "");
Obj_Background ("history_box_area_setbox08_del", "2", "image/pop_history_del_n.png");
Btn_Click ("history_box_area_setbox08_del", "0", "0", "48", "48", "image/pop_history_del_y.png", "");
//구매내역08 자세히보기 버튼
Obj_Make (2, "history_box_area_setbox08", "history_box_area_setbox08_zoom", "512", "8", "48", "48", "BTN;history_box_area_setbox08_zoom;", "");
Obj_Background ("history_box_area_setbox08_zoom", "2", "image/pop_history_zoom_n.png");
Btn_Click ("history_box_area_setbox08_zoom", "0", "0", "48", "48", "image/pop_history_zoom_y.png", "");

//구매내역08 텍스트
Obj_Make (1, "history_box_area_setbox08_bar", "history_box_area_setbox08_bar_over", "60", "7", "450", "48", "", "");
Obj_Overflow ("history_box_area_setbox08_bar_over", "1");
Obj_Make (1, "history_box_area_setbox08_bar_over", "history_box_area_setbox08_bar_over_box", "0", "0", "450", "48", "", "");
Obj_Make (3, "history_box_area_setbox08_bar_over_box", "history_box_area_setbox08_bar_over_box_txt", "0", "0", "450", "48", "구매내용", "");
Txt_Font ("history_box_area_setbox08_bar_over_box_txt", "2", "24", "#000000", "", "1", "", "");
Div_Txt_Align ("history_box_area_setbox08_bar_over_box", "1", "2");
//구매내역08 수량
Obj_Make (3, "history_box_area_setbox08_bar", "history_box_area_setbox08_bar_qt", "568", "17", "105", "35", "100", "");
Txt_Font ("history_box_area_setbox08_bar_qt", "2", "26", "#000000", "", "3", "", "");
//구매내역08 금액
Obj_Make (3, "history_box_area_setbox08_bar", "history_box_area_setbox08_bar_amt", "688", "17", "152", "35", "1,000,000", "");
Txt_Font ("history_box_area_setbox08_bar_amt", "2", "26", "#000000", "", "3", "", "");


Obj_Iscroll("history_box");


//pop_history_btn_box
//팝업 버튼 영역
Obj_Make (1, "pop_history", "pop_history_btn_box", "225", "1178", "528", "90", "", "");

//pop_history_cancel_btn
//팝업 취소 버튼
Obj_Make (2, "pop_history_btn_box", "pop_history_cancel_btn", "0", "0", "244", "90", "BTN;pop_history_cancel_btn;", "");
Obj_Radius ("pop_history_cancel_btn", "6");
Obj_Shadow_XY ("pop_history_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_history_cancel_btn", "2", "image/pop_cancel_n.png");
Btn_Click ("pop_history_cancel_btn", "0", "0", "244", "90", "image/pop_cancel_y.png", "");
Obj_Make (4, "pop_history_cancel_btn", "pop_history_cancel_dis_img", "0", "0", "244", "90", "image/pop_cancel_d.png", "");
Obj_View ("pop_history_cancel_dis_img", "2");
//pop_history_cancel_txt
//팝업 취소 버튼 텍스트
Obj_Make (3, "pop_history_cancel_btn", "pop_history_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_history_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_history_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_history_cancel_btn", "2", "2");
// Btn_Enable ("pop_history_cancel_btn", "2");

//pop_history_ok_btn
//팝업 확인 버튼
Obj_Make (2, "pop_history_btn_box", "pop_history_ok_btn", "284", "0", "244", "90", "BTN;pop_history_ok_btn;", "");
Obj_Radius ("pop_history_ok_btn", "6");
Obj_Shadow_XY ("pop_history_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_history_ok_btn", "2", "image/pop_confirm_n.png");
Btn_Click ("pop_history_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
Obj_Make (4, "pop_history_ok_btn", "pop_history_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
Obj_View ("pop_history_ok_dis_img", "2");
//pop_history_ok_txt
//팝업 확인 버튼 텍스트
Obj_Make (3, "pop_history_ok_btn", "pop_history_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_history_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_history_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_history_ok_btn", "2", "2");














/* ==================================== pop_cc structure =================================== */

//pop_cc
Obj_Make (1, "screen_default", "pop_cc", "0", "190", "988", "1269", "1", "");
Obj_Overflow ("pop_cc_back", "1");

Obj_Make (4, "pop_cc", "pop_cc_tap", "234", "-40", "515", "118", "image/pop_cc_board_tap.png", "");
Obj_Make (4, "pop_cc", "pop_cc_icon", "415", "-65", "187", "146", "image/pop_cc_board_icon.png", "");

Obj_Make (1, "pop_cc", "pop_cc_box", "0", "0", "988", "1269", "", "");
Obj_Background ("pop_cc_box", "2", "image/pop_cc_board.png");


//결제방식 타이클
Obj_Make (1, "pop_cc", "pop_cc_pay", "54", "36", "0", "30", "", "");
Obj_Radius ("pop_cc_pay", "15");
Obj_Gradient("pop_cc_pay", "1", "rgba(44,139,215,1)", "rgba(21,105,197,1)", "");
Obj_Shadow_XY ("pop_cc_pay", "1", "1", "3", "rgba(0,0,0,0.4)");
//텍스트
Obj_Make (3, "pop_cc_pay", "pop_cc_pay_txt", "0", "0", "0", "0", "신용카드 결제", "");
Txt_Font ("pop_cc_pay_txt", "3", "18", "#d2eaff", "", "", "", "");
Obj_Shadow_XY ("pop_cc_pay_txt", "1", "1", "3", "rgba(0,0,0,0.3)");
Obj_Class ("pop_cc_pay_txt", "pop_cc_pay_txt_padding");
Div_Txt_Align ("pop_cc_pay", "2", "2");


//타이틀 영역
Obj_Make (1, "pop_cc", "pop_cc_title", "54", "66", "690", "90", "", "");

//할부 영역 
Obj_Make (1, "pop_cc_title", "pop_cc_title_box01", "0", "0", "690", "90", "", "");
Obj_Class ("pop_cc_title_box01", "flex_container");
//아이콘
Obj_Make (4, "pop_cc_title_box01", "pop_cc_title_box01_img", "0", "26", "56", "56", "image/pop_cc_icon01.png", "");
Obj_AB_RE ("pop_cc_title_box01_img", "2");
//텍스트
Obj_Make (3, "pop_cc_title_box01", "pop_cc_title_box01_txt", "15", "28", "600", "46", "할부", "");
Obj_Shadow_XY("pop_cc_title_box01_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("pop_cc_title_box01_txt", "3", "45", "#ffffff", "", "1", "");
Obj_AB_RE ("pop_cc_title_box01_txt", "2");

//서명 영역 
Obj_Make (1, "pop_cc_title", "pop_cc_title_box02", "0", "0", "690", "90", "", "");
Obj_Class ("pop_cc_title_box02", "flex_container");
//아이콘
Obj_Make (4, "pop_cc_title_box02", "pop_cc_title_box02_img", "0", "26", "95", "56", "image/pop_cc_icon02.png", "");
Obj_AB_RE ("pop_cc_title_box02_img", "2");
//텍스트
Obj_Make (3, "pop_cc_title_box02", "pop_cc_title_box02_txt", "15", "28", "600", "50", "서명", "");
Obj_Shadow_XY("pop_cc_title_box02_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("pop_cc_title_box02_txt", "3", "45", "#ffffff", "", "1", "");
Obj_AB_RE ("pop_cc_title_box02_txt", "2");

//IC 영역 
Obj_Make (1, "pop_cc_title", "pop_cc_title_box03", "0", "0", "690", "90", "", "");
Obj_Class ("pop_cc_title_box03", "flex_container");
//아이콘
Obj_Make (4, "pop_cc_title_box03", "pop_cc_title_box03_img", "0", "26", "72", "56", "image/pop_cc_icon03.png", "");
Obj_AB_RE ("pop_cc_title_box03_img", "2");
//텍스트
Obj_Make (3, "pop_cc_title_box03", "pop_cc_title_box03_txt", "15", "28", "600", "50", "IC 결제", "");
Obj_Shadow_XY("pop_cc_title_box03_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("pop_cc_title_box03_txt", "3", "45", "#ffffff", "", "1", "");
Obj_AB_RE ("pop_cc_title_box03_txt", "2");

//MS 영역 
Obj_Make (1, "pop_cc_title", "pop_cc_title_box04", "0", "0", "690", "90", "", "");
Obj_Class ("pop_cc_title_box04", "flex_container");
//아이콘
Obj_Make (4, "pop_cc_title_box04", "pop_cc_title_box04_img", "0", "26", "72", "56", "image/pop_cc_icon03.png", "");
Obj_AB_RE ("pop_cc_title_box04_img", "2");
//텍스트
Obj_Make (3, "pop_cc_title_box04", "pop_cc_title_box04_txt", "15", "28", "600", "50", "MS 결제", "");
Obj_Shadow_XY("pop_cc_title_box04_txt", "1", "1", "3", "rgba(0, 0, 0, 0.4)");
Txt_Font ("pop_cc_title_box04_txt", "3", "45", "#ffffff", "", "1", "");
Obj_AB_RE ("pop_cc_title_box04_txt", "2");

Obj_View ("pop_cc_title_box01", "1");
Obj_View ("pop_cc_title_box02", "2");
Obj_View ("pop_cc_title_box03", "2");
Obj_View ("pop_cc_title_box04", "2");


//제한시간
Obj_Make (1, "pop_cc", "pop_cc_time", "824", "36", "100", "99", "", "");
//제한시간 제목
Obj_Make (1, "pop_cc_time", "pop_cc_time_title", "0", "0", "100", "30", "", "");
Obj_Make (3, "pop_cc_time_title", "pop_cc_time_title_txt", "0", "0", "100", "30", "제한시간", "");
Txt_Font ("pop_cc_time_title_txt", "3", "16", "#c3e3ff", "", "2", "", "");
Obj_Shadow ("pop_cc_time_title_txt", "6", "rgba(0,0,0,0.6)");
Div_Txt_Align ("pop_cc_time_title", "2", "2");
//제한시간 남은 시간 숫자
Obj_Make (3, "pop_cc_time", "pop_cc_time_num", "0", "35", "100", "60", "60", "");
Txt_Font ("pop_cc_time_num", "3", "55", "#c3e3ff", "", "2", "", "");
Obj_Shadow ("pop_cc_time_num", "6", "rgba(0,0,0,0.6)");


//상단 정보영역
Obj_Make (1, "pop_cc", "pop_cc_info", "54", "191", "870", "65", "", "");
//할부
Obj_Make (1, "pop_cc_info", "pop_cc_info_mon", "0", "0", "375", "65", "", "");
//할부 제목 텍스트
Obj_Make (3, "pop_cc_info_mon", "pop_cc_info_mon_title_txt", "0", "19", "150", "40", "할부", "");
Txt_Font ("pop_cc_info_mon_title_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_cc_info_mon_title_txt", "6", "rgba(0,0,0,0.6)");
//할부 숫자 텍스트
Obj_Make (3, "pop_cc_info_mon", "pop_cc_info_mon_num_txt", "150", "10", "210", "55", "3", "");
Txt_Font ("pop_cc_info_mon_num_txt", "3", "50", "#1c7bd0", "", "3", "", "");
Obj_Class ("pop_cc_info_mon_num_txt", "pop_cc_month_kr");
//할부 일시불 텍스트
Obj_Make (3, "pop_cc_info_mon", "pop_cc_info_mon_once_txt", "150", "21", "210", "40", "일시불", "");
Txt_Font ("pop_cc_info_mon_once_txt", "5", "28", "#1c7bd0", "", "3", "", "");

//결제금액
Obj_Make (1, "pop_cc_info", "pop_cc_info_amt", "390", "0", "480", "65", "", "");
//결제금액 제목 텍스트
Obj_Make (3, "pop_cc_info_amt", "pop_cc_info_amt_title_txt", "0", "19", "150", "40", "총액", "");
Txt_Font ("pop_cc_info_amt_title_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_cc_info_amt_title_txt", "6", "rgba(0,0,0,0.6)");
//결제금액 숫자 텍스트
Obj_Make (3, "pop_cc_info_amt", "pop_cc_info_amt_num_txt", "150", "14", "315", "50", "10,000", "");
Txt_Font ("pop_cc_info_amt_num_txt", "5", "42", "#000000", "", "3", "", "");
Obj_Class ("pop_cc_info_amt_num_txt", "pop_cc_won");


//활성화 영역 - 상태에 따라 변경
Obj_Make (1, "pop_cc", "pop_cc_act", "54", "281", "870", "750", "", "");
Obj_Radius ("pop_cc_act", "6");

//할부개월 - 선택
Obj_Make (1, "pop_cc_act", "pop_cc_act_mon", "0", "0", "870", "750", "", "");
Obj_Make (3, "pop_cc_act_mon", "pop_cc_act_mon_txt", "0", "19", "870", "25", "할부 개월 수를 알려 주세요.", "");
Txt_Font ("pop_cc_act_mon_txt", "2", "24", "#636363", "", "2", "", "");

//버튼영역
Obj_Make (1, "pop_cc_act_mon", "pop_cc_act_mon_box", "105", "208", "660", "395", "", "");

//3개월
Obj_Make (2, "pop_cc_act_mon_box", "pop_cc_act_mon_box_03_btn", "0", "0", "210", "190", "BTN;pop_cc_act_mon_box_03_btn;", "");
Obj_Radius ("pop_cc_act_mon_box_03_btn", "8");
Obj_Shadow_XY ("pop_cc_act_mon_box_03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_mon_box_03_btn", "2", "image/pop_cc_mon369_n.png");
//3개월 클릭 이미지
Btn_Click ("pop_cc_act_mon_box_03_btn", "0", "0", "210", "190", "image/pop_cc_mon369_y.png", "#ffffff");
//3개월 텍스트
Obj_Make (3, "pop_cc_act_mon_box_03_btn", "pop_cc_act_mon_box_03_btn_txt", "0", "0", "210", "190", "3", "");
Txt_Font ("pop_cc_act_mon_box_03_btn_txt", "5", "100", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_mon_box_03_btn", "2", "2");
Obj_View ("pop_cc_act_mon_box_03_btn_dis_img", "2");

//6개월
Obj_Make (2, "pop_cc_act_mon_box", "pop_cc_act_mon_box_06_btn", "225", "0", "210", "190", "BTN;pop_cc_act_mon_box_06_btn;", "");
Obj_Radius ("pop_cc_act_mon_box_06_btn", "8");
Obj_Shadow_XY ("pop_cc_act_mon_box_06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_mon_box_06_btn", "2", "image/pop_cc_mon369_n.png");
//6개월 클릭 이미지
Btn_Click ("pop_cc_act_mon_box_06_btn", "0", "0", "210", "190", "image/pop_cc_mon369_y.png", "#ffffff");
//6개월 텍스트
Obj_Make (3, "pop_cc_act_mon_box_06_btn", "pop_cc_act_mon_box_06_btn_txt", "0", "0", "210", "190", "6", "");
Txt_Font ("pop_cc_act_mon_box_06_btn_txt", "5", "100", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_mon_box_06_btn", "2", "2");
Obj_View ("pop_cc_act_mon_box_06_btn_dis_img", "2");

//9개월
Obj_Make (2, "pop_cc_act_mon_box", "pop_cc_act_mon_box_09_btn", "452", "0", "210", "190", "BTN;pop_cc_act_mon_box_09_btn;", "");
Obj_Radius ("pop_cc_act_mon_box_09_btn", "8");
Obj_Shadow_XY ("pop_cc_act_mon_box_09_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_mon_box_09_btn", "2", "image/pop_cc_mon369_n.png");
//9개월 클릭 이미지
Btn_Click ("pop_cc_act_mon_box_09_btn", "0", "0", "210", "190", "image/pop_cc_mon369_y.png", "#ffffff");
//9개월 텍스트
Obj_Make (3, "pop_cc_act_mon_box_09_btn", "pop_cc_act_mon_box_09_btn_txt", "0", "0", "210", "190", "9", "");
Txt_Font ("pop_cc_act_mon_box_09_btn_txt", "5", "100", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_mon_box_09_btn", "2", "2");
Obj_View ("pop_cc_act_mon_box_09_btn_dis_img", "2");

//일시불
Obj_Make (2, "pop_cc_act_mon_box", "pop_cc_act_mon_box_lump_btn", "0", "205", "322", "190", "BTN;pop_cc_act_mon_box_lump_btn;", "");
Obj_Radius ("pop_cc_act_mon_box_lump_btn", "8");
Obj_Shadow_XY ("pop_cc_act_mon_box_lump_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_mon_box_lump_btn", "2", "image/pop_cc_mon_n.png");
//일시불 클릭 이미지
Btn_Click ("pop_cc_act_mon_box_lump_btn", "0", "0", "322", "190", "image/pop_cc_mon_y.png", "#ffffff");
//일시불 텍스트
Obj_Make (3, "pop_cc_act_mon_box_lump_btn", "pop_cc_act_mon_box_lump_btn_txt", "0", "0", "322", "190", "일시불", "");
Txt_Font ("pop_cc_act_mon_box_lump_btn_txt", "5", "50", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_mon_box_lump_btn", "2", "2");
Obj_View ("pop_cc_act_mon_box_lump_btn_dis_img", "2");

//직접입력
Obj_Make (2, "pop_cc_act_mon_box", "pop_cc_act_mon_box_dire_btn", "340", "205", "322", "190", "BTN;pop_cc_act_mon_box_dire_btn;", "");
Obj_Radius ("pop_cc_act_mon_box_dire_btn", "8");
Obj_Shadow_XY ("pop_cc_act_mon_box_dire_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_mon_box_dire_btn", "2", "image/pop_cc_mon_n.png");
//직접입력 클릭 이미지
Btn_Click ("pop_cc_act_mon_box_dire_btn", "0", "0", "322", "190", "image/pop_cc_mon_y.png", "#ffffff");
//직접입력 텍스트
Obj_Make (3, "pop_cc_act_mon_box_dire_btn", "pop_cc_act_mon_box_dire_btn_txt", "0", "0", "322", "190", "직접입력", "");
Txt_Font ("pop_cc_act_mon_box_dire_btn_txt", "5", "50", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_mon_box_dire_btn", "2", "2");
Obj_View ("pop_cc_act_mon_box_dire_btn_dis_img", "2");





//할부개월 - 키패드
Obj_Make (1, "pop_cc_act", "pop_cc_act_key", "0", "0", "870", "750", "", "");
Obj_Make (3, "pop_cc_act_key", "pop_cc_act_key_txt", "0", "19", "870", "25", "할부 개월 수를 알려 주세요.", "");
Txt_Font ("pop_cc_act_key_txt", "2", "24", "#636363", "", "2", "", "");

//버튼영역
Obj_Make (1, "pop_cc_act_key", "pop_cc_act_key_box", "208", "120", "455", "570", "", "");

//키패드 1
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_01_btn", "0", "0", "145", "135", "BTN;pop_cc_act_key_box_01_btn;", "");
Obj_Radius ("pop_cc_act_key_box_01_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_01_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_01_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_01_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_01_btn", "pop_cc_act_key_box_01_btn_txt", "0", "0", "145", "135", "1", "");
Txt_Font ("pop_cc_act_key_box_01_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_01_btn", "2", "2");


//키패드 2
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_02_btn", "155", "0", "145", "135", "BTN;pop_cc_act_key_box_02_btn;", "");
Obj_Radius ("pop_cc_act_key_box_02_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_02_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_02_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_02_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_02_btn", "pop_cc_act_key_box_02_btn_txt", "0", "0", "145", "135", "2", "");
Txt_Font ("pop_cc_act_key_box_02_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_02_btn", "2", "2");


//키패드 3
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_03_btn", "310", "0", "145", "135", "BTN;pop_cc_act_key_box_03_btn;", "");
Obj_Radius ("pop_cc_act_key_box_03_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_03_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_03_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_03_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_03_btn", "pop_cc_act_key_box_03_btn_txt", "0", "0", "145", "135", "3", "");
Txt_Font ("pop_cc_act_key_box_03_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_03_btn", "2", "2");


//키패드 4
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_04_btn", "0", "145", "145", "135", "BTN;pop_cc_act_key_box_04_btn;", "");
Obj_Radius ("pop_cc_act_key_box_04_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_04_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_04_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_04_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_04_btn", "pop_cc_act_key_box_04_btn_txt", "0", "0", "145", "135", "4", "");
Txt_Font ("pop_cc_act_key_box_04_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_04_btn", "2", "2");


//키패드 5
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_05_btn", "155", "145", "145", "135", "BTN;pop_cc_act_key_box_05_btn;", "");
Obj_Radius ("pop_cc_act_key_box_05_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_05_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_05_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_05_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_05_btn", "pop_cc_act_key_box_05_btn_txt", "0", "0", "145", "135", "5", "");
Txt_Font ("pop_cc_act_key_box_05_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_05_btn", "2", "2");


//키패드 6
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_06_btn", "310", "145", "145", "135", "BTN;pop_cc_act_key_box_06_btn;", "");
Obj_Radius ("pop_cc_act_key_box_06_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_06_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_06_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_06_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_06_btn", "pop_cc_act_key_box_06_btn_txt", "0", "0", "145", "135", "6", "");
Txt_Font ("pop_cc_act_key_box_06_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_06_btn", "2", "2");


//키패드 7
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_07_btn", "0", "290", "145", "135", "BTN;pop_cc_act_key_box_07_btn;", "");
Obj_Radius ("pop_cc_act_key_box_07_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_07_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_07_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_07_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_07_btn", "pop_cc_act_key_box_07_btn_txt", "0", "0", "145", "135", "7", "");
Txt_Font ("pop_cc_act_key_box_07_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_07_btn", "2", "2");


//키패드 8
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_08_btn", "155", "290", "145", "135", "BTN;pop_cc_act_key_box_08_btn;", "");
Obj_Radius ("pop_cc_act_key_box_08_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_08_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_08_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_08_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_08_btn", "pop_cc_act_key_box_08_btn_txt", "0", "0", "145", "135", "8", "");
Txt_Font ("pop_cc_act_key_box_08_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_08_btn", "2", "2");


//키패드 9
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_09_btn", "310", "290", "145", "135", "BTN;pop_cc_act_key_box_09_btn;", "");
Obj_Radius ("pop_cc_act_key_box_09_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_09_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_09_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_09_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_09_btn", "pop_cc_act_key_box_09_btn_txt", "0", "0", "145", "135", "9", "");
Txt_Font ("pop_cc_act_key_box_09_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_09_btn", "2", "2");


//키패드 all del
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_all_btn", "0", "435", "145", "135", "BTN;pop_cc_act_key_box_all_btn;", "");
Obj_Radius ("pop_cc_act_key_box_all_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_all_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_all_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_all_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_all_btn", "pop_cc_act_key_box_all_btn_txt", "0", "0", "145", "135", "ALL DEL", "");
Txt_Font ("pop_cc_act_key_box_all_btn_txt", "5", "40", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_all_btn", "2", "2");


//키패드 0
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_00_btn", "155", "435", "145", "135", "BTN;pop_cc_act_key_box_00_btn;", "");
Obj_Radius ("pop_cc_act_key_box_00_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_00_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_00_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_00_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_00_btn", "pop_cc_act_key_box_00_btn_txt", "0", "0", "145", "135", "0", "");
Txt_Font ("pop_cc_act_key_box_00_btn_txt", "3", "80", "#222222", "", "2", "", "");
Div_Txt_Align ("pop_cc_act_key_box_00_btn", "2", "2");


//키패드 del
Obj_Make (2, "pop_cc_act_key_box", "pop_cc_act_key_box_del_btn", "310", "435", "145", "135", "BTN;pop_cc_act_key_box_del_btn;", "");
Obj_Radius ("pop_cc_act_key_box_del_btn", "8");
Obj_Shadow_XY ("pop_cc_act_key_box_del_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_act_key_box_del_btn", "2", "image/pop_cc_num_n.png");
//클릭 이미지
Btn_Click ("pop_cc_act_key_box_del_btn", "0", "0", "145", "135", "image/pop_cc_num_y.png", "#ffffff");
//아이콘
Obj_Make (3, "pop_cc_act_key_box_del_btn", "pop_cc_act_key_box_del_btn_icon", "50", "15", "36", "55", "◀", "");
Txt_Font ("pop_cc_act_key_box_del_btn_icon", "5", "40", "#222222", "", "2", "", "");
//텍스트
Obj_Make (3, "pop_cc_act_key_box_del_btn", "pop_cc_act_key_box_del_btn_txt", "0", "65", "145", "50", "DEL", "");
Txt_Font ("pop_cc_act_key_box_del_btn_txt", "5", "40", "#222222", "", "2", "", "");



//사인요청
Obj_Make (1, "pop_cc_act", "pop_cc_act_sign", "0", "0", "870", "750", "", "");
Obj_Make (3, "pop_cc_act_sign", "pop_cc_act_sign_txt", "0", "19", "870", "25", "아래 서명란에 서명 후 확인 버튼을 눌러주세요.", "");
Txt_Font ("pop_cc_act_sign_txt", "2", "24", "#636363", "", "2", "", "");

//사인영역
Obj_Make (1, "pop_cc_act_sign", "pop_cc_act_sign_pad", "35", "110", "801", "401", "", "");
Obj_Background ("pop_cc_act_sign_pad", "2", "image/pop_cc_signpad.png");

//재서명
Obj_Make (2, "pop_cc_act_sign", "pop_cc_resign_btn", "313", "570", "244", "90", "BTN;pop_cc_resign_btn;", "");
Obj_Radius ("pop_cc_resign_btn", "6");
Obj_Shadow_XY ("pop_cc_resign_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_resign_btn", "2", "image/pop_cc_re_btn_n.png");
//취소 클릭 이미지
Btn_Click ("pop_cc_resign_btn", "0", "0", "244", "90", "image/pop_cc_re_btn_y.png", "");
//취소 disable 이미지
Obj_Make (4, "pop_cc_resign_btn", "pop_cc_resign_dis_img", "0", "0", "244", "90", "image/pop_cc_re_btn_d.png", "");
//취소 텍스트
Obj_Make (3, "pop_cc_resign_btn", "pop_cc_resign_txt", "72", "0", "171", "90", "재서명", "");
Txt_Font ("pop_cc_resign_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_cc_resign_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_cc_resign_btn", "2", "2");
Obj_View ("pop_cc_resign_dis_img", "2");




//ic결제
Obj_Make (1, "pop_cc_act", "pop_cc_act_ic", "0", "0", "870", "750", "", "");
Obj_Make (3, "pop_cc_act_ic", "pop_cc_act_ic_txt", "0", "19", "870", "25", "신용카드를 아래 그림과 같이 리더기에 삽입해 주세요.", "");
Txt_Font ("pop_cc_act_ic_txt", "2", "24", "#636363", "", "2", "", "");
//결제 이미지
// Obj_Make (4, "pop_cc_act_ic", "pop_cc_act_ic_img", "0", "60", "870", "690", "image/card_motion01.svg", "");
Obj_Svg_Make ("pop_cc_act_ic", "pop_cc_act_ic_img", "0", "60", "870", "690", "image/card_motion01.svg");


//ms결제
Obj_Make (1, "pop_cc_act", "pop_cc_act_ms", "0", "0", "870", "750", "", "");
Obj_Make (3, "pop_cc_act_ms", "pop_cc_act_ms_txt", "0", "19", "870", "25", "신용카드를 아래와 같이 긁어 주세요.", "");
Txt_Font ("pop_cc_act_ms_txt", "2", "24", "#636363", "", "2", "", "");
//결제 이미지
// Obj_Make (4, "pop_cc_act_ms", "pop_cc_act_ms_img", "0", "60", "870", "690", "image/card_motion02.svg", "");
Obj_Svg_Make ("pop_cc_act_ms", "pop_cc_act_ms_img", "0", "60", "870", "690", "image/card_motion02.svg");





//버튼 영역
Obj_Make (1, "pop_cc", "pop_cc_btn_box", "54", "1106", "870", "90", "", "");

//이전
Obj_Make (2, "pop_cc_btn_box", "pop_cc_prev_btn", "35", "0", "244", "90", "BTN;pop_cc_prev_btn;", "");
Obj_Radius ("pop_cc_prev_btn", "6");
Obj_Shadow_XY ("pop_cc_prev_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_prev_btn", "2", "image/pop_cc_prev_btn_n.png");
//이전 클릭 이미지
Btn_Click ("pop_cc_prev_btn", "0", "0", "244", "90", "image/pop_cc_prev_btn_y.png", "");
//이전 disable 이미지
Obj_Make (4, "pop_cc_prev_btn", "pop_cc_prev_dis_img", "0", "0", "244", "90", "image/pop_cc_prev_btn_d.png", "");
//이전 텍스트
Obj_Make (3, "pop_cc_prev_btn", "pop_cc_prev_txt", "72", "0", "171", "90", "이전", "");
Txt_Font ("pop_cc_prev_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_cc_prev_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_cc_prev_btn", "2", "2");
Obj_View ("pop_cc_prev_dis_img", "2");

//취소
Obj_Make (2, "pop_cc_btn_box", "pop_cc_cancel_btn", "313", "0", "244", "90", "BTN;pop_cc_cancel_btn;", "");
Obj_Radius ("pop_cc_cancel_btn", "6");
Obj_Shadow_XY ("pop_cc_cancel_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_cancel_btn", "2", "image/pop_cc_cancel_n.png");
//취소 클릭 이미지
Btn_Click ("pop_cc_cancel_btn", "0", "0", "244", "90", "image/pop_cc_cancel_y.png", "");
//취소 disable 이미지
Obj_Make (4, "pop_cc_cancel_btn", "pop_cc_cancel_dis_img", "0", "0", "244", "90", "image/pop_cc_cancel_d.png", "");
//취소 텍스트
Obj_Make (3, "pop_cc_cancel_btn", "pop_cc_cancel_txt", "72", "0", "171", "90", "취소", "");
Txt_Font ("pop_cc_cancel_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_cc_cancel_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_cc_cancel_btn", "2", "2");
Obj_View ("pop_cc_cancel_dis_img", "2");

//확인
//확인 버튼 영역
Obj_Make (1, "pop_cc_btn_box", "pop_cc_btn_box_ok", "591", "0", "244", "90", "", "");

//확인 버튼 라운드 Ani
Obj_Make (1, "pop_cc_btn_box_ok", "pop_cc_btn_box_ok_anibox", "0", "0", "244", "90", "", "");
Obj_Radius ("pop_cc_btn_box_ok_anibox", "6");

Obj_Make (2, "pop_cc_btn_box_ok", "pop_cc_ok_btn", "0", "0", "244", "90", "BTN;pop_cc_ok_btn;", "");
Obj_Radius ("pop_cc_ok_btn", "6");
Obj_Shadow_XY ("pop_cc_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cc_ok_btn", "2", "image/pop_confirm_n.png");
//확인 클릭 이미지
Btn_Click ("pop_cc_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
//확인 disable 이미지
Obj_Make (4, "pop_cc_ok_btn", "pop_cc_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
//확인 텍스트
Obj_Make (3, "pop_cc_ok_btn", "pop_cc_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_cc_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_cc_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_cc_ok_btn", "2", "2");
Obj_View ("pop_cc_ok_dis_img", "2");


// Obj_Ani ("pop_cc_btn_box_ok", "pulse3", "", "1", "1", "0", "");
// Obj_Ani ("pop_cc_btn_box_ok_anibox", "lightOut4", "", "1", "1", "0", "");



/* ===================================== pop_ap structure ====================================== */
//승인요청 팝업 - 옵션 없음
//written in from 2018 04 03

//pop_ap
Obj_Make (1, "screen_default", "pop_ap", "0", "300", "918", "688", "1", "");
Obj_Overflow ("pop_ap_back", "1");

Obj_Make (4, "pop_ap", "pop_ap_tap", "198", "-40", "522", "118", "image/pop_ap_board_tap.png", "");
Obj_Make (4, "pop_ap", "pop_ap_icon", "366", "-65", "186", "146", "image/pop_ap_board_icon.png", "");

Obj_Make (1, "pop_ap", "pop_ap_box", "0", "0", "918", "1009", "", "");
Obj_Background ("pop_ap_box", "2", "image/pop_ap_board.png");

//제목 영역
Obj_Make (1, "pop_ap_box", "pop_ap_box_info", "14", "45", "880", "245", "", "");
Obj_Make (1, "pop_ap_box_info", "pop_ap_box_info_title", "0", "0", "880", "60", "", "");
Div_HV_Center("pop_ap_box_info_title", "2", "50", "50");
Obj_Class ("pop_ap_box_info_title", "pop_txt_center");
//예제 한글 타이틀
//타이틀 1
Obj_Make (3, "pop_ap_box_info_title", "pop_ap_box_info_title_txt_01", "0", "-15", "0", "40", "온라인 ", "");
Txt_Font ("pop_ap_box_info_title_txt_01", "2", "55", "#ffffff", "", "3", "", "");
Obj_Shadow_XY("pop_ap_box_info_title_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_ap_box_info_title_txt_01", "2");
//타이틀 2
Obj_Make (3, "pop_ap_box_info_title", "pop_ap_box_info_title_txt_02", "0", "-15", "0", "40", "승인 요청 ", "");
Txt_Font ("pop_ap_box_info_title_txt_02", "5", "55", "#ffe200", "", "1", "", "");
Obj_Shadow_XY("pop_ap_box_info_title_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_ap_box_info_title_txt_02", "2");
//타이틀 3
Obj_Make (3, "pop_ap_box_info_title", "pop_ap_box_info_title_txt_03", "0", "-15", "0", "40", "중입니다.", "");
Txt_Font ("pop_ap_box_info_title_txt_03", "2", "55", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_ap_box_info_title_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_ap_box_info_title_txt_03", "2");;
//작은
Obj_Make (3, "pop_ap_box_info_title", "pop_ap_box_info_title_txt_small", "0", "135", "880", "20", "잠시만 기다려 주세요.", "");
Txt_Font ("pop_ap_box_info_title_txt_small", "2", "20", "#7f838f", "", "2", "", "");
Obj_Class ("pop_ap_box_info_title_txt_small", "pop_small_txt");

//아이콘 모션 영역
// Obj_Make (4, "pop_ap", "pop_ap_motion", "54", "330", "800", "580", "image/approval_css_loof.svg", "");
Obj_Svg_Make ("pop_ap", "pop_ap_motion", "54", "330", "800", "580", "image/approval_css_loof.svg");
Obj_Make (4, "pop_ap", "pop_ap_motion_cover", "54", "330", "801", "581", "image/pop_ap_board_cover.png", "");




/* ===================================== pop_cpr structure ====================================== */
//pop_cpr
Obj_Make (1, "screen_default", "pop_cpr", "0", "255", "918", "1155", "1", "");
Obj_Overflow ("pop_cpr_back", "1");

Obj_Make (4, "pop_cpr", "pop_cpr_tap", "198", "-40", "522", "118", "image/pop_cpr_board_tap.png", "");
Obj_Make (4, "pop_cpr", "pop_cpr_icon", "372", "-65", "174", "146", "image/pop_cpr_board_icon.png", "");

Obj_Make (1, "pop_cpr", "pop_cpr_box", "0", "0", "918", "1155", "", "");
Obj_Background ("pop_cpr_box", "2", "image/pop_cpr_board.png");

//제목 영역
Obj_Make (1, "pop_cpr_box", "pop_cpr_box_info", "14", "75", "880", "180", "", "");
Obj_Make (1, "pop_cpr_box_info", "pop_cpr_box_info_title", "0", "0", "880", "60", "", "");
Div_HV_Center("pop_cpr_box_info_title", "2", "50", "50");
Obj_Class ("pop_cpr_box_info_title", "flex_container pop_txt_center");
//예제 한글 타이틀
//타이틀 1
Obj_Make (3, "pop_cpr_box_info_title", "pop_cpr_box_info_title_txt_01", "0", "-15", "0", "40", "결제", "");
Txt_Font ("pop_cpr_box_info_title_txt_01", "5", "55", "#ffe200", "", "3", "", "");
Obj_Shadow_XY("pop_cpr_box_info_title_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_cpr_box_info_title_txt_01", "2");
//타이틀 2
Obj_Make (3, "pop_cpr_box_info_title", "pop_cpr_box_info_title_txt_02", "0", "-15", "0", "40", "가 ", "");
Txt_Font ("pop_cpr_box_info_title_txt_02", "2", "55", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_cpr_box_info_title_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_cpr_box_info_title_txt_02", "2");
//타이틀 3
Obj_Make (3, "pop_cpr_box_info_title", "pop_cpr_box_info_title_txt_03", "0", "-15", "0", "40", "완료", "");
Txt_Font ("pop_cpr_box_info_title_txt_03", "5", "55", "#ffe200", "", "1", "", "");
Obj_Shadow_XY("pop_cpr_box_info_title_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_cpr_box_info_title_txt_03", "2");;
//타이틀 4
Obj_Make (3, "pop_cpr_box_info_title", "pop_cpr_box_info_title_txt_04", "0", "-15", "0", "40", "되었습니다. ", "");
Txt_Font ("pop_cpr_box_info_title_txt_04", "2", "55", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_cpr_box_info_title_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_cpr_box_info_title_txt_04", "2");

//작은
Obj_Make (3, "pop_cpr_box", "pop_cpr_box_txt_small", "14", "270", "880", "25", "5초 후 자동으로 닫힙니다.", "");
Txt_Font ("pop_cpr_box_txt_small", "2", "20", "#7f838f", "", "2", "", "");
Obj_Class ("pop_cpr_box_txt_small", "pop_small_txt");

//서브 타이틀
Obj_Make (3, "pop_cpr_box", "pop_cpr_subtitle", "14", "320", "880", "45", "이용해 주셔서 감사합니다.", "");
Txt_Font ("pop_cpr_subtitle", "5", "36", "#032c5f", "", "2", "", "");

//모션 이미지 설명 타이틀
Obj_Make (3, "pop_cpr_box", "pop_cpr_img_info_txt", "54", "395", "800", "35", "영수증과 번호표를 가져가 주세요.", "");
Txt_Font ("pop_cpr_img_info_txt", "2", "24", "#636363", "", "2", "", "");

//아이콘 모션 영역
// Obj_Make (4, "pop_cpr", "pop_cpr_motion", "54", "437", "800", "480", "image/receipt_motion.svg", "");
Obj_Svg_Make ("pop_cpr", "pop_cpr_motion", "54", "437", "800", "480", "image/receipt_motion.svg");

//확인
Obj_Make (2, "pop_cpr_box", "pop_cpr_ok_btn", "332", "992", "244", "90", "BTN;pop_cpr_ok_btn;", "");
Obj_Radius ("pop_cpr_ok_btn", "6");
Obj_Shadow_XY ("pop_cpr_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_cpr_ok_btn", "2", "image/pop_confirm_n.png");
//확인 클릭 이미지
Btn_Click ("pop_cpr_ok_btn", "0", "0", "244", "90", "image/pop_confirm_y.png", "");
//확인 disable 이미지
Obj_Make (4, "pop_cpr_ok_btn", "pop_cpr_ok_dis_img", "0", "0", "244", "90", "image/pop_confirm_d.png", "");
//확인 텍스트
Obj_Make (3, "pop_cpr_ok_btn", "pop_cpr_ok_txt", "72", "0", "171", "90", "확인", "");
Txt_Font ("pop_cpr_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_cpr_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_cpr_ok_btn", "2", "2");
Obj_View ("pop_cpr_ok_dis_img", "2");







/* ===================================== pop_time structure ====================================== */
//시간연장 팝업

//pop_time
Obj_Make (1, "screen_default", "pop_time", "0", "330", "838", "653", "1", "");
Obj_Overflow ("pop_time_back", "1");

Obj_Make (4, "pop_time", "pop_time_tap", "156", "-40", "525", "118", "image/pop_time_board_tap.png", "");
Obj_Make (4, "pop_time", "pop_time_icon", "320", "-89", "201", "201", "image/pop_time_board_icon.png", "");

Obj_Make (1, "pop_time", "pop_time_box", "0", "0", "838", "1023", "", "");
Obj_Background ("pop_time_box", "2", "image/pop_time_board.png");


//제목 영역
Obj_Make (1, "pop_time_box", "pop_time_box_info", "14", "45", "800", "235", "", "");
Obj_Make (1, "pop_time_box_info", "pop_time_box_info_title", "0", "0", "800", "65", "", "");
Div_HV_Center("pop_time_box_info_title", "2", "50", "50");
Obj_Class ("pop_time_box_info_title", "flex_container pop_txt_center");
//예제 한글 타이틀
//타이틀 1
Obj_Make (3, "pop_time_box_info_title", "pop_time_box_info_title_txt_01", "0", "-45", "0", "65", "시간 연장 ", "");
Txt_Font ("pop_time_box_info_title_txt_01", "5", "60", "#ffe200", "", "3", "", "");
Obj_Shadow_XY("pop_time_box_info_title_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_time_box_info_title_txt_01", "2");
//타이틀 2
Obj_Make (3, "pop_time_box_info_title", "pop_time_box_info_title_txt_02", "0", "40", "800", "35", "일정시간 입력이 없어 초기화 합니다.", "");
Txt_Font ("pop_time_box_info_title_txt_02", "2", "32", "#ffffff", "", "2", "", "");
Obj_Shadow_XY("pop_time_box_info_title_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
//작은
Obj_Make (3, "pop_time_box_info_title", "pop_time_box_info_title_txt_small", "0", "130", "800", "25", "시간을 연장하시려면 아래 버튼을 눌러주세요.", "");
Txt_Font ("pop_time_box_info_title_txt_small", "2", "20", "#7f838f", "", "2", "", "");
Obj_Class ("pop_time_box_info_title_txt_small", "pop_small_txt");


// //로딩바
// Obj_Make (1, "pop_time_box", "pop_time_box_load_bar", "99", "347", "631", "39", "", "");
// Obj_Background ("pop_time_box_load_bar", "2", "image/pop_time_bar.png");
// //로딩바 - 진행상태 바
// Obj_Make (1, "pop_time_box_load_bar", "pop_time_box_load_bar_now", "3", "3", "624", "32", "", "");
// Obj_Make (4, "pop_time_box_load_bar_now", "pop_time_box_load_bar_now_img", "0", "0", "627", "34", "image/pop_time_bar_over.png", "");
// Obj_Overflow ("pop_time_box_load_bar_now", "1");
// Obj_Radius ("pop_time_box_load_bar_now", "17");
// Obj_Shadow_XY ("pop_time_box_load_bar_now", "1", "1", "1", "rgba(0,0,0,0.4)");


// Obj_Make (4, "pop_time_box", "pop_time_box_img", "214", "313", "400", "400", "image/hourglass_css_loof.svg", "");
Obj_Svg_Make ("pop_time_box", "pop_time_box_img", "90", "330", "655", "450", "image/Hourglass_new_motion.svg");

//ok
//시간 연장 버튼
Obj_Make (2, "pop_time", "pop_time_ok_btn", "286", "860", "265", "90", "BTN;pop_time_ok_btn;", "");
Obj_Radius ("pop_time_ok_btn", "6");
Obj_Shadow_XY ("pop_time_ok_btn", "3", "3", "7", "rgba(0,0,0,0.4)");
Obj_Background ("pop_time_ok_btn", "2", "image/time_btn_n.png");
Btn_Click ("pop_time_ok_btn", "0", "0", "265", "90", "image/time_btn_y.png", "");
Obj_Make (4, "pop_time_ok_btn", "pop_time_ok_dis_img", "0", "0", "265", "90", "image/time_btn_d.png", "");
Obj_View ("pop_time_ok_dis_img", "2");
//txt
//시간 연장 버튼 텍스트
Obj_Make (3, "pop_time_ok_btn", "pop_time_ok_txt", "75", "0", "180", "90", "시간 연장", "");
Txt_Font ("pop_time_ok_txt", "3", "34", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("pop_time_ok_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
Div_Txt_Align ("pop_time_ok_btn", "2", "2");





/* ======================================= 포스정보 structure ====================================== */
Obj_Make (1, "screen_default", "pos_area_t", "165", "20", "250", "40", "", "");

Obj_Make (3, "pos_area_t", "pos_area_t_pos_txt", "0", "0", "130", "22", "포스번호 : 51", "");
Txt_Font ("pos_area_t_pos_txt", "4", "13", "#AAAAAA", "", "1", "", "");

Obj_Make (3, "pos_area_t", "pos_area_t_sales_txt", "0", "20", "155", "22", "영업일자 : 2018.12.24(월)", "");
Txt_Font ("pos_area_t_sales_txt", "4", "13", "#AAAAAA", "", "1", "", "");

Obj_Make (3, "pos_area_t", "pos_area_t_time_txt", "155", "20", "130", "22", "001", "");
Txt_Font ("pos_area_t_time_txt", "4", "13", "#AAAAAA", "", "1", "", "");



Obj_Make (1, "screen_default", "pos_area_b", "25", "1890", "1030", "22", "", "");

// 포스
Obj_Make (3, "pos_area_b", "pos_area_b_date_txt", "0", "0", "130", "22", "일시 : 2018.09.14(금)", "");
Txt_Font ("pos_area_b_date_txt", "4", "13", "#AAAAAA", "", "1", "", "");
// 버전
Obj_Make (3, "pos_area_b", "pos_area_b_clock_txt", "135", "0", "80", "22", "15:20:15", "");
Txt_Font ("pos_area_b_clock_txt", "4", "13", "#AAAAAA", "", "1", "", "");
// 현재일자
Obj_Make (3, "pos_area_b", "pos_area_b_ver_txt", "848", "0", "180", "22", "버전 : 2018.03.05 - 01", "");
Txt_Font ("pos_area_b_ver_txt", "4", "13", "#010101", "", "3", "", "");



/* ====================================== first_screen structure ====================================== */

//로딩화면
Obj_Make (1, "screen_default", "first_screen", "0", "0", "1080", "1920", "1", "");
Video_Make ("first_screen", "first_screen_video", "image/Plexus_bg.webm");
Obj_Overflow ("first_screen", "1");

//상단커튼
Obj_Make (4, "first_screen", "fs_curtain_lt", "-230", "-110", "621", "1630", "image/fscreen_curtain_lt.png", "");
Obj_Make (4, "first_screen", "fs_curtain_rt", "689", "-110", "621", "1630", "image/fscreen_curtain_rt.png", "");
//하단커튼
Obj_Make (4, "first_screen", "fs_curtain_ld", "-310", "1369", "559", "881", "image/fscreen_curtain_ld.png", "");
Obj_Make (4, "first_screen", "fs_curtain_rd", "831", "1369", "559", "881", "image/fscreen_curtain_rd.png", "");

//타이틀
Obj_Make (4, "first_screen", "fs_title", "251", "22", "611", "318", "image/fscreen_title.png", "");
//빤짝이
Obj_Make (4, "first_screen", "fs_title_light01", "20", "-205", "848", "540", "image/main_slide_light.png", "");
Obj_Make (4, "first_screen", "fs_title_light02", "25", "-60", "848", "540", "image/main_slide_light.png", "");
Obj_Make (4, "first_screen", "fs_title_light03", "205", "-120", "848", "540", "image/main_slide_light.png", "");
Obj_Make (4, "first_screen", "fs_title_light04", "415", "-115", "848", "540", "image/main_slide_light.png", "");
//빤짝이 애니
Obj_Ani ("fs_title_light01", "band_eff3", "", "3", "6", "0", "");
// Obj_Ani ("fs_title_light01", "band_eff3", "", "2", "5", "0", "");
// Obj_Ani ("fs_title_light01", "band_eff3", "", "4", "4", "0", "");
// Obj_Ani ("fs_title_light01", "band_eff3", "", "3", "5", "0", "");

//광고영역
Obj_Make (4, "first_screen", "fs_ribbon_back", "40", "926", "1000", "62", "image/fscreen_ribbon_b.png", "");
Obj_Make (1, "first_screen", "fs_ad_box", "70", "267", "940", "705", "", "");
Obj_Radius ("fs_ad_box", "6");
Obj_Shadow_XY ("fs_ad_box", "20", "20", "30", "rgba(0,0,0,0.4)");
Obj_Overflow ("fs_ad_box", "1");
Obj_Make (4, "first_screen", "fs_ad_box_light", "70", "267", "940", "705", "image/fscreen_light.png", "");
Obj_Make (4, "first_screen", "fs_ribbon_front", "12", "918", "1056", "214", "image/fscreen_ribbon_f.png", "");
//광고 이미지/영상
Obj_Make (4, "fs_ad_box", "fs_ad_box_img", "0", "0", "940", "705", "image/fs_ad_sample_img.png", "");
Video_Make ("fs_ad_box", "fs_ad_box_video", "image/ad_sample.webm");
Obj_View ("fs_ad_box_video", "2");



Obj_Make (2, "first_screen", "fs_lang_btn", "365", "1770", "350", "90", "BTN;fs_lang_btn;", "");
Obj_Radius("fs_lang_btn", "43");
Obj_Shadow_XY("fs_lang_btn", "20", "20", "30", "rgba(0, 0, 0, 0.4)");
Obj_Background ("fs_lang_btn", "2", "image/fscreen_la_btn_n.png");
Btn_Click ("fs_lang_btn", "0", "0", "350", "90", "image/fscreen_la_btn_y.png", "");
//텍스트
Obj_Make (3, "fs_lang_btn", "fs_lang_txt", "5", "30", "215", "40", "언어", "");
Txt_Font ("fs_lang_txt", "3", "30", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("fs_lang_txt", "1", "1", "3", "rgba(0,0,0,0.4)");
//국기
Obj_Make (1, "fs_lang_btn", "fs_lang_flag", "220", "17", "81", "55", "", "");
Obj_Radius("fs_lang_flag", "6");
Obj_Shadow_XY("fs_lang_flag", "0", "3", "7", "rgba(0, 0, 0, 0.4)");
Obj_Background ("fs_lang_flag", "2", "image/lang_btn_kr_n.png");



//주문하기
Obj_Make (1, "first_screen", "fs_order_box", "70", "1210", "939", "460", "", "");

//주문하기 설명
Obj_Make (3, "fs_order_box", "fs_order_info", "0", "0", "939", "100", "주문하려면 아래 버튼을 클릭하세요.", "");
Txt_Font ("fs_order_info", "2", "46", "#b4dcff", "", "2", "", "");
Obj_Shadow_XY ("fs_order_info", "15", "15", "20", "rgba(0,0,0,0.6)");

//주문하기 버튼
Obj_Make (2, "fs_order_box", "fs_order_btn", "0", "95", "939", "340", "BTN;fs_order_btn;", "");
Obj_Radius ("fs_order_btn", "6");
Obj_Shadow_XY ("fs_order_btn", "20", "20", "30", "rgba(0,0,0,0.4)");
Obj_Background ("fs_order_btn", "2", "image/fscreen_order_btn_n.png");
Btn_Click ("fs_order_btn", "0", "0", "939", "340", "image/fscreen_order_btn_y.png", "");
//주문하기 버튼 텍스트
Obj_Make (3, "fs_order_btn", "fs_order_txt", "0", "110", "939", "115", "주문하기", "");
Txt_Font ("fs_order_txt", "5", "90", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("fs_order_txt", "1", "1", "3", "rgba(0,0,0,0.4)");

Obj_Ani ("fs_order_btn", "band_eff2", "", "1", "4", "0", "");



//매장, 포장
Obj_Make (1, "first_screen", "fs_sp_box", "70", "1180", "939", "540", "", "");

//매장, 포장 설명
Obj_Make (3, "fs_sp_box", "fs_sp_info", "0", "0", "939", "100", "식사 할 장소를 선택하세요.", "");
Txt_Font ("fs_sp_info", "2", "46", "#b4dcff", "", "2", "", "");
Obj_Shadow_XY ("fs_sp_info", "15", "15", "20", "rgba(0,0,0,0.6)");

//매장 버튼
Obj_Make (2, "fs_sp_box", "fs_sp_store_btn", "0", "91", "430", "420", "BTN;fs_sp_store_btn;", "");
Obj_Radius ("fs_sp_store_btn", "6");
Obj_Shadow_XY ("fs_sp_store_btn", "20", "20", "30", "rgba(0,0,0,0.4)");
Obj_Background ("fs_sp_store_btn", "2", "image/fs_sp_store_btn_n.png");
Btn_Click ("fs_sp_store_btn", "0", "0", "430", "420", "image/fs_sp_store_btn_y.png", "");
Obj_Make (4, "fs_sp_store_btn", "fs_sp_store_dis_img", "0", "0", "430", "420", "image/fs_sp_store_btn_d.png", "");
Obj_View ("fs_sp_store_dis_img", "2");
//매장 버튼 텍스트
Obj_Make (3, "fs_sp_store_btn", "fs_sp_store_txt", "0", "35", "430", "65", "매장", "");
Txt_Font ("fs_sp_store_txt", "5", "50", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("fs_sp_store_txt", "1", "1", "3", "rgba(0,0,0,0.4)");


//포장 버튼
Obj_Make (2, "fs_sp_box", "fs_sp_pak_btn", "510", "91", "430", "420", "BTN;fs_sp_pak_btn;", "");
Obj_Radius ("fs_sp_pak_btn", "6");
Obj_Shadow_XY ("fs_sp_pak_btn", "20", "20", "30", "rgba(0,0,0,0.4)");
Obj_Background ("fs_sp_pak_btn", "2", "image/fs_sp_pak_btn_n.png");
Btn_Click ("fs_sp_pak_btn", "0", "0", "430", "420", "image/fs_sp_pak_btn_y.png", "");
Obj_Make (4, "fs_sp_pak_btn", "fs_sp_pak_dis_img", "0", "0", "430", "420", "image/fs_sp_store_btn_d.png", "");
Obj_View ("fs_sp_pak_dis_img", "2");
//포장 버튼 텍스트
Obj_Make (3, "fs_sp_pak_btn", "fs_sp_pak_txt", "0", "35", "430", "65", "포장", "");
Txt_Font ("fs_sp_pak_txt", "5", "50", "#ffffff", "", "2", "", "");
Obj_Shadow_XY ("fs_sp_pak_txt", "1", "1", "3", "rgba(0,0,0,0.4)");


//매장, 포장
Obj_View ("fs_order_box", "2");
Obj_View ("fs_sp_box", "1");


// //주문하기
// Obj_View ("fs_order_box", "1");
// Obj_View ("fs_sp_box", "2");


// Video_Play ("first_screen_video");
// Video_Stop ("first_screen_video");
// 






/* ===================================== pop_la structure ====================================== */

//pop_la
Obj_Make (1, "screen_default", "pop_la", "0", "350", "918", "700", "1", "");
Obj_Overflow ("pop_la_back", "1");

Obj_Make (4, "pop_la", "pop_la_tap", "201", "-40", "516", "118", "image/pop_la_board_tap.png", "");
Obj_Make (4, "pop_la", "pop_la_icon", "372", "-89", "175", "172", "image/pop_la_board_icon.png", "");

Obj_Make (1, "pop_la", "pop_la_box", "0", "0", "918", "700", "", "");
Obj_Background ("pop_la_box", "2", "image/pop_la_board.png");


//제목 영역
Obj_Make (1, "pop_la", "pop_la_info", "14", "45", "880", "289", "", "");

//한국어
Obj_Make (1, "pop_la_info", "pop_la_info_kr", "0", "160", "880", "40", "", "");
Div_HV_Center("pop_la_info_kr", "2", "50", "30");
Obj_Class ("pop_la_info_kr", "flex_container pop_txt_center");
//한국어 타이틀 1
Obj_Make (3, "pop_la_info_kr", "pop_la_info_kr_txt_01", "0", "0", "0", "40", "언어", "");
Txt_Font ("pop_la_info_kr_txt_01", "5", "50", "#ffe200", "", "1", "", "");
Obj_Shadow_XY("pop_la_info_kr_txt_01", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_la_info_kr_txt_01", "2");
//한국어 타이틀 2
Obj_Make (3, "pop_la_info_kr", "pop_la_info_kr_txt_02", "0", "0", "0", "40", "를 ", "");
Txt_Font ("pop_la_info_kr_txt_02", "2", "50", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_la_info_kr_txt_02", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_la_info_kr_txt_02", "2");
//한국어 타이틀 3
Obj_Make (3, "pop_la_info_kr", "pop_la_info_kr_txt_03", "0", "0", "0", "40", "선택", "");
Txt_Font ("pop_la_info_kr_txt_03", "5", "50", "#ffe200", "", "1", "", "");
Obj_Shadow_XY("pop_la_info_kr_txt_03", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_la_info_kr_txt_03", "2");
//한국어 타이틀 4
Obj_Make (3, "pop_la_info_kr", "pop_la_info_kr_txt_04", "0", "0", "0", "40", "해 주세요.", "");
Txt_Font ("pop_la_info_kr_txt_04", "2", "50", "#ffffff", "", "1", "", "");
Obj_Shadow_XY("pop_la_info_kr_txt_04", "1", "1", "3", "rgba(0,0,0,0.4)");
Obj_AB_RE ("pop_la_info_kr_txt_04", "2");

//영어 
Obj_Make (1, "pop_la_info", "pop_la_info_en", "0", "135", "880", "20", "", "");
Obj_Make (3, "pop_la_info_en", "pop_la_info_en_txt", "0", "0", "880", "20", "PLEASE SELECT A LANGUAGE TO DISPLAY ON THE SCREEN.", "");
Txt_Font ("pop_la_info_en_txt", "2", "20", "#c3e3ff", "", "2", "", "");
Obj_Shadow_XY("pop_la_info_en_txt", "1", "1", "3", "rgba(0,0,0,0.4)");

//일본어
Obj_Make (1, "pop_la_info", "pop_la_info_jp", "0", "175", "880", "20", "", "");
Obj_Make (3, "pop_la_info_jp", "pop_la_info_jp_txt", "0", "0", "880", "20", "画面に表示する言語を選択してください。", "");
Txt_Font ("pop_la_info_jp_txt", "6", "20", "#c3e3ff", "", "2", "", "");
Obj_Shadow_XY("pop_la_info_jp_txt", "1", "1", "3", "rgba(0,0,0,0.4)");

//중국어
Obj_Make (1, "pop_la_info", "pop_la_info_ch", "0", "215", "880", "20", "", "");
Obj_Make (3, "pop_la_info_ch", "pop_la_info_ch_txt", "0", "0", "880", "20", "请选择要在屏幕上显示的语言。", "");
Txt_Font ("pop_la_info_ch_txt", "7", "20", "#c3e3ff", "", "2", "", "");
Obj_Shadow_XY("pop_la_info_ch_txt", "1", "1", "3", "rgba(0,0,0,0.4)");




//언어 버튼 영역
Obj_Make (1, "pop_la", "pop_la_lang", "66", "381", "776", "222", "", "");

//한국어 버튼
Obj_Make (2, "pop_la_lang", "pop_la_lang_btn_kr", "0", "0", "176", "222", "BTN;pop_la_lang_btn_kr;", "");
Obj_Radius ("pop_la_lang_btn_kr", "6");
Obj_Background ("pop_la_lang_btn_kr", "2", "image/language_btn_kr_n.png");
Obj_Shadow_XY("pop_la_lang_btn_kr", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("pop_la_lang_btn_kr", "0", "0", "176", "222", "image/language_btn_kr_y.png", "");
Obj_Make (4, "pop_la_lang_btn_kr", "pop_la_lang_btn_kr_dis_img", "0", "0", "176", "222", "image/language_btn_kr_d.png", "");
Obj_View ("pop_la_lang_btn_kr_dis_img", "2");
//텍스트 kr
Obj_Make (3, "pop_la_lang_btn_kr", "pop_la_lang_btn_kr_txt", "0", "15", "176", "40", "한국어", "");
Txt_Font ("pop_la_lang_btn_kr_txt", "3", "32", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_kr_txt", "6", "rgba(0,0,0,0.6)");
//텍스트 en
Obj_Make (3, "pop_la_lang_btn_kr", "pop_la_lang_btn_kr_txt_en", "0", "56", "176", "30", "Korea", "");
Txt_Font ("pop_la_lang_btn_kr_txt_en", "4", "16", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_kr_txt_en", "4", "rgba(0,0,0,0.6)");

//중국어 버튼
Obj_Make (2, "pop_la_lang", "pop_la_lang_btn_ch", "200", "0", "176", "222", "BTN;pop_la_lang_btn_ch;", "");
Obj_Radius ("pop_la_lang_btn_ch", "6");
Obj_Background ("pop_la_lang_btn_ch", "2", "image/language_btn_ch_n.png");
Obj_Shadow_XY("pop_la_lang_btn_ch", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("pop_la_lang_btn_ch", "0", "0", "176", "222", "image/language_btn_ch_y.png", "");
Obj_Make (4, "pop_la_lang_btn_ch", "pop_la_lang_btn_ch_dis_img", "0", "0", "176", "222", "image/language_btn_ch_d.png", "");
Obj_View ("pop_la_lang_btn_ch_dis_img", "2");
//텍스트 kr
Obj_Make (3, "pop_la_lang_btn_ch", "pop_la_lang_btn_ch_txt", "0", "15", "176", "40", "中國語", "");
Txt_Font ("pop_la_lang_btn_ch_txt", "7", "32", "#ffffff", "", "2", "1", "");
Obj_Shadow ("pop_la_lang_btn_ch_txt", "6", "rgba(0,0,0,0.6)");
//텍스트 en
Obj_Make (3, "pop_la_lang_btn_ch", "pop_la_lang_btn_ch_txt_en", "0", "56", "176", "30", "Chinese", "");
Txt_Font ("pop_la_lang_btn_ch_txt_en", "4", "16", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_ch_txt_en", "6", "rgba(0,0,0,0.6)");

//일본어 버튼
Obj_Make (2, "pop_la_lang", "pop_la_lang_btn_jp", "400", "0", "176", "222", "BTN;pop_la_lang_btn_jp;", "");
Obj_Radius ("pop_la_lang_btn_jp", "6");
Obj_Background ("pop_la_lang_btn_jp", "2", "image/language_btn_jp_n.png");
Obj_Shadow_XY("pop_la_lang_btn_jp", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("pop_la_lang_btn_jp", "0", "0", "176", "222", "image/language_btn_jp_y.png", "");
Obj_Make (4, "pop_la_lang_btn_jp", "pop_la_lang_btn_jp_dis_img", "0", "0", "176", "222", "image/language_btn_jp_d.png", "");
Obj_View ("pop_la_lang_btn_jp_dis_img", "2");
//텍스트 kr
Obj_Make (3, "pop_la_lang_btn_jp", "pop_la_lang_btn_jp_txt", "0", "15", "176", "40", "日本語", "");
Txt_Font ("pop_la_lang_btn_jp_txt", "6", "32", "#ffffff", "", "2", "1", "");
Obj_Shadow ("pop_la_lang_btn_jp_txt", "6", "rgba(0,0,0,0.6)");
//텍스트 en
Obj_Make (3, "pop_la_lang_btn_jp", "pop_la_lang_btn_jp_txt_en", "0", "56", "176", "30", "Japanese", "");
Txt_Font ("pop_la_lang_btn_jp_txt_en", "4", "16", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_jp_txt_en", "6", "rgba(0,0,0,0.6)");

//영어 버튼
Obj_Make (2, "pop_la_lang", "pop_la_lang_btn_us", "600", "0", "176", "222", "BTN;pop_la_lang_btn_us;", "");
Obj_Radius ("pop_la_lang_btn_us", "6");
Obj_Background ("pop_la_lang_btn_us", "2", "image/language_btn_us_n.png");
Obj_Shadow_XY("pop_la_lang_btn_us", "3", "3", "7", "rgba(0,0,0,0.4)");
Btn_Click ("pop_la_lang_btn_us", "0", "0", "176", "222", "image/language_btn_us_y.png", "");
Obj_Make (4, "pop_la_lang_btn_us", "pop_la_lang_btn_us_dis_img", "0", "0", "176", "222", "image/language_btn_us_d.png", "");
Obj_View ("pop_la_lang_btn_us_dis_img", "2");
//텍스트 kr
Obj_Make (3, "pop_la_lang_btn_us", "pop_la_lang_btn_us_txt", "0", "15", "176", "40", "ENGLISH", "");
Txt_Font ("pop_la_lang_btn_us_txt", "3", "32", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_us_txt", "6", "rgba(0,0,0,0.6)");
//텍스트 en
Obj_Make (3, "pop_la_lang_btn_us", "pop_la_lang_btn_us_txt_en", "0", "56", "176", "30", "English", "");
Txt_Font ("pop_la_lang_btn_us_txt_en", "4", "16", "#ffffff", "", "2", "", "");
Obj_Shadow ("pop_la_lang_btn_us_txt_en", "6", "rgba(0,0,0,0.6)");



/* ====================================== load structure ====================================== */

//로딩화면
Obj_Make (1, "screen_default", "base_load", "0", "0", "1080", "1920", "2", "");
// Obj_Background ("base_load", "2", "image/main_bg.png");
Video_Make ("base_load", "load_video", "image/Plexus_bg.webm");
Obj_Overflow ("base_load", "1");

//로고 및 로딩바 영역
Obj_Make (1, "base_load", "logo_loding", "230", "700", "700", "500", "", "");
//로고이미지
Obj_Make (4, "logo_loding", "load_logo_img", "88", "0", "688", "313", "image/main_logo.png", "");
//로딩바
Obj_Make (1, "logo_loding", "load_bar", "29", "286", "604", "122", "", "");
Obj_Background ("load_bar", "2", "image/loading_dbar.png");
//로딩바 - 진행상태 바
Obj_Make (1, "load_bar", "load_bar_now", "17", "6", "530", "19", "", "");
Obj_Make (4, "load_bar_now", "load_bar_now_img", "0", "0", "529", "19", "image/loading_over.png", "");
Obj_Overflow ("load_bar_now", "1");
Obj_Radius ("load_bar_now", "11");

//UsisNet로고이미지
Obj_Make (4, "base_load", "usisnet_logo", "401", "1756", "296", "108", "image/main_logo_usisnet.png", "");





// Video_Play ("bg_video");
// Video_Play ("load_video");

// Video_Stop ("bg_video");
// Video_Stop ("load_video");



pop_all_none();
