<script lang="ts">
  import { appwriteUser } from "$lib/appwrite";
    import { login } from "$lib/user";

    let email = "";
    let password = "";
    let errorMsg = "";

    $: disabled = !email || !password;

    function loginUser() {
        login(email, password).then((res) => {
            errorMsg = res as any;
        });
    }

    async function forgotPassword() {
        if(!email) return alert('Please enter your email');
        alert('Please contact the school to reset your password');
        await appwriteUser.createRecovery(email , 'https://aicdismissal.vercel.app/')
    }
</script>

    <h1 class="text-xl text-center pt-5 text-white font-bold">Login</h1>
    <form on:submit|preventDefault={loginUser} class="flex flex-col items-center">
        <div class="w-80">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Email</span>
                </div>
                <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={email} />
            </label>
            <!-- <label for="password">Password</label>
            <input type="password" id="password" bind:value={password} /> -->
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text text-white">Password</span>
                </div>
                <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={password} />
                <div class="label" on:click={forgotPassword}>
                    <span class="label-text text-white">Forgot Password</span>
                </div>
            </label>
            <button class="btn btn-success mt-5 w-full" type="submit" disabled={disabled}>Login</button>
            <p class="text-red-500 text-center mt-5">{errorMsg}</p>
            <div class="label">
                <span class="label-text text-white">Don't have an account? <a class="underline" href="/loginRegister/register">Register</a></span>
            </div>
        </div>
    </form>