'use strict'; {
    // // カウントダウンする秒数
    // let sec = 10;

    // // 開始日時を設定
    // let start = new Date();
    // console.log("Start: ", start);
    // // 終了時刻を開始日時+カウントダウンする秒数に設定
    // let end = new Date(start.getTime() + sec * 1000);
    // console.log("End : ", end);

    // // 1秒おきにカウントダウン
    // let cnt = sec;
    // let id = setInterval(function() {
    //     cnt--;
    //     console.log(cnt);
    //     // 現在日時と終了日時を比較
    //     start = new Date();
    //     if (start.getTime() >= end.getTime()) {
    //         clearInterval(id);
    //         console.log("Finish!");
    //     }
    // }, 1000);

    function setTimer() {
        let timer = document.getElementById('timer');
        let count = 10;
        let timerStart = new Date();
        let timerEnd = new Date(timerStart.getTime() + count * 1000);


        const timerId = setInterval(() => {
            timer.textContent = count;
            count--;
            timerStart = new Date();
            console.log('_'.repeat(word.length));

            // 時間内に終わらなかった場合
            if (timerStart.getTime() >= timerEnd.getTime()) {
                clearInterval(timerId);
                timer.textContent = "Time is up";
                showResult();
            } else if (!words.length && target.textContent === '_'.repeat(word.length)) {
                // 時間内に終わった場合
                clearInterval(timerId);
                timer.textContent = "";
                showResult();
            }
        }, 1000)
    }

    function setWord() {
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        target.textContent = word;
        loc = 0;
    }

    const words = [
        'red',
        'blue',
        'pink',
        // 'black',
        // 'white',
        // 'gold',
        // 'silver'
    ];
    let word;
    let loc = 0;
    let startTime;
    let isPlayng = false;
    let missCount = 0;
    let missKey = [];


    const target = document.getElementById('target');

    document.addEventListener('click', () => {
        if (isPlayng === true) {
            return;
        }
        isPlayng = true;
        setWord();
        setTimer();
        startTime = Date.now();
    })

    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]) {
            missCount++;
            missKey.push(word[loc]);
            return;
        }
        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);
        if (loc === word.length) {
            if (words.length === 0) {
                const result = document.getElementById('result');
                const miss = document.getElementById('miss');
                const keys = document.getElementById('keys');

                const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                result.textContent = `Finished! ${elapsedTime} seconds!`;
                miss.textContent = `Number of mistake ${missCount}`;
                keys.textContent = `Miss type ${missKey}`
                return;
            }
            setWord();
        }
    })


    function showResult() {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        miss.textContent = `Number of mistake ${missCount}`;
        keys.textContent = `Miss type ${missKey}`
    }
}