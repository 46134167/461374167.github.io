<template>
  <div id="innercontainer" style="width:98%;height:100%;margin:0 auto">
       
      <a-divider/>    
         <div id="Hainan1" align="left">
                <p style="font-size:23px; margin-top: -10px; font-Weight:bold;">
                  Documentation and analysis of Hainan dialect.
                </p>


                <div style="margin-left: 20px;">
                <img style="width: 550px;height: 450px;" src="../assets/Hainan_map.png" alt="">
                </div>

                <p style="font-size:16px; margin-top: 15px; font-Weight:bold;">
                  Above is a map that describes dialects spoken on a southern Chinese island called Hainan. Four selected Hainan 
                  dialects are labeled with different colors and their varieties are labeled with numbers.
                </p>

                <p style="font-size:16px; margin-top: 15px; font-Weight:bold;">

                  One of the motivations of this project is that there has been no documented acoustic description of most Hainan dialects, 
                  such as Hainan Min and Hlai. In addition, these varieties are fascinating in various ways. For example, the Hainan Min 
                  varieties are known for their complex tonological system, for which no articulatory or acoustics study has been conducted. 
                  As for Lingao and Hainan Cham, they are unique varieties in historical linguistics research (Thurgood 2005; Ting 1982). 
                  Such fieldwork recordings will be interesting to researchers from different fields.

                </p>
         </div>


         <div id="Project2">
                <p style="font-size:18px; color:black; margin-top:20px; font-Weight:bold;">
                    Please click on below sections to see further information
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    <router-link to='/005_HainanMin'>[Variety#:001] Hainan Min</router-link>
                </p>

                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    [Variety#:002] Lingao
                </p>

                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    [Variety#:003] Hlai
                </p>

                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    [Variety#:004] Tsat
                </p>

                <p style="font-size:18px;margin-top:30px; font-Weight:bold;">
                  <router-link to='/Research'>Back to previous page</router-link>
                </p>
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