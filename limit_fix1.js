 function AddHud() {
    let hudStyleElement;
    let loadingNotification;
    function showLoadingNotification() {
        if (document.getElementById('loadingNotification')) return;
        loadingNotification = document.createElement('div');
        loadingNotification.id = 'loadingNotification';
        loadingNotification.style.position = 'fixed';
        loadingNotification.style.bottom = '10%';
        loadingNotification.style.left = '50%';
        loadingNotification.style.transform = 'translateX(-50%)';
        loadingNotification.style.display = 'flex';
        loadingNotification.style.alignItems = 'center';
        loadingNotification.style.padding = '10px 20px';
        loadingNotification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        loadingNotification.style.color = '#fff';
        loadingNotification.style.fontFamily = 'Arial, sans-serif';
        loadingNotification.style.fontSize = '16px';
        loadingNotification.style.borderRadius = '8px';
        loadingNotification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        loadingNotification.style.opacity = '0';
        loadingNotification.style.transition = 'opacity 2.5s';
        loadingNotification.style.zIndex = '1000';
        const spinner = document.createElement('div');
        spinner.style.width = '20px';
        spinner.style.height = '20px';
        spinner.style.border = '3px solid rgba(255, 255, 255, 0.3)';
        spinner.style.borderTop = '3px solid #fff';
        spinner.style.borderRadius = '50%';
        spinner.style.marginRight = '10px';
        spinner.style.animation = 'spin 1s linear infinite';
        const text = document.createElement('span');
        text.textContent = 't.me/junckilazzmods';
        loadingNotification.appendChild(spinner);
        loadingNotification.appendChild(text);
        document.body.appendChild(loadingNotification);
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
        document.head.appendChild(loadingStyle);
        setTimeout(() => {
            loadingNotification.style.opacity = '1';
        }, 10);
    }
    showLoadingNotification();
    window.mazzx = window.mazzx || {};
    function formatNumberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
    let notificationContainer;
    function createContainer() {
        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.id = 'mazzxNotificationContainer';
            notificationContainer.style.position = 'fixed';
            notificationContainer.style.bottom = '14%';
            notificationContainer.style.left = '50%';
            notificationContainer.style.transform = 'translateX(-50%)';
            notificationContainer.style.zIndex = '1000';
            notificationContainer.style.display = 'flex';
            notificationContainer.style.flexDirection = 'column';
            notificationContainer.style.alignItems = 'center';
            document.body.appendChild(notificationContainer);
        }
    }
    mazzx.addLabel = function (message) {
        createContainer();
        const notification = document.createElement('div');
        notification.className = 'mazzx-notification';
        notification.style.position = 'relative';
        notification.style.padding = '10px 20px';
        notification.style.marginBottom = '10px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = '#fff';
        notification.style.fontFamily = 'Arial, sans-serif';
        notification.style.fontSize = '16px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 2.5s';
        notification.style.display = 'flex';
        notification.style.justifyContent = 'center';
        notification.style.alignItems = 'center';
        const icon = document.createElement('img');
        icon.src = 'https://i.imgur.com/rBjM3OW.png';
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.marginRight = '10px';
        const text = document.createElement('span');
        text.textContent = message;
        notification.appendChild(icon);
        notification.appendChild(text);
        notificationContainer.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification) {
                    notification.remove();
                }
                if (notificationContainer && notificationContainer.children.length === 0) {
                    notificationContainer.remove();
                    notificationContainer = null;
                }
            }, 2500);
        }, 6000);
    };
    mazzx.addLabel("")
    const hudScript = document.currentScript;
    const hudElements = [];
