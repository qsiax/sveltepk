<script>
    import Heading  from '../../layout/Heading.svelte';
    import Document from '../../layout/pages/Document.svelte';

    let nameMap = '';
    let namePage = 'Документы';
    let heading = 'Планы, приказы и т.п.';
</script>

<svelte:head>
	<title>Документы</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Heading 
    pageMapName = {nameMap}
    pageName = {namePage}
    pageHeading = {heading}
/>

<section class="document">
    <div class="document__container _container">
        <div class="document__body">
            <Document />
        </div>
    </div>
</section>
