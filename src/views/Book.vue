<template>
  <div>
      <section class="pt-4 pt-md-11">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">

          <!-- Heading -->
          <h1>
            <span class="text-primary">Kromtech Academic Archive</span>
          </h1>

          <!-- Text -->
          <p class="lead text-gray-700">
            Below are the list of all our books in the archive
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="row scrollx text-center mb-5" style="overflow-x: scroll; display: flex; align-items: center;" id="style-7">

      <!-- input to seach for an employee -->
      <input class="btn primary " placeholder="Enter Search Keywords " style="margin-bottom: 5rem;" id="searchArchive">

      <!-- Filters drop down -->
      <div class="dropdown " style="width: 100%;">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
          style="z-index: 10 !important; margin-bottom: 4rem;" aria-haspopup="true" aria-expanded="false"
          id="searchFilter">
          Search by
        </button>
        <div class="dropdown-menu" id="dropDown">
          <a class="dropdown-item" id="searchUploader">Uploader</a>
          <a class="dropdown-item" id="searchUniversity">University</a>
          <a class="dropdown-item" id="searcBookName">Book Name</a>
          <a class="dropdown-item" id="searchBookAuthor">Book Author</a>
          <a class="dropdown-item" id="searchFaculty">Faculty</a>
          <a class="dropdown-item" id="searchDepartment">Department</a>
        </div>
      </div>


    </div>

    <div class="container mt-2" style="overflow-x: scroll;  font-size: 0.9rem;" id="style-7">

       <table class="table table-striped">
        <thead class="thead-inverse">
          <tr>
            <th scope="col">Dw</th>
            <th scope="col">Book Name</th>
            <th scope="col">Book Author</th>
            <th scope="col">University</th>
            <th scope="col">Faculty</th>
            <th scope="col">Department</th>
            <th scope="col">Level</th>
            <th scope="col">Semester</th>
            <th scope="col">Uploader</th>
          </tr>
        </thead>
        <tbody class="tbodyData">      
        </tbody>    
      </table>
                    <div class="spinner">
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                    </div>
    </div>

   </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>