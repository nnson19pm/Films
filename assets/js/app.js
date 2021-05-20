$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })  
    window.onscroll = () => {      
        const scrollTop = $$('.back-to-top')
        this.scrollY > 300 ? scrollTop.style.display = "block" :
            scrollTop.style.display = "none"
    }
})
const $$ = document.querySelector.bind(document);
const app = {

    slider_Header: [{
        image: './assets/img/Slide_Header/chi-muoi-ba-ba-ngay-sinh-tu.jpg',
        name: './assets/img/Slide_Header/chi-muoi-ba-ba-ngay-sinh-tu_logo.png',
        rating: 9.1,
        time: 96,
        old: 18,
        content: 'Kẽm Gai, đàn em cũ vừa ra tù của chị Mười Ba vướng vào một vụ giết người. Với thời hạn ba ngày, liệu chị Mười Ba có thể minh oan cho Kẽm Gai và cứu An Cư Nghĩa Đoàn khỏi mối đe doạ mới?'
    },
    {
        image: './assets/img/Slide_Header/blood-moon-party_web_backdrop.jpg',
        name: './assets/img/Slide_Header/blood-moon-party_web_titleDetailEn_logo.png',
        rating: 9.3,
        time: 119,
        old: 18,
        content: 'Remake từ siêu phẩm Perfect Strangers, Tiệc Trăng Máu làm khuynh đảo phòng vé cuối 2020. Phim kể về bữa tiệc tân gia tưởng như rất ấm cúng, nhưng lại là nơi vạch trần những bí mật kinh hoàng.'
    },
    {
        image: './assets/img/Slide_Header/the-cougar-queentitleOriginalVn.jpg',
        name: './assets/img/Slide_Header/the-royal-bride_web_titleDetailVn_logo.png',
        rating: 9.2,
        time: 118,
        old: 16,
        content: 'Siêu phẩm phim Việt thành công nhất vào dịp Tết 2020 với doanh thu 168 tỷ đồng, phần 3 của bộ phim kể về hành trình ra mắt gia đình chồng đầy khó khăn của cô nàng tai tiếng bậc nhất showbiz.'
    },
    {
        image: './assets/img/Slide_Header/sieu-sao-sieu-ngo_web_backdrop.jpg',
        name: './assets/img/Slide_Header/sieu-sao-sieu-ngo_mobile_titleDetailVn_logo.png',
        rating: 8.8,
        time: 90,
        old: 13,
        content: 'Bộ phim xoay quanh hai anh em sinh đôi Thế Sơn và Thế Tùng. Một người là ngôi sao nổi tiếng, người còn lại thì chăn lợn ở dưới quê. Chuyện gì sẽ xảy ra nếu hai người này đổi vị trí cho nhau?'
    },
    {
        image: './assets/img/Slide_Header/bo-gia_web_backdrop.jpg',
        name: './assets/img/Slide_Header/bo-gia_web_titleDetailEn_logo.png',
        rating: 9.6,
        time: 119,
        old: 13,
        content: 'Bố Già là câu chuyện hài tâm lý xã hội do Trấn Thành sản xuất, xoay quanh một gia đình nhỏ với người cha làm nghề chạy xe ôm bảo thủ nhưng tình cảm, chu toàn trách nhiệm với gia đình.'
    },

    ], 

    slider_TopMovies:[{
        img: './assets/img/Movies_Top/1.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/2.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/3.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/4.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/5.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/6.jpg',
        name: 'TOP',
        star: 9.5,
        time: 120,
        old: 16
    },],

    slider_Movies:[{
        img: './assets/img/Movies_Top/1.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/2.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/3.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/4.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/5.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/6.jpg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },],

    slider_AnimeMovies:[{
        img: './assets/img/Movies_Top/1.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/2.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/3.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/4.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/5.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/6.jpg',
        name: 'ANIME',
        star: 9.5,
        time: 120,
        old: 16
    },],

    slider_TopViews:[{
        img: './assets/img/Movies_USA/1.jpg',
        view: 487,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    },{
        img: './assets/img/Movies_USA/2.jpg',
        view: 432,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    },{
        img: './assets/img/Movies_USA/3.jpg',
        view: 387,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    },{
        img: './assets/img/Movies_USA/4.jpg',
        view: 365,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    },{
        img: './assets/img/Movies_USA/5.jpg',
        view: 344,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    },{
        img: './assets/img/Movies_USA/6.jpg',
        view: 279,
        avatar: {
            img1: './assets/img/Movies_Top/1.jpg',
            img2: './assets/img/Movies_Top/2.jpg',
            img3: './assets/img/Movies_Top/3.jpg',
            img4: './assets/img/Movies_Top/4.jpg',
            img5: './assets/img/Movies_Top/5.jpg',
        }
    }],
    
    slider_SummerMovies:[{
        img: './assets/img/Movies_Top/1.jpg',
        collect: 1,
        name: 'Summer Movies',
        date: '17.05.2021'
    },{
        img: './assets/img/Movies_Top/2.jpg',
        collect: 2,
        name: 'Summer Movies',
        date: '23.05.2021'
    },{
        img: './assets/img/Movies_Top/3.jpg',
        collect: 3,
        name: 'Summer Movies',
        date: '05.06.2021'
    },{
        img: './assets/img/Movies_Top/4.jpg',
        collect: 4,
        name: 'Summer Movies',
        date: '17.06.2021'
    },{
        img: './assets/img/Movies_Top/5.jpg',
        collect: 5,
        name: 'Summer Movies',
        date: '02.07.2021'
    },{
        img: './assets/img/Movies_Top/6.jpg',
        collect: 6,
        name: 'Summer Movies',
        date: '14.08.2021'
    },],

    slider_TopFind:[{
        img: './assets/img/Movies_Top/1.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/1.svg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/2.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/2.svg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/3.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/3.svg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/4.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/4.svg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/5.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/5.svg',
        name: 'MOVIE',
        star: 9.5,
        time: 120,
        old: 16
    }],

    slider_Rental:[{
        img: './assets/img/Movies_Top/1.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/1.svg',
        name: 'MOVIE RENTAL',
        star: 9.5,
        time: 120,
        old: 16,
        rental: 9
    },{
        img: './assets/img/Movies_Top/2.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/2.svg',
        name: 'MOVIE RENTAL',
        star: 9.5,
        time: 120,
        old: 16,
        rental: 20
    },{
        img: './assets/img/Movies_Top/3.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/3.svg',
        name: 'MOVIE RENTAL',
        star: 9.5,
        time: 120,
        old: 16,
        rental: 35
    },{
        img: './assets/img/Movies_Top/4.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/4.svg',
        name: 'MOVIE RENTAL',
        star: 9.5,
        time: 120,
        old: 16,
        rental: 19
    },{
        img: './assets/img/Movies_Top/5.jpg',
        imgFind: './assets/img/Movies_Top/Top_5/5.svg',
        name: 'MOVIE RENTAL',
        star: 9.5,
        time: 120,
        old: 16,
        rental: 54
    }],
    
    slider_TVSeries:[{
        img: './assets/img/Movies_Top/1.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/2.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/3.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/4.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/5.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },{
        img: './assets/img/Movies_Top/6.jpg',
        name: 'TV SERIES',
        star: 9.5,
        time: 120,
        old: 16
    },],
  
    renders: function() {

        const sliderHeader = this.slider_Header.map(movie => {
            return `
            <div class="slide-item">
                <img class="slide-img" src="${movie.image}" alt="">
                <div class="overlay"></div>
                <div class="slide-item-content">
                    <div class="item-content-wraper">
                        <img class="item-image top-down" src=" ${movie.name}">        
                        <div class="movie-infos top-down delay-2">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${movie.rating}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${movie.time} mins</span>
                            </div>
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>${movie.old}+</span>
                            </div>
                        </div>
                        <div class="item-content-description top-down delay-4">
                        ${movie.content}
                        </div>
                        <div class="item-action top-down delay-6">
                            <a href="#" class="btn btn-hover">
                                <i class="bx bxs-right-arrow"></i>
                                <span>Watch now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `
        })

        const sliderTopMovies = this.slider_TopMovies.map(movie => {
            return`
                <div class="movie-item">
                    <img src="${movie.img}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${movie.name}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${movie.star}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${movie.time} mins</span>
                            </div>
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>${movie.old}+</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })

        const sliderMovies = this.slider_Movies.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.star}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.time} mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>${movie.old}+</span>
                                </div>
                            </div>
                        </div>
                    </a>
            `
        })

        const sliderAnimeMovies = this.slider_AnimeMovies.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.star}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.time} mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>${movie.old}+</span>
                                </div>
                            </div>
                        </div>
                    </a>
            `
        })

        const sliderView = this.slider_TopViews.map(movie => {
            return`
                <div class="views">
                        <div class="card-views"> 
                            <div class="card-img">                 
                                <img src="${movie.img}" alt="">
                            </div> 
                            <div class="follow">
                                <div class="follow-left">
                                    <div class="left-items">
                                        <div class="followers">
                                            <h3 class="title">Viewer</h3>
                                            <div class="avatars">
                                                <div class="avatar-item">
                                                    <figure class="image">
                                                        <img src="${movie.avatar.img1}" alt="">
                                                    </figure>
                                                </div>
                                                <div class="avatar-item">
                                                    <figure class="image">
                                                        <img src="${movie.avatar.img2}" alt="">
                                                    </figure>
                                                </div>
                                                <div class="avatar-item">
                                                    <figure class="image">
                                                        <img src="${movie.avatar.img3}" alt="">
                                                    </figure>
                                                </div>
                                                <div class="avatar-item">
                                                    <figure class="image">
                                                        <img src="${movie.avatar.img4}" alt="">
                                                    </figure>
                                                </div>
                                                <div class="avatar-item">
                                                    <figure class="image">
                                                        <img src="${movie.avatar.img5}" alt="">
                                                    </figure>
                                                </div>
                                                <div class="text-item">+${movie.view}&nbsp;<span class="k">K<span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="follow-right">
                                    <button class="btn-follow outline">Watch Now</button>
                                </div>
                            </div>
                        </div>       
                    </div>
            `
        })

        const sliderSummerMovies = this.slider_SummerMovies.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="media-content">
                                <div>
                                    <span class="order">#${movie.collect}</span>
                                </div>
                                <div>
                                    <span class="release-date">${movie.date}</span>
                                </div>
                            </div>
                        </div>
                    </a>
            `
        })

        const sliderTopFind = this.slider_TopFind.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                        
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.star}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.time} mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>${movie.old}+</span>
                                </div>
                            </div>
                            <div class="img-find">
                                <img src="${movie.imgFind}" alt="">
                            </div>
                        </div>
                </a>
                
            `
        })

        const sliderRental = this.slider_Rental.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                       
                        <div class="movie-item-content">
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.star}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.time} mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>${movie.old}+</span>
                                </div>
                            </div>
                            <div class="rental">
                                <div class="rent-cost">
                                    <p>Price: ${movie.rental}&nbsp;<i class="fas fa-dollar-sign"></i><p>
                                </div>
                            </div>
                        </div>
                </a>
                
            `
        })

        const sliderTVSeries = this.slider_TVSeries.map(movie => {
            return`
                <a href="#" class="movie-item">
                        <img src="${movie.img}" alt="">
                        <div class="movie-item-content">
                            <div class="tv-series">
                                <div class="tv">
                                    <i class="fas fa-tv"></i>
                                </div>
                            </div>
                            <div class="movie-item-title">
                                ${movie.name}
                            </div>
                            <div class="movie-infos">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>${movie.star}</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span>${movie.time} mins</span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>${movie.old}+</span>
                                </div>
                            </div>
                            
                        </div>
                    </a>
            `
        })

        let joins = () => {
            $$('.render-item-content').innerHTML = sliderHeader.join('')
            $$('.render-top-movies-slide').innerHTML = sliderTopMovies.join('')
            $$('.render-movies-slide').innerHTML = sliderMovies.join('')
            $$('.render-anime-movies-slide').innerHTML = sliderAnimeMovies.join('')
            $$('.render-views').innerHTML = sliderView.join('')
            $$('.render-movies-summer').innerHTML = sliderSummerMovies.join('')
            $$('.render-top-find-movies-slide').innerHTML = sliderTopFind.join('')
            $$('.render-movies-rental-slide').innerHTML = sliderRental.join('')
            $$('.render-tv-series-slide').innerHTML = sliderTVSeries.join('')
        }
        joins()

        let owl = () => {
            let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

            $('#slider-section-header').owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                nav:true,
                navText: navText,
                autoplay: true,
                autoplayHoverPause: false
            })

            $('#top-movies-slide').owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayHoverPause: false,
                responsive: {
                    500: {
                        items: 3,
                    },
                    1280: {
                        items: 4
                    },
                    1600: {
                        items: 6
                    }
                }
            })
            
            $('.movies-slide').owlCarousel({
                items: 2,
                dots: false,
                nav:true,
                navText: navText,
                margin: 15,
                responsive: {
                    500: {
                        items: 3
                    },
                    1280: {
                        items: 5
                    },
                    1600: {
                        items: 6
                    }
                }
            })

            $('#views').owlCarousel({
                items: 1,
                dots: false,
                nav:true,
                navText: navText,
                margin: 15,
                responsive: {
                    500: {
                        items: 2
                    },
                    1280: {
                        items: 4
                    },
                    1600: {
                        items: 5
                    }
                }
            })

            $('#render-movies-summer').owlCarousel({
                items: 2,
                dots: false,
                loop: true,
                margin: 10,
                nav: true,
                navText: navText,
                autoplay: true,
                autoplayHoverPause: false,
                responsive: {
                    500: {
                        items: 3
                    },
                    1280: {
                        items: 4
                    },
                    1600: {
                        items: 6
                    }
                }
            })

            $('#render-top-find-movies').owlCarousel({
                items: 2,
                dots: false,
                loop: true,
                margin: 10,
                nav: true,
                navText: navText,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    500: {
                        items: 3
                    },
                    1280: {
                        items: 4
                    },
                    1600: {
                        items: 6
                    }
                }
            })

            $('#render-movies-rental').owlCarousel({
                items: 1,
                dots: false,
                loop: true,
                margin: 10,
                nav: true,
                navText: navText,
                autoplay: false,
                autoplayHoverPause: false,
                responsive: {
                    500: {
                        items: 2
                    },
                    1280: {
                        items: 3
                    },
                    1600: {
                        items: 4
                    }
                }
            })
        }
        owl()
    },
    start:function() {
        this.renders()
    }
}
app.start()
