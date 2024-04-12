<template>
     <div class="loaderPill">
        <div class="loaderPill-anim">
            <div class="loaderPill-anim-bounce">
                <div class="loaderPill-anim-flop">
                    <div class="loaderPill-pill"></div>
                </div>
            </div>
        </div>
        <div class="loaderPill-floor">
            <div class="loaderPill-floor-shadow"></div>
        </div>
        <div class="loaderPill-text">Loading</div>
    </div>
</template>

<script>
export default {
    name: 'LoadingI'
}
</script>


<style lang="scss" scoped>


$EASE_INOUT_QUAD: cubic-bezier(0.455, 0.03, 0.515, 0.955);
$EASE_IN_QUAD: cubic-bezier(0.55, 0.085, 0.68, 0.53);
$EASE_OUT_QUAD: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$COLOR_UI_PHARMACY: #237db5;
$loaderPill_DURATION: 1800ms;





.loaderPill {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.loaderPill-anim {
    height: 160px;
}

.loaderPill-anim-bounce {
    animation: loaderPillBounce $loaderPill_DURATION linear infinite;
}

.loaderPill-anim-flop {
    transform-origin: 50% 50%;
    animation: loaderPillFlop $loaderPill_DURATION linear infinite;
}

.loaderPill-pill {
    display: inline-block;
    box-sizing: border-box;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid $COLOR_UI_PHARMACY;
    background-image: linear-gradient(to right, $COLOR_UI_PHARMACY 50%, #ffffff 50%);
}

.loaderPill-floor {
    display: block;
    text-align: center;
}

.loaderPill-floor-shadow {
    display: inline-block;
    width: 70px;
    height: 7px;
    border-radius: 50%;
    background-color: rgba(35, 125, 181, .26);
    transform: translateY(-15px);
    animation: loaderPillScale $loaderPill_DURATION linear infinite;
}

.loaderPill-text {
    font-weight: bold;
    color: $COLOR_UI_PHARMACY;
    text-transform: uppercase;
}

@keyframes loaderPillBounce {
    0% {
        transform: translateY(123px);
        animation-timing-function: $EASE_OUT_QUAD;
    }
    25% {
        transform: translateY(40px);
        animation-timing-function: $EASE_IN_QUAD;
    }
    50% {
        transform: translateY(120px);
        animation-timing-function: $EASE_OUT_QUAD;
    }
    75% {
        transform: translateY(20px);
        animation-timing-function: $EASE_IN_QUAD;
    }
    100% {
        transform: translateY(120px);
    }
}

@keyframes loaderPillFlop {
    0% {
        transform: rotate(0);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(450deg);
    }
    100% {
        transform: rotate(720deg);
    }
}

@keyframes loaderPillScale {
    0%   {
        transform: translateY(-15px) scale(1, 1);
        animation-timing-function: $EASE_OUT_QUAD;
    }
    25%  {
        transform: translateY(-15px) scale(0.7, 1);
        animation-timing-function: $EASE_IN_QUAD;
    }
    50%  {
        transform: translateY(-15px) scale(1, 1);
        animation-timing-function: $EASE_OUT_QUAD;
    }
    75%  {
        transform: translateY(-15px) scale(0.6, 1);
        animation-timing-function: $EASE_IN_QUAD;
    }
    100% {
        transform: translateY(-15px) scale(1, 1);
    }
}

</style>