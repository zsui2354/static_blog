


/* 
    ///     Lightning.js
    ///
    ///     Project： https://github.com/zsui2354/LG.js
    ///     


    @===========================================================================
    @                               Lightning.js
    @           An example of a quick call name given to a DOM element
    @   
    @   1.Mov_box （class）
    @
    @
    @
    @
    @



*/


/*  
        @  By.author : zsui2354
        @
        @  introduce:
        @  Enter the viewport and trigger dynamic effects when crossing the viewport


 */
        var options = {
            root: null, // 使用默认的视口作为根
            rootMargin: '0px', // 视口的边界
            threshold: 0.5 // 盒子可见度达到50%时触发回调函数
        };
        
        // 创建一个 IntersectionObserver 实例，用于处理交叉状态变化
        var observer = new IntersectionObserver(function(entries, observer) {
            // 遍历每个观察到的交叉状态
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    console.log('盒子进入视口范围');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(-30px)';
                } else {
                    console.log('盒子离开视口范围');
                }
            });
        }, options);
        
        // 监听所有指定的盒子元素
        var boxes = document.querySelectorAll('.Mov_box');
        
        boxes.forEach(function(box) {
            observer.observe(box);
            box.style.transition = "all 1.5s ease";
            box.style.opacity = '0';
            box.style.transform = 'translateY(100px)';
        
        });
        
        /* ######################################################################### */