const oldRadmirConfig = {
    icons: {
        "active_wanted": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAdCAYAAABbjRdIAAAB70lEQVR4nOyWPWsUURSGn9mdXfxqxEJBERtBsBBFsRLERhsr8QdoZ2dpaeUfELQXQbAQLMVfIDYq2KkorCEfBLLkY5Pszt5wwnvDZXJnMjNZtgg5cLiwZ+555rz33DObOueYlrWmRpo2LN3H3kRu5uSl1qSyRPuuA/+A91XzJDUbxEBt4DjQA07o97PAHDAuq7BOZYlk7wAfApAlv61YO5C2EcxDuvKnwJ1c/GEQ7xTljTVIK0jiZUvl14AXkT2XgPPAfz1vOUZAFsqaPzOf3PwucAO4AFxUsjMlMi0K9hv4C/wE3gHrOkswWOAG7zrnXrnJ2C3l2y4qpq39dqXg7evYKvAjbJo8zGv6RFI0tS/AZUEyL2OsMjvYGeAZsNwA9AZ4DGwAA2DTB2IwfzG/Ay9rQGzPc+C1mqIvIGUwp9I70nytIuwz8FXK9AVkLxjS2mD3gWMVYT01w0AvuGtsxWBJMAkeVASZLegIrKJh7IEYLFU1N4EjkXhWAszyUyOfOA+3iX4UeJSLzQKftNpsvBrsH6nrxspRCdYOJOxK+1/AR61+IL/VXboHnAPmgW/Akq5LFBb7nhnoJHBKia19VzQRhkHcZuZpVWXfsj9ao+dVBNuJaS16wEue6GXGRYmqwCZuB/ev3CFsIrYVAAD//9Ov1ZXE2UQ9AAAAAElFTkSuQmCC",
        "armour": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6UlEQVR4nOxSsU6FQBCcvOMRzmswSkVJ7PgGv8zCb7PkF4wlVhoIMS6BYMzgrdHjArF3ks2FudnZZfeSu/s3C+ASAE9CAHT+/ImoLiH5+vLYZjZf2VF6XF3flBGDqI4GlqRzxXphTmceZdAFq5bUqIHyp6AKzukFhqFtANQAKh81Od6FSELCmHTtZpS+WT7m767I8e7QQE2M3Ypj4C8IB8JYlukwgRrVM5cddH7q1Sj9w1HleXrnIG8zmz/pGsWH1X/e7eBL8+wDmy38Ff8Gvx+S+N3ughrnCokZ6HuwewY+udPvzwAAAP//mNRa7K5mABoAAAAASUVORK5CYII=",
        "breath": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAALIUlEQVR4nLRZe0xb5xX3fdm+tq+fGIx9CeRlgpJS8iAkKQQiyPJQgTAVsalaqkjtpKpStE59/Nf1r0nr/tj+mDSkKouWNcqaVM3WEI0I5iWhcQqB8Ejb1MjEBWJjY2M795pr3/f00esUHExMsh3J4oK/79zfd875nccHKsuyCoIgFRDwnCvQD19iKpUKNRqN2q1bt2oqKyvVLpdLXVRUhII1yWRSnJ6eZgOBgAB+hkKhtEql4lUqlSDLsvSE0gIliwt9yiJYpVJpnE6nfu/evYaWlpaS6upqsqioaANBECUYhunBOlEUmcXFxej8/Pysz+ebuXnz5nx/f38yGAxmIAjiwJLnApvPkhAEIQDg4cOHza2trRvq6+u3u1yuOr1eX4lhWAmCIEYIgtTKPl4URVoUxXmGYfzhcPjO0NDQ6CeffBIcHh6mKYoClmXXCzSLawUw8Kz8DgDip06dKrt69erRYDD4e4ZhBkVRjAFAcn4RRFFMZjKZ0Ugk8qf+/v4TnZ2dlQRB2EDIZPUX+lkBLOcZwNedPHlyg8fjaY/FYmc5jgtIksRIkpR5Csis8IIghJLJ5Kder/fnr7322maVSgVCA35ukEAJsOCRI0dKe3p6jsRisTOCIDwEn1QqdYOiqKuZTGZckiS6AKCSKIoLyWTyIjhsW1ubExw+G2LrAZlLHJQgCN2xY8fI6urqRqPReAgATyaTvffv37+cSCSoqqqqnS6X62darXY3BEFrEQ+CYdhiMBgatm/fPt/W1hYbHh72hUIhXmF+wQIvewZxiDY3NxMvvfTSNqvVWo+iqIPn+WAgELja0NAw0NbWNnbx4kVPMpm8pVKpMgXohxAEKTKZTAf27dv3YlNTkxGQUSHlM4GECYLAGxsbrSRJ1mi12iol2HmGYQA7ATPlVColCIKQLoCpwOWMIAhhQRBiarVaV1FRYTAYDDgIKQiCAFi1kubWlKy7AFkQkiTVbrfbqdfrtyEIYgbAgTU3b9584Ny5cwvRaDRTV1e3zWw214CX5FMKYpZl2W+j0ei18fHxrwYGBuYePHiQoShKbGhoMNI0jS8sLPDBYJClKIqFIIhXcqm4FsilKHW73ajT6XSo1Wpn9jsURZ12u73j+PHjTo7jKKPRWInjeG02R+Zaj+f52XA4fO78+fNfXLt2LVFXV6evra0t7ujoKDIYDAQMwyjLsuloNBr3+/1hr9cbvXHjxqNgMLgIQZC8modWBL7T6cQMBoMNhmFz9m/AYmq1utJqtVaAkypuwhTrrwDIcdz9u3fv/vb06dO3Dxw4YPjggw9e3LJly06j0VgFDg4KAPCYLMtpQRCiO3fuDDQ0NIy1tLSMX7hw4fu+vr44sGquRZe7G8JxHEVRVAfDsDYHAAJBkO5xBVhFeJ5/4PV6f/Pmm28Ov/HGG46XX355v9PpPIrj+IsIgthz4l+l0WhknU7HmEymfQ6HY6CsrOxfpaWl986dOxeFIGhFdVpuSVkQBDnr+vWIJEnU1NTUH1999dWhd955x3HixInDpaWlrQiCFCthIeWCVHoXvUaj2WGz2Zy7d++2yrL893g8PtLT05OAICij7Hu8cQkYwzACz/OgsqTXA5Km6f6urq6rHR0dxNGjR/cDgNFotO/jjz/uHB8f/xXLsl8DYuTZDiMIYjOZTId37drV3tXVtcntduuWG3DF6WZmZgSapqOSJMULBShJUvL27dt/5ThOPn78+EaSJA/DMKzv7u6+8NZbb810dnb+Jx6PX5dlmVtDDUj8VqPR2LRv3776pqYmkwISygUpTk1NsQ8fPpxjWTYIesFCQLIse//999+/19zcrN+2bdsLOp0OVCL91q1bLTqdDna73WoMw4gCVC2lu5KSkvpDhw6VgZyt9LFPgFycnJwMpVKpb0VRjBYCMplMfjU7OyvW1NRYLRZLFYhDFEWL2tvbf+nxeJq7u7tPmkymxjwpa4VAEKTVaDSbKisrN23ZskWTJfRykCBIRY/HE5+amhrPZDLfgGqzllLQms3NzU2YzWaIJEmLWq0mwcFBJjCbzT/ds2fP70iSPI1hWIVSdp8mID4Ji8VSXlVVha3mbiDil19+mb5165Zvfn7+piAIgSzD8oDMhEKheYIglkoqiqLmH40C6RAEcSo5d80JIEc0Wq3WYrPZHu/J3QyIs/jZZ5+FKyoqBnAct9tsNhzDMHKV5L2EhGVZUfXjLPTUOvw0AVUH6EJRFFKyjrxCqfxDE8eOjIwkL1265B8cHLy6sLDwD47j/Hlcj1qtVj1FUTJoQkC+fF6QIIQ4jqNjsZiYNcwTbgBAgYE+//zzOMdxX/M8z+7Zsydmt9sParXa7aD1yu4DJZIkyU0URd0Jh8OPMplMCMfx1RJ3wRglSUpRFPXQ7/dz2fydL1bAl+menh55bm7O197e/qipqWly48aNNaAOazQaF8hrMAzjFotlWzqdVo2Ojibq6+t9JpPpEWh2nwmhLLMcxz0MBAL+mZmZxxVnVZBydtiBoCXXT05Ocjdv3lw4ePCgr6amxkGSZCloRDQajS6TyVD79+9XDwwM0K2trffsdvu4Xq9vKJDNy0WSJCmWTCZve73eGTAOZ6vUmqwDRR7UUJqmxf7+/vTg4OCizWabq6qquldRUaE2GAyg8YATiYTw3XffSX19ff7y8vJ+kiTLlbSTvyPJeRVwcyqVGh4fHx+4dOnSgjJiSFkgy0HlG4ggxTIgIWuUD6gIoJLYdDpdqcVi2VBbW7vp7NmzTaFQ6A8cx30PSFDAwCaCMZim6d47d+78orOzc6MyWT4+YEH5S3G/mDW/MqOoa2tr9SdOnCjeu3dvWXFxsUOWZZSmadARDYFsYLPZWjAM2wjDsHEVMgG1nCAIwcXFxRGfz/dFd3f38LVr1x4BKyoEXlqY9wYjn2SvXkBL9sorr9S53e4Oo9F4AIZhm0oZHTKZzNj8/PwNnufTRUVFL+A4DsYR0Ewv9aSSJPGSJD3iOG52YWFhZHR01Hv+/Pmpvr6+5PLbjmcCqQDUvv32247XX3+9xeVy/SQcDvc7HA4w/raD2qssFTmOC0QikU9HRka8VquVsNvtLr1ebwY6WJZlKIoKT01NTQ8ODoZARz4xMcEAcMvvjQq6sFpF0B07dhDHjh3bUVZWdmxiYuJv9fX13q6uLs/Zs2c3g9knu06tVm8uLi4+Xl5e/v2HH354g+O4IacTVElYjsfjUiAQ4Ofm5vhwOAzArXmptV6QcGtrq6mysnInhmHOsbGxORzHkfb29lIEQXJzI4xh2JYNGzYcaGhouPPuu+8GlPYv2/1DCnuffj1YCLuVNcDV+jNnzuyJxWJ/kSSJYRhmKBKJ/BnEIHjRasxNpVL/vnLlSrOSCZ7pLmg9lkQIgtBqtVodGNZA/AH3LnPxagI6bo1Op9MRBKGmaZpVXLsuWU+NBc2JnEgkeEEQ2EIHNsBkmqY5MImuI7k/M0iRoig2GAwmGIaZkSQpUQDARZBm/H5/LJ1OC2v1pv8TkMrAznk8nsT09PTddDo98bQ9oGmenZ293dvbG6VpOv1/B6mIODg4SF++fPmbmZmZf3Icdy/fQp7npyORyJXLly/fHhoaSikszjfWri2FsnsZ4zCTyWR57733qsbGxk5RFHVFuaYWlYvTRwzD3PD5fL/+6KOPdjkcDjsoAOu5PM1l97OURUjJCurOzk5zY2MjWV1dvbG4uLhYkiSEoqjY5ORkoLe3N3T9+nUqFAotqlSqjFyI8iff9WwglylYquFGoxF3uVyakpKSpf4xEomI2Su95/1fThbXfwMAAP//9fAzMpWqp3sAAAAASUVORK5CYII=",
        "cash": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAFE0lEQVR4nLxWbYhVVRd+1t777DPn7L3PvdcZ9H1f3vctqVDT8iM/in5ERmCJ1h/zR5kRpZRBKFGh0OevIvoRJRFFBkaMaRoUWJKZFWlpKZaK0adkY441zDl3btM995xY07ly8161X7Nhcz72x7PWs5619lZ5nmO0mhg1JACq+eKcaxv0PA/1er0yNDT0eJZls4nol66urqe6urp2NBoNZFn2j0DiOB55UpPGVjCl/rIhSZKH0jR9hOe1Liaid40xt3qedzxNU5wrFE2wv9EohBjxplarLRwYGOhP03SN1nqBc4746fv+LGPMJACVJEn6BgcHnyGiU8ads7FV3CuVCqy1/xZCrAPQL6VcWy6X+V9Jaz2fPe/u7h7pPT09MMZMJqJPAQxore/g9cX8tt7EOPXied4SAMOMT0Sf82LuUsqHAVR9378+CIJ5Qoi1RPQxP7XWi7XWywD8BuBIGIZzeA0bdlYwAO8zUAG2p7moWDiGiLa1jO+WUm4koo+EEM865yIhxAYeE0Js5u+CqTOC7ZFSrldKrQHwk1LqQaZl7Nix7N19BchbvBn/D4JgUUF5LqVcNW7cOP43k4j2AzistV7O87h3AtsO4PswDK8Iw/BqAD8A6AvD8BrnnAFwgq3XWt+vlFrd9JJF65wbw55EUTSyOYDvCuM+C4JgViewbUT0BYCvhRAbWQBa63t4MyFEbxAEVymlHuN4FiB9UsrnPM9bLoTYopS6i4GccxrAjy3GbG1itEq/m4j6oyiaQ0RHq9XqnizLKtbaaSyQWq3WS0SDpVJpRqVSIefcv8rl8gqt9ZtZlv2XiOqcAlmWjQfQBWC/EILZMm3SB/AGgBqAo1rrm621FxPRO+yB1vomY8xlRLQTwEmt9dJWAXEq8LcQ4jXekuMeRZETQrwNYG8nGr9SSq2z1k4oON9vjJkZhuFcjh/zz99BENwA4Oei9zHNRLSLvSeiD621E4MgWFiMNQC83glsUyHdXufceVrrO7nSsLXOuQu11ncDGBRCvGytneR53upmXnIR8H1/gTFmKhF9wkBsmFLqJQAHOsVslpRygxDiQBzHR/I873bOXUREJ+M4Ppjnedk5NwXAH0mS7CWiPs/z2IBDURRdUK/XF1Sr1X1KqU1RFE2r1Wor0jS9nQXXFjMieoUtDYLgRmvtJUT0HoBjTJu1lkvTDs6/Ynw6U1Z4daxQ7Hrn3PkFA7GU8kkpJXu2u41Glq3W+jbmmWueMebSIAiuYwAuTyyY4ruPqXLO/d/zvHt54zAMObZXAviGU8MYM6OY288p1QbGZaVITCGEeKGI34vOufGe561kAUgpn3fO/c/zvFUAfgVwkIi+JKLNAI77vr/YWjuFiFjyB4UQHwDY2SlmfFDyz6xUKi0zxozP83xKHMffcg455ybmeR5yPIno9yiKJgghWNaThRCHnXPT0zSdnSTJPinljnK5PDvP8x4A/2mL2enHApce9tT3/fmFjI8GQXBtkW98tOyVUj7NKaO1voU9JaIt1lpW7lIWEntYGN1OY6feLKZKqQeKeredc8n3/UVFrrFIjhhjLjfGzCnUl/Dx06yXHWns1PjY5+6ce8I5Z1nySZIcajQanGuPEtEha+28Wq22slqt7pJSsvRtGIa9HJbWe0rHO8iZWvMKMDw8PHloaOhVAFNbxrYW95ITp99LznrhOVdjQAaO43hJmqZzuRgbY7ac6cbVBjYabVQvqX8GAAD//1IbU0IZuRE7AAAAAElFTkSuQmCC",
        "circle": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAAnklEQVR4nISPMQrCQBQF34qlYJcmRXoLzyBYWKi9ncfzArmARe5hqkCQKNi47IeRD0mhGB3Y6g3L/KmkiSTVdT3P83wfQiiApuu6MsuyVj3BzHbAlXceZnb0XTHGJRD5jqWU1gJOI8LAOQAXSYXGSR7ND8HBpeqPVHnTAniOhQMrl/xtgPZDuAMH3z18+HYmadsf0UgqJd18eAUAAP//IZG88q0ZEVAAAAAASUVORK5CYII=",
        "health": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABrUlEQVR4nKRSu27UQBQ9dzxjb1g5BiRIKFKAFEGTBgnBP9C54yOggQ7+IQ3iE0hBAR+AaBFSBA3bRUqTZpcICRutHzszF81MHLzeNKs9hTVzPefc15GznxOIKAIzg4RAkl3H8bu3R+eTyVP0cPP+g8+Pnr/I26IAWwsigjUako2BBbxIDzsAUixjpzsEsoHjChD5gwu4HxcosIpimazdBdKV7cHs2xCR0yReoRNxaNUCbEEXFcskyzq+V4+3MwilqiE/UqqO0xRm0YItoyuWvrx+cwTgWriBI6Xw5/T0cVMUu32BOE1n2d17X63WLlvX65w+5PlquWvADaDcgF+KTbJ3FQz3vQ5SeWN//xOArS5CUvLfs7OHbVne7r9U4/F5urd3zMZQL1zR75MTP34gzHK8ewffDg/fT398f9YXuHVw8PHJy1f5/NcsrFGQ371syzBD52852oKuatjFYjSs1Wqd6LqBaVroao7OgMIR3W6FVM5A3tbMloYCbJn+v4s9xyd1nyhOECWjSzsD2L5iYCHG7N87mKaGDOTE+5txmXh6hT+mgc9LIv8CAAD//yyAxEM8kvCgAAAAAElFTkSuQmCC",
        "hunger": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAMAAAAGyf7hAAABy1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfHx8wMDAHBwcAAAAAAACTk5P///8cHBwAAAAAAAAdHR0+Pj4EBAQAAAAAAAACAgJHR0dWVlYrKysAAAAICAgNDQ0AAAAAAACampr7+/vi4uLg4ODq6ur9/f08PDwHBweVlZWMjIwAAAAAAAAlJSWRkZETExMAAAB5eXn5+fmPj4+cnJz+/v6Hh4cAAABWVlagoKCioqKKiooICAimpqa0tLQFBQVwcHC2trYLCwsAAAAAAAAKCgrh4eHd3d1QUFAnJycQEBBxcXG9vb0MDAwAAAAAAAAHBwenp6fw8PAiIiIDAwNXV1f6+vrm5uYWFhYAAAAAAAAVFRW5ubmxsbGzs7Px8fHl5eUsLCwAAAAAAAACAgL4+PgAAAAAAACysrL09PTw8PBiYmIAAAAAAAD39/dtbW0lJSUjIyMFBQUAAACEhIQAAAAAAAAAAAD8/PyKiooCAgKPj48EBAQAAACqcwnDAAAAmXRSTlMAATuNlFdc3aBnfuclUPZRD9S+AxTSli3jF0qxTMgGExCpUuL8+/5q1v3//lWq/v39g2X//v7+/v38G+v+/v7+/f/9//395oD9/f7//f/9/f/93v38/Pz+/f3//f3+B5j+/v79/f79/f6RqP39//7+/f/+/q8M/v38/P7+/rMO/v7qGf3+/v3oMf/9//7tQ/35ilT//fb29nMpEXnVAAABMUlEQVR4nGLABRhBBBMznAlmsLAyMDCwsYOYHJwwUS5uHqggLx8/TFBAUEgYLCgiKoYwVFxCkkFKmoFBRlYOySp5qOkKOB0DAopCqEAJJKisoooM1NRBghqaWshAWwckqKunjwwMDI3kGBiMjE1MEcDM3MLSkIHBytpGy9bO3t7eQUtLy9HJ2cXVjYGBwd3D08sbBHx8tfyM/QMCQR5WCDIODgkNDQ0Lj4iMig6IieVkYIiLT4jU0nJMTEpKTklN00rPyGRgYMjKztHS0srNU1PL9y4oLCouKWVg4CiLBDmvsLyioqKyqrqmto6BgaG+PADh8gb9xiaQ25tBDmmBgNa29g5weGhpaXV2dUNAT28fA1QwoH8Cy0QImAQNOa3JU6ayogen1rTpM9DFAAEAAP//bKdOsRoVVIsAAAAASUVORK5CYII=",
        "inactive_wanted": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAAI0lEQVR4nGL5//8/A7UAE9VMGjVs1LBRw0YNG1jDAAEAAP//rfEDIrI5JIcAAAAASUVORK5CYII=",
        "wanted_back": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAARElEQVR4nOzOoRGAQBAAMYah/5YP+2b1n0gqyDczzxbv7cBJpsgUmSJTZIpMkSkyRabIFJkiU2SKTJEpMmVV5g8AAP//iIYDRnB9EZkAAAAASUVORK5CYII=",
        "weapon_back": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAlElEQVR4nOzRMQ0AIBDAQELwb/mZUUCHOwVNemZm0bF/B/AyJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIm5AQAA//+ZAgNkzOjp8gAAAABJRU5ErkJggg==",
        "zone": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAYAAACqNX6+AAAAlElEQVR4nOzRMQ0AIBDAQELwb/mZUUCHOwVNemZm0bF/B/AyJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIm5AQAA//+ZAgNkzOjp8gAAAABJRU5ErkJggg=="
    },
    weapon: {
        "0": "",
	"1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAS1BMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////ScsZwAAAAGHRSTlMAdw764epL8xmQWgeezGnBqyxAhTbXI7bFXe0eAAAFlUlEQVR4nO1b6dKrKhAURMQFUdx4/ye9lXwRQdlUYk7dsn/GFLQw07OASfLgwYMHDx48ePDgfw3CwYzyF8YZDOR3RDowChW0mX5DBPa52AKB6gdMOBUmMH47E7Bfkj/k5d1MhB3gn2EiRHMjk1K3Vcpopv6QYuW/FXnhW0wmZeIR4KlKYFcWSCG3TM1BzUZKR9oW5TccvWrlnBlY33fqVy716wfYs1RZq7FVFysOuBydDdoDLBUvxUkF0M65Nv+/jGqWTLYmMEmtQb1RdvIexqQyyN3Z736nma8JrItIpTD5idm3TEARuYyfMVvjU+blkkUzmOmj+Lk52GDD3Hr8FiiWW5cfB6Xmx0T3m6wtu4lMXaP69VzF1fzW8nwVHSHyQvpYNbDokaH4DNdbnitCN3JLMJdqHIdKaXnerEy2E2LJpb+FCrAyUVwdVXdsUP15nnLHwzjWAhY38HjQOyJuMSGP0Z9y5hG6w4JZyJZlGWNKnCidVmtxksVysyjyTz+TMZPpQbkDFsNEjgB2GL3L9IDPLj8ZRhqlLuiW2fK9OazKYSuH6qhlQSvVYcsFr+kKvoUKl/MhfcJSKdOw5z0iFUv1OmO9LgxXfrZPtZj1WHLO+eV0gSiJQF43fBgGDFo1u7d6kJJxpkKkiBXltRjAtYI5z7JM5/H6sfPF7QX0WurdCC/6gMTqA3QpIoHdMgQtyxJLt2ivJDClv8yAno1VMV4JBMN8mEtn3J5TNUkH6l7Ri2aTye9AdV8tHUyOBUhSv/YkpSsZUnrIILAuDNFkR2Ssrpm2yTTYkeCyIbmyMKT2mO9YcAIhJPz9HpJHiwmsEkgG9ecilEq/vqtKv6E+X8op2/ynVTZuUoqV0I5iZhN1m4NasVGRRo5syVF3ECtmY4Z5komaWQTmU8KmXgYtdwE4tDtwWYRtuGMbZEz1F3vJwkQ3V8bT2HulToNRPYZl8LBg1CrjaamkucFugaWJwA6VR40l7A7eYKTCkl037k6Jq82WrZuqi6gHqaXjtOyQpc5z7ZCQysgPubKhpH+jQocaUqU2aF9tc/wQGBKHPyBnV20LqMc+VnYdLw7Km21VDlJJDiv8HqklEyDZsY5hZ83BwmGRduxuT3gM9xx694KHOXOSJMNByzDALO3SDI39ISNKZ0oYBOCSzyP9BVhftRfDGcW6KFpS5gU2h5w8vSAt0gbD9+cNaDjWpYDzhp3kUq2h4/BBRLf1pPltizBUd6gmLt36CgcX5YWqNFcNoVwyWZNUpM/8UuwEUc23Oa7HWdvwacL1qL5TcPFhN98pUmxAp68zgOWN1HW9xEU5szlpvjhezBxPt3NLtC8ZrnFJT3d9yDthATG5nD8qGmhkLtaDJj+ql/me54JYW8wMBaTiIRjabS0VygUVzZ/yTmrYCM6fTCjRqXWplQhQKa3ws1r3Bik2+VkAl3zjLB11JRIHgKnS7ArisjNPQiMduMJeb5H7uBimk73US9byAtFLczcXYxNwadXEOUMLbDGYs9ilHIp0JO68tLEuSnLm5Pj62asBFn9djoaz2FQyYYOtylhORvLIVLiViekE9A24iG5kKvO/QqVyOfO9VICDiVU4FippVCqTdlswRazuQeG7S7M4XXQPamX1yjB8SXElU4HZ3WQLbm4EYzkvArt+nsVY2Pk60Qe4zX1lfVw79fkrl4f5rM1aUYfhyubGxYTFBvjJGbcvvt+i9crqF/bHALksu3se643i6DmCN14jLdfqVnGOcicrAOs2CNHiJYEalAaS5TrDFzCp0seKpsRNP6e/uXuP3a3Fe2w25J6H7erY3R+MCFHf/SkNtvSi89j5dQA2NxQ+UO473Am8O7ygzS++c3qDq58dZDX+4adoSUI63BdFUfTNLz+Je/DgwYMHDx48eJDExX/lDKfjgo94twAAAABJRU5ErkJggg==",
        "2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAqPgJzX/cIxNFvO5pklcze8pjXgAAAZFJREFUeJztmsuShCAMRcMbRDT//7VT3eiUOlKzI1ncs3TjrXRyiFQTAQAAAAAAIsqGmZedFLDwBxukcxCFb5JPYZJwkmLPKByLaBLnf5Mwc3OCUcw1iWj3rvckzHUTSrLXZxTmluUb5cRLTFLjV8z8umzvSdius5PkOIjCZnIS14X/xiIjfG/Fq1LOcSlRuFfyEaAQJSM7Qaa/tW8G4fYjxSQh/OU4/srVdXPP572XoabbJnct1Gzhb5dnaxUZ5Nbf2m4P0zefzxLC94+3uuBjm9uyqc+xVbDjL70o08+8ofBnH3lj4UeRXe1N+Fb2O+Ov8EVZ78IXJNWH8MXIL8IXor0JX4TtEL6CRola5thB+MMrncn7yD8bvjQGwh9d6UD4uoWfpYMQNnzdwmctG37qjVIh/AsQ/ngzgPBVbvj7MccQ/gUIX/OnIEH4moXvsOEPG0WB8JMa4Tt9wndarnSiAuFXCP+JCzJ/Khg3igLhU968EuETUQ5Wg/A7JcjPMQAAAAAAAAAAAAAAAAAAAD34AfNeMCpTeag7AAAAAElFTkSuQmCC",
        "3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMAatkOVhn1x+avBzSbQYp7Jacv+BUAAAI5SURBVHic7ZprjsMgDIQT3gGS4PtfdlXtdrchoWqkhfEPfwdAU2yGqck0CYIgCIIgCE/M4ojCYiY0MdMPG1pKfioh2rFKzJ8SooRUotWrlIyUsr0qIQVUsh6UUMAp0Z6NlP2oBFig5CopOGdZKiXBopTMlRKCWX8JlZKFT3kKC8eH3kC6shTykYfjE9GKUpJqJZlNeZRGSZn5WkpmYymOj6XMKCU2sLGUXCkJiUmIJFxKiSfH11xCJMEcvzg2luIrJUpC5MQoROZKiYNZiuETIhUbS9nYlCfxdXzFx/ENSknhGyIDzPEN3xC5/PP61moWjm93FYKfNT5Elh8X9x+0X1Q9M77+XX2J4BC53bCqteskMrkbXuW7Woq/cS77hsj5hkX0tZRyKH7Y9K3/paXnfeINyvFNvTq53OpE29VSbL36A2XiZyGyl6W8spThlmLr1Z+4OQ4OkWtDyaMP1rFjA9OWQu54rk9vT/8cIm19lI8VMCNDZJxr/zz+ctt0/A4h0r7dmDA3Dn2fsYHxRK2TRLSkkWMDu+e0NjfH7fF80rqODXS7a/xj34YOisvbrhk8iTRXN9IFI8YGNrf7d/j/0rVuiwtGjQ306a4h3CQyvW/foWOD+PY2GDw2KO2NGf/2ZFrtC5hE6uusiRkUp4uNQT0N6vO5hr09rcRmEmkCly9kptrtYJPI02WNe3v6xm74rw1OlzW2PN/EPUDfnk7tC/2W95WdQ3kEQRAEQRAEQRAEQRAEQZg+4wuspH8VzVwT+gAAAABJRU5ErkJggg==",
        "4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMA9METjZ+B6yEwrgc8S9djX9x4XQAAAelJREFUeJztmgtygzAMRI0/+IdB9z9th5AQSHFmOp1K6mTfBdis1pIJMgYAAAAAf0YOJRsVVEsUJ6OBiYjIVqOAcZVCXkl9iGhQUKJ2U0JUpIWYWu5SaNJiClEQVlLnXUpMGo7PxiKqJA/0JEj2FvcsDxHNTrylPBDs/m4/x3cpTYsSGqRym8/VWRlllCyRdEhpr8WRKlD+Xhuh2KZTNyHJzu+vlZBlb3HpIrA3fNViCjU1psx6TBnVmEJZ8q50IqgxZchqkhK4laTjBfJI/GRTov6kFG4l6R+YEtQcn+GTTYk9KZg+30FSLsD00Z2U8sE9xeufPpH9Ndnrf/eJSc30GfUkxXFL8XpMiWqS4numsH+jSzDlJ6YwHJ8cSphUHJ+2/isby1Tlk1K2Rw2bGNFGa/enhWyc6PHxx58eJE0xrhtUgekzXX1hEeopdbr+ysKblAfLWzHMjXaxvWuKwPSxau4pWXL6nJHtKUdyT8mc1JgS1JhC0TO/J5euFKIYWMXkboE2MZyBqbc7lBIxyXf77crAeqjb20nEvCC4dP9u4u91+TW+se1esS+JtPOaV14TbWXarnGH+Nrt8a7ZKLN6PD1KUp5DWWwfb4wyGypXpCC7DnhiKeIbtQAAAAAAAAAAAAAAAGB+yxdABniZvwz78AAAAABJRU5ErkJggg==",
        "5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMAKQlb53YXu9FA9ZmmifRsEkYAAAHdSURBVHic7Zi9SgNREIXPZkli0EAKCxEEG9HCIrVFwCZlSGEjgqQQxIAg2m/hAwQrsRIsbUIeQWyF4BPYmJBf5xkkMZuxnjmFwj3VVh/3nj3zswsEBQX9N12cvB1veyFxS0RunJAokZlefZSNOUQGvjslPxTpeCDZBURGHspeSnFdqZJSxiU7JJPaIlK2UwpLiNTtlFUKpUmhfAjBl0xNKSV/5kSm9rysKMWR3Uel3NopXcYritpLSK9hphT1KF9mCM6U8kQoaJEXMyQz69sL3TEKemjPXF4pn2YINv9Q5mqaOUpBTwhDRDwFXVHKlZ2SMLploc3IXFGP0qcUdJVibodibolR0FPKhB5RzL2mmFtmmDtsMEZRH4zkViltoc6Y870GY4ma2CG5GmO2xpRS3BfGzt1k2IIKwxYkDFuiNmEqIkuxJb+kHDoo64RNDDhl2IKEsKBCNxdHb0HM6C1YI7Rc6CtyrJbQRueYRNBG55hEyKWb+8BzlEJ6lGcPJUvoCsAuI/5o+kcrtF06PiGgXxGe94z0t4BjEYOuy57uD+wsLvTuopwT6hk4INQzsOX+mpnrwR9cAJkjd3Bnirre4M4Vt8b2XwKqS898Vt3/eg4KCgoKCgoKCgoKgl3fTfrPPxCF6E0AAAAASUVORK5CYII=",
        "6": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAwpzvYBk6DNPjsop2+kopuK/7bQAAAiJJREFUeJztmmuOwyAMhCG8IYDvf9pVt9UmVUJDf8S2tP5OMBqMPTFRShAEgTfBtZJTbOQy/JqTAQBInVCGt0X/qniyUgnxq4Z3YiARYjMcsRRC9IkQgIwupOd6qgTAIyuxaSAEoKAKCctQCEByiErceZUQFG6PH5Ug3md3oQQAq/uHs2byzoIkZblUAgnnhOyoneyoKCfkxv1kRwk8jgcANEJr8RPH8ygWhBPKU0rA3J9a+pwpUO+fQ2VOCUJSCImNFDurBOLdUvS0lHSzkm7YSCnA5YDCZThAK1sLbKTkeSV14VK0UO9t/OsX53PvOAxfFO3NIaF9oeTe6BTmMtOLxiEeIMTsAl9QmExCgNrZXOWF/JsQb8HSZu8QxtrJL1O9H+fjvZfrdKuxVhpuuRoAiIuesH4Ug7u3DZ8KGHmbrYdCKtJqZSZZsjEFDOaiVO2TS46k62O1mRKVK5HQFP/eQpyNZKbkzZSnB+7vCaTivjT4erwtoT3fybD2tS+29mb2CclnUzWuKd2MCqNhP6YWqttywG2mIBfGh4hrsN/lxmt1/NfK4SAkNkVtjVUTK7EsTQm0Slolfe0fpANiU7yh/zPkMAhR39cn04H676Z0PoOwnEcmAhwfU1Y2PT9s6UBMYTgI7dbeiH+StImNKX5hkw6UapFHOngQVsNhED7pGe0npmtsRN6fjAmWur0JgiAIgiAIgiAIgiAIgiAIgiBw5wcrXoJnMd1RVQAAAABJRU5ErkJggg==",
        "7": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAVCy9DT7fG4frnvauzmRySABRigAAAXFJREFUeJztmsmRwzAQxIbirYudf7Qu+ucMULuNEGRwhKEcYYwxxvwxyt1GCQRJmikQZEkrCNRLakcQGJJGEOhTuhgP5ZV0B4GypWWcnyqp9SBwoqRVDcpJvgPBI+kNAokj7S3pDALHnrQcaZ8g0B9MHiRJ09L+cgg1aZ/AvH5WUJrpYkibMdLWC5Nv55a2YKQdQWDtSYvYOcqDybckTL6dmHw7JmaorP37MKRtknIQSBxpb0y+HRdG2oHJt8KRdnGkzZg3YeVIe4qSb31i8m2Jkm/l4UgrTL6dGGmPfZKbpf2lYfItcaTNHGknZucYGGn7lpZxZfwKk28Zk29VmJ1jYIZKn5id4xXlyrjsZmJcGVdhroxPUXaOzpF2fKUtlJVdC9NM86DcM+nGNJMQ+TYw0vaGybf0nbQH5f9MypgPynox0jaEtBMj7RLlTdgbRto+OF+Uo2YJkW+bgZD2SydMWmOMMcYYY4wxxhhjjDH/gA/C4xhVjREKsQAAAABJRU5ErkJggg==",
        "8": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMAq5NtBRnwvizZXvaCQVAO6B4P8w0AAAHQSURBVHic7ZpbstsgEEQHBBYPSaj3v9mUZXyTVP7D+Zizgi7T9DQjmzmO4ziO4/wfcssGoagZhFPRIDTVYQyiVAxBCtJpCHKVNkNQJIpvm6TdEBwYKSlIqkZg3JJeRnGtXhjXiiElcqTsGCnjxkg5+1tKN0jAiZEr4ZFCSNtUMVLK65ESVusws+1RgigJ8SPlWK3DLD0BJ8LrozwBh+i27aOE0PjjR0nNGKvsg5Iqimm1ErumVTbKLJSu1UJsTKv09ReodMwFavN8AiZVtN61o2JcW6aSu1C6igAVbhelN+VZEABlpc1UuTPk2SGAVdL3Kq/vtecsCP3ETOU6MFc5YAqcGiZqO+gqJ0zUbpiCrYJYYUPOp2POpwnT9QPnfG7c+bwKZv7snPmzYebP7f3g3/4GeBXGqaSuD5WK6dfXVCJOaQoJEyoXJlRqxux3Doxpb84kDKuFpO9+FGDayEnae7Vp07Vt55/rg3X14HyX+3D+Hj/rNoHjemvo8SC8OcbxzXvATT6/iUL4gNoqJd7McqSsr83sek6p1/WvDvux774++M0K528IZltlLBF+7Av44m5m6R0y61vch5QvxI/iOI7jOI7jOI7jOI7jOPY3vwC81iqYCY8rcAAAAABJRU5ErkJggg==",
        "9": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAjw340yrE7QUaOLShRuFXZXKBLxDfaQAAA0dJREFUeJztmslu5CAQhlnMbjCm3v9dR+BOp8fGjjUaV+XAd0kfIvkX1F4wNhgMBoPB4BGEUtuPGMLrFxVZ69gkBQBuKZUoAzCJeigAAI5SijcAkBljHF6ayLC6SrDMVkkrpRLGcr2YVbU/nlaKnQBAJgkAoVqtLwuBCtWsdIUvJsfUbEAu2I5kuTFhcS68pcA0V4uBICh8B0y9nx0FW4qq5tHBFGQhjLE1dYWQuJHKYX8yicyf7bf7vAyXRIZgr3D/iSwKPfiLErJiomMuISMnRV6PYJ67PqRR6xZRs+ApHFOKbenvQOL1xgxuFrJxC/J/U5iLQePnQ5f3YiRZcev2UhJBFSeWWlrv4xtIjR72XWhf7XmRQe5A8vbVX+DJrDUanRNp4mZUKax0CiaQ3s+TTK1BQ8Tm+ZB+apUtFoqujO+lUFT6J1loxi+blJ64tx3TNRN3+MchdT81a9R463rV9bcXEQS4Pbq0Rh45C8XSOZjIROQFPzW7Za8kkQ2c/OF+COoDn6Nj7FBfy8Q9shovAaYSu16kHW24/wR1AGYP9tqQW6bGncXZtRdmJ6XWSaKPeITnh/qtjlSEo/DneS/FU06w/2YmqZhYp+loE0HcmB/nWrjaj5nkBwFTiUogJ65qlOudC6LVus2NzSHSzlkb1KbD9hqOr6Zd8RXvUGzfQmrqQdOwYfuzLiBYvZRTJdLRh5IXKVr6yppidrCcbBbwg1u8VoIoxZ3MdB73Zse1Xt1Nk914qA9TLawbnd+F0Hlse1aKfX/XzIs6qU4OUtzjrZZpFdG1I7f/8xi9xcQXTSPFnmXfS2QkiCAn1OcR/xl3nn6xpah/lPJEmSBK81wZfrbV5/OhqoHFWBG7A2tUKcwuaauYnW/btzs8tvp3rdvZ1CQyZz5w65b0L6iZMKs4DjcwinpwjXw/cAeUPkjdsVqk5bLYou8lGqsN8j+Wk4jLseX6lgxmn+ouXRp5lxsvEjX28tKuhjK+dYoH+vvZyF3zpVkuu475Jqon0P645iZSwpjYmy/Z8p/tzZf2XTj7NF+6+9mbL05Reyv60rwj7Zov7rOmM1R99Uv8bv9NTsT+88GCuOwYDAaDwWAwGAwGg8FgwJD5A9WTtRODz7dSAAAAAElFTkSuQmCC",
        "10": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMADU3FnXYW4O0pYIqvBD3409iYUXQAAAHOSURBVHic7ZlZbsQwDEMZb/ESO/H9L1t02sYZ9L8kCr0TEBJNSQlgGIZhGP+Qrbh2xMSWgV5q8Ps5cyhkJeXK5/ziIEuJ3zrmnJkspXgZKThuKRdXSA+rQVyv9IdVzkaVEpeSuVeikF4fSuY+iFLcT6LMuc/piXE7lpKrRO86TUnJqyYF2GhCkFa2nQ5UwjJshMozDlwldSnxVCH9YdmL6Fe8WTYPGcs6GaM0GaMcvIT9ZFtG2clbflvtIVvWnSopmy6RBRKPd5yLTHscV8m2qwxBNJXRgyET+N2LBD4e6xI5ZnvKKu1BUAm3Pt5uDZGvF5GsxK1I4S4p2C4Zz0YVz+IxfIpMUZpMUbIV5XdR2Ds+oky6pVUU8sKEKlOUzcsUxckUpd8jOZOfTy8ymYJ1cLCDNmWVIwxV5RMG1u3j2S953Pc683fP+8XBPpKxxo+OafOQ6Y+HTH+iTn+STH8Onf44qGwqmd2ffvcndJmbY5CVYMhcP2gyoQ8vM5RLVjnZUUV+ywFbkNn0y8/Xt5P+lGtW2d+gMwqRZVYVtKyySgLlq0U7+ym/cJeEVV6kdgpY5Zvh6QvcTaEvCIZhGIZhGIZhGIZhGIZhGIaBv+YDgpU11Bz7FuwAAAAASUVORK5CYII=",
        "11": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAOxrA5vWsDdEqTYp4b1+b5hukeQAAAeBJREFUeJztmmtuwzAMg/2M7bys+592aIENXZZaQX/QyqzvBETEMHQsYxRFURTln5Bcmee5uNRbSFmnSA+CX0tPIbbSK9V2U7LQkaXPmIr/o4Qo95hSySdKiAJ+SO5cCVF2aCnTGyVEHuyX/a0Sog2qxIWGlAAd0dZQQrQClaSz9/jFuUC32KYSotIzZntNKLVM+2AS8SY/8TApnhgySkmJYqSsJGZAmZWCsu3MzoeW7t/kH6yALyE2+DdiGW8+hTctqsat/EMBfQwTHyoBVBFmEpNvlZeyY5Qk3rQhCWkqRFVKUyFUr7UXQkVIvSbc0TCzSiIqVKKYUJn4+cwYJU6bykehEsdrKouYUEm8aVG/m2a6UahEVKhEVsqAoZJ5KeM1lSqmXrt8p1CpwzWVIidUVjlndi+mXlv+oYx3/Em3aip1uKZSLoSKGS5UMi9lvDN7vdOZPTgxPwIXjBJzq9uFLOf4s2GUJL1d+Cz0Qccfk5Yg5HbBGGMnGU3lyd60LnYNzi0CFiG+sVnG4lnLvqjjzy/K1HeTiLUvqKlcsC9yAe6A9X2ayhlpCx1uFy7YF73O2rAvcm2zbV/sMmvTvp1C5UDaYr9QOVJ8x1A54Pq+yYqiKIqiKIqiKIqiKIoRxBfQZ6rK/bkJLwAAAABJRU5ErkJggg==",
        "12": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAD3RSTlMAi8WuCupdKxfYczz3SJpf51EJAAAB3ElEQVR4nO2ZsUoDQRRFJ3GJS5ZI/mAttF4r24iCgpXYWMbWKoJYCIJpLNJZWNiIgh9gPkBQK21EP8DCP4gmaBFjroSY5G373kU0zP2Aw8yd997c2XXOy8vrd7RyMbs+v22ERCUAuK3aKJc9CHBqgiz1IcCThRIPKBsGSGEAQctAyQ4pli09jyhF8wn1NE0wF1gbO8qrp7AppbGjJAxKcPZ3KJNlBiV6ZFByYFDyFEpGUG7UlAkwplSWQtkVlCM15XoE6ehvkopYyxxjSKHIGAw410JC0YzY1FImRRvpM0NOQN7VAXFKUJrqfLgoKPosdSAoXUrRtSnl8qCFBGLq4sQeU2GIdRlJeWHMKKgb4IpSurEsXS0kSBhFV5C2fFCO6F5LqVHKpQLCvAxkF0F70JGENBcY5raVEHcoKZ+EZxowQwiGUB9RHoxezIJxAVQYXRTIhsYx4XKFOnXUUuZWGdXSVULCMqNyMylbtJFuP0WpKykJYyzkUkv5Ui5lj2JLQ0I6dcaGWozCxZ2SUgIjczQoTRQljBvarZbtg9s5t2Mv/562BpA3Z1AYG4dlyuGO6buu+3HYtKGhw+rInXLYckJ9hbHhJTJSlOgf0ULLxt8AXl5eXl5eXl5e/0ffae7sYpvLHZUAAAAASUVORK5CYII=",
        "13": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAD3RSTlMAIU1mf8rr3feVDwa4N6ZCiGRqAAAB9klEQVR4nO3Yv0sCYRgH8Oe8Wu4ynCqXuCUqGmpot8m15hbpDxBpLeigPew/MIhqlSAiaGhv0LEhqP9Ayh9nYD6hpj43Bd/3IR3e7+T0Qb4e33t9iWxsbP7Mesh8skFmeeVeOoER4hb6CteNlMwAYd4yQG6HiNGXWRwprRSu7I4UfocR77fbXg5gxR0j3LhAlTmhdOFiloTSDBTKZVjxQw0lwRrKvFQ6KeMnlw1+6YxU8iDiV6SyByrJolTQaZiRSITWciOVLxChTal8o0pNKvsg4qiU60qkjT65s1LpqpT7iSolqRyCiCfHhc9BxZU/UTtQWG7ulEHlRSoNjeVm9JXm5aTyBCpJiTBa7oNEorLCa5HhcjNS+VBZ7mdQcVh9uVvouNxrLLcfG5dTUCGV16IjjoXMOxMt91EqHRChNanUVcblGEQcleVOxJ7/qsaxsKkyLvWJLref0y830Cg3Qo+F1/rLnUeVnMprsTg9y301RcfCmspyFzWW21U5c9/FykXH5U3/zH2kcFvCSuVWNc7cTbTcBY1xcUoay+3EFPRKy78sKPyhIVoeKxGMEK2a/6EnIj87VM5MlGTFcFwGcUPzi1QiSveRFnxdOIi/YlpuP17WZFxG6TWM3paIuCE8LjJpk+vlcbbFZxsbGxsbGxsbG5t/yw+lfBABpwyJbgAAAABJRU5ErkJggg==",
        "14": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAQMClWfB82yAQMJDA2jB0AAACoklEQVR4nO2XsYsTQRTGv7h7ySZaBCyusRDOMsUplltcZWNaEY8UHqISSCGC3RXXCimusPMKBe0sBLGzSfb2cur3R8nEJLt7JjNvMq8R9iuSTOD9mHnzzZs3wP+nzqkCpDmYfjDfD30D35YHI/IQSF7ywJPyZggguXfH/G4PSB7EPXLfD9JgPgQ+k18BxCSZGdSlHyUi82G8iGtxqQs/yhnJPF3E9VeUmR9lVI7rrSjselGOS3GdAuKX3k45LipRnvhQoiLuJ8YlSr53JETExXJInhc58lpUvxI0gzFKBSvScTXqU3XITEZhVd+ujKdbzeXRFcpvGeUHrXKepY8n5nNspzj3KCVf773YtVO6fnu8Xu4D6ViL0C5FIdmsV05K+dxt0lMnZV4aHXLfKcm6sNk//n9w5GXbuS5M4VzpEsl3l2cqAQvNKn/uvzP1cxJmmPzmwH0XSAzjprRUKJEKJRZSMqtr2kIKs66vYZZ6XNl/01NsU+fy6vBuWIVxV3HTKwg1CTcMydubKdfllG64YWi93MSG4WRbw0jT4rwYC1nNKzaMaWE36oaUYr2XrlFjSU0xxdYoNnS2miqUnpRi7YZGUor1wr4lhFiKlNww51aI1DD5/CEZbJhDK6UhpDheogNqZCZVmcyIGpP5Qo3J7IgpvxS6D1o90xRTbJ7pyCn5abhhaG3nUzEkm7+nAg2TnSgYJrNBsKMBQaQBgaj7mHa3ed/4QiDoPgQQpBoQ9DUgGGtA0NKAINKAINaAINGAYLNhfCBINSDoa0BwpgFBSwOCpKcAAeKBAgR4rwEBdjUgwHMNCEoZ3h6CIsMhECwzHAbB3wyHQmAyHA5BkipAgFgDoqa241IX6pn98SFUcl+DglhlMrVq1apVq1atWrWwVn8AVu9tmmivciMAAAAASUVORK5CYII=",
        "15": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMA+iscuc+I4wnxp0o7EnVml1fDLlw6AAACWElEQVR4nO2a647jIAyFgXAnEML7P+xqRlvVySapdzeGSOPvZ4vEKfjYxqoQDMMwDMMwP5OsUqnaGKNrScqPEzJbI9sbqcs8RsgaZYNKvgh1gBgVdypeYqLqrKS4YyWtNbf0FOJru8L2i1+vL5W0Fv1TlLReWvxnJa3FLlIqQklrpYOSFaWktUSuZNq72Gm7LKXq/ecmU0uxuw3L9NJozfYr6vSiAtxNFuiUvJXpiI/FbjbbF5wU+h1LDldKdloMaXJZ4O2snxaQVmkDdqqHK3SnWpRAfxJe1tmiwBJNGLga/uSTNfEymEicrD5n41C6VJ+I0CvPTu7enJ/OVuV3aMvjyL6BBeaMjOkhNJESb1CZ1Ed6KQkoccdO3l0QVQPloZMvgmCiD1sFlISLt85Mb2bbcDEA1jmaTm6C6S3hHG/OI+quQzECdT+t+oFOFtBnMpH3+S7jTsX5YTX5m/yOFRorzyBopcKVh5OG5taa7FEBTuRkBQ/lYz+0RhdMJZr4FGR6e6EUzeWITYUjf/ShnSyp33x3OZmcGSghciiW2H2adI+TSbF/6WQ6PHxyHL3Y+7FI8lqLxXQeO/7X8GCEk+tQJQp212OdXKCThwbt5J5Ykxv9eBr95Bjs5AbS29hGJXJNvn5yjK3JE2oM2D29mec4eRmpRCDHgL2dbIcqmWGj0vsvD/8w0O/CBNPb+hwni5F4rsl/kp8zPChAiRyb3hb3FCcLkW14Rk3+YtZPeHL8poTxNRn+DW9wd/1mdWOdDCGbBTMMwzAMwzAMwzAMwzAMwzAMIxD8AnGKYqTzR7KkAAAAAElFTkSuQmCC",
        "16": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMAyKAQNdi09OiJHUAoWwlpdU4ZBcVOAAADRUlEQVR4nO2a63KtIAyFEbkLqLz/w57xzq7aKomyzwzfn93ZY9s1cSUkACGFQqFQKBQKhULhS6mFlKI3OSWwevqkYYDrJpsSLTllhBAjRykhyKqbxb2MHxVUznSzklEN7XOo0dN/5yqSMojTQ6hehukfKpbQdO9rId6JQzUZ4kIIYUdSXBYp/ZGUPGktDpRUPn7Cs6Zp7PNK7FJUYtroAaOr0coi/hId1vY+LipbVNxaXNrN1tVzZtZyX1QWlGZ+qz18ekw9paU5FrEFoTPEDT/QvvamHTylzHt+HeFOTAZSw6fq5+eHAIlHlJhwhibEar7Pa/1AlvvaMjavQHvklLeOjqHR0e/xECjaYumt06LiXMmjHJ5YX4JtK8ljd3QhcJywmF7zcwUrfVzcPnzKQlAY1cXRk7zdRSXS8okNQcYvLIm6G0vmRejJX0GISh2VzEssCzMTAtcrbk3MqyxvgX5EyEMzyJ6WsnOWLk5/tC7QutJeyJkdy1ozzAJy1uKB1baeRpybVOvvj2uQcMyytoKtQfZO3hy2k+34hVQSuDKzm4mz0B17XtjXlYSPLs5341DAKaD1blIMe6CFEMMaC+lUWHJM9lpgGJASzMakTsudXdeCAAUq+TkLJdJTClfy2b8l4gISYLt4oF83uH9iHE8Dus0iAhoSNoEZQI1Fdm6HqAQWFg8tbXhhYahKggK0shpXSjyf3aRGKyozIn+lXUk1LsM1LaRxabHfT/obqhv0sAAWog6z2g5VDrAVaDF6Faw9dnd7XH9uHTKYhe5ss+UqDZ594T1uh5XXHL4naZF6KJQpxKHYF2cgqocDhe+QQjDsizYmevCyhDexEmj1RZRCgPbFPQOqIdV32yPMbl+1nSMi0abndYV9sGvT7Yt/TOd4vmUIy74PSCGJIwG0ZUFsHp466bY0d2WJ6G/a98k7Pv5W8wDce/oLJrKbduN685C+r3EVQzMWlTT7ImxqI1VfyMx8i0ZkLCp37fvoZatb9oVsUSLb9x3T/mXf4SBVvH/jle3tS4lp8txfbFWGynbJvuqFO5O/0G8tnsx3Y/xH8yCfXwIv2jd7TCZaFXie69B7GP2OmBQKhUKhUCgUCoVC4f/jH6jXPpF60lqXAAAAAElFTkSuQmCC",
        "17": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAQlBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////1bZCPAAAAFXRSTlMA5QWnlrrL+Svvg0ENX9oVeGtOHzZzVK06AAAEBUlEQVR4nO2abbtsIBSGIylUiP7/Xz0XatSMGcrCuc7p/rRn7OFptd5KCCUSiUQikfgH4ayvBd+4kHPO8xuFDIpQrXUphvfva1yWJe6a9hYdrSoqbZA9Wy+wOrPf67K/XkxTl9olK6yY7iVwEaMu1cHqeWJ8MtxMzoOXTzTLpLlQX6aDC7JOgAPVFR5bMv+NFRuGgfXLp+ISHW1TbOowVNNFSkYbO1zNpunAdeRjZ43+C88Is5mqaeoAYcbcu5S9G9v55N4EMMXwHvuB8RNZu7E9/RAsjFjhR+4+a2wj1MF5bu6krAAxZDS/bzOtM5BM1x50kQ9oYTxkSjUjhBIZqWQN4l5rLc4r4bE2mciWmt1orfvzUooTSjRdpDAQKc0ZJTadKBApZDU2qbGkYUZRazSfTiyjfXbWTQPMm42K/EUGKUnjjMfJeXFgq+R1p+Zg1i388ZRbTWcIzDy2csc0rs3bD5wyRCBqc7Hd/LBuN/3i9b97z6pnjdK+XxkmT/zF+mhFIRq5btsodqhHPCUX85KgBUr51Mx7zl6+x3eqQb8klHac/f5859T7Q+SYErv6EjvzU+FOCGEWBeeVcDPyanSmi8zrmjykRL6ahXiEHwxWmazbXaM40O5sRkFLTzrdy5h3fXz2thr7eHpdSzp5K61Kd9UYjbL29ZUdQHLEmeq6Xg0w3TUxNzZ1LGBOoFeDjal75TKw/HgHBdPGbhRC4eTMY0AvS0fzaOl0yseo3vZaToPNjU3zNbWEDxllyPx5D+hwIaLXpTb3NW0GO+4pGHgDrq38ebfK9rEJEYzezxDD8ZU75JaBXeTORhmDjaIuMgpePgbUYQnttKUZotsdHKTqQMWI6EI4D6Bo4I2ijLKwJeG8PwldCNEMD91wmiAw2Z/4hTBuAV9c0B0g/JyUwjfKGKUEZL+LVX4hjDMKSCWq37qD4PCZgYjnwRplOLP/BVKJuuhC6KIgCyELLYQuNvggC2Ebs40N9M6ljC+EK/L80hQhVPlGicn5UC+iyi/L5BCAlmSKuhtpcZEMtU4VpZSFneuoTGv3qABo+dENt23smxdYmohY9rZ4oVBERuTaK94ps7icD70kO1EIETxjXHdwxVkIFSXl9AuOTcaIrEIBXlZukYvgd6nyGiUIoaEInCX4ExkrKqg2g+9NevA6IL1cd3wn1H3B9yY/EdnfYZTj7ntJIYxz32sOV8WcYbGt+Q2M5P5CGOm+V3QH3xm+Nw70ykS7SbPtvlLcEz0e/O2wprHJvbNjYfjBQH5no3l4Sgr6dF+AQ1VA7iuvL4RH3feOQvgDRu4uhEfc9zGnXWmLuwvhnvs655qehHf0oVS7QfNw+CQSiUQikUgkEolEIpFI/O/8AdNOUwd18bZYAAAAAElFTkSuQmCC",
        "18": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMADe5i03GG+JlAJAW1w+MxTxerE3XzdgAAAuxJREFUeJztmtlu6yAQho3ZwUsw7/+uVXqSJrZZJpIZoqP5blPJf5l9YBgIgiAIgvj/8c5yZYxRfGVdhTi+LfHJLF03Ida8dPyySN9FiDPjXsjvydgOSvjhRB6MElsIMzGHQVYyZZUga2ElJahafFkJphZVURKjQlJyqyqJESeOmABI0fY7zHNHIFSkkE5tJ7b2UiRMSYy8rQ63uhkqZWxZp8M2jokSqDW6iVjyQISxEt1EMvG16f45lvHkJbSSMp0sM93K8d2qAKwnl1iejrlmpOi1jRR1/pJ4aPG5sNo8Wr43tWTTJP/b1JeWx39tM/EcpwZKvClJyVqoxbGERG6Lca7WyL+/aN2k8L+fcxaKj3i/EJ76zBjqTcyMcyrm9Xu23dWXH0sQZZ/MN1Tb5RXa6mKnlneW8fr0vxV7aZeMsH9aLpciixXG5/vM5XIp5uQEu59zIaTF5YPIerSAWAFS9MxZY/voSR36opQUvV2f4IZDDpvOpeXsK9q0mcvszhEThz4dOu5FNuqbhp3TpjJFUEZZ5x4hL3iz0YONoIHYD0438tUnYXcootQm3uZn8309wXIpumxPDlgjUCfQLHYacfrVGkGNHVYEKWymrOC7Cs91IKLZKPz5ngvZWVT//SNo99dqLAePGl3W1Wu+UUU+FlZfEmMFtKoqeZsLm7JmR5o3mlXfDy57MC1kIUrijHF3akBSRoTrBAfxFJxwliAlKBc+AiYFoWuxMPtglEQTv0UKW75Fis+2buhSHCjTomR+VesO8IJ5AR+Kbj2XcbCBUnuNq8UImJQJoRwG2O06RtPvBwu5SkYa4ZmsBtKM9ghu3SqpDnOE56JrKEPfeKG/8hoK7ovS77/DZMZjinvBRrjzzUu/vSBf+i4S3glGI1zYArkd3Rf9xeYLv8++7Z6lfOy+CG+7Svib6JdUjrDno2OEpgmafTtdNhy4u2+vpHLEGZzFCgA/8B5P0gmCIAiCIAiCIAiCIAhiqPADMwbSlczECvAAAAAASUVORK5CYII=",
        "19": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMAWZTu4NIKOGq7FoKoIgT4Sgeo/xMAAAJnSURBVHic7ZpZkoMwDERlG7zjoPtfdgqSgZhk+Jkqtz70LkCXaGuziRRFURTl3yzBkwyM4yRDS3bMbEgClpk5kgDCg5ldQMsgola3oMwNrYOI1k0JVxJAYilWMbsSt6B1ELV5lzKjdRBR3JWwResgytNTioAEV55KXEYLoeUVlNRkpHxmLmghFLY6uLHKSPnMPMGtEl5KuKKt0p4pX0LWX3+VwK3inyl/y/pZRspnfNbPr+wmwCrlUPIIMlI+461iDiXwXtKwEKvEdJxk8NhRzpCAe8nltyDv58dICcojyiiDzPyAdk3rNiOfBAFd5IsoIs+i075hFnKWWxLzf0JvWuQwVvqgWBEd044c0yacEqoXKbjd8dKbdhMTBxvXh/zNtDvz0OVXnN1U12PddWHknBr2L7o5xvdO5QxLhhXAKyOvGizfMXRRam6lTHGglvbt4LzHpQ5scEO5JPwr88AKnU36SG8dyEoIlLKyGCnpVsmM2Ed+Z+Q8ZPmOYUN8y/7cAn5lVA8V7FTt/VE2gM3Bd6ZBFbF8ftolTONfP6VU35eCQaZt57K4s0Zej1IwrPHP6Q9rtKVMu5pxhbnF6S9rNFPn2Q5sbv3dTOiHTh9RzEzoL2YB3v8EFrPIsL0U4FLSO7GLDI+TkuRs31yfaRcxpq04Jf7Svhk5K2MvxrQFp4T6xgn61Ct3HQL4+nSpZ7cPf1+1HqeoGvRjPF+OwEwW/UYkvNk3FWhoWtfgThb7ADq/D6vY6//WTvvC38+QL07KqSYKCV6KTnb7wv/Pk8XCHxUdtIh+yaMoiqIoiqIoiqIoiqIo4vkBehteeUK+hp8AAAAASUVORK5CYII=",
        "20": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAs1Y3Huj6CdaJZsPyRysTdp2o5YDgVAAAAuJJREFUeJztmlmy4yAMRQEzY4ZY+99rl+28dF4S2f1jiVRzVnALrkYQYjAYDAZfQ9GiE0qSSvTBDcD6WLllCCG0hRUTuK8ptrApWcXwadHh1m7wxMSlxKVnGQAguZSI+qKE71CEaH437B2bHZ8W93DsrkUqPuOq1zvysTBJia9S2NKLW96lADQOKeWXbR/u5ZASPh1K4ogjbT5JUZ2YFsBwKHH+o5QlOv6k8sNCrkUCQqJWMs2YFPJovmFKfB+RvBKppTRAMNT9dv0YySuhm0iedTeRfKNWMkH/kZwcz0DYQ10OgOBrFzWZJZIjdj+GvN9PiBJYqJVk7FDs1E8kC2LK3H0kW+O6qcmtm5psNfeuiS+9ZegmkhdMCvkmTn9DTXbESio2ctjw/44cznfTXWfbzUgooZdOpaA1Geapk0gGANMojavxQ1nxwfGuAZ9Jmj2SH6TKXJMBwNCmF4kKSXFSgbBTmOB4Oao2U1OUomzOanKg2iRIOMv5k6EZVct8uhvdRgECswT0UKSuOjfl9vXp9adSUaeA9Wk9jrarlY490UIWniSCHDr8gPQWrFnyPqpdb5WMn0apRZX6E2KSb/gB0M9PmlYxtkwQn5culz56xCUoje52/rZv2xXadvW04dHmetuqNCd02IL92gWLm/Dg+cH7e9a5OpJdw9PbywFdX3/0QQCRDyDqvJcke/SoR3MH9Qew6dS+dO9jLp7Zl3BDqW9HCQZgplw8qRP7Uu57ajgeViXl7nbC++0VT7lRcMf2NaRLH31oX0u4UBBCZH9uGEf0Tdod2nc1TJHWt8JvX6v2VtfkDuwrZ9InPH2SfUlfE/NJ9qUsBe44+14/tv6zfalfqyJqX/qfnRqbkzh+dqrUxQ+SjbrPZL8hf626U97sO3P9GBcieubXqif0rwllZvmj/SAnxh8kL7g2sz3hodmXJ5I/2pcrkt/tS/+rEyEn8r9gg8FgMBgMBoPBYPBt/AE/usKk89KT+AAAAABJRU5ErkJggg==",
        "22": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMA6d2ADLIt9BpAkFLMoMJlceCp7+wAAAIpSURBVHic7ZpZcsQgDAXZN4Ox7n/ZFHYmY8+QSr78VIn6BK8ENGJRShAEQRD+ClnrLSgOOENEsWR0DqXUQgdtQSdR9TMKkU/YJPkrCZHFRvGnKBs0SY7PJBo7QIXN+IRTUSJWLvZUlAJNkobeHmAl109JPDSJe+qNaGHh/EF10CgrPelsnG+wRfFsnB/OeuPj/AJNkvg4v5yK0qBJkjj/HXH+T84Ht7TExvmNZUurE5uiFGiSpNms5EJc/JbOzieN3Aq3cxLsCqrXKJWH8wcxs2hpsSOU6ZWVg96wUUJkE6UQlyju7Hysb8t7EtAKchfnQw9BG7EZnzqJklk4H7d+3JvzYa1TniQxXJxPoIuvMEkC6vcLG70lzUZvdlIU0CHIsClKnxTlnzvfqeW9e0McO0JZm2Hh/DCLgXF+mydBXHzVb4qSsFeAYOdbmgF57HAtsnF+4rMRLrydv/z3ovhJFJvQX1QexFp9dywalZ2aeRhuoO/MklJeZ37TRt/9KNUnchsvqEm5cvOBzG3m25Vc7n7VTc1YG2fOH9vBzc+G4XXmPkphED1Lu0TpLmd3+Ga93S35ItwYY2zHXEF0Cv1l+uqjc4BcfqXrIPl9/tw/Pgf56HF186u3aTyVRdi7odvGotZBuc+dCfgopYJ/CG4/pmF/AHRDtPZsx5zV2B8AKj2vwfCfsZeVxffnHTf2pIqvyU7oGfw7XRAEQRAEQRAEQRAEQRAE9Ws+AMVkYAJ7oU5HAAAAAElFTkSuQmCC",
        "23": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMA+BKANKXtB1kgxtVsSJTht1VL0H4AAAJlSURBVHic7ZtZcsMwDEMpa/fO+1+2I2+NrXwbaEfvBBiKgkFGEWk0Go3GX2HqdU1ZCMhaGCa0DhEZNynaR7QQif0uZcEfkduVqMdXZT6kJLQQiQtNqyRDI2VVkgOKOZxSwpqwhbGnElU1WJvrP6SoDh1OyXQ07VkXhzeVgwHXLd1hKicWpkSS0pyPv0tZcUryvWmRLjfelSBjwnCXAowJ7q5EQ2YxFQWWZXlK0RGcVH4xPYepFGaMknwllV8cPqkoNlT2ytK1rmpa1UxzPj5SJJUCKNlOWoEKtr6WAopwmcdURmpTsRxJRXFhZa6lgCJ2fCTJkg8SxfhTWHhMZcYoydymIhDitfPCJxWtMERJRWiSSqJJKp7DVIxPE8lOZcStD0aa7YH0FHfn2/iTeBa1HUxJN7AuagPPonbB3Z+8cCQm+ZZUUDeoq5KKQV0hVxUF5raWZ6cyMCeVgSOpkI0/a2QZf1RtJNmpqGoPiJPuy/lseEewU9FdnbEd3FSsGwNgTk21kiWK5K1YfcdgKnF53elCLcVdGt/NlVozXnu5d+/Q9MVW1mnvobc9N9r6jEza3jq9v+hx9bppjAETtmP6jNkmhHn7MGGG1W4+B1Xjk8v7WzRU1J6O9vXXCI0bVuNu9vZKu7hZSMQVV9t6tXyYkK+KRGIaVJe0mwrqHcJJLu1riyLY64y6fZEbsIvdfYEbsGf7Ah8I3ijui8n83913hd7mR/uiHyB/hgfPcI0KzmtgKYykAPv1oyLPGhj+f7LhBjOzFEZs4ClMXmn8TiQhl/4PHM0RNRqNRqPRaDQajUaj8V/4ARzOYlf4mtTcAAAAAElFTkSuQmCC",
        "24": "",
        "25": "",
        "26": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAZTwhCMOH8hX6leajLXjS3FVIsSW47LUAAAOPSURBVHic7ZvrcuMgDIW5mouNb9H7P+sONk7stBtMdwXsDt+/djLj02MhJEUlpNFoNBqNxn+GHkdH6sAqM1FNKsApAICe1mAK7KwlRTjxNAUACtoiul5SQrqgRBUM3dULkLYPUmzOZ2t+OSYyaChhijXGvh7IzEVKVlPY/kgmlo4KQh4XJYZnVCKOZ/sXI+mirlJsxrPsLo+G6+vxv3hkEzNCjJlnTqofWDJJ6SBGz7MeoE/kO8/2ow4Ale88i0jgZk1yzpoPpmQunh6/l9LnLeT4NcW+kbWqHCKRO2TT4j6Eyg6rxRSYc7nijoLtt4zVXIh9LlN01BRbjSkqV+bXqhpTaDWmiPnfMQXWakwxcuSVmAIAU5cjscg7UrwYdGeWmAYlQwLsLS9sihR8CGLUqbFGml98wvgWSHfT/pMaC1YHcv/cUwyaFhYtmZ7DL00nzCQjoqZMfij3FKNeNuXvC+mXHITUtA4xJfPJFI8McZy54/guSAeswLWQWkdiueKSTVkNUqzYmx2HoHJ68OP9YJwgHa0Ouu1zTJqQTrbGbSlSXDv/+OF1qr2NUxFTBkJ4t6djY3VRU7QYw5X8YMfM7j3RZIqUNdyAcnllIVqkjuzNddDjTZkQ6koR/uKonmdRW9AUjzrVkFukYBTbE8S5zPa32NoTTeY60jO8HziU0YaEG8yDwzdluaPEx8rABHLR9LgpxWe31YsR8v2F/SVYtDq4iFnEZqNxJerINyTFMoWwhBeEPe8RNDoI/AJGzt/gQ7QZe8PMaFOW5eYtdFbTIbXvoks6SBsKSwz7QfiqAalppunh61MwihadHL7bIGoRlYQvgJGrriR8wVe8upbsCzD5DZMqwhcAJMY4l9/YkfiOGUGMOLqeVHqErCe6n70lMPbvx4yTAGqSU/KJwih66cg00WxMfFkPgocek5Iw7tIPu/mNSI4lPn0/CSNWVYGU441WyAR0SmugOtwNimWuoJAJ8KSeSe2TMixoUsLr5dbYIuHSSgiDKmZU5e+Bn+Q7/5ZIwSW+KxgT7xMsId9hbyPpMGOPk2FFa5nLR23aRZBpRWu5UXPmWrxx0XyXbzlXnC4CVXo51z3zHd2/yytkikeEi8AvCSxSFdxYJsdFsH8js16Olcm2gXpu34bjAl5P29Qow90I/PznuyMTq+ymfIVbhd2b3Ud3s+mL/gPcC8HGSpQ0Go1Go9FoNMif8wuh9jD6sbLCnAAAAABJRU5ErkJggg==",
        "27": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAb+KEpBnrkvIl1V0y+T4PxbQGS64uZ/oAAANKSURBVHic7ZvbsqsgEERBQO4Kyv9/6yk0Jl6ju04YeGC9JlV2mmYYgSBUqVQqlWLpNelQETAXgqAGFQAOkbYAMayZpJQgRoYPPK+Ywa20BJ41wN1Gi80qpsdqLSbvbGJ6IyZvgHvdlOMMX0vJOptku5OSbzbxg5IQLM0hRtoTKSG0fizClAnhxwFUiRThEgsrhoeveFOEKRMWLL803EGAlJg7U4IwWZNi+ThqN01y1eUrtCEEMVeU0YnGM5TTFKuXjzuZefo4lAF+mhRazupDM0jh59NXwSuRVzUFF7Qka2Al8kuhpbC9Cr1WEnsVwC7OnBbatRgzlNGnhNjfwoiRN6a8MtMVYcqM19mmTwMuhp/qEMTIjhxUOg1uSjMng/F9jqwzwKbo5WNG9+MkOlBTVL/6Bt+J8QNkoaWb75htZiyDnD5+98M3YhJJoadKTp4mP2LcavQAVh9+/O57No3AhZafjIKkjRAKg68+Cp+IYWPX51h9FE702Odtfg4x/EZJXABgxMjbrYPLzOTqU7rkSvpHzVvC5e8DeWhK+s1+dmzSrsWk3bglz5XEUXJYDgWYMiOoNn26E9S/4rgeJXsJGoZMprxplaMTnmY0ZYf9hRL2sKZ8pynGlPALKf3DpAibXAp5JMQpPPrEUtgjU1rGBoRGmlQKeWTK0ml3/PL9HsgU9WlTJFY2jRTyyBS/LvKDIe74A9r/lmIfSQlKb1ccqblXrf2pK/6ZlLiZsl9lejNqwmcw/kHnoO/DYueouuS72ey2rSXLO/LJG2vSmzMHBIv7KgLm6HIg31bE+fmzGIDjMXMdX7E8XkMdfmj11ZTXbSyY4yl2Xu2a95gMFO6kbDyLL9msEenn0HV8BdbE+6m8xRYL8HBK+su7EL3aLIu54tvK2RTg00O2rb5tq3y8bRX7zgbUlIhZx9eZ+a0LA94TWdHjT3ztPCgxKfCmRKT/9CI4oyn7+GqEBhVbbZSJ/h1f202mgJW3b82Diha1cBu33+JrMyZlQdIlvvmScogv/DWNIz2fjMk9PjPze3sJtiA04NjXQt9euUDSECz8RdtztApt7r9dLPRcFDChX3ROwV0TvIOcHWhWKpVKpVKpVCqVSqVSqaBf8w+6OuND8ed7XgAAAABJRU5ErkJggg==",
        "28": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMACRfIMySL+rFGm+bw1116a8fgGnIAAAJrSURBVHic7ZpbsqMwDESN3w+M6f1vdioQkpDcmpsvWjOls4KuRrZbEsYoiqIoyv+DH2UyIigAcjESGLiRiwl1kN1ZNylA7WieK8WnuxYgB66UqR5KZrIp5mlLZSsx5m5LoptiTGhSTDFl3kwh1+xG3kyJRsZ1CzQ1RaYpkzhTLFuHEVUpaXt95JgyxJiS+MfHlr4/hJkspLi+PT4AHFmKOyJT9OSqXQ4ljt56uEeiZZ/k5ZmuyffbdJiSWi9CKqUHK6VSVq4O64+WMDXu8Sn7HSvAlOlFSeeasj6VYBFjyuxlHGPcqjZIuNtAD00LThCTit1bdQl1O85KiAHBvplCfAmjmEoxe69xkIqMwASuKeZlMgrM1MwUpZgS1iSkUlYxx8e+3SlezEWb6YNiCaZU/M0Uf6GycEwNdubXzDT5mtJgmdLLQ0so+UPchaYA6HWspayjtotb54pfuWgM5j9M+YEqxRRc04qEb0wB4nR5eCNKCd+ZcsVuN34jpF6RGcIpRWJe64dLc/SEbI007DSANKeNubm4WEKe3WhLBFa/bFw5P844kSutLyxnU7oxJSegEwaT+WxKy9HYRIlO5awESBgDiOH6D1TPOrJrbjTO1sWdpazW+kwaq7i37+NiY62i8nut3E6Rl9D93HCkBUN4GdPeof3o5SBFy/qphHPVmp9MYa0Zyo9aUmZosWMPSimfCpizu/S3lxh9sqdgSVpKLX234VVLIs3Ubd0nb1XCgLJML3827ZD/z7DP2o3sv1b81TOM33dTApSY/SmQ8HeT2Y40ef3/YKpSlCiKoiiKoiiKoiiKoiiK8k/xB5joWSBqxr2FAAAAAElFTkSuQmCC",
        "29": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAQlBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////1bZCPAAAAFXRSTlMALJ/7cYATw9/0IASykFULSWTS6jxOG6GEAAADoklEQVR4nO2b2ZKDIBBFG5FNZXHh/391KkoSY9A4pdI+cJ6mplLjDd5eaBiATCaTyUSpDKnhFpBOSVbBHWCeeq8Ki60DoJJ+pMQWAtBOSrzGFgK2mZSoAVsJDGFRGmwhAEWQYrCFQNVPSjqOrQTYbUwLXTAtwRYC5j6mFZMS6rCFAHmaFr8can+XpF+H8qOwI9kOz0gukJVUXTCK9zjlx9qlTzzFieSyE+XUsPHXmniGYRX3eHKvH1mkfCnxvgvyMMpw01ahTQlIg9WxeS/VhxTapZZSM+rjiNRSAIgOaW0BShTZVny+nJEWQwoAuKd93zGElvrJUgpaPaw/I/kRQC1Sm0AicSRwds0sFkMo78hG45lhSGljSuiA2FvfIMcNseRPBcaqFBEl3lMlDEca7UToWdqhXOu3aFy6pbFR0z6h3otkI0LnfyILh2jaBUqUHKX8RJGaXDw+Lf1+mkuj265HcoyOkctHO7vpi6u2JY3/P+KS3eMQabB3IIvzs7COPUi9d8+rKGHOTXw8alpNij1mlk8L88siWQ0AVbnHROphYVKcURnqrZ7J6D3JTzB5Spvlog977QtJGebJv5fnmvLTzdI7d7E97DfyrJOFzUZ/j4Upu8a0ZPkxW252NGfs3mz060YdaPRmqmmv6ZmG+IdJu25hebh5aKJrvZrQuWtWovuQU1rNCInGxlbZrcmYRL4gB/1K44HxY0oam1A1Byoj3/LgNMTdwC2j21zYQzbttg8/C9Q8Jf4b8UOK953efv/WFeqMMcywWubo+831jdv8tnXF5Ph3+gOmrdY3Pl01cyXtfrynaVt55OhIrxc4vXDlj9gYpRzZNxarSui01hUT+zL6w/76SI/L3VqD9io/1hR0z6Df6KOjQ1vGE8tsrWsynkMcCtR9kFg5+axqbrsinUj7nffLb0uluSPB30lqoh9/SwYzbnDGYpnsjsTwmXVFy4pGPFwkeCgO6Y6nbDlfmPfPioQOL+UdCRKLa8rqaVSY9o5Ebeb2VUIzM/A6JNLU5w18VgjKjwEDTX8K48SXlCmSEQ6n7NO+vZkPGHDuSJBQI6l5n1QlybQxgn3VuJHoME934WVfFgYMEvPC7TDZl/GE5WeVqXkQ8g5X9MirxbvBFT0z7dIV/r1SCPZNfntl3b4S/wryRCl9fxctpHgmXnxqJxHT7QKuHy3UTXBCY9/qfMHZTf7zAwB4e5c4ymQymUwmk8lkMplMJpPJZGDOH3DVwExeHO33AAAAAElFTkSuQmCC",
        "30": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMACaITIFRu9OPDkUMu0n6vORDPa9sAAAGkSURBVHic7ZkLjoMwEEMnIeRDIOD7X7YqImilPcBYqt8JrNeEeKZmQgghhPgF1qMZASH1qwJGQMeN0UQ5jYCwASjdGLgKiRSzSCOlA4hGwQmU3VikbMZAaEBJxsAKYBgFB1A5pGQaKaECx2IMDADZGFi+UoIxMGikpApQtDe7pazGwM4jJQK4jIGdpxxEGikXT41sQOGQshaWxmQNwJFZGhOA0/9VXr5SQPGxXZ8k/sclHGCxkmeSyNCYbvxHsUEjJfFI2WiuT3qluI9iG42UqzxJ6sLQmG4yQ40kkXLSSOkzif982mjewXUmaZLyvxw0nsbUvaNkGinpfQfdR7HB15jg3pgGj5RC05jilOK+vN7fxpRoysHwTtKnFP+N/kkj5XpPSiD4V46uMZkzgVFKcE4SCBvTybNj6t5RMs31SW9jKttCcn3g/irn6SSfQAwMlWn7zoZlYXiTt3v15RrlmOfEUnPe75R5VmL13gTiD835BtUZ5PD+rlh6FrXVfSg0s94ouuTNMgrBfPqwN4rf52Z339MKIYQQQgghhBBCCCGE+A0+fZont59CIacAAAAASUVORK5CYII=",
        "31": "",
        "32": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAyJwQ8CA6ZOCAsFDSzYLhAAACeUlEQVR4nO2ZMW/TQBiGz3FjJ7CAWDrc0AKjhwyRYGBAQqqE5KFMlSoPFV2K5KESE1IGKjaUAaliQRkQM0M3OrAkuE1anh+Fzqa0s98PweDvBzy62M+9957j3D+Z+M22AWXIwgCzBk91ygTOdYqHOzIkAU5kyi1YyRBXwFKnZPBMp+SwoVM8GEiXcSkz+jF8VCGJ/8JcXkoE/JQpPeCtTIkzOJQpLqXSIS7iwoBS8sOAklno3zfRv2egv3Nji8h1M4PIdW5q49zKYCkDi8h1pUXkOs+H/8e5hQ5xhYVzr7zuXOqBPZUyw+CYj3MMjvmUaqrH/4ClgXPf2aIaqRTPJ925BErOVMoBC4P4n7LQnUsBvXJEWDhXBop8FPlAUV90P0DkcOnVFHUXPakpGwbZgprccW6hS4qFLoOaolaxSU35bOEcJ/pNEbnn9rDwvzDxPxP93znau3JOOEUmrA7dENH/Aqrjxrm5FpTLSPW/CItIVf+zQInEcImDbPuF6P+Q8E0hEx/uWvgldXKv9rVE2K51mQudYwrV3YfNXmwt3W1uzGVbTHST0noflcD99StK2z2dhYL7Z0Eta3e/3j11WxC069XOff0NaVu7x+GRNm1B2NOz4FyT3LT/ADoNuT8WX3QKnDVtYZPWtXtQv92Q3NXoJc/bQVx4xVt1zi2c21EO5+ogUITi3r/eQUJZSDwcNRSluA9zjr3eCl9Uo8cGVexb0xbeq3eRLFBee/FDh6+dK8XqMszhws3UvyJ24TzO5QvwKfNH+gU4zlg3+OiSeP0C7JxL83cGFLerHNLXc3rPGUy8abKY5IEFpZtuuummm2666aabvzq/AC//vQHtPzEjAAAAAElFTkSuQmCC",
        "33": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKBAMAAACHqc9XAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA4yChYHhEwBCPkDBinGe9AAACjklEQVR4nO2YvW4TQRSFrze7ayMoEMQixRYrBRrkAiKRaoskFGlcGEHpIhEdcoFE64KCJhIFD+CCB6AA0dKsN4mVcB4K7c+sx5aQ2HumQnOqxNJ82rk/586MiNd/osHr1AHlHHs85AK4piFxAlyxkMECQMFSzgEgJyEXJQT4SAel1HeKsqgYwBEDiRoIvjKUz4bynqHMDOW+i7BgyVDmhsK0wMBAqBaIW0rhItFYEZR+S7klKPfgIkezlvKMoEwNJE9dlMslAZHExYZiJxu646JyZeqio8M2z8yGRk429M2JRWWGciYO6n+lWr14WEczaoruRgOJgKLGPE70we0DeFD/Gc7VTRRZoQgyrXMPMqvOglfaRN/NmuR+epOKnD5SVu6opkQJVbWL+rwy5YwlqcZPwM3EEPhtWlpVcZX6wK6I9Lhp9gvAMJUxN1mzanmqr1sxUQVWnLWErVECmGgpPZvyRUsZ25QreqwybhlgQ43TdNUO0I7ncrjqbgAj4OC5hdGdl8dAGhyvKTdEQ59y8Q1qN7BKT2UxSVX1PTIwP6ojz4wNb7oxo4lWErv09IeXHbg4u/esbxmmTvq60GKSjY5cHZH3olr5CRncWvmB+nT5FpYOlVfXQvbt8JSDrpuSctlSJLQxzWnvnxW2/RNneifvV4uq9Aa27U06D2o0Dze27XV748o2JvTa9i67N/Sy/X9fFZhw2yifNKm67t7QE5s7736pHtdFb7dgnfGJYlDndu+UGb/VueWh/fPLD2fKht7tsm7rWzIXbil2D6rdUtZlxt1fj9Ut+LfQ7Ok/Jvypa8FtPU1cUMRkinzyjjP+eUCMW1Ivu8Yth8Lr3QvuwdvLy8vLy8vLy8vLS0r9AQ6r3jfhG43XAAAAAElFTkSuQmCC",
        "34": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAM1BMVEVHcEz////////////////////////////////////////////////////////////////P0YphAAAAEHRSTlMAfSPDWBTV9gfmsZ1EazWMCaEo/wAAAlBJREFUeJztmtluhDAMRbMvEMD//7UVVWmnHUjISLYzqs8zElfGsW+MlRIEQRCEt8VNYVq8GgANO3Eq3EKUgYOsDa+U7VsKAEwu8SlJ+VEKQN7YQlPgCcsUmulZCkCcV3olHi4I5MdbX0kBiAutlHAtBcBRKllrSsBSSpmrUiKhkhSrUgKhlKWqBDZCKbYuxXB0Qvas3QAGOcvpTyf8QyTsRK4elJm7E/6wDpO0Afv9Xlv7ZY4qnZCiqPjwY46qnRDfJmzHe+LcqLSfD02I+RLa7/8tBu9GkjulQOY6vyegfSJTdwUn4H2htdGMSav/uvVERiO3QXc7NBn/Tr/cDgv6nd52fCPci6vpUbKHBs9F6U4piNeQ3CsFEt0go8U45d8iKfHd1R/D/Js5WN2dtBjlf+2PB5b5D68pQXAK/kUlgb/IHixDlLad6OmvpjsnaicEJUq5VlxsKk8FsLBM32BPC68DhelP+VZalDmie0p3t5b55QiN4emE5fHZ9TM0WGMW31fLktvQ/JtmvWr0NCHCnx2lrgSnlr1UVCino7GqJBNOR5d6UGSkf4KM9E+Qkf4/H+nf74SU/7czvat/+05YxumEig4/jn1LSzUstEtFplbisqZdnHHV80y7/OXrvZl2+WttWH7K5a+kG+O4TNkWp3H6omoMWSilKD+PsmulqulLvA2nrtOX0i0cGMtucRvpy7SL7Gfeo/yLEhjdQiN9WRfXjWWyuI30JV1rraYv5bDniq/BPmPSPuAXa/UAQREEQRAEQRAEQRAEQRAE9cgHVcy84CktGrsAAAAASUVORK5CYII=",
        "35": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAObwDXO3L+IlIFS4L4yCerW7YfJtXs5IAAAPOSURBVHic7Zvd1qogEIZBQEARRbn/a93L1Czjp90Hgwc8p7nyDV6GYYYQqlQqd2DhthU9ugHargwNLi0EIfGQYu2sSyshwy7F0tJSKN+VsJJ2kbJHqDkGZSwopOF2GM0xP1zmeImmX4w1PiZmpyXphZCRcdbSLvLU9K7EmnyLcxB96Hf2FyUsIv0XNHt+/RgYmuUihYv0XjFvBlg8MVQ9o8nJmHhgVHsZ+Im65ol+KrF2TOtc+fmG2eHIZzR5m6S0QW5yvaPpIyt5B2cy7SvDxZOjzS9lcb/jssG4TLs+lHJvJrNHip073yo7EQmVIOfC2FheBDtNaznObtqNQcdM26Rcy73bAxvmI2+7kDR1EgEldjp+tB7ibvorymvat1d5DDUCmdaesfS6NeTIJ0nAtCv7AsHuT5uEStA1BbnSByMthYi0O4N6PNWx0KcQprWWb4kURKSVYSVrIiUwQm1w9pKg3NH8HTYJd6SdEipB0v2OL5FgkTZG0kjrW6Pf8bJtZw+1YRKf3NUfZiipaVeoZ52uNMH1lb6yovDoDqW27fyf5Tm5I9SZ1rGoh3UnJNrMEKZ9QU7X1KjdXUk86UHGIly/vDqDiS68NSQ37RtKin1o2uVcqB7rZik3nRCksTRG4jOMEs0BTftTPpOj3PTbyZHrggXarEWVr5hsCdO66D2mTZnTfolwD0qBwn43xw71UBBPpC1Q2Cdu0+Yp7IfxmZbcxrQGXony1AEzFPZ/zMEFvBJUJj1w4akD2hZey+hWYi2H9q0OFC5Td14iGL+SMwcHgXiK13syzgB3ROwpXiO17wYLuUGkFbsqoP1Ze4rXj5xJbqfXGWZVm2Ck1bthILSocPGaqJFDJS44WrwWUNvR6JZCL08A3OnpPMXr84nH+TVpW8oN8ZiWC/V2foUIc2004M/Ji6VuAoVltt0QeDwBYdrJq+TYlafkvdT/asYftHKzdd6600aslsvp4wmABIrgSI/IWv7cjnJr6TxNlyKJv4z2iSBMu7OEevLO6y356GMNGg6XUxIZ6EQAJ/6kWyL2hTudEYQj9uUGrsBBnjc3PUyAxTAdse8MOEkkZl8BOEldxL6AIYaQiH0hj60oZl/Q2oIO37lpQW/006B9GWgBqAsnDxNoAahv7hFiVpQJJb45O74O9HZyv0dNl/rtm/Ry2jcor30hDiQX8AR8USGAokN524bsW+x/MXK+QSdigxDBivd8PfYtYdoTQlmJA6MTctoXPL59cuS+xf9sh9boy0qb9mTNfcua9gXTFOj5ViqVSqVSqVQqlQqK8Q+8tgp0a+e53wAAAABJRU5ErkJggg==",
        "36": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAxNQgChNm7uL5dzqGLKdWlgSzS4fxKD4AAANiSURBVHic7Vtr0q0gDKuKggI+u/+13qHg8zjz/SPOHbKB0ylpaCKHqKCgoKCg4H+BnRr6BmzPZrYtfQAjB1SdRxdCrZZSmPU8LdhShlSJtMZBWVNfSmE2K641W38rhbmvHYg1M/+ihlTSmpdSNKSU7qUSHhGVqOqtKRZRin1tikKLyoGNvlKKgTSF2rvACQaClWLuIteDBK5j5sl3Bj3JJLNsFKma+WjNhCnFMrMjmgJDhkq2BQO6m12kxsisW+kNjrSGeV3Ia+aZaGPmtSMgaUnExcodrTGSQkSBtK0MdLVQo2HTQ2HV3w+miy3CSD5F0tpIWh/nGuVA1Hkwc5xr0PSQnMgQSTsJaVGST7TGEwm9UeKGVtSu7+PEhI3fHXONwcDcbztp01zjSFtH0q6xRTOoEgpqMhwHE0gLWa6JaAk/3oia1ItcRhWKtE1U2rQlhN6ALkLlqngiwab6Y64RcLIkeVK3LQEBFfd8Mwy3LQFtlE1c+2sQaddLKXreJhxp/Z6+pWK0rLZfcacGcym3b0EGZoD8SyVB5wBQoioPWNxN+ADqAhqZjXW3PBA1y72wNKjJDpRRHk4zOEfLjrqA2rCbqH19ixQGWbHtNIM2lrIOONLqtL4pamKLMGhuZhB4E9LDDMaQB+g5lJjBcZG5dsjPP+7wHIG0KM9BNzOooJ7DiJqEkCclkxOetNpGz4H6brmckXFF+PTNHSFPCMCQ6RsfZjAFYBg0Wg4m9CaEPOj0bYohz5FM5sJ2ew6yrM/IeM1WScdsnD0u3iTzaUtIc531c/a6T0mS+bglhLmuVW6XXsdflATj3BL6jKRddpdeyxqwBJmvJxUOZoshTzal9fs3uKSoUllfx4EW0mYTFZcqSYp6yQ/GRm7CbErrd8+lO+HK1Z6akMXFc8scLVWDf77eyerY2+ny42b+fTJTZVxqW/d8PHRH1lXSvqU6OzJeQAHL8PaAKM1R7gXBx8eALwBstdPLwxCh7ZB/r23eEq8AAwgz7DU0vgLgl9XticqFuvlLIWpe6ZtvjfuTvigb1P6qL2zjJ/+gL8ymEi2qu331gNlUQTNeTglmU3/oa8BvsemkL460T/XtP/FPAhXUF0vaE82oYdnXE233ifMpKCgoKCgoKCgoKCgoKCgoKKAv4B9D6m9yw204fAAAAABJRU5ErkJggg==",
        "37": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMAWwv7u86DSBjbKOn0qTWUbqJItGYAAAK2SURBVHic7ZvbctswDETF+50S/v9nM5LSNnWt2EJAgtPhecgzAi6XS4helslkMpkMjYzCVS9HqMSaEIxeHXchy7LBSQ428lYizWcpoFS2nrMUp+ALhnOZytdKAICvFp8eSlFxkT5yivYPuoSQjLbd26Phihy2riKu+bIUAEib5Fyfv9Gxv6lckWqnUhy8JPjFxw69WV+XAkWnlIK2VXY1le/IpuWOEnALFQSDqVxRGjUmwn20ZxPtP5QmuykAgmybJ5V3SVuHpMInXH/HVH6jHMNJ+BwjhzCVHds9qVyhWmxlCxg0S1J5iuBJKk9IfhhTWRtU4lGihYFMxf/fpqIwleQ6SlKBJqYSMJUo4nggq3NxQ61PoBWtMwoAVQhAGeDgaZFUBPwAQ26xWgiUaGGjbkqRyCSZI7XFVqxgSEUb1XHK+8CfVOzZ5hGSSjj6LAv/SShOZzP8ScXjunGiSK8/zgBoi/R84vUxezTd/yJIpKbizOENA5jKUs3xz+GSCu31R+79MCtq/wQ5QnRrE68d6hhsM1NxGrmXNX0tEr1GYoyZyo6qY1x/9Bm5KPE43bp9FkM8bnKoSoI/kqgb485eqYUb0UllN+o6xCDQZepbakCVYkTJ1KMvhxvUfl6xKVUrcabyqzeU6yNwSSVk+rPZoLoRfK2B+sO3Qy2QPTVGPfpy9xujhD8uCeQHs7S3DyGlWs0DK8r7TZsnCdvtjZTWVt///Q35FieEaPlKw70t3/bPneSb8m3ydQEn3xZfF3DnQJOvC8+IL+Xbwk2Q8m3x+OAKv6XenyyviaXXTOUn8iWeqfzEfcPCgNOMpvKA3J4kcK532rEoPlN5Jd+epvKIXxWfqXwn3xbvIJDy5f+pQywNH1fdRJ7y5TGVR/ya6YeAWJxhNJXJZDKZTCaTyWQymUwmk8nyAbI8FL+J05yaAAAAAElFTkSuQmCC",
        "38": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMA3Vc2aM6aEvgjRYcHserAex0eEd8AAALlSURBVHic7VvbjusgDORiIIbc+P+fPSrdbdpd0mQbMNYR81wpI8Y2Y+MK0dHR0dHR0fGfw9kYrRMcYGOM0QoGcPJGxXA4Fj/cqEwjF33iykEfc2My+NY8hBA66bNw0GdN+gQ++igO+sSUyhz0gcilwI1LogKteQghMOXPzKHUqnQok2CAKVHhkD84p1TG1jwEQ32AjVWJLPQZ2FyFlo8+JlHRbKyk4VBqAxurMi7MrKThYyUt9WcdKhVAedxi1N31ob0Knbf3snrTI2j3bFUkZf6McC8fDxirsMlV6O+W8RXSAqarcCAstZBkyLGJxFYyxPeg69rXAyZx2MKYosk5ggweaZzrGUirHIFdPAlpK5oFH/+CIc5hZHEoCQu2jpQNs2+YPj9Qx73Y+Alm5KFPpVZExQ8BTPSJFRyMe5il5sfiP2ZSvDGyn1Mp3C6On+tTWiF9gUlhvxuuUDFFqZgrVCSHUluBSohsqBg2VPQlfYpmEFxiUnT4M12joijyZzDGyL3W9fEjrG9VFtDOOdSQ6+g32LH2VThvXZdTkuYKQnncWOj9gxl0ZatiMDs+znEe65baGfPzyQzWylYSTg88SnZC/qR13nG/prI+4XyilSy1aIdz9VMRdKrKnMrPrOmUhZtDF14PRmZLeTaHys/Z9XTck2epVJgkjDAffSCXanXmuPgUvnDW1dSasyvz9gu5a6jaO4j7Dt9cCuUSqOZKgJ52j2Uhn7PDnL/ksldQ5XcQtLnXFqAaxOXCd33KU5fv2QjeqcZwU8l8vyrgr5vhCyTbizqFrwwAANtD4s/8IVoJUMfDH7KVDTyciRE+Ofv3XT3pSoBL4UszbPqjeWimzx2wG77023G4E76lreSF8G2zXerWjJdstb2of1mEod3KE7yG79BykR9fw7ftdqk3lFblPdz6qL7t/2iB01cucdheBElpVY7/qcRju1Sk8OWwvZjggIU+HR0dHR0dHR0dHR0drPEPdYDAnSahRQ8AAAAASUVORK5CYII=",
        "39": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAANlBMVEVHcEz///////////////////////////////////////////////////////////////////+GUsxbAAAAEXRSTlMASZ/bGGay9csMVyc2j+h8BQNweLoAAAJpSURBVHic7ZrdbsMgDIUTwj+E4Pd/2albpm7p2gGSjTf5u+pdj8Lh2ICXRRAEQRD+E1U5Z41eGBDhxqbW2UKWxb5LAXD+SHWqklROKTc1NoaJUg74hp2nJfjvUmCeZVZgI0VdlPhpC6S3i5R9cqgAgDs1JdK/1zkaY0zM+h4qftVGFdqPEozy7uPvy7bv50/3/jGSIfRs2K9790yThZp4NemsHayvG/cOcWHWP6/NadtYmSgBAJu4KAEoRIapz31yJ9Km6ischZbwbBdftBCskWlSArBh1+WQ2z4KfmHOn0WnZYkyqhTbLAQAFKaS1P5NbumSGFj2xBC29PNWKEMfG56UvVMKoCnRhY0UA2ykWDZSkmMjZQcuUkJnqNyqENU9wbxcUdCNxb/cmlyDDPSD0zyF/lDB2kEZ2Eg5RpSUiScOin5lhRFQjmV2RAnKDaXur4RYe/kYUYJzDvIjUjyCkJqH1udg0qkAFE1xYz4vVAyMkNmEyhaYdCqAY1rDJlTCUKjYyqZTiWxCZUMJlcKmEsYRJTgvMZZNp5L+eiVMGFL8iBSUA+rq2ISKGlFSwv8OFcOnU9lHlHiUB1V9DNgW62Y/d6ftx0wCCqazycZ8BUp9Oxr3KXXtyFzs10vdbl/8AZpsWbxd9tgX48z+QG2yL0qnMmRflEr4I+E3+6I+LV9Ir+1LOuhUX9kXfSSifeSKyrQN9qUdVXxlX5Qz+5h9aQacHqimkJzZm9DKzQuVX+w7dXq/frXvvPnnh+aBPlSepW+h6FTa7Es/8vvUvoiDTV0czk027Z08KWkFQRAEQRAEQRAEQVgIeAOa4POt7aeUuQAAAABJRU5ErkJggg==",
        "40": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMA8A49utbJ5UoHF5td+Ip7rDBuJbCjUngAAANsSURBVHic7ZrpEqMgEITx4lYUef9n3fJIAl5hV2dIbfH9i0mquoZmaEBCMplMJpPJ/FdY5wrFRWoZhBBB3URtpfdwrKohgRQ1S3GuUdX6yNasKFht0SslVbGKKehUmrFeP7oavzLSNO1LTceblxLnGn/QsOCKvtT49AmkEGJfw+TTcmwZUit6pMQ5hSukVJ49NtRpZrNrWV/RlFIkW2fy3HLfM3mB4s5n7Ryrzdrf+p1beIknRXA9vj+8R8urjEmwCBAiDx3Meo0vRQcSin7xkXMt/iJQB0q0KPWr4RTIhan87t8srbZa207xWrhx6PyivJt+aeZu0yBOJVIyf+J4caWcJ5ZNVRQbfDXVhaKURciq4oFn2afXTFTTs/ARBJJ3tGjb9iqqlJN3oY07Gt8he9OuUii8WeyhkMC076qABqlhsxKfpoNhGj7IjsuPS3KQsA1w6tZH0XqlC39a7x+Btfkdxv+pgJ1A8jzSzvgmFQWolP5aSct8a4BOIH6tZOONaRHqoTbR9KuUwmv0djtkqEVxflnmfQHjKZwyw8SmLK0BGKPheGMa0nohUizaeylMV8FFk1P8LXO5aGkmj6kBr6esUP8/wpPPuhFmk3HKJs5qb8lipsQzrXOObQbiczg2fWmfEDNerj4fdhuOcGCpvi/GuH+UIjb5puZPbjKu2G/DzOUCDmZadxCWlh2Rzz0pdayUYDKvmNBnDL7Tnp9/6eDv96KdcrGYr4n4Xt4t4zrtJiX4jJ+AcW85stFFOT2flPUz86eOlnJ+urNOpO3G7dGc78OuemnXOlcMGPHg++TQlFYo8WAC+iTQuljAAv7JenYB9AVMFa0E/BSwi5YCuFmfkdHLTwttWh1dFPBrQxpdFOhzdB5dlAb6vruPlnJznfvKyO7Gg8cw0UWBvr4so00Lfm7Nf8e0KlqK/RnTtuPPxAMFrEQ0PxMPeLQS8NuwPloK+B0hjx2gzVUdBKKLCysobxUNUcEW6aUiy/7pIAOEUaWOB/H2vdydPo00V/ZFfuerurAv+nsq9sy+N48pnrSvRldCCOFHmS64L8RDbo49MXanf9F9cV8iurIv7nuKG6RKbtpD+6K+WHVE+bZvMtN+GJaEd/fs8xHEfCuY1LShfROb9oPu03TaTCaTyWQymUwmk8lkMpkMmfkD83PrX6Jep2IAAAAASUVORK5CYII=",
        "41": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAV8p3quFG9icYvQuXN+0EZYjVO+osLQAAAytJREFUeJztm1t6rCAQhOV+EUXt/e/1fBNNjs7oiEKDD/wLiDXQVBetaZpKpVKpVCrJkFwIyjrfFIfBDB90YSVyUQIAwpGiUvh/KQBAx66YEq02UgB6O5gyUoY3JT9qnCygpqU7UgBgYtk3qttXAgAq94lyh1JeJ4pnPFHefpMCoKZRFy6VFcoS84RVmeldjqUhEIQa8KW0QcsCABnOdvfutgdwk68xn0AluhIfcIh+pJC8KeELtivuuL+wNocUI+CUPlOrJudSeJkktwd5jBTRlgqVH4xYj5aEbBLjqctNSEUr7WsRJvffPqdCpk/65QGKMhPgcXj3Rr02kZ6/YtGhxSlhB41XsOztcYJ1+w6nKCeo56YNa34AMDyj9wGAfUbre8GwlZjf43NGrx+SqiFD+7NFi1Zrf6HZLFCkOZv9G9+MoYsiSHKHlf16fOPPms2KySUNs351YASXrQzdn78e5ZFGSjbYaf/U8GTjJwrRJJpqdPFKXlvb5XT576j4dWnn7q9csLEd4FK5vGhbPYpLhyd5tOWr3+TJ+V0HrzfqxVSWqtMFi4XNf4fONuVduQ3ydtNjg5MKwoVMbvd5b5YfSuzAadxmoIgDTds0QxNyMang7c9kLiaV9EfZ8+0vupBUUsdcPW+ImivOB19/EGLusM2oEVYbPeWhm4tVyOAPqxd26jGm4rYVF7E/S99IZSpdhKlE3p39sK24wDcKGE1Z242phM9UPuGx+zOIVVLxMWk7fnRs3KqNRSQVEX8N8o20T0gqM4bpizOVT5a+kQxbzlQO0vYdEo/23X0lqQdy/L6U1ANTw27bfvqBnL65MBjvozwRZW7texh3Y5ew3izLy/YyYX0+6P3V8sWc8mueedZ0jPfDhesQ9pTfhJcv/ktuSbMllXNYX85U7pRv6qRyCJkyJ5UvmFEVfnUY7L74rw7XeCZKvtoNLt8MHwcGlm+2L2fOyzePqbzT7ZVvoa/W/Wf5xg5q7/NRvjlN5Xv5oiaVU8xY4nO88/It+48fTdO0v+WbJamElW8ZU3mH0IxJ5Tu+HfGuP5eRz1iUSqVSqVQqlUqlUqk0QfwDHlM88ydw6VUAAAAASUVORK5CYII=",
        "42": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMAEwep2S/6mGEg80xAu4DkzHCdE3h7AAACwElEQVR4nO2a25KDIAyGOYqIcnr/h92Z7rq1Vq1Aor3Id8vM9t8QfgMJYwRBEARBEARBEARBACGs8yaNVuytJpPcziosbsoPBuk2VkfZ/S5Lhy3GyvzE8NUqN4tVaVGVaLX4rZxj/0p8WVUaUYl9/a1PqHXUADFFSnKWaErGv5Q8TTd+S1ByNkhKeFmmYGaLLt2fnAekHRqLleS8ZYNtaD+pECqkhKAmr+GM15ryrVnSSSiz64cmIQ8xPYySDIH/GiU5pztO8DZDa76IZVHQxtQalAxGa1g8nJTGzOXt5/hJaPogJUAljYdIgUpp+U73oEpybvDcCVhK/XkeIZP2QXX5IqGVVIdFgwel2uYMuJLautvCnuRfgv2Gk1xvcwIjKHU216MoqbE5AW1vM5O44tKDZHMyYyHvKmnfGez99lZnc7bmUopjcx5RSVmRy3HsbUaJ++2twv1lxqXgPCtkKeq8FFekJcSoyqqs7rwUxv3Jvz3IXnPOudVeFbhigRTGxjOfw2H5nCTmRgS0FMbSx11S60c/3+FIYS9djg02WhtuwJHCmIulF4kxIElhfD/kyja4Y4UUxvRU+Dgs0aQwlkKRYZ6qdCqlMGuK2isGUQrbSN+DYlmjSmFv6evbejUNUtg6fY9uMwZZChN9ONnn8aCfw00WXeQdUzlrLZE14yKMFIiWIv9L38MNShe18fTDTTvXkratr/2v6ZsaLv6H/0d5/07uL390ftDms4sH7wHp2t4zN2nP+fmHiiWAz29YUWdw8EpqX8BRZ1pKJlwG5Emf00qGCD8WsMu4f1/porlQiF3Z7GRmfOpHxGGjFcKZVUjkFaNxa7SZ3i/w8bowLBAbV7d43Vl5RfiVx053KWFz8TBj7siTJ/1/2gaYaRWA4R9/4+b8M8ZuMNd9ZQ6xCX22lSAIgiAIgiAIgiAIdhs/TOtG2h4YrWsAAAAASUVORK5CYII=",
        "43": "",
        "44": "",
        "46": ""
    },
    logo: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "",
        "13": "",
        "14": "",
        "15": "",
        "16": "",
        "17": "",
        "18": "",
        "19": "",
        "20": "",
        "21": ""
    },
};
    function createHud() {
        hudStyleElement = document.createElement("style");
        hudStyleElement.id = "hudStyles";
        hudStyleElement.innerHTML = `
@font-face{font-family:'GothamPro Light';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_light.ttf') format('truetype');font-weight:300;font-style:normal}@font-face{font-family:'GothamPro Light Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_lightitalic.ttf') format('truetype');font-weight:300;font-style:italic}@font-face{font-family:'GothamPro Regular';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro.ttf') format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'GothamPro Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_italic.ttf') format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'GothamPro Medium';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_medium.ttf') format('truetype');font-weight:500;font-style:normal}@font-face{font-family:'GothamPro Medium Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_mediumitalic.ttf') format('truetype');font-weight:500;font-style:italic}@font-face{font-family:'GothamPro Bold';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_bold.ttf') format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'GothamPro Bold Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_bolditalic.ttf') format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'GothamPro Black';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_black.ttf') format('truetype');font-weight:900;font-style:normal}@font-face{font-family:'GothamPro Black Italic';src:url('https://raw.githubusercontent.com/Fonts-Limit/Fonts/refs/heads/main/gothampro_blackitalic.ttf') format('truetype');font-weight:900;font-style:italic}
      .Old-Fixed-Hud,
      .Old-Fixed-HudTop,
      .Old-Fixed-Logo,
      .Old-Fixed-Main,
      .Old-Fixed-Params,
      .Old-Fixed-Cash,
      .Old-Fixed-Params__all,
      .Old-Fixed-Param,
      .Old-Fixed-Weapon,
      .Old-Fixed-Wanted,
      .Old-Fixed-HudBottom{
      z-index: -1;
      }
      #app .hud-radmir-wanted {
        display: none;
      }
      body #app .hud-radmir-info {display: none}
      .hud-hassle-map .map-mask{
       display: none;
      }
      .Old-Fixed-Logo img,.Old-Fixed-HudTop{
       transform-origin:top right
      }
      .Ammo-in-clip{
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-style:italic
      }
      .Old-Fixed-HudTop{
       position:absolute;
       right:1.4vw;
       top:3.4vh;
       display:flex;
       flex-direction:column;
       align-items:flex-end
      }
      .Old-Fixed-Logo{
       position:relative;
       margin-bottom:3vh
      }
/* Лого */
      .Old-Fixed-Logo img{
       width:23.52vh;
       height:6.8vh;
       margin-right:2vh
      }
      .Old-Fixed-Bonus{
       background: radial-gradient(93.1% 93.1% at 126.72% 6.9%, #e8e4e981 0, #ded8dfa6 100%), linear-gradient(129.39deg, #e6e4deaf 30.88%, #e2dddacb 98.06%);
       width: 32px;
       height: 32px;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 16px;
       color: #fff;
       font-weight: 700;
       position: absolute;
       bottom: -5px;
       right: -2px;
       border-radius: 50%;
       font-family:'GothamPro Bold Italic';
       font-weight:900;
       font-size:1.3vh
      }
      .Old-Fixed-Main,.Old-Fixed-Cash,.Wanted_row{
       align-items:center;
       display:flex
      }
      .Old-Fixed-Main{
       margin-top:.46vh;
       margin-right:3.46vh
      }
      .Old-Fixed-Weapon{
       width:16.6vh;
       height:16.6vh;
       position:relative;
       display:flex;
       justify-content:flex-end;
       margin-left:-.93vh;
       margin-right:.46vh
      }
      .Ammo-in-clip,.old-param__icon{
       margin-right:1.11vh
      }
      .Old-Fixed-Weapon_back{
       position:absolute;
       right:-1.4vh;
       top:-1.6vh;
       z-index:-1
      }
      .Old-Fixed-Weapon_icon{
       width:37vh;
       height:16.6vh
      }
      .Old-Fixed-Weapon_ammo{
       position:absolute;
       bottom:3.6vh;
       right:5vh;
       display:flex;
       align-items:flex-end;
       color: #fff;
      }
      .Ammo-in-clip{
       font-size:2.31vh;
       line-height:1;
       text-shadow:0 0 .46vh #00000080
      }
      .Ammo-full{
       font-family:'GothamPro Light Italic';
       font-weight:300;
       font-style:italic;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Params{
       height:13.5vh;
       position:relative;
       z-index:1
      }
      .Old-Fixed-Cash{
       justify-content:flex-end;
       color: white;
       font-family:"GothamPro Black Italic";
       font-style:italic;
       font-size:2.59vh;
       text-shadow:0 0 .46vh #00000080
      }
      .Old-Fixed-Cash img{
       margin-right: 13px;
       margin-top: 1px
      }
      .Old-Fixed-Params__all{
       margin-top:1vh
      }
      .Old-Fixed-Param{
       display:flex;
       align-items:center;
       margin-top:.95vh
      }
      .Old-Fixed-Param.health{
        margin-top:0;
        margin-left:1.85vh
      }
      .Old-Fixed-Param.armour,.Old-Param-Values{
       margin-left:1vh
      }
      .Old-Param-Progress,.Old-Progress__Values{
       width:9.40vh;
       height:.46vh;
       background-color:#0000004d;
       border-radius:.46vh
      }
      .Old-Progress__Values{
       display:flex;
       justify-content:flex-end
      }
      .Old-Progress__Values .circle{
       width:.85vh;
       height:.93vh;
       margin-top:-.25vh;
       margin-right:-.28vh
      }
      .Old-Param-Values{
       font-family:"GothamPro Light Italic";
       font-weight:300;
       font-style:italic;
       color: white;
       width:3.24vh;
       font-size:1.67vh;
       text-shadow:0 0 .46vh #000000b3
      }
      .Old-Fixed-Freeze_text{
        margin-right:1vh;
      }
      .Old-Fixed-Freeze_value, .Old-Fixed-Freeze_text{
       font-family:"GothamPro Bold";
       font-weight:900;
       color:#c0ccec;
       font-size:2vh;
       text-shadow:0 0 2vh hsl(0, 0%, 0%)
      }
      .Old-Fixed-Param.hunger{
       margin-left:.09vh
      }
      .Old-Fixed-Param.breath{
       margin-left: 32px
      }
      .Old-Fixed-Param.health .Old-Progress__Values{
       background-color: #fff;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
      }
      .Old-Fixed-Param.armour .Old-Progress__Values{
       background-color: #fff;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
      }
      .Old-Fixed-Param.hunger .Old-Progress__Values{
       width: 50%;
       box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
       background-color: rgb(255, 255, 255)
      }
      .Old-Fixed-Param.breath .Old-Progress__Values{
        width: 99%;
        background-color: #fff;
        box-shadow: rgba(255, 255, 255, .5) 0 0 5px 0
      }
      .Old-Fixed-Param.health .old-param__icon{
       margin-left: 13px
      }
      .Old-Fixed-Param.armour .old-param__icon{
       margin-left: 20px
      }
      .Old-Fixed-Param.hunger .old-param__icon{
       margin-left: 28px
      }
      .Old-Fixed-Param.breath .old-param__icon{
       width:1.7vh;
       height:1.7vh
      }
      .Old-Fixed-Wanted{
       position:relative;
       margin-right:6vh;
       margin-top:-1.4vh
      }
      .Old-Fixed-Wanted_back{
       position:absolute;
       right:-1.2vh;
       top:-1.4vh;
       z-index:-1
      }
      .Wanted_row img{
       width: 2.1vh;
       height:2.1vh;
       padding:.3vh .3vh
      }
      .Old-Fixed-HudBottom{
        transform-origin: right bottom;
        position: absolute;
        right: 0;
        top: 20px;
      }
      .Old-Fixed-ZZ{
       position:absolute;
       left:21.3vh;
       bottom:-98.9vh
      }
      .Old-Fixed-ZZ_icon{
       width:4.5vh;
       height:4.5vh
      }
      .Old-Fixed-Freeze {
        position: absolute;
        background: hsl(190deg 63% 66% / 40%);
        width: 26.1111vh;
        height: 0.65vh;
        border-radius: 1vh;
        outline: hsl(0deg 0% 0% / 20%) 0.2vh solid;
        outline-offset: 0.1vh;
        overflow: hidden;
        left: 11.1620vh;
        bottom: 2.7778vh;
      }
        #app .hud-radmir-radar__map { width: 26.3vh !important; height: 16.9vh !important; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 2vh; border: 0vh solid #000000 !important }
        body #app .hud-radmir-radar__map { transition: .3s }
        #app .hud-hassle-map { width: 32vh !important; height: 32vh !important }
        #app .hud-radmir-radar__radar { width: 26.3vh; border-radius: 2vh }
        #app .hud-radmir-radar { left: 9.3vh; bottom: 3.03vh; transform-origin: left bottom; }
      body .OLD-RADMIR-logo__bonus {
    background: #000000c5
}
#app .fuel__button .text:before { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMyAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMS40NTEgMUw0LjQ4NCA3Ljg0OEwxIDQuNDI0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPg0KPC9zdmc+DQo=) center/contain no-repeat !important } #app .fuel__container:before { opacity: 0 } #app .fuel__container { padding: 3.33vh 2.96vh } #app .fuel__title { font-size: 2.04vh; line-height: 1.94vh; color: #fff; text-align: left } #app .fuel__close { left: auto !important; top: -.5vh !important; right: 0; display: flex; flex-direction: row-reverse; gap: .5vh } #app .fuel__close:hover img { filter: drop-shadow(0 0 8px #ffffff80) !important } #app .fuel__container { background: #000000cc } #app .fuel__fill .range-slider-fill { background-color: #fff !important } #app .fuel__fill .range-slider-knob { background: #fff !important } #app .fuel__fill-data .text { color: hsla(0, 0%, 100%, .65) !important } #app .fuel__fill-data .value { color: #fff !important } #app .fuel__class-col.selected, .fuel__class-col:hover { background: #fff !important; box-shadow: 0 12px 22px #ffffff14 !important; color: #000 !important } #app .fuel__button { background: linear-gradient(185.93deg, #fff -22.13%, #e6e6e6 122.51%) !important; color: #000 !important } #app .fuel__button:hover { box-shadow: 0 6px 20px #ffffff40 !important } /* ---------- без сознания ----------*/ #app .death-waves { background-image: none } #app .death_mobile .death-bg-lines_danger { background-image: none } #app .death_mobile .death-bg-lines { background-image: none } #app .death { font-style: italic; background: #000000ba !important } #app .death-timer { font-style: italic }
body .info-card { background: rgb(0 0 0 / 70%); border-radius: 31px !important } body .info-card__data { background: rgb(0 0 0 / 60%); border-radius: 31px } body .info-card .text { color: #cfcfcf }
#app .player-interaction__icon { fill: white }
#app .vue3-slider .track-filled, .vue3-slider .handle { background-color: #ffffff !important }
#app .container { background: rgb(0 0 0 / 80%) }
#app .player-interaction-favorite:hover { background: rgba(7, 7, 7, 0.8) }
#app .player-interaction-favorite { background: rgb(0 0 0 / 80%) }
#app .player-interaction__title, .player-interaction__title_active { color: #ffffff !important } #app .player-interaction__container:after, .player-interaction__container:before { background: 0 0 !important }
#app .player-interaction__icon, .player-interaction__icon_active { fill: white !important }
#app .player-interaction__container { background: rgb(0 0 0 / 80%); border: none }
#app .player-interaction-layer { background: rgb(0 0 0 / 80%); border: none }
#app .player-interaction__inner { background: #00000080; border: .09vh solid #000000c2 }
#app .player-interaction-layer { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIwIiBoZWlnaHQ9IjkyMCIgdmlld0JveD0iMCAwIDkyMCA5MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNDYwLjgwMyAwTDQ2MC41NTUgMTQyTTkxOS45OTggNDYwLjgwM0w3NzkgNDYwLjU1N003ODQuNjk5IDc4NS44MzZMNjg1LjIxMSA2ODZNNzg1LjgzNiAxMzUuMjk5TDY4NS41IDIzNS4yODVNNjM2Ljc2MSAzNS4zMTY5TDU4Mi4zNjggMTY2TTg4NC42ODEgNjM2Ljc2Mkw3NTQuNSA1ODIuNTc3TTYzNS4zMDUgODg1LjI4NUw1ODEuMzk1IDc1NC41TTg4NS4yODUgMjg0LjY5M0w3NTUgMzM4LjM5OCIgc3Ryb2tlPSIjRjRGMUUxIiBzdHJva2Utb3BhY2l0eT0iMC4yNSIvPg0KPHBhdGggZD0iTTQ2MC44MDMgOTE5Ljk5OEw0NjAuNTU1IDc3Ny45OTlNLTAuMDAwMjQ0MTQxIDQ2MC44MDJMMTQwLjk5OCA0NjAuNTU2TTEzNS4yOTkgNzg1LjgzNkwyMzQuNzg3IDY4NS45OTlNMTM0LjE2MiAxMzUuMjk4TDIzNC40OTggMjM1LjI4NU0yODMuMjM3IDM1LjMxNjRMMzM3LjYzIDE2NS45OTlNMzUuMzE2OCA2MzYuNzYxTDE2NS40OTggNTgyLjU3Nk0yODQuNjkzIDg4NS4yODRMMzM4LjYwNCA3NTQuNDk5TTM0LjcxMzYgMjg0LjY5M0wxNjQuOTk4IDMzOC4zOTciIHN0cm9rZT0iI0Y0RjFFMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMjUiLz4NCjwvc3ZnPg0K) center/contain no-repeat }
#app .player-interaction_mobile .player-interaction__container:before { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABP4AAAQ4CAYAAACZsRJpAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDgtMjhUMTk6NTI6MjErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEyLTIwVDExOjE5OjE1KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEyLTIwVDExOjE5OjE1KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowODdmY2M4NS1mYWJlLTQxNGMtYmExMy0zNjk1NWFmOTgxMzYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNzhlY2ViYi01NWY4LTFjNDMtOGZkOS02N2RlNjgzYTYzZGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MDFhNDIxYS1mYjI4LWJlNDQtOGZiMS1hMDE0OGJlOTZkNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwMWE0MjFhLWZiMjgtYmU0NC04ZmIxLWEwMTQ4YmU5NmQ2MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOC0yOFQxOTo1MjoyMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowODdmY2M4NS1mYWJlLTQxNGMtYmExMy0zNjk1NWFmOTgxMzYiIHN0RXZ0OndoZW49IjIwMjQtMTItMjBUMTE6MTk6MTUrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5+HzAqAAAetElEQVR4nO3YwQkAIBDAMHX/nc8lBKEkE/TdPTMLAAAAAGg5vwMAAAAAgPeMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDoAuM8C22WmIJlAAAAAElFTkSuQmCC) center/cover no-repeat }
#app .player-interaction__container { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkwIiBoZWlnaHQ9IjU5MCIgdmlld0JveD0iMCAwIDU5MCA1OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNDE2LjYwNyAxLjE2Nzk3TDM2Mi4zNzEgMTMyLjIxNU0xNzMuMzk0IDU4OC44MjdMMjI3LjY4OSA0NTcuNjM2TTEuMTcwOSAxNzMuMzkxTDEzMi4yNDIgMjI3LjYzN001ODguNzU4IDE3My4yMThMNDU3LjgxOCAyMjcuNU0xLjI0MjUxIDQxNi43NzdMMTMyLjQ5OSAzNjIuMzY0TTE3My4yMjEgMS4yMzk1NkwyMjcuNjM2IDEzMi41IiBzdHJva2U9IiNGNEYxRTEiIHN0cm9rZS1vcGFjaXR5PSIwLjQiLz4NCjxwYXRoIGQ9Ik01ODguODMxIDQxNi42MDVMNDU3Ljc2MyAzNjIuMzU5TTQxNi43ODIgNTg4Ljc1NkwzNjIuNDQ5IDQ1Ny42OTQiIHN0cm9rZT0iI0Y0RjFFMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIvPg0KPC9zdmc+DQo=) center/cover no-repeat }
#app .player-interaction__container:before { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABP4AAAQ4CAYAAACZsRJpAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDgtMjhUMTk6NTI6MTgrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTEyLTIwVDExOjE4OjI4KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTEyLTIwVDExOjE4OjI4KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOWY0ODBiNi1iM2EyLTRkNDctYjY3Yy0wY2I5NDY5YWIwZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0MzY0MTFmZS0yMzJlLTNlNGItYmY3Zi00Nzg5NDk2NjBlMmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3YTg0YzYzNS00ZjdhLTllNGUtYTA4ZS0wOTI3M2I3OGE5YTciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjdhODRjNjM1LTRmN2EtOWU0ZS1hMDhlLTA5MjczYjc4YTlhNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOC0yOFQxOTo1MjoxOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOWY0ODBiNi1iM2EyLTRkNDctYjY3Yy0wY2I5NDY5YWIwZTkiIHN0RXZ0OndoZW49IjIwMjQtMTItMjBUMTE6MTg6MjgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4baN+oAAAetElEQVR4nO3YwQkAIBDAMHX/nc8lBKEkE/TdPTMLAAAAAGg5vwMAAAAAgPeMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDI+AMAAACAIOMPAAAAAIKMPwAAAAAIMv4AAAAAIMj4AwAAAIAg4w8AAAAAgow/AAAAAAgy/gAAAAAgyPgDAAAAgCDjDwAAAACCjD8AAAAACDL+AAAAACDoAuM8C22WmIJlAAAAAElFTkSuQmCC) center/cover no-repeat }
#app .trade-items { background: none } #app .trade-items__container { border-radius: 10px; height: 613px; width: 1283px; background: #000000ba !important } #app .trade-items-main { right: -1.2vw; top: -2vh }
#app .radmir-chat-input__input input::selection { background-color: #00ddff40 } #app .radmir-chat__before { position: fixed; width: 100vw; height: 41.66vw; background: 0 0 !important; left: 0; top: 0; z-index: -1; opacity: 0; transition: all .2s ease; pointer-events: none } #app .radmir-chat-input__input { background: rgb(0 0 0 / 80%) !important; border-radius: 11px !important } #app .radmir-chat-input__input input { margin-left: .9vh !important } #app .radmir-chat-input__input-lang { margin-right: 1vh !important } #app .controls-button { border-radius: .5vh }
#app .modal-container-wrapper { background: rgba(0, 0, 0, 0.8) !important; border: 0.19vh solid #ffffff0d; border-radius: 2.5vh !important; } #app .modal_violet .modal-container { border-top: none !important; } #app .modal-light__light { background: none !important; } #app .modal-light__light_second { background: none !important; } #app .modal-light__light { background: none !important; } #app .modal-light__light_second { background: none !important; } #app .modal-overlay { background: none !important; } @media (platform:mobile) { #app .modal_blue .modal-container-wrapper { box-shadow: none !important; } #app .modal_blue .modal-container { border-width: 0.3704vh } } #app .modal_orange .modal-container { border-top: none !important; } #app .modal_orange .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_orange .modal-container-wrapper { box-shadow: none !important; } #app .modal_orange .modal-container { border-width: 0.3704vh } } #app .modal_violet .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_violet .modal-container-wrapper { box-shadow: none !important; } #app .modal_violet .modal-container { border-width: 0.3704vh } } #app .modal_green .modal-container { border-top: none !important; } #app .modal_green .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_green .modal-container-wrapper { box-shadow: none !important; } #app .modal_green .modal-container { border-width: 0.3704vh } } #app .modal_red .modal-container { border-top: none !important; } #app .modal_red .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_red .modal-container-wrapper { box-shadow: none !important; } #app .modal_red .modal-container { border-width: 0.3704vh } } #app .modal_dark-orange .modal-container { border-top: none !important; } #app .modal_dark-orange .modal-container-wrapper { box-shadow: none !important; } @media (platform:mobile) { #app .modal_dark-orange .modal-container-wrapper { box-shadow: none !important; } #app .modal_dark-orange .modal-container { border-width: 0.3704vh } } #app .modal_overlay-violet-blue .modal-overlay { background: none !important; } body .window-bg { background-image: none; } body .window__before { background-image: none; } body .window__title { text-align: center; color: #ffffff; } body .window-table__item { color: #fff; border-radius: 2vh; border: .09vh solid #ffffff00; transition: .25s } body .window-table__item:before { border-radius: 3vh; background: linear-gradient(rgba(59, 59, 59, 0.161), rgba(59, 59, 59, 0.161)) } body .window-table__item:after { background: rgba(59, 59, 59, 0.161); border-radius: 3vh; } body .window-table__item.selected { background: #ffffff; color: #000000cd; border: .09vh solid #f4f1e100 } body .window-button { border-radius: 2vh; color: #ffffff; background: rgba(59, 59, 59, 0.161); } body .window-table__item:hover { background: #ffffff50; border-color: none } body .window-table__item.selected:hover { background: #ffffff; color: #000000cd; border: 0.09vh solid #f4f1e100; } #app .window-button:hover { color: #000000cd; background: #fff } #app .window-button:first-child:hover { background: #fff !important; } #app .window-button:first-child { background: #fff !important; } .graffiti-pattern__image[data-v-38ff9a6b] { background: none !important; }
#app .inventory { background: none } #app .inventory-container__info__container { background: linear-gradient(45deg, #000000ef) !important; } #app .inventory-action__modal, #app .inventory-extra__container, #app .inventory-main { background: linear-gradient(45deg, #000000ef); } #app .inventory-main__after, #app .inventory-main__before { display: none } #app .inventory-extra__container, #app .inventory-main { padding: 2vh; background: rgb(0 0 0 / 80%); border-radius: 1.1vh; border: 0; } #app .inventory-player { border: none; } #app .inventory-extra { margin-bottom: 0; margin-left: 1vh } #app .inventory__container, #app .inventory__controls { justify-content: center; } #app .inventory-capacity, #app .inventory-container__box { border-radius: 1vh; border: .1vh solid #ffffff26; background: radial-gradient(#00000003, #ffffff26 150%); } #app .inventory-container__slot { border-radius: 1vh; background: radial-gradient(#00000003, #ffffff33); } #app .inventory-capacity__bar__fill, #app .inventory-wear__bar__fill { border-radius: 1vh; } #app .inventory-capacity__bar, #app .inventory-wear__bar { background: #f4f1e133; border-radius: 1vh; width: 100%; left: 1.5vh; bottom: 1vh; } #app .inventory-extra__content { padding-bottom: .833vw; } #app .inventory-container__slot:before { border-radius: 1vh; border: .1vh solid #f4f1e1; background: radial-gradient(#00000003, #ffffffcc 150%); } .inventory-container__info__container { border: none !important; padding-top: .8vh !important; background: rgb(0 0 0 / 80%) !important; border-radius: 1.1vh !important; overflow: hidden; } .inventory-item-value, .inventory-wear { height: 4vh !important; border-radius: 1vh !important; border: .1vh solid #ffffff26 !important; background: radial-gradient(#00000003, #ffffff26) !important; } #app .inventory-wear__bar { bottom: .8vh; } #app .inventory-action__modal { padding: 2vh; background: rgb(0 0 0 / 80%); border-radius: 1.1vh; } #app .inventory-action__item__icon { border-radius: 1vh; } #app .inventory-wear__content { margin: .5vh 1vh 0; } #app .inventory-item-value { padding: 0 2vh; } #app .inventory-container__count, #app .inventory-container__slot-image { z-index: 1; } #app .inventory-container__actions { border-bottom-left-radius: .8vh; border-bottom-right-radius: .8vh; overflow: hidden; }
body .authorization{background:0 0}#app .authorization{background-image:url();background-size:auto 100vh}
      `;
      document.head.appendChild(hudStyleElement);
      const hudElement = document.createElement("div");
      hudElement.id = 'OldHudContainer';
      hudElement.innerHTML = `
      <div class="Old-Fixed-Hud">
      <div class="Old-Fixed-HudTop">
        <div class="Old-Fixed-Logo">
           <img src="${oldRadmirConfig.logo[1]}">
           <div class="Old-Fixed-Bonus">x3</div>
        </div>
        <div class="Old-Fixed-Main">
           <div class="Old-Fixed-Params">
              <div class="Old-Fixed-Cash"><img src="${oldRadmirConfig.icons.cash}"><span>0</span></div>
              <div class="Old-Fixed-Params__all">
                 <div class="Old-Fixed-Param health">
                    <img src="${oldRadmirConfig.icons.health}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param armour">
                    <img src="${oldRadmirConfig.icons.armour}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param hunger">
                    <img src="${oldRadmirConfig.icons.hunger}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
                 <div class="Old-Fixed-Param breath">
                    <img src="${oldRadmirConfig.icons.breath}" class="old-param__icon">
                    <div class="Old-Param-Progress">
                       <div class="Old-Progress__Values" style="width:100%"><img src="${oldRadmirConfig.icons.circle}" class="circle"></div>
                    </div>
                    <span class="Old-Param-Values">100</span>
                 </div>
              </div>
           </div>
           <div class="Old-Fixed-Weapon">
              <img src="${oldRadmirConfig.icons.wanted_back}" class="Old-Fixed-Weapon_back"> <img src="${oldRadmirConfig.weapon[0]}" class="Old-Fixed-Weapon_icon">
              <div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">1</span><span class="Ammo-full">1</span></div>
           </div>
        </div>
        <div class="Old-Fixed-Wanted">
           <img src="${oldRadmirConfig.icons.weapon_back}" class="Old-Fixed-Wanted_back">
           <div class="Wanted_row"><img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.inactive_wanted}" class="wanted-innactive"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"> <img src="${oldRadmirConfig.icons.active_wanted}" class="wanted-active"></div>
        </div>
      </div>
      <div class="Old-Fixed-HudBottom">
      <div class="Old-Fixed-ZZ"><img src="${oldRadmirConfig.icons.zone}" class="Old-Fixed-ZZ_icon"></div>
      <div class="Old-Fixed-Freeze">
      <span class="Old-Fixed-Freeze_text">Freeze:</span>
      <span class="Old-Fixed-Freeze_value">100</span>
      </div></div>
      `;
      document.body.appendChild(hudElement);
      hudElements.push(OldHudContainer);
    }
    const updateFunctions = {
        show: (value) => {
            const hudEl = document.querySelector(".Old-Fixed-Hud");
            if (hudEl) hudEl.style.display = +value >= 1 ? "" : "none";
        },
        showBars: (value) => {
            updateFunctions.show(value);
        },
        weapon: (value) => {
            const weaponIcon = document.querySelector(".Old-Fixed-Weapon_icon");
            if (weaponIcon) {
                const weaponSrc = oldRadmirConfig.weapon[value];
                if (weaponSrc) {
                    weaponIcon.src = weaponSrc;
                }
            }
            const ammoEls = document.querySelectorAll(".Old-Fixed-Weapon_ammo span");
            ammoEls.forEach(el => {
                if (el) el.style.display = value >= 16 ? "" : "none";
            });
        },
        health: (value) => {
            updateParam("health", value);
        },
        armour: (value) => {
            updateParam("armour", value);
        },
        hunger: (value) => {
            updateParam("hunger", value);
        },
        breath: (value) => {
            const breathWrapper = document.querySelector(".Old-Fixed-Param.breath .Old-Param-Progress")?.parentElement;
            if (breathWrapper) breathWrapper.style.display = value < 99 ? "" : "none";
            updateParam("breath", value);
        },
        bonus: (bonusValue) => {
            const bonusEl = document.querySelector(".Old-Fixed-Bonus");
            if (bonusEl) {
                if (bonusValue <= 1) {
                    bonusEl.style.display = "none";
                } else {
                    bonusEl.style.display = "";
                    bonusEl.textContent = `x${bonusValue}`;
                }
            }
        },
        server: (serverId) => {
            const serverWrapper = document.querySelector(".Old-Fixed-Logo img");
            if (serverWrapper) {
                if (serverId <= 0) {
                    serverWrapper.style.display = "none";
                } else {
                    serverWrapper.style.display = "";
                    const serverLogo = oldRadmirConfig.logo[serverId];
                    if (serverLogo) {
                        serverWrapper.src = serverLogo;
                    }
                }
            }
        },
        money: (value) => {
            const moneyEl = document.querySelector(".Old-Fixed-Cash span");
            if (moneyEl) moneyEl.textContent = formatNumberWithDots(value);
        },
        wanted: (value) => {
            updateWanted(value);
            const wantedWrapper = document.querySelector(".Old-Fixed-Wanted");
            if (wantedWrapper) {
                if (value === 0 && !oldRadmirConfig.wantedAlwaysShow) {
                    wantedWrapper.style.display = "none";
                    return;
                }
                wantedWrapper.style.display = "";
            }
            const wantedEls = document.querySelectorAll(".Wanted_row img");
            wantedEls.forEach((el, index) => {
                if (el) {
                    if ((5 - index) / value >= 1 || (5 - index === 0 && value === 0)) {
                        el.src = oldRadmirConfig.icons.inactive_wanted;
                        el.className = "wanted-innactive";
                    } else {
                        el.src = oldRadmirConfig.icons.active_wanted;
                        el.className = "wanted-active";
                    }
                }
            });
        },
        ammoInClip: (value) => {
            const inClipEl = document.querySelector(".Ammo-in-clip");
            if (inClipEl) inClipEl.textContent = value;
        },
        totalAmmo: (value) => {
            const totalAmmoEl = document.querySelector(".Ammo-full");
            if (totalAmmoEl) totalAmmoEl.textContent = "/" + value;
        },
        freeze: (value) => {
            const freezeValueEl = document.querySelector(".Old-Fixed-Freeze_value");
            if (freezeValueEl) {
                const formattedValue = String(value).padStart(3, '0');
                freezeValueEl.textContent = formattedValue;
            }
        },
       
        /*freeze2: () => {
            const freezeEl = document.querySelector(".Old-Fixed-Freeze");
            const isVisible = window.interface("Hud").isNewYear;
            if (freezeEl) {
                freezeEl.style.display = isVisible ? "" : "none";
            }
        },*/
        
        greenZone: (isVisible) => {
            const greenZoneEl = document.querySelector(".Old-Fixed-ZZ");
            if (greenZoneEl) {
                greenZoneEl.style.display = isVisible ? "" : "none";
            }
        },
    };
    function onInfoChange(type, value) {
        setTimeout(() => {
            loadingNotification.style.opacity = '0';
            setTimeout(() => {
                if (loadingNotification) {
                    loadingNotification.remove();
                }
            }, 2500);
        }, 1000);
        if (updateFunctions[type]) {
            updateFunctions[type](value);
        }
        const hudInfo = window.interface("Hud").info;
        Object.entries(updateFunctions).forEach(([key, func]) => {
            if (typeof func === "function" && hudInfo.hasOwnProperty(key)) {
                func(hudInfo[key]);
            }
        });
    }
    function updateParam(paramClass, value) {
        const paramElement = document.querySelector(`.Old-Fixed-Param.${paramClass}`);
        if (paramElement) {
            const progressBar = paramElement.querySelector(".Old-Progress__Values");
            const valueText = paramElement.querySelector(".Old-Param-Values");
            progressBar.style.width = `${value}%`;
            valueText.textContent = value;
        }
    }
    function updateWanted(level) {
        const wantedIcons = document.querySelectorAll(".Wanted_row img");
        wantedIcons.forEach((icon, index) => {
            if (index < level) {
                icon.classList.remove("wanted-innactive");
                icon.classList.add("wanted-active");
            } else {
                icon.classList.remove("wanted-active");
                icon.classList.add("wanted-innactive");
            }
        });
    }
    function initializeHudProxy() {
        const checkInterval = setInterval(() => {
            if (typeof window.interface === "function" && window.interface("Hud").info) {
                clearInterval(checkInterval);
                const hudInfo = window.interface("Hud").info;
                const clonedHudInfo = JSON.parse(JSON.stringify(hudInfo));
                window.interface("Hud").info = new Proxy(clonedHudInfo, {
                    set(target, prop, value) {
                        if (target[prop] !== value) {
                            target[prop] = value;
                            onInfoChange(prop, value);
                        }
                        return Reflect.set(target, prop, value);
                    }
                });
                window.interface("Hud").setServer = (serverId) => {
                    onInfoChange("server", serverId);
                    window.interface("Hud").server = serverId;
                };
                window.interface("Hud").setBonus = (bonusValue) => {
                    onInfoChange("bonus", bonusValue);
                    window.interface("Hud").bonus = bonusValue;
                };
                window.interface("Hud").showGreenZoneTab = () => {
                    onInfoChange("greenZone", true);
                };
                window.interface("Hud").hideGreenZoneTab = () => {
                    onInfoChange("greenZone", false);
                };
            }
        }, 100);
    }
    initializeHudProxy();
    createHud();
    window.onInfoChange = onInfoChange;
    setTimeout(() => {
        hudElements.forEach(el => el.remove());
        if (hudScript) {
            hudScript.remove();
        }
        if (hudStyleElement) {
            hudStyleElement.remove();
        }
    });
  };
