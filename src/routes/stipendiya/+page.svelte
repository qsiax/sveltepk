<script>
    import Heading  from '../../layout/Heading.svelte';


    let nameMap = '';
    let namePage = 'Стипендии и меры поддержки обучающихся';
    var heading = 'Стипендия';
</script>

<svelte:head>
	<title>Стипендия</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="scholarship">
	<div class="scholarship__container _container">
		<div class="scholarship__body">
			<div class="scholarship__content">
				<div class="scholarship__item-title">Что получают</div>
				<div class="scholarship__item-wrapper">
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Академическая стипендия: <br>
							Хорошист — <span>2 511 рб.</span>, Отличник — <span>3 348 рб.</span>
						</div>
					</div>
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Социальная стипендия: <span>2 511 рб.</span>
						</div>
					</div>
					<div class="scholarship__item">
						<div class="scholarship__item-text">
							Льготное питание: <span>99,40 рб.</span> <p>(в день)</p>
						</div>
					</div>
				</div>
				<div class="scholarship__item-title">Сироты</div>
				<div class="scholarship__item-wrapper">
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Питание в день: <span>440 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Литература 1 раз в год: <span>7 533 рб.</span>
							</div>
						</div>
					</div>
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Мягкий инвентарь: Юноши — <span>5 971 рб.</span>, Девушки — <span>6 171 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Пособие при выпуске: <span>500 рб.</span>
							</div>
						</div>
					</div>
					<div class="scholarship__item-block">
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Моющие средства: <span>525 рб.</span>
							</div>
						</div>
						<div class="scholarship__item-02">
							<div class="scholarship__item-text">
								Обмундирование при выпуске: Юноши — <span>140 375 рб.</span>, Девушки — <span>148 255 рб.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="scholarship__item-title">Приказы, положение и трудоустройство</div>
				<div class="scholarship__document-wrapper">
					<div class="scholarship__document-block">
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Приказ о стоимости проживания в общежитии ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Приказ о размере питания ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Приказ о студенческом общежитии ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Приказ о мерах социальной поддержки сирот и оставшихся без попечения родителей, а также лиц из их числа, обучающихся в ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
					</div>
					<div class="scholarship__document-block">
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Приказ о о государственной академической стипендии и государственной социальной стипендии студентам, обучающимся ГБПОУ РС(Я) ПК по очной форме обучения, за счет бюджетных ассигнований РС(Я)
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Положение о стипендиальном обеспечении и других формах мат поддержки ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
						<a target="_blank" href="/source/document/сведения.pdf" class="scholarship__document-item">
							<div class="scholarship__document-item-text">
								Трудоустройство выпускников ГБПОУ РС(Я) ПК
							</div>
							<div class="scholarship__document-item-icon _icon-download"></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>