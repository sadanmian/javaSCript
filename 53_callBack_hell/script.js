const loadScript = (src, callback) => {
    var script = document.createElement("script")
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC : " + src);
        callback(null, src)
    }
    script.onerror = function () {
        console.log("Error loading with script with SRC : " + src);
        callback(new Error("SRC got some error"))
    }
    document.body.appendChild(script)
}
loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap1@5.3.0/dist/js/bootstrap.bundle.min.js", (error, srcc) => {
    if (error) {
        console.log(error);
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap2@5.3.0/dist/js/bootstrap.bundle.min.js", (error, srcc) => {
        if (error) {
            console.log(error);
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap3@5.3.0/dist/js/bootstrap.bundle.min.js", (error, srcc) => {
            if (error) {
                console.log(error);
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap4@5.3.0/dist/js/bootstrap.bundle.min.js", (error, srcc) => {
                if (error) {
                    console.log(error);
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap5@5.3.0/dist/js/bootstrap.bundle.min.js", (error, srcc) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    alert("SRC : " + srcc)
                })
            })
        })
    })
})