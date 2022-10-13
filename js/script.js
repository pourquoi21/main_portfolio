const loading = document.querySelector("#loading");
        const loadingIcon = document.querySelector("#loading_icon");
        const loadingBack = document.querySelector("#loading_back");
        const body = document.querySelector("body");
        document.addEventListener("DOMContentLoaded", function(){

            //로딩 볼 애니메이션
            window.setTimeout(() => {
                loadingIcon.classList.add('hidden');
            }, 2000);
            //로딩 백바 애니메이션
            window.setTimeout(() => {
                loadingBack.classList.remove('show');
            }, 2100);
            //body스크롤제한 풀기
            window.setTimeout(() => {
                body.classList.remove("stop-scrolling");
                loading.classList.add("hidden");
            }, 3000);
        });

        //스크롤 애니메이션
        const desc1 = document.querySelector("#desc1");
        const desc2 = document.querySelector("#desc2");
        const desc3 = document.querySelector("#desc3");

        const port1 = document.querySelector("#port1");
        const port2 = document.querySelector("#port2");
        const port3 = document.querySelector("#port3");
        const port4 = document.querySelector("#port4");

        const de1 = document.querySelector("#de1");
        const de2 = document.querySelector("#de2");
        const de3 = document.querySelector("#de3");
        const de4 = document.querySelector("#de4");
        const de5 = document.querySelector("#de5");
        const de6 = document.querySelector("#de6");
        const de7 = document.querySelector("#de7");
        const de8 = document.querySelector("#de8");
        const de9 = document.querySelector("#de9");

        window.addEventListener('scroll', ()=>{
            //자기소개부분 스크롤
            if (window.scrollY >= 400){
                desc1.classList.add("show");
            } if (window.scrollY >= 700){
                desc2.classList.add("show");
            } if (window.scrollY >= 800){
                desc3.classList.add("show");
            //프로젝트 스크롤
            } if (window.scrollY >= 1700){
                port1.classList.add("show");
            } if (window.scrollY >= 2000){
                port2.classList.add("show");
            } if (window.scrollY >= 2300){
                port3.classList.add("show");
            } if (window.scrollY >= 2600){
                port4.classList.add("show");
            //디자인웤 스크롤
            } if (window.scrollY >= 3600){
                de1.classList.add("show");
            } if (window.scrollY >= 3800){
                de2.classList.add("show");
            } if (window.scrollY >= 3900){
                de3.classList.add("show");
            } if (window.scrollY >= 4100){
                de4.classList.add("show");
            } if (window.scrollY >= 4200){
                de5.classList.add("show");
                de6.classList.add("show");
                de7.classList.add("show");
                de8.classList.add("show");
                de9.classList.add("show"); 
            };
        });

        //스크롤에 따라 움직이는 메인문구
        const mov_left1 = document.querySelector('.mov_left1');

        window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const val = scrolled * 0.5;
        mov_left1.style.transform = `translateX(${-0.5 * val}%)`;
        });
        
        const mov_left2 = document.querySelector('.mov_left2');

        window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const val = scrolled * 0.5;
        mov_left2.style.transform = `translateX(${-1 * val}%)`;
        });
        
        const mov_right = document.querySelector('.mov_right');

        window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const val = scrolled * 0.5;
        mov_right.style.transform = `translateX(${0.25 * val}%)`;
        });

        //스크롤 탑버튼
        const topBtn = document.querySelector("#top");

        window.addEventListener('scroll', function(){
            if(window.scrollY > 800){
                topBtn.classList.remove("hidden");
            } else {
                topBtn.classList.add("hidden");
            }
        });

        topBtn.addEventListener("click", function(e){
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        })
