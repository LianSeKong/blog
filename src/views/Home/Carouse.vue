<template>
    <div class="carouse" @wheel="handleWheel">
        <div class="carouse__main">
            <CarouseItem 
                v-for="(item, i) of mockData"
                :key="item.bigImg"
                :placeholder="item.midImg"
                :imageSrc="item.bigImg"
                :style="itemStyle(i + 1)"
                :lazy="index === i + 1"
                @transitionend="handleTransitionend"
                >
            </CarouseItem>
        </div>
        <div class="carouse__indicator">
            <div @click="handleIndicator(i + 1)" v-for="(item, i) of mockData" :class="i === index - 1 ? 'carouse__indicator__item--active' : ''" :key="item.bigImg" class="carouse__indicator__item"></div>
        </div>
        <div class="carouse__arrow">
            <div 
                class="carouse__arrow--up"
                v-show="index !== 1"
                @click="index -= 1">
                <Icon iconName="up"></Icon>
            </div>
            <div 
                class="carouse__arrow--down" 
                v-show="index !== mockData.length"
                @click="index += 1"
                >
                <Icon iconName="down"></Icon>
            </div>
        </div>
    </div>
</template>

<script>

import CarouseItem from './CarouseItem.vue'
import Icon from '@/components/Icon'
import request from '@/utils/request'
export default {
    name: 'MyCarouse',
    components: {
        CarouseItem,
        Icon
    },
    data() {
        return {
            mockData: [],
            index: 1,
            switching: false
        }
    },
    computed: {

    },
    methods: {
        itemStyle(i) {
            return {
                top: this.index - i  + '00%'
            }
        },
        handleIndicator(i) {
            this.index = i
        },
        handleWheel(e) {
            if (this.switching || e.deltaY < 100 && e.deltaY > -100) {
                return;
            }
            
            if (e.deltaY >= 100 && this.index < this.mockData.length) {
                this.index += 1
                this.switching = true

            } else if (e.deltaY <= -100 && this.index > 1) {
                this.index -= 1
                this.switching = true
            }
        },
        handleTransitionend() {

            this.switching = false
        }
    },
    beforeMount() {
        request.get('/banner').then(res => {

            this.mockData = res.data.data
        })
    }
}


</script>

<style lang="scss" scoped>

.carouse {
    height: 100%;
    position: relative;
    overflow: hidden;

    &__main {
        height: 100%;
    }

    &__indicator {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 4px;
        z-index: 99;
        &__item {
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 50%;
            border: 2px solid #666;
            cursor: pointer;

            &--active {
                background: #666;
            }
        }
    }

    &__arrow {
        

        @keyframes jump-up {
            0% {
                transform: translate(-50%, 5px);
            }
            50% {
                transform: translate(-50%, 0px);
            }
            100% {
                transform: translate(-50%, -10px);
            }
        }
        @keyframes jump-down {
            0% {
                transform: translate(-50%, -5px);
            }
            50% {
                transform: translate(-50%, 0px);
            }
            100% {
                transform: translate(-50%, 10px);
            }
        }

        &--up {
            position: absolute;
            cursor: pointer;
            top: 10px;
            left: 50%;
            transform: translate(-50%, 0);
            color: #333;
            z-index: 99;
            animation: jump-up 1.5s infinite;

            &:hover {
                animation: none;
            }
        }

        &--down {
            cursor: pointer;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, 0);
            color: #333;
            animation: jump-down 1.5s infinite;
            z-index: 99;
            &:hover {
                animation: none;
            }
        }

    }


}

</style>