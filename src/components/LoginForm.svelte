<script>
    let email, password;

    const login = (e)=>{
       
    }
</script>

<div class="main">
    <img class="logo" src="logo.png" />
    <div class="box">
        <input type="text" class="field" placeholder="ایمیل کشیش" bind:value={email}>
        <input type="password" class="field" placeholder="کلید محراب" bind:value={password}>
        <button class="submit" on:click={login}>ورود به قبرستون</button>
    </div>
</div>

<style>
    .main{
        text-align: center;
        width : 40%;
        margin: 20% auto;
    }
    .logo{
        margin: -65px 29px;
        display: block;
        z-index: -45;
        position: absolute;
        transform: rotate(-4deg);
        width: 87px;
    }
    .box{
        padding: 20px;
        margin: 10px auto;
        background-color: #474849;
        border-radius: 10px;
        border: 1px solid #341107;
    }
    .field{
        width: calc(100% - 20px);
        margin-bottom: 10px;
        background-color: #828282;
        padding: 10px;
        border: none;
        border-radius: 10px;
        text-align: center;
        outline: none;
    }
    .submit{
        margin-top: 10px auto;
        width: 100%;
        padding: 10px;
        background-color: #1a6e2e;
        color: white;
        border: 1px solid #341107;
        border-radius: 10px;
        text-shadow: 3px 3px 3px rgba(52, 17, 7,0.4);
    }
    .submit:hover{
        background-color: #299244;
        cursor: pointer;
    }
</style>