AddHud();

body #app .hud-radmir-speedometer-secondary__data__before {
    background-image: none
 }

body #app .hud-radmir-speedometer__after {
    display: none
}

body #app .hud-radmir-speedometer {
    right: 1.2vh;
    bottom: 1.5vh;
    padding-right: 1vh;
    transition: none !important
}

body #app .hud-radmir-speedometer-main__hidden {
    opacity: 1
}

body #app .hud-radmir-speedometer_helloween:after {
    background-image: none;
    width: 0;
    height: 0
}

body #app .hud-radmir-speedometer:after {
    content: \"\";
    position: absolute;
    width: 32vh;
    height: 8vh;
    background-image: none;
    background-size: cover;
    background-position: 0;
    right: 1vh;
    bottom: 1vh;
    z-index: -1;
    background: #000000cc;
    border-radius: .7vh
}

body #app .hud-radmir-speedometer-hint {
    width: 0;
    height: 0;
    background-image: none;
    background-position: 0;
    display: none
}

body #app .hud-radmir-speedometer__new-year {
    display: none
}

body #app .hud-radmir-speedometer-main__speed {
    width: 32vh;
    height: 8vh
}

body #app .hud-radmir-speedometer-main__turns {
    display: none
}

body #app .hud-radmir-speedometer-main__speed-fill {
    display: none
}

