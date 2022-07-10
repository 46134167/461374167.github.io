<template>
    <div id="innercontainer" style="width:98%;height:100%;margin:0 auto">


        <div id="ResearchProjects" align="left" >
            <p style="font-size:27px;margin-top:10px;">Research Projects</p>
            <div id="Project1">
                <a-space direction="vertical">
                    <a-typography-link style="font-size:20px;margin-top:20px;" href="https://philjohnrose.net/Wu_tones/Wu_citation_tones/Wu_sites_ZJ_JS.html" target="_blank">
                        <right-outlined></right-outlined>
                        Wu tone map
                    </a-typography-link>
                    <a-typography-text strong style="font-size: 15px">From October 2021 - March 2022</a-typography-text>
                </a-space>
                <p style="font-size:18px; margin-top: 10px">
                    These are some good stuff Phil has been working on for decades. I offered him fieldwork recordings in
                    six Chinese Wu sites (some at the putative boundary of left and right dominant tone sandhi speaking places).
                    They are Jinshan and Songjiang in Shanghai, and Huzhou, Zhuji, Shengzhou and Shangyu in Zhejiang.
                </p>
            </div>

            <div id="Project2">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    Documentation and analysis of Hainan dialect
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From December 2022 - ? (Preparing phase)
                </p>
                <p style="font-size:18px; margin-top: -10px">
                    The Hainan dialect is considered to be understudied and endangered as a group of Min varieties spoken 
                    on a southern Chinese island. This fieldwork will start from the <a href='http://www.hnszw.org.cn/data/news/2015/04/77216/'>Wenchang variety</a>,
                    which is widely known as Hainan's official dialect. Then, the recording will gradually extend to local ethnic minority communities' dialects, such 
                    as <a href='https://iso639-3.sil.org/code/lic'>Hlai [lic]</a>, <a href='https://iso639-3.sil.org/code/huq'>Tsat [huq]</a> 
                    and <a href='https://iso639-3.sil.org/code/onb'>Lingao [onb]</a>.

                
                </p>
            </div>

            <div id="Project3">
                <p style="font-size:20px; color:green; margin-top:20px;">
                    Automatic tone identification and categorization based on given vocal onsets and offsets
                </p>
                <p style="font-size:15px;margin-top:-20px; font-Weight:bold;">
                    From July 2022 - present
                </p>
                <p style="font-size:18px; margin-top: -10px">
                    Planning phase.

                
                </p>
            </div>
        </div>

        <a-divider/>

         <div id="Project4" align="left">
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