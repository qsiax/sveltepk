<script>
    import Heading  from '../../layout/Heading.svelte';

    let nameMap = '';
    let namePage = 'Руководство. Педагогический(научно-педагогический) состав';
    let heading = 'Руководство';

	import Icon from '$lib/images/pages/rukovodstvo/01.png';
</script>

<svelte:head>
	<title>Руководство</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>
 <section class="management">
	<div class="management__container _container">
		<div class="management__body">
			<div class="management__title">Коллектив колледжа</div>
			<div class="management__content">
				<div class="management__item-wrapper">
					<div class="management__item-text">Наши опытные преподаватели и сотрудники стремятся создать динамичную и благоприятную учебную среду, способствующую академическому совершенству и личностному росту.</div>
					<div class="management__item" onclick="popup01()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Сысолятин Сергей Иннокентьевич</div>
						<div class="management__item-role">Директор</div>
					</div>
					<div class="management__item" onclick="popup02()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Шахурдин Егор Дмитриевич</div>
						<div class="management__item-role">Заместитель по общим вопросам</div>
					</div>
					<div class="management__item" onclick="popup03()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Филиппова Мария Витальевна</div>
						<div class="management__item-role">Заместитель по учебно-производственной работе</div>
					</div>
					<div class="management__item" onclick="popup04()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Моисеева Мария Гаврильевна</div>
						<div class="management__item-role">Заместитель по учебно-воспитательной работе</div>
					</div>
				</div>
				<div class="management__item-wrapper">
					<div class="management__item" onclick="popup05()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Адамова Марианна Ивановна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup06()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Афанасьева Антонина Антоновна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup07()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Иванов Илья Иванович</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup08()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Лебедева Августа Егоровна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup09()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Неустроев Николай Николаевич</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
				</div>
				<div class="management__item-wrapper">
					<div class="management__item" onclick="popup010()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Осипова Маргарита Александровна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup011()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Самсонова Анастасия Валентиновна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup012()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Соропова Аюна Жугдуровна</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup013()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Федоров Лев Иванович</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
					<div class="management__item" onclick="popup014()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Чалбанов Алексей Иванович</div>
						<div class="management__item-role">Преподаватель</div>
					</div>
				</div>
				<div class="management__item-wrapper">
					<div class="management__item" onclick="popup015()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Ефимова Сардана Юрьевна</div>
						<div class="management__item-role">Педагог-психолог</div>
					</div>
					<div class="management__item" onclick="popup016()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Петрова Карина Дмитриевна </div>
						<div class="management__item-role">Социальный педагог</div>
					</div>
					<div class="management__item" onclick="popup017()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Торохова Даля Валерьевна</div>
						<div class="management__item-role">Старший методист</div>
					</div>
					<div class="management__item" onclick="popup018()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Борисов Руслан Афанасьевич </div>
						<div class="management__item-role">Руководитель физвоспитания</div>
					</div>
					<div class="management__item" onclick="popup019()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Лебедев Петр Афанасьевич </div>
						<div class="management__item-role">Педагог организатор ОБЖ</div>
					</div>
				</div>
				<div class="management__item-wrapper">
					<div class="management__item" onclick="popup020()">
						<div class="management__item-avatar">
							<div class="management__item-arrow-wrapper">
								<div class="management__item-arrow _icon-arrow"></div>
							</div>
						</div>
						<div class="management__item-name">Солдатова Елизавета Александровна </div>
						<div class="management__item-role">Заведующий библиотекой</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup01" onclick="popup01()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Сысолятин Сергей Иннокентьевич</div>
						<div class="management__popup-role">Директор</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup02" onclick="popup02()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Шахурдин Егор Дмитриевич</div>
						<div class="management__popup-role">Заместитель по общим вопросам</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup03" onclick="popup03()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Филиппова Мария Витальевна</div>
						<div class="management__popup-role">Заместитель по учебно-производственной работе</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup04" onclick="popup04()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Моисеева Мария Гаврильевна</div>
						<div class="management__popup-role">Заместитель по учебно-воспитательной работе</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup05" onclick="popup05()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Адамова Марианна Ивановна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup06" onclick="popup06()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Афанасьева Антонина Антоновна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup07" onclick="popup07()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Иванов Илья Иванович</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup08" onclick="popup08()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Лебедева Августа Егоровна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup09" onclick="popup09()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Неустроев Николай Николаевич</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup010" onclick="popup010()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Осипова Маргарита Александровна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup011" onclick="popup011()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Самсонова Анастасия Валентиновна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup012" onclick="popup012()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Соропова Аюна Жугдуровна</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup013" onclick="popup013()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Федоров Лев Иванович</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup014" onclick="popup014()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Чалбанов Алексей Иванович</div>
						<div class="management__popup-role">Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup015" onclick="popup015()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Ефимова Сардана Юрьевна</div>
						<div class="management__popup-role">Педагог-психолог</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup016" onclick="popup016()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Петрова Карина Дмитриевна </div>
						<div class="management__popup-role">Социальный педагог</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup017" onclick="popup017()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Торохова Даля Валерьевна</div>
						<div class="management__popup-role">Старший методист</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup018" onclick="popup018()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Борисов Руслан Афанасьевич</div>
						<div class="management__popup-role">Руководитель физвоспитания</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			<div class="management__popup-wrapper" id="popup019" onclick="popup019()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Лебедев Петр Афанасьевич</div>
						<div class="management__popup-role">Педагог организатор ОБЖ</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>

			
			<div class="management__popup-wrapper" id="popup020" onclick="popup020()">
				<div class="management__popup">
					<div class="management__popup-close"></div>
					<div class="management__popup-avatar"></div>
					<div class="management__popup-content">
						<div class="management__popup-name">Солдатова Елизавета Александровна </div>
						<div class="management__popup-role">Заведующий библиотекой, Преподаватель</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-location"></div>
							<div class="management__popup-text">Кабинет</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-phone"></div>
							<div class="management__popup-text">Номер</div>
						</div>
						<div class="management__popup-item">
							<div class="management__popup-icon-mail"></div>
							<div class="management__popup-text">Почта</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
 </section>