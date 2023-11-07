<script>
// SELECT
// const selectSingle = document.querySelector('.__select');
// const selectSingle_title = selectSingle.querySelector('.__select__title');
// const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// const archiveBtn = document.querySelector('.__archive');

// selectSingle_title.addEventListener('click', () => {
// if ('active' === selectSingle.getAttribute('data-state')) {
//     selectSingle.setAttribute('data-state', '');
// } else {
//     selectSingle.setAttribute('data-state', 'active');
// }
// });

// for (let i = 0; i < selectSingle_labels.length; i++) {
// selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent;
//     selectSingle.setAttribute('data-state', '');
// });
// }

// const documentItems = document.querySelectorAll('.document__item');

// function addFrame() {
//     for (let i = 0; i < documentItems.length; i++) {
//         documentItems[i].addEventListener('click', (event) => {
//             var eventTarget = event.target;
//             var eventCurrentTarget = event.currentTarget;

//             for(let i = 0; i < documentItems.length; i++) {
//                 const frame = documentItems[i].querySelector('.iframe-container')
//                 if(frame) {
//                     frame.remove();
//                 }
//                 documentItems[i].classList.remove('active')
//             }

//             documentItems[i].classList.add('active')

//             if(documentItems[i].getAttribute('data-frame') == 'active') {
//                 const frameTarget = documentItems[i].querySelector('.iframe-container');
//                 if(frameTarget) {
//                     frameTarget.remove()
//                 }
//                 documentItems[i].setAttribute('data-frame', '')
//                 documentItems[i].classList.remove('active')
//             } else {
//                 eventTarget.innerHTML += `<div class="iframe-container">
//                 <iframe src="/source/document/${[i]}.pdf#toolbar=1&navpanes=0&scrollbar=0" frameborder="0" id="frame"> 
//                 </iframe>
//                 </div>`;
//                 documentItems[i].setAttribute('data-frame', 'active')
//             }
//         })
//     }
// }

// addFrame()
import pdf01 from '$lib/document/1.pdf';

let current = 'head-01';
var item = '';

let frame;

let pdfId = '';

function makeFrame() {
    if(pdfId === '') {
        frame.innerHTML = 'Файл не найден';
    } else {
        let pdfUrl = `/src/lib/document/${pdfId}.pdf#toolbar=1&navpanes=0&scrollbar=0`
        frame.innerHTML = `<iframe src=${pdfUrl} frameborder="0" id="frame"></iframe>`;
    }
}

function removeFrame() {
    frame.innerHTML = '';
    pdfId = '';
}

let selectInclude = '';

  function selectIncludeCheck() {
    selectInclude = 'include'
  };

  selectIncludeCheck()

  let currentSelect = "";
  let selectTitle = "год публикации";

  let currentHead = "head-01";
  let currentGroup = "group-01";

  const praktikaDate = "22-23";
</script>


