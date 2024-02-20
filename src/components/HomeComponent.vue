<template>
  <div id="innercontainer" style="width:98%;height:100%;margin:0 auto">
      <div id="Welcome" align="left" >
          <p style="font-size:23px;margin-top:10px;">Welcome to my homepage</p>
          <p style="font-size:17px;margin-top:-10px;">
              This website is built for scientific communication. You can use it to find my latest publications, fieldwork data, 
              and updates on my current executing projects.

          </p>
      </div>
      <a-divider/>
      <div id="About" align="left" >
          <p style="font-size:22px;margin-top:10px;">About me</p>
          <p style="font-size:17px;margin-top:-10px;">
              After graduating from the Australian National University with a bachelor's degree 
              in information technology, I decided to study linguistics as a Ph.D. student.
              Since the start of my research journey, I received countless help from scholars such as
              <a href='https://philjohnrose.net/'>Prof.Phil Rose</a>, the
              best mentor in my academic life. I'm currently a member of the UB phonetics lab and
              I'm doing research with <a href='https://mfaytak.github.io/'>Prof.Matthew Faytak</a>.
          </p>
          <p style="font-size:17px;margin-top:-10px;">
              I'm also self-funding for some interesting projects. You can click on above sections to know more about them.
          </p>

      <a-divider/>    
       <div id="ResearchInterest" align="left" >
            <p style="font-size:22px;margin-top:10px;">Research Interests</p>
            <ul style="font-size:17px;margin-top:-15px;">
                <li>Acoustic phonetics;</li>
                <li>Computational linguistics;</li>
                <li>Speech production & perception;</li>
                <li>Chinese & Japanese phonology;</li>
                <li>Documentation and analysis of endangered languages;</li>
            </ul>
            
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    methods:{

    }
  }
</script>