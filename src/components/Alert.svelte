<script>
    import { fade } from 'svelte/transition';
    export let type = 'ok';
    export let msg = '';
    export let visible = false;

    export function show (t, m){
        if (visible) return false;

        [type, msg] = [t, m];
        visible = true;
        setTimeout(()=>{
            visible = false;
        }, 1500);
    }

</script>

{#if visible}
    <div in:fade out:fade id="alert-box" class="alert-{type}">{msg}</div>
{/if}

<style>
#alert-box{
    background-color: #000;
    position: fixed;
    width: 240px;
    height: 20px;
    color: white;
    padding: 10px;
    line-height: 20px;
    direction: rtl;
    border-radius: 7px;
    font-size: 12px;
}
.alert-red{
    background-color: #a60000 !important;
    animation: shake 0.1;
}
.alert-ok{
    background-color: #005585 !important;
}
@keyframes shake {
    25%{ transform:translateX(4px) }
    50%{ transform:translateX(-4px) }
    75%{ transform:translateX(4px) }
}
</style>