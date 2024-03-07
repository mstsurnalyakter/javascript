

document.getElementById("submit").addEventListener('click',()=>{
    const key = document.getElementById("key").value;
    const value = document.getElementById("name").value;
    localStorage.setItem(key, value);

    document.getElementById("key").value = "";
    document.getElementById("name").value = "";
})
