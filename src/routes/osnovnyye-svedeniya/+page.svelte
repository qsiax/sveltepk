<script>
    import Heading  from '../../layout/Heading.svelte';
    import News from '../../layout/News.svelte';
    import OsnovnyyeSvedeniya from '../../layout/pages/Osnovnyye-svedeniya.svelte';

    let nameMap = '';
    let namePage = 'Основные сведения';
    let heading = 'Покровский колледж';
</script>

<svelte:head>
	<title>Основные сведение</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="basic">
    <div class="basic__container _container">
        <div class="basic__body">
            <div class="basic__content">
                <div class="basic__block-information">
                    <div class="basic__block-wrapper">
                        <div class="basic__title">Основные сведения</div>
                        <div class="basic__text"><span>Полное наименование /</span> Государственное бюджетное профессиональное образовательное учреждение Республика Саха (Якутия) "Покровский колледж"</div>
                        <div class="basic__text"><span>Дата создания /</span> ...</div>
                        <div class="basic__text"><span>Учредитель /</span> ...</div>
                        <div class="basic__text"><span>Место нахождения /</span> ...</div>
                    </div>
                    <div class="basic__block-wrapper">
                        <div class="basic__head">График работы</div>
                        <div class="basic__box">
                            <div class="basic__box-title">
                                Понедельник - Пятница<br>
                                ...
                            </div>
                            <div class="basic__box-title">
                                Обед<br>
                                ...
                            </div>
                            <div class="basic__box-title">
                                Выходной<br>
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basic__block-contact">
                    <div class="basic__title">Контактные данные</div>
                    <div class="basic__item-body">
                        <div class="basic__item-wrapper">
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                        </div>
                        <div class="basic__item-wrapper">
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                            <div class="basic__item">
                                <div class="basic__item-title">Должность (Имя): +7 999 999-99-99</div>
                                <div class="basic__item-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basic__block-gallery">
                    <div class="basic__title">Галерея</div>
                    <OsnovnyyeSvedeniya/>
                </div>
            </div>
        </div>
    </div>
</section>

<News />