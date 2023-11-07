<script>
	import { page } from '$app/stores';
    import logo from '$lib/images/header/logo.svg';

    let menu_active
    let search_active
    let menuitem_active_01
    let menuitem_active_02
    let menuitem_active_03 
    let menuitem_active_04

    function menuActive() {
        menu_active = !menu_active
        search_active = !search_active
    }

    function menuitemActive() {
        // menuitem_active_01 = !menuitem_active_01
        menuitem_active_02 = !menuitem_active_02
        // menuitem_active_03 = !menuitem_active_03
        // menuitem_active_04 = !menuitem_active_04
    }
</script>

<header class="header" id="header">
    <div class="header__container _container">
        <div class="header__body">
            <a href="/">
                <div class="header__logo-wrapper">
                    <div class="header__logo">
                        <img src="{logo}" alt="Logo">
                    </div>
                    <div class="header__logo-text">
                        ПОКРОВСКИЙ
                        КОЛЛЕДЖ
                    </div>
                </div>
            </a>
            <ul class="header__navigation" class:menu_active>
                <li>
                    <a class="header__navigation-btn" on:click={menuitemActive}>Колледж <div class="header__navigation-arrow _icon-btn-arrow"></div>
                        <div class="header__navigation-under-block"></div>
                    </a>

                <div class="header__navigation-block" class:menuitem_active_01>
                    <div class="header__navigation-block-wrapper">
                        <li aria-current={$page.url.pathname === '/osnovnyye-svedeniya' ? 'page' : undefined}>
                            <a href="/osnovnyye-svedeniya" class="header__navigation-block-item">Основные сведения</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/struktura-i-organy' ? 'page' : undefined}>
                            <a href="/struktura-i-organy" class="header__navigation-block-item">Структура и органы управления<br> образовательной организацией</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/dokumenty' ? 'page' : undefined}>
                            <a href="/dokumenty" class="header__navigation-block-item">Документы</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/obrazovaniye' ? 'page' : undefined}>
                            <a href="/obrazovaniye" class="header__navigation-block-item">Образование</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/rukovodstvo' ? 'page' : undefined}>
                            <a href="/rukovodstvo" class="header__navigation-block-item">Руководство. Педагогически<br> (научно-педагогический) состав</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/materialno-tekhnicheskoye-obespecheniye' ? 'page' : undefined}>
                            <a href="/materialno-tekhnicheskoye-obespecheniye" class="header__navigation-block-item">Материально-техническое обеспечение и <br> оснащенность образовательного процесса</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/stipendiya' ? 'page' : undefined}>
                            <a href="/stipendiya" class="header__navigation-block-item">Стипендии и меры поддержки<br> обучающихся</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/kursy' ? 'page' : undefined}>
                            <a href="/kursy" class="header__navigation-block-item">Платные образовательные услуги</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/finansovo-khozyaystvennaya' ? 'page' : undefined}>
                            <a href="/finansovo-khozyaystvennaya" class="header__navigation-block-item">Финансово-хозяйственная деятельность</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/mesta-dlya-priyema' ? 'page' : undefined}>
                            <a href="/mesta-dlya-priyema" class="header__navigation-block-item">Вакантные места для приема (перевода)<br> обучающихся</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/dostupnaya-sreda' ? 'page' : undefined}>
                            <a href="/dostupnaya-sreda" class="header__navigation-block-item">Доступная среда</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/mezhdunarodnoye-sotrudnichestvo' ? 'page' : undefined}>
                            <a href="/mezhdunarodnoye-sotrudnichestvo" class="header__navigation-block-item">Международное сотрудничество</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/obrazovatelnyye-programmy' ? 'page' : undefined}>
                            <a href="/obrazovatelnyye-programmy" class="header__navigation-block-item">Образовательные программы</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/pitaniya' ? 'page' : undefined}>
                            <a href="/pitaniya" class="header__navigation-block-item">Организация питания в образовательной<br> организации</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/obrazovatelnaya-sreda' ? 'page' : undefined}>
                            <a href="/obrazovatelnaya-sreda" class="header__navigation-block-item">Цифровая образовательная среда</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/partnerstvo' ? 'page' : undefined}>
                            <a href="/partnerstvo" class="header__navigation-block-item">Социальное партнерство</a>
                        </li>
                    </div>
                </div>   
                </li>
                <li>
                    <a class="header__navigation-btn" on:click={menuitemActive}>Абитуриенту <div class="header__navigation-arrow _icon-btn-arrow"></div>
                        <div class="header__navigation-under-block"></div>
                    </a>

                    <div class="header__navigation-block" class:menuitem_active_02>
                        <div class="header__navigation-under-block"></div>

                        <li aria-current={$page.url.pathname === '/pravila-priyoma' ? 'page' : undefined}>
                            <a href="/pravila-priyoma" class="header__navigation-block-item">Правила приёма</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/professiya' ? 'page' : undefined}>
                            <a href="/professiya" class="header__navigation-block-item">Выбрать профессию</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/prikazy-o-zachislenii' ? 'page' : undefined}>
                            <a href="/prikazy-o-zachislenii" class="header__navigation-block-item">Приказы о зачислении</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/tselevoye-obucheniye' ? 'page' : undefined}>
                            <a href="/tselevoye-obucheniye" class="header__navigation-block-item">Целевое обучение</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/reytingovyy-spisok' ? 'page' : undefined}>
                            <a href="/reytingovyy-spisok" class="header__navigation-block-item">Рейтинговый список абитуриентов</a>
                        </li>
                    </div>
                </li>
                <li>
                        <a class="header__navigation-btn" on:click={menuitemActive}>Студенту<div class="header__navigation-arrow _icon-btn-arrow"></div>
                            <div class="header__navigation-under-block"></div>
                        </a>

                        <div class="header__navigation-block" class:menuitem_active_03>
                            <div class="header__navigation-under-block"></div>
    
                            <li aria-current={$page.url.pathname === '/obucheniye' ? 'page' : undefined}>
                                <a href="/obucheniye" class="header__navigation-block-item">Обучение</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/raspisaniye' ? 'page' : undefined}>
                                <a href="/raspisaniye" class="header__navigation-block-item">Расписание</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/obshchezhitiye' ? 'page' : undefined}>
                                <a href="/obshchezhitiye" class="header__navigation-block-item">Общежитие</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/studencheskaya-zhizn' ? 'page' : undefined}>
                                <a href="/studencheskaya-zhizn" class="header__navigation-block-item">Студенческая жизнь</a>
                            </li>
                            <li aria-current={$page.url.pathname === '/sotsialnoye-obespecheniye' ? 'page' : undefined}>
                                <a href="/sotsialnoye-obespecheniye" class="header__navigation-block-item">Социальное обеспечение</a>
                            </li>
                        </div>
                </li>
                <li><a class="header__navigation-btn" on:click={menuitemActive}>Выпускнику <div class="header__navigation-arrow _icon-btn-arrow"></div>
                
                    </a>

                    <div class="header__navigation-block" class:menuitem_active_04>
                        <div class="header__navigation-under-block"></div>

                        <li aria-current={$page.url.pathname === '/trudoustroystvo' ? 'page' : undefined}>
                            <a href="/trudoustroystvo" class="header__navigation-block-item">Трудоустройство</a>
                        </li>
                        <li aria-current={$page.url.pathname === '/proforiyentatsiya' ? 'page' : undefined}>
                            <a href="/proforiyentatsiya" class="header__navigation-block-item">Профориентация</a>
                        </li>
                    </div>
                
                </li>
                <li aria-current={$page.url.pathname === '/kursy' ? 'page' : undefined}>
                    <a href="/kursy" class="header__navigation-btn">образовательные курсы</a>
                </li>
            </ul>
            <div class="header__block" class:search_active>
                <input type="text">
                <div class="header__search">
                    <div class="header__search-icon _icon-search"></div>
                </div>
                <div class="header__btn">
                    <div class="header__btn-icon _icon-eye"></div>
                </div>
            </div>
            <div class="header__menu" on:click={menuActive}>
                <div class="header__menu-icon icon-menu"></div>
            </div>
        </div>
    </div>
</header>