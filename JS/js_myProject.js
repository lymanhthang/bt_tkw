$(document).ready(function() {
    $(".back2top").hide()

    $(window).scroll(function() {
        if($(this).scrollTop()>=300)
            $(".back2top").show(250)
        else 
            $(".back2top").hide()
    })
})
function loadNews() {
    fetch("/JSON/data.json").then(res => res.json()).then(data => {
        let h ="";
        for(let p of data)
            h += `
            <li class="post"><a href="${p.link}">
                    <div class="flex flexCol">
                        <div class="thumb"><img src="image/${p.img}" alt="img" ></div>
                        <div class="flex flexCol">
                            <label>${p.label}</label>
                            <h4>${p.title}</h4>
                        </div>
                    </div>
                </a></li>
            `;
        let e = document.getElementById("allnews");
        if (e!==null) {
            e.innerHTML = h;
        }
    })
}
window.onload = function() {
    loadNews();
}
