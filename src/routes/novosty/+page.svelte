<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Новости';
    var heading = 'Недавние новости';

    import News01 from '$lib/images/news/01.png';
    import News02 from '$lib/images/news/02.png';
    import News03 from '$lib/images/news/03.png';
    import News04 from '$lib/images/news/04.png';
</script>

<svelte:head>
	<title>Новости</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="novosty">
    <div class="novosty__container _container">
        <div class="novosty__body">
            <div class="novosty__head">
                <div class="novosty__head-item">
                    <div class="novosty__head-item-title">ВСе</div>
                </div>
                <div class="novosty__head-item">
                    <div class="novosty__head-item-title">Колледж</div>
                </div>
                <div class="novosty__head-item">
                    <div class="novosty__head-item-title">Технологии</div>
                </div>
            </div>
            <div class="novosty__item-wrapper">
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">21.01.23</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">С Днём студенчества — Татьяниным днём!</div>
                            <div class="novosty__item-text">
                                Студенческие годы – это один из важнейших жизненных этапов, время для новых достижений, побед и знакомств!
                                В жизни каждого человека студенческие годы – самое удивительное и незабываемое время, пора смелых идей и творческих амбиций, новых поисков и интересных открытий. Вы являетесь самой инициативной частью молодого поколения, занимаете активную жизненную позицию, проявляете высокую заинтересованность, как в собственном будущем, так и в будущем нашего государства.
                                Вдохновения вам, терпения в труде и в жизни, активного долголетия, бодрости духа и успешного творческого поиска!
                                Сергей Иннокентьевич Сысолятин директор ГБПОУ РС (Я) «Покровский колледж»
                            </div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{News01}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">21.01.23</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">Спорт объединяет</div>
                            <div class="novosty__item-text"></div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{News02}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">21.01.23</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">Покровский колледж отчитался о проделанной работе
                                за 2022 год</div>
                            <div class="novosty__item-text"></div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{News03}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
                <div class="novosty__item">
                    <div class="novosty__item-block">
                        <div class="novosty__item-date">19.12.22</div>
                        <div class="novosty__item-content">
                            <div class="novosty__item-title">Новогодний вечер в общежитии колледжа</div>
                            <div class="novosty__item-text"></div>
                        </div>
                    </div>
                    <div class="novosty__item-block">
                        <div class="novosty__item-img">
                            <img src="{News04}" alt="">
                        </div>
                        <div class="novosty__item-arrow _icon-arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>