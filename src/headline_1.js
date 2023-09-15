function headline_1(){
  return(`
  
  <style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  
@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Lemon&display=swap');

h1 {
font-family: 'Goldman', cursive;
}

mark {
  opacity:.8;
  height:100px;
  width:100px;
  padding:3px;
}
</style>
<div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis"><mark> FLAQUER ENGINEERING GROUP</mark></h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-warning btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-2 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded img-thumbnail" src="https://th.bing.com/th/id/OIG..QdHRkWsZ96Sjm27SLEz?pid=ImgGn" alt="" width="360" height="360">
      </div>
    </div>
  </div>
  
  
  
  `)
  
}
exprt default headline_1
