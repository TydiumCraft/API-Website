function mFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000000).toFixed(2)) + 'm' : Math.sign(num)*Math.abs(num)
}

fetch('https://api.tydiumcraft.net/v1/stats')
    .then(response => response.json())
    .then(data => {
        var total = 0
        for (const year in data) {
            for (const month in data[year]) {
                for (const day in data[year][month]) {
                    for (const endpoint in data[year][month][day]) {
                        total += data[year][month][day][endpoint]
                    }
                }
            }
        }

        document.getElementById('poweringNumber').textContent = mFormatter(total)
        document.getElementById('powering').classList.add('show')
    })
