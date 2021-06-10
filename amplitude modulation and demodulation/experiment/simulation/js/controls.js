document.getElementById("demodulation-screen").style.display="none";
modulate()
stopSim()

function startSim() {
    document.getElementById('start').style="background-color: #000;color: #fff;"
    document.getElementById('stop').style=""
    startMsg();
    startAM();
    startCar();
    startMsgD();
    startAMD();
}

function stopSim() {
    document.getElementById('stop').style="background-color: #000;color: #fff;"
    document.getElementById('start').style=""
    stopMsg();
    stopAM();
    stopCar();
    stopMsgD();
    stopAMD();
}

function modulate() {
    startSim()
    document.getElementById('modulate').style="background-color: #000;color: #fff;"
    document.getElementById('demodulate').style=""
    document.getElementById("demodulation-screen").style.display="none";
    document.getElementById("modulation-screen").style.display="block";
}

function demodulate() {
    startSim()
    document.getElementById('demodulate').style="background-color: #000;color: #fff;"
    document.getElementById('modulate').style=""
    document.getElementById("modulation-screen").style.display="none"
    document.getElementById("demodulation-screen").style.display="block";
}