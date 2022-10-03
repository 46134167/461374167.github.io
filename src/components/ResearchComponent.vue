<template>
    <div id="innercontainer" style="width:98%;height:100%;margin:0 auto">


        <div id="ResearchProjects" align="left" >
            <p style="font-size:23px;margin-top:10px;">Research Projects</p>
            <div id="Project1">
                <a-space direction="vertical">
                    <a-typography-link style="font-size:20px;margin-top:-10px;" href="https://philjohnrose.net/Wu_tones/Wu_citation_tones/Wu_sites_ZJ_JS.html" target="_blank">
                        <right-outlined></right-outlined>
                        [Item#:002] Wu tone map
                    </a-typography-link>
                    <a-typography-text strong style="font-size: 15px">From October 2021 - March 2022</a-typography-text>
                </a-space>
                <p style="font-size:17px; margin-top: 10px">
                    These are some good stuff Phil has been working on for about half a century. The current database contains 
                    recordings across 140 Chinese Wu sites from thousands of local speakers. I offered him fieldwork recordings in
                    six Wu sites (some at the putative boundary of left and right dominant tone sandhi speaking places).
                    They are Jinshan and Songjiang in Shanghai, and Huzhou, Zhuji, Shengzhou and Shangyu in Zhejiang.
                </p>
            </div>

            <div id="Project2">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    <router-link to='/005'>[Item#:005] Documentation and analysis of Hainan dialects</router-link>
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From December 2022 - ? (Preparing phase)
                </p>
                <p style="font-size:17px; margin-top: -10px">
                    The Hainan dialects are considered to be understudied and endangered as several groups of varieties spoken 
                    on a southern Chinese island. This fieldwork will start from the Wenchang variety, which is widely known as 
                    Hainan's official dialect and a variety of Hainan Min. Then, the recording will gradually extend to local ethnic minority 
                    communities' dialects, such as <a href='https://iso639-3.sil.org/code/lic'>Hlai [lic]</a>, 
                    <a href='https://iso639-3.sil.org/code/huq'>Tsat [huq]</a> and <a href='https://iso639-3.sil.org/code/onb'>Lingao [onb]</a>.

                
                </p>
            </div>

            <div id="Project3">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    [Item#:006; Part 1] Automatic Wu tone identification and categorization based on given vocal onsets and offsets
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From July 2022 - present
                </p>
                <p style="font-size:17px; margin-top: -10px">
                    It is well-known that acoustic features such as register (tonal pitch height dimension), tone contour, phonation type and duration could be cues 
                    to tone identification. This project plans to extract acoustic features from our fieldwork recording database and train the computer to identify 
                    and categorize Wu tones based on machine learning algorithms such as Support Vector Machine (SVM) and neural network. Acoustic data from 43 Wu 
                    varieties were extracted from 103 speakers' recordings and are currently under analysis.

                
                </p>
            </div>

            <div id="Project4">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    [Item#:006; Part 2] Automatic tonal acoustics extraction
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From 2023 - ? (Planning phase)
                </p>
                <p style="font-size:17px; margin-top: -10px">
                    The automatic tone recognition project is divided into two parts: tonal acoustics extraction 
                    (part 2) and tone identification+categorization (part 1). The second part of this project plans 
                    to use two approaches to extract acoustic data from recordings. The primary approach will be 
                    implementing computer vision techniques in tonal acoustics extraction, which visually examines acoustic 
                    information. The alternative approach uses the old-school forced alignment method to determine 
                    the segment boundaries.
                
                </p>
            </div>

            <div id="Project5">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    [Item#:007; Part 1] Between speaker differences in Jinshan vowels
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From August 2022 - present
                </p>
                <p style="font-size:17px; margin-top: -10px">
                    Male speaker - nasal sound loss/ sound merge found. Implosive consonants found.
                
                </p>
            </div>

            <div id="Project5">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    [Item#:007; Part 2] Sound variation and change: a case study of Jinshan dialect
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From 2023 - ? (Planning phase)
                </p>
                <p style="font-size:17px; margin-top: -10px">
                    This project will start after the description of Jinshan vowels is finished.
                </p>
            </div>


        </div>


        

        <a-divider/>

         <div id="Project7" align="left">
                <p style="font-size:20px; margin-top: -10px; font-Weight:bold;">
                    For details of my finished projects, please click on the publications section.
                </p>
            </div>
    </div>
</template>

<script>
    import { RightOutlined } from '@ant-design/icons-vue';
    export default {
        name: 'HomeComponent',
        methods:{

        },
        components: {
            RightOutlined,
        },
    }
</script>