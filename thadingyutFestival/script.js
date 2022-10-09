            window.onload = () => {
    canvas = document.querySelector('.canvas')
    canvas1 = document.querySelector('.canvas1')
    ctx = canvas.getContext('2d')
    ctx1 = canvas1.getContext('2d')
    dpr = devicePixelRatio
    W = canvas.width = canvas1.width = innerWidth*dpr
    H = canvas.height = canvas1.height = innerHeight*dpr
    
    let rand = (a,b) => ~~(Math.random()*(b-a+1)+a)
    pi = Math.PI
    pi2 = pi*2
    pid2 = pi/2
    colors = []
    colors.push('tomato')
    colors.push('yellow')
    colors.push('lightblue')
    colors.push('white')
    colors.push('lightgreen')

    class Firework{
        constructor(){
            this.x = rand(0,W)
            this.y = rand(H,H)
            this.cx = []
            this.cy = []
            this.vx = Math.random()*2-1
            this.vy = (-Math.random()*H-H/2)/100
            this.l = 1
            this.c = colors[rand(0, colors.length-1)]
            this.dc = colors[rand(0,colors.length-1)]
        }

        update(){
            this.cx.push(this.x)
            this.cy.push(this.y)

            this.x += this.vx
            this.y += this.vy

            this.vy += H/9000

            if(this.vy>=0 && this.l){
                for(let i = 0; i < 50; i++){
                    fireworks.push(new F(this.x, this.y, this.c, 1))
                }
                for(let i = 0; i < 50; i++){
                    fireworks.push(new F(this.x, this.y, this.dc))
                }
                this.l = 0
            }
        }

        draw(){
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            for(let i = this.cx.length; i > this.cx.length-5; i--){
                ctx.lineTo(this.cx[i], this.cy[i])
            }
            ctx.lineWidth = 6
            ctx.shadowBlur = 15
            ctx.shadowColor = 'white'
            ctx.strokeStyle = this.c
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(this.x, this.y, 6,0,pi2)
            ctx.fillStyle = this.c
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            for(let i = this.cx.length; i > this.cx.length-3; i--){
                ctx.lineTo(this.cx[i], this.cy[i])
            }
            ctx.lineWidth = 3
            ctx.shadowBlur = 30
            ctx.shadowColor = this.c
            ctx.strokeStyle = 'white'
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(this.x, this.y, 3,0,pi2)
            ctx.fillStyle = 'white'
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(this.x, this.y, 80,0,pi2)
            ctx.fillStyle = this.c
            ctx.fill()
            ctx.closePath()
        }
    }

    class F{
        constructor(x,y,c,r){
            this.x = x 
            this.y = y 
            this.cx = []
            this.cy = []
            this.v = r?Math.random()*3+7:Math.random()*4+2
            this.a = Math.random()*pi2
            this.l = rand(25, 50)
            this.c = c
        }
        
        update(){
            this.cx.push(this.x)
            this.cy.push(this.y)

            this.x += this.v* Math.cos(this.a)
            this.y += this.v* Math.sin(this.a)
            this.l--
        }

        draw(){
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            for(let i = this.cx.length; i > this.cx.length-3; i--){
                ctx.lineTo(this.cx[i], this.cy[i])
            }
            ctx.lineWidth = 3
            ctx.shadowBlur = 15
            ctx.shadowColor = 'white'
            ctx.strokeStyle = this.c
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(this.x, this.y, 3,0, pi2)
            ctx.fillStyle=this.c
            ctx.fill()
            ctx.closePath()

            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            for(let i = this.cx.length; i > this.cx.length-1; i--){
                ctx.lineTo(this.cx[i], this.cy[i])
            }
            ctx.lineWidth = 1
            ctx.shadowBlur = 30
            ctx.shadowColor = this.c
            ctx.strokeStyle = 'white'
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath()
            ctx.arc(this.x, this.y, 1,0,pi2)
            ctx.fillStyle='white'
            ctx.fill()
            ctx.closePath()

            ctx1.beginPath()
            ctx1.arc(this.x, this.y, 20,0,pi2)
            ctx1.fillStyle = this.c 
            ctx1.fill()
            ctx1.closePath()
        }
    }

    fireworks = []
    for(let i = 0; i < 3;i++){
        fireworks.push(new Firework)
    }
    function animate(){
        if(rand(0,100)<5){
            fireworks.push(new Firework)
        }

        ctx.shadowColor = 'transparent'
        ctx.fillStyle = 'rgba(0,0,0,0.5)'
        ctx.fillRect(0,0,W,H)
        ctx1.clearRect(0,0,W,H)

        fireworks.forEach((f,i)=>{
            if(!f.l){
                delete fireworks[i]
            }
            f.update()
            f.draw()
        })
    }
    setInterval(animate, 1000/500)
}