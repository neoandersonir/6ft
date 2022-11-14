<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let url, short;
    const addHandler = (e)=>{
        dispatch('add', {url, short});
        url = short = '';
    }

    $: console.log(url, short);
</script>

<div class="add-box">
    <input class="url-field" id="url" placeholder="متوفی" type="text" bind:value={url} />
    <input class="short-field" id="short" type="text" placeholder="سنگ نوشت" bind:value={short} />
    <button class="save-button" id="add" on:click={addHandler}>خاک بَر سَرَش کُن!</button>
</div>

<style>
    .add-box{
            background-color: #198990;
            border-radius: 7px;
            box-shadow: 0 4px 4px rgba(0,0,0, 0.06);
            padding: 5%;
            display: flex;
            justify-content: space-between;
            border: 1px solid black;
        }

        .url-field, .short-field{
            height: 46px;
            border-radius: 7px;
            margin: 0 14px 0 0;
            border: none;
            outline: none;
            padding: 0 10px;
        }
        .url-field{
            flex: 3;
            order: 1;
            font-family: tahoma;
        }
        .short-field{
            flex: 1;
            order: 2;
            font-family: tahoma;
        }
        .save-button{
            height: 46px;
            background-color: #005585;
            color: white;
            border-radius: 7px;
            border: none;
            direction: rtl;
            box-shadow: 4px 4px 4px rgba(0,0,0,.15);
            cursor: pointer;
            flex: 1;
            order: 3;
            transition: background-color 0.1s ease;
            font-family: tahoma;
        }
        .save-button:hover{
            background-color: #0073aa;
        }
        .save-button:active{
            background-color: #000000;
        }
</style>