<script>
    import { page } from '$app/stores';

    import News01 from '$lib/images/news/01.png';
    import News02 from '$lib/images/news/02.png';
    import News03 from '$lib/images/news/03.png';
    import News04 from '$lib/images/news/04.png';
</script>

<section class="news">
    <div class="news__container _container">
        <div class="news__body">
            <div class="news__title">Новости</div>
            <div class="news__head">
                <div class="news__head-block">
                    <div class="news__head-item active">ВСе</div>
                    <div class="news__head-item">Колледж</div>
                    <div class="news__head-item">Технологии</div>
                </div>
                <div class="news__arrow-wrapper">
                    <div class="news__arrow-prev _icon-arrow"></div>
                    <div class="news__arrow-next _icon-arrow"></div>
                </div>
            </div>
            <div class="news__content-wrapper">
                <div class="news__content">
                    <div class="news__item-wrapper active" id="news-item-01">
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">26.01.23</div>
                                <div class="news__item-title">С Днём студенчества — Татьяниным днём!</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News01}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Спорт объединяет</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News02}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Покровский колледж отчитался о проделанной работе за 2022 год</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News03}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">19.12.22</div>
                                <div class="news__item-title">Новогодний вечер в общежитии колледжа</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News04}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="news__item-wrapper" id="news-item-02">
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">26.01.23</div>
                                <div class="news__item-title">С Днём студенчества — Татьяниным днём!</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News01}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Спорт объединяет</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News02}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Покровский колледж отчитался о проделанной работе за 2022 год</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News03}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">19.12.22</div>
                                <div class="news__item-title">Новогодний вечер в общежитии колледжа</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News04}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div class="news__item-wrapper" id="news-item-03">
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">26.01.23</div>
                                <div class="news__item-title">С Днём студенчества — Татьяниным днём!</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News01}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Спорт объединяет</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News02}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">21.01.23</div>
                                <div class="news__item-title">Покровский колледж отчитался о проделанной работе за 2022 год</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News03}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__item-block">
                                <div class="news__item-date">19.12.22</div>
                                <div class="news__item-title">Новогодний вечер в общежитии колледжа</div>
                            </div>
                            <div class="news__item-block">
                                <div class="news__item-img">
                                    <img src="{News04}" alt="News">
                                </div>
                                <div class="news__item-arrow _icon-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <li aria-current={$page.url.pathname === '/materialno-tekhnicheskoye-obespecheniye' ? 'page' : undefined}>
                <a href="/novosty" class="news__btn">Все новости <div class="news__btn-icon _icon-arrow"></div></a>
            </li>
        </div>
    </div>
</section>