body #app .hud-radmir-speedometer-main__data {
    flex-direction: row !important;
    padding: 0;
    margin: 0;
    position: absolute;
    top: -3vh;
    left: 1vh
}

body #app .hud-radmir-speedometer-main__data-value {
    font-weight: 700;
    font-size: 3vh;
    color: #fff;
    text-shadow: none;
    font-family: 'GothamPro Bold';
    font-style: normal;
    text-align: left
}

body #app .hud-radmir-speedometer-main__data-text {
    font-weight: 700;
    font-size: 3vh;
    text-shadow: none;
    font-family: 'GothamPro Bold';
    font-style: normal;
    color: #bdbdbd;
    font-size: 2vh;
    margin-left: .5vh;
    margin-top: 0
}

body #app .hud-radmir-speedometer-indicators {
    width: 5.3vh;
    height: 5.3vh;
    margin-left: 0;
    margin-top: 0;
    position: absolute;
    display: flex;
    bottom: 2.5vh;
    right: 1vh;
    gap: 1.8vh
}

body #app .hud-radmir-speedometer-indicators__item {
    width: 4vh;
    height: 4vh;
    margin-right: 1vh !important
}

body #app .hud-radmir-speedometer-indicators__item svg path {
    fill: #fff !important
}

body #app .hud-radmir-speedometer-indicators__item:nth-child(2) {
    margin-top: .4vh
}

