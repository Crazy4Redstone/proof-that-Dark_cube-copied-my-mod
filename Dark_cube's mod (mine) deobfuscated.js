
function useItem(a, b, c, d, e, f) {
    var g = Level.getData(a, b, c);
    0 !== e && 331 == d && setTile(a, b + 1, c, 55), 331 == d && 1 == f && (23 == getTile(a - 1, b + 1, c) || 23 == getTile(a + 1, b + 1, c) || 23 == getTile(a, b + 1, c - 1) || 23 == getTile(a, b + 1, c + 1) || 23 == getTile(a - 1, b + 2, c) || 23 == getTile(a + 1, b + 2, c) || 23 == getTile(a, b + 2, c - 1) || 23 == getTile(a, b + 2, c + 1) || 23 == getTile(a - 1, b, c) || 23 == getTile(a + 1, b, c) || 23 == getTile(a, b, c - 1) || 23 == getTile(a, b, c + 1) ? (setTile(a, b + 1, c, 23), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a - 1, b + 2, c, 15, !0), checkRed(a + 1, b + 2, c, 15, !0), checkRed(a, b + 2, c - 1, 15, !0), checkRed(a, b + 2, c + 1, 15, !0)) : 76 == getTile(a - 1, b, c) || 76 == getTile(a + 1, b, c) || 76 == getTile(a, b, c - 1) || 76 == getTile(a, b, c + 1) ? (setTile(a, b + 1, c, 23), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0)) : setTile(a, b + 1, c, 55)), 69 == e && 0 == g && (checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b - 2, c, 15, !0), setTile(a, b, c, 69, 1)), 69 == e && 1 == g && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b - 2, c, 15, !1), setTile(a, b, c, 69, 0)), 0 !== e && 0 == g && 76 == d && (checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a, b + 3, c, 15, !0), setTile(a, b + 1, c, 76, 0)), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b - 1, c) && setTile(a, b + 1, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && setTile(a, b + 3, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && 75 == getTile(a, b + 5, c) && setTile(a, b + 3, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && 75 == getTile(a, b + 5, c) && setTile(a, b + 5, c, 76)
}

function checkRed(a, b, c, d, e) {
    55 == getTile(a, b, c) && e && (setTile(a, b, c, 23, 0), checkRed(a - 1, b, c, d - 1, !0), checkRed(a + 1, b, c, d - 1, !0), checkRed(a, b, c - 1, d - 1, !0), checkRed(a, b, c + 1, d - 1, !0), 0 == getTile(a, b + 1, c) && (checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a - 1, b - 1, c, 15, !0), checkRed(a + 1, b - 1, c, 15, !0), checkRed(a, b - 1, c - 1, 15, !0), checkRed(a, b - 1, c + 1, 15, !0))), 23 != getTile(a, b, c) || e || (setTile(a, b, c, 55), checkRed(a - 1, b, c, d - 1, !1), checkRed(a + 1, b, c, d - 1, !1), checkRed(a, b, c - 1, d - 1, !1), checkRed(a, b, c + 1, d - 1, !1), 0 == getTile(a, b + 1, c) && (checkRed(a - 1, b + 1, c, d - 1, !1), checkRed(a + 1, b + 1, c, d - 1, !1), checkRed(a, b + 1, c - 1, d - 1, !1), checkRed(a, b + 1, c + 1, d - 1, !1), checkRed(a - 1, b - 1, c, d - 1, !1), checkRed(a + 1, b - 1, c, d - 1, !1), checkRed(a, b - 1, c - 1, d - 1, !1), checkRed(a, b - 1, c + 1, d - 1, !1))), 23 == getTile(a, b, c) && e && (checkTnt(a + 1, b - 1, c), checkTnt(a - 1, b - 1, c), checkTnt(a, b - 1, c + 1), checkTnt(a, b - 1, c - 1), checkTnt(a + 1, b, c), checkTnt(a - 1, b, c), checkTnt(a, b, c + 1), checkTnt(a, b, c - 1), checkTnt(a, b - 2, c)), 23 == getTile(a, b, c) && e && (checkLamp1(a + 1, b - 1, c), checkLamp1(a - 1, b - 1, c), checkLamp1(a, b - 1, c + 1), checkLamp1(a, b - 1, c - 1), checkLamp1(a + 1, b, c), checkLamp1(a - 1, b, c), checkLamp1(a, b, c + 1), checkLamp1(a, b, c - 1), checkLamp1(a, b - 2, c)), 55 != getTile(a, b, c) || e || (checkLamp2(a + 1, b - 1, c), checkLamp2(a - 1, b - 1, c), checkLamp2(a, b - 1, c + 1), checkLamp2(a, b - 1, c - 1), checkLamp2(a + 1, b, c), checkLamp2(a - 1, b, c), checkLamp2(a, b, c + 1), checkLamp2(a, b, c - 1), checkLamp2(a, b - 2, c)), 23 == getTile(a, b, c) && e && (checkTorch1(a + 1, b + 1, c), checkTorch1(a - 1, b + 1, c), checkTorch1(a, b + 1, c + 1), checkTorch1(a, b + 1, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch2(a + 1, b + 1, c), checkTorch2(a - 1, b + 1, c), checkTorch2(a, b + 1, c + 1), checkTorch2(a, b + 1, c - 1)), 23 == getTile(a, b, c) && e && (checkTorch3(a + 1, b + 3, c), checkTorch3(a - 1, b + 3, c), checkTorch3(a, b + 3, c + 1), checkTorch3(a, b + 3, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch4(a + 1, b + 3, c), checkTorch4(a - 1, b + 3, c), checkTorch4(a, b + 3, c + 1), checkTorch4(a, b + 3, c - 1)), 23 == getTile(a, b, c) && e && (checkTorch5(a + 1, b + 5, c), checkTorch5(a - 1, b + 5, c), checkTorch5(a, b + 5, c + 1), checkTorch5(a, b + 5, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch6(a + 1, b + 5, c), checkTorch6(a - 1, b + 5, c), checkTorch6(a, b + 5, c + 1), checkTorch6(a, b + 5, c - 1)), 75 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 76 == getTile(a, b, c) && (checkRed(a - 1, b, c, d - 1, !1), checkRed(a + 1, b, c, d - 1, !1), checkRed(a, b, c - 1, d - 1, !1), checkRed(a, b, c + 1, d - 1, !1), checkRed(a, b + 2, c, d - 1, !1)), 23 == getTile(a, b, c) && e && (checkDoor(a + 1, b + 1, c), checkDoor(a - 1, b + 1, c), checkDoor(a, b + 1, c + 1), checkDoor(a, b + 1, c - 1), checkDoor(a + 1, b, c), checkDoor(a - 1, b, c), checkDoor(a, b, c + 1), checkDoor(a, b, c - 1))
}

function checkTnt(a, b, c) {
    46 == getTile(a, b, c) && (setTile(a, b, c, 0), Level.spawnMob(a + .5, b + .5, c + .5, 65, "mob/cow.png"))
}

function checkLamp1(a, b, c) {
    123 == getTile(a, b, c) && setTile(a, b, c, 124)
}

function checkLamp2(a, b, c) {
    124 == getTile(a, b, c) && setTile(a, b, c, 123)
}

function checkTorch1(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch2(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function checkTorch3(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function checkTorch4(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch5(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch6(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function procCmd(a) {
    var b = a.split(" "),
        c = b[0];
    switch (c) {
    case "give":
        b[1] > 0 && Entity.setCarriedItem(getPlayerEnt(), b[1], 1, b[2])
    }
}

function destroyBlock(a, b, c) {
    var e = Level.getData(a, b, c);
    76 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b + 2, c, 15, !1)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && (setTile(a, b + 2, c, 76), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && 76 == getTile(a, b + 4, c) && (setTile(a, b + 4, c, 75), checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b + 2, c, 15, !1)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && 76 == getTile(a, b + 5, c) && (setTile(a, b + 2, c, 76), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 69 == getTile(a, b, c) && 1 == e && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b - 2, c, 15, !1)), 23 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1))
}

function checkDoor(a, b, c, d) {
    var e = Level.getData(a, b, c);
    e >= 4 && (e -= 4), setTile(a, b, c, getTile(a, b, c), d ? e + 4 : e)
}
Block.defineBlock(55, "Redstone Dust", [
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0]
], 50, !1, 13), Block.setDestroyTime(55, .1), Block.setShape(55, 0, 0, 0, 1, 1 / 16, 1), Block.setColor(55, [4456448]), Block.setRenderLayer(55, 2), Block.defineBlock(23, "Redstone_On", [
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0]
], 50, !1, 13), Block.setDestroyTime(23, .1), Block.setShape(23, 0, 0, 0, 1, 1 / 16, 1), Block.setColor(23, [16580608]), Block.setRenderLayer(23, 2), Block.defineBlock(123, "Redstone Lamp", [
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0]
], 50, !1, 0), Block.setDestroyTime(123, .1), Block.defineBlock(124, "Redstone Lamp", [
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0]
], 50, !1, 0), Block.setDestroyTime(124, .1), Block.defineBlock(76, "Redstone Torch", [
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0]
], 50, !1, 1), Block.setDestroyTime(76, .1), Block.setRenderLayer(76, 1), Block.defineBlock(75, "Redstone Torch", [
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0]
], 50, !1, 1), Block.setDestroyTime(75, .1), Block.setRenderLayer(75, 1), Block.defineBlock(69, "Lever", [
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0]
], 50, !1, 1), Block.setDestroyTime(69, .1), Block.setRenderLayer(69, 1), Block.defineBlock(70, "Stone Pressure Plate", [
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0]
], 50, !1, 13), Block.setDestroyTime(70, .1), Block.setShape(70, 0, 0, 0, 1, 1 / 16, 1), Block.setRenderLayer(70, 2);
Block.defineBlock(202, "Block of Redstone Dust ", ["redstone_block", 0], true, 5, 0);
Block.defineBlock(113, "Redstone Repeater", ["repeater_off", 0], true, 5, 0);
Block.defineBlock(121, "Sticky Piston", [
    ["piston_top_sticky", 0],
    ["piston_side", 0],
    ["piston_inner", 0],
    ["piston_bottom", 0]
], true, 5, 0);
Block.defineBlock(127, " Piston", [
    ["piston_top", 0],
    ["piston_side", 0],
    ["piston_inner", 0],
    ["piston_bottom", 0]
], true, 5, 0);
Block.defineBlock(115, "Redstone Repeater (on)", ["repeater_on", 0], true, 5, 0);
Block.defineBlock(122, "Detector Rail", ["rail_detector", 0], true, 5, 13);
Block.defineBlock(200, "Powered Rail (off)", ["rail_golden", 0], true, 5, 13);
ModPE.setItem(208, "comparator", 0, "Redstone Comparator");

