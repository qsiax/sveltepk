<script>
    import Heading  from '../../layout/Heading.svelte';

	import Image from '$lib/images/pages/obrazovatelnaya-sreda/bg.png';

    let nameMap = '';
    let namePage = 'Цифровая образовательная среда';
    var heading = 'Цифровая образовательная среда';
</script>

<svelte:head>
	<title>Цифровая образовательная среда</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="digital">
	<div class="digital__container _container">
		<div class="digital__body">
			<div class="digital__img">
				<img src="{Image}" alt="Image">
			</div>
			<div class="digital__content">
				<div class="digital__item-wrapper">
					<div class="digital__item">
						<div class="digital__title">Приказ об утверждении Целевой модели цифровой образовательной среды</div>
						<div class="digital__icon _icon-download"></div>
					</div>
					<div class="digital__item">
						<div class="digital__title">Паспорт федерального проекта Цифровая образовательная среда</div>
						<div class="digital__icon _icon-download"></div>
					</div>
					<div class="digital__item">
						<div class="digital__title">Методические рекомендации по обновлению информационного наполнения и функциональных возможностей открытых и общедоступных информационных ресурсов образовательных организаций, в том числе официальных сайтов в информационно-телекоммуникационной сети «Интернет»</div>
						<div class="digital__icon _icon-download"></div>
					</div>
				</div>
				<div class="digital__item-wrapper">
					<div class="digital__item">
						<div class="digital__title">Методические рекомендации об организации повышения квалификации педагогических работников, привлекаемых к осуществлению образовательной деятельности в области современных информационно-телекоммуникационных и цифровых технологий</div>
						<div class="digital__icon _icon-download"></div>
					</div>
					<div class="digital__item">
						<div class="digital__title">Паспорт регионального проекта Цифровая образовательная среда РС(Я)</div>
						<div class="digital__icon _icon-download"></div>
					</div>
					<div class="digital__item">
						<div class="digital__title">Полезные ссылки</div>
						<div class="digital__icon _icon-download"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>