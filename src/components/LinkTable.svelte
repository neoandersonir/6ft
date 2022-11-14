<script>
    import { fade, fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let store;
    const deleteHandler = (e)=>{
        let key = e.target.getAttribute('data-key');
        dispatch('delete', {key});
    }
</script>

<table class="table">
    {#each store.data as { id, short, url }, i}
        <tr class="row" in:fly>
            <!-- <td class="col col-0">{id}</td> -->
            <td class="col col-2"><a class="link" href="{url}">{url}</a></td>
            <td class="col col-1"><a class="link" href="http://6ft.ir/{short}"><span style="color: gray">🪦/ {short}</span></a></td>
            
            <td class="col col-3">
                <span class="action delete" data-key="{id}" on:click={deleteHandler}>پاک بشَوه</span>
            </td>
        </tr>
    {/each}
</table>

<style>
    .table{
        width: 100%;
        margin-top: 20px;
    }
    .row{
        padding: 10px;
        box-shadow: 0px 4px 4px rgba(0,0,0, 0.15);

        color: #b3b3b3;
        font-size: 11px;
    }
    .col{
        padding: 15px;
    }
    .col-0{
        width: 5%;
    }
    .col-2{
        flex: 7;
    }
    .col-1{
        flex: 1;
        width: 15%;
    }
    .col-3{
        text-align: right;
        flex: 1;
        width: 15%;
    }
    .link{
        text-decoration: none;
        color: #1d77a9;
        padding: 3px;
    }
    .link:hover{
        color: white;
    }
    .action{
        background-color: #005585;
        cursor: pointer;
        padding: 3px;
        border-radius: 7px;
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
    }
    .delete{
        background-color: #743030;
    }
    .action:hover{
        color: white;
    }
</style>