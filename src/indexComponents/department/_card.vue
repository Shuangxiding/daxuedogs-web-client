<template>
    <div class="card">

        <div class="img">
            <img
                :src="carddata.img"
                alt="加载中..."
                v-link="{ name: 'departmentDetail', params: { did: carddata.id }}"
            />
        </div>

        <div class="desc">
            <div class="desc-title">
                <h6>{{ carddata.name || '加载中...' }}</h6>
            </div>
            <!-- <div class="desc-content"></div> -->
            <sociality-component
                :weibo-link="carddata.weibo_link"
                :weixin-link="carddata.weixin_link"
                :qq-link="carddata.qq_link"
            ></sociality-component>
        </div>

    </div>
</template>

<script>
// 各个部门的介绍卡片
export default {
    props: ['carddata'],
    components: {
        socialityComponent: require('../../commonComponents/sociality_links.vue')
    }
}
</script>

<style lang="stylus">
@import '../../stylus/variable'

.card
    background-color #e3e3e3
    border-radius .5rem
    margin 1rem
    .img
        cursor pointer
        img
            height $image-size-at-department-card
            width $image-size-at-department-card
    .desc
        display flex
        align-items center
        justify-content center
        flex-direction column

        h6
            margin 1rem 0
</style>