<div class="document__head">
    <div class="document__head-wrapper">
        <div class={current === 'head-01' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-01')}}>
            <div class="document__head-item-title">Планы</div>
        </div>
        <div class={current === 'head-02' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-02')}}>
            <div class="document__head-item-title">Программы</div>
        </div>
        <div class={current === 'head-03' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-03')}}>
            <div class="document__head-item-title">Приказы</div>
        </div>
        <div class={current === 'head-04' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-04')}}>
            <div class="document__head-item-title">Доклады</div>
        </div>
        <div class={current === 'head-05' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-05')}}>
            <div class="document__head-item-title">Положения</div>
        </div>
        <div class={current === 'head-06' ? 'document__head-item active' : 'document__head-item'} on:click={() => {(current = 'head-06')}}>
            <div class="document__head-item-title">Договоры</div>
        </div>
    </div>
    <div class="document__head-wrapper">
        <div
        class={currentSelect === "active" ? `__select ${selectInclude} active` : `__select ${selectInclude}`}        on:click={() => {
          currentSelect === "active"
            ? (currentSelect = "")
            : (currentSelect = "active");
        }}
      >
        <div class="__select__title" data-default="Option 0">{selectTitle}</div>
        <div class="__select__content">
          <div class="__select_content-wrapper">
            <input
              class="__select__input"
              id="singleSelect0"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2023"), (currentSelect = "");
              }}
            />
            <label for="singleSelect0" class="__select__label">2023</label>
            <input
              id="singleSelect1"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2022"), (currentSelect = "");
              }}
            />
            <label for="singleSelect1" class="__select__label">2022</label>
            <input
              id="singleSelect2"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2021"), (currentSelect = "");
              }}
            />
            <label for="singleSelect2" class="__select__label">2021</label>
            <input
              id="singleSelect3"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2020"), (currentSelect = "");
              }}
            />
            <label for="singleSelect3" class="__select__label">2020</label>
            <input
              id="singleSelect4"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2019"), (currentSelect = "");
              }}
            />
            <label for="singleSelect4" class="__select__label">2019</label>
            <input
              id="singleSelect5"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2018"), (currentSelect = "");
              }}
            />
            <label for="singleSelect5" class="__select__label">2018</label>
            <input
              id="singleSelect6"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2017"), (currentSelect = "");
              }}
            />
            <label for="singleSelect6" class="__select__label">2017</label>
            <input
              id="singleSelect7"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2016"), (currentSelect = "");
              }}
            />
            <label for="singleSelect7" class="__select__label">2016</label>
            <input
              id="singleSelect8"
              class="__select__input"
              type="radio"
              name="singleSelect"
              on:click={() => {
                (selectTitle = "2015"), (currentSelect = "");
              }}
            />
            <label for="singleSelect8" class="__select__label">2015</label>
          </div>
        </div>
      </div>
    </div>
</div>

<div class={item === '' ? 'iframe-container disable' : 'iframe-container' && pdfId === '' ? 'error' : 'iframe-container'}>
    <div bind:this={frame}></div>
    <div class="close" on:click={() => {(item = ''), removeFrame()}}></div>
</div>

<div class={current === 'head-01' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class={item === 'item-01' ? 'document__item active' : 'document__item'} on:click={() => {(item === 'item-01' ? item = '' : item = 'item-01'), pdfId = '1', makeFrame()}}>
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class={item === 'item-02' ? 'document__item active' : 'document__item'} on:click={() => {(item === 'item-02' ? item = '' : item = 'item-02'), pdfId = '2', makeFrame()}}>
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class={item === 'item-03' ? 'document__item active' : 'document__item'} on:click={() => {(item === 'item-03' ? item = '' : item = 'item-03'), makeFrame()}}>
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class={item === 'item-04' ? 'document__item active' : 'document__item'} on:click={() => {(item === 'item-04' ? item = '' : item = 'item-04'), makeFrame()}}>
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class={item === 'item-05' ? 'document__item active' : 'document__item'} on:click={() => {(item === 'item-05' ? item = '' : item = 'item-05'), makeFrame()}}>
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>

<div class={current === 'head-02' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2018">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2018
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>

<div class={current === 'head-03' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class="document__item" data-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2019">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2019
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2018">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2018
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>

<div class={current === 'head-04' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2018">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2018
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>

<div class={current === 'head-05' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class="document__item" data-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2019">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2019
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2018">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2018
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    Свидетельство о внесении записи в ЕГРЮЛ
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>

<div class={current === 'head-06' ? 'document__content active' : 'document__content'}>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2018">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2018
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
    <div class="document__item-wrapper">
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2020">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2020
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2021">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2021
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2022">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2022
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
        <div class="document__item" date-frame="" data-date="2023">
            <div class="document__item-block">
                <div class="document__item-nav">Документы /</div>
                <div class="document__item-title">
                    2023
                </div>
            </div>
            <div class="document__item-icon _icon-download"></div>
        </div>
    </div>
</div>