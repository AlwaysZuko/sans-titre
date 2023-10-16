let Droite = 0
let Gauche = 0
basic.forever(function () {
    Droite = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    Gauche = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    if (Gauche == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    } else if (Droite < 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
})
