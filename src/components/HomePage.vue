<template>
    <div id="outer-container" style="width:80%;height:95%;margin:0 auto">

        <div class="basic_info" style="width:30%;margin-top:0px;">
            <p align="left" style="font-size:33px;margin-left:10px;font-weight:bold">Tianle Yang</p>
            <a-divider style="margin-top:-30px;"/>
            <p align="left" style="color:blue;margin-top:-20px;margin-left:10px;font-size:20px;font-weight:bold;"> Independent researcher</p>
        </div>
        <a-layout>
            <a-layout-header>
                <a-menu
                        v-model:selectedKeys="selectedKeys"
                        theme="dark"
                        mode="horizontal"
                        :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1" @click="RoutePage(1)">HOME</a-menu-item>
                    <a-menu-item key="2" @click="RoutePage(2)">RESEARCH</a-menu-item>
                    <a-menu-item key="3" @click="RoutePage(3)">PUBLICATIONS</a-menu-item>
                    <a-menu-item key="4" @click="RoutePage(4)">SERVICES</a-menu-item>
                    <a-menu-item key="5" @click="RoutePage(5)">CV</a-menu-item>
                    <a-menu-item key="6" @click="RoutePage(6)">CONTACT</a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer>
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
    import {ref} from 'vue';
    export default {
        name: 'HomePage',
        setup() {
            return {
                selectedKeys: ref(['1']), //chose home by default
            };
        },
        methods:{
            RoutePage(key) {
                console.log(key)
                switch (key){
                    case 1:
                        this.$router.replace('/Home')
                        break
                    case 2:
                        this.$router.replace('/Research')
                        break
                    case 3:
                        this.$router.replace('/Publications')
                        break
                    case 4:
                        this.$router.replace('/Services')
                        break
                    case 5:
                        this.$router.replace('/CV')
                        break
                    case 6:
                        this.$router.replace('/CONTACT')
                        break

                }
                // if(this.selectedKeys[0] === "1")
                //     this.$router.replace('/Home')
                // else
                //     this.$router.replace('/Research')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