body #app .hud-radmir-speedometer-indicators__item:nth-child(3) {
    margin-top: 0
}

body #app .hud-radmir-speedometer-indicators__item:nth-child(4) {
    margin-top: .4vh;
    margin-right: 0 !important
}

body #app .hud-radmir-speedometer-mileage {
    height: 2vh;
    bottom: 1.96vh;
    right: 1vh;
    padding: 0;
    -webkit-mask-image: none !important;
    mask-image: none !important
}

body #app .hud-radmir-speedometer-mileage__container {
    grid-template-columns: repeat(7, 1.4vh);
    gap: .9vh;
    grid-gap: 0vh
}

body #app .hud-radmir-speedometer-mileage__item {
    border-bottom: none;
    height: 1.3vh;
    padding-bottom: 2vh;
    margin-right: .15vh
}

body #app .hud-radmir-speedometer-mileage__item-value {
    font-weight: 300;
    font-size: 1.9vh;
    line-height: 1.86vh;
    color: #fff;
    text-shadow: none;
    font-family: 'GothamPro Light';
    font-style: normal;
    transition: none !important
}

body #app .hud-radmir-speedometer-secondary_helloween {
    background-image: none
}

#app .hud-radmir-speedometer-secondary {
    width: 11vh;
    height: 2.5vh;
    display: flex;
    align-items: center;
    position: absolute;
    left: -2vh;
    bottom: 2.1vh
}

