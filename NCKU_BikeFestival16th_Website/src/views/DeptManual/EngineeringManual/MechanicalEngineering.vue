<script setup>
import { onMounted } from 'vue';
import RoundButton from '../../../components/RoundButton.vue';

// ref: https://www.youtube.com/watch?v=VHbGeVolrd0
onMounted(() => {
  var pdfDoc = null;
  var pageNum = 1;
  var scale = 1.2;
  var pageRendering = false;
  var pageNumPending = null;
  var canvas = document.getElementById("pdf_canvas")
  var ctx = canvas.getContext('2d');

  function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then((page) => {
      var viewport = page.getViewport({scale: scale})
      canvas.height = viewport.height
      canvas.width = viewport.width

      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      }
      var renderTask = page.render(renderContext)
      renderTask.promise.then(() => {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending)
          pageNumPending = null
        }
      })
    })
    
    document.getElementById('page_num').textContent = num;
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }
  // prev page
  function onPrevPage() {
    if (pageNum <= 1) {
      return
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById('prev').addEventListener('click', onPrevPage);
  // next page
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById('next').addEventListener('click', onNextPage);

  pdfjsLib.getDocument('/MechanicalEngineering.pdf').promise.then((doc) => {
    pdfDoc = doc;
    document.getElementById('page_total').textContent = doc.numPages;
    renderPage(pageNum);
  })
})

</script>

<template>
  <div class="flex max-2xl:flex-col max-2xl:items-center">
    <!-- pdf -->
    <canvas id="pdf_canvas" class=""></canvas>
    <!-- button -->
    <div class="flex flex-col items-center ml-20 mt-6 max-2xl:ml-0 max-2xl:flex-row max-2xl:gap-x-4">
      <div class="text-2xl flex">
        Page：<div id="page_num"></div> / <div id="page_total"></div>
      </div>
      <div id="prev" class="my-6">
        <RoundButton BtnTitle="上一頁" />
      </div>
      <div id="next">
        <RoundButton BtnTitle="下一頁" />
      </div>
    </div>

  </div>
</template>