<script lang="ts">
    import { register } from "$lib/user";

    let email = "";
    let name = "";
    let password = "";
    let confirmPassword = "";
    let date = "";
    let errorMsg = "";

    $: disabled = !email || !password || !name || !date || !confirmPassword;

    function registerUser() {
        if(password != confirmPassword) return errorMsg = "Passwords do not match";
        register(email, password,name,date).then((res) => {
            errorMsg = res as any;
        });
    }

</script>
<main class="text-white">
    <h1 class="text-xl text-center pt-5 font-bold">Register</h1>

    <form on:submit|preventDefault={registerUser} class="flex flex-col justify-center items-center">
        <div class="w-80 mt-[10vh]">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Email</span>
                </div>
                <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={email} />
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Name</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={name} />
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Date Of Birth</span>
                </div>
                <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={date} />
            </label>
            <!-- <label for="password">Password</label>
            <input type="password" id="password" bind:value={password} /> -->
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Password</span>
                </div>
                <input type="password" placeholder="Password (Must be 8 characters long)" class="input input-bordered w-full max-w-xs text-black" bind:value={password} />
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                <span class="label-text text-white">Confirm Password</span>
                </div>
                <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs text-black" bind:value={confirmPassword} />
            </label>
            <button class="btn btn-success mt-3 w-full" disabled={disabled} type="submit">Register</button>
            <p class="text-red-500 text-center mt-5">{errorMsg}</p>
            <div class="label">
                <span class="label-text text-white">Already have an account? <a class="underline" href="/loginRegister/login">Login</a></span>
            </div>
        </div>
    </form>
</main>