body #app .hud-radmir-speedometer-secondary__fuel,
body #app .hud-radmir-speedometer-secondary__wash {
    padding: 0;
    position: relative;
    left: 0;
    top: 0
}

body #app .hud-radmir-speedometer-secondary__fill {
    display: none
}

body #app .hud-radmir-speedometer-secondary__data-value {
    font-family: 'GothamPro Regular';
    font-weight: 400;
    font-style: normal;
    font-size: 2.2vh;
    text-align: center;
    color: #fff;
    text-shadow: none
}

body #app .hud-radmir-speedometer-secondary__data-value svg {
    margin-top: 0
}

body #app .hud-radmir-speedometer-secondary__data-value svg path {
    fill: #fff
}

body #app .hud-radmir-speedometer-secondary__data-text {
    display: none
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(1) {
    margin-top: -11.1vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(1) {
    margin-top: -9.3vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed.hud-radmir-speedometer-main__speed_helloween>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(1)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(2)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(3)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(1) {
    margin-top: -11.1vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(4)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(1) {
    margin-top: -9.3vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(5)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(6)>div:nth-child(9) {
    margin-top: 0 !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(1) {
    margin-top: -16.7vh !important
}

#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(10),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(2),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(3),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(4),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(5),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(6),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(7),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(8),
#app>div.app>div:first-child>div>div.hud>div>div.hud-radmir-speedometer-main>div.hud-radmir-speedometer-main__speed>div.hud-radmir-speedometer-mileage.hud-radmir-speedometer-main__mileage.hud-radmir-speedometer-main__hidden>div>div:nth-child(7)>div:nth-child(9) {
    margin-top: 0 !important
}
    body .authorization{background:0 0}#app .authorization{background-image:url();background-size:auto 100vh}
        `;
        document.head.appendChild(hudStyleElement);

        const hudElement = document.createElement("div");
        hudElement.id = 'OldHudContainer';
        hudElement.innerHTML = `
      <div class="Old-Fixed-Hud">
        <div class="Old-Fixed-HudTop">
          <div class="Old-Fixed-Logo">
            <img src="${hudResourcePaths.serverLogos[1]}">
            <div class="Old-Fixed-Bonus">x3</div>
          </div>
          <div class="Old-Fixed-Main">
            <div class="Old-Fixed-Params">
              <div class="Old-Fixed-Cash"><img src="${hudResourcePaths.imageAssets.cash}"><span>0</span></div>
              <div class="Old-Fixed-Params__all">
                <div class="Old-Fixed-Param health">
                  <img src="${hudResourcePaths.imageAssets.health}" class="old-param__icon">
                  <div class="Old-Param-Progress">
                    <div class="Old-Progress__Values" style="width:100%"><img src="${hudResourcePaths.imageAssets.circle}" class="circle"></div>
                  </div>
                  <span class="Old-Param-Values">100</span>
                </div>
                <div class="Old-Fixed-Param armour">
                  <img src="${hudResourcePaths.imageAssets.armour}" class="old-param__icon">
                  <div class="Old-Param-Progress">
                    <div class="Old-Progress__Values" style="width:0%"><img src="${hudResourcePaths.imageAssets.circle}" class="circle"></div>
                  </div>
                  <span class="Old-Param-Values">0</span>
                </div>
                <div class="Old-Fixed-Param hunger">
                  <img src="${hudResourcePaths.imageAssets.hunger}" class="old-param__icon">
                  <div class="Old-Param-Progress">
                    <div class="Old-Progress__Values" style="width:100%"><img src="${hudResourcePaths.imageAssets.circle}" class="circle"></div>
                  </div>
                  <span class="Old-Param-Values">100</span>
                </div>
                <div class="Old-Fixed-Param breath">
                  <img src="${hudResourcePaths.imageAssets.breath}" class="old-param__icon">
                  <div class="Old-Param-Progress">
                    <div class="Old-Progress__Values" style="width:100%"><img src="${hudResourcePaths.imageAssets.circle}" class="circle"></div>
                  </div>
                  <span class="Old-Param-Values">100</span>
                </div>
              </div>
            </div>
            <div class="Old-Fixed-Weapon">
              <img src="${hudResourcePaths.imageAssets.wanted_back}" class="Old-Fixed-Weapon_back">
              <img src="${hudResourcePaths.weaponIcons[0]}" class="Old-Fixed-Weapon_icon">
              <div class="Old-Fixed-Weapon_ammo"><span class="Ammo-in-clip">0</span><span class="Ammo-full">/0</span></div>
            </div>
          </div>
          <div class="Old-Fixed-Wanted">
            <img src="${hudResourcePaths.imageAssets.weapon_back}" class="Old-Fixed-Wanted_back">
            <div class="Wanted_row">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
              <img src="${hudResourcePaths.imageAssets.inactive_wanted}">
            </div>
          </div>
        </div>
        <div class="Old-Fixed-HudBottom">
          <div class="Old-Fixed-Freeze">
            <span class="Old-Fixed-Freeze_text">Freeze:</span>
            <span class="Old-Fixed-Freeze_value">100</span>
          </div>
        </div>
      </div>
    `;
        document.body.appendChild(hudElement);
        hudElements.push(hudElement);
    }