function useItem(a, b, c, d, e, f) {
    var g = Level.getData(a, b, c);
    0 !== e && 331 == d && setTile(a, b + 1, c, 55), 331 == d && 1 == f && (23 == getTile(a - 1, b + 1, c) || 23 == getTile(a + 1, b + 1, c) || 23 == getTile(a, b + 1, c - 1) || 23 == getTile(a, b + 1, c + 1) || 23 == getTile(a - 1, b + 2, c) || 23 == getTile(a + 1, b + 2, c) || 23 == getTile(a, b + 2, c - 1) || 23 == getTile(a, b + 2, c + 1) || 23 == getTile(a - 1, b, c) || 23 == getTile(a + 1, b, c) || 23 == getTile(a, b, c - 1) || 23 == getTile(a, b, c + 1) ? (setTile(a, b + 1, c, 23), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a - 1, b + 2, c, 15, !0), checkRed(a + 1, b + 2, c, 15, !0), checkRed(a, b + 2, c - 1, 15, !0), checkRed(a, b + 2, c + 1, 15, !0)) : 76 == getTile(a - 1, b, c) || 76 == getTile(a + 1, b, c) || 76 == getTile(a, b, c - 1) || 76 == getTile(a, b, c + 1) ? (setTile(a, b + 1, c, 23), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0)) : setTile(a, b + 1, c, 55)), 69 == e && 0 == g && (checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b - 2, c, 15, !0), setTile(a, b, c, 69, 1)), 69 == e && 1 == g && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b - 2, c, 15, !1), setTile(a, b, c, 69, 0)), 0 !== e && 0 == g && 76 == d && (checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a, b + 3, c, 15, !0), setTile(a, b + 1, c, 76, 0)), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b - 1, c) && setTile(a, b + 1, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && setTile(a, b + 3, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && 75 == getTile(a, b + 5, c) && setTile(a, b + 3, c, 75), 76 == getTile(a, b + 1, c) && 76 == getTile(a, b + 3, c) && 75 == getTile(a, b + 5, c) && setTile(a, b + 5, c, 76)
}

function checkRed(a, b, c, d, e) {
    55 == getTile(a, b, c) && e && (setTile(a, b, c, 23, 0), checkRed(a - 1, b, c, d - 1, !0), checkRed(a + 1, b, c, d - 1, !0), checkRed(a, b, c - 1, d - 1, !0), checkRed(a, b, c + 1, d - 1, !0), 0 == getTile(a, b + 1, c) && (checkRed(a - 1, b + 1, c, 15, !0), checkRed(a + 1, b + 1, c, 15, !0), checkRed(a, b + 1, c - 1, 15, !0), checkRed(a, b + 1, c + 1, 15, !0), checkRed(a - 1, b - 1, c, 15, !0), checkRed(a + 1, b - 1, c, 15, !0), checkRed(a, b - 1, c - 1, 15, !0), checkRed(a, b - 1, c + 1, 15, !0))), 23 != getTile(a, b, c) || e || (setTile(a, b, c, 55), checkRed(a - 1, b, c, d - 1, !1), checkRed(a + 1, b, c, d - 1, !1), checkRed(a, b, c - 1, d - 1, !1), checkRed(a, b, c + 1, d - 1, !1), 0 == getTile(a, b + 1, c) && (checkRed(a - 1, b + 1, c, d - 1, !1), checkRed(a + 1, b + 1, c, d - 1, !1), checkRed(a, b + 1, c - 1, d - 1, !1), checkRed(a, b + 1, c + 1, d - 1, !1), checkRed(a - 1, b - 1, c, d - 1, !1), checkRed(a + 1, b - 1, c, d - 1, !1), checkRed(a, b - 1, c - 1, d - 1, !1), checkRed(a, b - 1, c + 1, d - 1, !1))), 23 == getTile(a, b, c) && e && (checkTnt(a + 1, b - 1, c), checkTnt(a - 1, b - 1, c), checkTnt(a, b - 1, c + 1), checkTnt(a, b - 1, c - 1), checkTnt(a + 1, b, c), checkTnt(a - 1, b, c), checkTnt(a, b, c + 1), checkTnt(a, b, c - 1), checkTnt(a, b - 2, c)), 23 == getTile(a, b, c) && e && (checkLamp1(a + 1, b - 1, c), checkLamp1(a - 1, b - 1, c), checkLamp1(a, b - 1, c + 1), checkLamp1(a, b - 1, c - 1), checkLamp1(a + 1, b, c), checkLamp1(a - 1, b, c), checkLamp1(a, b, c + 1), checkLamp1(a, b, c - 1), checkLamp1(a, b - 2, c)), 55 != getTile(a, b, c) || e || (checkLamp2(a + 1, b - 1, c), checkLamp2(a - 1, b - 1, c), checkLamp2(a, b - 1, c + 1), checkLamp2(a, b - 1, c - 1), checkLamp2(a + 1, b, c), checkLamp2(a - 1, b, c), checkLamp2(a, b, c + 1), checkLamp2(a, b, c - 1), checkLamp2(a, b - 2, c)), 23 == getTile(a, b, c) && e && (checkTorch1(a + 1, b + 1, c), checkTorch1(a - 1, b + 1, c), checkTorch1(a, b + 1, c + 1), checkTorch1(a, b + 1, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch2(a + 1, b + 1, c), checkTorch2(a - 1, b + 1, c), checkTorch2(a, b + 1, c + 1), checkTorch2(a, b + 1, c - 1)), 23 == getTile(a, b, c) && e && (checkTorch3(a + 1, b + 3, c), checkTorch3(a - 1, b + 3, c), checkTorch3(a, b + 3, c + 1), checkTorch3(a, b + 3, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch4(a + 1, b + 3, c), checkTorch4(a - 1, b + 3, c), checkTorch4(a, b + 3, c + 1), checkTorch4(a, b + 3, c - 1)), 23 == getTile(a, b, c) && e && (checkTorch5(a + 1, b + 5, c), checkTorch5(a - 1, b + 5, c), checkTorch5(a, b + 5, c + 1), checkTorch5(a, b + 5, c - 1)), 55 != getTile(a, b, c) || e || (checkTorch6(a + 1, b + 5, c), checkTorch6(a - 1, b + 5, c), checkTorch6(a, b + 5, c + 1), checkTorch6(a, b + 5, c - 1)), 75 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 76 == getTile(a, b, c) && (checkRed(a - 1, b, c, d - 1, !1), checkRed(a + 1, b, c, d - 1, !1), checkRed(a, b, c - 1, d - 1, !1), checkRed(a, b, c + 1, d - 1, !1), checkRed(a, b + 2, c, d - 1, !1)), 23 == getTile(a, b, c) && e && (checkDoor(a + 1, b + 1, c), checkDoor(a - 1, b + 1, c), checkDoor(a, b + 1, c + 1), checkDoor(a, b + 1, c - 1), checkDoor(a + 1, b, c), checkDoor(a - 1, b, c), checkDoor(a, b, c + 1), checkDoor(a, b, c - 1))
}

function checkTnt(a, b, c) {
    46 == getTile(a, b, c) && (setTile(a, b, c, 0), Level.spawnMob(a + .5, b + .5, c + .5, 65, "mob/cow.png"))
}

function checkLamp1(a, b, c) {
    123 == getTile(a, b, c) && setTile(a, b, c, 124)
}

function checkLamp2(a, b, c) {
    124 == getTile(a, b, c) && setTile(a, b, c, 123)
}

function checkTorch1(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch2(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function checkTorch3(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function checkTorch4(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch5(a, b, c) {
    76 == getTile(a, b, c) && setTile(a, b, c, 75)
}

function checkTorch6(a, b, c) {
    75 == getTile(a, b, c) && setTile(a, b, c, 76)
}

function procCmd(a) {
    var b = a.split(" "),
        c = b[0];
    switch (c) {
    case "give":
        b[1] > 0 && Entity.setCarriedItem(getPlayerEnt(), b[1], 1, b[2])
    }
}

function destroyBlock(a, b, c) {
    var e = Level.getData(a, b, c);
    76 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b + 2, c, 15, !1)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && (setTile(a, b + 2, c, 76), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && 76 == getTile(a, b + 4, c) && (setTile(a, b + 4, c, 75), checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b + 2, c, 15, !1)), 76 == getTile(a, b, c) && 75 == getTile(a, b + 2, c) && 76 == getTile(a, b + 5, c) && (setTile(a, b + 2, c, 76), checkRed(a - 1, b, c, 15, !0), checkRed(a + 1, b, c, 15, !0), checkRed(a, b, c - 1, 15, !0), checkRed(a, b, c + 1, 15, !0), checkRed(a, b + 2, c, 15, !0)), 69 == getTile(a, b, c) && 1 == e && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1), checkRed(a, b - 2, c, 15, !1)), 23 == getTile(a, b, c) && (checkRed(a - 1, b, c, 15, !1), checkRed(a + 1, b, c, 15, !1), checkRed(a, b, c - 1, 15, !1), checkRed(a, b, c + 1, 15, !1))
}

function checkDoor(a, b, c, d) {
    var e = Level.getData(a, b, c);
    e >= 4 && (e -= 4), setTile(a, b, c, getTile(a, b, c), d ? e + 4 : e)
}
Block.defineBlock(55, "Redstone Dust", [
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0]
], 50, !1, 13), Block.setDestroyTime(55, .1), Block.setShape(55, 0, 0, 0, 1, 1 / 16, 1), Block.setColor(55, [4456448]), Block.setRenderLayer(55, 2), Block.defineBlock(23, "Redstone Dust (on)", [
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0],
    ["redstone_dust_cross", 0]
], 50, !1, 13), Block.setDestroyTime(23, .1), Block.setShape(23, 0, 0, 0, 1, 1 / 16, 1), Block.setColor(23, [16580608]), Block.setRenderLayer(23, 2), Block.defineBlock(123, "Redstone Lamp", [
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0],
    ["redstone_lamp_off", 0]
], 50, !1, 0), Block.setDestroyTime(123, .1), Block.defineBlock(124, "Redstone Lamp", [
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0],
    ["redstone_lamp_on", 0]
], 50, !1, 0), Block.setDestroyTime(124, .1), Block.defineBlock(76, "Redstone Torch", [
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0],
    ["redstone_torch_on", 0]
], 50, !1, 1), Block.setDestroyTime(76, .1), Block.setRenderLayer(76, 1), Block.defineBlock(75, "Redstone Torch", [
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0],
    ["redstone_torch_off", 0]
], 50, !1, 1), Block.setDestroyTime(75, .1), Block.setRenderLayer(75, 1), Block.defineBlock(69, "Lever", [
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0],
    ["lever", 0]
], 50, !1, 1), Block.setDestroyTime(69, .1), Block.setRenderLayer(69, 1), Block.defineBlock(70, "Stone Pressure Plate", [
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0],
    ["stone", 0]
], 50, !1, 13), Block.setDestroyTime(70, .1), Block.setShape(70, 0, 0, 0, 1, 1 / 16, 1), Block.setRenderLayer(70, 2);
Block.defineBlock(202, "Block of Redstone Dust ", ["redstone_block", 0], true, 5, 0);
Block.defineBlock(113, "Redstone Repeater", ["repeater_off", 0], true, 5, 0);
Block.defineBlock(121, "Sticky Piston", [
    ["piston_top_sticky", 0],
    ["piston_side", 0],
    ["piston_inner", 0],
    ["piston_bottom", 0]
], true, 5, 0);
Block.defineBlock(127, " Piston", [
    ["piston_top", 0],
    ["piston_side", 0],
    ["piston_inner", 0],
    ["piston_bottom", 0]
], true, 5, 0);
Block.defineBlock(115, "Redstone Repeater (on)", ["repeater_on", 0], true, 5, 0);
Block.defineBlock(122, "Detector Rail", ["rail_detector", 0], true, 5, 13);
Block.defineBlock(200, "Powered Rail (off)", ["rail_golden", 0], true, 5, 13);
ModPE.setItem(208, "comparator", 0, "Redstone Comparator");
