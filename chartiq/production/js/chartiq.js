/**!
 *	8.2.0
 *	Generation date: 2023-03-23T15:05:01.971Z
 *	Client name: deriv limited
 *	Package Type: Technical Analysis
 *	License type: annual
 *	Expiration date: "2024/04/01"
 *	Domain lock: ["127.0.0.1","localhost","deriv.com","deriv.app","deriv.me","binary.com","binary.sx","binary.me","binary.bot","deriv.be"]
 *	iFrame lock: true
 */

/***********************************************************!
 * Copyright by ChartIQ, Inc.
 * Licensed under the ChartIQ, Inc. Developer License Agreement https://www.chartiq.com/developer-license-agreement
 *************************************************************/
/*************************************! DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! !*************************************
 * If you wish to overwrite default functionality, create a separate file with a copy of the methods you are overwriting *
 * and load that file right after the library has been loaded, but before the chart engine is instantiated.              *
 * Directly modifying library files will prevent upgrades and the ability for ChartIQ to support your solution.          *
 *************************************************************************************************************************/

/*************************************************************************!
 * Please note that manually changing the domain list or expiration dates  *
 *                                                                         *
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WILL NOT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< *
 *                                                                         *
 *   modify the library locking mechanism. Any changes must be requested   *
 *                          directly from chartIQ.                         *
 ***************************************************************************/

(function () {
    /* eslint-disable no-undef-init */
    var domains = [
        '127.0.0.1',
        'localhost',
        'trade.digiprosperdev.com',
        'deriv.com',
        'deriv.app',
        'deriv.me',
        'binary.com',
        'binary.sx',
        'binary.me',
        'binary.bot',
        'deriv.be',
    ];
    var filesystem = false;
    var licenseExpiration = '2024/04/01';
    var trialExpiration = undefined;
    var version = '8.2.0';
    var expiration;

    if (trialExpiration) expiration = new Date(trialExpiration).getTime();
    else if (licenseExpiration) expiration = new Date(licenseExpiration).getTime();

    if (expiration) {
        var now = new Date().getTime();

        if (expiration <= now) {
            if (trialExpiration) alert('This license has expired!');
            console.error('This license has expired!');
        } else if (trialExpiration) {
            var diffDays = Math.round((expiration - now) / (1000 * 60 * 60 * 24));

            if (diffDays < 3) {
                alert('This trial license expires in ' + diffDays + ' days!');
                console.log('WARNING: This trial license expires in ' + diffDays + ' days!');
            }
        }
    }
    if (typeof document !== 'undefined') {
        if (filesystem === true && document.location.protocol == 'file:') {
            return; // valid environment, skip domain check
        }
        if (domains && domains.length > 0) {
            var href = document.location.href;
            var found = false;

            for (var i = 0; i < domains.length; i++) {
                if (href.indexOf(domains[i]) > -1) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert('ERROR: Not licensed for domain ' + href);
                console.error('ERROR: Not licensed for domain ' + href);
            }
        }
    }
    if (version === 'alpha') {
        window.alert('This is an internal PRE-PRODUCTION release--not for external use!');
    }
})(); /* jshint ignore:start */ /* ignore jslint start */

/* eslint-disable no-extra-parens */

/* eslint-disable */ x2dci[370258] = (function () {
    var Y = 2;
    for (; Y !== 9; ) {
        switch (Y) {
            case 2:
                Y = typeof globalThis === '\x6f\x62\x6a\u0065\x63\x74' ? 1 : 5;
                break;
            case 1:
                return globalThis;
                break;
            case 5:
                var L;
                Y = 4;
                break;
            case 4:
                try {
                    var X = 2;
                    for (; X !== 6; ) {
                        switch (X) {
                            case 2:
                                Object['\u0064\x65\x66\u0069\x6e\u0065\u0050\u0072\u006f\u0070\x65\u0072\x74\x79'](
                                    Object['\x70\u0072\u006f\x74\u006f\x74\u0079\x70\x65'],
                                    '\x4c\u006c\u0036\u0052\x39',
                                    {
                                        '\x67\x65\x74': function () {
                                            var V = 2;
                                            for (; V !== 1; ) {
                                                switch (V) {
                                                    case 2:
                                                        return this;
                                                        break;
                                                }
                                            }
                                        },
                                        '\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65': true,
                                    }
                                );
                                L = Ll6R9;
                                X = 5;
                                break;
                            case 5:
                                L['\x42\u0042\u004f\x38\x38'] = L;
                                X = 4;
                                break;
                            case 4:
                                X = typeof BBO88 === '\x75\u006e\x64\u0065\u0066\u0069\u006e\u0065\x64' ? 3 : 9;
                                break;
                            case 3:
                                throw '';
                                X = 9;
                                break;
                            case 9:
                                delete L['\x42\x42\u004f\u0038\x38'];
                                var H = Object['\u0070\x72\u006f\u0074\u006f\x74\x79\u0070\x65'];
                                delete H['\x4c\x6c\u0036\x52\u0039'];
                                X = 6;
                                break;
                        }
                    }
                } catch (k) {
                    L = window;
                }
                return L;
                break;
        }
    }
})();
u$FZV3(x2dci[370258]);
x2dci[150014] = (function (L2m) {
    var u5x = 2;
    for (; u5x !== 10; ) {
        switch (u5x) {
            case 11:
                return {
                    R3ta_F9: function (d9p) {
                        var L58 = 2;
                        for (; L58 !== 6; ) {
                            switch (L58) {
                                case 5:
                                    L58 = !d8I-- ? 4 : 3;
                                    break;
                                case 3:
                                    L58 = !d8I-- ? 9 : 8;
                                    break;
                                case 2:
                                    var y2_ = new Q3K[L2m[0]]()[L2m[1]]();
                                    L58 = 1;
                                    break;
                                case 9:
                                    A6C = y2_ + 60000;
                                    L58 = 8;
                                    break;
                                case 7:
                                    return R_9 ? S6O : !S6O;
                                    break;
                                case 1:
                                    L58 = y2_ > A6C ? 5 : 8;
                                    break;
                                case 8:
                                    var R_9 = (function (i04, j6H) {
                                        var O1a = 2;
                                        for (; O1a !== 10; ) {
                                            switch (O1a) {
                                                case 9:
                                                    O1a = o5N < i04[j6H[5]] ? 8 : 11;
                                                    break;
                                                case 3:
                                                    var Z5m,
                                                        o5N = 0;
                                                    O1a = 9;
                                                    break;
                                                case 8:
                                                    var Z2j = Q3K[j6H[4]](i04[j6H[2]](o5N), 16)[j6H[3]](2);
                                                    var P5J = Z2j[j6H[2]](Z2j[j6H[5]] - 1);
                                                    O1a = 6;
                                                    break;
                                                case 13:
                                                    o5N++;
                                                    O1a = 9;
                                                    break;
                                                case 4:
                                                    j6H = L2m;
                                                    O1a = 3;
                                                    break;
                                                case 11:
                                                    return Z5m;
                                                    break;
                                                case 12:
                                                    Z5m = Z5m ^ P5J;
                                                    O1a = 13;
                                                    break;
                                                case 5:
                                                    O1a =
                                                        typeof j6H === 'undefined' && typeof L2m !== 'undefined'
                                                            ? 4
                                                            : 3;
                                                    break;
                                                case 6:
                                                    O1a = o5N === 0 ? 14 : 12;
                                                    break;
                                                case 14:
                                                    Z5m = P5J;
                                                    O1a = 13;
                                                    break;
                                                case 1:
                                                    i04 = d9p;
                                                    O1a = 5;
                                                    break;
                                                case 2:
                                                    O1a =
                                                        typeof i04 === 'undefined' && typeof d9p !== 'undefined'
                                                            ? 1
                                                            : 5;
                                                    break;
                                            }
                                        }
                                    })(undefined, undefined);
                                    L58 = 7;
                                    break;
                                case 4:
                                    S6O = Y7T(y2_);
                                    L58 = 3;
                                    break;
                            }
                        }
                    },
                };
                break;
            case 2:
                var Q3K, E$2, Z9n, d8I;
                u5x = 1;
                break;
            case 4:
                var s0R = 'fromCharCode',
                    u9z = 'RegExp';
                u5x = 3;
                break;
            case 5:
                Q3K = x2dci[370258];
                u5x = 4;
                break;
            case 13:
                u5x = !d8I-- ? 12 : 11;
                break;
            case 12:
                var S6O,
                    A6C = 0;
                u5x = 11;
                break;
            case 8:
                u5x = !d8I-- ? 7 : 6;
                break;
            case 7:
                Z9n = E$2.T3NZuy(new Q3K[u9z]("^['-|]"), 'S');
                u5x = 6;
                break;
            case 6:
                u5x = !d8I-- ? 14 : 13;
                break;
            case 14:
                L2m = L2m.Y8FL1O(function (z6x) {
                    var d8M = 2;
                    for (; d8M !== 13; ) {
                        switch (d8M) {
                            case 8:
                                v$y++;
                                d8M = 3;
                                break;
                            case 14:
                                return a6L;
                                break;
                            case 7:
                                d8M = !a6L ? 6 : 14;
                                break;
                            case 2:
                                var a6L;
                                d8M = 1;
                                break;
                            case 4:
                                var v$y = 0;
                                d8M = 3;
                                break;
                            case 6:
                                return;
                                break;
                            case 9:
                                a6L += Q3K[Z9n][s0R](z6x[v$y] + 93);
                                d8M = 8;
                                break;
                            case 1:
                                d8M = !d8I-- ? 5 : 4;
                                break;
                            case 3:
                                d8M = v$y < z6x.length ? 9 : 7;
                                break;
                            case 5:
                                a6L = '';
                                d8M = 4;
                                break;
                        }
                    }
                });
                u5x = 13;
                break;
            case 1:
                u5x = !d8I-- ? 5 : 4;
                break;
            case 9:
                E$2 = typeof s0R;
                u5x = 8;
                break;
            case 3:
                u5x = !d8I-- ? 9 : 8;
                break;
        }
    }
    function Y7T(B8u) {
        var g4H = 2;
        for (; g4H !== 15; ) {
            switch (g4H) {
                case 3:
                    a3Y = 27;
                    g4H = 9;
                    break;
                case 20:
                    X2g = B8u - A4$ > a3Y && S7e - B8u > a3Y;
                    g4H = 19;
                    break;
                case 8:
                    l7B = L2m[6];
                    g4H = 7;
                    break;
                case 13:
                    e9t = L2m[7];
                    g4H = 12;
                    break;
                case 4:
                    g4H = !d8I-- ? 3 : 9;
                    break;
                case 10:
                    g4H = A4$ >= 0 && S7e >= 0 ? 20 : 18;
                    break;
                case 17:
                    X2g = B8u - A4$ > a3Y;
                    g4H = 19;
                    break;
                case 5:
                    m6J = Q3K[L2m[4]];
                    g4H = 4;
                    break;
                case 16:
                    X2g = S7e - B8u > a3Y;
                    g4H = 19;
                    break;
                case 19:
                    return X2g;
                    break;
                case 12:
                    g4H = !d8I-- ? 11 : 10;
                    break;
                case 11:
                    A4$ = (e9t || e9t === 0) && m6J(e9t, a3Y);
                    g4H = 10;
                    break;
                case 6:
                    S7e = l7B && m6J(l7B, a3Y);
                    g4H = 14;
                    break;
                case 7:
                    g4H = !d8I-- ? 6 : 14;
                    break;
                case 14:
                    g4H = !d8I-- ? 13 : 12;
                    break;
                case 1:
                    g4H = !d8I-- ? 5 : 4;
                    break;
                case 2:
                    var X2g, a3Y, l7B, S7e, e9t, A4$, m6J;
                    g4H = 1;
                    break;
                case 18:
                    g4H = A4$ >= 0 ? 17 : 16;
                    break;
                case 9:
                    g4H = !d8I-- ? 8 : 7;
                    break;
            }
        }
    }
})([
    [-25, 4, 23, 8],
    [10, 8, 23, -9, 12, 16, 8],
    [6, 11, 4, 21, -28, 23],
    [23, 18, -10, 23, 21, 12, 17, 10],
    [19, 4, 21, 22, 8, -20, 17, 23],
    [15, 8, 17, 10, 23, 11],
    [-39, -44, 18, 6, 19, 17, 8, 7, -45],
    [],
]);
x2dci.h$V = function () {
    return typeof x2dci[539515].x96qQgs === 'function'
        ? x2dci[539515].x96qQgs.apply(x2dci[539515], arguments)
        : x2dci[539515].x96qQgs;
};
x2dci[238553] = (function () {
    var I$t = 2;
    for (; I$t !== 9; ) {
        switch (I$t) {
            case 2:
                var O2$ = [arguments];
                O2$[2] = undefined;
                O2$[8] = {};
                O2$[8].i9agN$W = function () {
                    var h24 = 2;
                    for (; h24 !== 90; ) {
                        switch (h24) {
                            case 4:
                                q4U[9] = [];
                                q4U[3] = {};
                                q4U[3].E$t = ['G$p'];
                                h24 = 8;
                                break;
                            case 70:
                                q4U[73]++;
                                h24 = 57;
                                break;
                            case 53:
                                q4U[9].I5beBg(q4U[68]);
                                q4U[9].I5beBg(q4U[4]);
                                q4U[9].I5beBg(q4U[53]);
                                q4U[9].I5beBg(q4U[75]);
                                h24 = 49;
                                break;
                            case 57:
                                h24 = q4U[73] < q4U[9].length ? 56 : 69;
                                break;
                            case 30:
                                q4U[83] = {};
                                h24 = 29;
                                break;
                            case 38:
                                q4U[57].E$t = ['G$p'];
                                q4U[57].v3c = function () {
                                    var L0m = function () {
                                        return String.fromCharCode(0x61);
                                    };
                                    var r3Z = !/\060\x78\u0036\x31/.S$ysjf(L0m + []);
                                    return r3Z;
                                };
                                q4U[18] = q4U[57];
                                q4U[9].I5beBg(q4U[97]);
                                h24 = 53;
                                break;
                            case 68:
                                h24 = 41 ? 68 : 67;
                                break;
                            case 59:
                                q4U[16] = 't93';
                                h24 = 58;
                                break;
                            case 58:
                                q4U[73] = 0;
                                h24 = 57;
                                break;
                            case 75:
                                q4U[49] = {};
                                q4U[49][q4U[16]] = q4U[28][q4U[48]][q4U[52]];
                                q4U[49][q4U[61]] = q4U[10];
                                h24 = 72;
                                break;
                            case 72:
                                q4U[37].I5beBg(q4U[49]);
                                h24 = 71;
                                break;
                            case 49:
                                q4U[9].I5beBg(q4U[6]);
                                q4U[9].I5beBg(q4U[8]);
                                q4U[9].I5beBg(q4U[2]);
                                h24 = 46;
                                break;
                            case 71:
                                q4U[52]++;
                                h24 = 76;
                                break;
                            case 46:
                                q4U[9].I5beBg(q4U[18]);
                                q4U[9].I5beBg(q4U[29]);
                                h24 = 65;
                                break;
                            case 5:
                                return 41;
                                break;
                            case 69:
                                h24 = (function (G7b) {
                                    var c$3 = 2;
                                    for (; c$3 !== 22; ) {
                                        switch (c$3) {
                                            case 11:
                                                D1D[9][D1D[5][q4U[16]]].t += true;
                                                c$3 = 10;
                                                break;
                                            case 8:
                                                D1D[6] = 0;
                                                c$3 = 7;
                                                break;
                                            case 6:
                                                D1D[5] = D1D[0][0][D1D[6]];
                                                c$3 = 14;
                                                break;
                                            case 26:
                                                c$3 = D1D[7] >= 0.5 ? 25 : 24;
                                                break;
                                            case 14:
                                                c$3 = typeof D1D[9][D1D[5][q4U[16]]] === 'undefined' ? 13 : 11;
                                                break;
                                            case 15:
                                                D1D[4] = D1D[2][D1D[6]];
                                                D1D[7] = D1D[9][D1D[4]].h / D1D[9][D1D[4]].t;
                                                c$3 = 26;
                                                break;
                                            case 17:
                                                D1D[6] = 0;
                                                c$3 = 16;
                                                break;
                                            case 10:
                                                c$3 = D1D[5][q4U[61]] === q4U[80] ? 20 : 19;
                                                break;
                                            case 19:
                                                D1D[6]++;
                                                c$3 = 7;
                                                break;
                                            case 4:
                                                D1D[9] = {};
                                                D1D[2] = [];
                                                D1D[6] = 0;
                                                c$3 = 8;
                                                break;
                                            case 18:
                                                D1D[8] = false;
                                                c$3 = 17;
                                                break;
                                            case 2:
                                                var D1D = [arguments];
                                                c$3 = 1;
                                                break;
                                            case 1:
                                                c$3 = D1D[0][0].length === 0 ? 5 : 4;
                                                break;
                                            case 23:
                                                return D1D[8];
                                                break;
                                            case 20:
                                                D1D[9][D1D[5][q4U[16]]].h += true;
                                                c$3 = 19;
                                                break;
                                            case 5:
                                                return;
                                                break;
                                            case 16:
                                                c$3 = D1D[6] < D1D[2].length ? 15 : 23;
                                                break;
                                            case 24:
                                                D1D[6]++;
                                                c$3 = 16;
                                                break;
                                            case 12:
                                                D1D[2].I5beBg(D1D[5][q4U[16]]);
                                                c$3 = 11;
                                                break;
                                            case 7:
                                                c$3 = D1D[6] < D1D[0][0].length ? 6 : 18;
                                                break;
                                            case 13:
                                                D1D[9][D1D[5][q4U[16]]] = function () {
                                                    var J$8 = 2;
                                                    for (; J$8 !== 9; ) {
                                                        switch (J$8) {
                                                            case 2:
                                                                var y92 = [arguments];
                                                                y92[7] = {};
                                                                J$8 = 5;
                                                                break;
                                                            case 5:
                                                                y92[7].h = 0;
                                                                y92[7].t = 0;
                                                                return y92[7];
                                                                break;
                                                        }
                                                    }
                                                }.P8x2af(this, arguments);
                                                c$3 = 12;
                                                break;
                                            case 25:
                                                D1D[8] = true;
                                                c$3 = 24;
                                                break;
                                        }
                                    }
                                })(q4U[37])
                                    ? 68
                                    : 67;
                                break;
                            case 42:
                                q4U[85].E$t = ['G$p'];
                                q4U[85].v3c = function () {
                                    var p0u = function () {
                                        return btoa('=');
                                    };
                                    var Y9_ = !/\142\x74\x6f\u0061/.S$ysjf(p0u + []);
                                    return Y9_;
                                };
                                q4U[29] = q4U[85];
                                q4U[57] = {};
                                h24 = 38;
                                break;
                            case 1:
                                h24 = O2$[2] ? 5 : 4;
                                break;
                            case 56:
                                q4U[28] = q4U[9][q4U[73]];
                                try {
                                    q4U[10] = q4U[28][q4U[20]]() ? q4U[80] : q4U[60];
                                } catch (V7P) {
                                    q4U[10] = q4U[60];
                                }
                                h24 = 77;
                                break;
                            case 65:
                                q4U[37] = [];
                                q4U[80] = 'N7n';
                                q4U[60] = 'C2f';
                                q4U[48] = 'E$t';
                                q4U[61] = 'g5n';
                                q4U[20] = 'v3c';
                                h24 = 59;
                                break;
                            case 13:
                                q4U[5].v3c = function () {
                                    var Z18 = function () {
                                        return 'a|a'.split('|');
                                    };
                                    var o89 = !/\174/.S$ysjf(Z18 + []);
                                    return o89;
                                };
                                q4U[4] = q4U[5];
                                h24 = 11;
                                break;
                            case 8:
                                q4U[3].v3c = function () {
                                    var Q5m = function () {
                                        return 'aaaa'.padEnd(5, 'a');
                                    };
                                    var a9A = /\x61\x61\141\u0061\x61/.S$ysjf(Q5m + []);
                                    return a9A;
                                };
                                q4U[6] = q4U[3];
                                q4U[5] = {};
                                q4U[5].E$t = ['G$p'];
                                h24 = 13;
                                break;
                            case 2:
                                var q4U = [arguments];
                                h24 = 1;
                                break;
                            case 11:
                                q4U[7] = {};
                                q4U[7].E$t = ['c53'];
                                q4U[7].v3c = function () {
                                    var Z6N = typeof S0XDzw === 'function';
                                    return Z6N;
                                };
                                h24 = 19;
                                break;
                            case 35:
                                q4U[97] = q4U[36];
                                q4U[70] = {};
                                q4U[70].E$t = ['c53'];
                                q4U[70].v3c = function () {
                                    var R94 = typeof R82foz === 'function';
                                    return R94;
                                };
                                q4U[75] = q4U[70];
                                h24 = 30;
                                break;
                            case 76:
                                h24 = q4U[52] < q4U[28][q4U[48]].length ? 75 : 70;
                                break;
                            case 24:
                                q4U[68] = q4U[13];
                                q4U[36] = {};
                                q4U[36].E$t = ['c53'];
                                q4U[36].v3c = function () {
                                    var h6Z = typeof O_Xnak === 'function';
                                    return h6Z;
                                };
                                h24 = 35;
                                break;
                            case 15:
                                q4U[8] = q4U[1];
                                q4U[13] = {};
                                q4U[13].E$t = ['c53'];
                                q4U[13].v3c = function () {
                                    var W5m = false;
                                    var t7u = [];
                                    try {
                                        for (var Q9T in console) {
                                            t7u.I5beBg(Q9T);
                                        }
                                        W5m = t7u.length === 0;
                                    } catch (g0$) {}
                                    var v6b = W5m;
                                    return v6b;
                                };
                                h24 = 24;
                                break;
                            case 67:
                                O2$[2] = 64;
                                return 68;
                                break;
                            case 29:
                                q4U[83].E$t = ['G$p'];
                                q4U[83].v3c = function () {
                                    var t1h = function () {
                                        var s$W = function (X0Q) {
                                            for (var W2d = 0; W2d < 20; W2d++) {
                                                X0Q += W2d;
                                            }
                                            return X0Q;
                                        };
                                        s$W(2);
                                    };
                                    var X0R = /\x31\x39\x32/.S$ysjf(t1h + []);
                                    return X0R;
                                };
                                q4U[53] = q4U[83];
                                q4U[85] = {};
                                h24 = 42;
                                break;
                            case 19:
                                q4U[2] = q4U[7];
                                q4U[1] = {};
                                q4U[1].E$t = ['G$p'];
                                q4U[1].v3c = function () {
                                    var f5K = function () {
                                        return ['a', 'a'].join();
                                    };
                                    var v8Q = !/(\x5b|\u005d)/.S$ysjf(f5K + []);
                                    return v8Q;
                                };
                                h24 = 15;
                                break;
                            case 77:
                                q4U[52] = 0;
                                h24 = 76;
                                break;
                        }
                    }
                };
                return O2$[8];
                break;
        }
    }
})();
x2dci.E2w = function () {
    return typeof x2dci[539515].q7DznqI === 'function'
        ? x2dci[539515].q7DznqI.apply(x2dci[539515], arguments)
        : x2dci[539515].q7DznqI;
};
x2dci.Y$r = function () {
    return typeof x2dci[150014].R3ta_F9 === 'function'
        ? x2dci[150014].R3ta_F9.apply(x2dci[150014], arguments)
        : x2dci[150014].R3ta_F9;
};
x2dci[156040] = x2dci[593596];
x2dci.c6Y = function () {
    return typeof x2dci[593596].N$y1PkD === 'function'
        ? x2dci[593596].N$y1PkD.apply(x2dci[593596], arguments)
        : x2dci[593596].N$y1PkD;
};
x2dci[593596] = (function (F_h) {
    return {
        N$y1PkD: function () {
            var l5l,
                a3p = arguments;
            switch (F_h) {
                case 167:
                    l5l = (a3p[3] + a3p[4]) * a3p[0] - a3p[1] - a3p[2];
                    break;
                case 144:
                    l5l = (-a3p[3] - a3p[2]) * a3p[1] + a3p[0] + a3p[4];
                    break;
                case 65:
                    l5l = (a3p[3] + a3p[2]) / a3p[1] - a3p[0];
                    break;
                case 58:
                    l5l = a3p[3] / a3p[2] + a3p[4] - a3p[1] - a3p[0];
                    break;
                case 57:
                    l5l = a3p[0] / a3p[2] - a3p[1] + a3p[3] - a3p[4];
                    break;
                case 64:
                    l5l = a3p[0] / a3p[3] / a3p[2] + a3p[1];
                    break;
                case 155:
                    l5l = (a3p[3] / a3p[4]) * a3p[0] * a3p[1] - a3p[2];
                    break;
                case 86:
                    l5l = (a3p[1] + a3p[3] - a3p[0]) / a3p[4] + a3p[2];
                    break;
                case 15:
                    l5l = -a3p[1] * a3p[3] * a3p[0] + a3p[2];
                    break;
                case 163:
                    l5l = (a3p[1] / a3p[2] / a3p[0]) * a3p[4] + a3p[3];
                    break;
                case 46:
                    l5l = a3p[0] << a3p[1];
                    break;
                case 145:
                    l5l = (a3p[2] >> a3p[0]) - a3p[1];
                    break;
                case 110:
                    l5l = (a3p[0] - a3p[4]) / a3p[2] + a3p[1] + a3p[3];
                    break;
                case 3:
                    l5l = a3p[3] + a3p[2] + a3p[1] - a3p[0];
                    break;
                case 55:
                    l5l = (a3p[0] / a3p[4] - a3p[1]) / a3p[3] + a3p[2];
                    break;
                case 17:
                    l5l = (a3p[2] - a3p[3]) / a3p[4] / a3p[0] + a3p[1];
                    break;
                case 71:
                    l5l = a3p[0] + a3p[7] + a3p[2] + a3p[6] + a3p[3] + a3p[5] + a3p[8] + a3p[1] + a3p[4];
                    break;
                case 171:
                    l5l = a3p[4] * a3p[3] - a3p[1] + a3p[0] - a3p[2];
                    break;
                case 134:
                    l5l = -a3p[2] * a3p[1] + a3p[0];
                    break;
                case 48:
                    l5l = a3p[3] + (a3p[6] - a3p[1]) * (a3p[5] / a3p[2] - a3p[4]) * a3p[0];
                    break;
                case 51:
                    l5l = a3p[3] - a3p[1] / (a3p[0] * a3p[2]);
                    break;
                case 151:
                    l5l = a3p[1] + (a3p[3] / a3p[0]) * a3p[2];
                    break;
                case 106:
                    l5l = a3p[0] == a3p[1];
                    break;
                case 84:
                    l5l = a3p[1] * a3p[3] - a3p[2] - a3p[0];
                    break;
                case 80:
                    l5l = a3p[2] + a3p[4] + a3p[1] + a3p[3] + a3p[0];
                    break;
                case 30:
                    l5l = a3p[1] - a3p[0] - a3p[2];
                    break;
                case 104:
                    l5l = a3p[0] !== a3p[1];
                    break;
                case 32:
                    l5l = (a3p[2] * a3p[1] - a3p[4]) * a3p[0] - a3p[3];
                    break;
                case 6:
                    l5l = a3p[0] - a3p[1] - a3p[2] + a3p[3] + a3p[4];
                    break;
                case 79:
                    l5l = a3p[3] + a3p[2] - a3p[1] - a3p[0];
                    break;
                case 12:
                    l5l = (a3p[4] - a3p[3] + a3p[0]) / a3p[1] - a3p[2];
                    break;
                case 50:
                    l5l = a3p[3] + a3p[1] / (a3p[2] ^ a3p[0]);
                    break;
                case 35:
                    l5l = a3p[4] * a3p[2] * a3p[1] - a3p[3] - a3p[0];
                    break;
                case 89:
                    l5l = (a3p[3] - a3p[2]) / a3p[0] - a3p[1];
                    break;
                case 63:
                    l5l = (a3p[4] - a3p[1]) / a3p[0] - a3p[2] + a3p[3];
                    break;
                case 117:
                    l5l = (a3p[1] - a3p[0]) * a3p[4] - a3p[2] - a3p[3];
                    break;
                case 159:
                    l5l = (-a3p[1] + a3p[4]) / a3p[3] + a3p[2] - a3p[0];
                    break;
                case 5:
                    l5l = a3p[2] - a3p[1] + a3p[4] + a3p[0] - a3p[3];
                    break;
                case 67:
                    l5l = a3p[0] / a3p[2] + a3p[1];
                    break;
                case 146:
                    l5l = a3p[0] * -a3p[1];
                    break;
                case 78:
                    l5l = a3p[2] - a3p[3] + a3p[1] - a3p[0];
                    break;
                case 109:
                    l5l = a3p[4] * a3p[2] - a3p[0] - a3p[3] + a3p[1];
                    break;
                case 158:
                    l5l = (-a3p[1] * a3p[3]) / a3p[2] - a3p[4] + a3p[0];
                    break;
                case 45:
                    l5l = (a3p[1] - a3p[3]) / a3p[4] + (a3p[0] | a3p[2]);
                    break;
                case 118:
                    l5l = (a3p[3] - a3p[2] - a3p[1]) * a3p[0] - a3p[4];
                    break;
                case 85:
                    l5l = a3p[0] + a3p[1] - a3p[3] - a3p[2] + a3p[4];
                    break;
                case 9:
                    l5l = a3p[0] * a3p[4] * a3p[2] + a3p[3] - a3p[1];
                    break;
                case 99:
                    l5l = (a3p[1] / a3p[4]) * a3p[3] * a3p[0] + a3p[2];
                    break;
                case 108:
                    l5l = (a3p[3] - a3p[0]) * a3p[1] + a3p[2] - a3p[4];
                    break;
                case 29:
                    l5l = (-a3p[0] - a3p[1]) * a3p[2] + a3p[3];
                    break;
                case 18:
                    l5l = (-a3p[0] * a3p[3]) / a3p[1] + a3p[2];
                    break;
                case 41:
                    l5l = a3p[1] * (a3p[3] - a3p[0] / (a3p[2] - a3p[4]));
                    break;
                case 112:
                    l5l = a3p[3] / a3p[2] + a3p[0] + a3p[1];
                    break;
                case 115:
                    l5l = a3p[1] / a3p[3] / a3p[2] - a3p[0] + a3p[4];
                    break;
                case 150:
                    l5l = a3p[2] + (a3p[1] + a3p[3] * a3p[0]);
                    break;
                case 26:
                    l5l = -a3p[1] + a3p[2] + a3p[0];
                    break;
                case 111:
                    l5l = a3p[1] - a3p[0] - a3p[3] + a3p[2];
                    break;
                case 129:
                    l5l = a3p[0] === a3p[1];
                    break;
                case 4:
                    l5l = ((-a3p[0] - a3p[2]) / a3p[3]) * a3p[4] + a3p[1];
                    break;
                case 139:
                    l5l = a3p[1] + a3p[2] / a3p[0];
                    break;
                case 7:
                    l5l = a3p[1] - a3p[0] + a3p[2];
                    break;
                case 73:
                    l5l = a3p[1] * a3p[2] * a3p[0] * a3p[3];
                    break;
                case 120:
                    l5l = a3p[3] / a3p[0] - a3p[1] + a3p[2];
                    break;
                case 114:
                    l5l = (a3p[4] * a3p[3] * a3p[2]) / a3p[0] + a3p[1];
                    break;
                case 0:
                    l5l = a3p[0] - a3p[1];
                    break;
                case 68:
                    l5l = a3p[2] * a3p[1] - a3p[0];
                    break;
                case 34:
                    l5l = (a3p[0] / a3p[2]) * a3p[3] - a3p[1];
                    break;
                case 42:
                    l5l = (a3p[0] - a3p[1]) / a3p[2];
                    break;
                case 169:
                    l5l = -a3p[0] / a3p[1] - a3p[2] + a3p[3];
                    break;
                case 49:
                    l5l = +a3p[2] * a3p[0] - a3p[1];
                    break;
                case 160:
                    l5l = a3p[1] != a3p[0];
                    break;
                case 82:
                    l5l = (-a3p[3] * a3p[1] + a3p[2]) / a3p[4] + a3p[0];
                    break;
                case 52:
                    l5l = a3p[1] * (a3p[0] >> a3p[2]);
                    break;
                case 21:
                    l5l = a3p[0] * -+a3p[1];
                    break;
                case 11:
                    l5l = (-a3p[0] - a3p[3]) / a3p[1] + a3p[2];
                    break;
                case 132:
                    l5l = (a3p[2] - a3p[1]) / (a3p[0] - a3p[3]);
                    break;
                case 147:
                    l5l = a3p[0] + a3p[1] * a3p[2];
                    break;
                case 83:
                    l5l = a3p[0] < a3p[1] * a3p[2];
                    break;
                case 22:
                    l5l = a3p[1] + a3p[0];
                    break;
                case 28:
                    l5l = a3p[1] / +a3p[0];
                    break;
                case 13:
                    l5l = (a3p[4] + a3p[0]) / a3p[3] - a3p[1] + a3p[2];
                    break;
                case 100:
                    l5l = (-a3p[4] / (a3p[2] << a3p[7])) * (a3p[1] * (a3p[0] - a3p[6]) - +a3p[5]) + a3p[3];
                    break;
                case 172:
                    l5l = -a3p[3] * a3p[0] + a3p[1] + a3p[2];
                    break;
                case 25:
                    l5l = a3p[0] + a3p[2] - a3p[1];
                    break;
                case 133:
                    l5l = a3p[2] * (a3p[3] - a3p[0]) + a3p[1];
                    break;
                case 53:
                    l5l = a3p[0] + a3p[1] + a3p[2];
                    break;
                case 141:
                    l5l = a3p[2] / a3p[4] - a3p[0] + a3p[3] + a3p[1];
                    break;
                case 113:
                    l5l = (a3p[1] / a3p[3] - a3p[4]) * a3p[0] - a3p[2];
                    break;
                case 72:
                    l5l =
                        a3p[9] +
                        a3p[10] +
                        a3p[8] +
                        a3p[2] +
                        a3p[0] +
                        a3p[3] +
                        a3p[5] +
                        a3p[1] +
                        a3p[4] +
                        a3p[6] +
                        a3p[7];
                    break;
                case 116:
                    l5l = ((a3p[2] + a3p[3]) / a3p[0]) * a3p[4] - a3p[1];
                    break;
                case 16:
                    l5l = (a3p[1] + a3p[0]) * a3p[2] - a3p[3];
                    break;
                case 127:
                    l5l = (-a3p[4] + a3p[3] - a3p[1]) / a3p[0] + a3p[2];
                    break;
                case 101:
                    l5l = (a3p[5] / (a3p[2] | a3p[4])) * a3p[1] * a3p[3] * a3p[6] + a3p[0];
                    break;
                case 81:
                    l5l = a3p[1] * a3p[0] * a3p[2] - a3p[3];
                    break;
                case 36:
                    l5l = (a3p[2] * a3p[1]) / a3p[3] + a3p[0];
                    break;
                case 93:
                    l5l = -a3p[1] + a3p[2] - a3p[0];
                    break;
                case 119:
                    l5l = (a3p[3] + a3p[1] + a3p[2]) / a3p[4] + a3p[0];
                    break;
                case 103:
                    l5l = a3p[1] * (a3p[2] * a3p[4] * a3p[5] + a3p[0]) + a3p[3];
                    break;
                case 102:
                    l5l = (a3p[1] / (a3p[4] - a3p[6])) * (a3p[0] * a3p[7] * a3p[2] + a3p[3]) + a3p[5];
                    break;
                case 20:
                    l5l = a3p[0] ^ a3p[1];
                    break;
                case 121:
                    l5l = (a3p[1] - a3p[4]) * a3p[0] * a3p[3] - a3p[2];
                    break;
                case 90:
                    l5l = (a3p[2] * a3p[0]) / a3p[3] + a3p[4] + a3p[1];
                    break;
                case 96:
                    l5l = (a3p[3] - a3p[4]) / a3p[0] + a3p[1] - a3p[2];
                    break;
                case 152:
                    l5l = a3p[0] > a3p[1];
                    break;
                case 76:
                    l5l = (a3p[0] + a3p[3]) / a3p[1] + a3p[2];
                    break;
                case 62:
                    l5l = (a3p[4] / a3p[3]) * a3p[0] + a3p[2] - a3p[1];
                    break;
                case 38:
                    l5l = a3p[0] * a3p[1];
                    break;
                case 137:
                    l5l = (-a3p[2] + a3p[3]) * a3p[0] + a3p[1];
                    break;
                case 135:
                    l5l = -a3p[2] - a3p[3] - a3p[4] - a3p[0] + a3p[1];
                    break;
                case 94:
                    l5l = (a3p[4] * a3p[1] - a3p[2]) / a3p[3] + a3p[0];
                    break;
                case 54:
                    l5l = a3p[0] * a3p[1] - a3p[2] + a3p[3];
                    break;
                case 128:
                    l5l = (a3p[2] * a3p[0] + a3p[3]) / a3p[4] - a3p[1];
                    break;
                case 165:
                    l5l = (a3p[1] / a3p[0]) * a3p[2];
                    break;
                case 170:
                    l5l = a3p[1] * (a3p[2] << a3p[0]);
                    break;
                case 24:
                    l5l = a3p[1] + +a3p[0];
                    break;
                case 77:
                    l5l = a3p[3] * a3p[2] + a3p[1] - a3p[0];
                    break;
                case 122:
                    l5l = (-a3p[2] / a3p[3] - a3p[4]) * a3p[1] + a3p[0];
                    break;
                case 143:
                    l5l = (a3p[1] * a3p[0]) / a3p[2] + a3p[4] - a3p[3];
                    break;
                case 69:
                    l5l = a3p[2] / a3p[0] + a3p[3] - a3p[1];
                    break;
                case 88:
                    l5l = ((a3p[2] - a3p[1]) / a3p[4]) * a3p[0] - a3p[3];
                    break;
                case 23:
                    l5l = ((a3p[3] - a3p[2]) * (a3p[0] - a3p[5])) / (a3p[4] - a3p[1]);
                    break;
                case 124:
                    l5l = a3p[0] + a3p[2] - a3p[3] + a3p[1];
                    break;
                case 37:
                    l5l = a3p[3] + a3p[1] - a3p[2] + a3p[0] - a3p[4];
                    break;
                case 123:
                    l5l = a3p[4] + a3p[2] - a3p[1] + a3p[3] + a3p[0];
                    break;
                case 164:
                    l5l = a3p[3] * a3p[4] * a3p[0] * +a3p[1] * a3p[2];
                    break;
                case 138:
                    l5l = (a3p[0] - a3p[4] - a3p[1]) / a3p[3] + a3p[2];
                    break;
                case 98:
                    l5l = a3p[0] - +a3p[1];
                    break;
                case 107:
                    l5l = a3p[1] + a3p[2] * (a3p[0] - a3p[3]);
                    break;
                case 154:
                    l5l = (-a3p[2] / a3p[0]) * a3p[3] + a3p[1];
                    break;
                case 153:
                    l5l = a3p[3] + a3p[2] - a3p[4] - a3p[0] - a3p[1];
                    break;
                case 148:
                    l5l = (a3p[2] * a3p[4] - a3p[0]) / a3p[1] - a3p[3];
                    break;
                case 75:
                    l5l = (a3p[2] + a3p[3] + a3p[4]) * a3p[0] - a3p[1];
                    break;
                case 60:
                    l5l = ((a3p[0] - a3p[4]) * a3p[3]) / a3p[1] + a3p[2];
                    break;
                case 33:
                    l5l = a3p[0] / a3p[3] / a3p[1] + a3p[4] + a3p[2];
                    break;
                case 95:
                    l5l = a3p[4] * a3p[2] - a3p[3] - a3p[1] - a3p[0];
                    break;
                case 149:
                    l5l = a3p[3] - a3p[1] / +a3p[2] + (a3p[0] - a3p[4]);
                    break;
                case 19:
                    l5l = a3p[1] >> a3p[0];
                    break;
                case 126:
                    l5l = a3p[3] + a3p[2] + a3p[1] + a3p[0];
                    break;
                case 59:
                    l5l = (a3p[2] - a3p[1]) * a3p[3] - a3p[0];
                    break;
                case 161:
                    l5l = a3p[1] * a3p[2] * a3p[0];
                    break;
                case 140:
                    l5l = a3p[0] - a3p[2] - (a3p[3] - a3p[1]);
                    break;
                case 91:
                    l5l = a3p[1] + a3p[4] + a3p[3] - a3p[0] + a3p[2];
                    break;
                case 47:
                    l5l = a3p[3] + (a3p[0] - a3p[4]) * a3p[1] * a3p[2];
                    break;
                case 1:
                    l5l = (a3p[0] * a3p[2] + a3p[3]) * a3p[1] - a3p[4];
                    break;
                case 31:
                    l5l = (a3p[0] + a3p[4]) * a3p[1] + a3p[3] - a3p[2];
                    break;
                case 92:
                    l5l = a3p[0] - a3p[2] + a3p[3] + a3p[1];
                    break;
                case 136:
                    l5l = (a3p[1] * a3p[3]) / a3p[0] - a3p[2];
                    break;
                case 39:
                    l5l = a3p[1] + a3p[6] + a3p[0] + a3p[2] + a3p[8] + a3p[4] + a3p[9] + a3p[5] / a3p[3] + a3p[7];
                    break;
                case 8:
                    l5l = a3p[0] / a3p[2] - a3p[1];
                    break;
                case 131:
                    l5l = a3p[0] < a3p[1];
                    break;
                case 166:
                    l5l = (-a3p[4] + a3p[2]) * a3p[0] * a3p[3] + a3p[1];
                    break;
                case 66:
                    l5l = (a3p[0] + a3p[1] + a3p[3]) / a3p[2] - a3p[4];
                    break;
                case 157:
                    l5l = -a3p[0] + a3p[1] - a3p[2] + a3p[3];
                    break;
                case 40:
                    l5l = a3p[1] / a3p[0];
                    break;
                case 168:
                    l5l = a3p[0] + a3p[1] + a3p[3] - a3p[2] - a3p[4];
                    break;
                case 43:
                    l5l = (a3p[1] + a3p[2]) / a3p[0];
                    break;
                case 125:
                    l5l = a3p[1] / (a3p[0] >> a3p[2]);
                    break;
                case 162:
                    l5l = a3p[2] * (a3p[1] ^ a3p[0]);
                    break;
                case 14:
                    l5l = -a3p[0] / a3p[1] + a3p[2];
                    break;
                case 10:
                    l5l = -a3p[1] - a3p[2] + a3p[0];
                    break;
                case 2:
                    l5l = -a3p[1] + a3p[0];
                    break;
                case 61:
                    l5l = ((a3p[1] / a3p[3]) * a3p[4]) / a3p[2] - a3p[0];
                    break;
                case 87:
                    l5l = ((a3p[3] * a3p[0]) / a3p[4]) * a3p[2] - a3p[1];
                    break;
                case 97:
                    l5l = (-a3p[3] / a3p[4]) * a3p[1] * a3p[0] + a3p[2];
                    break;
                case 74:
                    l5l = a3p[0] | a3p[1];
                    break;
                case 142:
                    l5l = a3p[2] / a3p[0] - a3p[4] - a3p[3] + a3p[1];
                    break;
                case 44:
                    l5l = (a3p[1] - a3p[0]) / a3p[3] + a3p[2];
                    break;
                case 130:
                    l5l = a3p[2] - (a3p[0] - a3p[1]);
                    break;
                case 27:
                    l5l = a3p[0] | (a3p[2] << a3p[1]) | (a3p[3] << a3p[4]);
                    break;
                case 156:
                    l5l = a3p[3] * a3p[0] * a3p[1] * a3p[2] - a3p[4];
                    break;
                case 105:
                    l5l = (a3p[2] - a3p[3]) * (a3p[0] - a3p[7]) - (a3p[1] - a3p[4]) * (a3p[6] - a3p[5]);
                    break;
                case 70:
                    l5l = a3p[5] + a3p[4] + a3p[1] + a3p[2] + a3p[3] + a3p[0] + a3p[6];
                    break;
                case 56:
                    l5l = -a3p[3] * a3p[4] - a3p[0] + a3p[1] + a3p[2];
                    break;
            }
            return l5l;
        },
        g9iUvuS: function (o$Y) {
            F_h = o$Y;
        },
    };
})();
x2dci.R2R = function () {
    return typeof x2dci[539515].x96qQgs === 'function'
        ? x2dci[539515].x96qQgs.apply(x2dci[539515], arguments)
        : x2dci[539515].x96qQgs;
};
x2dci[370258].L3EE = x2dci;
x2dci[539515] = (function () {
    var E64 = 2;
    for (; E64 !== 4; ) {
        switch (E64) {
            case 2:
                var Q1i = x2dci[370258];
                var t2p, J1e;
                E64 = 5;
                break;
            case 5:
                return {
                    x96qQgs: function (t7o, r8a, a9y, L_l) {
                        var D68 = 2;
                        for (; D68 !== 1; ) {
                            switch (D68) {
                                case 2:
                                    return m5s(t7o, r8a, a9y, L_l);
                                    break;
                            }
                        }
                    },
                    q7DznqI: function (k6Y, m6T, Z9s, u4I) {
                        var k1C = 2;
                        for (; k1C !== 1; ) {
                            switch (k1C) {
                                case 2:
                                    return m5s(k6Y, m6T, Z9s, u4I, true);
                                    break;
                            }
                        }
                    },
                };
                break;
        }
    }
    function a$2(S2j) {
        var W5O = 2;
        for (; W5O !== 7; ) {
            switch (W5O) {
                case 2:
                    var g1h = 9;
                    var t4q = '';
                    W5O = 5;
                    break;
                case 3:
                    t4q += t1dH2.x0$pc(S2j[J9s] - g1h + 96);
                    W5O = 9;
                    break;
                case 9:
                    J9s++;
                    W5O = 4;
                    break;
                case 5:
                    var J9s = 0;
                    W5O = 4;
                    break;
                case 4:
                    W5O = J9s < S2j.length ? 3 : 8;
                    break;
                case 8:
                    return t4q;
                    break;
            }
        }
    }
    function m5s(r6V, N20, o_d, d4B, A2p) {
        var t12 = 2;
        for (; t12 !== 15; ) {
            switch (t12) {
                case 13:
                    t12 = N20 && a8H > 0 && T$B.U$egJ(a8H - 1) !== 46 ? 12 : 11;
                    break;
                case 6:
                    return x2dci.q2D(e5t, T2e, o_d);
                    break;
                case 16:
                    return x2dci.q2D(e5t, T2e, o_d);
                    break;
                case 2:
                    var e5t, T2e, T$B, f8y;
                    f8y = Q1i[a$2([21, 24, 12, 10, 29, 18, 24, 23])];
                    !t2p && (t2p = typeof f8y !== 'undefined' ? f8y[a$2([17, 24, 28, 29, 23, 10, 22, 14])] || ' ' : '');
                    !J1e && (J1e = typeof f8y !== 'undefined' ? f8y[a$2([17, 27, 14, 15])] : '');
                    t12 = 3;
                    break;
                case 12:
                    return false;
                    break;
                case 8:
                    e5t = T$B.C3TTz(r6V, d4B);
                    T2e = e5t.length;
                    t12 = 6;
                    break;
                case 9:
                    t12 = d4B > 0 ? 8 : 19;
                    break;
                case 11:
                    e5t = T$B.C3TTz(a8H, T$B.length);
                    T2e = e5t.length;
                    return x2dci.q2D(e5t, T2e, o_d);
                    break;
                case 19:
                    t12 = r6V === null || r6V <= 0 ? 18 : 14;
                    break;
                case 14:
                    var a8H = T$B.length - r6V;
                    t12 = 13;
                    break;
                case 18:
                    e5t = T$B.C3TTz(0, T$B.length);
                    T2e = e5t.length;
                    t12 = 16;
                    break;
                case 3:
                    T$B = A2p ? J1e : t2p;
                    t12 = 9;
                    break;
            }
        }
    }
})();
x2dci.J8h = function () {
    return typeof x2dci[238553].i9agN$W === 'function'
        ? x2dci[238553].i9agN$W.apply(x2dci[238553], arguments)
        : x2dci[238553].i9agN$W;
};
function x2dci() {}
x2dci.T9A = function () {
    return typeof x2dci[539515].q7DznqI === 'function'
        ? x2dci[539515].q7DznqI.apply(x2dci[539515], arguments)
        : x2dci[539515].q7DznqI;
};
function u$FZV3(B95) {
    function I7s(z23) {
        var u$Y = 2;
        for (; u$Y !== 5; ) {
            switch (u$Y) {
                case 2:
                    var n8T = [arguments];
                    return n8T[0][0].Function;
                    break;
            }
        }
    }
    function a8E(H$L) {
        var b$i = 2;
        for (; b$i !== 5; ) {
            switch (b$i) {
                case 2:
                    var I1Z = [arguments];
                    return I1Z[0][0].RegExp;
                    break;
            }
        }
    }
    function d5J(j3z) {
        var N8a = 2;
        for (; N8a !== 5; ) {
            switch (N8a) {
                case 2:
                    var h_L = [arguments];
                    return h_L[0][0].String;
                    break;
            }
        }
    }
    function y9b(Z$9) {
        var i9t = 2;
        for (; i9t !== 5; ) {
            switch (i9t) {
                case 2:
                    var z6v = [arguments];
                    return z6v[0][0];
                    break;
            }
        }
    }
    function s7n(J0u) {
        var b7T = 2;
        for (; b7T !== 5; ) {
            switch (b7T) {
                case 2:
                    var i2l = [arguments];
                    return i2l[0][0].Array;
                    break;
            }
        }
    }
    var l6_ = 2;
    for (; l6_ !== 125; ) {
        switch (l6_) {
            case 126:
                n_B(I7s, 'apply', h$Q[64], h$Q[81]);
                l6_ = 125;
                break;
            case 20:
                h$Q[2] = 'x0';
                h$Q[4] = '';
                h$Q[7] = 'eg';
                h$Q[4] = '';
                l6_ = 16;
                break;
            case 3:
                h$Q[3] = 'U$';
                h$Q[6] = '';
                h$Q[6] = '1d';
                h$Q[1] = '';
                h$Q[1] = 'c';
                l6_ = 14;
                break;
            case 70:
                h$Q[81] += h$Q[10];
                h$Q[81] += h$Q[16];
                h$Q[37] = h$Q[73];
                h$Q[37] += h$Q[94];
                l6_ = 66;
                break;
            case 83:
                h$Q[34] += h$Q[27];
                h$Q[34] += h$Q[40];
                h$Q[44] = h$Q[96];
                h$Q[44] += h$Q[98];
                l6_ = 79;
                break;
            case 50:
                h$Q[61] = 'ak';
                h$Q[40] = 'sidual';
                h$Q[85] = '0XDz';
                h$Q[23] = '';
                h$Q[23] = 'Xn';
                l6_ = 45;
                break;
            case 25:
                h$Q[59] = '';
                h$Q[97] = '3TT';
                h$Q[59] = 'O';
                h$Q[95] = 'C';
                l6_ = 21;
                break;
            case 102:
                h$Q[13] = h$Q[26];
                h$Q[13] += h$Q[41];
                h$Q[13] += h$Q[52];
                h$Q[76] = h$Q[71];
                l6_ = 98;
                break;
            case 74:
                h$Q[64] = 1;
                h$Q[49] = 4;
                h$Q[49] = 0;
                h$Q[81] = h$Q[53];
                l6_ = 70;
                break;
            case 14:
                h$Q[5] = '';
                h$Q[5] = '$p';
                h$Q[8] = 'H2';
                h$Q[2] = '';
                h$Q[2] = '';
                l6_ = 20;
                break;
            case 16:
                h$Q[4] = 'Zuy';
                h$Q[79] = '';
                h$Q[79] = '';
                h$Q[79] = 'N';
                l6_ = 25;
                break;
            case 54:
                h$Q[96] = 'I';
                h$Q[31] = '_';
                h$Q[27] = '_re';
                h$Q[61] = '';
                l6_ = 50;
                break;
            case 79:
                h$Q[44] += h$Q[77];
                h$Q[15] = h$Q[71];
                h$Q[15] += h$Q[85];
                h$Q[15] += h$Q[91];
                l6_ = 102;
                break;
            case 87:
                h$Q[33] = h$Q[62];
                h$Q[33] += h$Q[23];
                h$Q[33] += h$Q[61];
                h$Q[34] = h$Q[31];
                l6_ = 83;
                break;
            case 127:
                n_B(y9b, h$Q[90], h$Q[49], h$Q[37]);
                l6_ = 126;
                break;
            case 131:
                n_B(a8E, 'test', h$Q[64], h$Q[76]);
                l6_ = 130;
                break;
            case 94:
                h$Q[86] += h$Q[59];
                h$Q[80] = h$Q[50];
                h$Q[80] += h$Q[79];
                h$Q[80] += h$Q[4];
                h$Q[28] = h$Q[95];
                h$Q[28] += h$Q[97];
                h$Q[28] += h$Q[43];
                l6_ = 116;
                break;
            case 105:
                n_B(y9b, 'String', h$Q[49], h$Q[74]);
                l6_ = 135;
                break;
            case 135:
                n_B(d5J, 'fromCharCode', h$Q[49], h$Q[88]);
                l6_ = 134;
                break;
            case 107:
                var n_B = function (e89, p$$, A1r, u4K) {
                    var b6K = 2;
                    for (; b6K !== 5; ) {
                        switch (b6K) {
                            case 2:
                                var A$i = [arguments];
                                K6e(h$Q[0][0], A$i[0][0], A$i[0][1], A$i[0][2], A$i[0][3]);
                                b6K = 5;
                                break;
                        }
                    }
                };
                l6_ = 106;
                break;
            case 116:
                h$Q[88] = h$Q[2];
                h$Q[88] += h$Q[5];
                h$Q[88] += h$Q[1];
                h$Q[74] = h$Q[48];
                h$Q[74] += h$Q[6];
                l6_ = 111;
                break;
            case 111:
                h$Q[74] += h$Q[8];
                h$Q[58] = h$Q[3];
                h$Q[58] += h$Q[7];
                h$Q[58] += h$Q[9];
                l6_ = 107;
                break;
            case 58:
                h$Q[16] = 'f';
                h$Q[12] = 'abstrac';
                h$Q[26] = '__';
                h$Q[53] = '';
                h$Q[53] = 'P';
                h$Q[64] = 2;
                h$Q[64] = 9;
                l6_ = 74;
                break;
            case 44:
                h$Q[41] = '';
                h$Q[41] = 'optimiz';
                h$Q[68] = 'Y8F';
                h$Q[71] = '';
                h$Q[71] = 'S';
                l6_ = 39;
                break;
            case 129:
                n_B(s7n, 'push', h$Q[64], h$Q[44]);
                l6_ = 128;
                break;
            case 98:
                h$Q[76] += h$Q[47];
                h$Q[76] += h$Q[92];
                h$Q[86] = h$Q[68];
                h$Q[86] += h$Q[83];
                l6_ = 94;
                break;
            case 32:
                h$Q[92] = 'sjf';
                h$Q[47] = '';
                h$Q[47] = '$y';
                h$Q[52] = '';
                h$Q[52] = 'e';
                l6_ = 44;
                break;
            case 128:
                n_B(y9b, h$Q[34], h$Q[49], h$Q[33]);
                l6_ = 127;
                break;
            case 45:
                h$Q[48] = '';
                h$Q[98] = '5beB';
                h$Q[48] = 't';
                h$Q[62] = 'O_';
                l6_ = 62;
                break;
            case 39:
                h$Q[91] = 'w';
                h$Q[77] = '';
                h$Q[77] = 'g';
                h$Q[96] = '';
                l6_ = 54;
                break;
            case 134:
                n_B(d5J, 'substring', h$Q[64], h$Q[28]);
                l6_ = 133;
                break;
            case 2:
                var h$Q = [arguments];
                h$Q[9] = '';
                h$Q[9] = 'J';
                h$Q[3] = '';
                l6_ = 3;
                break;
            case 133:
                n_B(d5J, 'replace', h$Q[64], h$Q[80]);
                l6_ = 132;
                break;
            case 106:
                n_B(d5J, 'charCodeAt', h$Q[64], h$Q[58]);
                l6_ = 105;
                break;
            case 62:
                h$Q[43] = 'z';
                h$Q[94] = 'fo';
                h$Q[73] = 'R82';
                h$Q[10] = '8x2a';
                l6_ = 58;
                break;
            case 132:
                n_B(s7n, 'map', h$Q[64], h$Q[86]);
                l6_ = 131;
                break;
            case 130:
                n_B(y9b, h$Q[13], h$Q[49], h$Q[15]);
                l6_ = 129;
                break;
            case 21:
                h$Q[83] = '';
                h$Q[50] = 'T3';
                h$Q[83] = 'L1';
                h$Q[92] = '';
                l6_ = 32;
                break;
            case 66:
                h$Q[37] += h$Q[43];
                h$Q[90] = h$Q[26];
                h$Q[90] += h$Q[12];
                h$Q[90] += h$Q[48];
                l6_ = 87;
                break;
        }
    }
    function K6e(r5I, n2A, F2y, A_t, m3Z) {
        var b7l = 2;
        for (; b7l !== 6; ) {
            switch (b7l) {
                case 3:
                    Z8a[2] = '';
                    Z8a[2] = 'definePro';
                    Z8a[1] = false;
                    try {
                        var P7l = 2;
                        for (; P7l !== 13; ) {
                            switch (P7l) {
                                case 14:
                                    try {
                                        var z54 = 2;
                                        for (; z54 !== 3; ) {
                                            switch (z54) {
                                                case 1:
                                                    Z8a[3] += Z8a[4];
                                                    Z8a[3] += Z8a[5];
                                                    Z8a[0][0].Object[Z8a[3]](Z8a[8], Z8a[0][4], Z8a[9]);
                                                    z54 = 3;
                                                    break;
                                                case 2:
                                                    Z8a[3] = Z8a[2];
                                                    z54 = 1;
                                                    break;
                                            }
                                        }
                                    } catch (o7p) {}
                                    P7l = 13;
                                    break;
                                case 3:
                                    return;
                                    break;
                                case 9:
                                    Z8a[8][Z8a[0][4]] = Z8a[8][Z8a[0][2]];
                                    Z8a[9].set = function (f55) {
                                        var F7Z = 2;
                                        for (; F7Z !== 5; ) {
                                            switch (F7Z) {
                                                case 2:
                                                    var p$Q = [arguments];
                                                    Z8a[8][Z8a[0][2]] = p$Q[0][0];
                                                    F7Z = 5;
                                                    break;
                                            }
                                        }
                                    };
                                    Z8a[9].get = function () {
                                        var Y3n = 2;
                                        for (; Y3n !== 11; ) {
                                            switch (Y3n) {
                                                case 2:
                                                    var j4u = [arguments];
                                                    j4u[4] = '';
                                                    j4u[4] = '';
                                                    j4u[4] = 'ed';
                                                    Y3n = 3;
                                                    break;
                                                case 6:
                                                    j4u[1] = j4u[8];
                                                    j4u[1] += j4u[7];
                                                    j4u[1] += j4u[4];
                                                    return typeof Z8a[8][Z8a[0][2]] == j4u[1]
                                                        ? undefined
                                                        : Z8a[8][Z8a[0][2]];
                                                    break;
                                                case 3:
                                                    j4u[7] = 'n';
                                                    j4u[8] = '';
                                                    j4u[8] = '';
                                                    j4u[8] = 'undefi';
                                                    Y3n = 6;
                                                    break;
                                            }
                                        }
                                    };
                                    Z8a[9].enumerable = Z8a[1];
                                    P7l = 14;
                                    break;
                                case 4:
                                    P7l =
                                        Z8a[8].hasOwnProperty(Z8a[0][4]) && Z8a[8][Z8a[0][4]] === Z8a[8][Z8a[0][2]]
                                            ? 3
                                            : 9;
                                    break;
                                case 2:
                                    Z8a[9] = {};
                                    Z8a[6] = (1, Z8a[0][1])(Z8a[0][0]);
                                    Z8a[8] = [Z8a[6], Z8a[6].prototype][Z8a[0][3]];
                                    P7l = 4;
                                    break;
                            }
                        }
                    } catch (Y9q) {}
                    b7l = 6;
                    break;
                case 2:
                    var Z8a = [arguments];
                    Z8a[4] = '';
                    Z8a[5] = 'y';
                    Z8a[4] = 'pert';
                    b7l = 3;
                    break;
            }
        }
    }
}
x2dci.I7W = function () {
    return typeof x2dci[150014].R3ta_F9 === 'function'
        ? x2dci[150014].R3ta_F9.apply(x2dci[150014], arguments)
        : x2dci[150014].R3ta_F9;
};
x2dci[636832] = '$j0';
x2dci.M8Y = function () {
    return typeof x2dci[593596].g9iUvuS === 'function'
        ? x2dci[593596].g9iUvuS.apply(x2dci[593596], arguments)
        : x2dci[593596].g9iUvuS;
};
x2dci.q2D = function () {
    return typeof x2dci[446427].V29cT4d === 'function'
        ? x2dci[446427].V29cT4d.apply(x2dci[446427], arguments)
        : x2dci[446427].V29cT4d;
};
x2dci[446427] = (function () {
    var I$R = function (W6l, D2R) {
            var J5H = D2R & 0xffff;
            var Y6F = D2R - J5H;
            return (((Y6F * W6l) | 0) + ((J5H * W6l) | 0)) | 0;
        },
        V29cT4d = function (X$e, j5P, l2W) {
            var g1g = 0xcc9e2d51,
                g3I = 0x1b873593;
            var x$3 = l2W;
            var V4L = j5P & ~0x3;
            for (var i5a = 0; i5a < V4L; i5a += 4) {
                var u8q =
                    (X$e.U$egJ(i5a) & 0xff) |
                    ((X$e.U$egJ(i5a + 1) & 0xff) << 8) |
                    ((X$e.U$egJ(i5a + 2) & 0xff) << 16) |
                    ((X$e.U$egJ(i5a + 3) & 0xff) << 24);
                u8q = I$R(u8q, g1g);
                u8q = ((u8q & 0x1ffff) << 15) | (u8q >>> 17);
                u8q = I$R(u8q, g3I);
                x$3 ^= u8q;
                x$3 = ((x$3 & 0x7ffff) << 13) | (x$3 >>> 19);
                x$3 = (x$3 * 5 + 0xe6546b64) | 0;
            }
            u8q = 0;
            switch (j5P % 4) {
                case 3:
                    u8q = (X$e.U$egJ(V4L + 2) & 0xff) << 16;
                case 2:
                    u8q |= (X$e.U$egJ(V4L + 1) & 0xff) << 8;
                case 1:
                    u8q |= X$e.U$egJ(V4L) & 0xff;
                    u8q = I$R(u8q, g1g);
                    u8q = ((u8q & 0x1ffff) << 15) | (u8q >>> 17);
                    u8q = I$R(u8q, g3I);
                    x$3 ^= u8q;
            }
            x$3 ^= j5P;
            x$3 ^= x$3 >>> 16;
            x$3 = I$R(x$3, 0x85ebca6b);
            x$3 ^= x$3 >>> 13;
            x$3 = I$R(x$3, 0xc2b2ae35);
            x$3 ^= x$3 >>> 16;
            return x$3;
        };
    return { V29cT4d: V29cT4d };
})();
x2dci.O$R = function () {
    return typeof x2dci[446427].V29cT4d === 'function'
        ? x2dci[446427].V29cT4d.apply(x2dci[446427], arguments)
        : x2dci[446427].V29cT4d;
};
x2dci.r2m = function () {
    return typeof x2dci[238553].i9agN$W === 'function'
        ? x2dci[238553].i9agN$W.apply(x2dci[238553], arguments)
        : x2dci[238553].i9agN$W;
};
x2dci.C$o = function () {
    return typeof x2dci[593596].g9iUvuS === 'function'
        ? x2dci[593596].g9iUvuS.apply(x2dci[593596], arguments)
        : x2dci[593596].g9iUvuS;
};
x2dci[103941] = true;
x2dci.d58 = function () {
    return typeof x2dci[593596].N$y1PkD === 'function'
        ? x2dci[593596].N$y1PkD.apply(x2dci[593596], arguments)
        : x2dci[593596].N$y1PkD;
};
x2dci.h1V = function (D2c) {
    x2dci.J8h();
    if (x2dci && D2c) return x2dci.I7W(D2c);
};
x2dci.C4O = function (r4o) {
    x2dci.J8h();
    if (x2dci) return x2dci.I7W(r4o);
};
x2dci.l_E = function (S9B) {
    x2dci.r2m();
    if (x2dci && S9B) return x2dci.I7W(S9B);
};
x2dci.C9r = function (J8b) {
    x2dci.r2m();
    if (x2dci) return x2dci.I7W(J8b);
};
x2dci.s8p = function (f35) {
    x2dci.J8h();
    if (x2dci && f35) return x2dci.Y$r(f35);
};
x2dci.C4U = function (B$y) {
    x2dci.J8h();
    if (x2dci) return x2dci.I7W(B$y);
};
var F,
    S,
    Z,
    Q,
    A,
    G,
    C,
    E,
    K,
    O,
    M,
    B,
    J,
    P,
    T,
    W,
    U,
    R,
    D,
    N,
    L0,
    W_,
    f9,
    o8,
    d7,
    m1,
    k4,
    C1,
    t_,
    b$,
    l5,
    R$,
    L9,
    G8,
    A1,
    S4,
    t3,
    u;
F = c8 => {
    var g5;
    g5 = c8.timezoneJS = {};
    c8.CIQ = m3;
    m3.inheritsFrom = function (M$, U0, P1) {
        var q4, C$d, F_m, l0F;
        q4 = U0.prototype || Object.getPrototypeOf(U0);
        x2dci.J8h();
        C$d = -358944174;
        F_m = -371888614;
        l0F = 2;
        for (var E7u = 1; x2dci.O$R(E7u.toString(), E7u.toString().length, '34045' * 1) !== C$d; E7u++) {
            M$.prototype = P1 == !0 || !U0 !== '' ? new U0() : Object.create(q4);
            Object.defineProperties(M$.prototype, {
                constructor: { configurable: !!0, enumerable: !![], value: M$, writable: !{} },
                parent: { configurable: ![], enumerable: !![], value: q4, writable: !!0 },
            });
            l0F += 2;
        }
        if (x2dci.O$R(l0F.toString(), l0F.toString().length, 69612) !== F_m) {
            M$.prototype = P1 === !!0 && +U0 === '' ? new U0() : Object.create(q4);
            Object.defineProperties(M$.prototype, {
                constructor: { configurable: !!{}, enumerable: !!0, value: M$, writable: !'' },
                parent: { configurable: !!{}, enumerable: !{}, value: q4, writable: !!{} },
            });
        }
        M$.prototype = P1 !== !1 && typeof U0 === 'function' ? new U0() : Object.create(q4);
        Object.defineProperties(M$.prototype, {
            constructor: { configurable: !0, enumerable: !!'', value: M$, writable: !'' },
            parent: { configurable: !![], enumerable: !'1', value: q4, writable: !!{} },
        });
    };
    m3.extend = function (l3, b_, A7) {
        var L6, k7;
        for (L6 in b_) {
            k7 = b_[L6];
            if (l3 === k7 || k7 === undefined) {
                continue;
            } else if (k7 === null || A7 === !![]) {
                l3[L6] = k7;
            } else if (k7.constructor == Array) {
                l3[L6] = k7.slice();
            } else if (k7.constructor == Object) {
                l3[L6] = m3.extend(typeof l3[L6] === 'object' && l3[L6] !== null ? l3[L6] : {}, k7);
            } else {
                l3[L6] = k7;
            }
        }
        return l3;
    };
    m3.activateImports = function (...i$) {
        x2dci.J8h();
        var n9;
        n9 = this;
        if (!n9.activatedImports) {
            n9.activatedImports = {};
        }
        i$.forEach(k5 => {
            if (typeof k5 == 'function') {
                if (!(k5.__guid in n9.activatedImports)) {
                    k5.__guid = n9.uniqueID(!!{});
                    n9.activatedImports[k5.__guid] = k5.__name || k5.name;
                    k5(c8);
                }
            }
        });
    };
    x2dci.J8h();
    function m3() {}
};
S = v4 => {
    var G49, P8b, y7, n3, g4, W6N;
    G49 = 'un';
    G49 += 'defi';
    x2dci.r2m();
    G49 += 'ned';
    P8b = 'und';
    P8b += 'efined';
    y7 = typeof window !== P8b ? window : typeof global !== G49 ? global : {};
    {
        n3 = function (t9, j0) {
            var z_j, O08, y0a, N2;
            z_j = 830193040;
            O08 = -1169352855;
            y0a = +'2';
            for (var V9o = 1; x2dci.q2D(V9o.toString(), V9o.toString().length, 3278) !== z_j; V9o++) {
                N2 = document.createEvent('Event');
                N2.initEvent(t9, !!(j0 && j0.bubbles), !!(j0 && j0.cancelable));
                y0a += 2;
            }
            if (x2dci.O$R(y0a.toString(), y0a.toString().length, '33528' << 64) !== O08) {
                N2 = document.createEvent('');
                N2.initEvent(t9, ~+(j0 || j0.bubbles), +~(j0 || j0.cancelable));
            }
            return N2;
        };
        if (y7.Event && typeof y7.Event !== 'function') {
            n3.prototype = y7.Event.prototype;
            y7.Event = n3;
        }
        g4 = function (y6, n7) {
            var e4;
            e4 = document.createEvent('CustomEvent');
            e4.initCustomEvent(y6, !!(n7 && n7.bubbles), !!(n7 && n7.cancelable), n7 && n7.detail);
            return e4;
        };
        if (y7.CustomEvent && typeof y7.CustomEvent !== 'function') {
            g4.prototype = y7.CustomEvent.prototype;
            y7.CustomEvent = g4;
        }
    }
    {
        W6N = 'unde';
        W6N += 'fi';
        W6N += 'n';
        W6N += 'ed';
        if (typeof global !== W6N) {
            if (typeof global.CanvasRenderingContext2D === 'undefined') {
                global.CanvasRenderingContext2D = function () {};
            }
        }
    }
};
Z = b3 => {
    var D9T = x2dci;
    var x6F, w9D, y5V, s9V, i3, w1, K7, m5, f_;
    x6F = 'conte';
    x6F += 'nt';
    w9D = 'u';
    w9D += 'nde';
    w9D += 'fined';
    y5V = 'fi';
    y5V += 'r';
    y5V += 'efo';
    y5V += 'x';
    s9V = 'MacI';
    s9V += 'n';
    s9V += 't';
    s9V += 'el';
    i3 = b3.CIQ;
    w1 = typeof navigator !== 'undefined' ? navigator : { userAgent: '' };
    K7 = w1.userAgent;
    m5 = typeof window !== 'undefined' ? window : {};
    f_ = typeof document !== 'undefined' ? document : {};
    i3.ipad = K7.indexOf('iPad') != -('1' >> 32) || (w1.platform === s9V && w1.maxTouchPoints > 1);
    i3.iphone = K7.indexOf('iPhone') != -('1' ^ 0);
    D9T.C$o(0);
    var q6x = D9T.d58(19, 20);
    i3.isAndroid = K7.toLowerCase().indexOf('android') > q6x;
    i3.isIE = K7.toLowerCase().indexOf('msie') > -1 || K7.indexOf('Trident/') > -1;
    D9T.M8Y(1);
    var n8r = D9T.c6Y(6, 15, 9, 7, 916);
    i3.isEdge = K7.indexOf('Edge/') > n8r;
    D9T.M8Y(2);
    var d1T = D9T.c6Y(20, 21);
    i3.isSafari = K7.indexOf('Safari/') > d1T;
    i3.isIOS7 = K7.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
    i3.isIOS8 = K7.match(/(iPad|iPhone);.*CPU.*OS 8_\d/i);
    i3.isIOS9 = K7.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i);
    i3.isIOS10 = K7.match(/(iPad|iPhone);.*CPU.*OS 10_\d/i);
    i3.isIOS7or8 = i3.isIOS7 || i3.isIOS8 || i3.isIOS9 || i3.isIOS10;
    i3.isMobile = i3.isAndroid || i3.ipad || i3.iphone;
    i3.touchDevice = f_.ontouchstart !== undefined || w1.maxTouchPoints > 1;
    i3.isSurface = i3.touchDevice && (i3.isEdge || i3.isIE || K7.indexOf('Edg/') > -1);
    i3.is_chrome = K7.toLowerCase().indexOf('chrome') > -1 && !i3.isEdge;
    D9T.M8Y(3);
    var e5r = D9T.c6Y(19, 2, 16, 0);
    i3.isFF = K7.toLowerCase().indexOf(y5V) > e5r;
    i3.isSurfaceApp = m5.MSApp;
    i3.isWebComponentsSupported =
        typeof document !== w9D &&
        'registerElement' in document &&
        'import' in document.createElement('link') &&
        x6F in document.createElement('template');
    i3.noKeyboard = i3.isMobile || i3.isSurfaceApp;
};
Q = o$ => {
    var i8, m6, C3;
    if (!o$.SplinePlotter) {
        o$.SplinePlotter = {};
    }
    i8 = o$.CIQ;
    m6 = o$.SplinePlotter;
    C3 = function (o5, I1, K_, Y9) {
        var M8, h1, N$;
        M8 = 0;
        if (!Y9) {
            Y9 = [];
        }
        if (!I1 || I1 < 0) {
            I1 = 0;
        }
        h1 = o5.length;
        function G_(g8, A4, u5) {
            var Y4c = x2dci;
            Y4c.r2m();
            [1, 2].forEach(g6 => {
                A4[g6].cp = {};
                [
                    (5560, 380) !== (7280, 7346)
                        ? 6326 != 6033
                            ? 'x'
                            : 1522 < (566.45, 4060)
                            ? 877.64
                            : ('c', 'C')
                        : (0x20d4, 0x20b6),
                    7490 !== 3340 ? 'y' : (6960, 757.52) === ('764' * 1, +'841') ? +'1.35e+3' : 0x2087,
                ].forEach(function (d$) {
                    var O9;
                    Y4c.C$o(0);
                    var l22 = Y4c.c6Y(72, 8);
                    Y4c.C$o(3);
                    var h73 = Y4c.c6Y(25, 4, 4, 19);
                    Y4c.C$o(4);
                    var f_r = Y4c.d58(16, 218, 15, 1, 7);
                    Y4c.M8Y(5);
                    var z4x = Y4c.c6Y(2, 6, 30, 32, 8);
                    Y4c.C$o(0);
                    var K4S = Y4c.d58(22, 20);
                    Y4c.M8Y(6);
                    var G4F = Y4c.c6Y(8, 11, 12, 14, 3);
                    Y4c.M8Y(7);
                    var G5X = Y4c.c6Y(14, 7, 9);
                    Y4c.C$o(8);
                    var m7l = Y4c.c6Y(6, 4, 1);
                    Y4c.C$o(9);
                    var D58 = Y4c.d58(1, 149, 8, 15, 17);
                    Y4c.M8Y(10);
                    var T7z = Y4c.c6Y(19, 11, 6);
                    Y4c.C$o(11);
                    var w_j = Y4c.c6Y(11, 26, 2, 15);
                    Y4c.M8Y(0);
                    var p6Z = Y4c.d58(4, 2);
                    Y4c.C$o(12);
                    var k9M = Y4c.c6Y(15, 1, 17, 17, 21);
                    Y4c.M8Y(13);
                    var J3u = Y4c.c6Y(9, 14, 14, 9, 0);
                    Y4c.C$o(14);
                    var a23 = Y4c.d58(17, 17, 3);
                    O9 =
                        ('1' >> l22) /
                        (('1' ^ 0) +
                            Math.sqrt(
                                Math.pow(A4[h73 * g6 - f_r].x - A4[+'2' * g6 - z4x].x, '2' | K4S) +
                                    Math.pow(A4[G4F * g6 - +'1'].y - A4[G5X * g6 - m7l].y, D58)
                            ) /
                                Math.sqrt(Math.pow(A4[T7z].x - A4[w_j].x, p6Z) + Math.pow(A4[k9M].y - A4[J3u].y, a23)));
                    Y4c.C$o(15);
                    var a4i = Y4c.c6Y(6, 1, 33, 5);
                    Y4c.M8Y(16);
                    var Y$i = Y4c.d58(5, 0, 4, 18);
                    Y4c.C$o(17);
                    var K98 = Y4c.d58(1, 6, 3, 8, 1);
                    Y4c.C$o(18);
                    var U2Y = Y4c.d58(2, 26, 2, 13);
                    A4[g6].cp[d$] =
                        A4[g6][d$] + (a4i - Y$i * g6) * (A4[g6 + K98][d$] - A4[g6 - U2Y][d$]) * u5 * (O9 || '0' ^ 0);
                    if (A4[g6].cp[d$] < Math.min(A4[1][d$], A4[2][d$])) {
                        A4[g6].cp[d$] = Math.min(A4[+'1'][d$], A4[+'2'][d$]);
                    }
                    if (A4[g6].cp[d$] > Math.max(A4[1][d$], A4[+'2'][d$])) {
                        A4[g6].cp[d$] = Math.max(A4[1][d$], A4[2][d$]);
                    }
                });
            });
            if (g8 === 0) {
                K_.quadraticCurveTo(A4[2].cp.x, A4[2].cp.y, A4[2].x, A4[2].y);
            } else if (g8 === h1 - ('4' >> 32)) {
                K_.quadraticCurveTo(A4['1' | 1].cp.x, A4[1].cp.y, A4[2].x, A4[2].y);
            } else {
                K_.bezierCurveTo(A4[+'1'].cp.x, A4[+'1'].cp.y, A4[2].cp.x, A4[2].cp.y, A4[2].x, A4[+'2'].y);
            }
        }
        K_.moveTo(o5[+'0'], o5[1]);
        for (var h2 = 0; h2 < h1 - 3; h2 += 2) {
            J2(h2);
            N$ = [];
            N$[0] = { x: o5[Math.max(0, h2 - 2)], y: o5[Math.max(1, h2 - 1)] };
            N$[1] = { x: o5[h2], y: o5[h2 + 1] };
            N$[2] = { x: o5[h2 + 2], y: o5[h2 + +'3'] };
            N$[3] = { x: o5[Math.min(h1 - 2, h2 + 4)], y: o5[Math.min(h1 - 1, h2 + 5)] };
            if (h1 === +'4') {
                I1 = 0;
            }
            G_(h2, N$, I1);
        }
        function J2(B8) {
            x2dci.J8h();
            var z9;
            if (M8 == Y9.length) {
                return;
            }
            z9 = Y9[M8];
            if (z9.coord['0' * 1] == o5[B8] && z9.coord['1' | 1] == o5[B8 + 1]) {
                K_.stroke();
                K_.strokeStyle = z9.color;
                K_.setLineDash(z9.pattern);
                K_.lineDashOffset = 0;
                K_.lineWidth = z9.width;
                K_.beginPath();
                K_.moveTo(o5[B8], o5[B8 + ('1' | 1)]);
                M8++;
            }
        }
    };
    if (!o$.SplinePlotter.plotSpline) {
        o$.SplinePlotter.plotSpline = C3;
    }
    i8.clearCanvas = function (Z8, a0) {
        var d7x = x2dci;
        d7x.r2m();
        var q0, X5, U$;
        Z8.isDirty = !{};
        q0 = Z8.context;
        q0.clearRect(0, 0, Z8.width, Z8.height);
        if (i8.isAndroid && !i8.is_chrome && !i8.isFF) {
            if (i8.ChartEngine.useOldAndroidClear && a0) {
                q0.fillStyle = a0.containerColor;
                d7x.M8Y(0);
                q0.fillRect(+'0', d7x.c6Y('0', 0), Z8.width, Z8.height);
                d7x.C$o(19);
                q0.clearRect(d7x.d58(64, '0'), d7x.d58('0', 0, d7x.M8Y(20)), Z8.width, Z8.height);
            }
            X5 = Z8.width;
            Z8.width = 1;
            Z8.width = X5;
        }
        U$ = a0.chart.canvasShim.childNodes.length > 0;
        if (a0.useBackgroundCanvas || U$) {
            a0.useBackgroundCanvas = U$;
            if (Z8 == a0.chart.canvas) {
                i8.clearCanvas(a0.chart.backgroundCanvas, a0);
            }
        }
    };
    i8.fillTransparentCanvas = function (S6, Z5, f2, d2) {
        x2dci.r2m();
        var J_;
        J_ = S6.globalCompositeOperation;
        S6.globalCompositeOperation = 'destination-over';
        S6.fillStyle = Z5;
        x2dci.C$o(0);
        S6.fillRect(x2dci.c6Y('0', 0), 0, f2, d2);
        S6.globalCompositeOperation = J_;
    };
    i8.convertBoxToPixels = function (n4, v$, W8) {
        var f4, f0, m0, i0, O8;
        f4 = n4.panels[v$];
        f0 = n4.pixelFromTick(W8.x0, f4.chart);
        m0 = n4.pixelFromTick(W8.x1, f4.chart);
        i0 = W8.cy0 || W8.cy0 === 0 ? W8.cy0 : n4.pixelFromValueAdjusted(f4, W8.x0, W8.y0);
        O8 = W8.cy1 || W8.cy1 === 0 ? W8.cy1 : n4.pixelFromValueAdjusted(f4, W8.x1, W8.y1);
        return { x0: f0, x1: m0, y0: i0, y1: O8 };
    };
    i8.fillArea = function (s0, c5, I5) {
        var M_, k6, g0, R3, s$, s_, A6, F1, V6, p7, K1, q9;
        if (!c5.length) {
            return;
        }
        M_ = s0.chart.context;
        k6 = M_.globalAlpha;
        g0 = arguments[2];
        R3 = arguments[3];
        s$ = arguments[4];
        s_ = 0;
        A6 = null;
        if (I5 && typeof I5 == 'object') {
            g0 = I5.color;
            R3 = I5.opacity;
            s_ = I5.tension;
            s$ = I5.panelName;
            A6 = I5.yAxis;
        }
        if (!R3 && R3 !== 0) {
            R3 = 0.2;
        }
        if (g0 == 'auto') {
            g0 = s0.defaultColor;
        }
        M_.globalAlpha = R3;
        if (g0) {
            M_.fillStyle = g0;
        }
        F1 = Number.MAX_VALUE;
        x2dci.C$o(21);
        V6 = x2dci.d58(F1, '1');
        p7 = s0.panels[s$];
        if (p7) {
            V6 = (A6 || p7.yAxis).top;
            F1 = (A6 || p7.yAxis).bottom;
            M_.save();
            M_.beginPath();
            M_.rect(p7.left, V6, p7.width, F1 - V6);
            M_.clip();
        }
        M_.beginPath();
        if (s_) {
            q9 = [];
            for (K1 = 0; K1 < c5.length - 2; K1++) {
                q9.push(c5[K1]['0' - 0], c5[K1][+'1']);
            }
            m6.plotSpline(q9, s_, M_);
            for (K1 = c5.length - 2; K1 < c5.length; K1++) {
                M_.lineTo(Math.round(c5[K1][0]), Math.round(c5[K1][1]));
            }
        } else {
            M_.moveTo(c5[0][0], c5[+'0']['1' | 1]);
            for (K1 = 1; K1 < c5.length; K1++) {
                M_.lineTo(c5[K1][0], c5[K1][1]);
            }
        }
        M_.closePath();
        M_.fill();
        if (p7) {
            M_.restore();
        }
        M_.globalAlpha = k6;
    };
    i8.prepareChannelFill = function (A9, r$) {
        var F7, D4, A8, r4, b8, d3, c1, B2;
        if (!r$ || r$ instanceof Array) {
            r$ = arguments[2];
        }
        if (!r$.gapDisplayStyle && r$.gapDisplayStyle !== !1) {
            r$.gapDisplayStyle = r$.gaps;
        }
        F7 = A9.panels[r$.panelName];
        D4 = A9.chart;
        A8 = D4.context.strokeStyle;
        r4 = { noDraw: r$.noDraw, gapDisplayStyle: r$.gapDisplayStyle };
        b8 = i8.ensureDefaults(r$, { noDraw: !!1, gapDisplayStyle: {}, yAxis: F7.yAxis });
        d3 = A9.plotDataSegmentAsLine(r$.topBand, F7, b8);
        c1 = A9.plotDataSegmentAsLine(r$.bottomBand, F7, b8);
        r$.noDraw = r4.noDraw;
        r$.gapDisplayStyle = r4.gapDisplayStyle;
        B2 = [];
        for (var O_ = 0; O_ < d3.points.length; O_ += 2) {
            B2.push([d3.points[O_], d3.points[O_ + 1]]);
        }
        for (var B_ = c1.points.length - 1; B_ >= 0; B_ -= 2) {
            B2.push([c1.points[B_ - 1], c1.points[B_]]);
        }
        i8.fillArea(A9, B2, r$);
        return;
    };
    i8.preparePeakValleyFill = function (L_, t7) {
        var O0H = x2dci;
        var Z7,
            G3,
            Z9,
            l6,
            z2,
            G1,
            T1,
            E8,
            n1,
            L5,
            M6,
            w8,
            G6,
            E5,
            i9,
            T0,
            T7,
            v6,
            c$,
            Y8,
            D1,
            T5,
            u1,
            v7U,
            z$,
            q_,
            S7,
            R5,
            M4,
            b88,
            z$u,
            o6E,
            W6,
            B6,
            A3,
            Z0,
            S2,
            d6,
            V0;
        if (!t7 || t7 instanceof Array) {
            t7 = arguments[+'2'];
        }
        if (!t7.gapDisplayStyle && t7.gapDisplayStyle !== ![]) {
            t7.gapDisplayStyle = t7.gaps;
        }
        Z7 = L_.panels[t7.panelName];
        G3 = Z7.yAxis;
        Z9 = L_.chart;
        l6 = Z9.context;
        z2 = l6.strokeStyle;
        G1 = { noDraw: t7.noDraw, gapDisplayStyle: t7.gapDisplayStyle };
        T1 = L_.plotDataSegmentAsLine(t7.band, Z7, i8.ensureDefaults(t7, { noDraw: !!'1', gapDisplayStyle: {} }));
        t7.noDraw = G1.noDraw;
        t7.gapDisplayStyle = G1.gapDisplayStyle;
        E8 = t7.threshold;
        n1 = t7.direction;
        L5 = t7.reverse;
        M6 = t7.gapDisplayStyle;
        if (t7.yAxis) {
            G3 = t7.yAxis;
        }
        O0H.r2m();
        w8 = -Number.MAX_VALUE;
        G6 = Number.MAX_VALUE;
        E5 = L5 ? w8 : G6;
        if (E8 || E8 === 0) {
            E5 = L_.pixelFromPrice(E8, Z7, G3);
        }
        i9 = [];
        T0 = T1.points.length;
        for (var o0 = 0; o0 < T0; o0 += +'2') {
            T7 = T1.points[o0];
            O0H.M8Y(22);
            v6 = T1.points[O0H.d58(1, o0)];
            if (t7.roundOffEdges) {
                if (o0 === 0) {
                    T7 = Math.floor(T7);
                } else if (o0 + 2 == T0) {
                    T7 = Math.ceil(T7);
                }
            }
            if (isNaN(v6)) continue;
            D1 = (v6 > E5 && n1 > 0) || (v6 < E5 && n1 < +'0');
            if (!D1) {
                i9.push([T7, v6]);
                w8 = Math.max(v6, w8);
                G6 = Math.min(v6, G6);
            }
            if (o0 < T0 - 3) {
                O0H.C$o(22);
                c$ = T1.points[O0H.d58(2, o0)];
                O0H.C$o(22);
                Y8 = T1.points[O0H.d58(3, o0)];
                if ((v6 < E5 && Y8 > E5) || (v6 > E5 && Y8 < E5)) {
                    O0H.M8Y(23);
                    T7 += O0H.c6Y(c$, v6, v6, E5, Y8, T7);
                    i9.push([T7, E5]);
                }
            }
        }
        T0 = i9.length;
        if (!T0) {
            return;
        }
        T5 = t7.edgeParameters;
        u1 = t7.edgeHighlight;
        if (u1) {
            if (T5.lineWidth > 100) {
                T5.lineWidth = 1;
            }
            l6.save();
            l6.beginPath();
            for (var l2 = 0; l2 < T0 - 1; l2++) {
                v7U = 'se';
                v7U += 'gm';
                v7U += 'en';
                v7U += 't';
                z$ = i9[l2];
                O0H.M8Y(22);
                q_ = i9[O0H.d58(1, l2)];
                if (z$['1' | 0] == E5 && q_[1] == E5) continue;
                if (z$[0] == q_[0] && L_.layout.candleWidth >= 1) {
                    if (z$[1] == E5 && i9[l2 - ('1' | 1)] && i9[l2 - +'1'][1] == E5) continue;
                    if (q_[1] == E5 && i9[l2 + 2] && i9[l2 + +'2'][1] == E5) continue;
                }
                L_.plotLine(
                    i8.extend(
                        {
                            x0: z$['0' >> 32],
                            x1: q_[0],
                            y0: z$[1],
                            y1: q_[1],
                            color: t7.edgeHighlight,
                            type: v7U,
                            context: l6,
                            confineToPanel: Z7,
                            deferStroke: !0,
                        },
                        T5
                    )
                );
            }
            l6.stroke();
            l6.restore();
        }
        if (!E8 && E8 !== 0) {
            if (G3.flipped) {
                L5 = !L5;
            }
            E5 = L5 ? Math.min(G6, G3.top) : Math.max(w8, G3.bottom);
        }
        i9.push([i9[T0 - ('1' | 1)][0], E5], [i9[0][0], E5]);
        S7 = t7.opacity;
        if (!S7 && S7 !== 0) {
            t7.opacity = 0.3;
        }
        i8.fillArea(L_, i9, t7);
        if (
            M6 &&
            M6.color &&
            M6.fillMountain &&
            !t7.tension &&
            !i8.isTransparent(M6.color) &&
            !i8.isTransparent(t7.color)
        ) {
            l6.save();
            if (l6.fillStyle instanceof CanvasGradient) {
                R5 = i8.colorToHex(M6.color);
                O0H.M8Y(19);
                M4 = l6.createLinearGradient(O0H.c6Y(32, '0'), n1 === 1 ? Z7.top : Z7.bottom, 0, E5);
                M4.addColorStop(+'0', i8.hexToRgba(R5, '60' ^ 0));
                M4.addColorStop(+'1', i8.hexToRgba(R5, 10));
                l6.fillStyle = M4;
            } else {
                b88 = 210540913;
                O0H.M8Y(0);
                z$u = -O0H.d58('786904475', 0);
                o6E = 2;
                for (var y2b = '1' >> 64; O0H.q2D(y2b.toString(), y2b.toString().length, 25273) !== b88; y2b++) {
                    l6.fillStyle = M6.color;
                    o6E += +'2';
                }
                if (O0H.O$R(o6E.toString(), o6E.toString().length, 48196) !== z$u) {
                    l6.fillStyle = M6.color;
                }
                l6.fillStyle = M6.color;
            }
            W6 = [];
            B6 = { opacity: t7.opacity, panelName: t7.panelName };
            l6.beginPath();
            for (o0 = 0; o0 < T1.gapAreas.length; o0++) {
                A3 = T1.gapAreas[o0];
                Z0 = A3.start;
                S2 = A3.end;
                d6 = A3.threshold;
                if (Z0) {
                    O0H.M8Y(19);
                    W6 = [
                        [Z0[O0H.d58(32, '0')], Z0[1]],
                        [Z0[0], d6],
                    ];
                } else {
                    W6.push([S2[0], d6], [S2[0], t7.step ? W6[0][1] : S2[1]]);
                }
                if (W6.length == +'4') {
                    i8.fillArea(L_, W6, B6);
                    V0 = i8.extend(
                        {
                            x1: W6['3' << 32][+'0'],
                            y0: W6[0][1],
                            type: 'segment',
                            deferStroke: !0,
                            context: l6,
                            confineToPanel: Z7,
                        },
                        M6
                    );
                    if (t7.step) {
                        L_.plotLine(i8.extend({ x0: W6[0][0], y1: W6[0][1] }, V0));
                        L_.plotLine(i8.extend({ x0: W6[3][0], y1: W6[3][1] }, V0));
                    } else {
                        L_.plotLine(i8.extend({ x0: W6[0][+'0'], y1: W6[3][1] }, V0));
                    }
                }
            }
            l6.stroke();
            l6.restore();
        }
        t7.opacity = S7;
    };
    i8.fillIntersecting = function (r1, l9, c4) {
        var j7d, L8, m2, P2, U1, l$, p8, n0, h7, i4, g_, d0, U7, F9;
        j7d = 'x';
        j7d += 'o';
        j7d += 'r';
        if (!c4 || c4 instanceof Array) {
            c4 = arguments[3];
        }
        x2dci.J8h();
        L8 = c4.topBand;
        m2 = c4.bottomBand;
        P2 = c4.topSubBand;
        U1 = c4.bottomSubBand;
        l$ = c4.topColor;
        p8 = c4.bottomColor;
        n0 = l9;
        if (n0.panel) {
            if (n0.outputs && n0.outputMap) {
                if (!l$) {
                    l$ = n0.outputs[n0.outputMap[L8]];
                }
                if (!p8) {
                    p8 = n0.outputs[n0.outputMap[m2]];
                }
            }
            n0 = n0.panel;
        }
        n0 = r1.panels[n0];
        h7 = r1.chart.context;
        i4 = h7.canvas;
        g_ = r1.scratchContext;
        if (!g_) {
            g_ = r1.scratchContext = i4.cloneNode(!![]).getContext('2d');
        }
        d0 = g_.canvas;
        d0.height = i4.height;
        d0.width = i4.width;
        d0.context = g_;
        i8.clearCanvas(d0, r1);
        U7 = 0.3;
        if (c4.opacity) {
            U7 = c4.opacity;
        }
        g_.globalCompositeOperation = j7d;
        r1.chart.context = g_;
        F9 = {
            band: L8,
            subField: P2,
            color: l$,
            opacity: 1,
            panelName: n0.name,
            yAxis: c4.topAxis,
            skipTransform: c4.skipTransform,
            tension: c4.tension,
            roundOffEdges: !!'1',
            step: c4.step,
        };
        i8.preparePeakValleyFill(r1, F9);
        i8.extend(F9, { band: m2, subField: U1, color: p8, yAxis: c4.bottomAxis });
        i8.preparePeakValleyFill(r1, F9);
        h7.save();
        h7.globalAlpha = U7;
        h7.drawImage(d0, 0, 0);
        h7.restore();
        r1.chart.context = h7;
    };
    i8.drawLegendItem = function (P4, h9, x7, H$, S0) {
        var K9l = x2dci;
        var B1, J7, p_, e1, G5;
        if (!S0) {
            K9l.M8Y(0);
            S0 = K9l.d58('1', 0);
        }
        B1 = h9[0];
        J7 = h9[+'1'];
        p_ = 10;
        e1 = 10;
        G5 = P4.chart.context;
        G5.globalAlpha = S0;
        G5.fillStyle = H$;
        G5.fillRect(B1, J7, p_, e1);
        G5.globalAlpha = 1;
        K9l.M8Y(24);
        B1 += K9l.d58('2', p_);
        G5.fillStyle = P4.defaultColor;
        G5.fillText(x7, B1, J7);
        K9l.C$o(22);
        var D6g = K9l.d58(5, 1);
        B1 += G5.measureText(x7).width + D6g;
        return [B1, J7];
    };
    i8.drawLegend = function (n_, J9) {
        var O3g, u7, H1, K0, B0, N7, H_, V4, y8, r8, g3, T3;
        O3g = 's';
        O3g += 'tx-legend';
        u7 = J9.coordinates;
        H1 = n_.chart.context;
        x2dci.J8h();
        H1.textBaseline = 'top';
        K0 = H1.font;
        n_.canvasFont(O3g, H1);
        B0 = J9.chart || n_.chart;
        if (!u7) {
            u7 = B0.legend;
        }
        N7 = [u7.x, u7.y];
        H_ = n_.defaultColor;
        for (var V3 = 0; V3 < +'2'; V3++) {
            for (var Z1 in J9.legendColorMap) {
                V4 = J9.legendColorMap[Z1];
                if (V4.isBase && (V3 || J9.noBase)) continue;
                if (!V4.isBase && !V3) continue;
                if (V4.color instanceof Array) {
                    r8 = V4.color;
                    for (y8 = r8.length - +'1'; y8 >= 0; y8--) {
                        if (i8.isTransparent(r8[y8])) {
                            r8.splice(y8, 1);
                        }
                    }
                    if (r8.length > 1) {
                        g3 = H1.createLinearGradient(N7['0' - 0], N7[1], N7[0] + 10, N7[1]);
                        for (y8 = 0; y8 < r8.length; y8++) {
                            g3.addColorStop(y8 / (r8.length - 1), r8[y8]);
                        }
                        H_ = g3;
                    } else if (r8.length > 0) {
                        H_ = r8[0];
                    } else {
                        H_ = n_.getCanvasColor('stx_line_chart');
                    }
                } else if (V4.color) {
                    H_ = V4.color;
                } else {
                    H_ = null;
                }
                if (H_) {
                    T3 = Z1;
                    if (V4.display) {
                        T3 = V4.display;
                    }
                    if (!T3) {
                        if (B0.symbolDisplay) {
                            T3 = B0.symbolDisplay;
                        } else {
                            T3 = B0.symbol;
                        }
                    }
                    if (N7[0] + H1.measureText(T3).width > B0.panel.right) {
                        x2dci.M8Y(25);
                        var g0e = x2dci.c6Y(18, 23, 11);
                        N7 = [u7.x, u7.y + H1.measureText('M').width + g0e];
                    }
                    N7 = i8.drawLegendItem(n_, N7, T3, H_, V4.opacity);
                }
            }
        }
        H1.font = K0;
    };
};
A = Y1 => {
    var V3S = x2dci;
    var t2;
    t2 = Y1.CIQ;
    t2.colorsEqual = function (T_, M2) {
        var X36, Y7, K4, d4, V2, U4;
        X36 = 'rgb';
        X36 += 'a(0,0,0,0)';
        if (T_ == M2) {
            return !'';
        }
        if (!T_ && !M2) {
            return !!{};
        }
        if (!T_ || !M2) {
            return !{};
        }
        if (T_ == 'transparent') {
            T_ = 'rgba(0,0,0,0)';
        }
        if (M2 == 'transparent') {
            M2 = X36;
        }
        Y7 = /^rgba\(.*,(.+)\)/;
        K4 = T_.match(Y7);
        d4 = M2.match(Y7);
        K4 = K4 ? parseFloat(K4[+'1']) : 1;
        d4 = d4 ? parseFloat(d4[1]) : 1;
        if (K4 != d4) {
            return !{};
        }
        V2 = t2.colorToHex(T_);
        U4 = t2.colorToHex(M2);
        return V2.toLowerCase() == U4.toLowerCase();
    };
    V3S.J8h();
    t2.colorToHex = function (I3) {
        var c8B, R1, N6, G0, c6, A$, H6, v_, k9;
        c8B = 'transparen';
        c8B += 't';
        if (!t2.colorToHexMapping) {
            t2.colorToHexMapping = {};
        }
        if (!I3 || I3 == c8B) {
            I3 = '#000000';
        }
        if (t2.colorToHexMapping[I3]) {
            return t2.colorToHexMapping[I3];
        }
        if (I3.substr(0, 1) === '#') {
            if (I3.length == 4) {
                V3S.M8Y(26);
                var Z39 = V3S.d58(3, 5, 3);
                V3S.M8Y(0);
                var X6X = V3S.c6Y(20, 18);
                V3S.M8Y(22);
                var g5N = V3S.d58(1, 0);
                V3S.C$o(0);
                var f0P = V3S.c6Y(4, 3);
                I3 = t2.colorToHexMapping[I3] =
                    '#' +
                    Array(3).join(I3.substr('1' - 0, Z39)) +
                    Array(3).join(I3.substr(X6X, g5N)) +
                    Array(3).join(I3.substr('3' >> 32, f0P));
            }
            return I3;
        }
        R1 = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(I3);
        if (!R1) {
            R1 = /(.*?)rgba\((\d+), ?(\d+), ?(\d+),.*\)/.exec(I3);
        }
        if (!R1) {
            N6 = z5(I3);
            t2.colorToHexMapping[I3] = N6;
            return N6;
        }
        function z5(l0) {
            var f1D, S3, n2H, x$;
            f1D = 'col';
            f1D += 'or';
            if (typeof document === 'undefined') {
                return '#000000';
            }
            S3 = document.querySelector('.ciq_color_converter');
            if (!S3) {
                n2H = 'n';
                n2H += 'one';
                S3 = document.createElement('textarea');
                S3.className = 'ciq_color_converter';
                S3.style.display = n2H;
                document.body.appendChild(S3);
            }
            S3.style.color = '#000000';
            S3.style.color = l0;
            x$ = getComputedStyle(S3).getPropertyValue(f1D);
            R1 = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(x$);
            if (R1) {
                return t2.colorToHex(x$);
            } else if (x$.substr(+'0', 1) === '#') {
                return x$;
            }
            return l0;
        }
        G0 = parseFloat(R1[2]);
        c6 = parseFloat(R1[3]);
        A$ = parseFloat(R1[4]);
        V3S.M8Y(27);
        H6 = V3S.d58(A$, 8, c6, G0, 16);
        v_ = H6.toString(16);
        for (var d_ = v_.length; d_ < 6; d_++) {
            V3S.M8Y(22);
            v_ = V3S.d58(
                v_,
                9330 > 9330
                    ? 2290 >= 1906
                        ? ('152.24' * 1, 1303) == '1849' << 0
                            ? (768, '4.10e+2' - 0)
                            : 9.93e3
                        : 835.73
                    : '0'
            );
        }
        k9 = R1[+'1'] + '#' + v_;
        t2.colorToHexMapping[I3] = k9;
        return k9;
    };
    t2.hexToRgba = function (S$, O2) {
        var B$x, r2Q, o9, E6, l7, L$, j8;
        B$x = 'r';
        B$x += 'g';
        B$x += 'b';
        B$x += 'a';
        if (!S$ || S$ == 'transparent') {
            S$ = 'rgba(0,0,0,0)';
        }
        if (S$.substr(0, 4) === B$x) {
            r2Q = 'r';
            r2Q += 'g';
            r2Q += 'ba';
            r2Q += '(';
            o9 = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(S$);
            E6 = o9[5];
            if (O2 || O2 === 0) {
                E6 = O2;
            }
            if (E6 > 1) {
                V3S.M8Y(28);
                E6 = V3S.c6Y('100', E6);
            }
            V3S.M8Y(29);
            var N9w = V3S.c6Y(6, 11, 6, 104);
            V3S.C$o(30);
            var I8Y = V3S.c6Y(14, 87800, 83396);
            V3S.M8Y(0);
            var B_Y = V3S.d58(24780, 20650);
            V3S.M8Y(22);
            var X3w = V3S.d58(19, 1091);
            V3S.M8Y(22);
            var e1Z = V3S.c6Y(3, 0);
            V3S.M8Y(25);
            var p7k = V3S.c6Y(0, 4, 5);
            V3S.C$o(0);
            var B2R = V3S.d58(18, 14);
            V3S.C$o(30);
            var j6A = V3S.d58(7, 5450, 4353);
            V3S.C$o(31);
            var c8L = V3S.c6Y(9021, 16, 135643, 17, 19);
            V3S.M8Y(30);
            var y3g = V3S.d58(2, 5436, 14);
            V3S.M8Y(32);
            var R4W = V3S.d58(7, 10, 39000, 2727274, 18);
            V3S.C$o(33);
            var P7M = V3S.d58(2177, 2177, 2160, 1, 5);
            V3S.M8Y(22);
            var Z1h = V3S.c6Y(6, 566);
            V3S.M8Y(16);
            var K0m = V3S.c6Y(2, 7538, 3, 15090);
            V3S.C$o(34);
            var v4g = V3S.c6Y(691, 11049, 1, 17);
            V3S.M8Y(35);
            var O$k = V3S.d58(311730, 8, 5, 10, 7993);
            V3S.C$o(36);
            var p6o = V3S.d58(9079, 17, 9084, 154428);
            V3S.C$o(37);
            var R9w = V3S.c6Y(2, 3, 3, 205, 0);
            return (
                r2Q +
                o9[N9w] +
                (994.28 !== (I8Y, B_Y) ? ',' : X3w) +
                o9[e1Z] +
                ((762.61, '11' * p7k) === (+'9750', +'8779') ? 153.5 : ',') +
                o9[B2R] +
                (233.06 > j6A ? c8L : y3g >= (R4W, P7M) ? ',' : Z1h) +
                E6 +
                ((297.78, K0m) > v4g ? (O$k !== 499.95 ? ')' : (p6o, !!{})) : (R9w, !!{}))
            );
        } else if (S$.substr(0, 3) === 'rgb') {
            S$ = t2.colorToHex(S$);
        }
        if (!O2 && O2 !== '0' * 1) {
            V3S.M8Y(38);
            O2 = V3S.d58('100', 1);
        }
        if (O2 <= 1) {
            V3S.M8Y(38);
            O2 = V3S.c6Y(O2, 100);
        }
        S$ = S$.replace('#', '');
        l7 = parseInt(S$.slice(0, 2), 16);
        L$ = parseInt(S$.slice(2, 4), 16);
        j8 = parseInt(S$.slice(4, 6), 16);
        if (isNaN(l7) || isNaN(L$) || isNaN(j8)) {
            console.log('CIQ.hexToRgba: invalid hex :', S$);
            return null;
        }
        V3S.C$o(39);
        return V3S.d58(
            (9348, 8170) <= (8600, 907.44) ? 'M' : ',',
            'rgba(',
            L$,
            100,
            j8,
            O2,
            l7,
            407.53 == (2456, '8478' ^ 0) ? 1.25e3 : ')',
            ',',
            ','
        );
    };
    t2.convertToNativeColor = function (J6) {
        var B3, i_;
        B3 = document.createElement('DIV');
        B3.style.color = J6;
        B3.style.display = 'none';
        document.body.appendChild(B3);
        i_ = getComputedStyle(B3).color;
        document.body.removeChild(B3);
        return i_;
    };
    t2.isTransparent = function (T9) {
        var W4;
        V3S.r2m();
        if (!T9) {
            return !{};
        }
        if (T9 == 'transparent') {
            return !!{};
        }
        W4 = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(T9);
        if (W4 === null) {
            return !'1';
        }
        if (parseFloat(W4[5]) === 0) {
            return !'';
        }
        return !{};
    };
    t2.hsv = function (D9) {
        var F9E, o_Q, z6p, W9, u2, P8, K6, d9, b9, E0, R8, O5, w4, E7;
        V3S.M8Y(38);
        F9E = -V3S.c6Y('280419664', 1);
        o_Q = 887083023;
        V3S.M8Y(0);
        z6p = V3S.d58('2', 0);
        for (var W6O = 1; V3S.q2D(W6O.toString(), W6O.toString().length, 62243) !== F9E; W6O++) {
            W9 = t2.colorToHex(D9);
            z6p += 2;
        }
        if (V3S.q2D(z6p.toString(), z6p.toString().length, 83685) !== o_Q) {
            W9 = t2.colorToHex(D9);
        }
        W9 = t2.colorToHex(D9);
        if (
            W9.substr(0, 1) === (('431.42' - 0, 960.57) == (5621, 977) ? 'K' : 93.31 !== (967.27, 4788) ? '#' : 0x1c95)
        ) {
            W9 = W9.slice(1);
        }
        for (var Y3 = W9.length; Y3 < '6' >> 32; Y3++) {
            V3S.M8Y(22);
            W9 = V3S.c6Y(W9, '0');
        }
        u2 = parseInt(W9.slice(0, 2), '16' << 64);
        P8 = parseInt(W9.slice(2, 4), 16);
        K6 = parseInt(W9.slice(+'4', '6' << 32), 16);
        V3S.C$o(20);
        d9 = V3S.d58('0', 0);
        b9 = 0;
        E0 = 0;
        u2 = parseInt(('' + u2).replace(/\s/g, ''), 10);
        P8 = parseInt(('' + P8).replace(/\s/g, ''), 10);
        K6 = parseInt(('' + K6).replace(/\s/g, ''), 10);
        if (u2 === null || P8 === null || K6 === null || isNaN(u2) || isNaN(P8) || isNaN(K6)) {
            console.log('CIQ.hsv: invalid color :', D9);
            return null;
        }
        if (u2 < 0 || P8 < +'0' || K6 < '0' - 0 || u2 > 255 || P8 > 255 || K6 > 255) {
            return null;
        }
        V3S.M8Y(40);
        u2 = V3S.d58(255, u2);
        V3S.M8Y(40);
        P8 = V3S.d58(255, P8);
        V3S.C$o(40);
        K6 = V3S.d58(255, K6);
        V3S.J8h();
        R8 = Math.min(u2, Math.min(P8, K6));
        O5 = Math.max(u2, Math.max(P8, K6));
        if (R8 == O5) {
            E0 = R8;
            return [0, 0, E0];
        }
        w4 = u2 == R8 ? P8 - K6 : K6 == R8 ? u2 - P8 : K6 - u2;
        E7 = u2 == R8 ? 3 : K6 == R8 ? 1 : 5;
        V3S.C$o(41);
        d9 = V3S.c6Y(w4, 60, O5, E7, R8);
        V3S.C$o(42);
        b9 = V3S.d58(O5, R8, O5);
        E0 = O5;
        return [d9, b9, E0];
    };
    t2.hsl = function (g9) {
        var G9, l8, I6, K9, T2, Y4, p0, a6, R2, D$;
        G9 = t2.colorToHex(g9);
        if (G9.substr(0, 1) === '#') {
            G9 = G9.slice(+'1');
        }
        for (var f1 = G9.length; f1 < +'6'; f1++) {
            V3S.C$o(22);
            G9 = V3S.d58(
                G9,
                428.16 === 5970
                    ? ('8.20e+3' * 1, 139.15)
                    : 832.37 < (656.48, 144.15)
                    ? ('a', 'g')
                    : 899.86 !== (111.27, 2420)
                    ? '0'
                    : (![], 'n')
            );
        }
        l8 = parseInt(G9.slice(0, 2), 16);
        I6 = parseInt(G9.slice(2, '4' << 32), 16);
        K9 = parseInt(G9.slice(4, '6' ^ 0), 16);
        l8 /= 255;
        I6 /= 255;
        K9 /= 255;
        T2 = Math.max(l8, I6, K9);
        Y4 = Math.min(l8, I6, K9);
        V3S.C$o(43);
        R2 = V3S.c6Y(2, T2, Y4);
        if (T2 == Y4) {
            p0 = a6 = 0;
        } else {
            V3S.M8Y(0);
            D$ = V3S.c6Y(T2, Y4);
            a6 = R2 > 0.5 ? D$ / (2 - T2 - Y4) : D$ / (T2 + Y4);
            switch (T2) {
                case l8:
                    V3S.M8Y(44);
                    p0 = V3S.c6Y(K9, I6, I6 < K9 ? 6 : 0, D$);
                    break;
                case I6:
                    V3S.C$o(44);
                    p0 = V3S.d58(l8, K9, 2, D$);
                    break;
                case K9:
                    V3S.C$o(45);
                    p0 = V3S.c6Y('4', l8, 0, I6, D$);
                    break;
            }
            p0 /= 6;
        }
        return [p0, a6, R2];
    };
    t2.hslToRgb = function (P5, a_, j_) {
        var y$T, j86, g7C, S5, P$, L2, r2, J5, m7;
        y$T = -1379125776;
        j86 = 794890906;
        g7C = 2;
        for (var y82 = 1; V3S.O$R(y82.toString(), y82.toString().length, 9138) !== y$T; y82++) {
            g7C += 2;
        }
        if (V3S.q2D(g7C.toString(), g7C.toString().length, 17256) !== j86) {
        }
        if (a_ === 0) {
            S5 = P$ = L2 = j_;
        } else {
            r2 = function r9(Y$, A5, v3) {
                V3S.J8h();
                if (v3 < 0) {
                    V3S.M8Y(46);
                    v3 += V3S.c6Y('1', 0);
                }
                if (v3 > 1) {
                    v3 -= 1;
                }
                if (v3 < 1 / ('6' - 0)) {
                    V3S.M8Y(47);
                    return V3S.d58(A5, 6, v3, Y$, Y$);
                }
                if (v3 < 1 / 2) {
                    return A5;
                }
                if (v3 < 2 / 3) {
                    V3S.M8Y(48);
                    return V3S.c6Y(6, Y$, 3, Y$, v3, 2, A5);
                }
                return Y$;
            };
            J5 = j_ < 0.5 ? j_ * (1 + a_) : j_ + a_ - j_ * a_;
            V3S.M8Y(49);
            m7 = V3S.d58(j_, J5, '2');
            V3S.M8Y(50);
            S5 = r2(m7, J5, V3S.d58(0, 1, '3', P5));
            P$ = r2(m7, J5, P5);
            V3S.C$o(51);
            L2 = r2(m7, J5, V3S.d58('3', 1, 1, P5));
        }
        V3S.C$o(38);
        return [
            Math.round(V3S.c6Y(S5, 255)),
            Math.round(V3S.c6Y('255', P$, 64, V3S.M8Y(52))),
            Math.round(V3S.d58(L2, 255, V3S.M8Y(38))),
        ];
    };
    t2.chooseForegroundColor = function (w$) {
        var T$, V1, U9, J8;
        T$ = t2.colorToHex(w$);
        V1 = parseInt(T$.slice(1, 3), 16);
        U9 = parseInt(T$.slice(3, 5), 16);
        J8 = parseInt(T$.slice(5, +'7'), 16);
        return 0.2126 * V1 + 0.7152 * U9 + 0.0722 * J8 < 100 ? '#FFFFFF' : '#000000';
    };
    t2.borderPatternToArray = function (h$, C7) {
        var F67, M9D;
        F67 = '"; defaulting to';
        V3S.J8h();
        F67 += ' "solid"';
        M9D = 'd';
        M9D += 'a';
        M9D += 'she';
        M9D += 'd';
        if (!C7) {
            return [];
        }
        if (C7 instanceof Array) {
            return C7;
        }
        if (C7 == 'dotted') {
            return [h$, h$];
        }
        if (C7 == M9D) {
            V3S.M8Y(38);
            return [V3S.d58(h$, 5), V3S.c6Y(h$, 5)];
        }
        if (C7 != 'solid' && C7 != 'none') {
            V3S.C$o(53);
            console.log(V3S.c6Y('Unsupported pattern "', C7, F67));
        }
        return [];
    };
    t2.getBackgroundColor = function (a4) {
        var r3, h_;
        r3 = null;
        while (!r3 || t2.isTransparent(r3)) {
            h_ = getComputedStyle(a4);
            if (!h_) {
                return;
            }
            r3 = h_.backgroundColor;
            if (t2.isTransparent(r3)) {
                r3 = 'transparent';
            }
            a4 = a4.parentNode;
            if (!a4 || !a4.tagName) break;
        }
        if (!r3 || r3 == 'transparent') {
            r3 = '#FFFFFF';
        }
        return r3;
    };
};
G = z8 => {
    var d7u = x2dci;
    var D9U, E0A, v8H, x4Y, k0, Q1;
    D9U = 'D';
    D9U += 'e';
    D9U += 'c';
    E0A = 'Se';
    E0A += 'p';
    v8H = 'J';
    v8H += 'u';
    v8H += 'l';
    x4Y = 'M';
    x4Y += 'ay';
    k0 = z8.CIQ;
    Q1 = z8.timezoneJS;
    k0.monthLetters = [
        'J',
        1676 <= (+'7480', 7000) ? (6589 !== 7446 ? 'F' : ('U', !'1')) : +'545.08',
        'M',
        'A',
        (159.81, 673) != (9584, 63) ? 'M' : 'a',
        (368.23, 3390) < (+'231.16', 968.08) ? 849 : (359.87, 741) === ('526' >> 32, 656.02) ? (0x5e, 644.55) : 'J',
        1700 == '338.07' * 1 ? 4.64e3 : 'J',
        'A',
        +'19' >= ('89.91' - 0, 936) ? 's' : 'S',
        +'6809' >= ('1580' | 4, 816.57) ? 'O' : (![], '9.69' - 0),
        (831.8, 6098) !== '412.58' - 0
            ? '148.21' * 1 >= 5410
                ? 2.68e2
                : 153.37 == (1260, 235.03)
                ? ('G', +'774.51')
                : 'N'
            : 'Z',
        (+'359', 1681) <= ('945.25' * 1, 1976)
            ? 525.12 !== (5360, 9894)
                ? 276.68 > (2120, 7176)
                    ? 'T'
                    : 'D'
                : 9.81e3
            : !{},
    ];
    k0.monthAbv = ['Jan', 'Feb', 'Mar', 'Apr', x4Y, 'Jun', v8H, 'Aug', E0A, 'Oct', 'Nov', D9U];
    k0.MILLISECOND = 1;
    k0.SECOND = 1000;
    d7u.C$o(22);
    var v9l = d7u.d58(2, 58);
    k0.MINUTE = v9l * k0.SECOND;
    d7u.M8Y(0);
    var h0$ = d7u.c6Y(1020, 960);
    k0.HOUR = h0$ * k0.MINUTE;
    k0.DAY = ('24' << 0) * k0.HOUR;
    d7u.C$o(8);
    var D3A = d7u.d58(105, 14, 5);
    k0.WEEK = D3A * k0.DAY;
    d7u.C$o(7);
    var u7h = d7u.d58(4, 27, 8);
    k0.MONTH = u7h * k0.DAY;
    d7u.M8Y(54);
    var d6P = d7u.c6Y(23, 5, 3, 254);
    k0.YEAR = d6P * k0.DAY;
    d7u.C$o(0);
    var y_7 = d7u.d58(19, 9);
    k0.DECADE = y_7 * k0.YEAR - ('7' - 0) * k0.DAY;
    k0.yyyymmddhhmmssmmmrx = new RegExp('\\d{17}');
    k0.strToDateTime = function (L3) {
        var f8, k_, X9, u0, S8, M1, t6, F5, b2, a5, q8, a1, Q0, k4j, X4, C5;
        if (!L3 || L3.getFullYear) {
            return L3;
        }
        f8 = [];
        if (L3.length == 12 || L3.length == 14) {
            k_ = parseFloat(L3.substring(0, '4' ^ 0));
            d7u.M8Y(55);
            var Y6k = d7u.d58(15, 11, 7, 2, 3);
            d7u.C$o(0);
            var G1m = d7u.c6Y(10, 9);
            X9 = parseFloat(L3.substring(+'4', '6' | Y6k)) - G1m;
            u0 = parseFloat(L3.substring(6, 8));
            S8 = parseFloat(L3.substring(+'8', 10));
            M1 = parseFloat(L3.substring(+'10', 12));
            t6 = parseFloat(L3.substring('12' | 8, 14)) || 0;
            return new Date(k_, X9, u0, S8, M1, t6, 0);
        } else if (k0.yyyymmddhhmmssmmmrx.test(L3)) {
            k_ = parseFloat(L3.substring(0, 4));
            d7u.C$o(56);
            var H$5 = d7u.d58(15, 9, 310, 15, 20);
            d7u.M8Y(0);
            var r9I = d7u.d58(30, 24);
            d7u.M8Y(57);
            var j2w = d7u.c6Y(14, 7, 7, 9, 3);
            X9 = parseFloat(L3.substring(H$5, r9I)) - j2w;
            u0 = parseFloat(L3.substring(6, 8));
            S8 = parseFloat(L3.substring(8, 10));
            M1 = parseFloat(L3.substring(10, 12));
            t6 = parseFloat(L3.substring(12, 14));
            F5 = parseFloat(L3.substring(14, 17));
            return new Date(k_, X9, u0, S8, M1, t6, F5);
        }
        b2 = [L3];
        a5 = L3.indexOf('T');
        if (a5 != -1) {
            q8 = L3.substring(a5);
            if (
                q8.indexOf(3660 != +'927.91' ? 'Z' : (+'2990', +'4260') > (411, 2410) ? (841.9, 'h') : 131.12) != -1 ||
                q8.indexOf('-') != -('1' ^ 0) ||
                q8.indexOf((4663, +'863.03') > (3320, 8824) ? ('S', 'E') : '+') != -('1' * 1)
            ) {
                return new Date(L3);
            }
            b2 = L3.split('T');
        } else if (L3.indexOf(' ') != -1) {
            b2 = L3.split(' ');
        }
        if (b2[0].indexOf('/') != -1) {
            f8 = b2[0].split('/');
        } else if (b2[0].indexOf('-') != -1) {
            f8 = b2[0].split('-');
        } else {
            return k0.strToDate(L3);
        }
        a1 = parseFloat(f8[2], +'10');
        if (f8[0] && f8[+'0'].length == +'4') {
            a1 = parseFloat(f8[0], 10);
            f8[0] = f8[1];
            f8[1] = f8[2];
        }
        d7u.r2m();
        if (b2.length > 1) {
            Q0 = b2[2];
            b2 = b2[1].split(
                3936 != (9290, 5847)
                    ? ':'
                    : 4660 == ('638.79' * 1, 9890)
                    ? (0x18d4, 0x22e4)
                    : '4480' - 0 !== 2050
                    ? 569.33
                    : (0x297, 0x1a88)
            );
            if (Q0) {
                k4j = '1';
                k4j += '2';
                if (b2[0] == k4j && Q0.toUpperCase() == 'AM') {
                    b2[0] = 0;
                } else if (b2[0] != '12' && Q0.toUpperCase() == 'PM') {
                    d7u.C$o(0);
                    var W5N = d7u.c6Y(24, 12);
                    b2[+'0'] = parseInt(b2[0], +'10') + W5N;
                }
            }
            X4 = 0;
            C5 = +'0';
            if (b2.length == '3' * 1) {
                if (b2[2].indexOf(('61.44' * 1, 3599) > 3490 ? '.' : ('j', 9.41e3)) == -1) {
                    X4 = parseInt(b2['2' * 1], 10);
                } else {
                    X4 = b2[2].split('.');
                    if (X4[1].length == 3) {
                        C5 = X4[1];
                        X4 = X4[0];
                    }
                }
            }
            d7u.M8Y(58);
            var a7B = d7u.d58(4, 14, 1, 7, 12);
            return new Date(a1, f8[0] - a7B, f8[1], b2[0], b2[1], X4, C5);
        }
        d7u.C$o(59);
        var L6t = d7u.c6Y(125, 5, 12, 18);
        return new Date(a1, f8[0] - L6t, f8[1], 0, 0, 0, +'0');
    };
    k0.strToDate = function (p5) {
        var V8, D7;
        if (
            p5.indexOf(
                ('4471' | 55) > (841, 8222)
                    ? 9.65e3
                    : (1877, '8310' | 54) === 3445
                    ? ('802' ^ 0) >= (596.11, 948.83)
                        ? 266.2
                        : +'846.95'
                    : '/'
            ) != -1
        ) {
            V8 = p5.split('/');
        } else if (
            p5.indexOf(
                948 < 5120
                    ? '-'
                    : (2310, 1850) < 477
                    ? 81.25
                    : (731, 2274) > (828.67, '1888' ^ 0)
                    ? '0x3a0' >> 64
                    : (1.0e4, 0x179d)
            ) != -1
        ) {
            V8 = p5.split(
                (449, 4433) <= 7990
                    ? (650.51, +'957') <= (640.86, '258.83' - 0)
                        ? (956.25, 16.32)
                        : 339 < 6198
                        ? '-'
                        : ('k', 'h')
                    : !!0
            );
        } else if (p5.length >= +'8') {
            d7u.M8Y(60);
            var c$K = d7u.d58(103, 98, 89, 7, 5);
            d7u.M8Y(61);
            var g7J = d7u.d58(4, 12, 2, 12, 10);
            return new Date(
                parseFloat(p5.substring(0, 4)),
                parseFloat(p5.substring(+'4', '6' >> c$K)) - g7J,
                parseFloat(p5.substring(6, 8))
            );
        } else {
            return new Date();
        }
        if (V8.length < 3) {
            return new Date();
        }
        if (V8[2].indexOf(' ') != -1) {
            V8[2] = V8[2].substring(
                +'0',
                V8[2].indexOf(
                    (6310, 4820) <= (9554, +'5460') ? ((7220, 837.82) == (267, '5770' ^ 0) ? 1.39e3 : ' ') : 0x254b
                )
            );
        } else if (V8[2].indexOf((27.15, 453.79) !== +'5270' ? 'T' : 'r') != -+'1') {
            V8[2] = V8[2].substring(
                0,
                V8[2].indexOf(
                    (959.51, '73.75' - 0) != ('2880' ^ 0, 1180) ? 'T' : (5510, 7980) > 794.26 ? ('H', 'k') : 439.06
                )
            );
        }
        D7 = parseFloat(V8[2], 10);
        if (D7 < 20) {
            D7 += 2000;
        }
        if (V8[0].length == 4) {
            D7 = parseFloat(V8[0], 10);
            V8[0] = V8[1];
            V8[1] = V8[2];
        }
        d7u.C$o(36);
        var f39 = d7u.c6Y(25, 14, 46, 92);
        d7u.C$o(62);
        var h$D = d7u.d58(18, 150, 7, 1, 8);
        return new Date(D7, V8['0' >> f39] - h$D, V8[1]);
    };
    k0.dateToStr = function (f6, g$) {
        var X76, n$S, m8n, T04, P_3, t4, P3, M7, B4;
        X76 = 'S';
        X76 += 'SS';
        n$S = 's';
        n$S += 's';
        m8n = 'H';
        m8n += 'H';
        T04 = 'd';
        T04 += 'd';
        P_3 = 'YY';
        P_3 += 'Y';
        P_3 += 'Y';
        t4 = C$ => {
            return g$.includes(C$);
        };
        P3 = (C8, r0 = '2' >> 32) => {
            d7u.J8h();
            return ('0'.repeat(r0) + C8).slice(-r0);
        };
        M7 = (P6, Q4) => {
            d7u.J8h();
            return (g$ = g$.replace(P6, Q4));
        };
        B4 = (o4, y$) => {
            d7u.r2m();
            return o4 > y$ ? o4 - y$ : o4;
        };
        if (t4(P_3)) {
            M7(/YYYY/g, f6.getFullYear());
        }
        if (t4('MM')) {
            M7(/MM/g, P3(f6.getMonth() + 1));
        }
        if (t4(T04)) {
            M7(/dd/g, P3(f6.getDate()));
        }
        if (t4(m8n)) {
            M7(/HH/g, P3(f6.getHours()));
        }
        if (t4('hh')) {
            M7(/hh/g, P3(B4(f6.getHours() || 12, 12)));
        }
        if (t4('mm')) {
            M7(/mm/g, P3(f6.getMinutes()));
        }
        if (t4(n$S)) {
            M7(/ss/g, P3(f6.getSeconds()));
        }
        if (t4(X76)) {
            M7(/SSS/g, P3(f6.getMilliseconds(), 3));
        }
        d7u.r2m();
        return g$;
    };
    k0.mmddyyyy = function (x5) {
        var L1, w3;
        if (typeof x5 === 'string') {
            x5 = k0.strToDate(x5);
        }
        d7u.C$o(10);
        var O_d = d7u.c6Y(25, 6, 18);
        L1 = x5.getMonth() + O_d;
        if (L1 < 10) {
            d7u.C$o(22);
            L1 = d7u.c6Y(L1, '0');
        }
        w3 = x5.getDate();
        if (w3 < 10) {
            d7u.M8Y(22);
            w3 = d7u.c6Y(w3, (+'4600', 2730) !== (5470, 566.23) ? '0' : (3.3e3, 'Z'));
        }
        d7u.M8Y(63);
        var q6Q = d7u.c6Y(2076, 4, 3, 1558, 6232);
        d7u.M8Y(7);
        var V8j = d7u.d58(3, 5662, 21);
        d7u.C$o(16);
        var x1E = d7u.d58(9, 6053, 15, 84895);
        d7u.M8Y(0);
        var o9E = d7u.c6Y(24390, 16260);
        d7u.C$o(22);
        var o6u = d7u.c6Y(9, 1251);
        d7u.C$o(7);
        var P8l = d7u.d58(15, 283, 5102);
        d7u.C$o(55);
        var K1t = d7u.c6Y(6054, 13, 6071, 10, 2018);
        d7u.C$o(0);
        var S_j = d7u.c6Y(1825, 5);
        d7u.M8Y(64);
        var F2A = d7u.d58(124770, 8317, 10, 12477);
        d7u.C$o(0);
        var W_Q = d7u.c6Y(71060, 64600);
        return (
            L1 +
            ((q6Q, 773.5) >= (730.63, V8j) ? (x1E, ![]) : '/') +
            w3 +
            ((o9E, o6u) < (P8l, K1t) ? '/' : ('322' - 0, 857.25) === (S_j, F2A) ? !1 : W_Q) +
            x5.getFullYear()
        );
    };
    k0.yyyymmdd = function (U_) {
        var p4, h4;
        d7u.M8Y(34);
        d7u.J8h();
        var y89 = d7u.c6Y(6, 27, 3, 14);
        p4 = U_.getMonth() + y89;
        if (p4 < 10) {
            d7u.C$o(22);
            p4 = d7u.c6Y(
                p4,
                (4770, 1060) < (6545, 7070)
                    ? '0'
                    : ('684.34' - 0, 6030) === (7315, 5860)
                    ? ('k', 0x863)
                    : ('925.84' * 1, 676.35) !== (2480, 1390)
                    ? 'J'
                    : 6.83e3
            );
        }
        h4 = U_.getDate();
        if (h4 < 10) {
            d7u.M8Y(22);
            h4 = d7u.d58(h4, '0');
        }
        return U_.getFullYear() + (164.11 < (+'122', 201.42) ? '-' : '0x7de' - 0) + p4 + '-' + h4;
    };
    k0.hhmm = function (z0) {
        var O4, E2;
        d7u.r2m();
        O4 = z0.getHours();
        if (O4 < 10) {
            d7u.M8Y(22);
            O4 = d7u.d58(O4, (3730, 3539) > (4470, 4640) ? '7.60e+3' | 0 : '0');
        }
        E2 = z0.getMinutes();
        if (E2 < 10) {
            d7u.M8Y(22);
            E2 = d7u.d58(E2, '0');
        }
        d7u.C$o(53);
        return d7u.c6Y(O4, (5060, 8230) < 942.34 ? (1.57e3, 914) : ':', E2);
    };
    k0.hhmmss = function (Y6) {
        var j4;
        j4 = Y6.getSeconds();
        if (j4 < 10) {
            d7u.C$o(22);
            j4 = d7u.c6Y(j4, '0');
        }
        d7u.M8Y(7);
        var c09 = d7u.c6Y(17, 8343, 14);
        d7u.r2m();
        d7u.M8Y(22);
        var K2k = d7u.c6Y(20, 442);
        d7u.C$o(65);
        var x$B = d7u.d58(15, 1, 16, 0);
        return (
            k0.hhmm(Y6) + ((c09, K2k) !== '6518' - 0 ? (612.39 === (384.86, 135.17) ? '164.98' * x$B : ':') : 'k') + j4
        );
    };
    k0.yyyymmddhhmm = function (H4) {
        d7u.M8Y(46);
        d7u.J8h();
        return k0.yyyymmddhhmmssmmm(H4).substr(0, d7u.d58('12', 64));
    };
    k0.yyyymmddhhmmssmmm = function (n8) {
        d7u.J8h();
        var E1, y9, s7, d5, R0, O0;
        d7u.C$o(66);
        var F$z = d7u.d58(0, 15, 13, 11, 1);
        E1 = n8.getMonth() + F$z;
        if (E1 < +'10') {
            d7u.M8Y(22);
            E1 = d7u.c6Y(
                E1,
                +'2440' < (655.19, 6970) ? ((1562, 728) === (741.2, 797) ? 0x1b3c : '0') : (+'0x105f', 0x1be9)
            );
        }
        y9 = n8.getDate();
        if (y9 < 10) {
            d7u.C$o(22);
            y9 = d7u.c6Y(y9, (8860, 180.11) == 384.16 ? (492, 5.65e3) : '0');
        }
        s7 = n8.getHours();
        if (s7 < 10) {
            d7u.M8Y(22);
            s7 = d7u.d58(
                s7,
                ('561.82' * 1, 556.77) <= (6870, 915)
                    ? 6201 > 1330
                        ? 2730 == 829.53
                            ? 444.49
                            : '0'
                        : (0x22ab, 294.18)
                    : (305.61, !'1')
            );
        }
        d5 = n8.getMinutes();
        if (d5 < 10) {
            d7u.M8Y(22);
            d5 = d7u.d58(d5, '0');
        }
        R0 = n8.getSeconds();
        if (R0 < 10) {
            d7u.M8Y(22);
            R0 = d7u.d58(
                R0,
                1642 < (+'6120', 473.64)
                    ? (!'1', 690.8)
                    : ('2330' ^ 0) > (228.34, 1466)
                    ? (315, +'5657') === '3610' >> 64
                        ? (![], '35.23' - 0)
                        : '0'
                    : 8.16e3
            );
        }
        O0 = n8.getMilliseconds();
        if (O0 < 10) {
            d7u.M8Y(22);
            O0 = d7u.d58(O0, '00');
        } else if (O0 < +'100') {
            d7u.M8Y(22);
            O0 = d7u.d58(
                O0,
                (+'2495', '8780' * 1) <= (68.98, 460) ? (!'1', 'Q') : 7390 != (1460, 893.11) ? '0' : (152.19, 'C')
            );
        }
        return '' + n8.getFullYear() + E1 + y9 + s7 + d5 + R0 + O0;
    };
    k0.friendlyDate = function (M9) {
        return k0.dateToStr(M9, 'YYYY/MM/dd HH:mm');
    };
    k0.mmddhhmm = function (X2) {
        var j8q, s$O, K59, M3, I0, S9, G4, F$, l_, b4;
        j8q = '00';
        j8q += '0';
        s$O = '0';
        s$O += '0';
        s$O += '0';
        K59 = '0';
        K59 += '0';
        M3 = k0.strToDateTime(X2);
        d7u.J8h();
        I0 = M3.getMonth() + +'1';
        if (I0 < 10) {
            d7u.C$o(22);
            I0 = d7u.c6Y(I0, ('578.83' - 0, 4790) != 5460 ? '0' : (398.18, 'i'));
        }
        S9 = M3.getDate();
        if (S9 < 10) {
            d7u.M8Y(22);
            S9 = d7u.d58(S9, ('1898' | 72, +'2464') > 9580 ? 'N' : 2090 == 9470 ? (+'1.75e+3', 2.98e3) : '0');
        }
        G4 = M3.getHours();
        if (G4 < 10) {
            d7u.C$o(22);
            G4 = d7u.d58(G4, '0');
        }
        F$ = M3.getMinutes();
        if (F$ < +'10') {
            d7u.M8Y(22);
            F$ = d7u.d58(
                F$,
                (4550, +'4410') > 4979 ? ((519, 7862) == (7748, +'5790') ? (+'0x1366', !1) : (0xf82, 0x2a)) : '0'
            );
        }
        l_ = M3.getSeconds();
        if (l_ < 10) {
            d7u.C$o(22);
            l_ = d7u.d58(
                l_,
                2670 != 3630
                    ? 1410 !== (7900, 9053)
                        ? (1560, +'7250') == (204.55, 606)
                            ? ('e', 816)
                            : '0'
                        : '1.67e+3' >> 0
                    : 142.99
            );
        }
        b4 = M3.getMilliseconds();
        if (b4 < '10' * 1) {
            d7u.M8Y(22);
            b4 = d7u.d58(b4, '00');
        } else if (b4 < 100) {
            d7u.C$o(22);
            b4 = d7u.c6Y(
                b4,
                (6280, 281) === (874.28, 871.92)
                    ? 508.62
                    : 1330 > 1999
                    ? (+'0.4', '2367' << 96) <= 148.33
                        ? (9.77e3, !!{})
                        : (!![], 'T')
                    : '0'
            );
        }
        if (G4 == '00' && F$ == K59 && l_ == '00' && b4 == s$O) {
            d7u.M8Y(7);
            var u5r = d7u.c6Y(15, 8778, 9);
            d7u.C$o(30);
            var z8M = d7u.c6Y(8, 164220, 154552);
            d7u.C$o(67);
            var G11 = d7u.c6Y(5890, 5890, 589);
            d7u.M8Y(0);
            var v_F = d7u.c6Y(11115, 10530);
            d7u.M8Y(68);
            var R27 = d7u.d58(1970, 2, 1978);
            d7u.M8Y(69);
            var V1k = d7u.d58(4, 2100, 10564, 15);
            return (
                I0 +
                (+'9500' <= (u5r, 663.18) ? ('k', !'1') : (z8M, G11) != (131.47, 388.51) ? '-' : (!'', !{})) +
                S9 +
                ((v_F, R27) > (858.63, V1k) ? '-' : 'I') +
                M3.getFullYear()
            );
        }
        if (l_ == '00' && b4 == j8q) {
            d7u.C$o(70);
            return d7u.d58(
                (+'810.78', 3980) < 6660 ? ':' : (2470, 3596) <= (228.06, 2372) ? !{} : (8.17e3, '858' ^ 0),
                S9,
                542 < 821.94 ? ' ' : (697.36, 5880) < 4840 ? (342.02, '8.39e+2' ^ 0) : (4.18e3, +'107.40'),
                G4,
                395.78 < (4044, 3660) ? ((7167, 6950) !== (5031, 2993) ? '-' : !!'1') : (!1, ![]),
                I0,
                F$
            );
        }
        if (b4 == '000') {
            d7u.C$o(71);
            return d7u.d58(
                I0,
                (567.82, 9870) < (3390, 8098) ? 0x6e8 : ':',
                S9,
                G4,
                l_,
                +'7662' < (+'2030', 33.79)
                    ? 9802 >= (8499, +'455.95')
                        ? (0x8c4, +'203.33')
                        : (7.19e3, '5.49e+3' ^ 0)
                    : ':',
                ' ',
                (664.35, '8910' >> 32) < +'551.62'
                    ? 0x1581
                    : (7094, 7284) !== +'505.06'
                    ? '-'
                    : (228, 512.74) !== 68.15
                    ? (!1, 'j')
                    : !{},
                F$
            );
        }
        d7u.M8Y(72);
        return d7u.d58(
            G4,
            ':',
            ' ',
            3474 === 88
                ? (![], 'v')
                : (538.6, +'148') < (9686, 6940)
                ? ('3980' * 1, +'4730') > (1810, 2077)
                    ? ':'
                    : !!1
                : (338.26, 961.92),
            l_,
            F$,
            1868 == (+'7000', 8710)
                ? 'i'
                : +'448.39' >= (4880, 2900)
                ? (831.36, 2929) < (+'532.41', 822)
                    ? (2.5e3, '7.81e+3' ^ 0)
                    : 742.67
                : ':',
            b4,
            S9,
            I0,
            18.38 <= (5644, 3890)
                ? ('190.91' * 1, 275) < (4550, 7026)
                    ? '-'
                    : (8173, '655.27' - 0) < (448.12, 9050)
                    ? ('189.07' * 1, 266.64)
                    : (307.66, !1)
                : 0x369
        );
    };
    k0.getYearDay = function (r_) {
        d7u.J8h();
        var o7, V$, n2, C4, h5;
        o7 = r_;
        if (!o7) {
            o7 = new Date();
        }
        d7u.M8Y(19);
        o7.setHours(0, d7u.c6Y(96, '0'), 0, 0);
        d7u.C$o(0);
        V$ = new Date(o7.getFullYear(), d7u.c6Y('0', 0), d7u.d58(0, '0', d7u.M8Y(19)));
        d7u.C$o(0);
        n2 = d7u.d58(o7, V$);
        d7u.M8Y(73);
        C4 = d7u.d58(60, 1000, 60, 24);
        d7u.C$o(40);
        h5 = Math.round(d7u.c6Y(C4, n2));
        return h5;
    };
    k0.getETDateTime = function () {
        var I_;
        I_ = new Date();
        return k0.convertTimeZone(new Date(I_.getTime() + I_.getTimezoneOffset() * 60000), 'UTC', 'America/New_York');
    };
    k0.fromET = function (r6) {
        var k2, A0, F8, L4;
        k2 = new Date();
        d7u.C$o(74);
        A0 = d7u.c6Y('4', 0);
        d7u.r2m();
        if (
            k2.getMonth() < '2' >> 32 ||
            (k2.getMonth() == 2 && k2.getDate() < ('11' | 11)) ||
            k2.getMonth() > 10 ||
            (k2.getMonth() == 10 && k2.getDate() >= ('4' ^ 0))
        ) {
            A0 = 5;
        }
        d7u.C$o(8);
        var L1_ = d7u.d58(46800000, 2250000, 8);
        F8 = r6.getTime() + L1_ * A0;
        L4 = new Date(F8);
        return L4;
    };
    k0.monthAsDisplay = function (N8, J$, s9) {
        if (J$) {
            if (s9 && s9.monthLetters) {
                return s9.monthLetters[N8];
            }
            return k0.monthLetters[N8];
        }
        if (s9 && s9.monthAbv) {
            return s9.monthAbv[N8];
        }
        return k0.monthAbv[N8];
    };
    k0.timeAsDisplay = function (B$, E$, n5) {
        var H0, m4, v1, o6, O1;
        H0 = E$ ? E$.internationalizer : null;
        if (H0) {
            if (n5 == k0.SECOND) {
                return H0.hourMinuteSecond.format(B$);
            } else if (n5 == k0.MILLISECOND) {
                return H0.hourMinuteSecond.format(B$) + '.' + B$.getMilliseconds();
            }
            return H0.hourMinute.format(B$);
        }
        m4 = B$.getMinutes();
        if (m4 < 10) {
            d7u.M8Y(22);
            m4 = d7u.c6Y(m4, (5485, +'703.61') <= (127, 2120) ? '0' : ![]);
        }
        v1 = B$.getHours() + ':' + m4;
        d7u.J8h();
        o6 = '';
        if (n5 <= k0.SECOND) {
            o6 = B$.getSeconds();
            if (o6 < +'10') {
                d7u.C$o(22);
                o6 = d7u.c6Y(o6, (+'6920', 4920) > 1860 ? ((53.3, 2100) !== 2630 ? '0' : 7.27) : ('G', 0xc67));
            }
            d7u.M8Y(22);
            v1 += d7u.d58(o6, ':');
        }
        if (n5 == k0.MILLISECOND) {
            O1 = B$.getMilliseconds();
            if (O1 < 10) {
                d7u.C$o(22);
                O1 = d7u.d58(O1, '00');
            } else if (O1 < 100) {
                d7u.C$o(22);
                O1 = d7u.d58(
                    O1,
                    2305 < (51, 9160)
                        ? '0'
                        : 1413 <= (2520, +'1287')
                        ? (0x1055, 'R')
                        : 7098 <= ('4242' << 0, 4700)
                        ? (![], 856.89)
                        : (+'6.52e+3', !!{})
                );
            }
            d7u.M8Y(22);
            v1 += d7u.c6Y(O1, +'7060' > (119.13, 185.75) ? '.' : 'T');
        }
        return v1;
    };
    k0.displayableDate = function (x_, K$, Q7, R_) {
        var j0D, e9, g7, l1, s4, z_, Z4L, P3X, j01, X1, R4, i2, O3, R_n, O$, W3, z7;
        j0D = 'millisec';
        j0D += 'ond';
        e9 = '';
        d7u.r2m();
        g7 = x_.layout.interval;
        l1 = k0.ChartEngine.isDailyInterval(g7);
        s4 = (K$.xAxis.activeTimeUnit && K$.xAxis.activeTimeUnit <= k0.SECOND) || x_.layout.timeUnit == 'second';
        z_ = (K$.xAxis.activeTimeUnit && K$.xAxis.activeTimeUnit <= k0.MILLISECOND) || x_.layout.timeUnit == j0D;
        function e6(I$) {
            if (I$ < +'10') {
                d7u.C$o(22);
                return d7u.d58(
                    I$,
                    +'4820' == (842, 530.25)
                        ? (+'0x57c', 0x54a)
                        : 3569 === 4109
                        ? (4270, 9482) == (3786, '829.93' * 1)
                            ? 0x207d
                            : 9.04e3
                        : '0'
                );
            }
            return I$;
        }
        if (K$.xAxis.formatter) {
            e9 = K$.xAxis.formatter(Q7);
        } else if (x_.internationalizer) {
            e9 = x_.internationalizer.monthDay.format(Q7);
            if (s4 || z_) {
                d7u.C$o(75);
                var T4z = d7u.d58(13, 52012, 4312, 10, 12);
                d7u.C$o(25);
                var c$e = d7u.d58(32320, 28296, 16);
                d7u.M8Y(22);
                var W5k = d7u.c6Y(1587, 793);
                d7u.C$o(67);
                var z5o = d7u.c6Y(4253, 4240, 4253);
                d7u.M8Y(68);
                var k90 = d7u.d58(2095, 2, 2103);
                d7u.C$o(25);
                var E$o = d7u.d58(383, 7, 4);
                e9 += (T4z > c$e ? (W5k !== z5o ? ' ' : k90) : E$o) + x_.internationalizer.hourMinuteSecond.format(Q7);
                if (z_) {
                    d7u.M8Y(22);
                    var i2b = d7u.d58(17, 9272);
                    d7u.C$o(68);
                    var D5e = d7u.c6Y(14, 3, 6);
                    e9 += ('1990' >> 0 != (i2b, '7588' | D5e) ? '.' : 's') + Q7.getMilliseconds();
                }
            } else if (!l1) {
                if (R_) {
                    e9 = x_.internationalizer.yearMonthDay.format(Q7);
                }
                d7u.M8Y(76);
                var A9f = d7u.d58(10030, 10043, 1002, 13);
                d7u.M8Y(77);
                var o1G = d7u.c6Y(94864, 19, 15, 6775);
                d7u.C$o(22);
                var g0c = d7u.c6Y(17, 245);
                d7u.C$o(0);
                var b87 = d7u.c6Y(1722, 2);
                d7u.M8Y(78);
                var w05 = d7u.d58(13, 2, 7403, 9);
                d7u.M8Y(67);
                var H_n = d7u.d58(476, 3572, 2);
                d7u.M8Y(78);
                var y37 = d7u.c6Y(6, 18, 5368, 10);
                d7u.M8Y(79);
                var O4v = d7u.d58(28708, 16, 20, 30498);
                e9 +=
                    (A9f === o1G ? 'F' : (g0c, b87) > +'7163' ? ((w05, 94.2) > H_n ? !!'1' : (y37, O4v)) : ' ') +
                    x_.internationalizer.hourMinute.format(Q7);
            } else {
                Z4L = -1253199454;
                P3X = -156823918;
                j01 = 2;
                for (var Y3Z = 1; d7u.O$R(Y3Z.toString(), Y3Z.toString().length, 85259) !== Z4L; Y3Z++) {
                    if (g7 == 'month') {
                        e9 = x_.internationalizer.yearMonth.format(Q7);
                    } else {
                        e9 = x_.internationalizer.yearMonthDay.format(Q7);
                    }
                    j01 += 2;
                }
                if (d7u.O$R(j01.toString(), j01.toString().length, 17170) !== P3X) {
                    if (g7 != '') {
                        e9 = x_.internationalizer.yearMonth.format(Q7);
                    } else {
                        e9 = x_.internationalizer.yearMonthDay.format(Q7);
                    }
                }
            }
        } else {
            X1 = e6(Q7.getMonth() + 1);
            R4 = e6(Q7.getDate());
            i2 = e6(Q7.getHours());
            O3 = e6(Q7.getMinutes());
            if (l1) {
                R_n = 'm';
                R_n += 'o';
                R_n += 'nth';
                e9 =
                    g7 == R_n
                        ? X1 + ((7040, 276.35) != 3570 ? '/' : (119, 4.23e3))
                        : X1 +
                          (1900 != 837.12 ? (2565 < 103.73 ? 0x2255 : '/') : !'1') +
                          R4 +
                          ((6901, 427) != 5332
                              ? 398.41 !== 695.79
                                  ? '/'
                                  : ('1670' - 0, 443.34) !== +'6430'
                                  ? (0x23b0, ![])
                                  : !1
                              : 'm');
                e9 += Q7.getFullYear();
            } else {
                d7u.C$o(53);
                O$ = d7u.c6Y(
                    X1,
                    (5535, 981.55) !== (+'2822', 551.54) ? ((2730, 4909) !== 2270 ? '/' : +'0xd90') : !!'',
                    R4
                );
                if (R_) {
                    d7u.C$o(16);
                    var t2z = d7u.c6Y(6, 9, 18, 269);
                    d7u.M8Y(0);
                    var z85 = d7u.c6Y(2595, 1730);
                    d7u.C$o(64);
                    var X_x = d7u.d58(4055, 3249, 5, 1);
                    d7u.M8Y(80);
                    var A9b = d7u.d58(26, 16, 62, 9, 11);
                    O$ += ('5530' * t2z !== (z85, X_x) ? '/' : (A9b, 'b')) + Q7.getFullYear();
                }
                d7u.C$o(80);
                e9 = d7u.c6Y(
                    O3,
                    i2,
                    O$,
                    (4110, 430.8) >= (6160, 6185) ? (0x27c, 127.45) : (1512, 826.51) > 5954 ? 6.26e3 : ':',
                    +'5379' > (939.66, 1460)
                        ? '6730' << 0 != +'2130'
                            ? (8037, +'730.52') === 1993
                                ? 'Q'
                                : ' '
                            : (55.47, ![])
                        : 0x85c
                );
                if (s4 || z_) {
                    W3 = e6(Q7.getSeconds());
                    d7u.M8Y(22);
                    e9 += d7u.c6Y(
                        W3,
                        862 < ('6680' ^ 0, 87)
                            ? (4490, 7330) > 5468
                                ? 7110 <= (2076, 786.21)
                                    ? (0xf26, 'V')
                                    : 'X'
                                : +'2.05e+2'
                            : ':'
                    );
                    if (z_) {
                        z7 = e6(Q7.getMilliseconds());
                        if (z7 < 100) {
                            d7u.M8Y(22);
                            z7 = d7u.c6Y(z7, '0');
                        }
                        d7u.C$o(22);
                        e9 += d7u.d58(
                            z7,
                            (55.67, 891) != (8234, 205.39) ? ':' : (2300, '3410' >> 64) != 566 ? 'f' : !0
                        );
                    }
                }
            }
        }
        return e9;
    };
    k0.convertTimeZone = function (H7, j6, x8) {
        var a3;
        if (!Q1.Date) {
            return H7;
        }
        a3 = new Q1.Date(
            H7.getFullYear(),
            H7.getMonth(),
            H7.getDate(),
            H7.getHours(),
            H7.getMinutes(),
            H7.getSeconds(),
            H7.getMilliseconds(),
            j6
        );
        a3.setTimezone(x8);
        return a3;
    };
    k0.convertToLocalTime = function (p6, H2) {
        var b7, q3, r5;
        if (!Q1.Date) {
            return p6;
        }
        b7 = p6.getSeconds();
        q3 = p6.getMilliseconds();
        r5 = new Q1.Date(p6.getFullYear(), p6.getMonth(), p6.getDate(), p6.getHours(), p6.getMinutes(), H2);
        return new Date(r5.getTime() + b7 * ('1000' ^ 0) + q3);
    };
};
C = j5 => {
    var C0t = x2dci;
    var P9, o_, e8, E_, Z8S;
    if (!j5.SplinePlotter) {
        j5.SplinePlotter = {};
    }
    P9 = j5.CIQ;
    o_ = j5.SplinePlotter;
    e8 = function (N_, j2) {
        var H3;
        if (!j2) {
            return document.getElementById(N_);
        }
        if (j2.id == N_) {
            return j2;
        }
        if (!j2.hasChildNodes) {
            return null;
        }
        for (var H5 = 0; H5 < j2.childNodes.length; H5++) {
            H3 = e8(N_, j2.childNodes[H5]);
            if (H3) {
                return H3;
            }
        }
        return null;
    };
    j5.$$ = e8;
    E_ = function (c0, i5) {
        if (!i5) {
            i5 = document;
        }
        return i5.querySelectorAll(c0)[0];
    };
    j5.$$$ = E_;
    P9.wheelEvent = (function () {
        var t5H, F4w, l30;
        t5H = 'whe';
        t5H += 'el';
        F4w = 'd';
        F4w += 'i';
        F4w += 'v';
        l30 = 'undef';
        l30 += 'in';
        l30 += 'ed';
        if (typeof document === l30) {
            return undefined;
        }
        if (P9.isIE || 'onwheel' in document.createElement(F4w)) {
            return t5H;
        }
        if (document.onmousewheel !== undefined) {
            return 'mousewheel';
        }
        return 'DOMMouseScroll';
    })();
    P9.newChild = function (N3, U8, R7, e5) {
        var c7;
        c7 = document.createElement(U8);
        C0t.J8h();
        if (R7) {
            c7.className = R7;
        }
        N3.appendChild(c7);
        if (e5) {
            c7.innerHTML = e5;
        }
        return c7;
    };
    P9.innerHTML = function (X$, h0) {
        C0t.r2m();
        if (window.MSApp && window.MSApp.execUnsafeLocalFunction) {
            window.MSApp.execUnsafeLocalFunction(function () {
                X$.innerHTML = h0;
            });
        } else {
            X$.innerHTML = h0;
        }
    };
    P9.focus = function (a7, u$) {
        var v2;
        if (P9.isSurface || u$) {
            v2 = 0;
            if (!isNaN(parseInt(u$, 10))) {
                v2 = u$;
            }
            setTimeout(function () {
                C0t.J8h();
                a7.focus();
            }, v2);
        } else {
            a7.focus();
        }
    };
    P9.blur = function (W1) {
        if (!W1) {
            W1 = document.activeElement;
        }
        if (W1) {
            W1.blur();
        }
        window.focus();
    };
    P9.findNodesByText = function (F3, a$) {
        var V9, c_;
        if (F3.innerHTML == a$) {
            return [F3];
        }
        V9 = [];
        for (var c2 = 0; c2 < F3.childNodes.length; c2++) {
            c_ = P9.findNodesByText(F3.childNodes[c2], a$);
            if (c_) {
                V9 = V9.concat(c_);
            }
        }
        if (V9.length) {
            return V9;
        }
        return null;
    };
    P9.hideByText = function (s8, s3) {
        var E4;
        E4 = P9.findNodesByText(s8, s3);
        C0t.J8h();
        for (var v8 = 0; v8 < E4.length; v8++) {
            E4[v8].style.display = 'none';
        }
    };
    P9.pageHeight = function () {
        var { innerHeight: S_, top: V7, parent: O6, self: a9 } = window;
        if (V7 != a9) {
            try {
                if (S_ > O6.innerHeight) {
                    S_ = O6.innerHeight;
                }
            } catch (j9) {}
        }
        C0t.r2m();
        return S_;
    };
    C0t.r2m();
    P9.pageWidth = function () {
        var { innerWidth: w_, top: F0, parent: B5, self: v5 } = window;
        if (F0 != v5) {
            try {
                if (w_ > B5.innerWidth) {
                    w_ = B5.innerWidth;
                }
            } catch (c3) {}
        }
        C0t.J8h();
        return w_;
    };
    P9.stripPX = function (z6) {
        if (!z6) {
            return 0;
        }
        C0t.r2m();
        if (typeof z6 == 'number') {
            return z6;
        }
        return parseInt(z6.substr(0, z6.indexOf('p')), 10);
    };
    P9.withinElement = function (D6, W7, x9) {
        var X7;
        X7 = D6.getBoundingClientRect();
        if (W7 <= X7.left) {
            return !!'';
        }
        if (x9 <= X7.top) {
            return ![];
        }
        if (W7 >= X7.left + D6.offsetWidth) {
            return ![];
        }
        if (x9 >= X7.top + D6.offsetHeight) {
            return !'1';
        }
        return !!{};
    };
    P9.efficientDOMUpdate = function (a2, F6, O7) {
        if (a2[F6] !== O7) {
            a2[F6] = O7;
            return !![];
        }
        C0t.r2m();
        return !{};
    };
    P9.cqvirtual = function (i6) {
        var P0;
        if (!i6) {
            return;
        }
        P0 = i6.cloneNode(!![]);
        P0.innerHTML = '';
        P0.original = i6;
        return P0;
    };
    P9.cqrender = function (k$) {
        var b5;
        if (!k$) {
            return;
        }
        if (k$.innerHTML == k$.original.innerHTML) {
            return k$.original;
        }
        P9.removeChildIfNot(k$.original, 'template');
        C0t.r2m();
        b5 = Array.from(k$.children);
        if (b5.length) {
            b5.forEach(function (h6) {
                k$.original.appendChild(k$.removeChild(h6));
            });
        }
        return k$.original;
    };
    P9.removeChildIfNot = function (X8, p3) {
        var u3;
        C0t.r2m();
        u3 = Array.from(X8.children);
        if (u3.length) {
            u3.forEach(function (F2) {
                if (!p3 || !F2.matches(p3)) {
                    X8.removeChild(F2);
                }
            });
        }
        return X8;
    };
    P9.safeMouseOut = function (y5, T4) {
        y5.addEventListener('mouseout', Y2(y5, T4));
        function Y2(u_, H8) {
            C0t.J8h();
            return function (I2) {
                C0t.r2m();
                var w$$;
                w$$ = 'u';
                w$$ += 'ndefi';
                w$$ += 'ned';
                if (typeof I2.pageX == w$$) {
                    I2.pageX = I2.clientX;
                    I2.pageY = I2.clientY;
                }
                if (P9.withinElement(u_, I2.pageX, I2.pageY)) {
                    return;
                }
                u_.stxMouseOver = ![];
                H8(I2);
            };
        }
    };
    P9.safeMouseOver = function (u6, h3) {
        u6.addEventListener('mouseover', w7(u6, h3));
        C0t.J8h();
        function w7(C_, D3) {
            return function (A2) {
                if (typeof A2.pageX == 'undefined') {
                    A2.pageX = A2.clientX;
                    A2.pageY = A2.clientY;
                }
                if (P9.withinElement(C_, A2.pageX, A2.pageY)) {
                    if (C_.stxMouseOver) {
                        return;
                    }
                    C_.stxMouseOver = !!1;
                    D3(A2);
                }
            };
        }
    };
    P9.installTapEvent = function (U3, x6) {
        var w5;
        C0t.r2m();
        w5 = function (z4) {
            var w4g, y06, C2, t9V, o4D, N_3;
            w4g = 'und';
            w4g += 'ef';
            w4g += 'i';
            w4g += 'ned';
            y06 = 'st';
            y06 += 'x';
            y06 += 'tap';
            C2 = new Event(y06, { bubbles: !!'1', cancelable: !!{} });
            if (typeof z4.pageX == w4g) {
                z4.pageX = z4.clientX;
                z4.pageY = z4.clientY;
            }
            C2.pageX = z4.pageX;
            t9V = -2029794677;
            C0t.M8Y(19);
            o4D = -C0t.c6Y(64, '788278568');
            N_3 = 2;
            for (var g7u = +'1'; C0t.O$R(g7u.toString(), g7u.toString().length, 20029) !== t9V; g7u++) {
                C2.pageY = z4.pageY;
                C0t.C$o(38);
                N_3 += C0t.d58('2', 1);
            }
            if (C0t.q2D(N_3.toString(), N_3.toString().length, 95613) !== o4D) {
                C2.pageY = z4.pageY;
            }
            z4.target.dispatchEvent(C2);
            if (x6 && x6.stopPropagation) {
                z4.stopPropagation();
            }
        };
        P9.safeClickTouch(U3, w5, x6);
    };
    P9.safeClickTouch = function (u4, J3, C9) {
        var S7W, Y_, G2, J0, k3, Y0, V_, T$R, O1p, V5V, j$, W$, h0m, n_4, Q4l;
        S7W = 'point';
        S7W += 'e';
        S7W += 'ru';
        S7W += 'p';
        if (!C9) {
            C9 = {};
        }
        Y_ = {};
        if (!C9.allowMultiple) {
            P9.clearSafeClickTouches(u4);
        }
        if (C9.preventUnderlayClick !== !'1') {
            C9.preventUnderlayClick = !![];
        }
        if (C9.absorbDownEvent !== ![]) {
            C9.absorbDownEvent = !'';
        }
        C9.allowAnotherDevice = 0;
        C9.registeredClick = !{};
        G2 = u4.safeClickTouchEvents;
        if (!G2) {
            G2 = u4.safeClickTouchEvents = [];
        }
        J0 = D8('mouseup', C9, Y_);
        k3 = D8('touchend', C9, Y_);
        Y0 = D8(S7W, C9, Y_);
        V_ = function (I7) {
            I7.stopPropagation();
        };
        T$R = -1419556650;
        O1p = -27149222;
        V5V = 2;
        function q5(q6, b0) {
            C0t.J8h();
            return function (M5) {
                C0t.J8h();
                var D2, Q$, T5v, b5R, C8w;
                D2 = M5.clientX ? M5.clientX : M5.pageX;
                Q$ = M5.clientY ? M5.clientY : M5.pageY;
                if (b0) {
                    q6.t = new Date().getTime();
                    T5v = 93380431;
                    b5R = -656741645;
                    C8w = 2;
                    for (var H8c = 1; C0t.O$R(H8c.toString(), H8c.toString().length, 35238) !== T5v; H8c++) {
                        q6.x = D2;
                        C8w += 2;
                    }
                    if (C0t.O$R(C8w.toString(), C8w.toString().length, 63843) !== b5R) {
                        q6.x = D2;
                    }
                    q6.x = D2;
                    q6.y = Q$;
                } else if (q6.x) {
                    if (Math.pow(q6.x - D2, 2) + Math.pow(q6.y - Q$, 2) > '16' - 0) {
                        q6.t = null;
                    }
                }
            };
        }
        for (var S3e = 1; C0t.q2D(S3e.toString(), S3e.toString().length, 82640) !== T$R; S3e++) {
            j$ = {};
            V5V += +'2';
        }
        if (C0t.O$R(V5V.toString(), V5V.toString().length, 89913) !== O1p) {
            j$ = {};
        }
        j$ = {};
        function D8(Z2, Q6, N1) {
            C0t.J8h();
            return function (B9) {
                var D5;
                if (!P9.safeClickTouchEvent) {
                    if (!N1.t) {
                        return;
                    }
                    D5 = N1.t;
                    N1.t = null;
                    if (D5 + 1000 < new Date().getTime()) {
                        return;
                    }
                }
                if (Q6.safety && Q6.safety.recentlyDragged) {
                    return;
                }
                if ((B9.which && B9.which >= 2) || (B9.button && B9.button >= 2)) {
                    return;
                }
                if (Q6.preventUnderlayClick) {
                    if (B9.target.tagName !== 'INPUT') {
                        B9.preventDefault();
                    }
                } else {
                    if (Q6.lastType != Z2 && Date.now() < Q6.allowAnotherDevice) {
                        return;
                    }
                    Q6.lastType = Z2;
                    C0t.C$o(81);
                    var r_N = C0t.d58(16, 13000, 16, 3327000);
                    Q6.allowAnotherDevice = Date.now() + r_N;
                }
                J3(B9);
            };
        }
        if (P9.safeClickTouchEvent) {
            W$ = D8(P9.safeClickTouchEvent, C9);
            u4.addEventListener(P9.safeClickTouchEvent, W$);
            j$[P9.safeClickTouchEvent] = W$;
            G2.push(j$);
        } else if ('onpointerup' in document && !P9.noPointerEvents) {
            u4.addEventListener('pointerdown', q5(Y_, !!{}));
            u4.addEventListener('pointermove', q5(Y_));
            u4.addEventListener('pointerup', Y0);
            j$.pointerup = Y0;
            if (C9.absorbDownEvent) {
                u4.addEventListener('pointerdown', V_);
                j$.pointerdown = V_;
            }
            G2.push(j$);
        } else {
            h0m = 'to';
            h0m += 'u';
            h0m += 'ch';
            h0m += 'move';
            n_4 = 'to';
            n_4 += 'uc';
            n_4 += 'hstart';
            u4.addEventListener('mousedown', q5(Y_, !''));
            u4.addEventListener('mousemove', q5(Y_));
            u4.addEventListener(n_4, q5(Y_, !!1));
            u4.addEventListener(h0m, q5(Y_));
            u4.addEventListener('mouseup', J0);
            u4.addEventListener('touchend', k3);
            j$.mouseup = J0;
            j$.touchend = k3;
            if (C9.absorbDownEvent) {
                Q4l = 'moused';
                Q4l += 'own';
                u4.addEventListener(Q4l, V_);
                j$.mousedown = V_;
                u4.addEventListener('touchstart', V_);
                j$.touchstart = V_;
            }
            G2.push(j$);
        }
    };
    P9.clearSafeClickTouches = function (f7) {
        C0t.r2m();
        var n6, m9, m$;
        n6 = f7.safeClickTouchEvents;
        if (!n6) {
            return;
        }
        for (var d8 = 0; d8 < n6.length; d8++) {
            m9 = n6[d8];
            for (var M0 in m9) {
                m$ = m9[M0];
                f7.removeEventListener(M0, m$);
            }
        }
        f7.safeClickTouchEvents = null;
    };
    P9.safeDrag = function (w9, n$) {
        var A7E, U_6, C2d, H1Z, e$, q$, b6, m8, j3, f3, Q3, z3;
        A7E = 't';
        C0t.J8h();
        function t$(D0) {
            return function (j1) {
                var e2, P_;
                if (j3) {
                    return;
                }
                j3 = !!1;
                P9.ChartEngine.ignoreTouch = !!{};
                e2 = function (U5) {
                    var b7U, q79, D4u;
                    if (U5 && U5.preventDefault) {
                        U5.preventDefault();
                    }
                    z3.recentlyDragged = !'';
                    C0t.C$o(46);
                    b7U = -C0t.c6Y('2059865880', 64);
                    q79 = -+'1992592325';
                    C0t.C$o(20);
                    D4u = C0t.c6Y('2', 0);
                    for (var J7r = 1; C0t.q2D(J7r.toString(), J7r.toString().length, 41852) !== b7U; J7r++) {
                        U5.displacementX = q$(U5) * f3;
                        D4u += 2;
                    }
                    if (C0t.O$R(D4u.toString(), D4u.toString().length, 79583) !== q79) {
                        U5.displacementX = q$(U5) - f3;
                    }
                    U5.displacementY = b6(U5) - Q3;
                    n$.move(U5);
                };
                if (n$.move) {
                    document.body.addEventListener(D0.move, e2);
                }
                P_ = function (R6) {
                    P9.ChartEngine.ignoreTouch = ![];
                    if (n$.move) {
                        document.body.removeEventListener(D0.move, e2);
                    }
                    document.body.removeEventListener(D0.up, P_);
                    C0t.r2m();
                    R6.displacementX = q$(R6) - f3;
                    R6.displacementY = b6(R6) - Q3;
                    if (n$.up) {
                        n$.up(R6);
                    }
                    setTimeout(function () {
                        z3.recentlyDragged = !'1';
                    }, 50);
                };
                document.body.addEventListener(D0.up, P_);
                setTimeout(function () {
                    C0t.J8h();
                    j3 = !{};
                }, m8);
                f3 = q$(j1);
                Q3 = b6(j1);
                if (n$.down) {
                    n$.down(j1);
                }
            };
        }
        A7E += 'o';
        A7E += 'uc';
        A7E += 'hend';
        U_6 = 'p';
        U_6 += 'ointe';
        U_6 += 'r';
        U_6 += 'move';
        C2d = 'po';
        C2d += 'i';
        C2d += 'nt';
        C2d += 'erdown';
        H1Z = 'cli';
        H1Z += 'entX';
        e$ = function (L7, Z6) {
            C0t.J8h();
            return function (X3) {
                if (X3.touches) {
                    if (X3.touches.length > 0) {
                        C0t.C$o(74);
                        return X3.touches[C0t.d58('0', 0)][L7];
                    } else if (X3.changedTouches && X3.changedTouches.length > 0) {
                        return X3.changedTouches[0][L7];
                    }
                }
                return typeof X3[L7] !== 'undefined' ? X3[L7] : X3[Z6];
            };
        };
        q$ = e$('pageX', H1Z);
        b6 = e$('pageY', 'clientY');
        if (typeof n$ === 'function') {
            n$ = { down: arguments['1' ^ 0], move: arguments[2], up: arguments[3] };
        }
        n$ = n$ || {};
        m8 = 100;
        j3 = ![];
        f3 = 0;
        Q3 = +'0';
        z3 = { recentlyDragged: !{} };
        w9.addEventListener('mousedown', t$({ down: 'mousedown', move: 'mousemove', up: 'mouseup' }));
        w9.addEventListener('pointerdown', t$({ down: C2d, move: U_6, up: 'pointerup' }));
        w9.addEventListener('touchstart', t$({ down: 'touchstart', move: 'touchmove', up: A7E }), { passive: !!0 });
        return z3;
    };
    P9.inputKeyEvents = function (w0, d1) {
        w0.addEventListener(
            'keyup',
            function (j7) {
                var v9;
                v9 = j7.keyCode;
                switch (v9) {
                    case 13:
                        d1();
                        break;
                    case 27:
                        w0.value = '';
                        break;
                    default:
                        break;
                }
            },
            !!0
        );
    };
    P9.fixScreen = function () {
        C0t.C$o(0);
        window.scrollTo(C0t.c6Y('0', 0), 0);
    };
    P9.setCaretPosition = function (o2, Z3) {
        var N5;
        C0t.J8h();
        o2.style.zIndex = +'5000';
        if (o2.setSelectionRange) {
            P9.focus(o2);
            try {
                o2.setSelectionRange(Z3, Z3);
            } catch (s6) {}
        } else if (o2.createTextRange) {
            N5 = o2.createTextRange();
            N5.collapse(!0);
            N5.moveEnd('character', Z3);
            N5.moveStart('character', Z3);
            N5.select();
        }
    };
    P9.setValueIfNotActive = function (J1, f5) {
        if (document.activeElement == J1) {
            return;
        }
        J1.value = f5;
    };
    P9.hideKeyboard = function (c9) {
        var i1l, p9;
        i1l = 'IN';
        i1l += 'P';
        i1l += 'U';
        i1l += 'T';
        p9 = document.activeElement;
        if (p9.tagName == i1l || p9.tagName == 'TEXTAREA') {
            p9.blur();
            window.focus();
            if (c9) {
                if (c9 === document.body || document.body.contains(c9)) {
                    c9.focus();
                }
            }
        }
    };
    P9.smartHover = function () {
        var B7, f$, i8L, h5P, o_M;
        if (!document || document.documentElement.hasAttribute('ciq-last-interaction')) {
            return;
        }
        function Q8(T8) {
            var B7V;
            B7V = 'to';
            B7V += 'u';
            B7V += 'ch';
            clearTimeout(f$);
            B7 = !!{};
            if (document.documentElement.getAttribute('ciq-last-interaction') != 'touch') {
                r7(B7V);
            }
            f$ = setTimeout(function () {
                C0t.J8h();
                B7 = ![];
            }, 500);
        }
        B7 = ![];
        document.addEventListener('touchend', Q8, !{});
        function r7(X_) {
            C0t.J8h();
            document.documentElement.setAttribute('ciq-last-interaction', X_);
        }
        document.addEventListener('mouseover', y_, !{});
        function y_(k1) {
            C0t.r2m();
            if (!B7) {
                r7('mouse');
            }
        }
        i8L = -1349354765;
        h5P = -69100854;
        o_M = 2;
        for (var U6j = +'1'; C0t.O$R(U6j.toString(), U6j.toString().length, 23643) !== i8L; U6j++) {
            r7('');
            o_M += 2;
        }
        if (C0t.q2D(o_M.toString(), o_M.toString().length, '91616' >> 0) !== h5P) {
            r7('');
        }
    };
    P9.translatableTextNode = function (h8, g1, q7) {
        var S1;
        C0t.J8h();
        if (h8.translationCallback) {
            S1 = document.createElement('translate');
            S1.setAttribute('original', g1);
            S1.innerHTML = h8.translationCallback(g1, q7);
            return S1;
        }
        return document.createTextNode(g1);
    };
    P9.climbUpDomTree = function (E9, Q2) {
        var l4;
        C0t.r2m();
        if (!(E9 instanceof HTMLElement)) {
            return null;
        }
        l4 = [];
        while (E9) {
            if (!Q2 || E9.matches(Q2)) {
                l4.push(E9);
            }
            E9 = E9.parentElement;
        }
        return l4;
    };
    P9.guaranteedSize = function (P7) {
        var U2, e3;
        if (P7 === document) {
            P7 = window;
        }
        if (!P7.nodeType) {
            return { width: P7.innerWidth, height: P7.innerHeight };
        }
        C0t.J8h();
        if (!P7 || P7.nodeType > 1) {
            return {};
        }
        U2 = P7.offsetWidth;
        e3 = P7.offsetHeight;
        while (!U2 || !e3) {
            if (P7.tagName === 'BODY' || P7 === window) {
                if (!U2) {
                    U2 = window.innerWidth;
                }
                if (!e3) {
                    e3 = window.innerHeight;
                }
                break;
            }
            P7 = P7.parentElement;
            if (!U2) {
                U2 = P7.offsetWidth;
            }
            if (!e3) {
                e3 = P7.offsetHeight;
            }
        }
        return { width: U2, height: e3 };
    };
    P9.trulyVisible = function (K8) {
        var i73, e7;
        i73 = 'hidd';
        i73 += 'e';
        i73 += 'n';
        if (!K8) {
            return !![];
        }
        e7 = getComputedStyle(K8);
        if (e7.opacity === ((6590, 7250) <= ('6680' ^ 0, 4890) ? 636.85 : '0')) {
            return !{};
        }
        if (e7.display === 'none') {
            return ![];
        }
        if (e7.visibility === i73) {
            return ![];
        }
        if (parseInt(e7.width, 10) === 0) {
            return !!0;
        }
        if (parseInt(e7.height, 10) === 0 && e7.overflowY == 'hidden') {
            return !{};
        }
        return P9.trulyVisible(K8.parentElement);
    };
    P9.elementDimensions = function (I9, C0) {
        var K6w, G7, Z$, Q9, K3, X0z, S_6, A_;
        K6w = 'w';
        K6w += 'id';
        C0t.J8h();
        K6w += 't';
        K6w += 'h';
        if (!I9 || I9.nodeType !== 1) {
            return {};
        }
        G7 = getComputedStyle(I9);
        Z$ = { width: parseFloat(G7.width), height: parseFloat(G7.height) };
        Q9 = { margin: {}, border: {}, padding: {} };
        K3 = [K6w, 'height'];
        for (var t5 in Q9) {
            X0z = 'B';
            X0z += 'ottom';
            S_6 = 'Wi';
            S_6 += 'dt';
            S_6 += 'h';
            A_ = t5 == 'border' ? S_6 : '';
            Q9[t5] = {
                width: parseFloat(G7[t5 + 'Left' + A_]) + parseFloat(G7[t5 + 'Right' + A_]),
                height: parseFloat(G7[t5 + 'Top' + A_]) + parseFloat(G7[t5 + X0z + A_]),
            };
        }
        if (C0 && C0.margin) {
            K3.forEach(function (X6) {
                Z$[X6] += Q9.margin[X6];
            });
        }
        if (C0 && G7.boxSizing === 'content-box') {
            if (C0.padding) {
                K3.forEach(function (v7) {
                    Z$[v7] += Q9.padding[v7];
                });
            }
            if (C0.border) {
                K3.forEach(function (Z_) {
                    Z$[Z_] += Q9.border[Z_];
                });
            }
        } else if (G7.boxSizing === 'border-box') {
            if (!C0 || !C0.padding) {
                K3.forEach(function (K5) {
                    C0t.r2m();
                    Z$[K5] -= Q9.padding[K5];
                });
            }
            if (!C0 || !C0.border) {
                K3.forEach(function (a8) {
                    C0t.J8h();
                    Z$[a8] -= Q9.border[a8];
                });
            }
        }
        return Z$;
    };
    P9.resizeObserver = function (F4, H9, N0, T6) {
        if (T6) {
            if (typeof ResizeObserver !== 'undefined') {
                if (!N0) {
                    N0 = new ResizeObserver(H9);
                    N0.observe(F4);
                }
            } else {
                if (N0) {
                    clearInterval(N0);
                }
                N0 = setInterval(H9, T6);
            }
        } else {
            if (N0) {
                if (typeof ResizeObserver !== 'undefined') {
                    N0.disconnect();
                } else {
                    clearInterval(N0);
                }
            }
            N0 = null;
        }
        return N0;
    };
    P9.getLines = function (W0, N4, s5) {
        var C6, F_, W2, Q5, V5, I8;
        C6 = N4.split(
            (+'78.6', 9880) != (3295, 5561) ? ((4280, 7598) < 671 ? (242.92, 0xc8d) : ' ') : (9.16e2, 0x1c0c)
        );
        F_ = [];
        C0t.r2m();
        W2 = '';
        Q5 = 0;
        V5 = !!'';
        for (var w6 = 0; w6 < C6.length; w6++) {
            I8 = C6[w6];
            Q5 = W0.measureText(W2 + I8).width;
            if (Q5 < s5) {
                if (V5) {
                    W2 += ' ';
                }
                V5 = !!{};
                W2 += I8;
            } else {
                F_.push(W2);
                W2 = I8;
            }
            if (w6 === C6.length - 1) {
                F_.push(W2);
                break;
            }
        }
        return F_;
    };
    P9.alert = function (Q_) {
        C0t.r2m();
        var W_y, z$t, l6B;
        W_y = -1923671589;
        z$t = -2106280244;
        l6B = 2;
        for (var W6x = 1; C0t.O$R(W6x.toString(), W6x.toString().length, 27188) !== W_y; W6x++) {
            if (typeof window !== 'undefined') {
                window.alert(Q_);
            } else {
                console.log(Q_);
            }
            l6B += 2;
        }
        if (C0t.O$R(l6B.toString(), l6B.toString().length, 61558) !== z$t) {
            if (-window === '') {
                window.alert(Q_);
            } else {
                console.log(Q_);
            }
        }
    };
    try {
        Z8S = 'undefin';
        Z8S += 'e';
        Z8S += 'd';
        if (typeof localStorage !== Z8S) {
            P9.localStorage = localStorage;
        }
    } catch (E3) {}
    if (!P9.localStorage) {
        P9.localStorage = {
            items: {},
            getItem: function (o3) {
                C0t.r2m();
                return P9.localStorage.items[o3] || null;
            },
            setItem: function (p$, Z4) {
                C0t.r2m();
                P9.localStorage.items[p$] = Z4;
            },
            removeItem: function (Y5) {
                delete P9.localStorage.items[Y5];
            },
        };
    }
    P9.privateBrowsingAlert = !{};
    P9.localStorageSetItem = function (v0, X0) {
        try {
            P9.localStorage.setItem(v0, X0);
        } catch (k8) {
            if (!P9.privateBrowsingAlert) {
                P9.alert(
                    'No storage space available.  Possible causes include browser being in Private Browsing mode, or maximum storage space has been reached.'
                );
                P9.privateBrowsingAlert = !!{};
            }
        }
    };
};
E = u9 => {
    var R_k = x2dci;
    var n1_, o6Y, u0c, X_R, X0B, T5e, I4, z1;
    n1_ = 'ca';
    n1_ += 'ndl';
    n1_ += 'e';
    o6Y = 'd';
    o6Y += 'ay';
    u0c = 'm';
    u0c += 'i';
    u0c += 'nut';
    u0c += 'e';
    X_R = 'mont';
    X_R += 'h';
    X0B = 'mi';
    X0B += 'n';
    X0B += 'ute';
    T5e = 'r';
    T5e += 'oundRectAr';
    R_k.r2m();
    T5e += 'row';
    I4 = u9.CIQ;
    I4.ChartEngine = function (J4) {
        var D_, K2;
        if (!J4) {
            J4 = { container: null };
        } else if (typeof HTMLDivElement != 'undefined' && J4.constructor == HTMLDivElement) {
            D_ = { container: J4 };
            J4 = D_;
        }
        for (var i7 in z1) {
            this[i7] = I4.clone(I4.ChartEngine.prototype[i7]);
        }
        this.container = null;
        this.createChartPanel = !'';
        this.markers = {};
        this.panels = {};
        this.overlays = {};
        this.charts = {};
        this.eventListeners = [];
        this.controls = {};
        this.goneVertical = !1;
        this.pinchingScreen = ![];
        this.grabbingScreen = !1;
        this.grabStartX = 0;
        this.grabStartY = 0;
        this.grabStartScrollX = 0;
        this.grabStartScrollY = 0;
        this.swipe = {};
        this.grabStartCandleWidth = 0;
        R_k.M8Y(20);
        this.grabStartZoom = R_k.c6Y('0', 0);
        this.grabOverrideClick = !!'';
        this.grabMode = '';
        this.vectorsShowing = !'1';
        this.mouseMode = !![];
        this.lineTravelSpacing = !!0;
        this.highlightedDataSetField = null;
        this.anyHighlighted = !!'';
        this.accessoryTimer = null;
        this.lastAccessoryUpdate = new Date().getTime();
        this.displayCrosshairs = !![];
        this.hrPanel = null;
        this.editingAnnotation = ![];
        this.openDialog = '';
        this.touches = [];
        this.changedTouches = [];
        this.crosshairTick = null;
        this.crosshairValue = null;
        this.pt = { x1: -1, x2: -1, y1: -1, y2: -1 };
        R_k.C$o(20);
        this.moveA = -R_k.d58('1', 0);
        this.moveB = -1;
        this.touchStartTime = -1;
        this.touchPointerType = '';
        this.gestureStartDistance = -1;
        this.grabStartPeriodicity = 1;
        this.grabEndPeriodicity = -1;
        this.scrollEvent = null;
        this.cmd = !!0;
        this.ctrl = !{};
        this.shift = !!'';
        this.userPointerDown = ![];
        this.cloneDrawing = !!0;
        this.insideChart = !!0;
        this.overXAxis = !{};
        this.overYAxis = !1;
        this.displayInitialized = !!0;
        this.cx = null;
        this.isHistoricalModeSet = null;
        this.cy = null;
        this.clicks = { s1MS: -1, e1MS: -1, s2MS: -('1' ^ 0), e2MS: -+'1' };
        this.cancelTouchSingleClick = !1;
        this.locale = null;
        this.dataZone = null;
        this.displayZone = null;
        this.timeZoneOffset = +'0';
        this.masterData = null;
        this.transformDataSetPre = null;
        this.transformDataSetPost = null;
        this.dataCallback = null;
        this.drawingObjects = [];
        this.undoStamps = [];
        this.useBackgroundCanvas = ![];
        this.mainSeriesRenderer = null;
        this.styles = {};
        this.plugins = {};
        this.currentVectorParameters = I4.clone(I4.ChartEngine.currentVectorParameters);
        this.chart = new I4.ChartEngine.Chart();
        K2 = this.chart;
        K2.name = 'chart';
        K2.yAxis.name = 'chart';
        K2.canvas = null;
        K2.tempCanvas = null;
        K2.container = J4.container;
        if (I4.Market) {
            K2.market = new I4.Market();
        }
        this.charts.chart = K2;
        I4.extend(this, J4);
        if (J4.container) {
            if (this.registerHTMLElements) {
                this.registerHTMLElements();
            }
            K2.width = K2.container.clientWidth - K2.yAxis.width;
            this.setCandleWidth(this.layout.candleWidth, K2);
            K2.canvasHeight = K2.container.clientHeight;
        }
        this.construct();
    };
    I4.ChartEngine.drawingLine = ![];
    I4.ChartEngine.resizingPanel = null;
    R_k.C$o(38);
    I4.ChartEngine.crosshairX = R_k.c6Y('0', 1);
    I4.ChartEngine.crosshairY = +'0';
    I4.ChartEngine.useAnimation = !'';
    I4.ChartEngine.enableCaching = ![];
    I4.ChartEngine.ignoreTouch = !'1';
    I4.ChartEngine.useOldAndroidClear = !!{};
    I4.ChartEngine.currentVectorParameters = {};
    I4.ChartEngine.defaultDisplayTimeZone = null;
    I4.ChartEngine.pluginBasePath = 'plugins/';
    I4.ChartEngine.registeredContainers = [];
    I4.ChartEngine.registerHelpers = function (R9) {
        I4.ChartEngine.helpersToRegister.forEach(function (U6) {
            R_k.r2m();
            U6(R9);
        });
    };
    I4.ChartEngine.helpersToRegister = [];
    I4.ChartEngine.prototype.construct = function () {
        var k$2, s5K;
        if (this.createChartPanel) {
            k$2 = 'c';
            k$2 += 'hart';
            s5K = 'ch';
            s5K += 'ar';
            s5K += 't';
            this.stackPanel(s5K, k$2, 1);
            this.adjustPanelPositions();
            this.chart.panel = this.panels[this.chart.name];
        }
        this.cx = 0;
        this.cy = 0;
        this.micropixels = 0;
        this.callbackListeners = {
            doubleTap: [],
            doubleClick: [],
            drawing: [],
            drawingEdit: [],
            floatingWindow: [],
            layout: [],
            longhold: [],
            move: [],
            newChart: [],
            notification: [],
            periodicity: [],
            preferences: [],
            rightClick: [],
            scroll: [],
            studyOverlayEdit: [],
            studyPanelEdit: [],
            symbolChange: [],
            symbolImport: [],
            tap: [],
            theme: [],
            undoStamp: [],
        };
        R_k.r2m();
        I4.ChartEngine.registerHelpers(this);
    };
    z1 = {
        longHoldTime: 700,
        yTolerance: 100,
        minimumLeftBars: '1' << 32,
        reverseMouseWheel: !{},
        mouseWheelAcceleration: !'',
        minimumCandleWidth: 1,
        maximumCandleWidth: 200,
        minimumZoomTicks: 9,
        allowZoom: !'',
        allowScroll: !'',
        allowSideswipe: !0,
        allowThreeFingerTouch: !1,
        bypassRightClick: { series: !{}, study: !!'', drawing: !!0 },
        adjustHighlightedDataSetField: function (G$) {
            R_k.r2m();
            return G$;
        },
        displayIconsUpDown: !!{},
        displayIconsSolo: !!{},
        displayIconsClose: !0,
        displayPanelResize: !0,
        soloPanelToFullScreen: !'1',
        markerDelay: null,
        useBackingStore: !!{},
        disableBackingStoreDuringTouch: I4.isMobile || (I4.isSurface && I4.isFF),
        captureTouchEvents: !!'1',
        captureMouseWheelEvents: !!{},
        tapForHighlighting: !![],
        doubleClickTime: 250,
        yaxisLabelStyle: T5e,
        axisBorders: null,
        singleDrawingHighlight: !![],
        crosshairXOffset: -+'40',
        crosshairYOffset: -40,
        extendLastTick: !'1',
        translationCallback: null,
        dontRoll: !1,
        allowEquations: !'',
        cleanupGaps: !1,
        staticRange: !{},
        maxDataSetSize: 20000,
        maxMasterDataSize: 0,
        resizeDetectMS: 1000,
        xAxisAsFooter: !!{},
        xaxisHeight: +'30',
        displayGridLinesInStudies: !{},
        escapeOnSerialize: !![],
        candleWidthPercent: 0.65,
        colorByCandleDirection: !{},
        noWicksOnCandles: { renko: !![], linebreak: !!1 },
        fetchMaximumBars: { rangebars: !![], kagi: !![], renko: !![], linebreak: !![], pandf: !!{} },
        startComparisonsAtFirstVisibleBar: !{},
        animations: {
            zoom: {
                isStub: !![],
                run: function (N9, l24, M$_) {
                    R_k.J8h();
                    N9(M$_);
                },
                stop: function () {},
                reset: function () {},
                running: !'1',
                hasCompleted: !'',
            },
        },
        staticRangePeriodicityMap: [
            { rangeInMS: I4.WEEK, periodicity: 1, interval: 5, timeUnit: 'minute' },
            { rangeInMS: I4.MONTH, periodicity: 1, interval: '30' * 1, timeUnit: X0B },
            { rangeInMS: I4.YEAR, periodicity: +'1', interval: 'day' },
            { rangeInMS: I4.DECADE, periodicity: 1, interval: 'week' },
            { rangeInMS: I4.DECADE * 10, periodicity: '1' | 1, interval: X_R },
            { rangeInMS: Number.MAX_VALUE, periodicity: '12' << 32, interval: 'month' },
        ],
        dynamicRangePeriodicityMap: [
            { interval: +'1', timeUnit: 'minute', rangeInMS: I4.MINUTE },
            { interval: 5, timeUnit: 'minute', rangeInMS: I4.MINUTE * 5 },
            { interval: 30, timeUnit: 'minute', rangeInMS: I4.MINUTE * 30 },
            { interval: 60, timeUnit: u0c, rangeInMS: I4.MINUTE * 60 },
            { interval: 'day', rangeInMS: I4.DAY },
            { interval: 'month', rangeInMS: I4.MONTH },
            { interval: 'year', rangeInMS: I4.YEAR },
        ],
        layout: {
            interval: o6Y,
            periodicity: 1,
            timeUnit: null,
            candleWidth: 8,
            flipped: !{},
            volumeUnderlay: ![],
            adj: !0,
            crosshair: !'1',
            chartType: n1_,
            extended: !!0,
            marketSessions: {},
            aggregationType: 'ohlc',
            chartScale: 'linear',
            studies: {},
            panels: {},
            setSpan: {},
            outliers: ![],
        },
        preferences: {
            currentPriceLine: ![],
            dragging: { series: !'', study: !!{}, yaxis: !!1 },
            drawings: null,
            highlightsRadius: 10,
            highlightsTapRadius: 30,
            magnet: !'1',
            horizontalCrosshairField: null,
            labels: !!{},
            language: null,
            timeZone: null,
            whitespace: 50,
            zoomInSpeed: null,
            zoomOutSpeed: null,
            zoomAtCurrentMousePosition: !{},
        },
        streamParameters: { count: 0, maxWait: 1000, maxTicks: 100, timeout: -1 },
        autoPickCandleWidth: { turnOn: !'1', candleWidth: 5 },
    };
    I4.extend(I4.ChartEngine.prototype, z1);
    I4.ChartEngine.NONE = 0;
    I4.ChartEngine.CLOSEUP = 1;
    R_k.C$o(20);
    I4.ChartEngine.CLOSEDOWN = R_k.c6Y('2', 0);
    I4.ChartEngine.CLOSEEVEN = +'4';
    I4.ChartEngine.CANDLEUP = 8;
    I4.ChartEngine.CANDLEDOWN = 16;
    I4.ChartEngine.CANDLEEVEN = 32;
};
K = O3W => {
    var s3V = x2dci;
    var I7h;
    I7h = O3W.CIQ;
    I7h.convertFutureMonth = function (K8f) {
        var a86, f_j, y2N, V4$;
        a86 = '1';
        a86 += '2';
        f_j = '1';
        f_j += '1';
        y2N = K8f.toString();
        if (y2N.length <= 0 || y2N.length > 2) {
            return '';
        }
        switch (y2N) {
            case '1':
                return 'F';
            case ('6370' ^ 0) < ('161.21' * 1, +'274') ? (846.24, 8.96e3) : '2':
                return 4215 > (6592, 5210) ? 4.39e3 : 9190 !== 7255 ? 'G' : (+'18.42', 2777) != +'8650' ? ![] : ![];
            case '3':
                return (1000, 150.8) !== '95.13' * 1 ? 'H' : 4.66e3;
            case '4':
                return 'J';
            case 8829 >= ('1920' ^ 0)
                ? 993.15 != 8890
                    ? (8975, 4820) != 787.26
                        ? '5'
                        : ![]
                    : (!1, 0xd24)
                : ('P', 4.86e3):
                return 3120 <= 282 ? 'i' : 'K';
            case 287.43 !== (7515, '931.27' * 1) ? '6' : !'1':
                return 4670 > (+'9454', 2951) ? 'M' : 100.96;
            case (83, 646.94) != 324 ? '7' : (+'6.66e+3', 'O'):
                return 'N';
            case '8':
                return 'Q';
            case '9':
                return (87, '6871' - 0) != 944.53
                    ? (6800, 980) != +'703.95'
                        ? 'U'
                        : (473.98, 96) > '5576' - 0
                        ? 6.43e3
                        : ('M', !!{})
                    : ![];
            case '10':
                return (2295, 8160) > (+'869', 2920)
                    ? +'2530' == '917' << 32
                        ? 1390 <= 7542
                            ? ('d', !!0)
                            : !!0
                        : 'V'
                    : (0x1f87, 0x141c);
            case f_j:
                return (472.79, 293) > (179, 2390) ? (627.78, 3.53e3) : 'X';
            case a86:
                return (+'2240', +'2606') != 973.76
                    ? (+'144.13', 5650) >= (2789, 64.6)
                        ? 'Z'
                        : (2056, 3136) <= 4120
                        ? 'Q'
                        : 'i'
                    : (!!'', !!1);
            case (3373, 5635) >= (6400, 232)
                ? 'F'
                : (5950, '4980' - 0) != ('8551' * 1, 8130)
                ? ('713.72' - 0, 395.97)
                : (0x1dc4, ![]):
                return 9913 !== 432 ? '1' : (5270, '5120' << 64) < (2792, '8920' * 1) ? !{} : !![];
            case 'G':
                return '2';
            case (4667, '361.85' - 0) <= 7590
                ? (3824, 135.99) != ('6048' << 0, 549.76)
                    ? 'H'
                    : 5200 < 85.77
                    ? 3.76e3
                    : (7.27e3, '722.40' * 1)
                : (+'6.89e+2', 210.41):
                return '3';
            case 'J':
                return '4';
            case 'K':
                return '5';
            case 12.84 > 373
                ? (3290, '84.08' * 1) <= ('67.28' * 1, 6124)
                    ? +'6431' != 847.29
                        ? (99.24, !'1')
                        : 'z'
                    : ('J', !!'1')
                : 'M':
                return '6';
            case 'N':
                return 4217 === ('543.02' - 0, 6300)
                    ? ('m', 100.11)
                    : 5942 > (+'6090', 5110)
                    ? 4770 < ('423.61' * 1, +'3236')
                        ? ('A', 0x2293)
                        : '7'
                    : 0xcce;
            case (8660, 4946) > (9640, 199)
                ? (804.58, '642.74' - 0) >= (4980, '744.36' * 1)
                    ? 2370 >= ('399.31' - 0, 8900)
                        ? ('0x226a' | 64, 8.53e3)
                        : (+'0x1b2f', +'789.26')
                    : 'Q'
                : 450.54:
                return +'9910' >= 36.13 ? '8' : 8167 < '815.25' * 1 ? (+'6.61e+3', !!{}) : 306.16;
            case 9470 < (9621, 4830) ? ((3720, 621.82) != (6480, 2863) ? 0xf63 : 4.89e3) : 'U':
                return '520.57' - 0 != (432.45, 9971)
                    ? '9'
                    : 7155 > 1088
                    ? (+'139.5', 2706) == 4231
                        ? 0xa7f
                        : (!!1, 3.28e3)
                    : ![];
            case 'V':
                V4$ = '1';
                V4$ += '0';
                return V4$;
            case 'X':
                return '11';
            case 1795 !== (7260, 973)
                ? 420.6 >= 746.85
                    ? ('j', 29.66)
                    : 297.8 != (818.67, 271.45)
                    ? 'Z'
                    : !![]
                : 8.84e3:
                return '12';
        }
        return y2N;
    };
    I7h.money = function (h$_, R9I, Z5i) {
        s3V.J8h();
        if (!Z5i) {
            Z5i = '$';
        }
        if (Z5i.length == 3) {
            Z5i += ' ';
        }
        if (!R9I && R9I !== 0) {
            R9I = 2;
        }
        return Z5i + I7h.commas((Math.round(h$_ * 10000) / 10000).toFixed(R9I));
    };
    I7h.convertCurrencyCode = function (v6H) {
        var x2A, A4Z, o4v, p0Q;
        x2A = '\u0440';
        x2A += '\u0443';
        x2A += '\u0431';
        A4Z = 'M';
        A4Z += 'X';
        A4Z += '$';
        o4v = {
            JPY: 1480 >= (3508, '1914' - 0) ? 952.95 : '¥',
            USD:
                268.6 < (6360, 2883)
                    ? (9710, +'5357') <= (+'3707', 7037)
                        ? '$'
                        : (9260, 5736) != (2980, 4830)
                        ? 0x1382
                        : (0x1aa1, !0)
                    : 5.33e3,
            AUD: 'A$',
            BRL: 'R$',
            CAD: 'CA$',
            CNY: 'CN¥',
            CZK: 'Kč',
            DKK: 'kr',
            EUR:
                4080 === 5610
                    ? '0x22c7' << 64
                    : '775.02' * 1 !== (393.24, 2520)
                    ? 7300 !== 3990
                        ? '€'
                        : (0x971, 5.99e3)
                    : 2.03e3,
            GBP:
                (2560, 7804) > 409
                    ? (778, 2660) !== +'383.58'
                        ? 1150 === (855, '825.43' - 0)
                            ? 819.66
                            : '£'
                        : 8.02e3
                    : 931.31,
            HKD: 'HK$',
            HUF: 'Ft',
            ILS: (932, 242.32) != (3354, 35) ? ((612.76, 9240) <= '965.78' * 1 ? (+'0x2554', 'g') : '₪') : !'',
            INR: '₹',
            KRW: '₩',
            MXN: A4Z,
            NOK: 'kr',
            NZD: 'NZ$',
            PLN: 'zł',
            RUB: x2A,
            SAR: 4980 < (103.95, 860.9) ? (!1, !![]) : '﷼',
            SEK: 'kr',
            SGD: 'S$',
            THB: (909.84, 2510) >= ('8435' | 81, 4540) ? 0x168d : (5980, 8400) >= +'747.17' ? '฿' : (5.53e3, 0xa29),
            TRY:
                (590, +'378.1') <= 4261
                    ? '₺'
                    : (3960, +'800') >= (8.89, 9950)
                    ? (+'525', +'150.67')
                    : 556 === 275.38
                    ? (!!'', !{})
                    : (5.68e3, 'c'),
            TWD: 'NT$',
            VND: (6257, 956.97) === (8591, '264.52' - 0) ? (5.99e2, 0x2293) : '₫',
            XAF: 'FCFA',
            XCD: 'EC$',
            XOF: 'CFA',
            XPF: 'CFPF',
            ZAR: (2340, +'561') >= '2490' << 32 ? (723, 4.76e3) : +'979.93' !== '7110' - 0 ? 'R' : ('s', 0x5a0),
        };
        p0Q = o4v[v6H];
        if (p0Q) {
            return p0Q;
        }
        return v6H;
    };
    I7h.commas = function (X0G) {
        s3V.J8h();
        return X0G.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            (5683, 8370) === (3357, 380)
                ? 55.84
                : +'629.23' <= '783.62' * 1
                ? (75.29, 3177) != 6684
                    ? ','
                    : 'x'
                : !!''
        );
    };
    I7h.cleanPeriodicity = function (w2N, D0e, P8T) {
        var j9v, Y0Z, x$M, M7y, a$Q, b61, q11;
        j9v = 'h';
        j9v += 'o';
        s3V.r2m();
        j9v += 'ur';
        if (isNaN(w2N)) {
            w2N = 1;
        }
        Y0Z = -1101956672;
        x$M = -270753879;
        M7y = 2;
        for (var z02 = 1; s3V.O$R(z02.toString(), z02.toString().length, 53220) !== Y0Z; z02++) {
            if (!D0e) {
                D0e = 1;
            }
            M7y += 2;
        }
        if (s3V.q2D(M7y.toString(), M7y.toString().length, 17676) !== x$M) {
            if (~D0e) {
                D0e = 4;
            }
        }
        if (!isNaN(D0e) && P8T) {
            a$Q = 'mill';
            a$Q += 'i';
            a$Q += 'second';
            b61 = 'mi';
            b61 += 'nute';
            if (!(P8T == 'hour' || P8T == b61 || P8T == 'second' || P8T == a$Q)) {
                D0e = P8T;
                P8T = null;
            }
        } else if (D0e == 'tick') {
            P8T = null;
        } else if (!P8T && !isNaN(D0e)) {
            P8T = 'minute';
        }
        if (P8T == j9v) {
            P8T = 'minute';
            s3V.M8Y(38);
            D0e = s3V.d58(D0e, 60);
        }
        if (D0e == 'year') {
            q11 = 'm';
            q11 += 'o';
            q11 += 'n';
            q11 += 'th';
            D0e = q11;
            if (!w2N) {
                s3V.M8Y(74);
                w2N = s3V.d58('1', 0);
            }
            s3V.C$o(38);
            w2N = s3V.c6Y(w2N, 12);
        }
        return { period: w2N, interval: D0e, timeUnit: P8T };
    };
    s3V.r2m();
    I7h.readablePeriodicity = function (s74) {
        var C1f, m$5;
        C1f = s74.layout.periodicity;
        m$5 = s74.layout.interval;
        if (typeof s74.layout.interval == 'number' && s74.layout.timeUnit) {
            C1f = s74.layout.interval * s74.layout.periodicity;
            m$5 = s74.layout.timeUnit;
        } else if (typeof s74.layout.interval == 'number' && !s74.layout.timeUnit) {
            C1f = s74.layout.interval * s74.layout.periodicity;
            m$5 = 'minute';
        }
        if (C1f % 60 === 0 && m$5 == 'minute') {
            C1f /= 60;
            m$5 = 'hour';
        }
        s3V.M8Y(68);
        var w53 = s3V.d58(31458, 9, 3930);
        s3V.M8Y(25);
        var p_M = s3V.d58(22590, 20100, 20);
        s3V.M8Y(67);
        var d2Z = s3V.d58(113, 18, 1);
        s3V.C$o(34);
        var J_M = s3V.d58(3997, 43984, 1, 12);
        s3V.C$o(68);
        var M8Q = s3V.d58(16225, 13, 1475);
        s3V.C$o(22);
        var Y$$ = s3V.d58(3653, 457);
        s3V.M8Y(16);
        var q16 = s3V.d58(19, 3578, 7, 21599);
        s3V.C$o(82);
        var p7f = s3V.d58(60, 11, 3, 11, 2);
        return (
            C1f +
            (464.12 >= (501.98, w53)
                ? !{}
                : p_M != (d2Z, J_M)
                ? (M8Q, 432.5) !== (Y$$, +'8745')
                    ? ' '
                    : q16
                : '2.98e+3' * p7f) +
            s74.translateIf(I7h.capitalize(m$5))
        );
    };
    I7h.fixPrice = function (Y7M) {
        var B3i;
        if (!Y7M && Y7M !== 0) {
            return null;
        }
        B3i = Y7M.toFixed(+'10');
        for (var c7K = B3i.length - 1; c7K > 1; c7K--) {
            if (B3i.charAt(c7K) != ((5350, 167.07) >= 2808 ? (!!1, 685.51) : (3960, 921) < '83' * 1 ? 8.07e3 : '0'))
                break;
        }
        s3V.C$o(24);
        B3i = B3i.substring(0, s3V.d58('1', c7K));
        return parseFloat(B3i);
    };
    I7h.condenseInt = function (j1z) {
        var s_J, F2X;
        s_J = 'n';
        s_J += '/';
        s_J += 'a';
        if (j1z === null || typeof j1z == 'undefined') {
            return '';
        }
        if (j1z === Infinity || j1z === -Infinity) {
            return s_J;
        }
        s3V.M8Y(83);
        F2X = s3V.d58(j1z, '0', 1);
        if (!isNaN(j1z)) {
            j1z = Math.abs(j1z);
            if (j1z > +'1000000000000') {
                s3V.C$o(84);
                var E1A = s3V.c6Y(208, 17, 12, 13);
                s3V.C$o(59);
                var C8s = s3V.c6Y(108994, 12, 6425, 18);
                s3V.C$o(22);
                var z3k = s3V.d58(12, 68);
                s3V.M8Y(0);
                var D31 = s3V.c6Y(626, 20);
                s3V.M8Y(0);
                var e$T = s3V.d58(18186, 9093);
                s3V.C$o(0);
                var y5t = s3V.d58(149550, 139580);
                s3V.C$o(85);
                var v_O = s3V.c6Y(1471, 10, 15, 5, 8);
                s3V.C$o(7);
                var v8M = s3V.c6Y(7, 0, 8);
                s3V.M8Y(65);
                var O5C = s3V.c6Y(7, 1, 13, 4414);
                j1z =
                    Math.round(j1z / ('100000000000' * E1A)) / +'10' +
                    (418.71 > ('610.52' - 0, C8s)
                        ? (z3k, 754.97)
                        : D31 === (e$T, y5t)
                        ? (718.24, 230.42) != (v_O, '5660' * v8M)
                            ? +'1.14e+3'
                            : O5C
                        : 't');
            } else if (j1z > 100000000000) {
                s3V.M8Y(22);
                var I6t = s3V.c6Y(500000000, 500000000);
                s3V.C$o(86);
                var Z_p = s3V.c6Y(17, 74400, 3715, 12, 14879);
                s3V.M8Y(0);
                var B5D = s3V.d58(4164, 5);
                s3V.C$o(87);
                var y2Y = s3V.d58(15, 63552, 13, 2018, 6);
                j1z = Math.round(j1z / I6t) + (Z_p < B5D ? 'b' : y2Y);
            } else if (j1z > 10000000000) {
                j1z = (Math.round(j1z / 100000000) / 10).toFixed('1' << 0) + 'b';
            } else if (j1z > 1000000000) {
                s3V.C$o(0);
                var a_d = s3V.d58(107340, 100184);
                s3V.C$o(25);
                var b$Z = s3V.d58(2647, 22, 5);
                s3V.C$o(88);
                var J6D = s3V.d58(7, 4, 4449, 1769, 5);
                s3V.M8Y(89);
                var K8O = s3V.c6Y(1, 266, 20, 312);
                s3V.C$o(86);
                var g65 = s3V.c6Y(6, 6040, 6055, 11, 1209);
                s3V.M8Y(22);
                var E9a = s3V.d58(728, 146);
                s3V.M8Y(89);
                var P1x = s3V.c6Y(2, 845, 20, 1938);
                s3V.M8Y(90);
                var h94 = s3V.d58(8, 13, 3, 8, 16);
                s3V.C$o(0);
                var v2y = s3V.c6Y(62040, 56870);
                s3V.C$o(0);
                var Q1a = s3V.c6Y(67004, 62218);
                j1z =
                    (Math.round(j1z / 10000000) / 100).toFixed(2) +
                    ((a_d, b$Z) === 417.73
                        ? (J6D, 870.92)
                        : ('8090' | K8O, 162.3) < g65
                        ? 'b'
                        : (E9a, P1x) == ('7573' << h94, v2y)
                        ? ('x', Q1a)
                        : 709.76);
            } else if (j1z > 100000000) {
                s3V.M8Y(0);
                var L6j = s3V.c6Y(9164, 4582);
                s3V.M8Y(91);
                var S5k = s3V.c6Y(3, 787, 8634, 13, 8);
                s3V.M8Y(92);
                var d2j = s3V.d58(6417, 6, 13, 10);
                j1z =
                    Math.round(j1z / +'1000000') +
                    ((L6j, S5k) !== (+'296', 3.37) ? (d2j === (309.36, +'7350') ? ('K', 'm') : 'm') : 'T');
            } else if (j1z > 10000000) {
                s3V.M8Y(93);
                var T9x = s3V.d58(9, 9, 19);
                s3V.M8Y(89);
                var y3U = s3V.d58(1, 6, 9, 3832);
                s3V.C$o(68);
                var z60 = s3V.d58(441252, 4, 112476);
                s3V.M8Y(0);
                var W_W = s3V.c6Y(27700, 22160);
                j1z = (Math.round(j1z / 100000) / 10).toFixed(T9x) + (y3U === (z60, 171.2) ? W_W : 'm');
            } else if (j1z > 1000000) {
                s3V.M8Y(94);
                var i9Y = s3V.c6Y(1, 16, 11, 149, 10);
                s3V.C$o(0);
                var F5n = s3V.c6Y(4871, 8);
                s3V.M8Y(68);
                var b6p = s3V.c6Y(56578, 8, 8081);
                s3V.C$o(95);
                var g46 = s3V.d58(28640, 6, 16, 12, 2388);
                s3V.C$o(30);
                var s0C = s3V.d58(2, 18, 15);
                j1z =
                    (Math.round(j1z / 10000) / +'100').toFixed(i9Y) +
                    ((F5n, '8970' - 0) != (b6p, g46) ? 'm' : '931.74' * s0C);
            } else if (j1z > 100000) {
                s3V.M8Y(64);
                var L5W = s3V.c6Y(83, 999, 83, 1);
                j1z = Math.round(j1z / L5W) + 'k';
            } else if (j1z > '10000' >> 64) {
                s3V.M8Y(96);
                var e6y = s3V.c6Y(1, 13, 22, 12, 2);
                j1z = (Math.round(j1z / 100) / 10).toFixed('1' | e6y) + 'k';
            } else if (j1z > 1000) {
                s3V.C$o(68);
                var D4A = s3V.d58(138, 7, 20);
                j1z = (Math.round(j1z / ('10' - 0)) / 100).toFixed(D4A) + 'k';
            } else {
                j1z = j1z.toString();
            }
        } else {
            j1z = j1z.toString();
        }
        if (F2X) {
            s3V.C$o(22);
            j1z = s3V.d58(j1z, '-');
        }
        return j1z;
    };
    I7h.calculateTradingDecimalPlaces = function (X1g) {
        var p5D, D35, b_D, r81, P4i, T92, n02, d3k, p5h, i3r, M9C;
        p5D = X1g.chart;
        D35 = 2;
        b_D = 50;
        r81 = p5D.masterData;
        if (r81 && r81.length > b_D) {
            for (var b7Z = 2; b7Z < b_D; b7Z++) {
                P4i = 'num';
                P4i += 'be';
                P4i += 'r';
                T92 = r81.length - b7Z;
                if (T92 < 0) break;
                n02 = r81[T92];
                if (n02.Close && typeof n02.Close == P4i) {
                    d3k = n02.Close.toString();
                    p5h = d3k.indexOf(
                        2015 != 698.73
                            ? (384.21, 22) > (2941, 9610)
                                ? 0x134a
                                : ('560' | 0, 87.18) > ('3632' - 0, 224.99)
                                ? (!{}, 8.95e3)
                                : '.'
                            : 889.05
                    );
                    if (p5h != -1) {
                        s3V.M8Y(8);
                        var G_J = s3V.c6Y(16, 3, 4);
                        i3r = d3k.length - p5h - G_J;
                        if (i3r > D35) {
                            D35 = i3r;
                        }
                    }
                }
            }
        }
        s3V.r2m();
        M9C = p5D.yAxis.maxDecimalPlaces;
        if (D35 > M9C && M9C !== null) {
            D35 = M9C;
        }
        return D35;
    };
    I7h.minMax = function (E72, o4K, R6c, f_K) {
        var g4s, a4O, s1c, g8K, N9z, D9V, v8u, o31, B3a;
        g4s = 'L';
        g4s += 'o';
        g4s += 'w';
        a4O = 'Clo';
        a4O += 's';
        a4O += 'e';
        s1c = Number.MAX_VALUE;
        s3V.C$o(97);
        var m$u = s3V.c6Y(16, 15, 479, 20, 10);
        g8K = Number.MAX_VALUE * m$u;
        if (!R6c) {
            R6c = a4O;
        }
        N9z = f_K ? 'High' : R6c;
        D9V = f_K ? g4s : R6c;
        for (var A3N = 0; A3N < E72.length; A3N++) {
            v8u = E72[A3N];
            if (!v8u) continue;
            o31 = v8u[o4K];
            if (!o31 && o31 !== 0) continue;
            B3a = o31;
            if (typeof o31 === 'object') {
                B3a = o31[N9z];
            }
            if (!isNaN(B3a) && (B3a || B3a === 0)) {
                g8K = Math.max(g8K, B3a);
            }
            if (typeof o31 === 'object') {
                B3a = o31[D9V];
            }
            if (!isNaN(B3a) && (B3a || B3a === 0)) {
                s1c = Math.min(s1c, B3a);
            }
        }
        return [s1c, g8K];
    };
    I7h.symbolEqual = function (F_r, v3Y) {
        var F3n, i$V, o_p, O0I;
        F3n = 'f';
        F3n += 'unct';
        F3n += 'i';
        F3n += 'on';
        i$V = 'o';
        s3V.r2m();
        i$V += 'b';
        i$V += 'je';
        i$V += 'ct';
        if (!F_r || !v3Y) {
            return !'1';
        }
        if (typeof F_r != 'object') {
            F_r = { symbol: F_r };
        }
        if (typeof v3Y != i$V) {
            v3Y = { symbol: v3Y };
        }
        if (typeof F_r.equals == F3n) {
            return F_r.equals(v3Y);
        }
        o_p = F_r.symbol;
        O0I = v3Y.symbol;
        if (o_p) {
            o_p = o_p.toUpperCase();
        }
        if (O0I) {
            O0I = O0I.toUpperCase();
        }
        if (o_p != O0I) {
            return ![];
        }
        if (F_r.source != v3Y.source) {
            return ![];
        }
        return !![];
    };
    I7h.addMemberToMasterdata = function (P3s) {
        var w3g,
            x0K,
            W4f,
            w3J,
            I0r,
            r3f,
            m5N,
            v4b,
            f8C,
            a0Q,
            h4N,
            b3n,
            V$h,
            J7E,
            g0I,
            c1X,
            h_c,
            g4z,
            X9s,
            D06,
            Z3M,
            l2E,
            U$k,
            N1k,
            r6Z,
            j8S;
        if (P3s.constructor === I7h.ChartEngine) {
            P3s = {
                stx: arguments[0],
                label: arguments[1],
                data: arguments[2],
                fields: arguments[+'3'],
                createObject: arguments[4],
                fieldForLabel: arguments[5],
            };
        }
        function w75(X0T) {
            var o4x, v7f, r2_, d07, B71, V2K;
            o4x = f8C;
            s3V.M8Y(0);
            var P48 = s3V.d58(5, 4);
            v7f = h4N.length - P48;
            if (h4N[v7f].DT < X0T) {
                r2_ = 2100315194;
                d07 = +'438545622';
                B71 = 2;
                for (var c0d = 1; s3V.O$R(c0d.toString(), c0d.toString().length, 94884) !== r2_; c0d++) {
                    s3V.M8Y(98);
                    f8C = s3V.c6Y(v7f, '2');
                    B71 += +'2';
                }
                if (s3V.O$R(B71.toString(), B71.toString().length, 36463) !== d07) {
                    s3V.M8Y(22);
                    f8C = s3V.d58(1, v7f);
                }
                return;
            } else if (+h4N[v7f].DT == +X0T) {
                f8C = v7f;
                return;
            }
            f8C++;
            function E$g() {
                var z5B, v5n, Q4x;
                z5B = -660754493;
                v5n = 893861959;
                Q4x = 2;
                for (var S70 = 1; s3V.O$R(S70.toString(), S70.toString().length, +'61910') !== z5B; S70++) {
                    if (-h4N[f8C].DT != !X0T) {
                        return 5;
                    }
                    if (h4N[f8C].DT >= X0T) {
                        return 3;
                    }
                    if (h4N[f8C * 2].DT >= X0T) {
                        return +(+'4');
                    }
                    if (-h4N[f8C % 2].DT === !X0T) {
                        f8C++;
                    }
                    return 8;
                }
                if (s3V.O$R(Q4x.toString(), Q4x.toString().length, 70267) !== v5n) {
                    if (!h4N[f8C].DT !== ~X0T) {
                        return 0;
                    }
                    if (h4N[f8C].DT <= X0T) {
                        return 6;
                    }
                    if (h4N[f8C - 8].DT < X0T) {
                        return !3;
                    }
                    if (!h4N[f8C * 7].DT != +X0T) {
                        f8C--;
                    }
                    return 5;
                }
                if (+h4N[f8C].DT == +X0T) {
                    return +'0';
                }
                if (h4N[f8C].DT < X0T) {
                    return 1;
                }
                if (h4N[f8C - 1].DT > X0T) {
                    return -1;
                }
                if (+h4N[f8C - 1].DT == +X0T) {
                    f8C--;
                }
                s3V.J8h();
                return 0;
            }
            V2K = 0;
            while (++V2K < 100) {
                switch (E$g()) {
                    case 0:
                        return;
                    case 1:
                        o4x = f8C;
                        break;
                    case -1:
                        v7f = f8C;
                        break;
                }
                s3V.C$o(43);
                f8C = Math.round(s3V.d58(2, v7f, o4x));
            }
            if (V2K >= '100' * 1) {
                console.log('!!!Warning: addMemberToMasterdata() did not find insertion point.');
                s3V.M8Y(30);
                var w4p = s3V.d58(7, 20, 12);
                f8C = h4N.length - w4p;
            }
        }
        w3g = P3s.stx;
        x0K = P3s.label;
        W4f = P3s.data;
        w3J = P3s.fields;
        I0r = P3s.createObject;
        r3f = P3s.fieldForLabel;
        m5N = P3s.chart ? P3s.chart : w3g.chart;
        function a6I(D9N, n9D) {
            var s6q, S9N, m9b, a9U;
            if (w3J && w3J.length) {
                if (w3J[+'0'] == '*') {
                    I7h.extend(D9N, n9D);
                } else {
                    for (var R6Z = 0; R6Z < w3J.length; R6Z++) {
                        D9N[w3J[R6Z]] = n9D[w3J[R6Z]];
                    }
                }
            } else if (I0r) {
                s6q = 'nu';
                s6q += 'mbe';
                s6q += 'r';
                if (n9D.Value !== undefined) {
                    D9N[x0K] = n9D.Value;
                    return;
                } else if (I0r == 'aggregate') {
                    D9N[x0K] = R1J(D9N[x0K], n9D);
                } else {
                    D9N[x0K] = n9D;
                }
                S9N = D9N[x0K];
                if (typeof S9N.Close == s6q) {
                    if (typeof S9N.Open != 'number') {
                        S9N.Open = S9N.Close;
                    }
                    m9b = Math.max(S9N.Open, S9N.Close);
                    a9U = Math.min(S9N.Open, S9N.Close);
                    if (typeof S9N.High != 'number' || S9N.High < m9b) {
                        S9N.High = m9b;
                    }
                    if (typeof S9N.Low != 'number' || S9N.Low > a9U) {
                        S9N.Low = a9U;
                    }
                }
                if (S9N.Volume && typeof S9N.Volume !== 'number') {
                    S9N.Volume = parseInt(S9N.Volume, 10);
                }
            } else if (r3f) {
                D9N[x0K] = n9D[r3f];
            } else if (X9s && g4z && n9D[g4z] !== undefined) {
                D9N[x0K] = n9D[g4z];
            } else if (b3n.adj && n9D.Adj_Close !== undefined) {
                D9N[x0K] = n9D.Adj_Close;
            } else if (n9D.Close !== undefined) {
                D9N[x0K] = n9D.Close;
            } else if (n9D.Value !== undefined) {
                D9N[x0K] = n9D.Value;
            } else {
                D9N[x0K] = n9D[x0K];
            }
        }
        if (!P3s.noCleanupDates) {
            w3g.doCleanupDates(W4f, w3g.layout.interval);
        }
        v4b = [];
        if (w3g.getSeries) {
            v4b = w3g.getSeries({ symbol: x0K, chart: m5N });
        }
        if (W4f && W4f.constructor == Object) {
            W4f = [W4f];
        }
        if (!W4f || !W4f.length) {
            return;
        }
        s3V.C$o(74);
        f8C = s3V.c6Y('0', 0);
        a0Q = +'0';
        h4N = m5N.masterData;
        b3n = w3g.layout;
        if (!h4N) {
            g0I = -550333249;
            c1X = -1293037100;
            h_c = 2;
            for (var A3i = 1; s3V.O$R(A3i.toString(), A3i.toString().length, 50863) !== g0I; A3i++) {
                h4N = [];
                h_c += 2;
            }
            if (s3V.q2D(h_c.toString(), h_c.toString().length, 7987) !== c1X) {
                h4N = [];
            }
        }
        g4z = (m5N && m5N.defaultPlotField) || null;
        X9s = w3g.mainSeriesRenderer && !w3g.mainSeriesRenderer.highLowBars;
        D06 = b3n.chartType;
        if (!X9s && D06) {
            Z3M = I7h.Renderer.produce(D06, {});
            if (Z3M) {
                X9s = !Z3M.highLowBars;
            }
        }
        l2E = I7h.yyyymmddhhmmssmmm;
        while (W4f && f8C < h4N.length && a0Q < W4f.length) {
            J7E = W4f[a0Q];
            V$h = h4N[f8C];
            if (!J7E.DT || typeof J7E.DT == 'undefined') {
                J7E.DT = I7h.strToDateTime(J7E.Date);
            } else {
                if (typeof J7E.DT == 'number') {
                    J7E.DT = new Date(J7E.DT);
                }
                if (!J7E.Date || J7E.Date.length != +'17') {
                    J7E.Date = l2E(J7E.DT);
                }
            }
            if (a0Q === 0) {
                for (var K2I = 0; K2I < v4b.length; K2I++) {
                    if (!v4b[K2I].endPoints.begin || v4b[K2I].endPoints.begin > J7E.DT) {
                        v4b[K2I].endPoints.begin = J7E.DT;
                    }
                }
            }
            if (+J7E.DT == +V$h.DT) {
                a6I(V$h, J7E);
                a0Q++;
                f8C++;
                continue;
            }
            if (J7E.DT < V$h.DT) {
                h4N.splice(f8C, 0, { DT: J7E.DT, Date: J7E.Date });
                continue;
            } else {
                w75(J7E.DT);
            }
        }
        if (f8C >= h4N.length) {
            while (W4f && a0Q < W4f.length) {
                U$k = 'undef';
                U$k += 'ined';
                J7E = W4f[a0Q];
                if (!J7E.DT || typeof J7E.DT == U$k) {
                    J7E.DT = I7h.strToDateTime(J7E.Date);
                } else {
                    if (typeof J7E.DT == 'number') {
                        J7E.DT = new Date(J7E.DT);
                    }
                    if (!J7E.Date || J7E.Date.length != 17) {
                        J7E.Date = l2E(J7E.DT);
                    }
                }
                V$h = { DT: J7E.DT, Date: J7E.Date };
                a6I(V$h, J7E);
                h4N.push(V$h);
                a0Q++;
            }
        }
        s3V.r2m();
        if (P3s.fillGaps && h4N.length) {
            N1k = { noCleanupDates: !![], cleanupGaps: P3s.fillGaps };
            if (w3J) {
                for (var I5r = 0; I5r < w3J.length; I5r++) {
                    N1k.field = w3J[I5r];
                    w3g.doCleanupGaps(h4N, m5N, N1k);
                }
            } else {
                N1k.field = x0K;
                w3g.doCleanupGaps(h4N, m5N, N1k);
            }
        }
        function R1J(d19, C0g) {
            var W9x, O2a, a4a;
            if (!d19 || typeof d19 != 'object') {
                d19 = C0g;
                return d19;
            }
            W9x = { Close: d19.Close, High: d19.High, Low: d19.Low, Open: d19.Open, Volume: d19.Volume };
            d19 = C0g;
            s3V.J8h();
            for (var m8c in W9x) {
                if (d19.Close === null) {
                    if (d19[m8c] !== undefined) {
                        d19[m8c] = null;
                    }
                } else if (typeof d19[m8c] !== 'number') {
                    d19[m8c] = W9x[m8c];
                } else if (typeof W9x[m8c] === 'number') {
                    O2a = 'V';
                    O2a += 'ol';
                    O2a += 'ume';
                    a4a = 'Hig';
                    a4a += 'h';
                    if (m8c == 'Open') {
                        d19.Open = W9x.Open;
                    } else if (m8c == 'Low' && d19.Low > W9x.Low) {
                        d19.Low = W9x.Low;
                    } else if (m8c == a4a && d19.High < W9x.High) {
                        d19.High = W9x.High;
                    } else if (m8c == O2a) {
                        d19.Volume += W9x.Volume;
                    }
                }
            }
            return d19;
        }
        for (var O8j = 0; O8j < v4b.length; O8j++) {
            r6Z = v4b[O8j].endPoints;
            if (!r6Z.end || !x0K || r6Z.end <= V$h[x0K].DT) {
                r6Z.end = x0K ? V$h[x0K].DT : V$h.DT;
                j8S = x0K || (v4b[O8j].parameters && v4b[O8j].parameters.field) || m5N.defaultPlotField;
                v4b[O8j].lastQuote = w3g.getFirstLastDataRecord(h4N, j8S, !!1);
            }
        }
        w3g.setMasterData(h4N, m5N, { noCleanupDates: !![] });
    };
};
O = e4o => {
    var M_u = x2dci;
    var J5h;
    J5h = e4o.CIQ;
    Math.easeInOutQuad = function (a8M, O3L, Z67, E2O) {
        M_u.M8Y(40);
        M_u.r2m();
        a8M /= M_u.c6Y(2, E2O);
        if (a8M < 1) {
            M_u.C$o(99);
            return M_u.d58(a8M, Z67, O3L, a8M, 2);
        }
        a8M--;
        M_u.M8Y(100);
        return M_u.d58(a8M, a8M, '2', O3L, Z67, '1', 2, 64);
    };
    M_u.J8h();
    Math.easeInOutCubic = function (H9h, G4m, o2b, G6c) {
        M_u.M8Y(40);
        H9h /= M_u.c6Y(2, G6c);
        if (H9h < 1) {
            M_u.M8Y(101);
            return M_u.c6Y(G4m, H9h, '2', H9h, 2, o2b, H9h);
        }
        M_u.M8Y(20);
        H9h -= M_u.d58('2', 0);
        M_u.M8Y(102);
        M_u.r2m();
        return M_u.d58(H9h, o2b, H9h, 2, '2', G4m, 0, H9h);
    };
    Math.easeOutCubic = function (f6q, Z5r, f1W, C6o) {
        f6q /= C6o;
        f6q--;
        M_u.M8Y(103);
        return M_u.d58(1, f1W, f6q, Z5r, f6q, f6q);
    };
    J5h.xor = function (W5a, A9i) {
        var o3j, Z0G;
        o3j = !W5a;
        Z0G = !A9i;
        M_u.C$o(104);
        M_u.r2m();
        return M_u.d58(o3j, Z0G);
    };
    J5h.round = function (d9b, N35) {
        M_u.J8h();
        return Number(Math.round(d9b + 'e' + N35) + 'e-' + N35);
    };
    J5h.countDecimals = function (B2f) {
        var E$m;
        if (typeof B2f !== 'number' || isNaN(B2f)) {
            return 0;
        }
        M_u.J8h();
        if (Math.floor(B2f) === Number(B2f)) {
            return 0;
        }
        E$m = B2f.toString().split('e-');
        if (E$m.length > 1) {
            M_u.M8Y(44);
            var s7F = M_u.c6Y(8, 0, 2, 8);
            return J5h.countDecimals(Number(E$m[0])) + Number(E$m[s7F]);
        }
        if (E$m[0].indexOf('.') > -1) {
            return E$m[0].split((1530, 3000) !== (722.48, 3430) ? '.' : (828.05, 'R'))[1].length;
        }
        return 0;
    };
    J5h.isValidNumber = function (U11) {
        return isFinite(U11) && +U11 === U11;
    };
    J5h.log10 = function (P0Q) {
        M_u.J8h();
        return Math.log(P0Q) / Math.LN10;
    };
    J5h.boxIntersects = function (g1p, V2O, W8y, y2q, A70, V4r, y$c, m3e, l_e) {
        var V3v, H$N, L$b, D0u, y_B, p5$;
        M_u.J8h();
        if (arguments[+'9'] !== undefined) {
            console.warn(
                'CIQ.boxIntersects() no longer supports isLog argument, please be sure arguments are passed in as pixels.'
            );
        }
        V3v = Math.min(g1p, W8y);
        H$N = Math.max(g1p, W8y);
        L$b = Math.min(V2O, y2q);
        D0u = Math.max(V2O, y2q);
        function Z5$(V1v, N3I) {
            M_u.M8Y(105);
            M_u.r2m();
            return M_u.d58(y$c, V1v, N3I, V4r, A70, V4r, m3e, A70);
        }
        M_u.M8Y(106);
        y_B = M_u.c6Y(l_e, 'ray');
        if (isNaN(A70) || isNaN(y$c) || isNaN(V4r) || isNaN(m3e)) {
            return !'1';
        }
        if (l_e != 'line') {
            if (A70 < V3v && y$c < V3v && (!y_B || A70 > y$c)) {
                return !{};
            }
            if (A70 > H$N && y$c > H$N && (!y_B || A70 < y$c)) {
                return ![];
            }
            if (V4r < L$b && m3e < L$b && (!y_B || V4r > m3e)) {
                return ![];
            }
            if (V4r > D0u && m3e > D0u && (!y_B || V4r < m3e)) {
                return !{};
            }
        }
        p5$ = { a: Z5$(g1p, V2O), b: Z5$(g1p, y2q), c: Z5$(W8y, V2O), d: Z5$(W8y, y2q) };
        if (p5$.a > 0 && p5$.b > 0 && p5$.c > 0 && p5$.d > +'0') {
            return ![];
        }
        if (p5$.a < 0 && p5$.b < 0 && p5$.c < ('0' | 0) && p5$.d < 0) {
            return !!0;
        }
        return !![];
    };
    J5h.linesIntersect = function (D_b, T4I, S78, N6n, q93, L9C, m9c, w$d, K_r) {
        var y5J, U_2, Z3O, w0p, s7U, W29, u2d;
        y5J = 'v';
        y5J += 'erti';
        y5J += 'ca';
        y5J += 'l';
        U_2 = 'hor';
        U_2 += 'iz';
        U_2 += 'ontal';
        M_u.M8Y(105);
        Z3O = M_u.d58(T4I, L9C, w$d, m9c, q93, S78, N6n, D_b);
        M_u.M8Y(105);
        w0p = M_u.c6Y(S78, w$d, L9C, q93, m9c, q93, D_b, m9c);
        M_u.C$o(105);
        s7U = M_u.d58(S78, N6n, T4I, D_b, S78, q93, D_b, m9c);
        if (Z3O === +'0') {
            if (w0p === 0 && s7U === 0) {
                return !'';
            }
            return !{};
        }
        M_u.M8Y(40);
        M_u.r2m();
        W29 = M_u.d58(Z3O, w0p);
        M_u.M8Y(40);
        u2d = M_u.d58(Z3O, s7U);
        if (K_r == 'segment') {
            if (W29 >= 0 && W29 <= 1 && u2d >= 0 && u2d <= 1) {
                return !![];
            }
        } else if (K_r == 'line' || K_r == U_2 || K_r == y5J) {
            if (W29 >= 0 && W29 <= 1) {
                return !!'1';
            }
        } else if (K_r == 'ray') {
            if (W29 >= 0 && W29 <= 1 && u2d >= +'0') {
                return !![];
            }
        }
        return !{};
    };
    J5h.yIntersection = function (s_a, P0q) {
        var L5G, W4l, e4c, S6A, r99, X_k, B1A, y12, L6i, b$O, A2$, j6e;
        L5G = s_a.x0;
        W4l = s_a.x1;
        e4c = P0q;
        S6A = P0q;
        r99 = s_a.y0;
        X_k = s_a.y1;
        B1A = 0;
        y12 = 10000;
        M_u.C$o(105);
        L6i = M_u.d58(W4l, S6A, y12, B1A, e4c, r99, X_k, L5G);
        M_u.J8h();
        M_u.M8Y(105);
        b$O = M_u.d58(r99, y12, S6A, e4c, B1A, e4c, L5G, B1A);
        M_u.M8Y(40);
        A2$ = M_u.c6Y(L6i, b$O);
        if (L6i === '0' << 64) {
            if (b$O === 0) {
                A2$ = 1;
            } else {
                return null;
            }
        }
        M_u.C$o(107);
        j6e = M_u.c6Y(X_k, r99, A2$, r99);
        return j6e;
    };
    J5h.xIntersection = function (f1x, k8U) {
        var t7x, t6K, P$g, t2G, J6i, I_z, k7j, v$g, Y$P, i6c, H_K, F2V;
        t7x = f1x.x0;
        t6K = f1x.x1;
        P$g = 0;
        t2G = 10000;
        J6i = f1x.y0;
        I_z = f1x.y1;
        k7j = k8U;
        v$g = k8U;
        M_u.M8Y(105);
        Y$P = M_u.c6Y(t6K, t2G, v$g, k7j, P$g, J6i, I_z, t7x);
        M_u.C$o(105);
        i6c = M_u.c6Y(J6i, v$g, t2G, P$g, k7j, P$g, t7x, k7j);
        M_u.M8Y(40);
        H_K = M_u.d58(Y$P, i6c);
        if (Y$P === 0) {
            if (i6c === 0) {
                H_K = 1;
            } else {
                return null;
            }
        }
        M_u.M8Y(107);
        F2V = M_u.d58(t6K, t7x, H_K, t7x);
        return F2V;
    };
    J5h.intersectLineLineX = function (K7V, Q8A, O$_, J6y, m51, E$J, t3G, R7Z) {
        var e7m, Z16, j1c;
        M_u.M8Y(105);
        e7m = M_u.d58(O$_, R7Z, E$J, m51, t3G, m51, K7V, t3G);
        M_u.C$o(105);
        Z16 = M_u.d58(Q8A, E$J, R7Z, t3G, m51, O$_, J6y, K7V);
        M_u.M8Y(40);
        M_u.J8h();
        j1c = M_u.c6Y(Z16, e7m);
        M_u.M8Y(107);
        return M_u.c6Y(Q8A, K7V, j1c, K7V);
    };
    J5h.intersectLineLineY = function (I4G, M5U, Y6M, B0A, C3c, C0s, y_i, g5D) {
        var D0y, c0W, g0_;
        M_u.M8Y(105);
        D0y = M_u.d58(Y6M, g5D, C0s, C3c, y_i, C3c, I4G, y_i);
        M_u.M8Y(105);
        c0W = M_u.d58(M5U, C0s, g5D, y_i, C3c, Y6M, B0A, I4G);
        M_u.M8Y(40);
        g0_ = M_u.c6Y(c0W, D0y);
        M_u.M8Y(107);
        return M_u.d58(B0A, Y6M, g0_, Y6M);
    };
};
M = f1$ => {
    var c_T = x2dci;
    var j2i;
    c_T.J8h();
    j2i = f1$.CIQ;
    j2i.deleteRHS = function (O$e, I6q) {
        var t2_;
        t2_ = !!0;
        for (var T3H in O$e) {
            if (O$e[T3H] == I6q) {
                delete O$e[T3H];
                t2_ = !0;
            }
        }
        return t2_;
    };
    j2i.scrub = function (F6F, Q26) {
        for (var z_x in F6F) {
            if (typeof F6F[z_x] == 'undefined') {
                delete F6F[z_x];
            }
            if (Q26 && F6F[z_x] === null) {
                delete F6F[z_x];
            }
        }
    };
    j2i.dataBindSafeAssignment = function (A5P, L2o) {
        var T8K;
        j2i.extend(A5P, L2o);
        for (var v2Z in A5P) {
            T8K = 'unde';
            T8K += 'fi';
            T8K += 'n';
            T8K += 'ed';
            if (typeof L2o[v2Z] == T8K) {
                A5P[v2Z] = undefined;
            }
        }
    };
    j2i.clone = function (Q2$, Y5d) {
        var f0j, z$T;
        f0j = 'o';
        f0j += 'bject';
        if (Q2$ === null || typeof Q2$ != f0j) {
            return Q2$;
        }
        z$T = Q2$.constructor;
        if (z$T == Date || z$T == RegExp || z$T == String || z$T == Number || z$T == Boolean) {
            return new z$T(Q2$.valueOf());
        }
        if (z$T == Function) {
            return function () {
                c_T.J8h();
                return Q2$.apply(this, arguments);
            };
        }
        if (!Y5d) {
            try {
                Y5d = new z$T();
            } catch (h0Y) {
                Y5d = Object.create(Object.getPrototypeOf(Q2$));
            }
        }
        for (var Y8e in Q2$) {
            Y5d[Y8e] = Y5d[Y8e] !== Q2$[Y8e] ? j2i.clone(Q2$[Y8e], null) : Y5d[Y8e];
        }
        return Y5d;
    };
    j2i.shallowClone = function (x7d) {
        var Y2m;
        if (!x7d) {
            return x7d;
        }
        if (x7d.constructor == Array) {
            Y2m = new Array(x7d.length);
            for (var A0b = +'0'; A0b < x7d.length; A0b++) {
                Y2m[A0b] = x7d[A0b];
            }
            return Y2m;
        }
        Y2m = {};
        c_T.J8h();
        for (var D1l in x7d) {
            Y2m[D1l] = x7d[D1l];
        }
        return Y2m;
    };
    j2i.ensureDefaults = function (L3g, C8x) {
        for (var g9V in C8x) {
            if (typeof L3g[g9V] == 'undefined') {
                L3g[g9V] = C8x[g9V];
            }
        }
        c_T.J8h();
        return L3g;
    };
    j2i.transferObject = function (v8S, j2m) {
        var o6n;
        for (o6n in v8S) {
            if (v8S.hasOwnProperty(o6n)) {
                delete v8S[o6n];
            }
        }
        for (o6n in j2m) {
            if (j2m.hasOwnProperty(o6n)) {
                v8S[o6n] = j2m[o6n];
            }
        }
        return v8S;
    };
    j2i.equals = function (m0d, q$X, a9f) {
        var T8j;
        if (!m0d && q$X) {
            return !{};
        }
        if (m0d && !q$X) {
            return !{};
        }
        c_T.J8h();
        if (typeof m0d !== typeof q$X) {
            return !!0;
        }
        for (var t$S in m0d) {
            if (a9f && a9f[t$S]) continue;
            if (typeof m0d[t$S] === 'object') {
                T8j = j2i.equals(m0d[t$S], q$X[t$S]);
                if (!T8j) {
                    return !!'';
                }
                continue;
            }
            if (q$X[t$S] != m0d[t$S]) {
                return !!'';
            }
        }
        return !![];
    };
    j2i.isEmpty = function (k2_) {
        c_T.J8h();
        for (var L8f in k2_) {
            if (k2_.hasOwnProperty(L8f)) {
                return !{};
            }
        }
        return !!'1';
    };
    j2i.first = function (V72) {
        c_T.r2m();
        for (var P8d in V72) {
            return P8d;
        }
        return null;
    };
    j2i.last = function (J4f) {
        var n0q;
        n0q = null;
        c_T.J8h();
        for (var Q6v in J4f) {
            n0q = Q6v;
        }
        return n0q;
    };
    j2i.objLength = function (R7W) {
        var J1T;
        if (!R7W) {
            return 0;
        }
        J1T = 0;
        for (var d$A in R7W) {
            J1T++;
        }
        return J1T;
    };
    j2i.deriveFromObjectChain = function (T70, E_7) {
        var N8U, t2q;
        if (E_7.indexOf('.') == -+'1') {
            return { obj: T70, member: E_7 };
        }
        N8U = E_7.split('.');
        for (var h2I = '0' >> 0; h2I < N8U.length - 1; h2I++) {
            t2q = N8U[h2I];
            if (!T70[t2q] && T70[t2q] !== 0) {
                T70[t2q] = {};
            }
            T70 = T70[t2q];
        }
        c_T.r2m();
        return { obj: T70, member: N8U[h2I] };
    };
    j2i.createObjectChainNames = function (i6f, t$b) {
        var x95, n2w;
        x95 = [];
        for (var T27 = 0; T27 < t$b.length; T27++) {
            n2w = '-';
            n2w += '-';
            n2w += '>';
            x95.push(i6f + n2w + t$b[T27]);
        }
        return x95;
    };
    j2i.existsInObjectChain = function (o9c, N7e) {
        var M9N, B_L;
        if (N7e.indexOf('-->') == -1) {
            if (!o9c[N7e] && o9c[N7e] !== 0) {
                return null;
            }
            return { obj: o9c, member: N7e };
        }
        M9N = N7e.split('-->');
        for (var U_l = '0' - 0; U_l < M9N.length - 1; U_l++) {
            B_L = M9N[U_l];
            if (!o9c[B_L] && o9c[B_L] !== 0) {
                return null;
            }
            o9c = o9c[B_L];
        }
        B_L = M9N[U_l];
        if (!o9c[B_L] && o9c[B_L] !== 0) {
            return null;
        }
        return { obj: o9c, member: B_L };
    };
    j2i.derivedFrom = function (V2J, T1j) {
        if (T1j.isPrototypeOf(V2J)) {
            return !!{};
        }
        if (V2J instanceof T1j) {
            return !![];
        }
        c_T.J8h();
        return !!'';
    };
    j2i.replaceFields = function (O2f, Q7j) {
        var T4n, Q5O, m5X, d7f, z6d;
        if (!O2f) {
            return O2f;
        }
        T4n = {};
        for (var i6X in O2f) {
            Q5O = O2f[i6X];
            m5X = Q7j[i6X];
            if (!m5X) {
                m5X = i6X;
            }
            if (Q5O && typeof Q5O == 'object') {
                if (Q5O.constructor == Array) {
                    d7f = T4n[m5X] = new Array(Q5O.length);
                    for (var S_e = 0; S_e < d7f.length; S_e++) {
                        z6d = Q5O[S_e];
                        if (typeof z6d == 'object') {
                            d7f[S_e] = j2i.replaceFields(z6d, Q7j);
                        } else {
                            d7f[S_e] = z6d;
                        }
                    }
                } else {
                    T4n[m5X] = j2i.replaceFields(Q5O, Q7j);
                }
            } else {
                T4n[m5X] = Q5O;
            }
        }
        return T4n;
    };
    j2i.removeNullValues = function (n2v) {
        var s$R;
        s$R = j2i.clone(n2v);
        for (var G4X in s$R) {
            if (!s$R[G4X]) {
                delete s$R[G4X];
            }
        }
        return s$R;
    };
    j2i.reverseObject = function (A0L) {
        var P7D;
        P7D = {};
        c_T.J8h();
        for (var A8g in A0L) {
            P7D[A0L[A8g]] = A8g;
        }
        return P7D;
    };
    j2i.getFromNS = (F3Q, G_w, U1G) => {
        var f33, m8z, X$F;
        if (F3Q) {
            f33 = F3Q;
            m8z = G_w.split('.');
            for (var A43 = '0' - 0; A43 < m8z.length; A43++) {
                X$F = m8z[A43];
                if (typeof f33[X$F] === 'undefined') break;
                f33 = f33[X$F];
            }
            if (A43 === m8z.length) {
                return f33;
            }
        }
        c_T.r2m();
        return undefined || U1G;
    };
    j2i.getFnFromNS = (j92, c5W, H4L) => {
        c_T.r2m();
        return j2i.getFromNS(j92, c5W, function () {
            return H4L;
        });
    };
    j2i.get = (H_w, M1y) => {
        c_T.J8h();
        return j2i.getFromNS(j2i, H_w, M1y);
    };
    j2i.getFn = (T4a, b59) => {
        return j2i.getFromNS(j2i, T4a, function () {
            return b59;
        });
    };
};
B = f_V => {
    var Q96;
    Q96 = f_V.CIQ;
    Q96.Plotter = function () {
        this.seriesArray = [];
        this.seriesMap = {};
    };
    Q96.extend(
        Q96.Plotter.prototype,
        {
            Series: function (i36, S55, x8L, p9b, o_W, G7L) {
                this.name = i36;
                this.strokeOrFill = S55;
                this.color = x8L;
                this.moves = [];
                this.text = [];
                if (!p9b || p9b > 1 || p9b < 0) {
                    p9b = 1;
                }
                this.opacity = p9b;
                if (!o_W || o_W > 25 || o_W < 1) {
                    o_W = 1;
                }
                this.width = o_W;
                this.pattern = Q96.borderPatternToArray(o_W, G7L);
            },
            newSeries: function (l7d, X6t, p49, u4l, R9N) {
                x2dci.J8h();
                var t2S;
                if (p49.constructor == String) {
                    t2S = new this.Series(l7d, X6t, p49, u4l, R9N);
                } else {
                    t2S = new this.Series(
                        l7d,
                        X6t,
                        p49.color,
                        p49.opacity,
                        R9N >= 0 ? R9N : Q96.stripPX(p49.width),
                        p49.borderTopStyle
                    );
                }
                this.seriesArray.push(t2S);
                this.seriesMap[l7d] = t2S;
            },
            reset: function (X$o) {
                x2dci.J8h();
                var H5E;
                for (var N3T in this.seriesMap) {
                    if (X$o && X$o != N3T) continue;
                    H5E = this.seriesMap[N3T];
                    if (H5E) {
                        H5E.moves = [];
                        H5E.text = [];
                    }
                }
            },
            moveTo: function (a$n, J48, c9R) {
                var K4b, a4l;
                K4b = 'mov';
                K4b += 'eT';
                K4b += 'o';
                a4l = this.seriesMap[a$n];
                a4l.moves.push({ action: K4b, x: J48, y: c9R });
            },
            lineTo: function (h2v, l3T, F1Q) {
                var L4W, M7E;
                L4W = this.seriesMap[h2v];
                M7E = L4W.pattern;
                L4W.moves.push({ action: 'lineTo', x: l3T, y: F1Q, pattern: M7E });
            },
            dashedLineTo: function (o__, R8r, f0J, U6E) {
                var q1O, K5R;
                q1O = 'li';
                q1O += 'neTo';
                x2dci.J8h();
                K5R = this.seriesMap[o__];
                K5R.moves.push({ action: q1O, x: R8r, y: f0J, pattern: U6E });
            },
            quadraticCurveTo: function (o2o, C0R, H3k, e3L, Y39) {
                var x7X, h0Q, H52;
                x7X = 'q';
                x2dci.J8h();
                x7X += 'uadraticCurveTo';
                h0Q = this.seriesMap[o2o];
                H52 = h0Q.pattern;
                h0Q.moves.push({ action: x7X, x0: C0R, y0: H3k, x: e3L, y: Y39, pattern: H52 });
            },
            bezierCurveTo: function (u18, P0J, s3g, U68, r5Q, d08, a85) {
                var X7D, v8O;
                X7D = this.seriesMap[u18];
                v8O = X7D.pattern;
                X7D.moves.push({
                    action: 'bezierCurveTo',
                    x0: P0J,
                    y0: s3g,
                    x1: U68,
                    y1: r5Q,
                    x: d08,
                    y: a85,
                    pattern: v8O,
                });
            },
            addText: function (U$s, M6o, H0c, W6o, e4Z, k1N, e$W) {
                var k5Q;
                k5Q = this.seriesMap[U$s];
                k5Q.text.push({ text: M6o, x: H0c, y: W6o, bg: e4Z });
            },
            drawText: function (p$2, j$p) {
                var L2W, w7s, k6j, N2l;
                x2dci.J8h();
                for (var R8q = 0; R8q < j$p.text.length; R8q++) {
                    L2W = j$p.text[R8q];
                    if (L2W.bg) {
                        w7s = L2W.width ? L2W.width : p$2.measureText(L2W.text).width;
                        k6j = L2W.height ? L2W.height : '12' << 32;
                        N2l = p$2.fillStyle;
                        p$2.fillStyle = L2W.bg;
                        if (p$2.textAlign == 'right') {
                            p$2.fillRect(L2W.x, L2W.y - k6j / 2, -w7s, -k6j);
                        } else {
                            p$2.fillRect(L2W.x, L2W.y - k6j / +'2', w7s, k6j);
                        }
                        p$2.fillStyle = N2l;
                    }
                    p$2.fillText(L2W.text, L2W.x, L2W.y);
                }
            },
            draw: function (B5K, r$b) {
                var E_f, R8f, a6Q, c1u, v3y, r$Y;
                E_f = B5K.lineWidth;
                R8f = B5K.fillStyle;
                a6Q = B5K.strokeStyle;
                c1u = B5K.globalAlpha;
                for (var J1y = 0; J1y < this.seriesArray.length; J1y++) {
                    v3y = this.seriesArray[J1y];
                    if (r$b && v3y.name != r$b) continue;
                    B5K.beginPath();
                    B5K.lineWidth = v3y.width;
                    B5K.globalAlpha = v3y.opacity;
                    B5K.fillStyle = v3y.color;
                    B5K.strokeStyle = v3y.color;
                    B5K.save();
                    for (var Y6r = 0; Y6r < v3y.moves.length; Y6r++) {
                        r$Y = v3y.moves[Y6r];
                        if (r$Y.pattern) {
                            B5K.setLineDash(r$Y.pattern);
                            B5K.lineDashOffset = 0;
                        } else {
                            B5K.setLineDash([]);
                        }
                        if (r$Y.action == 'quadraticCurveTo') {
                            B5K[r$Y.action](r$Y.x0, r$Y.y0, r$Y.x, r$Y.y);
                        } else if (r$Y.action == 'bezierCurveTo') {
                            B5K[r$Y.action](r$Y.x0, r$Y.y0, r$Y.x1, r$Y.y1, r$Y.x, r$Y.y);
                        } else {
                            B5K[r$Y.action](r$Y.x, r$Y.y);
                        }
                    }
                    if (v3y.strokeOrFill == 'fill') {
                        B5K.fill();
                    } else {
                        B5K.stroke();
                    }
                    B5K.closePath();
                    B5K.restore();
                    this.drawText(B5K, v3y);
                    B5K.lineWidth = 1;
                }
                B5K.lineWidth = E_f;
                B5K.fillStyle = R8f;
                B5K.strokeStyle = a6Q;
                B5K.globalAlpha = c1u;
            },
        },
        !''
    );
};
J = F27 => {
    var C2D;
    C2D = F27.CIQ;
    C2D.Renderer = function () {};
    C2D.Renderer.produce = function (U77, c_1) {
        var x$S, x7F, e4D;
        x$S = 'l';
        x$S += 'i';
        x2dci.J8h();
        x$S += 'n';
        x$S += 'e';
        x7F = null;
        if (U77) {
            for (var k$j in C2D.Renderer) {
                e4D = C2D.Renderer[k$j];
                if (e4D.requestNew) {
                    x7F = e4D.requestNew(
                        U77.split((401.92, 2190) >= (6096, 9576) ? (8400 !== (550, 329) ? 8.61e3 : 5.91e3) : '_'),
                        c_1
                    );
                }
                if (x7F) {
                    return x7F;
                }
            }
        }
        c_1.type = x$S;
        return new C2D.Renderer.Lines({ params: c_1 });
    };
    C2D.Renderer.colorFunctions = {};
    C2D.Renderer.registerColorFunction = function (p$1, P3V) {
        x2dci.J8h();
        C2D.Renderer.colorFunctions[p$1] = P3V;
    };
    C2D.Renderer.unregisterColorFunction = function (g47) {
        x2dci.r2m();
        delete C2D.Renderer.colorFunctions[g47];
    };
    C2D.Renderer.prototype.adjustYAxis = function () {};
    C2D.Renderer.prototype.draw = function () {};
    C2D.Renderer.prototype.drawIndividualSeries = function (e50, P$4) {};
    C2D.Renderer.prototype.construct = function (u_j) {
        var K6r;
        if (!u_j) {
            u_j = {};
        }
        K6r = u_j.params ? u_j.params : {};
        if (!K6r.name) {
            K6r.name = C2D.uniqueID();
        }
        if (!K6r.heightPercentage) {
            K6r.heightPercentage = +'0.7';
        }
        if (!K6r.opacity) {
            x2dci.C$o(19);
            K6r.opacity = x2dci.d58(0, '1');
        }
        if (K6r.highlightable !== !{}) {
            K6r.highlightable = !!'1';
        }
        if (!K6r.panel) {
            K6r.panel = 'chart';
        }
        if (K6r.yAxis) {
            K6r.yAxis = new C2D.ChartEngine.YAxis(K6r.yAxis);
            if (!K6r.yAxis.name) {
                K6r.yAxis.name = K6r.name;
            }
        }
        this.cb = u_j.callback;
        this.params = K6r;
        this.seriesParams = [];
        x2dci.J8h();
        this.caches = {};
        this.colors = {};
    };
    C2D.Renderer.prototype.attachSeries = function (s93, P1_) {
        var k5y = x2dci;
        var Z7C, t9p, i0M, j5h, G7G, m_T, Y3i, X2o, c2P, b78, M22, v8L, U$V, z66;
        Z7C = 'str';
        Z7C += 'ing';
        t9p = this.stx;
        if (!t9p) {
            return this;
        }
        k5y.J8h();
        i0M = t9p.chart.series[s93];
        if (!i0M) {
            i0M = { parameters: {} };
        }
        j5h = this.params;
        G7G = i0M.parameters;
        m_T = {
            id: s93,
            chartType: j5h.type,
            display: G7G.display,
            border_color_up: j5h.defaultBorders ? 'auto' : null,
            fill_color_up: G7G.color,
            opacity_up: j5h.opacity,
            border_color_down: j5h.defaultBorders ? 'auto' : null,
            fill_color_down: G7G.color,
            opacity_down: j5h.opacity,
            color: G7G.color,
            symbol: G7G.symbol,
            symbolObject: C2D.clone(G7G.symbolObject),
        };
        if (typeof P1_ == Z7C) {
            m_T.color = m_T.fill_color_down = m_T.fill_color_up = P1_;
        } else if (typeof P1_ == 'object') {
            for (var i9_ in P1_) {
                m_T[i9_] = P1_[i9_];
            }
            Y3i = m_T.color;
            X2o = m_T.border_color;
            if (Y3i) {
                if (!m_T.fill_color_up) {
                    m_T.fill_color_up = Y3i;
                }
                if (!m_T.fill_color_down) {
                    m_T.fill_color_down = Y3i;
                }
                if (!m_T.fill_color_even) {
                    m_T.fill_color_even = Y3i;
                }
            }
            if (X2o) {
                if (!m_T.border_color_up) {
                    m_T.border_color_up = X2o;
                }
                if (!m_T.border_color_down) {
                    m_T.border_color_down = X2o;
                }
                if (!m_T.border_color_even) {
                    m_T.border_color_even = X2o;
                }
            }
        }
        if (m_T.symbol && m_T.field != m_T.symbol) {
            m_T.subField = m_T.field;
            m_T.field = m_T.symbol;
        }
        if (!m_T.id) {
            m_T.id = C2D.uniqueID();
        }
        c2P = 0;
        for (; c2P < this.seriesParams.length; ++c2P) {
            if (this.seriesParams[c2P].id === m_T.id) {
                this.removeSeries(m_T.id, !![]);
                break;
            }
        }
        this.seriesParams.splice(c2P, 0, m_T);
        if (m_T.fill_color_up != m_T.fill_color_down) {
            b78 = ' do';
            b78 += 'wn';
            M22 = ' ';
            M22 += 'u';
            M22 += 'p';
            v8L = ' ';
            v8L += 'u';
            v8L += 'p';
            k5y.C$o(22);
            this.colors[k5y.c6Y(' up', s93)] = {
                color: m_T.fill_color_up,
                opacity: m_T.opacity_up,
                display: m_T.display ? m_T.display + v8L : s93 + M22,
            };
            k5y.C$o(22);
            this.colors[k5y.d58(' dn', s93)] = {
                color: m_T.fill_color_down,
                opacity: m_T.opacity_down,
                display: m_T.display ? m_T.display + b78 : s93 + ' down',
            };
        } else {
            this.colors[s93] = {
                color: m_T.fill_color_up,
                opacity: m_T.opacity_up,
                display: m_T.display ? m_T.display : s93,
            };
        }
        U$V = j5h.panel;
        if (!t9p.panels[U$V]) {
            z66 = j5h.yAxis;
            if (!z66) {
                z66 = new C2D.ChartEngine.YAxis();
                z66.needsInitialPadding = !![];
            }
            z66.name = U$V;
            t9p.createPanel(U$V, U$V, null, null, z66);
        } else {
            if (j5h.yAxis) {
                j5h.yAxis = t9p.addYAxis(t9p.panels[U$V], j5h.yAxis);
                j5h.yAxis.needsInitialPadding = !!{};
                G7G.yAxis = j5h.yAxis;
                t9p.resizeChart();
            } else if (m_T.yAxis) {
                j5h.yAxis = m_T.yAxis;
            }
        }
        return this;
    };
    C2D.Renderer.prototype.removeSeries = function (K6S, h69) {
        var s6y = x2dci;
        var c$9, E4o, S0B, X7W, G$h, W9B, o7i, h3U, E$Y, c7v;
        c$9 = ' ';
        c$9 += 'd';
        c$9 += 'n';
        E4o = ' ';
        E4o += 'u';
        E4o += 'p';
        S0B = null;
        X7W = !!0;
        G$h = this.stx;
        W9B = G$h.chart;
        for (var Y5O in W9B.seriesRenderers) {
            o7i = W9B.seriesRenderers[Y5O];
            for (var o6F = 0; o6F < o7i.seriesParams.length; o6F++) {
                h3U = o7i.seriesParams[o6F];
                if (h3U.id == K6S && this === o7i) {
                    S0B = o6F;
                } else if (h3U.isComparison && h3U.panel == W9B.panel.name && (!h3U.yAxis || h3U.yAxis == W9B.yAxis)) {
                    X7W = !![];
                }
            }
        }
        if (S0B !== null) {
            if (
                W9B.forcePercentComparison &&
                !X7W &&
                this.seriesParams[S0B].isComparison &&
                G$h.layout.chartScale != 'linear'
            ) {
                G$h.setChartScale();
            }
            this.seriesParams.splice(S0B, 1);
        }
        s6y.C$o(22);
        delete this.colors[s6y.d58(E4o, K6S)];
        s6y.C$o(22);
        delete this.colors[s6y.c6Y(c$9, K6S)];
        s6y.J8h();
        delete this.colors[K6S];
        if (!h69) {
            for (var J_d in W9B.seriesRenderers) {
                c7v = W9B.seriesRenderers[J_d];
                for (var j5_ = 0; j5_ < c7v.seriesParams.length; j5_++) {
                    if (c7v.seriesParams[j5_].id == K6S) {
                        E$Y = !![];
                        break;
                    }
                    E$Y = ![];
                }
                if (E$Y) break;
            }
            if (E$Y === !{} || S0B !== null) {
                G$h.deleteSeries(K6S, W9B);
            }
        }
        G$h.deleteYAxisIfUnused(G$h.panels[this.params.panel], this.params.yAxis);
        G$h.resizeChart();
        G$h.layout.symbols = G$h.getSymbols({ 'include-parameters': !!{}, 'exclude-studies': !!'1' });
        G$h.changeOccurred('layout');
        return this;
    };
    C2D.Renderer.prototype.modifyRenderer = function (H8p) {
        var V_3, t5J, A3J;
        V_3 = this.params;
        x2dci.J8h();
        var { stx: Z5v } = this;
        for (var c3Y in H8p) {
            t5J = 't';
            t5J += 'y';
            t5J += 'p';
            t5J += 'e';
            A3J = H8p[c3Y];
            switch (c3Y) {
                case 'baseline':
                    if (A3J) {
                        if (typeof A3J === 'object') {
                            this.params.baseline = C2D.ensureDefaults(A3J, C2D.ChartEngine.Chart.prototype.baseline);
                        }
                        Z5v.registerBaselineToHelper(this);
                    } else {
                        Z5v.removeBaselineFromHelper(this);
                    }
                    break;
                case t5J:
                    this.params.type = A3J;
                    break;
                case 'style':
                    this.params.style = A3J;
                    break;
                default:
                    break;
            }
        }
    };
    C2D.Renderer.prototype.getDependents = function (B4S) {
        var D$6, H1G;
        D$6 = [];
        for (var q2z in B4S.chart.seriesRenderers) {
            H1G = B4S.chart.seriesRenderers[q2z];
            if (H1G.params.dependentOf == this.params.name) {
                D$6.push(H1G);
            }
        }
        x2dci.r2m();
        return D$6;
    };
    C2D.Renderer.prototype.undraggable = function (F6Q) {
        x2dci.J8h();
        if (this == F6Q.mainSeriesRenderer) {
            return !![];
        }
        return this.params.dependentOf == F6Q.mainSeriesRenderer.params.name;
    };
    C2D.Renderer.prototype.removeAllSeries = function (R7g) {
        var m0k;
        if (R7g || this === this.stx.mainSeriesRenderer) {
            m0k = [];
            for (var X0J = 0; X0J < this.seriesParams.length; X0J++) {
                m0k.push(this.seriesParams[X0J].id);
            }
            for (var B65 = 0; B65 < m0k.length; B65++) {
                this.removeSeries(m0k[B65]);
            }
        }
        this.seriesParams = [];
        this.colors = {};
        this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis);
        this.stx.resizeChart();
        return this;
    };
    C2D.Renderer.prototype.getYAxis = function (b8d) {
        var u2T, C21;
        if (this.params) {
            if (this.params.yAxis) {
                u2T = this.params.yAxis;
            } else {
                C21 = b8d.panels[this.params.panel];
                if (!C21) {
                    return !'1';
                }
                u2T = C21.yAxis;
            }
        } else {
            u2T = b8d.chart.panel.yAxis;
        }
        return u2T;
    };
    C2D.Renderer.prototype.ready = function () {
        this.stx.createDataSet();
        this.stx.draw();
        return this;
    };
    C2D.Renderer.Lines = function (R4i) {
        var y8C, n1y;
        y8C = 'obje';
        y8C += 'ct';
        n1y = 'l';
        n1y += 'in';
        n1y += 'e';
        this.construct(R4i);
        var { params: i93 } = this;
        if (!i93.type) {
            i93.type = n1y;
        }
        if (!i93.style) {
            switch (i93.type) {
                case 'mountain':
                    if (i93.baseline) {
                        i93.style = 'stx_baseline_delta_mountain';
                    } else if (i93.colored) {
                        i93.style = 'stx_colored_mountain_chart';
                    } else {
                        i93.style = 'stx_mountain_chart';
                    }
                    break;
                default:
                    i93.style = 'stx_line_chart';
            }
        }
        this.supportsAnimation = !!{};
        if (i93.type == 'wave' || i93.type == 'channel') {
            i93.step = i93.vertex = i93.baseline = i93.colored = !!0;
            this.highLowBars = this.barsHaveWidth = !!1;
            this.supportsAnimation = !{};
        } else if (i93.type == 'step') {
            i93.step = !!{};
        }
        var { baseline: d3t } = i93;
        if (d3t && typeof d3t === y8C) {
            C2D.ensureDefaults(i93.baseline, C2D.ChartEngine.Chart.prototype.baseline);
        }
    };
    C2D.inheritsFrom(C2D.Renderer.Lines, C2D.Renderer, !{});
    C2D.Renderer.Lines.requestNew = function (E1U, h1h) {
        var Z3r, k_f, A1v, J4N, B7Y, y6b, e$U, w$0;
        Z3r = null;
        k_f = h1h.step;
        A1v = h1h.colored;
        J4N = h1h.baseline;
        B7Y = h1h.vertex;
        for (var A1y = 0; A1y < E1U.length; A1y++) {
            y6b = 'ver';
            y6b += 't';
            y6b += 'ex';
            e$U = 's';
            e$U += 'te';
            e$U += 'p';
            w$0 = E1U[A1y];
            switch (w$0) {
                case 'line':
                case 'mountain':
                case 'wave':
                case 'channel':
                    Z3r = w$0;
                    break;
                case 'baseline':
                    J4N = !!'1';
                    break;
                case 'colored':
                    A1v = !'';
                    break;
                case e$U:
                    k_f = !![];
                    break;
                case y6b:
                    B7Y = !!{};
                    break;
                case 'delta':
                    break;
                default:
                    return null;
            }
        }
        if (Z3r === null && !J4N && !k_f) {
            return null;
        }
        return new C2D.Renderer.Lines({
            params: C2D.extend(h1h, { type: Z3r, step: k_f, colored: A1v, baseline: J4N, vertex: B7Y }),
        });
    };
    C2D.Renderer.Lines.prototype.draw = function () {
        var j27, N9H, B3M, S$w, B_y, i7l, P5K, c0k, p9T, l9R, g09, D8q, Z99, f3j;
        j27 = this.stx;
        N9H = this.stx.panels[this.params.panel];
        B3M = N9H.chart;
        S$w = {};
        i7l = this.seriesParams;
        P5K = this.params.colorFunction;
        for (B_y = 0; B_y < i7l.length; B_y++) {
            c0k = i7l[B_y];
            if (this.params.colored) {
                p9T = '_col';
                p9T += 'or';
                l9R = '_col';
                l9R += 'or_down';
                g09 = ['_color_up', l9R, p9T];
                for (var C1U = 0; C1U < g09.length; C1U++) {
                    D8q = 'f';
                    D8q += 'i';
                    D8q += 'l';
                    D8q += 'l';
                    Z99 = c0k['border' + g09[C1U]];
                    if (Z99 && Z99 != 'auto') {
                        c0k[D8q + g09[C1U]] = Z99;
                    }
                }
                if (!P5K) {
                    P5K = Y37(c0k);
                }
                this.params.colorFunction = P5K;
            }
            f3j = {};
            if (B3M.series[c0k.id]) {
                f3j = C2D.clone(B3M.series[c0k.id].parameters);
            }
            S$w[c0k.id] = {
                parameters: C2D.extend(C2D.extend(f3j, this.params), c0k),
                yValueCache: this.caches[c0k.id],
            };
            if (this == j27.mainSeriesRenderer && B3M.customChart && B3M.customChart.colorFunction) {
                S$w[c0k.id].parameters.colorFunction = B3M.customChart.colorFunction;
            }
        }
        j27.drawSeries(B3M, S$w, this.params.yAxis, this);
        for (B_y in S$w) {
            this.caches[B_y] = S$w[B_y].yValueCache;
        }
        function Y37(t27) {
            var E5M, s1e, L4C, t1l, A0a;
            E5M = 'stx_l';
            E5M += 'i';
            E5M += 'ne_down';
            s1e = 'stx_l';
            s1e += 'ine';
            s1e += '_';
            s1e += 'up';
            L4C = t27.fill_color_up || j27.getCanvasColor(s1e);
            t1l = t27.fill_color_down || j27.getCanvasColor(E5M);
            A0a = t27.color || j27.getCanvasColor('stx_line_chart');
            return function (d89, E38, M5b) {
                if (!E38.iqPrevClose && E38.iqPrevClose !== 0) {
                    return A0a;
                }
                if (E38.Close > E38.iqPrevClose) {
                    return L4C;
                }
                if (E38.Close < E38.iqPrevClose) {
                    return t1l;
                }
                x2dci.J8h();
                return A0a;
            };
        }
    };
    C2D.Renderer.Lines.prototype.drawIndividualSeries = function (b6O, f3g) {
        var I8C, g0Z, e5U, E_Y, j9M, B7_, j0c, h7r, h6T, f51;
        I8C = 'c';
        I8C += 'ha';
        I8C += 'nnel';
        if (f3g.invalid) {
            return;
        }
        g0Z = this.stx;
        e5U = b6O.context;
        x2dci.r2m();
        E_Y = null;
        j9M = f3g.colorFunction;
        B7_ = g0Z.panels[f3g.panel] || b6O.panel;
        if (typeof j9M == 'string') {
            j9M = C2D.Renderer.colorFunctions[j9M];
            if (!j9M) {
                return;
            }
        }
        if (f3g.vertex) {
            j0c = 'bev';
            j0c += 'e';
            j0c += 'l';
            e5U.save();
            e5U.lineJoin = j0c;
        }
        if (f3g.type == 'wave') {
            E_Y = g0Z.drawWaveChart(B7_, f3g);
        } else if (f3g.baseline) {
            E_Y = g0Z.drawBaselineChart(B7_, f3g);
            g0Z.positionBaselineHandle(this);
        } else if (f3g.type == 'mountain') {
            f3g.returnObject = !!'1';
            E_Y = g0Z.drawMountainChart(B7_, f3g, j9M);
        } else if (f3g.type == I8C) {
            f3g.returnObject = !!'1';
            E_Y = g0Z.drawChannelChart(B7_, j9M, f3g);
        } else {
            h7r = -729920541;
            h6T = 1606503021;
            f51 = 2;
            for (var V3y = 1; x2dci.q2D(V3y.toString(), V3y.toString().length, 18937) !== h7r; V3y++) {
                f3g.returnObject = !!0;
                E_Y = g0Z.drawLineChart(B7_, f3g.style, j9M, f3g);
                f51 += +'2';
            }
            if (x2dci.q2D(f51.toString(), f51.toString().length, 49692) !== h6T) {
                f3g.returnObject = !'';
                E_Y = g0Z.drawLineChart(B7_, f3g.style, j9M, f3g);
            }
        }
        if (f3g.vertex) {
            g0Z.scatter(B7_, {
                yAxis: f3g.yAxis,
                field: f3g.symbol || f3g.field,
                subField: f3g.subField,
                symbol: f3g.symbol,
                color: f3g.vertex_color,
                highlight: f3g.highlight,
            });
            e5U.restore();
        }
        return E_Y;
    };
    C2D.Renderer.OHLC = function (n9L) {
        var K4Z, P78;
        K4Z = 'can';
        K4Z += 'dle';
        this.construct(n9L);
        P78 = this.params;
        if (!P78.type) {
            P78.type = 'candle';
        }
        this.highLowBars = this.barsHaveWidth = this.standaloneBars = !!{};
        if (P78.histogram) {
            P78.type = 'candle';
            this.highLowBars = !!0;
            P78.volume = P78.hollow = !1;
        }
        if (P78.type == 'bar') {
            P78.volume = P78.hollow = P78.histogram = !{};
        }
        if (P78.type == K4Z) {
            P78.hlc = P78.colored = !{};
        }
        if (P78.volume) {
            P78.hollow = !'';
        }
    };
    C2D.inheritsFrom(C2D.Renderer.OHLC, C2D.Renderer, ![]);
    C2D.Renderer.OHLC.requestNew = function (F$3, P0p) {
        var G5Z, d1O, Z5Y, B1l, V5T;
        G5Z = null;
        x2dci.J8h();
        d1O = P0p.histogram;
        for (var V6D = 0; V6D < F$3.length; V6D++) {
            Z5Y = 'histogr';
            Z5Y += 'am';
            B1l = F$3[V6D];
            switch (B1l) {
                case 'candle':
                    G5Z = B1l;
                    break;
                case Z5Y:
                    V5T = 'can';
                    V5T += 'd';
                    V5T += 'le';
                    d1O = !!'1';
                    G5Z = V5T;
                    break;
                default:
                    return null;
            }
        }
        if (G5Z === null) {
            return null;
        }
        return new C2D.Renderer.OHLC({ params: C2D.extend(P0p, { type: G5Z, histogram: d1O }) });
    };
    C2D.Renderer.OHLC.getChartParts = function (e15, e4z) {
        var S3G, t39, W8c, z4c, t8H, U8k, D8z, R7V, R1R, v4Q, v5G, p6q, L7u, H0$, M2v, f05, H$h, U0Z, v7C, L$5;
        S3G = 'borde';
        S3G += 'r_';
        S3G += 'colo';
        x2dci.J8h();
        S3G += 'r_down';
        t39 = 'fill_color';
        t39 += '_dow';
        t39 += 'n';
        W8c = 'candl';
        W8c += 'e';
        z4c = 'ca';
        z4c += 'ndle';
        t8H = 'ca';
        t8H += 'nd';
        t8H += 'le';
        U8k = 'c';
        U8k += 'andle';
        D8z = 'shad';
        D8z += 'ow';
        R7V = 'stx_c';
        R7V += 'andle_sh';
        R7V += 'adow';
        R1R = 's';
        R1R += 'had';
        R1R += 'ow';
        v4Q = 'can';
        v4Q += 'd';
        v4Q += 'le';
        v5G = 'fill_color_';
        v5G += 'even';
        p6q = 's';
        p6q += 'tx_histogram_even';
        L7u = 'histo';
        L7u += 'gr';
        L7u += 'am';
        H0$ = 'stx_hist';
        H0$ += 'og';
        H0$ += 'r';
        H0$ += 'am_down';
        M2v = 'his';
        M2v += 'togr';
        M2v += 'am';
        f05 = 'his';
        f05 += 'to';
        f05 += 'gram';
        H$h = 'fill_c';
        H$h += 'olor_up';
        U0Z = +'8';
        v7C = 16;
        L$5 = +'32';
        return [
            {
                type: 'histogram',
                drawType: 'histogram',
                style: 'stx_histogram_up',
                condition: U0Z,
                fill: H$h,
                border: 'border_color_up',
                useColorInMap: !'',
                useBorderStyleProp: !!'1',
            },
            {
                type: f05,
                drawType: M2v,
                style: H0$,
                condition: v7C,
                fill: 'fill_color_down',
                border: 'border_color_down',
                useColorInMap: !!{},
                useBorderStyleProp: !!{},
            },
            {
                type: 'histogram',
                drawType: L7u,
                style: p6q,
                condition: L$5,
                fill: v5G,
                border: 'border_color_even',
                skipIfPass: !!{},
                useColorInMap: !0,
                useBorderStyleProp: !!1,
            },
            { type: v4Q, drawType: R1R, style: R7V, border: 'border_color_up' },
            { type: 'candle', drawType: D8z, style: 'stx_candle_shadow_up', condition: U0Z, border: 'border_color_up' },
            {
                type: U8k,
                drawType: 'shadow',
                style: 'stx_candle_shadow_down',
                condition: v7C,
                border: 'border_color_down',
            },
            {
                type: t8H,
                drawType: 'shadow',
                style: 'stx_candle_shadow_even',
                condition: L$5,
                border: 'border_color_even',
                skipIfPass: !0,
            },
            {
                type: 'candle',
                drawType: 'candle',
                style: 'stx_candle_up',
                condition: U0Z,
                fill: 'fill_color_up',
                border: 'border_color_up',
                useColorInMap: !![],
                useBorderStyleProp: !'',
            },
            {
                type: z4c,
                drawType: W8c,
                style: 'stx_candle_down',
                condition: v7C,
                fill: t39,
                border: S3G,
                useColorInMap: !![],
                useBorderStyleProp: !0,
            },
        ];
    };
    C2D.Renderer.OHLC.prototype.draw = function () {
        var K4z, B89, h4Y, z9W, N59, S8r, T2C, q2k;
        K4z = this.stx;
        B89 = this.stx.panels[this.params.panel];
        h4Y = B89.chart;
        z9W = {};
        S8r = this.seriesParams;
        for (N59 = 0; N59 < S8r.length; N59++) {
            T2C = S8r[N59];
            q2k = {};
            if (h4Y.series[T2C.id]) {
                q2k = C2D.clone(h4Y.series[T2C.id].parameters);
            }
            z9W[T2C.id] = { parameters: C2D.extend(C2D.extend(q2k, this.params), T2C) };
            if (this == K4z.mainSeriesRenderer && h4Y.customChart && h4Y.customChart.colorFunction) {
                z9W[T2C.id].parameters.colorFunction = h4Y.customChart.colorFunction;
            }
        }
        K4z.drawSeries(h4Y, z9W, this.params.yAxis, this);
        for (N59 in z9W) {
            if (z9W[N59].yValueCache) {
                this.caches[N59] = z9W[N59].yValueCache;
            }
        }
    };
    C2D.Renderer.OHLC.prototype.getColor = function (b_q, e0c, t9D, A2e, L7N, n5F) {
        var I_C, j0F, L9G, l4T, l0e, J6c, L1w;
        I_C = n5F || t9D.color;
        j0F = this.params.yAxis || e0c.yAxis;
        if (A2e) {
            I_C = n5F || t9D.borderLeftColor || t9D['border-left-color'];
            if (!I_C) {
                return null;
            }
        }
        if (!L7N) {
            return I_C;
        }
        L9G = b_q.pixelFromTransformedValue(j0F.highValue, e0c);
        if (isNaN(L9G)) {
            L9G = 0;
        }
        l4T = t9D.backgroundColor;
        if (I_C && !C2D.isTransparent(I_C)) {
            l0e = 'b';
            l0e += 'ott';
            l0e += 'om';
            J6c = 't';
            J6c += 'o';
            J6c += 'p';
            L1w = b_q.chart.context.createLinearGradient(+'0', L9G, 0, 2 * j0F[j0F.flipped ? J6c : l0e] - L9G);
            L1w.addColorStop(0, I_C);
            L1w.addColorStop(1, l4T);
            return L1w;
        }
        return l4T;
    };
    C2D.Renderer.OHLC.prototype.drawIndividualSeries = function (x0g, L_o) {
        var j1Q,
            z7E,
            R2r,
            D21,
            F5F,
            q9Y,
            E6_,
            r$F,
            Y8l,
            e5k,
            m4H,
            U51,
            I1E,
            N1i,
            Z0j,
            i9I,
            v8D,
            r3r,
            o7F,
            z0L,
            d0Y,
            n0T,
            G3m,
            e7g,
            j6_,
            d_e,
            m$M,
            J4r,
            x7b,
            P7y,
            h$B,
            o17,
            b8I,
            S1V,
            T5Z,
            v2Y,
            j0t,
            k71,
            u$o,
            o5n;
        j1Q = 'op';
        j1Q += 'e';
        j1Q += 'n';
        if (L_o.invalid) {
            return;
        }
        z7E = this.stx;
        R2r = x0g.context;
        D21 = L_o.colorFunction;
        F5F = z7E.panels[L_o.panel] || x0g.panel;
        if (typeof D21 == 'string') {
            D21 = C2D.Renderer.colorFunctions[D21];
            if (!D21) {
                return;
            }
        }
        q9Y = z7E.layout.candleWidth - x0g.tmpWidth <= +'2' && x0g.tmpWidth <= 3;
        E6_ = 1;
        r$F = 2;
        Y8l = 4;
        e5k = 8;
        m4H = 16;
        U51 = 32;
        if (!x0g.state.chartType) {
            x0g.state.chartType = {};
        }
        I1E = x0g.state.chartType.pass = {};
        N1i = z7E.colorByCandleDirection;
        if (L_o.colorBasis) {
            N1i = L_o.colorBasis == j1Q;
        }
        Z0j = L_o.histogram;
        i9I = L_o.type;
        v8D = L_o.hollow;
        r3r = z7E.noWicksOnCandles[i9I];
        z7E.startClip(F5F.name);
        o7F = null;
        z0L = { colors: [], cache: [] };
        d0Y = [];
        if (D21) {
            n0T = {
                isHistogram: Z0j,
                field: L_o.field,
                yAxis: L_o.yAxis,
                isVolume: L_o.volume,
                highlight: L_o.highlight,
            };
            if (!Z0j && i9I == 'bar') {
                G3m = 'stx_b';
                G3m += 'ar_';
                G3m += 'char';
                G3m += 't';
                n0T.type = L_o.hlc ? 'hlc' : 'bar';
                z0L = z7E.drawBarChart(F5F, G3m, D21, n0T);
            } else {
                e7g = 'candl';
                e7g += 'e';
                if (i9I == e7g && !r3r) {
                    z7E.drawShadows(F5F, D21, n0T);
                }
                z0L = z7E.drawCandles(F5F, D21, n0T);
                n0T.isOutline = !'';
                if (v8D || !q9Y) {
                    z7E.drawCandles(F5F, D21, n0T);
                }
            }
        } else {
            j6_ = Z0j && L_o.gradient !== !{};
            d_e = C2D.Renderer.OHLC.getChartParts(L_o.style, N1i);
            for (var o95 = 0; o95 < d_e.length; o95++) {
                m$M = d_e[o95];
                if (m$M.skipIfPass && !I1E.even) continue;
                else if (Z0j) {
                    J4r = 'h';
                    J4r += 'ist';
                    J4r += 'og';
                    J4r += 'ram';
                    if (m$M.type != J4r) continue;
                } else if (i9I == 'bar') {
                    if (m$M.type != 'bar') continue;
                    else if (L_o.colored && !m$M.condition) continue;
                    else if (!L_o.colored && m$M.condition) continue;
                } else if (v8D) {
                    if (m$M.type != 'hollow') continue;
                    else if (m$M.drawType == 'shadow' && r3r) continue;
                } else if (i9I == 'candle') {
                    x7b = 'shad';
                    x7b += 'ow';
                    if (m$M.type != 'candle') continue;
                    else if (m$M.drawType == x7b) {
                        P7y = 's';
                        P7y += 'tx_candle_shadow_d';
                        P7y += 'own';
                        h$B = 'st';
                        h$B += 'x_candle_shad';
                        h$B += 'o';
                        h$B += 'w_up';
                        if (r3r) continue;
                        o17 = L_o.border_color_up || z7E.getCanvasColor(h$B);
                        b8I = L_o.border_color_down || z7E.getCanvasColor(P7y);
                        S1V = L_o.border_color_even || z7E.getCanvasColor('stx_candle_shadow_even');
                        if (
                            !C2D.colorsEqual(o17, b8I) ||
                            !C2D.colorsEqual(o17, S1V) ||
                            !C2D.colorsEqual(o17, z7E.defaultColor)
                        ) {
                            if (!m$M.condition) continue;
                        } else if (m$M.condition) continue;
                    }
                } else continue;
                T5Z = z7E.canvasStyle(m$M.style);
                v2Y = this.getColor(z7E, F5F, T5Z, !'1', ![], L_o[m$M.fill]);
                j0t = this.getColor(z7E, F5F, T5Z, !{}, j6_, L_o[m$M.fill]);
                k71 = this.getColor(z7E, F5F, T5Z, m$M.useBorderStyleProp && !q9Y, j6_, L_o[m$M.border]);
                if (m$M.drawType == 'candle') {
                    if (m$M.type == 'hollow') {
                        u$o = 'tr';
                        u$o += 'an';
                        u$o += 'spa';
                        u$o += 'rent';
                        if (!C2D.isTransparent(j0t) && C2D.colorsEqual(k71, j0t)) {
                            k71 = m$M.useColorInMap ? u$o : j0t;
                        }
                        if (!m$M.useColorInMap) {
                            j0t = z7E.containerColor;
                        }
                    } else if (m$M.type == 'candle') {
                        if (q9Y) {
                            if (C2D.isTransparent(j0t)) {
                                j0t = k71;
                            } else {
                                k71 = j0t;
                            }
                        }
                    }
                }
                R2r.globalAlpha = L_o.opacity;
                d0Y.push(
                    z7E.drawBarTypeChartInner({
                        fillColor: j0t,
                        borderColor: k71,
                        condition: m$M.condition,
                        style: m$M.style,
                        type: i9I == 'bar' && L_o.hlc ? 'hlc' : m$M.drawType,
                        panel: F5F,
                        field: L_o.field,
                        yAxis: L_o.yAxis,
                        volume: L_o.volume && L_o.hollow,
                        highlight: L_o.highlight,
                    })
                );
                if (!o7F) {
                    o7F = {};
                }
                if (m$M.useColorInMap) {
                    o7F[v2Y] = 1;
                }
            }
        }
        z7E.endClip();
        for (var G0c in o7F) {
            if (!L_o.hollow || !C2D.equals(G0c, z7E.containerColor)) {
                z0L.colors.push(G0c);
            }
        }
        for (G0c = '0' - 0; G0c < d0Y.length; G0c++) {
            for (var j2e = 0; j2e < d0Y[G0c].cache.length; j2e++) {
                o5n = d0Y[G0c].cache[j2e];
                if (o5n || o5n === ('0' | 0)) {
                    z0L.cache[j2e] = o5n;
                }
            }
        }
        return z0L;
    };
    C2D.Renderer.Candles = function (o_A) {
        var W7_;
        this.construct(o_A);
        W7_ = this.params;
        W7_.type = 'candle';
        this.highLowBars = this.barsHaveWidth = this.standaloneBars = !!{};
        W7_.hlc = W7_.colored = W7_.histogram = !{};
        x2dci.J8h();
        if (W7_.volume) {
            W7_.hollow = !0;
        }
    };
    C2D.inheritsFrom(C2D.Renderer.Candles, C2D.Renderer.OHLC, !!'');
    C2D.Renderer.SimpleHistogram = function (h_k) {
        var m3C;
        this.construct(h_k);
        m3C = this.params;
        m3C.type = 'candle';
        m3C.histogram = !'';
        this.barsHaveWidth = this.standaloneBars = !![];
        x2dci.J8h();
        this.highLowBars = !1;
        m3C.hlc = m3C.colored = m3C.hollow = m3C.volume = !{};
    };
    C2D.inheritsFrom(C2D.Renderer.SimpleHistogram, C2D.Renderer.Candles, !'1');
};
P = s7K => {
    var U9z = x2dci;
    var s5W, V8J, v1P, G$n;
    s5W = 752702637;
    U9z.M8Y(74);
    V8J = -U9z.d58('1060473216', 0);
    v1P = 2;
    for (var q4v = 1; U9z.O$R(q4v.toString(), q4v.toString().length, 4499) !== s5W; q4v++) {
        G$n = s7K.CIQ;
        v1P += 2;
    }
    if (U9z.O$R(v1P.toString(), v1P.toString().length, +'69032') !== V8J) {
        G$n = s7K.CIQ;
    }
    G$n = s7K.CIQ;
    G$n.capitalize = function (C7e) {
        if (!C7e) {
            return '';
        }
        U9z.C$o(17);
        U9z.J8h();
        var e81 = U9z.c6Y(1, 3, 8, 14, 3);
        return C7e.charAt(0).toUpperCase() + C7e.slice(e81);
    };
    G$n.camelCaseRegExp = /-([a-z])/g;
    G$n.makeCamelCase = function (U67) {
        U9z.r2m();
        return U67.replace(G$n.camelCaseRegExp, function (G$z) {
            U9z.J8h();
            return G$z[1].toUpperCase();
        });
    };
    G$n.uniqueID = function (q55) {
        var L5O, W19, v7S, A0x, Z8x, o9l;
        if (q55) {
            L5O = 'xxxxxxxx-xxxx-4xxx-yxxx';
            L5O += '-xxxxxxxxxxxx';
            W19 = 'un';
            W19 += 'def';
            W19 += 'ine';
            W19 += 'd';
            v7S = new Date().getTime();
            if (typeof window !== W19 && window.performance && typeof window.performance.now === 'function') {
                v7S += window.performance.now();
            }
            A0x = L5O.replace(/[xy]/g, function (y0v) {
                U9z.J8h();
                var d8P;
                U9z.M8Y(67);
                var k8d = U9z.c6Y(5, 15, 5);
                U9z.M8Y(92);
                var c8b = U9z.d58(1, 26, 19, 8);
                d8P = (v7S + Math.random() * k8d) % c8b | 0;
                U9z.C$o(40);
                v7S = Math.floor(U9z.d58(16, v7S));
                return (y0v ==
                (2355 < 436
                    ? (2.51e3, 0x1c34)
                    : 9040 != 8650
                    ? 'x'
                    : 7360 === (6140, 343.96)
                    ? ('f', 0xfc0)
                    : (735.53, '0x21a6' >> 64))
                    ? d8P
                    : (d8P & 0x3) | 0x8
                ).toString(16);
            });
            return A0x;
        }
        Z8x = new Date();
        o9l = Z8x.getTime().toString(36);
        o9l += Math.floor(Math.random() * Math.pow(36, 2)).toString(36);
        return o9l.toUpperCase();
    };
};
T = h3o => {
    x2dci.r2m();
};
W = I0h => {
    var r7q = x2dci;
    var Z7T;
    Z7T = I0h.CIQ;
    Z7T.getHostName = function (k8L) {
        r7q.r2m();
        try {
            return k8L.match(/:\/\/(.[^/]+)/)[1];
        } catch (Q$t) {
            return '';
        }
    };
    Z7T.qs = function (M9K) {
        var s3Y, u8z, J2g, O8O;
        s3Y = {};
        if (!M9K) {
            M9K = window.location.search.substring(1);
        }
        u8z = M9K.split('&');
        for (var a8l = '0' - 0; a8l < u8z.length; a8l++) {
            J2g = u8z[a8l].indexOf('=');
            if (J2g > '0' << 0) {
                O8O = u8z[a8l].substring(+'0', J2g);
                r7q.M8Y(22);
                s3Y[O8O] = u8z[a8l].substring(r7q.d58(1, J2g));
            } else {
                O8O = u8z[a8l];
                s3Y[O8O] = null;
            }
        }
        r7q.J8h();
        return s3Y;
    };
    Z7T.postAjax = function (m5l, Y2h, K_8, m4d, o4m) {
        var i15, m_H, q8U, T4C, q5_, g9H, B_7, T2o, v40, E42;
        i15 = 'applicat';
        i15 += 'ion/x-ww';
        i15 += 'w-form-urlencoded';
        m_H = 'G';
        m_H += 'E';
        m_H += 'T';
        q8U = 'PO';
        q8U += 'S';
        q8U += 'T';
        r7q.r2m();
        if (typeof m5l == 'string') {
            m5l = {
                url: m5l,
                payload: Y2h,
                cb: K_8,
                contentType: m4d,
                noEpoch: o4m,
                method: null,
                responseHeaders: ![],
            };
        }
        T4C = m5l.url;
        q5_ = m5l.cb;
        g9H = m5l.payload;
        if (!q5_) {
            q5_ = function () {};
        }
        if (!m5l.ungovernable) {
            if (Z7T.Extras && Z7T.Extras.RequestLimiter && Z7T.Extras.RequestLimiter.hitRequestLimit(T4C)) {
                q5_(429, null, {});
                return;
            }
        }
        B_7 = new XMLHttpRequest();
        if (!B_7) {
            return !1;
        }
        T2o = new Date();
        if (!m5l.noEpoch) {
            if (
                T4C.indexOf(
                    (542.82, 516.6) !== ('7355' >> 0, 622.46)
                        ? 664.68 === 966.41
                            ? (47.8, 505.8)
                            : (7470, 6292) <= (9190, 2158)
                            ? (331.19, 9.54e3)
                            : '?'
                        : ('j', !!'')
                ) == -('1' - 0)
            ) {
                T4C += '?ciqrandom=' + T2o.getTime();
            } else {
                T4C += '&ciqrandom=' + T2o.getTime();
            }
        }
        v40 = m5l.method;
        E42 = m5l.headers;
        if (!v40) {
            v40 = g9H ? q8U : m_H;
        }
        B_7.open(v40, T4C, !!{});
        if (!m5l.contentType) {
            m5l.contentType = i15;
        }
        if (g9H) {
            B_7.setRequestHeader('Content-Type', m5l.contentType);
        }
        if (E42) {
            for (var f8c in E42) {
                B_7.setRequestHeader(f8c, E42[f8c]);
            }
        }
        if (m5l.timeout) {
            B_7.timeout = m5l.timeout;
        }
        B_7.ontimeout = function () {
            r7q.J8h();
            r7q.M8Y(74);
            q5_(r7q.c6Y('408', 0), null, {});
        };
        B_7.onload = function () {
            if (this.status === 0) {
                this.status = 8482 <= 337.68 ? (1.07e3, 461.94) : '0';
            } else if (!this.status) {
                this.status = 200;
            }
            q5_(this.status, this.responseText, z6D(this));
        };
        B_7.onerror = function () {
            r7q.r2m();
            q5_((5840, 9120) >= (6150, 5790) ? '0' : (0x25bc, 0x1fcd), null, {});
        };
        try {
            B_7.send(g9H);
        } catch (K2b) {
            q5_(+'574' < 732.1 ? '0' : (4164, +'3100') > ('941' * 1, +'2820') ? 0x20c2 : ('m', 'b'), K2b, {});
        }
        function z6D(s0x) {
            r7q.r2m();
            var i28, G83, E87, i$B;
            i28 = {};
            if (!m5l.responseHeaders) {
                return;
            }
            G83 = s0x.getAllResponseHeaders();
            E87 = G83.split('\n');
            for (var P5G = '0' >> 64; P5G < E87.length; P5G++) {
                i$B = E87[P5G].split(
                    (372.72, 376.43) == (5666, 3596)
                        ? 'L'
                        : 840 <= (3268, 2400)
                        ? (3420, 5610) <= 169
                            ? 0x1955
                            : ':'
                        : (0x1a32, !!{})
                );
                while (
                    i$B[1] &&
                    i$B[1].charAt(0) ==
                        ((114.63, 376.99) == (3120, 4310) ? 3.96e2 : 967.56 === 517 ? '3.34e+3' - 0 : ' ')
                ) {
                    i$B[1] = i$B[1].substring(1);
                }
                if (i$B[0] !== '') {
                    i28[i$B.shift()] = i$B.join(':');
                }
            }
            return i28;
        }
        return !![];
    };
    Z7T.loadUI = function (d82, X1u, j0Y) {
        var M4K, C5v, k9O, c0L, O6o, C_f;
        r7q.r2m();
        M4K = 'f';
        M4K += 'u';
        M4K += 'nctio';
        M4K += 'n';
        if (!X1u || typeof X1u == M4K) {
            j0Y = X1u;
            X1u = document.body;
        }
        r7q.C$o(53);
        C5v = document.querySelector(r7q.c6Y('iframe[original-url="', d82, '"]'));
        k9O = function () {
            var v6f, T5y, s$Y, C2T, Y7A, s8b, R4$, C_y, j7H, r2b, Q1I;
            r7q.J8h();
            v6f = null;
            try {
                T5y = 1861640420;
                s$Y = 979245143;
                C2T = 2;
                for (var c47 = 1; r7q.q2D(c47.toString(), c47.toString().length, 33408) !== T5y; c47++) {
                    v6f = this.contentDocument;
                    C2T += 2;
                }
                if (r7q.O$R(C2T.toString(), C2T.toString().length, +'93510') !== s$Y) {
                    v6f = this.contentDocument;
                }
            } catch (M7x) {
                return j0Y(M7x);
            }
            if (v6f && !v6f.title) {
                Y7A = -494882274;
                r7q.C$o(74);
                s8b = r7q.d58('463776805', 37);
                R4$ = 2;
                for (var C4F = +'1'; r7q.q2D(C4F.toString(), C4F.toString().length, 300) !== Y7A; C4F++) {
                    C_y = v6f.body.innerHTML;
                    j7H = document.createElement('');
                    Z7T.innerHTML(j7H, C_y);
                    R4$ += 2;
                }
                if (r7q.q2D(R4$.toString(), R4$.toString().length, 97969) !== s8b) {
                    C_y = v6f.body.innerHTML;
                    j7H = document.createElement('div');
                    Z7T.innerHTML(j7H, C_y);
                }
                for (var Q1K = +'0'; Q1K < j7H.children.length; Q1K++) {
                    r2b = j7H.children[Q1K].cloneNode(!!{});
                    X1u.appendChild(r2b);
                }
                j0Y(null);
            } else {
                Q1I = 'iFrame ';
                Q1I += 'not found or document has a ';
                Q1I += 'tit';
                Q1I += 'le';
                j0Y(new Error(Q1I));
            }
        };
        if (C5v) {
            c0L = 'ab';
            c0L += 'out:bl';
            c0L += 'a';
            c0L += 'nk';
            O6o = 'complet';
            O6o += 'e';
            C_f = null;
            try {
                C_f = C5v.contentDocument;
            } catch (s8a) {
                return j0Y(s8a);
            }
            if (C_f.readyState === O6o && C_f.location && C_f.location.href !== c0L) {
                k9O.call(C5v);
            } else {
                C5v.addEventListener('load', k9O);
            }
        } else {
            C5v = document.createElement('iframe');
            C5v.setAttribute('original-url', d82);
            r7q.C$o(68);
            var l73 = r7q.c6Y(119, 12, 10);
            r7q.M8Y(108);
            var L$W = r7q.d58(19, 8, 17, 7914, 55255);
            r7q.C$o(36);
            var j4l = r7q.d58(4645, 10, 4642, 9284);
            r7q.M8Y(0);
            var u0L = r7q.d58(128490, 119924);
            r7q.M8Y(109);
            var d$j = r7q.d58(14, 3706, 8, 6, 738);
            r7q.M8Y(110);
            var k0C = r7q.c6Y(6141, 4, 1226, 6141, 11);
            r7q.C$o(111);
            var Y_M = r7q.d58(9, 5836, 5, 11);
            r7q.C$o(7);
            var t7J = r7q.c6Y(20, 0, 19);
            r7q.C$o(0);
            var J8Q = r7q.c6Y(54824, 50908);
            r7q.C$o(110);
            var m61 = r7q.c6Y(9026, 17, 9017, 8998, 9);
            r7q.C$o(0);
            var u$z = r7q.d58(45120, 39480);
            r7q.M8Y(53);
            var I0O = r7q.c6Y(179, 12, 2855);
            r7q.M8Y(30);
            var t5Q = r7q.c6Y(20, 91896, 84218);
            r7q.M8Y(67);
            var S8d = r7q.d58(6370, 5450, 7);
            r7q.M8Y(112);
            var v6o = r7q.c6Y(11, 657, 660, 660);
            r7q.C$o(7);
            var I_4 = r7q.d58(4, 5472, 21);
            r7q.C$o(113);
            var G5u = r7q.d58(14, 7995, 103800, 1, 9);
            r7q.C$o(114);
            var w$b = r7q.c6Y(144126, 2647, 9, 18, 2669);
            r7q.C$o(31);
            var J43 = r7q.c6Y(6640, 8, 46544, 3, 7);
            r7q.C$o(0);
            var f60 = r7q.d58(5770, 20);
            r7q.M8Y(68);
            var q6i = r7q.c6Y(175344, 8, 22480);
            C5v.src =
                d82 +
                (d82.indexOf(
                    ('787.1' * l73, 980.47) != 309.02
                        ? '?'
                        : L$W < (j4l, u0L)
                        ? (d$j, k0C) < 531.09
                            ? Y_M
                            : (377.27, '774.81' - 0)
                        : 966.66
                ) === t7J
                    ? J8Q >= (m61, u$z)
                        ? +'4680' < +'5770'
                            ? (I0O, t5Q) == S8d
                                ? (v6o, !![])
                                : (!!'1', 443.98)
                            : ('H', I_4)
                        : '?'
                    : G5u == 412.82
                    ? 933.53
                    : (+'3692', w$b) === (J43, +'4660')
                    ? (f60, q6i)
                    : '&') +
                Z7T.uniqueID();
            C5v.hidden = !![];
            C5v.addEventListener('load', k9O);
            document.body.appendChild(C5v);
        }
    };
    r7q.r2m();
    Z7T.loadScript = function (j85, k2s, a99) {
        var S9d, v$W, v_V, M0J, I0p, x0A;
        if (!Z7T.loadedScripts) {
            Z7T.loadedScripts = {};
        }
        if (Z7T.loadedScripts[j85]) {
            if (k2s) {
                k2s();
            }
            return;
        }
        S9d = document.createElement('SCRIPT');
        if (a99) {
            S9d.type = 'module';
            S9d.crossOrigin = 'use-credentials';
        } else {
            S9d.async = !![];
        }
        S9d.onload = function () {
            Z7T.loadedScripts[j85] = !!'1';
            r7q.r2m();
            if (k2s) {
                k2s();
            }
        };
        v$W = j85;
        if (
            v$W.indexOf(
                (316.25, 4169) < (1960, 1664) ? 751.38 : 7783 < (+'3635', '2380' << 32) ? (231.75, +'517.91') : '?'
            ) == -1
        ) {
            r7q.M8Y(115);
            var h2H = r7q.d58(8, 580, 1, 116, 8703);
            r7q.M8Y(67);
            var G8$ = r7q.d58(5700, 5689, 1900);
            r7q.C$o(76);
            var V12 = r7q.c6Y(519, 3, 8120, 9);
            r7q.C$o(0);
            var N5V = r7q.c6Y(4777, 20);
            v$W =
                v$W +
                ('424.87' - 0 != (+'5650', 286.68)
                    ? (+'8920', +'952.64') < 564.37
                        ? (h2H, G8$) != V12
                            ? !![]
                            : (!!1, 795.53)
                        : '?'
                    : N5V) +
                Date.now();
        } else {
            v_V = -333127598;
            M0J = -141228883;
            I0p = 2;
            for (var H09 = 1; r7q.O$R(H09.toString(), H09.toString().length, 29443) !== v_V; H09++) {
                v$W = (v$W - '') * Date.now();
                I0p += 2;
            }
            if (r7q.O$R(I0p.toString(), I0p.toString().length, 22346) !== M0J) {
                v$W = (v$W - '') * Date.now();
            }
            v$W = v$W + '&' + Date.now();
        }
        S9d.src = v$W;
        x0A = document.getElementsByTagName('script')[0];
        if (!x0A) {
            document.body.append(S9d);
        } else {
            x0A.parentNode.insertBefore(S9d, x0A.nextSibling);
        }
    };
    Z7T.loadStylesheet = function (y3x, j3N) {
        var b20, U0Y, W8D, v6E;
        b20 = 'l';
        b20 += 'i';
        b20 += 'n';
        b20 += 'k';
        U0Y = document.createElement('link');
        U0Y.rel = 'stylesheet';
        U0Y.type = 'text/css';
        U0Y.media = 'screen';
        r7q.C$o(68);
        var e7b = r7q.d58(43876, 16, 2926);
        r7q.M8Y(22);
        var o1A = r7q.c6Y(9, 599);
        r7q.M8Y(54);
        var Y66 = r7q.c6Y(12, 10, 19, 77);
        r7q.M8Y(34);
        var K_3 = r7q.d58(13, 10, 13, 11);
        r7q.M8Y(68);
        var H6R = r7q.d58(1158510, 11, 105800);
        r7q.M8Y(81);
        var S4I = r7q.d58(18, 268, 12, 54678);
        r7q.C$o(116);
        var K0G = r7q.d58(1, 1646504, 103248, 17, 16);
        r7q.C$o(16);
        var M7j = r7q.d58(3, 0, 17, 52);
        r7q.M8Y(117);
        var v3U = r7q.c6Y(12, 5013, 10, 74981, 16);
        r7q.C$o(118);
        var Y9B = r7q.c6Y(14, 19, 2, 140980, 1966006);
        r7q.M8Y(119);
        var o57 = r7q.c6Y(8443, 16, 14, 8468, 1214);
        r7q.C$o(22);
        var J6d = r7q.d58(14, 7526);
        r7q.C$o(16);
        var y$4 = r7q.c6Y(2, 14700, 13, 189656);
        r7q.C$o(64);
        var J6p = r7q.d58(3177, 3157, 1, 1059);
        r7q.C$o(120);
        var J7p = r7q.c6Y(5, 5, 5238, 1090);
        r7q.C$o(112);
        var M10 = r7q.d58(15, 2116, 3, 3177);
        U0Y.href =
            y3x +
            (y3x.indexOf((e7b, o1A) != Y66 ? '?' : 897.3 === ('223.15' * K_3, 622.52) ? (H6R, S4I) : (346.06, K0G)) ===
            M7j
                ? '?'
                : +'453.99' <= (v3U, +'9219')
                ? Y9B > o57
                    ? 654.34
                    : +'8219' != (814.01, J6d)
                    ? '&'
                    : (y$4, J6p)
                : (J7p, M10)) +
            Date.now();
        U0Y.onload = function () {
            if (this.loaded) {
                return;
            }
            this.loaded = !!{};
            r7q.J8h();
            if (j3N) {
                j3N();
            }
        };
        W8D = document.getElementsByTagName(b20);
        r7q.M8Y(121);
        var c8e = r7q.d58(6, 14, 923, 14, 3);
        v6E = W8D[W8D.length - c8e];
        if (!v6E) {
            document.head.append(U0Y);
        } else {
            v6E.parentNode.insertBefore(U0Y, v6E.nextSibling);
        }
    };
    Z7T.loadWidget = function (q2E, r$B, J7s, v_R) {
        if (!r$B || typeof r$B == 'function') {
            J7s = r$B;
            r$B = document.body;
        }
        r7q.r2m();
        r7q.C$o(22);
        Z7T.loadStylesheet(r7q.c6Y('.css', q2E), function () {
            r7q.M8Y(22);
            Z7T.loadUI(r7q.d58('.html', q2E), r$B, function (i66) {
                var C33;
                C33 = '.';
                C33 += 'js';
                if (i66) {
                    J7s(i66);
                } else {
                    r7q.M8Y(22);
                    Z7T.loadScript(r7q.d58(C33, q2E), J7s, v_R);
                }
            });
        });
    };
    Z7T.waitForPlugins = function (F0r, T68) {
        var B3k, d4X, P_H, C6i;
        B3k = 0;
        d4X = F0r.length;
        if (!d4X) {
            T68();
            return;
        }
        for (var m44 = '0' >> 64; m44 < d4X; m44++) {
            P_H = 'cq-' + F0r[m44];
            C6i = document.getElementsByTagName(P_H)[0];
            if (C6i && C6i.hasAttribute('loaded')) {
                B3k++;
            }
        }
        r7q.J8h();
        if (d4X !== B3k) {
            return setTimeout(function () {
                r7q.r2m();
                Z7T.waitForPlugins(F0r, T68);
            }, 0);
        }
        T68();
    };
    Z7T.addInternalStylesheet = function (A34, c_5 = '') {
        var P6m, w2P, N_D;
        P6m = '"';
        P6m += ']';
        w2P = 's';
        w2P += 'tyle';
        r7q.r2m();
        w2P += '[';
        w2P += 'path="';
        if (!A34) {
            return;
        }
        if (A34.default) {
            A34 = A34.default;
        }
        if (typeof A34 !== 'string') {
            return;
        }
        if (c_5 && document.querySelector(w2P + c_5 + P6m)) {
            return;
        }
        N_D = document.createElement('style');
        N_D.setAttribute('type', 'text/css');
        N_D.setAttribute('path', c_5);
        N_D.innerText = A34;
        document.head.appendChild(N_D);
    };
};
U = u7c => {
    var q_2 = x2dci;
    var T2A;
    T2A = u7c.CIQ;
    T2A.ChartEngine.prototype.registerHTMLElements = function () {
        var e4J, X53, s6m, m2c, W3A, u0B, P3K;
        e4J = this.chart.container;
        for (var L5Q in T2A.ChartEngine.htmlControls) {
            X53 = 'u';
            X53 += 'ndefined';
            if (typeof this.chart[L5Q] == X53 && typeof this.controls[L5Q] == 'undefined') {
                if (!this.allowZoom && L5Q == 'chartControls') continue;
                q_2.C$o(22);
                s6m = e4J.querySelector(q_2.c6Y(L5Q, '.'));
                if (s6m) {
                    this.chart[L5Q] = s6m;
                    this.controls[L5Q] = s6m;
                } else {
                    m2c = T2A.ChartEngine.htmlControls[L5Q];
                    if (!m2c) continue;
                    W3A = document.createElement('DIV');
                    W3A.innerHTML = m2c;
                    s6m = W3A.firstChild;
                    e4J.appendChild(s6m);
                    this.chart[L5Q] = s6m;
                    this.controls[L5Q] = s6m;
                    s6m.classList.add(L5Q);
                }
            }
        }
        var { chartControls: W9s, home: E6C } = this.controls;
        if (W9s) {
            u0B = W9s.querySelector('.stx-zoom-in');
            P3K = W9s.querySelector('.stx-zoom-out');
            T2A.safeClickTouch(
                u0B,
                (function (g8S) {
                    q_2.r2m();
                    return function (y0I) {
                        if (g8S.allowZoom) {
                            g8S.zoomIn(y0I);
                        }
                        y0I.stopPropagation();
                    };
                })(this)
            );
            T2A.safeClickTouch(
                P3K,
                (function (p1L) {
                    return function (h5D) {
                        q_2.r2m();
                        if (p1L.allowZoom) {
                            p1L.zoomOut(h5D);
                        }
                        h5D.stopPropagation();
                    };
                })(this)
            );
            if (!T2A.touchDevice) {
                this.makeModal(u0B);
                this.makeModal(P3K);
            }
        }
        if (E6C) {
            T2A.safeClickTouch(
                E6C,
                (function (G1S) {
                    q_2.J8h();
                    return function (k8$) {
                        k8$.stopPropagation();
                        if (!G1S.isHistoricalMode()) {
                            G1S.home({ animate: !0 });
                            return;
                        }
                        q_2.J8h();
                        delete G1S.layout.range;
                        G1S.loadChart(G1S.chart.symbol, function () {
                            q_2.r2m();
                            G1S.home({ animate: ![] });
                        });
                    };
                })(this)
            );
            if (!T2A.touchDevice) {
                this.makeModal(E6C);
            }
        }
    };
    T2A.ChartEngine.prototype.home = function (D9i) {
        var f3Q, D3F, x$m, N2p, K3x, x9V, T_Z;
        function v$T(d7G, m12, O6t) {
            return function () {
                q_2.J8h();
                z1U(d7G);
                m12.scroll = O6t;
                d7G.draw();
            };
        }
        this.swipe.amplitude = 0;
        f3Q = this.layout;
        if (typeof D9i != 'object') {
            D9i = { maintainWhitespace: D9i };
        }
        if (typeof D9i.maintainWhitespace == 'undefined') {
            D9i.maintainWhitespace = !!1;
        }
        this.cancelTouchSingleClick = !'';
        if (!this.chart.dataSet || !this.chart.dataSet.length) {
            this.draw();
            return;
        }
        this.micropixels = 0;
        D3F = Math.floor(this.chart.width / f3Q.candleWidth);
        for (var z0P in this.charts) {
            x$m = this.charts[z0P];
            if (D9i.chart && D9i.chart != x$m) continue;
            N2p = 0;
            if (D9i.maintainWhitespace && this.preferences.whitespace >= 0) {
                N2p = this.preferences.whitespace;
            }
            if (D9i.whitespace || D9i.whitespace === 0) {
                N2p = D9i.whitespace;
            }
            K3x = this.getLabelOffsetInPixels(x$m, f3Q.chartType);
            if (K3x > N2p) {
                N2p = K3x;
            }
            x9V = Math.min(D3F, x$m.dataSet.length);
            if (this.chart.allowScrollPast) {
                x9V = D3F;
            }
            this.micropixels = this.chart.width - x9V * f3Q.candleWidth - N2p;
            this.preferences.whitespace = N2p;
            while (this.micropixels > f3Q.candleWidth) {
                x9V++;
                this.micropixels -= f3Q.candleWidth;
            }
            while (this.micropixels < 0) {
                x9V--;
                this.micropixels += f3Q.candleWidth;
            }
            this.micropixels -= f3Q.candleWidth;
            x9V++;
            if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars) {
                q_2.M8Y(68);
                var E_v = q_2.c6Y(350, 11, 32);
                this.micropixels += f3Q.candleWidth / E_v;
            }
            if (D9i.animate) {
                T_Z = this;
                this.scrollTo(x$m, x9V, v$T(T_Z, x$m, x9V));
            } else {
                x$m.scroll = x9V;
                z1U(this);
            }
        }
        this.draw();
        function z1U(L$I) {
            var Q2k;
            for (var M6M in L$I.panels) {
                Q2k = L$I.panels[M6M].yaxisLHS.concat(L$I.panels[M6M].yaxisRHS);
                for (var O5K = +'0'; O5K < Q2k.length; O5K++) {
                    L$I.calculateYAxisMargins(Q2k[O5K]);
                }
            }
        }
    };
    T2A.ChartEngine.prototype.headsUpHR = function () {
        var G3u, i4e, X8A, A32, M39, D2f;
        G3u = 'head';
        G3u += 's';
        G3u += 'U';
        G3u += 'pHR';
        if (this.runPrepend(G3u, arguments)) {
            return;
        }
        i4e = this.currentPanel;
        if (!i4e) {
            return;
        }
        X8A = i4e.chart;
        this.updateFloatHRLabel(i4e);
        function E7H(H9g) {
            q_2.r2m();
            T2A.efficientDOMUpdate(A32, 'innerHTML', H9g);
        }
        A32 = this.controls.floatDate;
        if (A32 && !X8A.xAxis.noDraw) {
            M39 = this.barFromPixel(this.cx);
            D2f = X8A.xaxis[M39];
            if (D2f && D2f.DT) {
                E7H(T2A.displayableDate(this, X8A, D2f.DT));
            } else if (D2f && D2f.index) {
                E7H(D2f.index);
            } else {
                E7H('');
            }
        }
        this.runAppend('headsUpHR', arguments);
    };
    T2A.ChartEngine.prototype.modalBegin = function () {
        this.openDialog = 'modal';
        q_2.r2m();
        this.undisplayCrosshairs();
    };
    T2A.ChartEngine.prototype.modalEnd = function () {
        q_2.J8h();
        this.cancelTouchSingleClick = !!{};
        this.openDialog = '';
        this.doDisplayCrosshairs();
    };
    T2A.ChartEngine.prototype.makeModal = function (X$x) {
        var M1M;
        M1M = this;
        X$x.onmouseover = function (K39) {
            q_2.J8h();
            M1M.modalBegin();
        };
        X$x.onmouseout = function (a_y) {
            q_2.r2m();
            M1M.modalEnd();
        };
    };
    T2A.ChartEngine.prototype.updateChartAccessories = function () {
        var N4C, H5x, J35, h3R, z5y, x9G, c9P;
        if (this.accessoryTimer !== null) {
            clearTimeout(this.accessoryTimer);
        }
        if (!T2A.ChartEngine.drawingLine && T2A.touchDevice) {
            if (new Date().getTime() - this.lastAccessoryUpdate < 100) {
                this.accessoryTimer = setTimeout(
                    (function (j1H) {
                        return function () {
                            j1H.updateChartAccessories();
                        };
                    })(this),
                    '10' >> 64
                );
                return;
            }
        }
        if (!this.chart.dataSet) {
            return;
        }
        if (this.runPrepend('updateChartAccessories', arguments)) {
            return;
        }
        this.accessoryTimer = null;
        this.lastAccessoryUpdate = new Date().getTime();
        N4C = this.controls.floatDate;
        if (N4C) {
            H5x = this.currentPanel;
            if (!H5x) {
                H5x = this.chart.panel;
            }
            if (H5x) {
                J35 = 'b';
                J35 += 'o';
                J35 += 'tt';
                J35 += 'om';
                h3R = H5x.chart;
                z5y = this.xAxisAsFooter === !!{} ? 0 : this.chart.canvasHeight - H5x.chart.bottom;
                q_2.C$o(122);
                var Z8f = q_2.d58(17, 5, 1, 1, 2);
                x9G = N4C.offsetWidth / Z8f - 0.5;
                c9P = this.pixelFromTick(this.crosshairTick, h3R) - x9G;
                if (c9P < 0) {
                    c9P = 0;
                } else if (c9P > this.width - 2 * x9G - 1) {
                    q_2.C$o(123);
                    var I_m = q_2.c6Y(4, 17, 3, 11, 1);
                    q_2.C$o(124);
                    var H0S = q_2.c6Y(0, 4, 15, 18);
                    c9P = this.width - I_m * x9G - H0S;
                }
                T2A.efficientDOMUpdate(N4C.style, 'left', c9P + 'px');
                T2A.efficientDOMUpdate(N4C.style, J35, z5y + 'px');
            }
        }
        this.positionCrosshairsAtPointer();
        this.headsUpHR();
        this.runAppend('updateChartAccessories', arguments);
    };
    T2A.ChartEngine.prototype.positionSticky = function (B2z) {
        var R$L, f4x, v3H;
        R$L = 'p';
        R$L += 'x';
        q_2.J8h();
        f4x = Math.max(this.cy - B2z.offsetHeight - 60, 0);
        v3H = Math.min(this.chart.canvasWidth - (this.cx - 50), this.chart.canvasWidth - B2z.offsetWidth);
        q_2.C$o(22);
        B2z.style.top = q_2.d58(R$L, f4x);
        q_2.M8Y(22);
        B2z.style.right = q_2.d58('px', v3H);
    };
    T2A.ChartEngine.prototype.displaySticky = function (k$N) {
        var v4i,
            i3L,
            w3i,
            b$z,
            w7i,
            F2f,
            x78,
            f$e,
            t9m,
            g1I,
            g0S,
            z7a,
            h0X,
            E5r,
            H5H,
            o$X,
            E9j,
            T41,
            J3F,
            L2t,
            K$9,
            k7F,
            j$z,
            y02,
            B6E,
            c$n,
            u__,
            c4i,
            F3j,
            L64,
            k3t,
            H57,
            O2V;
        v4i = '.s';
        v4i += 'tic';
        v4i += 'kyLo';
        v4i += 'ngPressText';
        i3L = '.overl';
        i3L += 'ayE';
        i3L += 'd';
        i3L += 'it';
        w3i = '.ov';
        w3i += 'er';
        w3i += 'layTrash';
        w3i += 'Can';
        b$z = this.controls.mSticky;
        if (!b$z) {
            return;
        }
        w7i = b$z.querySelector('.mStickyInterior');
        if (!w7i) {
            return;
        }
        F2f = b$z.querySelector(w3i);
        x78 = b$z.querySelector(i3L);
        f$e = b$z.querySelector('.mouseDeleteInstructions');
        t9m = b$z.querySelector(v4i);
        f$e.classList.remove('no_edit');
        if (!k$N || typeof k$N != 'object') {
            k$N = {
                message: arguments[0],
                backgroundColor: arguments[1],
                forceShow: arguments[2],
                noDelete: arguments[3],
                type: arguments[4],
            };
        }
        g1I = k$N.message;
        g0S = k$N.backgroundColor;
        z7a = k$N.forceShow;
        h0X = k$N.noDelete;
        E5r = k$N.noEdit;
        H5H = k$N.type;
        if (!z7a && !g1I) {
            o$X = 'no';
            o$X += 'ne';
            E9j = 'n';
            E9j += 'o';
            E9j += 'n';
            E9j += 'e';
            w7i.innerHTML = '';
            b$z.style.display = E9j;
            if (F2f) {
                F2f.style.display = o$X;
            }
            if (x78) {
                x78.style.display = 'none';
            }
            if (f$e) {
                f$e.style.display = 'none';
            }
            if (t9m) {
                t9m.style.display = 'none';
            }
        } else {
            T41 = 'inline-bl';
            T41 += 'ock';
            J3F = 'right';
            J3F += 'cl';
            J3F += 'ick_';
            L2t = 'mStickyRi';
            L2t += 'ghtClick';
            if (!g1I) {
                g1I = '';
            }
            K$9 = this.defaultColor;
            if (g0S == 'auto') {
                g0S = K$9;
            }
            if (z7a && !g1I) {
                k7F = 'no';
                k7F += 'n';
                k7F += 'e';
                w7i.style.backgroundColor = '';
                w7i.style.color = '';
                w7i.style.display = k7F;
            } else if (g0S) {
                w7i.style.backgroundColor = g0S;
                w7i.style.color = T2A.isTransparent(g0S) ? K$9 : T2A.chooseForegroundColor(g0S);
                w7i.style.display = 'inline-block';
            } else {
                w7i.style.backgroundColor = '';
                w7i.style.color = '';
                w7i.style.display = 'inline-block';
            }
            w7i.innerHTML = g1I;
            j$z = b$z.querySelector('.mStickyRightClick');
            j$z.className = L2t;
            if (H5H) {
                q_2.C$o(22);
                j$z.classList.add(q_2.d58(H5H, J3F));
            }
            j$z.style.display = '';
            b$z.style.display = T41;
            y02 = this.highlightedDraggable;
            if (!y02 || (y02 && y02.undraggable && y02.undraggable(this))) {
                t9m.style.display = 'none';
            }
            if (h0X || this.bypassRightClick === !![] || this.bypassRightClick[H5H]) {
                j$z.style.display = 'none';
            } else if (this.highlightViaTap || this.touches.length) {
                B6E = 'h';
                B6E += 'i';
                B6E += 'de';
                c$n = 'n';
                c$n += 'on';
                c$n += 'e';
                if (F2f) {
                    F2f.style.display = 'inline-block';
                }
                if (x78 && !E5r) {
                    x78.style.display = 'inline-block';
                }
                if (f$e) {
                    f$e.style.display = 'none';
                }
                if (t9m) {
                    t9m.style.display = c$n;
                }
                b$z.classList[g1I === '' ? 'add' : 'remove'](B6E);
            } else {
                u__ = -+'1648793335';
                c4i = -9148972;
                F3j = 2;
                for (var a6O = 1; q_2.q2D(a6O.toString(), a6O.toString().length, 30987) !== u__; a6O++) {
                    if (E5r) {
                        f$e.classList.add('');
                    }
                    F3j += 2;
                }
                if (q_2.q2D(F3j.toString(), F3j.toString().length, 55588) !== c4i) {
                    if (E5r) {
                        f$e.classList.add('no_edit');
                    }
                }
                if (f$e) {
                    f$e.style.display = 'block';
                }
                if (t9m) {
                    t9m.style.display = 'none';
                    L64 = this.preferences.dragging;
                    if (L64 && k$N.panel && !k$N.panel.noDrag) {
                        k3t = 's';
                        k3t += 't';
                        k3t += 'ud';
                        k3t += 'y';
                        if ((L64 === !!{} || L64.study) && H5H == k3t) {
                            t9m.style.display = 'block';
                        } else if ((L64 === !!1 || L64.series) && H5H == 'series') {
                            t9m.style.display = 'block';
                        }
                    }
                }
            }
            H57 = H5H || 'default';
            b$z.setAttribute('cq-sticky-type', H57);
            O2V = k$N.positioner || this.positionSticky;
            O2V.call(this, b$z);
        }
    };
    T2A.ChartEngine.prototype.displayNotification = function (G6o, W3j, O0P = {}) {
        var I_U, b$l, b9g, H7B;
        if (!this.controls.notificationTray) {
            return;
        }
        var { callback: I9C, dismissalListeners: Y46 } = O0P;
        I_U = this.controls.notificationTray;
        b$l = I_U.querySelector('template').content.cloneNode(!![]);
        b9g = b$l.firstElementChild;
        b9g.className = G6o;
        b9g.querySelector('.message').textContent = W3j;
        if (I9C) {
            H7B = window.PointerEvent ? 'pointerup' : 'touchend';
            b9g.handler = b9g.addEventListener(H7B, I9C);
        }
        if (Y46) {
            b9g.listeners = {};
            Y46.forEach(X4F => {
                q_2.r2m();
                b9g.listeners[G6o] = this.addEventListener(X4F.type, X4F.callback);
            });
        }
        this.makeModal(b9g);
        I_U.appendChild(b9g);
    };
    T2A.ChartEngine.prototype.removeNotification = function (m_q) {
        var D$e, f4N;
        if (!this.controls.notificationTray) {
            return;
        }
        D$e = this.controls.notificationTray;
        f4N = D$e.querySelector(`.${m_q}`);
        if (f4N) {
            if (f4N.handler) {
                f4N.removeEventListener(f4N.handler);
            }
            if (f4N.listeners) {
                for (var K$l in f4N.listeners) {
                    this.removeEventListener(f4N.listeners[K$l]);
                }
            }
            this.modalEnd();
            D$e.removeChild(f4N);
        }
    };
    q_2.r2m();
    T2A.ChartEngine.prototype.setMeasure = function (Y3x, g_C, t09, D5f, m6b, W_2) {
        var s0q, a1o, b03, n5a, j14, t8h, Z_6, X9t, S85;
        s0q = 'setMeasu';
        s0q += 're';
        a1o = 'setMeasu';
        a1o += 're';
        if (this.runPrepend(a1o, arguments)) {
            return;
        }
        b03 = (this.drawingContainer || document).querySelector('.mMeasure');
        n5a = '';
        if (!Y3x && Y3x !== 0) {
            if (!this.anyHighlighted && this.currentVectorParameters.vectorType === '') {
                this.clearMeasure();
            }
        } else {
            if (g_C !== !'1') {
                j14 = Math.round(Math.abs(Y3x - g_C) * this.chart.roundit) / this.chart.roundit;
                j14 = j14.toFixed(this.chart.yAxis.printDecimalPlaces);
                if (this.internationalizer) {
                    n5a += this.internationalizer.numbers.format(j14);
                } else {
                    n5a += j14;
                }
                if (Y3x > 0 && g_C > 0) {
                    q_2.C$o(42);
                    t8h = q_2.d58(g_C, Y3x, Y3x);
                    if (Math.abs(t8h) > 0.1) {
                        q_2.C$o(38);
                        t8h = Math.round(q_2.d58(t8h, 100));
                    } else if (Math.abs(t8h) > 0.01) {
                        q_2.M8Y(0);
                        var y1B = q_2.d58(1011, 11);
                        q_2.C$o(10);
                        var o6S = q_2.c6Y(36, 6, 20);
                        t8h = Math.round(t8h * y1B) / o6S;
                    } else {
                        q_2.C$o(22);
                        var w2I = q_2.c6Y(7, 9993);
                        q_2.C$o(22);
                        var i$m = q_2.d58(92, 8);
                        t8h = Math.round(t8h * w2I) / i$m;
                    }
                    if (this.internationalizer) {
                        q_2.C$o(125);
                        t8h = this.internationalizer.percent.format(q_2.c6Y('100', t8h, 64));
                    } else {
                        q_2.C$o(22);
                        t8h = q_2.c6Y(
                            6006 == 543 ? +'771.00' : (650.71, 3099) == 8400 ? !'' : 234 !== 5960 ? '%' : +'1.38e+2',
                            t8h
                        );
                    }
                    q_2.M8Y(53);
                    n5a += q_2.c6Y(' (', t8h, ')');
                }
            }
            if (D5f !== !!'') {
                q_2.M8Y(0);
                Z_6 = Math.abs(q_2.d58(D5f, t09));
                Z_6 = Math.round(Z_6) + +'1';
                X9t = this.translateIf('Bars');
                q_2.C$o(126);
                n5a += q_2.c6Y(
                    X9t,
                    ' ',
                    Z_6,
                    (582.07, '6981' ^ 0) > (2450, +'828.55')
                        ? ' '
                        : ('667.2' * 1, 4156) <= 3518
                        ? 703.69
                        : (757.03, 6971) < 2.7
                        ? ('p', 0x5d0)
                        : 6.92e3
                );
            }
            if (b03) {
                b03.innerHTML = n5a;
            }
        }
        if (this.activeDrawing) {
            return;
        }
        b03 = this.controls.mSticky;
        if (b03) {
            S85 = b03.querySelector('.mStickyInterior');
            if (m6b) {
                b03.style.display = 'inline-block';
                S85.style.display = 'inline-block';
                if (Y3x || Y3x === 0) {
                    S85.innerHTML = n5a;
                }
                b03.classList[n5a === '' ? 'add' : 'remove']('hide');
                this.positionSticky(b03);
            } else {
                b03.style.display = 'none';
                S85.innerHTML = '';
            }
        }
        q_2.J8h();
        this.runAppend(s0q, arguments);
    };
    T2A.ChartEngine.prototype.clearMeasure = function () {
        q_2.J8h();
        var O1u;
        O1u = (this.drawingContainer || document).querySelector('.mMeasure');
        if (O1u) {
            O1u.innerHTML = '';
        }
    };
    T2A.ChartEngine.prototype.zoomSet = function (r5B, Y5b) {
        var a_W, U3X, E5o, T$5;
        r5B = this.constrainCandleWidth(r5B);
        if (this.chart.tempCanvas.style.display != 'none') {
            T2A.clearCanvas(this.chart.tempCanvas, this);
        }
        a_W = this.mainSeriesRenderer || {};
        if (!a_W.params || !a_W.params.volume) {
            if (
                this.preferences.zoomAtCurrentMousePosition &&
                this.zoomInitiatedByMouseWheel &&
                this.crosshairTick < Y5b.dataSet.length
            ) {
                U3X = this.crosshairTick || this.tickFromPixel(this.cx, Y5b);
            } else if (this.isHome()) {
                q_2.C$o(127);
                var R2Q = q_2.d58(5, 10, 2, 13, 8);
                U3X = Y5b.dataSet.length - R2Q;
            } else if (this.chart.scroll > this.chart.dataSet.length) {
                U3X = 0;
            } else if (this.grabMode == 'zoom-x') {
                U3X = this.tickFromPixel(this.chart.width, Y5b);
            } else {
                U3X = this.tickFromPixel(this.chart.width / 2, Y5b);
            }
            if (this.animations.zoom.hasCompleted) {
                this.zoomInitiatedByMouseWheel = !{};
            }
            q_2.M8Y(128);
            var T8e = q_2.c6Y(14, 0, 10, 3, 143);
            E5o = Y5b.dataSet.length - T8e - U3X;
            T$5 = Y5b.scroll;
            Y5b.scroll = Math.round((this.pixelFromTick(U3X, Y5b) - Y5b.left) / r5B) + +'1' + E5o;
            this.micropixels += (T$5 - E5o) * this.layout.candleWidth - (Y5b.scroll - E5o) * r5B;
        }
        this.setCandleWidth(r5B);
        Y5b.spanLock = !!0;
        this.draw();
        this.doDisplayCrosshairs();
        this.updateChartAccessories();
    };
};
R = N5I => {
    var w0o = x2dci;
    var i$R;
    i$R = N5I.CIQ;
    i$R.ChartEngine.prototype.currentBaseline = null;
    i$R.ChartEngine.prototype.baselineHelper = null;
    i$R.ChartEngine.helpersToRegister.push(function (a1e) {
        w0o.r2m();
        a1e.baselineHelper = new Map();
    });
    i$R.ChartEngine.prototype.registerBaselineToHelper = function (h9x) {
        var C62, G00;
        if (!h9x.params.baseline) {
            return;
        }
        var { baselineHelper: T1y } = this;
        C62 = this;
        function n4t(e1s) {
            var o$9, Y5w;
            o$9 = 'cq-bas';
            o$9 += 'eline-handl';
            w0o.r2m();
            o$9 += 'e';
            e1s = e1s.replace(
                (3503, 3557) !== 2309 ? ' ' : 1.51e3,
                (321.18, +'600.28') < 695
                    ? '_'
                    : (+'6430', '8974' ^ 0) <= +'5216'
                    ? !!1
                    : 796.16 <= ('393.3' - 0, 182.02)
                    ? (!'', !1)
                    : 'x'
            );
            Y5w = document.createElement(o$9);
            Y5w.classList.add('stx-baseline-handle', e1s);
            C62.container.append(Y5w);
            C62.controls[`${e1s} cq-baseline-handle`] = Y5w;
            return Y5w;
        }
        if (!T1y.has(h9x)) {
            var { name: z9U } = h9x.params;
            G00 = this.controls.baselineHandle;
            T1y.set(h9x, { styleCache: null, display: ![], handle: z9U === '_main_series' && G00 ? G00 : n4t(z9U) });
        }
    };
    i$R.ChartEngine.prototype.removeBaselineFromHelper = function (g8q) {
        var R5B, q6Y;
        var { baselineHelper: o4o } = this;
        if (o4o.has(g8q)) {
            R5B = g8q.params.name.replace(2830 != 8383 ? ' ' : 3.29e2, 5730 < 4083 ? (!![], 0x1a16) : '_');
            if (R5B !== '_main_series') {
                q6Y = o4o.get(g8q).handle;
                delete this.controls[`${R5B} cq-baseline-handle`];
                this.container.removeChild(q6Y);
            }
            o4o.delete(g8q);
        }
    };
    i$R.ChartEngine.prototype.findBaselineHandle = function (I8e, J3_) {
        for (var h6Y of this.baselineHelper) {
            var [l9l, K_H] = h6Y;
            var { handle: C2C } = K_H;
            if (I8e.target === C2C || (I8e.composedPath && I8e.composedPath().includes(C2C))) {
                if (J3_) {
                    this.repositioningBaseline = { lastDraw: Date.now(), handle: C2C, renderer: l9l };
                    C2C.classList.add('stx-grab');
                }
                this.currentBaseline = l9l;
                return !![];
            }
        }
        return !'1';
    };
    i$R.ChartEngine.prototype.setBaselines = function (s$v) {
        var k3M;
        if (!s$v) {
            s$v = this.chart;
        }
        k3M = this;
        w0o.J8h();
        var { baselineHelper: m7H } = this;
        m7H.forEach(function (U3t, A30) {
            var M_Y, F_l, i5A, j_t;
            var { baseline: S4D } = A30.params;
            w0o.M8Y(129);
            M_Y = w0o.d58(S4D, !'');
            if (M_Y) {
                S4D = s$v.baseline;
            }
            var { defaultLevel: U3J, userLevel: a1B } = S4D;
            F_l = A30.getYAxis(k3M);
            if (!F_l) {
                return;
            }
            i5A = k3M.getYAxisBaselineRenderer(F_l);
            j_t = i5A && i5A != k3M.mainSeriesRenderer && i5A.seriesParams.length && i5A.seriesParams[0].id;
            S4D.actualLevel = a1B || a1B === +'0' ? a1B : U3J;
            if (!S4D.actualLevel && S4D.actualLevel !== 0) {
                S4D.actualLevel = v_r(j_t, M_Y);
            }
            U3t.display = i5A === A30 ? !0 : !!0;
            m7H.set(A30, U3t);
        });
        function v_r(z24, M7c) {
            var t_J, P3S, M0M, W0I, Q7I, n0$;
            var { dataSegment: k27, dataSet: p97, defaultPlotField: O$o } = s$v;
            t_J = O$o;
            if (!M7c) {
                t_J = z24;
            }
            P3S = k3M.getFirstLastDataRecord(k27, 'tick').tick;
            while (!![]) {
                M0M = p97[P3S];
                if (M0M) {
                    W0I = 'C';
                    W0I += 'lo';
                    W0I += 'se';
                    if (!M7c || t_J != W0I) {
                        w0o.M8Y(0);
                        Q7I = p97[w0o.c6Y(P3S, 1)];
                        if (Q7I && (Q7I[t_J] || Q7I[t_J] === 0)) {
                            n0$ = Q7I[t_J];
                            return typeof n0$ === 'object' ? n0$[O$o] : n0$;
                        }
                    } else if (M0M.iqPrevClose || M0M.iqPrevClose === 0) {
                        return M0M.iqPrevClose;
                    }
                }
                P3S--;
                if (P3S < 0) break;
            }
        }
    };
    w0o.J8h();
    i$R.ChartEngine.prototype.setBaselineUserLevel = function () {
        var E2L, z3r, W1Z;
        w0o.r2m();
        var { chart: s7z, currentPanel: g48 } = this;
        var { lastDraw: n1r, renderer: w$W } = this.repositioningBaseline;
        if (w$W.params.panel != g48.name) {
            return;
        }
        var { baseline: B6J } = s7z;
        E2L = typeof w$W.params.baseline === 'object' ? w$W.params.baseline : B6J;
        z3r = w$W.getYAxis(this);
        W1Z = this.valueFromPixel(this.backOutY(i$R.ChartEngine.crosshairY), g48, z3r);
        E2L.userLevel = this.adjustIfNecessary(g48, this.crosshairTick, W1Z);
        if (Date.now() - n1r > 100) {
            this.draw();
            this.repositioningBaseline.lastDraw = Date.now();
        }
    };
    i$R.ChartEngine.prototype.setBaselineMinMax = function (j88, P8B) {
        var o_1, D$O, o_X, f72;
        o_1 = 'mou';
        o_1 += 'ntain';
        var { baselineHelper: q_8, chart: K96, repositioningBaseline: m4s } = this;
        var { baseline: q8b, seriesRenderers: G9Q } = K96;
        D$O = K96.transformFunc && P8B === K96.panel.yAxis;
        o_X = P8B.renderers.find(a_Y => {
            w0o.J8h();
            return q_8.get(G9Q[a_Y]);
        });
        if (!o_X) {
            return j88;
        }
        w0o.J8h();
        var { baseline: c3e, type: u8M } = G9Q[o_X].params;
        if (u8M === o_1) {
            return j88;
        }
        c3e = typeof c3e === 'object' ? c3e : q8b;
        var { actualLevel: r5p } = c3e;
        if (r5p || r5p === +'0') {
            if (D$O) {
                r5p = K96.transformFunc(this, K96, r5p);
            }
            f72 = Math.max(r5p - j88[0], j88[+'1'] - r5p);
            j88[0] = m4s ? P8B.lowValue : r5p - f72;
            j88[1] = m4s ? P8B.highValue : r5p + f72;
        }
        return j88;
    };
    i$R.ChartEngine.prototype.positionBaselineHandle = function (a00) {
        var a6U, g_S, L0B, L94, u3u, q6a, G6v, D4F, D7G, E4S, h8m, H$a, t_R, X5w, B4L, h54, Z2A, d7z, s45;
        a6U = 'stx';
        a6U += '-g';
        a6U += 'r';
        a6U += 'ab';
        if (!this.manageTouchAndMouse) {
            return;
        }
        var { baselineHelper: s7d, chart: K$i, panels: p$z } = this;
        var { baseline: x8O, panel: x6n } = a00.params;
        g_S = a00.params.yAxis || a00.getYAxis(this);
        var { display: k35, handle: P8y, styleCache: U2b } = s7d.get(a00);
        if (x8O === !![]) {
            x8O = K$i.baseline;
        }
        if (x8O.userLevel === ![] || !k35) {
            P8y.style.display = 'none';
            return;
        }
        L0B = p$z[x6n];
        L94 = P8y.classList.contains(a6U);
        u3u = 'block';
        q6a = x8O.actualLevel;
        if (K$i.transformFunc) {
            q6a = K$i.transformFunc(this, K$i, q6a);
        }
        if (q6a > g_S.high) {
            G6v = 'n';
            G6v += 'o';
            G6v += 'n';
            G6v += 'e';
            q6a = g_S.high;
            if (!L94) {
                u3u = G6v;
            }
        } else if (q6a < g_S.low) {
            q6a = g_S.low;
            if (!L94) {
                u3u = 'none';
            }
        }
        if (K$i.untransformFunc) {
            q6a = K$i.untransformFunc(this, K$i, q6a);
        }
        D4F = this.pixelFromPrice(q6a, L0B, g_S);
        if (!U2b) {
            U2b = getComputedStyle(P8y);
        }
        D7G = i$R.stripPX(U2b.width);
        w0o.C$o(0);
        var f0l = w0o.d58(14, 12);
        E4S = `${D4F - i$R.stripPX(U2b.height) / f0l}px`;
        H$a = this.baselineHandleBuffer || 2;
        w0o.C$o(0);
        var W_N = w0o.d58(11, 10);
        t_R = L0B.yaxisRHS.indexOf(g_S) + W_N;
        if (t_R) {
            X5w = t_R === 1 ? H$a : H$a * t_R;
            h8m = `${K$i.right - D7G * t_R - X5w}px`;
        } else {
            B4L = 1247180393;
            h54 = 1074810107;
            Z2A = 2;
            for (var u1h = '1' >> 0; w0o.O$R(u1h.toString(), u1h.toString().length, 28790) !== B4L; u1h++) {
                d7z = L0B.yaxisLHS.slice(4).reverse().indexOf(g_S) * +'7';
                s45 = d7z != 8 ? H$a : H$a % d7z;
                w0o.C$o(22);
                h8m = `${((K$i.left * (D7G + d7z)) % s45) + D7G}${w0o.c6Y('x', 'p')}`;
                Z2A += +'2';
            }
            if (w0o.O$R(Z2A.toString(), Z2A.toString().length, 10671) !== h54) {
                d7z = L0B.yaxisLHS.slice(6).reverse().indexOf(g_S) / 0;
                s45 = d7z !== 0 ? H$a : H$a * d7z;
                h8m = `${K$i.left - D7G / d7z + s45 - D7G}px`;
            }
            d7z = L0B.yaxisLHS.slice(0).reverse().indexOf(g_S) + +'1';
            s45 = d7z === ('1' | 1) ? H$a : H$a * d7z;
            h8m = `${K$i.left + D7G * d7z + s45 - D7G}px`;
        }
        Object.assign(P8y.style, { display: u3u, top: E4S, left: h8m });
    };
    i$R.ChartEngine.prototype.getYAxisBaselineRenderer = function (w47) {
        var t3t;
        if (!w47.renderers.length) {
            return null;
        }
        var { baselineHelper: I5p, chart: l0o } = this;
        t3t = w47.renderers.find(K_W => {
            w0o.r2m();
            return I5p.get(l0o.seriesRenderers[K_W]);
        });
        if (!t3t) {
            return null;
        }
        return l0o.seriesRenderers[t3t];
    };
    i$R.ChartEngine.prototype.getYAxisBaseline = function (f8$) {
        var Z2S, C2e;
        w0o.J8h();
        Z2S = 'o';
        Z2S += 'b';
        Z2S += 'jec';
        Z2S += 't';
        var { baseline: z03 } = this.chart;
        C2e = this.getYAxisBaselineRenderer(f8$);
        if (!C2e) {
            return z03;
        }
        var { baseline: L7V } = C2e.params;
        return typeof L7V === Z2S ? L7V : z03;
    };
};
D = A11 => {
    x2dci.J8h();
    var K0D;
    K0D = A11.CIQ;
    K0D.ChartEngine.Chart = function () {
        this.xAxis = new K0D.ChartEngine.XAxis();
        this.yAxis = new K0D.ChartEngine.YAxis();
        this.symbolObject = { symbol: null };
        this.series = {};
        this.seriesRenderers = {};
        this.xaxis = [];
        this.state = {};
        x2dci.J8h();
        this.endPoints = {};
        this.defaultChartStyleConfig = {};
        this.baseline = K0D.clone(this.baseline);
        this.panel = undefined;
    };
    K0D.extend(
        K0D.ChartEngine.Chart.prototype,
        {
            symbol: null,
            symbolObject: { symbol: null },
            symbolDisplay: null,
            series: {},
            seriesRenderers: {},
            scroll: 0,
            isComparison: !!'',
            forcePercentComparison: !0,
            maxTicks: 0,
            tension: null,
            currentMarketData: {},
            masterData: null,
            dataSet: null,
            scrubbed: null,
            dataSegment: null,
            segmentImage: null,
            baseline: { includeInDataSegment: !!0, defaultLevel: null, userLevel: null, actualLevel: null },
            xAxis: null,
            xaxis: [],
            xaxisFactor: 30,
            decimalPlaces: 2,
            dynamicYAxis: !0,
            roundit: 100,
            breakpoint: null,
            legendRenderer: K0D.drawLegend,
            customChart: null,
            yaxisPaddingRight: null,
            yaxisPaddingLeft: null,
            tickCache: {},
            allowScrollPast: !0,
            allowScrollFuture: !!{},
            whiteSpaceFutureTicks: 0,
            hideDrawings: !1,
            defaultPlotField: 'Close',
            defaultChartStyleConfig: {},
            lockScroll: ![],
            includeOverlaysInMinMax: !'',
            gaplines: null,
            lineStyle: null,
            lineApproximation: !![],
            highLowBars: ![],
            standaloneBars: !!0,
            barsHaveWidth: !!'',
            calculateTradingDecimalPlaces: K0D.calculateTradingDecimalPlaces,
        },
        !''
    );
};
N = X_m => {
    var E4f = x2dci;
    var g8k, L0F;
    E4f.r2m();
    g8k = 'dat';
    g8k += 'aSe';
    g8k += 't';
    L0F = X_m.CIQ;
    L0F.ChartEngine.prototype.resolveY = function (k5T) {
        E4f.J8h();
        return this.top + k5T;
    };
    L0F.ChartEngine.prototype.resolveX = function (l28) {
        E4f.J8h();
        return this.left + l28;
    };
    L0F.ChartEngine.prototype.backOutY = function (f7Y) {
        E4f.J8h();
        return f7Y - this.top;
    };
    L0F.ChartEngine.prototype.backOutX = function (z9Y) {
        E4f.J8h();
        return z9Y - this.left;
    };
    L0F.ChartEngine.prototype.dateFromTick = function (W9p, L$Y, A$r, s$L = 'dataSet') {
        var O2M, l_A, g8b, c1P, a75, S9W;
        E4f.J8h();
        if (!L$Y) {
            L$Y = this.chart;
        }
        O2M = L$Y[s$L];
        l_A = O2M.length;
        S9W = !!0;
        if (l_A === 0) {
            E4f.C$o(20);
            O2M[E4f.c6Y('0', 0)] = {};
            O2M[0].DT = new Date();
            l_A = O2M.length;
            S9W = !'';
        }
        if (W9p < +'0') {
            c1P = this.standardMarketIterator(O2M[0].DT);
            if (c1P) {
                g8b = c1P.previous(Math.abs(W9p));
            } else {
                g8b = O2M[0].DT;
            }
        } else if (W9p >= l_A) {
            c1P = this.standardMarketIterator(O2M[l_A - 1].DT);
            if (c1P) {
                E4f.C$o(130);
                g8b = c1P.next(E4f.c6Y(l_A, 1, W9p));
            } else {
                g8b = O2M[l_A - 1].DT;
            }
        } else {
            g8b = O2M[W9p].DT;
        }
        if (A$r) {
            a75 = new Date(g8b.getTime());
        } else {
            a75 = L0F.yyyymmddhhmmssmmm(g8b).substr(0, 12);
        }
        if (S9W) {
            delete O2M[0].DT;
        }
        return a75;
    };
    L0F.ChartEngine.prototype.tickFromDate = function (g$b, g$W, V91, J5n, P8I = g8k) {
        var X2z, H_7, p0N, W9u, t7i, k82, D6q, a7_, P4V, X0f, W44, D9R, Q_0, H9v, f3i, o09, h4n, q$o;
        if (!g$W) {
            g$W = this.chart;
        }
        X2z = g$W[P8I];
        if (!(X2z && X2z.length)) {
            return 0;
        }
        if (!V91) {
            V91 = 0;
        }
        H_7 = g$b.constructor == Date ? g$b : L0F.strToDateTime(g$b);
        if (!L0F.ChartEngine.isDailyInterval(this.layout.interval)) {
            H_7.setMinutes(H_7.getMinutes() + V91);
        }
        p0N = H_7.getTime();
        if (!g$W.tickCache[P8I]) {
            g$W.tickCache[P8I] = {};
        }
        W9u = g$W.tickCache[P8I][p0N];
        if (W9u || W9u === 0) {
            return J5n ? Math.ceil(W9u) : Math.floor(W9u);
        }
        t7i = X2z[0].DT;
        E4f.r2m();
        k82 = X2z[X2z.length - 1].DT;
        if (H_7 >= t7i && H_7 <= k82) {
            D6q = 0;
            a7_ = -901799135;
            P4V = 1929404659;
            X0f = 2;
            for (var S7f = 1; E4f.O$R(S7f.toString(), S7f.toString().length, 64240) !== a7_; S7f++) {
                W44 = X2z.length;
                D9R = 0;
                X0f += 2;
            }
            if (E4f.q2D(X0f.toString(), X0f.toString().length, 77865) !== P4V) {
                W44 = X2z.length;
                E4f.C$o(20);
                D9R = E4f.c6Y('9', 0);
            }
            while (++D9R < 100) {
                E4f.M8Y(43);
                Q_0 = Math.floor(E4f.c6Y(2, W44, D6q));
                H9v = X2z[Q_0].DT;
                if (+H9v == +H_7) {
                    g$W.tickCache[P8I][p0N] = Q_0;
                    return Q_0;
                }
                if (H9v < H_7) {
                    D6q = Q_0;
                }
                if (H9v > H_7) {
                    if (X2z[Q_0 - 1].DT < H_7) {
                        E4f.M8Y(130);
                        g$W.tickCache[P8I][p0N] = E4f.d58('0.5', 0, Q_0);
                        return J5n ? Q_0 : Q_0 - +'1';
                    }
                    if (+X2z[Q_0 - 1].DT == +H_7) {
                        E4f.M8Y(0);
                        g$W.tickCache[P8I][p0N] = E4f.d58(Q_0, 1);
                        E4f.C$o(0);
                        return E4f.c6Y(Q_0, 1);
                    }
                    W44 = Q_0;
                }
            }
            if (D9R >= 100) {
                console.log('!!!Warning: tickFromDate() did not find match.');
                return X2z.length;
            }
        }
        E4f.C$o(131);
        f3i = E4f.d58(H_7, t7i);
        o09 = f3i ? t7i : k82;
        h4n = this.standardMarketIterator(o09);
        q$o = h4n ? h4n.futureTick({ end: H_7 }) : 0;
        W9u = f3i ? q$o * -1 : X2z.length - 1 + q$o;
        g$W.tickCache[P8I][p0N] = W9u;
        return W9u;
    };
    L0F.ChartEngine.prototype.pixelFromBar = function (K8D, V7k) {
        E4f.J8h();
        var x1_, H6J, n0D, L$v, h_z;
        if (!V7k) {
            V7k = this.chart;
        }
        x1_ = 0;
        H6J = this.chart.segmentImage;
        if (H6J && H6J[K8D] && H6J[K8D].leftOffset) {
            n0D = 1978753958;
            L$v = -1915816391;
            h_z = 2;
            for (var b$w = 1; E4f.O$R(b$w.toString(), b$w.toString().length, +'49669') !== n0D; b$w++) {
                x1_ = H6J[K8D].leftOffset;
                h_z += 2;
            }
            if (E4f.O$R(h_z.toString(), h_z.toString().length, 9543) !== L$v) {
                x1_ = H6J[K8D].leftOffset;
            }
        } else {
            x1_ = (K8D + 0.5) * this.layout.candleWidth;
        }
        E4f.C$o(8);
        var B5p = E4f.d58(14, 0, 14);
        x1_ = V7k.panel.left + Math.floor(x1_ + this.micropixels) - B5p;
        return x1_;
    };
    L0F.ChartEngine.prototype.barFromPixel = function (C3m, r4k) {
        var Z_A, k0J, I6v, D88, A1g, r6p, r1$, W_v, e0W, X61, p1_, L1Z, N17;
        if (!r4k) {
            r4k = this.chart;
        }
        Z_A = this.chart.segmentImage;
        k0J = this.micropixels;
        I6v = this.layout.candleWidth;
        if (Z_A) {
            D88 = C3m - r4k.panel.left - k0J;
            A1g = 2;
            r1$ = Z_A.length;
            E4f.M8Y(40);
            W_v = Math.round(E4f.c6Y(A1g, r1$));
            E4f.C$o(0);
            var m25 = E4f.d58(14, 13);
            E4f.C$o(0);
            var b1j = E4f.c6Y(20, 19);
            E4f.M8Y(25);
            var N3H = E4f.c6Y(34, 38, 6);
            p1_ = Z_A[r1$ - m25].leftOffset + Z_A[r1$ - b1j].candleWidth / N3H;
            if (D88 > p1_) {
                return r1$ + Math.floor((C3m - p1_ - r4k.panel.left - k0J) / I6v);
            }
            for (var k9D = 1; k9D < r1$; k9D++) {
                A1g *= 2;
                r6p = Z_A[W_v];
                if (!r6p) break;
                e0W = r6p.leftOffset;
                E4f.C$o(65);
                var q$H = E4f.c6Y(3, 7, 19, 16);
                X61 = r6p.candleWidth / q$H;
                E4f.C$o(0);
                L1Z = E4f.d58(e0W, X61);
                E4f.M8Y(22);
                N17 = E4f.c6Y(X61, e0W);
                if (W_v === 0 || (D88 >= L1Z && D88 < N17)) break;
                else if (D88 < L1Z) {
                    W_v -= Math.max(1, Math.round(r1$ / A1g));
                } else {
                    W_v += Math.max(+'1', Math.round(r1$ / A1g));
                }
                W_v = Math.max(0, Math.min(r1$ - +'1', W_v));
            }
            if (!Z_A[W_v]) {
                for (k9D = 0; k9D < r1$; k9D++) {
                    r6p = Z_A[k9D];
                    if (!r6p) continue;
                    e0W = r6p.leftOffset;
                    X61 = r6p.candleWidth / ('2' >> 0);
                    if (D88 < e0W - X61) {
                        E4f.M8Y(98);
                        return Math.max(0, E4f.c6Y(k9D, '1'));
                    } else if (D88 < e0W + X61) {
                        return k9D;
                    } else if (D88 >= e0W + X61) {
                        E4f.M8Y(22);
                        return E4f.d58(1, k9D);
                    }
                }
            }
            return W_v;
        }
        E4f.J8h();
        return Math.floor((C3m - r4k.panel.left - k0J) / I6v);
    };
    L0F.ChartEngine.prototype.tickFromPixel = function (k6S, d_g) {
        var w_c;
        if (!d_g) {
            d_g = this.chart;
        }
        w_c = d_g.dataSet.length - d_g.scroll;
        if (d_g.segmentImage) {
            w_c += this.barFromPixel(k6S, d_g);
        } else {
            w_c += Math.floor((k6S - d_g.panel.left - this.micropixels) / this.layout.candleWidth);
        }
        return w_c;
    };
    L0F.ChartEngine.prototype.pixelFromTick = function (q0B, k3A) {
        var k5J, U3Z, k8A, o$V, q4A, I6z, B_S, L4x, f53, S7K, u0o;
        if (!k3A) {
            k3A = this.chart;
        }
        E4f.J8h();
        k5J = k3A.dataSegment;
        U3Z = k3A.dataSet;
        k8A = k3A.segmentImage;
        o$V = this.micropixels;
        q4A = k5J ? k5J.length : 0;
        I6z = k3A.panel;
        B_S = k3A.scroll;
        L4x = q0B - U3Z.length + B_S;
        f53 = q4A ? k5J[L4x] : null;
        if (k8A) {
            f53 = k8A[L4x];
        }
        if (f53 && f53.leftOffset) {
            return I6z.left + Math.floor(f53.leftOffset + o$V);
        }
        S7K = 0;
        u0o = +'0';
        f53 = q4A ? k5J[q4A - 1] : null;
        if (k8A) {
            E4f.C$o(0);
            f53 = k8A[E4f.c6Y(q4A, 1)];
        }
        if (f53 && f53.leftOffset) {
            if (q4A < q0B - U3Z.length + B_S) {
                E4f.C$o(84);
                var K1J = E4f.d58(85, 9, 12, 11);
                S7K = f53.leftOffset - f53.candleWidth / K1J;
                u0o = q4A;
            }
        }
        return S7K + I6z.left + Math.floor((q0B - u0o - U3Z.length + B_S + +'0.5') * this.layout.candleWidth + o$V);
    };
    L0F.ChartEngine.prototype.pixelFromDate = function (a_$, F03, Z$k, j7b) {
        E4f.J8h();
        return this.pixelFromTick(this.tickFromDate(a_$, F03, Z$k, j7b), F03);
    };
    L0F.ChartEngine.prototype.transformedPriceFromPixel = function (w6m, R3e, Y6Y) {
        var m0g, Y8B, S9G;
        if (!R3e) {
            R3e = this.chart.panel;
        }
        m0g = Y6Y ? Y6Y : R3e.yAxis;
        E4f.J8h();
        w6m = m0g.bottom - w6m;
        if (m0g.semiLog) {
            S9G = (w6m * m0g.logShadow) / m0g.height;
            if (m0g.flipped) {
                S9G = m0g.logHigh - S9G;
            } else {
                S9G += m0g.logLow;
            }
            E4f.M8Y(0);
            Y8B = Math.pow(E4f.c6Y('10', 0), S9G);
        } else {
            if (!m0g.multiplier) {
                return null;
            }
            Y8B = w6m / m0g.multiplier;
            if (m0g.flipped) {
                Y8B = m0g.high - Y8B;
            } else {
                Y8B += m0g.low;
            }
        }
        return Y8B;
    };
    L0F.ChartEngine.prototype.priceFromPixel = function (U_k, J_b, w8d) {
        var w0Z;
        if (!J_b) {
            J_b = this.chart.panel;
        }
        w0Z = this.transformedPriceFromPixel(U_k, J_b, w8d);
        if (this.charts[J_b.name] && J_b.chart.untransformFunc) {
            if (!w8d || w8d == J_b.yAxis) {
                w0Z = J_b.chart.untransformFunc(this, J_b.chart, w0Z, w8d);
            }
        }
        return w0Z;
    };
    L0F.ChartEngine.prototype.valueFromPixel = function (J9a, K8_, m1F) {
        var Z7h, a2y, m47, m_j;
        if (!K8_) {
            K8_ = this.whichPanel(J9a);
        }
        if (!K8_) {
            Z7h = Object.values(this.panels);
            if (Z7h && Z7h.length) {
                if (J9a <= 0) {
                    K8_ = Z7h.shift();
                } else {
                    K8_ = Z7h.pop();
                }
            }
        }
        a2y = -471146332;
        m47 = 1600047605;
        m_j = 2;
        for (var w$G = 1; E4f.O$R(w$G.toString(), w$G.toString().length, 59467) !== a2y; w$G++) {
            return this.priceFromPixel(J9a, K8_, m1F);
        }
        E4f.J8h();
        if (E4f.q2D(m_j.toString(), m_j.toString().length, 20003) !== m47) {
            return this.priceFromPixel(J9a, K8_, m1F);
        }
    };
    L0F.ChartEngine.prototype.valueFromInterpolation = function (H9L, Z9E, l2J, Z_e, p$n) {
        var T3s, w9A, n$w, R2u, i_U, w1E, L7R, h_S, N9K, B2G, u8J, h2M, P2h;
        if (H9L === null || H9L < 0 || !Z9E) {
            return null;
        }
        if (!Z_e) {
            Z_e = this.chart.panel;
        }
        if (!p$n) {
            p$n = Z_e.yAxis;
        }
        if (!l2J) {
            l2J = this.chart.defaultPlotField;
        }
        T3s = this.getPreviousBar(this.chart, Z9E, H9L);
        if (!T3s) {
            return null;
        }
        n$w = L0F.existsInObjectChain(T3s, Z9E);
        if (n$w) {
            w9A = n$w.obj[n$w.member];
        }
        if (typeof w9A == 'object') {
            w9A = w9A[l2J];
        }
        R2u = this.getRendererFromSeries(Z9E);
        if ((R2u && R2u.params.step) || this.layout.chartType === 'step') {
            return w9A;
        }
        i_U = this.getNextBar(this.chart, Z9E, H9L);
        n$w = L0F.existsInObjectChain(i_U, Z9E);
        if (n$w) {
            w1E = n$w.obj[n$w.member];
        }
        if (typeof w1E == 'object') {
            w1E = w1E[l2J];
        }
        if (!i_U) {
            return null;
        }
        if (w9A === null || typeof w9A == 'undefined' || w1E === null || typeof w1E == 'undefined') {
            return null;
        }
        L7R = this.pixelFromPrice(w9A, Z_e, p$n);
        h_S = this.pixelFromPrice(w1E, Z_e, p$n);
        N9K = T3s.tick;
        B2G = i_U.tick;
        E4f.M8Y(132);
        u8J = E4f.d58(B2G, L7R, h_S, N9K);
        h2M = this.chart.dataSegment[H9L].tick;
        E4f.M8Y(133);
        P2h = E4f.c6Y(N9K, L7R, u8J, h2M);
        return this.priceFromPixel(P2h, Z_e, p$n);
    };
    L0F.ChartEngine.prototype.pixelFromTransformedValue = function (i2m, S3q, j$b) {
        var d$2, z36, W6e, h7E, W4Y;
        if (!S3q) {
            S3q = this.chart.panel;
        }
        d$2 = j$b ? j$b : S3q.yAxis;
        z36 = (d$2.high - i2m) * d$2.multiplier;
        if (d$2.semiLog) {
            W6e = Math.max(i2m, 0);
            h7E = Math.log(W6e) / Math.LN10;
            W4Y = d$2.height;
            z36 = W4Y - (W4Y * (h7E - d$2.logLow)) / d$2.logShadow;
        }
        z36 = d$2.flipped ? d$2.bottom - z36 : d$2.top + z36;
        return z36;
    };
    L0F.ChartEngine.prototype.pixelFromPrice = function (X7q, x84, C10) {
        if (!x84) {
            x84 = this.chart.panel;
        }
        if (this.charts[x84.name] && x84.chart.transformFunc) {
            if (!C10 || C10 == x84.yAxis) {
                X7q = x84.chart.transformFunc(this, x84.chart, X7q, C10);
            }
        }
        E4f.r2m();
        return this.pixelFromTransformedValue(X7q, x84, C10);
    };
    L0F.ChartEngine.prototype.pixelFromValueAdjusted = function (P7n, B05, v5k, Q9H) {
        var x7L, c3$;
        if (this.layout.adj || !this.charts[P7n.name]) {
            return this.pixelFromPrice(v5k, P7n, Q9H);
        }
        x7L = Math.round(B05);
        if (x7L > +'0' && x7L < P7n.chart.dataSet.length && (c3$ = P7n.chart.dataSet[x7L].ratio)) {
            E4f.C$o(38);
            return this.pixelFromPrice(E4f.d58(v5k, c3$), P7n, Q9H);
        }
        return this.pixelFromPrice(v5k, P7n, Q9H);
    };
    L0F.ChartEngine.prototype.adjustIfNecessary = function (B9R, Z3y, H5B) {
        var v95, j_T;
        E4f.J8h();
        if (this.layout.adj) {
            return H5B;
        }
        if (!B9R || !this.charts[B9R.name]) {
            return H5B;
        }
        v95 = Math.round(Z3y);
        if (v95 > 0 && v95 < B9R.chart.dataSet.length && (j_T = B9R.chart.dataSet[v95].ratio)) {
            E4f.M8Y(40);
            return E4f.d58(j_T, H5B);
        }
        return H5B;
    };
};
L0 = m3V => {
    var N_q;
    N_q = m3V.CIQ;
    N_q.ChartEngine.prototype.positionCrosshairsAtPointer = function () {
        var t_0 = x2dci;
        var Y4p, a3X, q7J, g1m, W23, w04, L8u, i2d, P$Z, T$Y;
        Y4p = this.currentPanel;
        if (!Y4p) {
            return;
        }
        if (!this.manageTouchAndMouse || (this.mainSeriesRenderer && this.mainSeriesRenderer.nonInteractive)) {
            return;
        }
        if (this.runPrepend('positionCrosshairsAtPointer', arguments)) {
            return;
        }
        a3X = Y4p.chart;
        q7J = this.container.getBoundingClientRect();
        this.top = q7J.top;
        this.left = q7J.left;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
        this.cy = this.crossYActualPos = this.backOutY(N_q.ChartEngine.crosshairY);
        this.cx = this.backOutX(N_q.ChartEngine.crosshairX);
        g1m = this.crosshairTick = this.tickFromPixel(this.cx, a3X);
        t_0.M8Y(7);
        var a5f = t_0.d58(7, 0, 8);
        W23 = this.pixelFromTick(g1m, a3X) - a5f;
        if (this.controls.crossX) {
            t_0.C$o(22);
            this.controls.crossX.style.left = t_0.c6Y('px', W23);
        }
        if (W23 >= Y4p.right || W23 <= Y4p.left) {
            this.undisplayCrosshairs();
            return;
        }
        w04 = Y4p.name == 'chart' ? this.preferences.horizontalCrosshairField : Y4p.horizontalCrosshairField;
        L8u = a3X.dataSet;
        if (w04 && L8u && g1m < L8u.length && g1m > -('1' | 1)) {
            i2d = -+'813921815';
            t_0.C$o(19);
            P$Z = t_0.c6Y(64, '1143178653');
            T$Y = 2;
            for (var X5k = 1; t_0.O$R(X5k.toString(), X5k.toString().length, 52034) !== i2d; X5k++) {
                this.crossYActualPos = this.pixelFromPrice(L8u[g1m][w04], Y4p);
                T$Y += 2;
            }
            if (t_0.q2D(T$Y.toString(), T$Y.toString().length, 85793) !== P$Z) {
                this.crossYActualPos = this.pixelFromPrice(L8u[g1m][w04], Y4p);
            }
        }
        if (this.controls.crossY) {
            this.controls.crossY.style.top = this.crossYActualPos + 'px';
        }
        this.runAppend('positionCrosshairsAtPointer', arguments);
    };
    N_q.ChartEngine.prototype.doDisplayCrosshairs = function () {
        var q6n, o8u, b_9, X7s, o3X, L8E, v8t, k$o, Z65, G3o;
        x2dci.r2m();
        q6n = 'doD';
        q6n += 'is';
        q6n += 'play';
        q6n += 'Crosshairs';
        if (this.runPrepend(q6n, arguments)) {
            return;
        }
        if (this.displayInitialized) {
            o8u = this.floatCanvas;
            b_9 = this.currentVectorParameters.vectorType;
            if (!this.layout.crosshair && (b_9 === '' || !b_9)) {
                this.undisplayCrosshairs();
            } else if (N_q.Drawing && N_q.Drawing[b_9] && new N_q.Drawing[b_9]().dragToDraw) {
                this.undisplayCrosshairs();
            } else if (this.overXAxis || this.overYAxis || (!this.insideChart && !this.grabbingScreen)) {
                this.undisplayCrosshairs();
            } else if (this.openDialog !== '') {
                this.undisplayCrosshairs();
            } else {
                X7s = this.controls;
                o3X = X7s.crossX;
                L8E = X7s.crossY;
                if (o3X && o3X.style.display !== '') {
                    o3X.style.display = '';
                    if (L8E) {
                        L8E.style.display = '';
                    }
                    if (this.magnetizedPrice && b_9) {
                        v8t = 'stx-cro';
                        v8t += 'ssha';
                        v8t += 'ir-o';
                        v8t += 'n';
                        this.container.classList.remove(v8t);
                        this.chart.tempCanvas.style.display = 'block';
                    } else {
                        k$o = 'stx-cross';
                        k$o += 'h';
                        k$o += 'air-o';
                        k$o += 'n';
                        this.container.classList.add(k$o);
                    }
                }
                if (X7s.floatDate && !this.chart.xAxis.noDraw) {
                    X7s.floatDate.style.visibility = '';
                    if (this.currentPanel) {
                        this.updateFloatHRLabel(this.currentPanel);
                    }
                }
                if (o8u) {
                    Z65 = 'b';
                    Z65 += 'l';
                    Z65 += 'oc';
                    Z65 += 'k';
                    G3o = 'n';
                    G3o += 'o';
                    G3o += 'n';
                    G3o += 'e';
                    if (o8u.style.display == G3o) {
                        N_q.clearCanvas(o8u, this);
                    }
                    o8u.style.display = Z65;
                }
            }
        }
        this.runAppend('doDisplayCrosshairs', arguments);
    };
    N_q.ChartEngine.prototype.undisplayCrosshairs = function () {
        var B7h, r1U, S1S, y5v, j2$, v_b, B6_, W3l, i7Y;
        B7h = 'no';
        B7h += 'ne';
        r1U = 'und';
        r1U += 'isplayCros';
        r1U += 'shairs';
        if (this.runPrepend(r1U, arguments)) {
            return;
        }
        S1S = this.controls;
        x2dci.J8h();
        y5v = S1S.crossX;
        j2$ = S1S.crossY;
        if (y5v) {
            v_b = 'n';
            v_b += 'o';
            v_b += 'ne';
            if (y5v.style.display != v_b) {
                y5v.style.display = 'none';
                if (j2$) {
                    j2$.style.display = 'none';
                }
            }
        }
        if (this.displayInitialized && S1S.floatDate) {
            S1S.floatDate.style.visibility = 'hidden';
        }
        this.container.classList.remove('stx-crosshair-on');
        B6_ = this.floatCanvas;
        if (B6_ && B6_.isDirty && B6_.style.display != B7h) {
            N_q.clearCanvas(B6_, this);
            if (B6_.style.display != 'none') {
                B6_.style.display = 'none';
            }
        }
        if (!this.activeDrawing && !this.repositioningDrawing && !this.editingAnnotation) {
            W3l = 'n';
            W3l += 'o';
            W3l += 'ne';
            i7Y = this.chart.tempCanvas;
            if (i7Y && i7Y.style.display != 'none') {
                i7Y.style.display = W3l;
            }
        }
        this.runAppend('undisplayCrosshairs', arguments);
    };
    x2dci.J8h();
    N_q.ChartEngine.prototype.hideCrosshairs = function () {
        x2dci.r2m();
        this.displayCrosshairs = !{};
    };
    N_q.ChartEngine.prototype.showCrosshairs = function () {
        this.displayCrosshairs = !!{};
    };
};
W_ = f1Q => {
    var I1v = x2dci;
    var L4w, J_X;
    L4w = f1Q.CIQ;
    J_X = f1Q.timezoneJS;
    L4w.ChartEngine.prototype.loadChart = function (u6m, z$y, T_x) {
        var j_H, U1L, b$f, F_U, O$E, R3a, E7O, X8Y, W7f, H4w, e8W, O3a, x7i, H40, b$P;
        j_H = 'obj';
        j_H += 'e';
        j_H += 'ct';
        U1L = 'fu';
        U1L += 'n';
        U1L += 'c';
        U1L += 'tion';
        if (!T_x && typeof z$y == U1L) {
            T_x = z$y;
            b$f = -+'1098722003';
            I1v.C$o(0);
            F_U = -I1v.c6Y('790866666', 0);
            I1v.C$o(20);
            O$E = I1v.c6Y('2', 0);
            for (var e1H = 1; I1v.O$R(e1H.toString(), e1H.toString().length, '40956' | 0) !== b$f; e1H++) {
                z$y = {};
                O$E += 2;
            }
            if (I1v.O$R(O$E.toString(), O$E.toString().length, 8711) !== F_U) {
                z$y = {};
            }
        } else if (Array.isArray(z$y)) {
            z$y = { masterData: z$y };
        }
        if (!z$y) {
            z$y = {};
        }
        var { chart: z_y, periodicity: g15, range: b_J, span: y6y } = z$y;
        var { layout: J2y } = this;
        R3a = { periodicity: J2y.periodicity, interval: J2y.interval, timeUnit: J2y.timeUnit };
        if (g15) {
            E7O = L4w.cleanPeriodicity(g15.period ? g15.period : g15.periodicity, g15.interval, g15.timeUnit);
            J2y.interval = E7O.interval;
            J2y.periodicity = E7O.period;
            J2y.timeUnit = E7O.timeUnit;
        }
        if (!z_y) {
            z_y = this.chart;
        }
        var { dataSet: X3o, market: U2y, masterData: K_N, symbol: X5j, moreAvailable: u7A, upToDate: C$3 } = z_y;
        X8Y = L4w.clone(z_y.symbolObject);
        z_y.dataSet = [];
        z_y.masterData = [];
        z_y.moreAvailable = null;
        z_y.upToDate = null;
        if (!u6m) {
            z_y.symbol = null;
            z_y.symbolObject = { symbol: null };
        } else if (typeof u6m == j_H) {
            z_y.symbol = u6m.symbol;
            z_y.symbolObject = u6m;
        } else {
            z_y.symbol = u6m;
            z_y.symbolObject.symbol = u6m;
        }
        z_y.inflectionPoint = null;
        if (this.marketFactory) {
            W7f = this.marketFactory(z_y.symbolObject);
            this.setMarket(W7f, z_y);
        }
        function Y7o() {
            var A7I, r7J;
            A7I = 'm';
            A7I += 'aster';
            I1v.r2m();
            r7J = 'symbolImpor';
            r7J += 't';
            x7i.dispatch(x7i.currentlyImporting ? r7J : 'symbolChange', {
                stx: x7i,
                symbol: z_y.symbol,
                symbolObject: z_y.symbolObject,
                prevSymbol: X5j,
                prevSymbolObject: X8Y,
                action: A7I,
            });
            if (g15) {
                x7i.dispatch('periodicity', { stx: x7i, differentData: !!'1', prevPeriodicity: R3a });
            }
        }
        this.setMainSeriesRenderer(!![]);
        if (!b_J && !y6y && J2y) {
            y6y = !J2y.range ? J2y.setSpan : {};
            b_J = J2y.range || {};
        } else if (b_J && y6y) {
            H4w = -558315103;
            e8W = -393127144;
            O3a = +'2';
            for (var q2$ = 1; I1v.O$R(q2$.toString(), q2$.toString().length, 40498) !== H4w; q2$++) {
                y6y = {};
                O3a += +'2';
            }
            if (I1v.O$R(O3a.toString(), O3a.toString().length, 92004) !== e8W) {
                y6y = {};
            }
        }
        this.clearCurrentMarketData(z_y);
        x7i = this;
        if (!z$y.masterData && this.quoteDriver) {
            H40 = function (i7M) {
                if (i7M && i7M != 'orphaned') {
                    z_y.symbol = X5j;
                    z_y.symbolObject = X8Y;
                    z_y.market = U2y;
                    x7i.masterData = z_y.masterData = K_N;
                    z_y.dataSet = X3o;
                    z_y.moreAvailable = u7A;
                    z_y.upToDate = C$3;
                }
                I1v.J8h();
                Y7o();
                if (T_x) {
                    T_x.call(x7i, i7M);
                }
            };
            if (b_J && Object.keys(b_J).length && this.setRange) {
                delete z$y.span;
                delete J2y.setSpan;
                this.chart.masterData = null;
                this.displayInitialized = !'1';
                if (g15) {
                    b_J.periodicity = g15;
                }
                b_J.forceLoad = !!{};
                this.setRange(b_J, H40);
            } else if (y6y && y6y.base && this.setSpan) {
                y6y.multiplier = y6y.multiplier || 1;
                this.chart.masterData = null;
                this.displayInitialized = !!'';
                if (g15) {
                    y6y.maintainPeriodicity = !![];
                }
                y6y.forceLoad = !![];
                this.setSpan(y6y, H40);
            } else {
                this.quoteDriver.newChart(
                    { symbol: z_y.symbol, symbolObject: z_y.symbolObject, chart: z_y, initializeChart: !'' },
                    function (K2M) {
                        I1v.r2m();
                        if (!K2M) {
                            x7i.adjustPanelPositions();
                            x7i.quoteDriver.updateSubscriptions();
                            if (z$y.stretchToFillScreen) {
                                x7i.fillScreen();
                            }
                        }
                        H40.apply(x7i, arguments);
                    }
                );
            }
        } else {
            if (!z$y.masterData) {
                console.log('Warning: No masterData specified and no QuoteFeed configured');
            }
            if (!z_y.symbol) {
                z_y.symbol = '';
            }
            this.initializeChart();
            b$P = this.doCleanupGaps(z$y.masterData, z_y);
            this.setMasterData(b$P, z_y, { noCleanupDates: !!{} });
            z_y.endPoints = {};
            if (b$P && b$P.length) {
                z_y.endPoints = { begin: b$P[0].DT, end: b$P[b$P.length - 1].DT };
            }
            this.createDataSet();
            if (b_J && Object.keys(b_J).length && this.setRange) {
                this.setRange(b_J);
            } else if (y6y && y6y.multiplier && y6y.base && this.setSpan) {
                this.setSpan({ maintainPeriodicity: !0, multiplier: y6y.multiplier, base: y6y.base });
            } else if (z$y.stretchToFillScreen) {
                this.fillScreen();
            } else if (b$P && b$P.length) {
                this.home();
            } else {
                this.clear();
            }
            this.adjustPanelPositions();
            Y7o();
            if (T_x) {
                T_x.call(x7i);
            }
        }
    };
    L4w.ChartEngine.prototype.loadBlankChart = function () {
        I1v.r2m();
        this.loadChart(null, []);
    };
    L4w.ChartEngine.prototype.getDataFields = function (O6A) {
        var L0N, t8v, R3t;
        if (!O6A) {
            O6A = this.chart;
        }
        I1v.J8h();
        L0N = O6A.defaultPlotField || 'Close';
        t8v = ['Open', 'High', 'Low'];
        t8v.push(L0N);
        for (var p$M in O6A.series) {
            R3t = O6A.series[p$M].parameters;
            t8v.push(R3t.symbol);
        }
        return t8v;
    };
    L4w.ChartEngine.prototype.cleanMasterData = function (a84, k1Y) {
        var y8h, z3j, u4k, w6j, F48;
        y8h = a84.symbol;
        z3j = k1Y.masterData;
        if (!z3j || !z3j.length) {
            return;
        }
        u4k = this.getDataFields(k1Y);
        w6j = +'0';
        do {
            F48 = z3j[w6j];
            delete F48[y8h];
            if (h3x.call(this, F48, u4k)) {
                I1v.M8Y(46);
                z3j.splice(w6j, I1v.d58('1', 0));
                continue;
            }
            w6j++;
        } while (w6j < z3j.length);
        z3j = this.doCleanupGaps(z3j, k1Y, { noCleanupDates: !![] });
        function h3x(Z7e, v_i) {
            var e_g;
            for (var L5_ = +'0'; L5_ < v_i.length; L5_++) {
                e_g = Z7e[v_i[L5_]];
                if (typeof e_g != 'undefined') {
                    return ![];
                }
            }
            return !![];
        }
        this.setMasterData(z3j, k1Y, { noCleanupDates: !0 });
        this.clearCurrentMarketData(k1Y, y8h);
    };
    L4w.ChartEngine.prototype.calculateATR = function (J6z, t_D, U$u) {
        var T7a, M8r, v9V, l7E, o1j, P1K;
        if (!U$u) {
            U$u = J6z.dataSet;
        }
        T7a = J6z.state.calculations.atr;
        if (!T7a) {
            T7a = J6z.state.calculations.atr = {};
        }
        if (!t_D) {
            t_D = 20;
        }
        M8r = [];
        if (T7a.accum) {
            M8r = T7a.accum;
        }
        for (var r0t = '0' << 32; r0t < U$u.length; r0t++) {
            l7E = U$u[r0t];
            v9V = r0t ? U$u[r0t - 1] : T7a.q1;
            if (!v9V) continue;
            o1j = Math.max(l7E.High - l7E.Low, Math.abs(l7E.High - v9V.Close), Math.abs(l7E.Low - v9V.Close));
            if (M8r.length < t_D) {
                if (M8r.push(o1j) == t_D) {
                    P1K = 0;
                    for (var B_U = 0; B_U < M8r.length; B_U++) {
                        P1K += M8r[B_U];
                    }
                    I1v.M8Y(40);
                    l7E.atr = I1v.d58(t_D, P1K);
                }
            } else {
                I1v.C$o(134);
                var C4n = I1v.c6Y(122, 11, 11);
                l7E.atr = (v9V.atr * (t_D - C4n) + o1j) / t_D;
            }
            l7E.trueRange = o1j;
        }
        J6z.state.calculations.atr = { accum: M8r, q1: v9V };
    };
    L4w.ChartEngine.prototype.calculateMedianPrice = function (c2H, e6$) {
        var G1C, v8U;
        if (!e6$) {
            e6$ = c2H.dataSet;
        }
        for (var v5d = 0; v5d < e6$.length; ++v5d) {
            v8U = 'h';
            v8U += 'l';
            v8U += '/';
            v8U += '2';
            G1C = e6$[v5d];
            I1v.C$o(6);
            var D55 = I1v.c6Y(0, 15, 9, 18, 7);
            G1C[v8U] = (G1C.High + G1C.Low) / ('2' * D55);
        }
    };
    I1v.J8h();
    L4w.ChartEngine.prototype.calculateTypicalPrice = function (v$U, S_s) {
        var E9O;
        I1v.r2m();
        if (!S_s) {
            S_s = v$U.dataSet;
        }
        for (var a3F = 0; a3F < S_s.length; ++a3F) {
            E9O = S_s[a3F];
            I1v.M8Y(135);
            var N_V = I1v.c6Y(7, 46, 8, 15, 13);
            E9O['hlc/3'] = (E9O.High + E9O.Low + E9O.Close) / N_V;
        }
    };
    L4w.ChartEngine.prototype.calculateWeightedClose = function (z4C, t2X) {
        var B8d, m0E;
        if (!t2X) {
            t2X = z4C.dataSet;
        }
        for (var z6M = 0; z6M < t2X.length; ++z6M) {
            m0E = 'h';
            m0E += 'l';
            m0E += 'c';
            m0E += 'c/4';
            B8d = t2X[z6M];
            I1v.C$o(136);
            var e3t = I1v.c6Y(2, 6, 16, 6);
            I1v.M8Y(22);
            var q2b = I1v.d58(2, 2);
            B8d[m0E] = (B8d.High + B8d.Low + e3t * B8d.Close) / q2b;
        }
    };
    L4w.ChartEngine.prototype.calculateOHLC4 = function (j7C, u9Z) {
        var D4l;
        I1v.J8h();
        if (!u9Z) {
            u9Z = j7C.dataSet;
        }
        for (var l6S = +'0'; l6S < u9Z.length; ++l6S) {
            D4l = u9Z[l6S];
            I1v.M8Y(2);
            var s6o = I1v.d58(6, 2);
            D4l['ohlc/4'] = (D4l.Open + D4l.High + D4l.Low + D4l.Close) / s6o;
        }
    };
    L4w.ChartEngine.prototype.currentQuote = function (y7W) {
        var i$k;
        if (!this.chart.dataSet) {
            return null;
        }
        for (var v_k = this.chart.dataSet.length - 1; v_k >= 0; v_k--) {
            if (this.chart.dataSet[v_k]) {
                if (!y7W) {
                    return this.chart.dataSet[v_k];
                }
                i$k = this.chart.dataSet[v_k][y7W];
                if (i$k || i$k === 0) {
                    return this.chart.dataSet[v_k];
                }
            }
        }
        return null;
    };
    L4w.ChartEngine.prototype.mostRecentClose = function (p4f) {
        var Q47, H_q, L$k, y7N;
        I1v.r2m();
        if (!this.chart.dataSet) {
            return null;
        }
        for (var J3v = this.chart.dataSet.length - ('1' ^ 0); J3v >= 0; J3v--) {
            Q47 = 'num';
            Q47 += 'b';
            Q47 += 'er';
            H_q = 'o';
            H_q += 'bject';
            L$k = this.chart.dataSet[J3v];
            if (!L$k) continue;
            if (p4f) {
                L$k = L$k[p4f];
                if (!L$k && L$k !== 0) continue;
            }
            y7N = L$k.iqPrevClose;
            if (typeof L$k == H_q) {
                L$k = L$k.Close;
            }
            if (typeof L$k == 'number') {
                return L$k;
            }
            if (typeof y7N == Q47) {
                return y7N;
            }
        }
        return null;
    };
    L4w.ChartEngine.prototype.createDataSegment = function (z_a) {
        var H3d, s0Y, V9x, S_7, Z2r, t6t, d6K, J6e, R72, T1$, z2Y, A1C, p$O, V$3, d$d, M0P, y6G, y72;
        if (this.runPrepend('createDataSegment', arguments)) {
            return;
        }
        for (var g0l in this.charts) {
            H3d = this.charts[g0l];
            if (z_a) {
                H3d = z_a;
            }
            if (L4w.Comparison && H3d.isComparison) {
                L4w.Comparison.createComparisonSegmentInner(this, H3d);
            }
            s0Y = H3d.dataSet;
            V9x = H3d.baseline;
            S_7 = H3d.scroll;
            Z2r = H3d.maxTicks;
            t6t = this.layout;
            d6K = t6t.candleWidth;
            V9x.actualLevel = V9x.userLevel ? V9x.userLevel : V9x.defaultLevel;
            J6e = V9x.includeInDataSegment && (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars);
            T1$ = 0;
            z2Y = H3d.dataSegment = [];
            I1v.C$o(137);
            var o1i = I1v.d58(11, 100, 16, 7);
            I1v.M8Y(134);
            var Z9f = I1v.d58(46, 5, 9);
            A1C = s0Y.length - o1i - S_7 - Z9f;
            p$O = H3d.defaultPlotField;
            for (var Q4f = -1; Q4f < S_7 && Q4f < Z2r; Q4f++) {
                A1C++;
                if (Q4f == -1 && !J6e) continue;
                if (A1C < s0Y.length && A1C >= 0) {
                    R72 = s0Y[A1C];
                    R72.candleWidth = null;
                    if (R72) {
                        T1$ += R72.Volume || 1;
                    }
                    z2Y.push(R72);
                    if (V9x.actualLevel === null && Q4f >= 0) {
                        if (p$O && p$O != 'Close') {
                            I1v.M8Y(0);
                            V$3 = s0Y[I1v.d58(A1C, 1)];
                            if (V$3 && (V$3[p$O] || V$3[p$O] === 0)) {
                                V9x.actualLevel = V$3[p$O];
                            }
                        } else {
                            if (R72.iqPrevClose || R72.iqPrevClose === 0) {
                                V9x.actualLevel = R72.iqPrevClose;
                            }
                        }
                    }
                } else if (A1C < 0) {
                    z2Y.push(null);
                }
            }
            H3d.segmentImage = null;
            d$d = this.mainSeriesRenderer || {};
            if (d$d.params && d$d.params.volume) {
                I1v.M8Y(84);
                var Z7q = I1v.d58(109, 13, 7, 9);
                M0P = H3d.width - (Z2r - z2Y.length - Z7q) * t6t.candleWidth;
                y6G = 0;
                H3d.segmentImage = [];
                for (var v0K = 0; v0K < z2Y.length; v0K++) {
                    R72 = z2Y[v0K];
                    H3d.segmentImage[v0K] = {};
                    y72 = null;
                    if (R72) {
                        if (R72.Volume) {
                            R72.candleWidth = (M0P * R72.Volume) / T1$;
                            I1v.C$o(138);
                            var P8c = I1v.c6Y(8, 4, 3, 15, 19);
                            y72 = y6G + R72.candleWidth / P8c;
                            y6G += R72.candleWidth;
                        } else {
                            R72.candleWidth = d6K;
                            I1v.C$o(139);
                            y72 = I1v.d58(2, y6G, d6K);
                            y6G += d6K;
                        }
                        H3d.segmentImage[v0K] = { tick: R72.tick, candleWidth: R72.candleWidth, leftOffset: y72 };
                    } else {
                        y6G += d6K;
                    }
                }
            }
            if (z_a) break;
        }
        I1v.r2m();
        if (H3d && H3d.isComparison) {
            this.clearPixelCache();
        }
        this.positionCrosshairsAtPointer();
        this.runAppend('createDataSegment', arguments);
    };
    L4w.ChartEngine.prototype.getDataSegment = function (L_K) {
        var k$b, h8c, M5n;
        if (!L_K) {
            L_K = this.chart;
        }
        k$b = L_K.dataSegment;
        if (!k$b || !k$b.length) {
            return [];
        }
        h8c = 0;
        M5n = k$b.length;
        if (this.pixelFromBar(h8c, L_K) < L_K.panel.left) {
            h8c++;
        }
        I1v.J8h();
        if (this.pixelFromBar(M5n - 1, L_K) > L_K.panel.right) {
            M5n--;
        }
        return k$b.slice(h8c, M5n);
    };
    L4w.ChartEngine.prototype.setMasterData = function (e4R, g6H, A9W) {
        var A4F, G$Z, m63, x2T, S9C, a8e, c4q, q9S;
        if (!g6H) {
            g6H = this.chart;
        }
        if (this.marketFactory) {
            A4F = this.marketFactory(g6H.symbolObject);
            this.setMarket(A4F, g6H);
        }
        if (!A9W) {
            A9W = {};
        }
        if (!A9W.noCleanupDates) {
            this.doCleanupDates(e4R, this.layout.interval);
        }
        g6H.masterData = e4R;
        if (g6H.name == 'chart') {
            this.masterData = e4R;
        }
        m63 = null;
        for (G$Z = 0; e4R && G$Z < e4R.length; G$Z++) {
            x2T = 'setMasterData : Mi';
            x2T += 'ssin';
            x2T += 'g DT and Date on masterData object';
            S9C = 'Val';
            S9C += 'ue';
            a8e = e4R[G$Z];
            if (m63 === null) {
                c4q = 'num';
                c4q += 'ber';
                if (typeof a8e.Close === 'number') {
                    m63 = 'Close';
                } else if (typeof a8e.Value === c4q) {
                    m63 = 'Value';
                }
            }
            if (m63 === S9C && typeof a8e.Value === 'number') {
                a8e.Close = a8e.Value;
            }
            if (a8e.DT) {
                if (Object.prototype.toString.call(a8e.DT) != '[object Date]') {
                    a8e.DT = new Date(a8e.DT);
                }
                if (!a8e.Date || a8e.Date.length != 17) {
                    a8e.Date = L4w.yyyymmddhhmmssmmm(a8e.DT);
                }
            } else if (a8e.Date) {
                a8e.DT = L4w.strToDateTime(a8e.Date);
            } else {
                console.log(x2T);
            }
            if (a8e.Volume && typeof a8e.Volume !== 'number') {
                a8e.Volume = parseInt(a8e.Volume, '10' * 1);
            }
            if (e4R.length - G$Z < 50) {
                this.updateCurrentMarketData(a8e, g6H, null, { fromTrade: !![] });
            }
        }
        if (g6H.calculateTradingDecimalPlaces) {
            g6H.decimalPlaces = g6H.calculateTradingDecimalPlaces({
                stx: this,
                chart: g6H,
                symbol: g6H.symbolObject.symbol,
                symbolObject: g6H.symbolObject,
            });
        }
        this.setDisplayDates(e4R);
        g6H.roundit = Math.pow(10, g6H.decimalPlaces);
        for (G$Z in this.plugins) {
            q9S = this.plugins[G$Z];
            if (q9S.display) {
                if (q9S.setMasterData) {
                    q9S.setMasterData(this, g6H);
                }
            }
        }
    };
    L4w.ChartEngine.prototype.setMasterDataRender = function (Z1r, S4s, t28) {
        var I$4, f3t, E8F;
        if (!t28) {
            t28 = this.chart;
        }
        if (!t28.symbol) {
            t28.symbol = '';
        }
        this.setMasterData(S4s, t28);
        if (S4s) {
            I1v.C$o(46);
            I$4 = I1v.c6Y('878835369', 32);
            f3t = 117229201;
            E8F = 2;
            for (var m8b = '1' >> 0; I1v.q2D(m8b.toString(), m8b.toString().length, 77732) !== I$4; m8b++) {
                t28.endPoints = {};
                E8F += 2;
            }
            if (I1v.q2D(E8F.toString(), E8F.toString().length, '54060' * 1) !== f3t) {
                t28.endPoints = {};
            }
            if (S4s.length) {
                t28.endPoints = { begin: S4s[0].DT, end: S4s[S4s.length - 1].DT };
                t28.symbol = Z1r;
            }
        }
        this.createDataSet();
        this.initializeChart();
        this.draw();
        if (!S4s || !S4s.length) {
            t28.symbol = null;
            this.clear();
        }
        this.adjustPanelPositions();
    };
    L4w.ChartEngine.prototype.getSymbols = function (P6X) {
        var A8U, p1v, O15, I65, I96, u2V, R4k, r3q, U9s, h$M, B81, Y7_, M0b;
        if (!P6X) {
            P6X = {};
        }
        A8U = [];
        O15 = this.layout;
        for (var S_d in this.charts) {
            u2V = this.charts[S_d];
            if (u2V.symbolObject && u2V.symbolObject.symbol) {
                A8U.push(K1a(u2V.symbol, u2V.symbolObject, O15));
            }
            for (var X_4 in u2V.series) {
                R4k = 'stud';
                R4k += 'y';
                r3q = 'exclude-studie';
                r3q += 's';
                U9s = u2V.series[X_4];
                h$M = U9s.parameters;
                if (h$M.data && !h$M.data.useDefaultQuoteFeed) continue;
                I96 = h$M.symbolObject;
                I65 = h$M.symbol;
                p1v = K1a(I65, I96, O15);
                p1v.id = X_4;
                if (P6X['include-parameters']) {
                    p1v.parameters = L4w.clone(h$M);
                    if (p1v.parameters.yAxis) {
                        delete p1v.parameters.yAxis.yAxisPlotter;
                    }
                }
                if (P6X[r3q] && h$M.bucket == R4k) continue;
                if (P6X['exclude-generated'] && I96.generator) continue;
                A8U.push(p1v);
            }
        }
        function K1a(g5K, Q5Q, S7C) {
            I1v.J8h();
            return {
                symbol: g5K,
                symbolObject: Q5Q,
                periodicity: S7C.periodicity,
                interval: S7C.interval,
                timeUnit: S7C.timeUnit,
                setSpan: S7C.setSpan,
            };
        }
        if (P6X['breakout-equations']) {
            B81 = {};
            for (var d4S = +'0'; d4S < A8U.length; d4S++) {
                I65 = A8U[d4S].symbol;
                if (this.isEquationChart(I65)) {
                    Y7_ = L4w.formatEquation(I65);
                    if (Y7_) {
                        M0b = Y7_.symbols;
                        for (var N6c = +'0'; N6c < M0b.length; N6c++) {
                            B81[M0b[N6c]] = K1a(M0b[N6c], A8U[d4S].symbolObject, A8U[d4S]);
                        }
                    }
                } else {
                    B81[I65] = K1a(I65, A8U[d4S].symbolObject, A8U[d4S]);
                }
            }
            A8U = [];
            for (var L$6 in B81) {
                A8U.push(B81[L$6]);
            }
        }
        return A8U;
    };
    L4w.ChartEngine.prototype.setDisplayDate = function (L6p) {
        var f_8, b6d, C1w;
        if (L4w.ChartEngine.isDailyInterval(this.layout.interval)) {
            return;
        }
        f_8 = L6p.DT;
        I1v.C$o(30);
        var V9G = I1v.c6Y(9, 11000, 9991);
        b6d = f_8.getSeconds() * V9G + f_8.getMilliseconds();
        if (J_X.Date && this.displayZone) {
            C1w = new J_X.Date(f_8.getTime(), this.displayZone);
            f_8 = new Date(C1w.getFullYear(), C1w.getMonth(), C1w.getDate(), C1w.getHours(), C1w.getMinutes());
            f_8 = new Date(f_8.getTime() + b6d);
        }
        L6p.displayDate = f_8;
    };
    L4w.ChartEngine.prototype.setDisplayDates = function (C_A) {
        var f_E;
        if (!C_A) {
            return;
        }
        I1v.J8h();
        if (L4w.ChartEngine.isDailyInterval(this.layout.interval)) {
            return;
        }
        for (var A6m = 0; A6m < C_A.length; A6m++) {
            f_E = C_A[A6m];
            if (f_E.DT) {
                this.setDisplayDate(f_E);
            }
        }
    };
    L4w.ChartEngine.prototype.setTimeZone = function (U1y, t8u) {
        var f_a, G0M, t0c, I0_, z9T;
        if (!J_X.Date) {
            this.timeZoneOffset = 0;
            return;
        }
        f_a = new Date();
        G0M = f_a.getTimezoneOffset();
        t0c = G0M;
        I0_ = G0M;
        if (U1y) {
            this.dataZone = U1y;
        }
        if (this.dataZone) {
            t0c = new J_X.Date(f_a, this.dataZone).getTimezoneOffset();
        }
        if (t8u) {
            this.displayZone = t8u;
        }
        if (this.displayZone) {
            I0_ = new J_X.Date(f_a, this.displayZone).getTimezoneOffset();
        }
        I1v.M8Y(140);
        this.timeZoneOffset = I1v.d58(t0c, G0M, G0M, I0_);
        for (var c0b in this.charts) {
            z9T = this.charts[c0b];
            this.setDisplayDates(z9T.masterData);
        }
        this.preferences.timeZone = t8u;
        this.changeOccurred('preferences');
        this.createDataSet();
    };
    L4w.ChartEngine.prototype.updateChartData = function (t1e, C3X, w8j) {
        var S7u,
            a3f,
            g1a,
            v50,
            O4o,
            S9M,
            Z2J,
            e3l,
            a_f,
            J7L,
            u_U,
            z5W,
            U$N,
            d21,
            f3z,
            r33,
            T76,
            a4y,
            Y$4,
            a77,
            P_X,
            b4p,
            F3u,
            B_8,
            O8W,
            h$5,
            X3$,
            h$a,
            W6I,
            H0i,
            s9m;
        S7u = 'u';
        function P7H() {
            var n1m, D2z, Y4u, n3Z, w_y, l62, z7A, G5H, x56, o5e, A_4, b6x, U8i, A_7, y7F;
            n1m = 'mon';
            n1m += 't';
            n1m += 'h';
            D2z = 'market.';
            D2z += 'market_def.market_tz';
            if (!L4w.Market || !C3X.market) {
                return;
            }
            Y4u = { market_tz: L4w.getFromNS(C3X, D2z, null) };
            n3Z = S9M.interval;
            if (n3Z == n1m || n3Z == 'week') {
                w_y = 'd';
                w_y += 'a';
                w_y += 'y';
                if (!e3l.dontRoll) {
                    n3Z = w_y;
                }
                Y4u = e3l.chart.market.market_def;
            }
            l62 = new L4w.Market(Y4u);
            z7A = {
                begin: O4o && O4o.length ? O4o[O4o.length - 1].DT : t1e.DT,
                interval: n3Z,
                periodicity: +'1',
                timeUnit: S9M.timeUnit,
            };
            G5H = l62.newIterator(z7A);
            x56 = G5H.next();
            if (!O4o) {
                b6x = +'816643897';
                I1v.C$o(38);
                U8i = I1v.c6Y('885887543', 1);
                A_7 = +'2';
                for (var O8y = 1; I1v.O$R(O8y.toString(), O8y.toString().length, 81010) !== b6x; O8y++) {
                    t1e.DT = new Date(+G5H.previous());
                    A_7 += 2;
                }
                if (I1v.O$R(A_7.toString(), A_7.toString().length, 49962) !== U8i) {
                    t1e.DT = new Date(!G5H.previous());
                }
            } else if (t1e.DT < x56) {
                o5e = 0;
                y7F = G5H.previous();
                A_4 = t1e.DT;
                w8j.appending = !'';
                while (A_4 < y7F && o5e < 1000) {
                    w8j.appending = !!0;
                    y7F = G5H.previous();
                    o5e++;
                }
                t1e.DT = y7F;
                w8j.updating = !w8j.appending;
            } else if (t1e.DT >= x56) {
                o5e = 0;
                A_4 = t1e.DT;
                while (A_4 > x56 && o5e < 1000) {
                    t1e.DT = x56;
                    x56 = G5H.next();
                    o5e++;
                }
                w8j.appending = !!1;
            }
        }
        S7u += 'pdateChart';
        S7u += 'Data';
        a3f = 'appendMa';
        a3f += 'sterDa';
        a3f += 'ta';
        if (!w8j) {
            w8j = {};
        }
        if (!C3X) {
            C3X = this.chart;
        }
        function e_s() {
            var g7F, o1L, S7l;
            e3l.createDataSet(null, null, w8j);
            e3l.draw();
            e3l.updateChartAccessories();
            g7F = 1638676724;
            o1L = 1769567440;
            S7l = 2;
            for (var M$M = 1; I1v.q2D(M$M.toString(), M$M.toString().length, +'42364') !== g7F; M$M++) {
                I1v.M8Y(46);
                e3l.streamParameters.count = I1v.d58('0', 32);
                e3l.streamParameters.timeout = -1;
                I1v.M8Y(46);
                S7l += I1v.d58('2', 0);
            }
            if (I1v.O$R(S7l.toString(), S7l.toString().length, 24527) !== o1L) {
                e3l.streamParameters.count = 8;
                e3l.streamParameters.timeout = !0;
            }
        }
        g1a = !!0;
        v50 = ![];
        O4o = C3X.masterData;
        S9M = this.layout;
        Z2J = this.dataZone;
        e3l = this;
        a_f = w8j.secondarySeries;
        z5W = L4w.isValidNumber;
        if (!w8j.noCleanupDates) {
            this.doCleanupDates(t1e, S9M.interval);
        }
        if (w8j.useAsLastSale || (t1e.constructor == Object && (t1e.Last || t1e.Last === 0))) {
            A4E();
        }
        if (t1e && t1e.constructor == Object) {
            t1e = [t1e];
        }
        if (!t1e || !t1e.length) {
            return;
        }
        function j2R(h2p, r9s) {
            I1v.J8h();
            var D5v, x6D, v0N, C4d, r44, s8f;
            if (a_f) {
                x6D = -172829766;
                v0N = -2133807539;
                C4d = 2;
                for (var U9M = 1; I1v.O$R(U9M.toString(), U9M.toString().length, +'51999') !== x6D; U9M++) {
                    delete O4o[h2p][a_f];
                    I1v.C$o(38);
                    C4d += I1v.d58('2', 1);
                }
                if (I1v.O$R(C4d.toString(), C4d.toString().length, '58750' ^ 0) !== v0N) {
                    -O4o[h2p][a_f];
                }
                if (e3l.cleanupGaps) {
                    r44 = 'g';
                    r44 += 'ap';
                    D5v = { DT: r9s, Close: null };
                    if (e3l.cleanupGaps != r44 && O4o[h2p - 1] && O4o[h2p - 1][a_f]) {
                        D5v.Close = O4o[h2p - 1][a_f].Close;
                        D5v.High = D5v.Low = D5v.Open = D5v.Close;
                        D5v.Volume = 0;
                    }
                    O4o[h2p][a_f] = D5v;
                }
            } else {
                s8f = O4o.splice(h2p, I1v.c6Y('1', 0, I1v.C$o(0)))[0];
                D5v = { DT: s8f.DT, Close: null, needed: !!'' };
                for (J7L in C3X.series) {
                    u_U = C3X.series[J7L].parameters.symbolObject.symbol;
                    if (typeof s8f[u_U] != 'undefined') {
                        D5v[u_U] = s8f[u_U];
                        delete D5v.needed;
                    }
                }
                if (e3l.cleanupGaps && e3l.cleanupGaps != 'gap') {
                    delete D5v.needed;
                    if (e3l.cleanupGaps != 'gap' && O4o[h2p - 1]) {
                        D5v.Close = O4o[h2p - 1].Close;
                        D5v.High = D5v.Low = D5v.Open = D5v.Close;
                        D5v.Volume = 0;
                    }
                }
                if (D5v.needed !== !!'') {
                    O4o.splice(h2p, 0, D5v);
                    e3l.setDisplayDate(D5v);
                }
            }
        }
        if (this.runPrepend(a3f, [t1e, C3X, w8j])) {
            return;
        }
        if (this.runPrepend('updateChartData', [t1e, C3X, w8j])) {
            return;
        }
        function A4E() {
            var r0c, G_e;
            r0c = '[obje';
            r0c += 'ct';
            r0c += ' ';
            r0c += 'Date]';
            g1a = !!1;
            if (w8j.useAsLastSale && w8j.useAsLastSale.aggregatedVolume) {
                v50 = !'';
            }
            if (t1e.constructor === Array) {
                I1v.C$o(134);
                var z1P = I1v.c6Y(92, 7, 13);
                G_e = t1e[t1e.length - z1P];
                t1e = {};
                t1e.DT = G_e.DT;
                t1e.Close = G_e.Close;
                t1e.Volume = G_e.Volume;
            } else if (t1e.Last) {
                t1e.Close = t1e.Last;
                delete t1e.Last;
            }
            if (t1e.DT && Object.prototype.toString.call(t1e.DT) != r0c) {
                t1e.DT = new Date(t1e.DT);
            }
            if (!t1e.DT || t1e.DT == 'Invalid Date') {
                t1e.DT = new Date();
            }
            if (S9M.interval != 'tick') {
                P7H();
            }
            t1e.Open = t1e.Close;
            t1e.High = t1e.Close;
            t1e.Low = t1e.Close;
        }
        if (!O4o) {
            O4o = [];
        }
        I1v.C$o(4);
        var a5J = I1v.c6Y(1, 89, 7, 1, 11);
        U$N = O4o.length - a5J;
        d21 = !'1';
        if (w8j.fillGaps) {
            n3U();
        }
        if (!t1e.length) {
            return;
        }
        for (var c4Q = +'0'; c4Q < t1e.length; c4Q++) {
            f3z = t1e[c4Q];
            r33 = f3z.DT;
            T76 = f3z.Date;
            if (r33 && Object.prototype.toString.call(r33) != '[object Date]') {
                f3z.DT = r33 = new Date(r33);
            }
            if (r33) {
                if (!T76 || T76.length != 17) {
                    f3z.Date = L4w.yyyymmddhhmmssmmm(f3z.DT);
                }
            }
            if (!r33) {
                r33 = f3z.DT = L4w.strToDateTime(T76);
            }
            if (!z5W(f3z.Close) && z5W(f3z.Value)) {
                f3z.Close = f3z.Value;
            }
            while (U$N >= +'0' && U$N < O4o.length) {
                a4y = O4o[U$N].DT;
                if (!a4y) {
                    a4y = L4w.strToDateTime(O4o[U$N].Date);
                }
                if (a4y.getTime() <= r33.getTime()) {
                    d21 = !![];
                    Y$4 = 0;
                    if (a4y.getTime() < r33.getTime()) {
                        if (U$N < O4o.length - 1) {
                            a77 = O4o[U$N + +'1'].DT || L4w.strToDateTime(O4o[U$N + +'1'].Date);
                            if (a77.getTime() <= r33.getTime()) {
                                U$N++;
                                continue;
                            }
                        }
                        I1v.M8Y(74);
                        Y$4 = I1v.c6Y('1', 0);
                    }
                    if (w8j.deleteItems) {
                        if (!Y$4) {
                            j2R(U$N, r33);
                        }
                        break;
                    } else {
                        P_X = 'ti';
                        P_X += 'c';
                        P_X += 'k';
                        if (S9M.interval == P_X && w8j.firstLoop !== !!0) {
                            Y$4 = 1;
                        }
                        if (!Y$4) {
                            Q27(U$N, f3z);
                        }
                        if (z5W(f3z.Close)) {
                            if (!z5W(f3z.Open)) {
                                f3z.Open = f3z.Close;
                            }
                            b4p = Math.max(f3z.Open, f3z.Close);
                            F3u = Math.min(f3z.Open, f3z.Close);
                            if (!z5W(f3z.High) || f3z.High < b4p) {
                                f3z.High = b4p;
                            }
                            if (!z5W(f3z.Low) || f3z.Low > F3u) {
                                f3z.Low = F3u;
                            }
                        }
                        if (f3z.Volume && !z5W(f3z.Volume)) {
                            f3z.Volume = parseInt(f3z.Volume, 10);
                        }
                        U$N += Y$4;
                        if (a_f) {
                            if (t1e.length - c4Q < +'50') {
                                this.updateCurrentMarketData(f3z, C3X, a_f, { fromTrade: !!1 });
                            }
                            if (S9M.interval != 'tick' || f3z.Close !== undefined) {
                                if (Y$4) {
                                    I1v.M8Y(38);
                                    O4o.splice(U$N, I1v.d58('0', 1), { DT: f3z.DT });
                                    this.setDisplayDate(O4o[U$N]);
                                }
                                O4o[U$N][a_f] = f3z;
                            }
                        } else {
                            if (t1e.length - c4Q < '50' << 32) {
                                this.updateCurrentMarketData(f3z, C3X, null, { fromTrade: !!{} });
                            }
                            if (S9M.interval != 'tick' || f3z.Close !== undefined) {
                                O4o.splice(U$N, Y$4 ? 0 : '1' | 1, f3z);
                                this.setDisplayDate(f3z);
                            }
                        }
                    }
                    break;
                }
                U$N += d21 ? 1 : -1;
            }
            if (U$N < 0) {
                if (a_f) {
                    B_8 = 't';
                    B_8 += 'ic';
                    B_8 += 'k';
                    this.updateCurrentMarketData(f3z, C3X, a_f, { fromTrade: !!{} });
                    if (S9M.interval != B_8 || f3z.Close !== undefined) {
                        O4o.splice(0, 0, { DT: f3z.DT });
                        this.setDisplayDate(O4o[0]);
                        O4o[0][a_f] = f3z;
                    }
                } else {
                    O8W = 't';
                    O8W += 'i';
                    O8W += 'c';
                    O8W += 'k';
                    this.updateCurrentMarketData(f3z, C3X, null, { fromTrade: !!{} });
                    if (S9M.interval != O8W || f3z.Close !== undefined) {
                        I1v.C$o(19);
                        O4o.splice(I1v.d58(0, '0'), 0, f3z);
                        this.setDisplayDate(f3z);
                    }
                }
                d21 = !![];
                U$N = 0;
            }
        }
        function Q27(u47, Y$E) {
            var Z4q, H37, d8T, s92;
            Z4q = O4o[u47];
            if (a_f) {
                Z4q = Z4q[a_f] || {};
            }
            if (Y$E.Close === null) {
                if (Z4q.Open !== undefined) {
                    Y$E.Open = null;
                }
                if (Z4q.High !== undefined) {
                    Y$E.High = null;
                }
                if (Z4q.Low !== undefined) {
                    Y$E.Low = null;
                }
                if (Z4q.Volume !== undefined) {
                    Y$E.Volume = null;
                }
            } else {
                H37 = 'L';
                H37 += 'o';
                H37 += 'w';
                d8T = 'O';
                d8T += 'p';
                d8T += 'en';
                if (g1a) {
                    if (Y$E.Volume) {
                        Y$E.Volume = parseInt(Y$E.Volume, 10);
                    }
                    if (!v50) {
                        Y$E.Volume += Z4q.Volume;
                    }
                } else {
                    if (!z5W(Y$E.Volume) && Z4q.Volume) {
                        Y$E.Volume = Z4q.Volume;
                    }
                }
                if (!w8j.allowReplaceOHL) {
                    if (z5W(Z4q.Open)) {
                        Y$E.Open = Z4q.Open;
                    }
                    if (z5W(Z4q.High) && z5W(Y$E.High)) {
                        if (Z4q.High > Y$E.High) {
                            Y$E.High = Z4q.High;
                        }
                    }
                    if (z5W(Z4q.Low) && z5W(Y$E.Low)) {
                        if (Z4q.Low < Y$E.Low) {
                            Y$E.Low = Z4q.Low;
                        }
                    }
                }
                ['Close', d8T, 'High', H37, 'Bid', 'Ask'].forEach(function (X4_) {
                    I1v.J8h();
                    if (!z5W(Y$E[X4_])) {
                        Y$E[X4_] = Z4q[X4_];
                    }
                });
                for (J7L in C3X.series) {
                    s92 = 'u';
                    s92 += 'ndef';
                    s92 += 'i';
                    s92 += 'ned';
                    u_U = C3X.series[J7L].parameters.symbolObject.symbol;
                    if (typeof Y$E[u_U] == s92 && typeof Z4q[u_U] != 'undefined') {
                        Y$E[u_U] = Z4q[u_U];
                    }
                }
            }
        }
        if (O4o.length) {
            this.masterData = C3X.masterData = O4o;
        }
        if (this.maxMasterDataSize) {
            O4o = C3X.masterData = this.masterData = O4o.slice(-this.maxMasterDataSize);
        }
        h$5 = a_f ? this.getSeries({ symbol: a_f, chart: C3X }) : [C3X];
        function n3U() {
            var t1X, T_y, e$F;
            t1X = null;
            T_y = +'0';
            if (O4o.length) {
                t1X = e3l.getFirstLastDataRecord(O4o, a_f || C3X.defaultPlotField, !!'1');
                if (t1X) {
                    if (t1e[t1e.length - ('1' | 1)].DT <= t1X.DT) {
                        return;
                    }
                    for (; T_y < t1e.length; T_y++) {
                        if (+t1e[T_y].DT == +t1X.DT) {
                            if (e3l.getFirstLastDataRecord([t1e[T_y]], a_f || C3X.defaultPlotField)) {
                                t1X = null;
                            }
                            break;
                        } else if (t1e[T_y].DT > t1X.DT) break;
                    }
                }
            }
            e$F = t1e.slice(T_y);
            if (t1X) {
                e$F.unshift(a_f ? t1X[a_f] : t1X);
            }
            e$F = e3l.doCleanupGaps(e$F, C3X);
            I1v.J8h();
            if (t1X) {
                e$F.shift();
            }
            t1e = t1e.slice(0, T_y).concat(e$F);
        }
        for (var k0H = +'0'; k0H < h$5.length; k0H++) {
            X3$ = h$5[k0H];
            if (!X3$.endPoints.begin || X3$.endPoints.begin > t1e[+'0'].DT) {
                X3$.endPoints.begin = t1e[0].DT;
            }
            if (!X3$.endPoints.end || X3$.endPoints.end < t1e[t1e.length - 1].DT) {
                X3$.endPoints.end = t1e[t1e.length - 1].DT;
            }
            h$a = (X3$.parameters && X3$.parameters.field) || C3X.defaultPlotField;
            W6I = this.getFirstLastDataRecord(t1e, h$a, !!1);
            if (W6I && (!X3$.lastQuote || X3$.lastQuote.DT <= W6I.DT)) {
                X3$.lastQuote = W6I;
            }
            if (a_f && w8j.deleteItems) {
                X3$.lastQuote = this.getFirstLastDataRecord(O4o, a_f, !![])[a_f];
            }
        }
        for (var x4h in this.plugins) {
            H0i = this.plugins[x4h];
            if (H0i.display) {
                if (H0i.appendMasterData) {
                    H0i.appendMasterData(this, t1e, C3X);
                }
            }
        }
        if (!this.masterData || !this.masterData.length) {
            this.masterData = O4o;
        }
        if (!w8j.noCreateDataSet) {
            s9m = this.streamParameters;
            if (++s9m.count > s9m.maxTicks || w8j.bypassGovernor) {
                clearTimeout(s9m.timeout);
                e_s();
            } else {
                if (s9m.timeout == -1) {
                    s9m.timeout = setTimeout(e_s, s9m.maxWait);
                }
            }
        }
        this.runAppend('appendMasterData', arguments);
        this.runAppend(S7u, arguments);
    };
    L4w.ChartEngine.prototype.updateCurrentMarketData = function (d2U, a3d, J1_, S9O) {
        var N8z, z3Y, B4l, B24, n0h, D2Z, l9v, f3a, K7l, e6z;
        N8z = 'updat';
        N8z += 'eCur';
        N8z += 'rentMarketData';
        z3Y = 'A';
        z3Y += 'skL2';
        if (!d2U || !d2U.DT) {
            return;
        }
        if (!a3d) {
            a3d = this.chart;
        }
        B4l = S9O && S9O.fromTrade;
        B24 = d2U.DT;
        if (!B4l && this.layout.interval != 'tick' && a3d.market) {
            if (a3d.market.market_def) {
                if (!a3d.market.isMarketDate(d2U.DT)) {
                    return;
                }
                if (!L4w.ChartEngine.isDailyInterval(this.layout.interval) && a3d.market.getSession(d2U.DT) === null) {
                    return;
                }
            }
            n0h = {
                begin: d2U.DT,
                interval: this.layout.interval,
                periodicity: this.layout.periodicity,
                timeUnit: this.layout.timeUnit,
            };
            D2Z = new L4w.Market(a3d.market.market_def);
            if (this.extendedHours && this.extendedHours.filter) {
                D2Z.enableAllAvailableSessions();
            }
            l9v = D2Z.newIterator(n0h);
            l9v.next();
            d2U.DT = l9v.previous();
        }
        if (this.runPrepend('updateCurrentMarketData', arguments)) {
            return;
        }
        f3a = a3d.currentMarketData;
        if (J1_) {
            if (!f3a[J1_]) {
                f3a[J1_] = {};
            }
            f3a = f3a[J1_];
        }
        ['Last', 'Bid', 'Ask'].forEach(function (i3N) {
            I1v.J8h();
            if (d2U[i3N] && typeof d2U[i3N] == 'number') {
                if (!f3a[i3N] || !f3a[i3N].DT || f3a[i3N].DT <= d2U.DT) {
                    f3a[i3N] = { DT: d2U.DT, Price: d2U[i3N], Size: d2U[i3N + 'Size'], Timestamp: B24 };
                }
            }
        });
        ['BidL2', z3Y].forEach(function (B9Q) {
            if (d2U[B9Q] && d2U[B9Q] instanceof Array) {
                if (!f3a[B9Q] || !f3a[B9Q].DT || f3a[B9Q].DT <= d2U.DT) {
                    f3a[B9Q] = { DT: d2U.DT, Price_Size: d2U[B9Q], Timestamp: B24 };
                }
            }
        });
        if (d2U.Close && (!f3a.Last || f3a.Last.DT <= d2U.DT)) {
            K7l = d2U.Close;
            e6z = S9O && S9O.finalClose;
            if (e6z || e6z === 0) {
                K7l = e6z;
            }
            f3a.Last = {
                DT: d2U.DT,
                Price: K7l,
                Size: d2U.LastSize === undefined && this.layout.interval == 'tick' ? d2U.Volume : d2U.LastSize,
                Timestamp: d2U.LastTime || B24,
            };
        }
        f3a.touched = new Date();
        if (!B4l) {
            delete d2U.Last;
        }
        this.runAppend(N8z, arguments);
    };
    L4w.ChartEngine.prototype.clearCurrentMarketData = function (O7J, H7u) {
        var i6o, n2Q, j6X, d87;
        i6o = 'clearC';
        i6o += 'urrent';
        i6o += 'MarketDat';
        i6o += 'a';
        if (this.runPrepend(i6o, arguments)) {
            return;
        }
        j6X = [];
        if (!O7J) {
            for (n2Q in this.charts) {
                j6X.push(this.charts[n2Q]);
            }
        } else {
            j6X.push(O7J);
        }
        for (n2Q = 0; n2Q < j6X.length; n2Q++) {
            d87 = j6X[n2Q].currentMarketData;
            if (H7u) {
                delete d87[H7u];
            } else {
                for (var P1N in d87) {
                    d87[P1N] = undefined;
                }
            }
        }
        this.runAppend('clearCurrentMarketData', arguments);
    };
};
f9 = P1C => {
    var r0g;
    r0g = P1C.CIQ;
    r0g.ChartEngine.prototype.changeOccurred = function (p7A) {
        var O60, I5K, N5H, S96, F6p;
        O60 = 'prefe';
        O60 += 'r';
        O60 += 'e';
        O60 += 'nces';
        I5K = 'th';
        I5K += 'e';
        I5K += 'me';
        N5H = 'th';
        N5H += 'e';
        N5H += 'm';
        N5H += 'e';
        S96 = {
            stx: this,
            symbol: this.chart.symbol,
            symbolObject: this.chart.symbolObject,
            layout: this.layout,
            drawings: this.drawingObjects,
        };
        if (p7A == N5H) {
            this.dispatch(I5K, S96);
        }
        if (this.currentlyImporting) {
            return;
        }
        x2dci.r2m();
        if (p7A == 'layout') {
            this.dispatch('layout', S96);
        } else if (p7A == 'vector') {
            F6p = 'dra';
            F6p += 'win';
            F6p += 'g';
            this.dispatch(F6p, S96);
        } else if (p7A == O60) {
            this.dispatch('preferences', S96);
        }
    };
    r0g.ChartEngine.prototype.startAsyncAction = function () {
        if (!this.pendingAsyncs) {
            this.pendingAsyncs = [];
        }
        this.pendingAsyncs.push(!![]);
    };
    r0g.ChartEngine.prototype.registerChartDrawnCallback = function (Y3c) {
        if (!this.asyncCallbacks) {
            this.asyncCallbacks = [];
        }
        x2dci.r2m();
        this.asyncCallbacks.push(Y3c);
        return { fc: Y3c };
    };
    r0g.ChartEngine.prototype.unregisterChartDrawnCallback = function (Y8_) {
        for (var D0$ = 0; D0$ < this.asyncCallbacks.length; D0$++) {
            if (this.asyncCallbacks[D0$] == Y8_.fc) {
                x2dci.C$o(74);
                this.asyncCallbacks.splice(D0$, x2dci.d58('1', 0));
                return;
            }
        }
    };
    r0g.ChartEngine.prototype.makeAsyncCallbacks = function () {
        x2dci.r2m();
        if (!this.asyncCallbacks) {
            return;
        }
        if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
            for (var t26 = 0; t26 < this.asyncCallbacks.length; t26++) {
                this.asyncCallbacks[t26]();
            }
        }
    };
    r0g.ChartEngine.prototype.completeAsyncAction = function () {
        x2dci.r2m();
        this.pendingAsyncs.pop();
        this.makeAsyncCallbacks();
    };
    r0g.ChartEngine.prototype.addDomEventListener = function (w98, s_5, X1v, K93) {
        x2dci.J8h();
        w98.addEventListener(s_5, X1v, K93);
        this.eventListeners.push({ element: w98, event: s_5, function: X1v, options: K93 });
    };
    r0g.ChartEngine.prototype.addEventListener = function (a03, i5m) {
        var e91;
        x2dci.r2m();
        if (a03 === '*') {
            for (var S0z in this.callbackListeners) {
                this.callbackListeners[S0z].push(i5m);
            }
        } else if (a03 instanceof Array) {
            for (var F9e = 0; F9e < a03.length; F9e++) {
                this.callbackListeners[a03[F9e]].push(i5m);
            }
        } else {
            e91 = this.callbackListeners[a03];
            if (!e91) {
                throw new Error('Attempted to add an invalid listener.');
            }
            e91.push(i5m);
        }
        return { type: a03, cb: i5m };
    };
    r0g.ChartEngine.prototype.removeEventListener = function (Z8B, a5Y) {
        var L7D, b6_, Y3A;
        if (!Z8B || typeof Z8B != 'object') {
            Z8B = { type: Z8B, cb: a5Y };
        }
        L7D = function (S_q, i9b) {
            for (var g63 = 0; g63 < S_q.length; g63++) {
                if (S_q[g63] === i9b) {
                    S_q.splice(g63, 1);
                    return;
                }
            }
        };
        b6_ = this.callbackListeners;
        if (Z8B.type === (795 !== 4930 ? ('359.56' - 0 != (840.53, 8980) ? '*' : (7.48e2, 'g')) : 'f')) {
            for (var u8a in b6_) {
                L7D(b6_[u8a], Z8B.cb);
            }
            return;
        }
        if (!b6_[Z8B.type]) {
            Y3A = 'Attempted ';
            Y3A += 'to remove an invalid listener.';
            throw new Error(Y3A);
        }
        L7D(b6_[Z8B.type], Z8B.cb);
    };
    r0g.ChartEngine.prototype.dispatch = function (i9X, o8h) {
        var o$f;
        o$f = this.callbackListeners[i9X];
        if (o$f) {
            for (var M4t = 0; M4t < o$f.length; M4t++) {
                if (o$f[M4t].call(this, o8h) === !'') {
                    return !![];
                }
            }
        }
        o$f = this.callbackListeners['*'];
        if (o$f) {
            for (var T_1 = 0; T_1 < o$f.length; T_1++) {
                if (o$f[T_1].call(this, o8h) === !!1) {
                    return !![];
                }
            }
        }
        return !!0;
    };
    r0g.ChartEngine.prototype.updateListeners = function (t0S) {
        x2dci.J8h();
        var z9c;
        for (var Q1j in this.plugins) {
            z9c = this.plugins[Q1j];
            if (z9c.display && z9c.listener) {
                z9c.listener(this, t0S);
            }
        }
    };
};
o8 = m$s => {
    var S88 = x2dci;
    S88.r2m();
    var R_H;
    R_H = m$s.CIQ;
    R_H.ChartEngine.prototype.prepend = function (G4j, l6k) {
        var h3d, Q5x;
        S88.C$o(22);
        h3d = S88.d58(G4j, 'prepend');
        if (this instanceof R_H.ChartEngine) {
            Q5x = this.hasOwnProperty(h3d) ? this[h3d] : [];
            this[h3d] = [l6k].concat(Q5x);
        } else {
            Q5x = R_H.ChartEngine.prototype[h3d] || [];
            R_H.ChartEngine.prototype[h3d] = [l6k].concat(Q5x);
        }
        return { method: h3d, func: l6k };
    };
    R_H.ChartEngine.prototype.append = function (w0A, s51) {
        var N$9, W0d, w8M;
        N$9 = 'appen';
        N$9 += 'd';
        S88.C$o(22);
        W0d = S88.d58(w0A, N$9);
        if (this instanceof R_H.ChartEngine) {
            w8M = this.hasOwnProperty(W0d) ? this[W0d] : [];
            this[W0d] = w8M.concat(s51);
        } else {
            w8M = R_H.ChartEngine.prototype[W0d] || [];
            R_H.ChartEngine.prototype[W0d] = w8M.concat(s51);
        }
        return { method: W0d, func: s51 };
    };
    R_H.ChartEngine.prototype.runPrepend = function (u42, A2d, o77) {
        var b2r, G4M, i1g;
        S88.C$o(22);
        S88.r2m();
        b2r = S88.d58(u42, 'prepend');
        G4M = this.hasOwnProperty(b2r) ? this[b2r] : [];
        G4M = G4M.concat(R_H.ChartEngine.prototype[b2r] || []);
        if (!G4M.length) {
            return ![];
        }
        if (!o77) {
            o77 = this;
        }
        for (var I_A = 0; I_A < G4M.length; I_A++) {
            i1g = G4M[I_A].apply(o77, A2d);
            if (i1g) {
                return i1g;
            }
        }
        return !1;
    };
    R_H.ChartEngine.prototype.runAppend = function (j15, t9L, z_C) {
        S88.r2m();
        var v4o, z$Y, z_W;
        S88.M8Y(22);
        v4o = S88.d58(j15, 'append');
        z$Y = this.hasOwnProperty(v4o) ? this[v4o] : [];
        z$Y = z$Y.concat(R_H.ChartEngine.prototype[v4o] || []);
        if (!z$Y.length) {
            return !'1';
        }
        if (!z_C) {
            z_C = this;
        }
        for (var V$C = 0; V$C < z$Y.length; V$C++) {
            z_W = z$Y[V$C].apply(z_C, t9L);
            if (z_W) {
                return z_W;
            }
        }
        return ![];
    };
    R_H.ChartEngine.prototype.removeInjection = function (D4y) {
        var X1D, h$l;
        X1D = D4y.method;
        if (this instanceof R_H.ChartEngine) {
            if (!this[X1D]) {
                return;
            }
            for (h$l = 0; h$l < this[X1D].length; h$l++) {
                if (this[X1D][h$l] == D4y.func) {
                    this[X1D].splice(h$l, +'1');
                    return;
                }
            }
        } else {
            if (!R_H.ChartEngine.prototype[X1D]) {
                return;
            }
            for (h$l = 0; h$l < R_H.ChartEngine.prototype[X1D].length; h$l++) {
                if (R_H.ChartEngine.prototype[X1D][h$l] == D4y.func) {
                    R_H.ChartEngine.prototype[X1D].splice(h$l, 1);
                    return;
                }
            }
        }
    };
    R_H.ChartEngine.prototype.remove = function (u3$) {
        S88.J8h();
        var t9F;
        if (this instanceof R_H.ChartEngine) {
            S88.C$o(22);
            delete this[S88.c6Y(u3$, 'append')];
            S88.C$o(22);
            delete this[S88.d58(u3$, 'prepend')];
        } else {
            t9F = 'appen';
            t9F += 'd';
            S88.C$o(22);
            delete R_H.ChartEngine.prototype[S88.d58(u3$, t9F)];
            S88.M8Y(22);
            delete R_H.ChartEngine.prototype[S88.c6Y(u3$, 'prepend')];
        }
    };
};
d7 = V1n => {
    var j13 = x2dci;
    var k4o, S39;
    k4o = V1n.CIQ;
    S39 = V1n.timezoneJS;
    k4o.ChartEngine.prototype.convertToDataZone = function (B1H) {
        var H_s;
        if ((B1H || B1H === 0) && this.dataZone) {
            H_s = k4o.convertTimeZone(B1H, null, this.dataZone);
            B1H = new Date(
                H_s.getFullYear(),
                H_s.getMonth(),
                H_s.getDate(),
                H_s.getHours(),
                H_s.getMinutes(),
                H_s.getSeconds(),
                H_s.getMilliseconds()
            );
        }
        return B1H;
    };
    k4o.ChartEngine.prototype.debug = function () {};
    k4o.ChartEngine.prototype.fps = function (Q0x, d_T) {
        var T$z, z$Z, P4w, k_H;
        T$z = ' sec';
        T$z += 'onds';
        Q0x = Q0x || 5;
        z$Z = new Date().getTime();
        P4w = 0;
        k_H = this;
        function r5F() {
            var C3z, l4E;
            C3z = (new Date().getTime() - z$Z) / +'1000';
            j13.r2m();
            if (C3z > Q0x) {
                j13.C$o(40);
                l4E = j13.d58(C3z, P4w);
                j13.C$o(22);
                console.log(j13.c6Y(l4E, 'FPS='));
                if (d_T) {
                    d_T(l4E);
                }
                return;
            }
            k_H.draw();
            P4w++;
            if (k4o.ChartEngine.useAnimation) {
                requestAnimationFrame(r5F);
            } else {
                setTimeout(r5F, 0);
            }
        }
        j13.M8Y(53);
        console.log(j13.d58('Running fps() for ', Q0x, T$z));
        r5F();
    };
    k4o.ChartEngine.htmlControls = {
        mSticky: '<div class="stx_sticky"> <span class="mStickyInterior"></span></div>',
        iconsTemplate:
            '<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-panel-legend"></div></div>',
    };
    k4o.ChartEngine.prototype.setChartType = function (x2p) {
        var t1K, j2r;
        j13.J8h();
        t1K = this.layout;
        j2r = this.chart;
        if (t1K.aggregationType != 'ohlc') {
            t1K.aggregationType = 'ohlc';
            if (j2r.canvas) {
                this.createDataSet();
            }
        }
        t1K.chartType = x2p;
        this.setMainSeriesRenderer();
        if (this.mainSeriesRenderer.isAggregation && this.setAggregationType) {
            return this.setAggregationType(x2p);
        }
        j2r.defaultChartStyleConfig = { type: x2p };
        if (this.displayInitialized) {
            this.draw();
        }
        this.changeOccurred('layout');
    };
    k4o.ChartEngine.prototype.setChartScale = function (f1T) {
        var t1V;
        if (!f1T) {
            f1T = 'linear';
        }
        t1V = { percent: !!'1', relative: !![] };
        this.layout.chartScale = f1T;
        j13.J8h();
        if (this.chart.canvas) {
            this.draw();
        }
        this.changeOccurred('layout');
    };
    k4o.ChartEngine.prototype.checkLogScale = function () {
        var t8T, m6d;
        t8T = 'lo';
        t8T += 'g';
        if (this.runPrepend('checkLogScale', arguments)) {
            return;
        }
        if (this.layout.chartScale !== t8T) {
            return ![];
        }
        m6d = ![];
        if (this.chart.yAxis.lowValue <= 0) {
            this.setChartScale('linear');
            this.dispatch('notification', 'logdeactivated');
            m6d = !0;
        }
        this.runAppend('checkLogScale', arguments);
        return m6d;
    };
    k4o.ChartEngine.prototype.setAdjusted = function (z9t) {
        this.layout.adj = z9t;
        if (this.chart.canvas) {
            this.createDataSet();
            this.draw();
        }
        this.changeOccurred('layout');
    };
    k4o.ChartEngine.prototype.padOutPrice = function (b7W, A$X) {
        var U0r, e3q, V8m, O1w;
        if (b7W !== 0 && (!b7W || typeof b7W != 'number')) {
            return '';
        }
        if (!A$X && A$X !== 0) {
            A$X = b7W;
        }
        j13.C$o(22);
        U0r = j13.d58(A$X, '');
        e3q = +'0';
        if (U0r.indexOf('.') > -('1' | 0)) {
            j13.M8Y(59);
            var X8I = j13.c6Y(1005, 20, 311, 12);
            j13.C$o(0);
            var H42 = j13.d58(7472, 8);
            j13.C$o(67);
            var R6i = j13.c6Y(8490, 2828, 4245);
            j13.C$o(141);
            var L1g = j13.c6Y(5, 2187, 4362, 6, 2);
            j13.C$o(79);
            var q9C = j13.c6Y(14141, 5, 16, 14915);
            j13.C$o(142);
            var U8c = j13.c6Y(2525, 7603, 7575, 7, 19);
            j13.M8Y(111);
            var v5O = j13.c6Y(8, 10, 1, 2);
            e3q =
                U0r.substring(
                    U0r.indexOf(
                        +'480' === 215.42
                            ? (X8I, 402.35)
                            : (H42, R6i) < L1g
                            ? (q9C, 680.28) == '269.56' - 0
                                ? 'x'
                                : '.'
                            : U8c
                    )
                ).length - v5O;
        }
        if (A$X >= 1000) {
            e3q = Math.max(e3q, 0);
        } else if (A$X < 2) {
            e3q = Math.max(e3q, 4);
        } else {
            e3q = Math.max(e3q, 2);
        }
        V8m = this.internationalizer;
        if (V8m) {
            O1w = V8m.priceFormatters.length;
            if (e3q >= O1w) {
                j13.C$o(0);
                e3q = j13.c6Y(O1w, 1);
            }
            b7W = V8m.priceFormatters[e3q].format(b7W);
        } else {
            b7W = b7W.toFixed(e3q);
        }
        return b7W;
    };
    k4o.ChartEngine.prototype.formatPrice = function (g6y, G4S) {
        var A1K, j97, h2e;
        if (g6y !== 0 && (!g6y || typeof g6y == 'undefined')) {
            return '';
        }
        if (!G4S) {
            G4S = this.currentPanel;
        }
        if (!G4S) {
            G4S = this.chart.panel;
        }
        j13.J8h();
        if (!G4S) {
            return g6y.toString();
        }
        A1K = G4S.decimalPlaces;
        if (!A1K && A1K !== '0' << 64) {
            A1K = G4S.chart.decimalPlaces;
        }
        if (!A1K && A1K !== 0) {
            return g6y.toString();
        }
        j97 = this.internationalizer;
        if (j97) {
            h2e = j97.priceFormatters.length;
            if (A1K >= h2e) {
                j13.M8Y(0);
                A1K = j13.d58(h2e, 1);
            }
            g6y = j97.priceFormatters[A1K].format(g6y);
        } else {
            g6y = g6y.toFixed(A1K);
        }
        return g6y;
    };
    k4o.ChartEngine.prototype.determineMinMax = function (i53, X4l, i0y, K11, n4V, u9g, L9L, a1l, W0O) {
        var B4k, t8V, J8s, O_i, O8c, n1B, Y2F, h$L, P8g, V30, B1n, A3A;
        j13.M8Y(124);
        var S8E = j13.d58(0, 14, 2, 17);
        B4k = Number.MAX_VALUE * S8E;
        t8V = Number.MAX_VALUE;
        j13.J8h();
        J8s = !'1';
        O_i = i53.length;
        if (!W0O) {
            W0O = [];
        }
        O8c = [];
        if (n4V) {
            O_i = n4V;
        }
        for (var C4i = 0; C4i <= O_i + 1; C4i++) {
            if (X4l.length) {
                if (C4i == O_i) {
                    n1B = this.getPreviousBar(this.chart, X4l['0' - 0], 0);
                } else if (C4i == O_i + 1) {
                    n1B = this.getNextBar(this.chart, X4l[0], O_i - 1);
                } else {
                    n1B = i53[C4i];
                }
            }
            if (!n1B) continue;
            if (!K11) {
                if (n1B.transform) {
                    J8s = !![];
                    n1B = n1B.transform;
                } else if (J8s) continue;
            }
            Y2F = 0;
            for (var g1Z = 0; g1Z < X4l.length; g1Z++) {
                h$L = 'n';
                h$L += 'umber';
                P8g = k4o.existsInObjectChain(n1B, X4l[g1Z]);
                if (!P8g) continue;
                V30 = P8g.obj[P8g.member];
                if (typeof V30 == h$L) {
                    V30 = [V30];
                }
                for (var z4J = 0; z4J < V30.length; z4J++) {
                    B1n = V30[z4J];
                    if (u9g && B1n instanceof Array) {
                        B1n = B1n[0];
                    }
                    if (B1n || B1n === 0) {
                        if (i0y === !!{} || (i0y instanceof Array && i0y.indexOf(X4l[g1Z]) > -1)) {
                            Y2F += B1n;
                            if (Y2F > B4k) {
                                B4k = Y2F;
                            }
                            if (Y2F < t8V) {
                                t8V = Y2F;
                            }
                        } else {
                            if (B1n > B4k) {
                                B4k = B1n;
                            }
                            if (B1n < t8V) {
                                t8V = B1n;
                            }
                            O8c.push({ value: B1n, quote: n1B });
                        }
                    }
                }
            }
            if (i0y === !![] || (i0y instanceof Array && i0y.indexOf(X4l[g1Z]) > -1)) {
                O8c.push({ value: Y2F, quote: n1B });
            }
        }
        A3A = [t8V, B4k];
        W0O.forEach(function (z7r) {
            A3A = z7r(O8c, L9L, a1l) || A3A;
        });
        if (A3A[1] == Number.MAX_VALUE * -1) {
            A3A[1] = +'0';
        }
        if (A3A[0] == Number.MAX_VALUE) {
            A3A[0] = 0;
        }
        return A3A;
    };
    k4o.ChartEngine.prototype.initializeDisplay = function (D9X) {
        var b0C, P3b, B8T, F2F, v2d, r_x, m5Y, r_f, l2V, w1K, z2T, C4p, G1n, G_0, n7p, i6W;
        b0C = 'Clo';
        b0C += 'se';
        P3b = 'H';
        P3b += 'i';
        P3b += 'g';
        P3b += 'h';
        if (this.runPrepend('initializeDisplay', arguments)) {
            return;
        }
        function d3R(K8c, w4G) {
            var s$G, S6w, W93, W_J, p6t, a1_, c7h, m3s, W$l, p2j;
            s$G = !'1';
            S6w = r_x.layout && r_x.layout.studies && r_x.layout.studies[K8c.name];
            if (S6w && (!w4G || w4G.name == S6w.panel)) {
                for (var f$u in S6w.outputMap) {
                    B8T.push(f$u);
                    if (S6w.study) {
                        if (S6w.study.renderer) {
                            B8T = B8T.concat(k4o.createObjectChainNames(f$u, m5Y));
                        } else if (!S6w.study.seriesFN) {
                            B8T = B8T.concat(k4o.createObjectChainNames(f$u, r_f));
                        }
                    }
                }
                for (var h$h = 0; h$h <= 2; h$h++) {
                    B8T.push(S6w.name + '_hist' + (h$h ? h$h : ''));
                }
                s$G = !!{};
            }
            if (!w4G) {
                return;
            }
            K8c.studies = [];
            K8c.renderers = [];
            if (s$G) {
                K8c.studies.push(K8c.name);
            }
            for (var D3v in W9f) {
                W93 = W9f[D3v];
                W_J = W93.params;
                p6t = W_J.panel;
                if ((W_J.yAxis || !r_x.panels[p6t] || r_x.panels[p6t].yAxis) != K8c) continue;
                if (p6t != w4G.name) continue;
                a1_ = W93.highLowBars ? m5Y : r_f;
                v2d = W93.bounded;
                for (var n2n = 0; n2n < W93.seriesParams.length; n2n++) {
                    c7h = W93.seriesParams[n2n];
                    if (c7h.hidden) continue;
                    m3s = void 0;
                    if (c7h.subField) {
                        m3s = k4o.createObjectChainNames(c7h.symbol, [c7h.subField]).concat(c7h.symbol);
                    } else if (c7h.symbol) {
                        m3s = k4o.createObjectChainNames(c7h.symbol, a1_).concat(c7h.symbol);
                    } else if (c7h.field) {
                        m3s = c7h.field;
                    } else if (K8c == D9X.panel.yAxis) {
                        m3s = a1_;
                    }
                    if (m3s) {
                        B8T = B8T.concat(m3s);
                    }
                    if (W93.useSum) {
                        F2F = F2F.concat(m3s);
                    }
                }
                K8c.renderers.push(D3v);
            }
            for (var Z_l in r_x.overlays) {
                W$l = r_x.overlays[Z_l];
                if (W$l.panel != w4G.name) continue;
                if (W$l.name == K8c.name) continue;
                p2j = W$l.getYAxis(r_x);
                if (p2j != K8c) continue;
                K8c.studies.push(W$l.name);
                if (D9X.includeOverlaysInMinMax) {
                    d3R({ name: W$l.name });
                }
            }
        }
        B8T = [];
        F2F = [];
        v2d = ![];
        r_x = this;
        m5Y = ['Close', 'Open', P3b, 'Low'];
        r_f = [D9X.defaultPlotField || b0C];
        var { mainSeriesRenderer: j3G } = this;
        var { dataSegment: f31, seriesRenderers: W9f } = D9X;
        w1K = null;
        z2T = Math.floor((D9X.width - this.micropixels) / this.layout.candleWidth);
        if (D9X.scroll > D9X.maxTicks && D9X.maxTicks > z2T + 1) {
            j13.C$o(44);
            var l3V = j13.d58(9, 7, 3, 1);
            w1K = f31.length - l3V;
        }
        C4p = [];
        for (var C15 in this.panels) {
            G1n = this.panels[C15];
            C4p = G1n.yaxisLHS.concat(G1n.yaxisRHS);
            for (var t8t = 0; t8t < C4p.length; t8t++) {
                G_0 = C4p[t8t];
                B8T = [];
                F2F = [];
                n7p = D9X.transformFunc && G_0 == D9X.panel.yAxis;
                d3R(G_0, G1n);
                if (!this.currentlyImporting && !G_0.renderers.length && !G_0.studies.length) {
                    this.deleteYAxisIfUnused(G1n, G_0);
                    continue;
                }
                if (j3G && j3G.determineMax) {
                    l2V = j3G.determineMax(f31, B8T, F2F, !n7p, w1K, v2d, G1n, G_0);
                } else {
                    l2V = this.determineMinMax(f31, B8T, F2F, !n7p, w1K, v2d, G1n, G_0);
                }
                if (this.baselineHelper) {
                    l2V = this.setBaselineMinMax(l2V, G_0);
                }
                G_0.lowValue = l2V[0];
                G_0.highValue = l2V[1];
                if (G_0 == D9X.panel.yAxis) {
                    D9X.lowValue = G_0.lowValue;
                    D9X.highValue = G_0.highValue;
                }
            }
        }
        i6W = D9X.state.aggregation;
        if (i6W && i6W.box) {
            j13.M8Y(26);
            var l82 = j13.d58(9, 15, 8);
            D9X.lowValue -= i6W.box / l82;
            j13.M8Y(143);
            var R3L = j13.c6Y(14, 18, 1, 259, 9);
            D9X.highValue += i6W.box / R3L;
        }
        this.runAppend('initializeDisplay', arguments);
    };
    k4o.ChartEngine.prototype.setMarket = function (w1z, t8$) {
        j13.J8h();
        if (!k4o.Market) {
            return;
        }
        if (!t8$) {
            t8$ = this.chart;
        }
        t8$.market = new k4o.Market(w1z);
        for (var v8y in this.layout.marketSessions) {
            t8$.market.disableSession(v8y, this.layout.marketSessions[v8y]);
        }
    };
    k4o.ChartEngine.prototype.setMarketFactory = function (w2D) {
        j13.r2m();
        this.marketFactory = w2D;
    };
    k4o.ChartEngine.prototype.setResizeTimer = function (d9S) {
        j13.J8h();
        this.resizeDetectMS = d9S;
        this.resizeHandle = k4o.resizeObserver(this.chart.container, S4a(this), this.resizeHandle, d9S);
        function S4a(D8y, F1D) {
            var W2g;
            j13.J8h();
            W2g = function () {
                if (!D8y.chart.canvas) {
                    return;
                }
                j13.J8h();
                if (!k4o.isAndroid) {
                    if (
                        D8y.chart.canvas.height !=
                            Math.floor(D8y.devicePixelRatio * D8y.chart.container.clientHeight) ||
                        D8y.chart.canvas.width != Math.floor(D8y.devicePixelRatio * D8y.chart.container.clientWidth)
                    ) {
                        D8y.resizeChart();
                    }
                }
            };
            return function () {
                var H5t;
                H5t = 'undef';
                H5t += 'ined';
                if (typeof ResizeObserver !== H5t) {
                    if (k4o.ChartEngine.useAnimation) {
                        requestAnimationFrame(W2g);
                    } else {
                        j13.C$o(46);
                        setTimeout(W2g, j13.c6Y('0', 0));
                    }
                } else {
                    W2g();
                }
            };
        }
    };
    k4o.ChartEngine.prototype.getRenderedItems = function () {
        var Q_Y, N4O, T1W, Y_o, G30, q0K, Z2d, r3J, n1L;
        Q_Y = 'Hig';
        Q_Y += 'h';
        N4O = this.chart;
        T1W = this.currentPanel;
        if (!T1W) {
            return;
        }
        Y_o = ['Open', Q_Y, 'Low', 'Close'];
        G30 = ['Close'];
        q0K = [];
        for (var K$k in this.overlays) {
            if (this.overlays[K$k].panel !== T1W.name) continue;
            q0K = q0K.concat(Object.keys(this.overlays[K$k].outputMap));
        }
        for (var T7C in N4O.seriesRenderers) {
            Z2d = N4O.seriesRenderers[T7C];
            if (Z2d.params.panel != T1W.name) continue;
            for (var X4j in Z2d.seriesParams) {
                r3J = Z2d.seriesParams[X4j];
                n1L = Z2d.highLowBars ? Y_o : G30;
                if (r3J.subField) {
                    q0K = q0K.concat(k4o.createObjectChainNames(r3J.symbol, [r3J.subField])).concat(r3J.symbol);
                } else if (r3J.symbol) {
                    q0K = q0K.concat(k4o.createObjectChainNames(r3J.symbol, n1L)).concat(r3J.symbol);
                } else if (r3J.field) {
                    q0K.push(r3J.field);
                } else if (T1W == N4O.panel) {
                    q0K = q0K.concat(n1L);
                }
            }
        }
        return q0K;
    };
    k4o.ChartEngine.prototype.setTransform = function (d4t, Y$e, M4i) {
        d4t.transformFunc = Y$e;
        d4t.untransformFunc = M4i;
    };
    k4o.ChartEngine.prototype.unsetTransform = function (D7J) {
        delete D7J.transformFunc;
        delete D7J.untransformFunc;
        for (var m66 = 0; D7J.dataSet && m66 < D7J.dataSet.length; m66++) {
            D7J.dataSet[m66].transform = null;
        }
    };
    k4o.ChartEngine.prototype.isEquationChart = function (h6Q) {
        if (h6Q && h6Q[+'0'] == '=') {
            if (!this.allowEquations || !k4o.fetchEquationChart) {
                console.warn('Error, equation chart option requires equationsAdvanced.js');
                return ![];
            }
            return !![];
        }
        return !{};
    };
    k4o.ChartEngine.prototype.correctIfOffEdge = function (C2t) {
        var F4Q, E$q, d4u, O9$, w74, O2o, e0G, q6I, s21, h22, B2m;
        F4Q = 'cor';
        F4Q += 'r';
        F4Q += 'ectIfOffEdge';
        if (this.runPrepend('correctIfOffEdge', arguments)) {
            return;
        }
        for (var L7y in this.charts) {
            E$q = this.charts[L7y];
            d4u = E$q.dataSet;
            O9$ = E$q.maxTicks;
            w74 = this.layout;
            O2o = this.minimumLeftBars;
            e0G = Math.min(O2o, O9$);
            if (E$q.allowScrollPast) {
                j13.C$o(0);
                q6I = j13.d58(O9$, e0G);
                if (e0G > d4u.length) {
                    q6I = O9$ - d4u.length;
                }
                if (E$q.scroll - q6I >= d4u.length) {
                    j13.C$o(69);
                    var A_G = j13.d58(2, 18, 4, 17);
                    E$q.scroll = d4u.length + q6I - A_G;
                    this.micropixels = 0;
                }
                if (E$q.scroll <= e0G) {
                    E$q.scroll = e0G;
                    this.micropixels = 0;
                }
            } else {
                if (E$q.scroll < e0G) {
                    E$q.scroll = e0G;
                }
                if (E$q.scroll > d4u.length) {
                    E$q.scroll = d4u.length;
                }
            }
            if (E$q.allowScrollFuture === !{}) {
                s21 = this.getLabelOffsetInPixels(E$q, w74.chartType) + w74.candleWidth * E$q.whiteSpaceFutureTicks;
                j13.M8Y(85);
                var f1i = j13.c6Y(2, 16, 3, 17, 3);
                h22 = O9$ - Math.round(s21 / w74.candleWidth) - f1i;
                B2m = this.micropixels < 0 ? E$q.scroll - 1 : E$q.scroll;
                if (B2m < h22) {
                    E$q.scroll = h22;
                    this.micropixels = 0;
                }
            }
        }
        this.runAppend(F4Q, arguments);
    };
    j13.r2m();
    k4o.ChartEngine.prototype.getStartDateOffset = function () {
        for (var c3x = 0; c3x < this.chart.dataSegment.length; c3x++) {
            if (this.chart.dataSegment[c3x]) {
                return c3x;
            }
        }
        return 0;
    };
    k4o.ChartEngine.prototype.setStartDate = function (C53) {
        var C_3;
        for (var j$O = 0; j$O < this.chart.dataSet.length; j$O++) {
            C_3 = this.chart.dataSet[j$O];
            if (C_3.DT.getTime() == C53.getTime()) {
                this.chart.scroll = this.chart.dataSet.length - j$O;
                this.draw();
                return;
            }
        }
    };
    k4o.ChartEngine.prototype.clearPixelCache = function () {
        var n19, g8s;
        for (var V1e in this.panels) {
            n19 = this.panels[V1e];
            n19.cacheHigh = null;
            n19.cacheLow = null;
            n19.cacheLeft = 1000000;
            n19.cacheRight = -1;
        }
        for (var m60 in this.charts) {
            g8s = this.charts[m60];
            if (!g8s.dataSet) continue;
            for (var V4m = 0; V4m < g8s.dataSet.length; V4m++) {
                g8s.dataSet[V4m].cache = {};
            }
        }
    };
    k4o.ChartEngine.prototype.adjustBackingStore = function (W_a, o1Y) {
        var Y_C, P7s, t7X, d4r;
        this.devicePixelRatio = window.devicePixelRatio || 1;
        if (this.devicePixelRatio < 1.0) {
            this.devicePixelRatio = 1.0;
        }
        Y_C =
            o1Y.webkitBackingStorePixelRatio ||
            o1Y.mozBackingStorePixelRatio ||
            o1Y.msBackingStorePixelRatio ||
            o1Y.oBackingStorePixelRatio ||
            o1Y.backingStorePixelRatio ||
            '1' << 0;
        P7s = this.devicePixelRatio / Y_C;
        if (!this.useBackingStore) {
            this.devicePixelRatio = this.adjustedDisplayPixelRatio = 1;
            return;
        }
        if (!k4o.isAndroid || k4o.is_chrome || k4o.isFF) {
            t7X = W_a.width;
            d4r = W_a.height;
            j13.C$o(38);
            W_a.width = j13.d58(t7X, P7s);
            j13.M8Y(38);
            W_a.height = j13.c6Y(d4r, P7s);
            j13.C$o(22);
            W_a.style.width = j13.c6Y('px', t7X);
            j13.C$o(22);
            W_a.style.height = j13.c6Y('px', d4r);
            o1Y.scale(P7s, P7s);
            this.adjustedDisplayPixelRatio = P7s;
            this.backing = { ratio: P7s, width: W_a.width, height: W_a.height, styleWidth: t7X, styleHeight: d4r };
        }
    };
    k4o.ChartEngine.prototype.reconstituteBackingStore = function () {
        var t6I, m3J, J7w, t1o, T9y;
        if (!this.useBackingStore || !this.backing) {
            return;
        }
        t6I = [this.chart.canvas];
        if (this.useBackgroundCanvas) {
            t6I.push(this.chart.backgroundCanvas);
        }
        m3J = this.backing;
        t6I.forEach(function (V6X) {
            if (V6X.width == m3J.width) {
                return;
            }
            V6X.width = m3J.width;
            V6X.height = m3J.height;
            j13.r2m();
            V6X.context.scale(m3J.ratio, m3J.ratio);
        });
        J7w = 712748429;
        t1o = 1654436079;
        T9y = 2;
        for (var O06 = 1; j13.O$R(O06.toString(), O06.toString().length, 15960) !== J7w; O06++) {
            this.adjustedDisplayPixelRatio = m3J.ratio;
            T9y += 2;
        }
        if (j13.q2D(T9y.toString(), T9y.toString().length, 11143) !== t1o) {
            this.adjustedDisplayPixelRatio = m3J.ratio;
        }
        this.draw();
    };
    k4o.ChartEngine.prototype.disableBackingStore = function () {
        var y3T, E$W;
        if (!this.useBackingStore || !this.backing) {
            return;
        }
        y3T = [this.chart.canvas];
        if (this.useBackgroundCanvas) {
            y3T.push(this.chart.backgroundCanvas);
        }
        E$W = this.backing;
        y3T.forEach(function (U1e) {
            var E$L, L33, E17;
            if (U1e.width == E$W.styleWidth) {
                return;
            }
            E$L = -1933644852;
            L33 = -581806431;
            E17 = 2;
            for (var y3p = 1; j13.O$R(y3p.toString(), y3p.toString().length, 493) !== E$L; y3p++) {
                U1e.width = E$W.styleWidth;
                U1e.height = E$W.styleHeight;
                U1e.context.scale(1, 1);
                E17 += 2;
            }
            if (j13.O$R(E17.toString(), E17.toString().length, 13839) !== L33) {
                U1e.width = E$W.styleWidth;
                U1e.height = E$W.styleHeight;
                U1e.context.scale(7, 3);
            }
        });
        j13.M8Y(19);
        j13.r2m();
        this.adjustedDisplayPixelRatio = j13.d58(0, '1');
        this.draw();
    };
    k4o.ChartEngine.prototype.getBackgroundCanvas = function (C9D) {
        if (!C9D) {
            C9D = this.chart;
        }
        return this.useBackgroundCanvas ? C9D.backgroundCanvas : C9D.canvas;
    };
    k4o.ChartEngine.prototype.resizeCanvas = function () {
        var E3h, P5w, Z0v, s7t, Q$V, I4f, y49, n3V, z1E;
        j13.J8h();
        E3h = this.chart.canvas;
        P5w = this.chart.context;
        if (E3h && P5w) {
            this.floatCanvas.height = this.chart.tempCanvas.height = this.chart.backgroundCanvas.height = E3h.height = this.chart.container.clientHeight;
            this.floatCanvas.width = this.chart.tempCanvas.width = this.chart.backgroundCanvas.width = E3h.width = this.chart.container.clientWidth;
            this.adjustBackingStore(E3h, P5w);
            this.adjustBackingStore(this.chart.tempCanvas, this.chart.tempCanvas.context);
            this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context);
            this.adjustBackingStore(this.chart.backgroundCanvas, this.chart.backgroundCanvas.context);
        }
        Z0v = this.container.getBoundingClientRect();
        this.top = Z0v.top;
        this.left = Z0v.left;
        this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth;
        this.right = this.left + this.canvasWidth;
        this.height = this.chart.container.clientHeight;
        this.width = this.right - this.left;
        if (this.width === '0' >> 32 && !this.container.dimensionlessCanvas && this.container.closest('html')) {
            s7t = 'warning: zero width chart. Check CSS for cha';
            s7t += 'rt co';
            s7t += 'ntainer.';
            console.log(s7t);
        }
        this.bottom = this.top + this.height;
        this.calculateYAxisPositions();
        this.chart.canvasRight = this.right;
        this.chart.canvasHeight = this.height;
        Q$V = this.layout.candleWidth;
        if (typeof Q$V == 'undefined') {
            Q$V = 8;
        }
        for (var s5g in this.charts) {
            I4f = this.charts[s5g];
            this.setCandleWidth(Q$V, I4f);
            if (I4f.scroll < I4f.width / Q$V) {
                I4f.scroll = Math.floor(I4f.width / Q$V);
                y49 = Math.round(this.preferences.whitespace / this.layout.candleWidth);
                I4f.scroll -= y49;
            }
            n3V = 10;
            try {
                j13.M8Y(0);
                var U_i = j13.d58(24, 22);
                z1E = P5w.measureText('10:00').width * U_i;
            } catch (N$$) {
                z1E = 100;
            }
            while (n3V > 1) {
                if (this.chart.width / z1E > n3V) break;
                n3V /= 1.5;
            }
            I4f.xAxis.autoComputedTickSizePixels = Math.round(this.chart.width / n3V);
            if (I4f.xAxis.autoComputedTickSizePixels < 1) {
                I4f.xAxis.autoComputedTickSizePixels = +'1';
            }
        }
    };
    k4o.ChartEngine.prototype.setCandleWidth = function (v_H, W3c) {
        if (!W3c) {
            W3c = this.chart;
        }
        v_H = this.constrainCandleWidth(v_H);
        this.layout.candleWidth = v_H;
        j13.C$o(144);
        var X0X = j13.d58(7, 14, 7, 11, 246);
        W3c.maxTicks = Math.round(W3c.width / v_H) + X0X;
    };
    k4o.ChartEngine.prototype.constrainCandleWidth = function (E6h) {
        var Q2p, Q7E, Q5k;
        Q2p = this.minimumCandleWidth;
        Q7E = this.maximumCandleWidth;
        Q5k = this.animations.zoom;
        if (Q2p && E6h < Q2p) {
            E6h = Q2p;
            if (Q5k && Q5k.running) {
                Q5k.stop();
            }
        }
        if (Q7E && E6h > Q7E) {
            E6h = Q7E;
            if (Q5k && Q5k.running) {
                Q5k.stop();
            }
        }
        return E6h;
    };
    k4o.ChartEngine.prototype.resizeChart = function (t$T) {
        var E0E;
        if (this.runPrepend('resizeChart', arguments)) {
            return;
        }
        if (t$T !== !1) {
            t$T = !!{};
        }
        if (t$T) {
            this.preAdjustScroll();
        }
        E0E = this.chart.canvasHeight;
        this.resizeCanvas();
        if (t$T) {
            this.postAdjustScroll();
        }
        if (this.displayInitialized) {
            this.adjustPanelPositions();
            this.draw();
        } else if (this.chart.canvasHeight !== 0 && E0E === 0) {
            this.adjustPanelPositions();
            this.draw();
        }
        this.doDisplayCrosshairs();
        this.updateChartAccessories();
        this.runAppend('resizeChart', arguments);
    };
    k4o.ChartEngine.prototype.clear = function () {
        var b6C;
        this.displayInitialized = !1;
        for (var Z9Z in this.layout.studies) {
            b6C = this.layout.studies[Z9Z];
            k4o.getFn('Studies.removeStudy')(this, b6C);
        }
        if (this.controls.chartControls) {
            this.controls.chartControls.style.display = 'none';
        }
        this.chart.panel.title.innerHTML = '';
        this.chart.panel.title.appendChild(document.createTextNode(this.chart.panel.display));
    };
    k4o.ChartEngine.prototype.fillScreen = function () {
        var g5J, w8Q, A9X, O8r, h5g;
        j13.r2m();
        g5J = this.chart;
        w8Q = this.layout.candleWidth;
        A9X = g5J.width - this.preferences.whitespace;
        O8r = g5J.dataSet.length;
        if (O8r * w8Q >= A9X) {
            this.draw();
            return;
        }
        if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars) {
            O8r--;
        }
        j13.M8Y(40);
        h5g = j13.c6Y(O8r, A9X);
        this.setCandleWidth(h5g, g5J);
        this.home({ maintainWhitespace: !![] });
    };
    k4o.ChartEngine.prototype.setMaxTicks = function (a6w, i3x) {
        var L8n;
        if (!i3x) {
            i3x = {};
        }
        a6w = Math.round(a6w);
        if (a6w < 2) {
            a6w = 2;
        }
        L8n = i3x.padding ? i3x.padding : 0;
        j13.r2m();
        this.layout.candleWidth = (this.chart.width - L8n) / a6w;
        if (!this.layout.candleWidth) {
            this.layout.candleWidth = +'8';
        }
        this.chart.maxTicks = Math.round(this.chart.width / this.layout.candleWidth - 0.499);
        if (i3x.padding || i3x.padding === 0) {
            j13.C$o(22);
            this.chart.scroll = j13.c6Y(1, a6w);
        }
    };
    k4o.ChartEngine.prototype.initializeChart = function (n8Z) {
        var E2b, u1X, s1Y, U4g, q$9, a3V, H7L, T_W, l$y, n7Y, i$$, E7V, T$2, o5d, y3B, v02, K8y, t2a, r0I, x_H, Y_d;
        E2b = 'in';
        E2b += 'i';
        E2b += 'tializeC';
        E2b += 'hart';
        u1X = 'canva';
        u1X += 's';
        s1Y = 'c';
        s1Y += 'an';
        s1Y += 'va';
        s1Y += 's';
        if (this.runPrepend('initializeChart', arguments)) {
            return;
        }
        U4g = this.chart;
        if (!U4g.symbolObject.symbol) {
            U4g.symbolObject.symbol = U4g.symbol;
        }
        if (this.locale) {
            this.setLocale(this.locale);
        }
        if (!this.displayZone && k4o.ChartEngine.defaultDisplayTimeZone) {
            this.setTimeZone(null, k4o.ChartEngine.defaultDisplayTimeZone);
        }
        this.resetDynamicYAxis({ noRecalculate: !![] });
        this.calculateYAxisPositions();
        this.micropixels = 0;
        if (n8Z) {
            U4g.container = n8Z;
        } else {
            n8Z = U4g.container;
        }
        n8Z.stx = this;
        if (!n8Z.CIQRegistered) {
            n8Z.CIQRegistered = !'';
            k4o.ChartEngine.registeredContainers.push(n8Z);
        }
        if (this.registerHTMLElements) {
            this.registerHTMLElements();
        }
        q$9 = U4g.canvas;
        a3V = U4g.backgroundCanvas;
        H7L = U4g.tempCanvas;
        T_W = this.floatCanvas;
        l$y = U4g.canvasShim;
        if (q$9 && document.createElement('canvas').getContext) {
            if (!q$9.id) {
                n8Z.removeChild(q$9);
                U4g.canvas = null;
            }
            if (H7L && !H7L.id) {
                n8Z.removeChild(H7L);
                U4g.tempCanvas = null;
            }
            if (T_W && !T_W.id) {
                n8Z.removeChild(T_W);
                this.floatCanvas = null;
            }
            if (a3V && !a3V.id) {
                n8Z.removeChild(a3V);
                U4g.backgroundCanvas = null;
            }
        } else {
            this.setCandleWidth(this.layout.candleWidth);
        }
        if (!U4g.backgroundCanvas) {
            a3V = U4g.backgroundCanvas = document.createElement('canvas');
        }
        n8Z.appendChild(a3V);
        V6E(a3V);
        if (!U4g.canvasShim) {
            l$y = U4g.canvasShim = document.createElement('div');
        }
        l$y.className = 'stx-canvas-shim';
        n8Z.appendChild(l$y);
        if (!U4g.canvas) {
            q$9 = U4g.canvas = document.createElement(s1Y);
        }
        n8Z.appendChild(q$9);
        V6E(q$9);
        U4g.context = q$9.context;
        if (!U4g.tempCanvas) {
            H7L = U4g.tempCanvas = document.createElement('canvas');
        }
        n8Z.appendChild(H7L);
        V6E(H7L, !![]);
        if (!this.floatCanvas) {
            T_W = this.floatCanvas = document.createElement(u1X);
        }
        n8Z.appendChild(T_W);
        V6E(T_W, !!{});
        this.resizeCanvas();
        function V6E(A5r, v5S) {
            var c8Q, F2z, Q8i, O2y;
            c8Q = 'n';
            c8Q += 'on';
            c8Q += 'e';
            F2z = 'a';
            F2z += 'bs';
            F2z += 'o';
            F2z += 'lute';
            Q8i = '2';
            Q8i += 'd';
            A5r.context = A5r.getContext(Q8i);
            j13.C$o(0);
            A5r.context.lineWidth = j13.d58('1', 0);
            O2y = A5r.style;
            O2y.position = F2z;
            O2y.left = '0px';
            if (v5S) {
                O2y.display = c8Q;
            }
        }
        if (k4o.isAndroid) {
            H7L.ontouchstart = T_W.ontouchstart = function (J0q) {
                if (J0q.preventDefault) {
                    J0q.preventDefault();
                }
            };
        }
        n7Y = this.panels;
        U4g.panel.display = U4g.symbol;
        if (U4g.symbolDisplay) {
            U4g.panel.display = U4g.symbolDisplay;
        }
        this.adjustPanelPositions();
        U4g.panel = n7Y[U4g.name];
        for (var R6p in n7Y) {
            i$$ = n7Y[R6p].yaxisLHS.concat(n7Y[R6p].yaxisRHS);
            for (var O8D = 0; O8D < i$$.length; O8D++) {
                i$$[O8D].height = n7Y[R6p].yAxis.height;
                this.calculateYAxisMargins(i$$[O8D]);
            }
        }
        this.initialWhitespace = this.preferences.whitespace;
        if (U4g.dataSet && U4g.dataSet.length > 0) {
            U4g.scroll = Math.floor(U4g.width / this.layout.candleWidth);
            E7V = Math.round(this.preferences.whitespace / this.layout.candleWidth);
            U4g.scroll -= E7V;
        }
        if (k4o.touchDevice) {
            T$2 = '.ov';
            T$2 += 'erla';
            T$2 += 'yTras';
            T$2 += 'hCan';
            o5d = n8Z.querySelector('.overlayEdit');
            y3B = n8Z.querySelector(T$2);
            v02 = n8Z.querySelector('.vectorTrashCan');
            K8y = function (c9O, k_9, d3S) {
                j13.r2m();
                return function (D_g) {
                    j13.r2m();
                    c9O.deleteHighlighted(k_9, d3S);
                };
            };
            if (o5d) {
                k4o.safeClickTouch(o5d, K8y(this, !![], !!{}));
                if (y3B) {
                    k4o.safeClickTouch(y3B, K8y(this, ![]));
                }
            } else if (y3B) {
                k4o.safeClickTouch(y3B, K8y(this, !![]));
            }
            if (v02) {
                k4o.safeClickTouch(v02, K8y(this, !''));
            }
        }
        if (this.manageTouchAndMouse) {
            this.registerTouchAndMouseEvents();
        }
        if (this.handleMouseOut) {
            n8Z.onmouseout = (function (x0N) {
                return function (Z9p) {
                    x0N.handleMouseOut(Z9p);
                };
            })(this);
            k4o.smartHover();
        }
        if (this.abortDrawings) {
            this.abortDrawings();
        }
        this.undoStamps = [];
        for (var m9x in n7Y) {
            t2a = n7Y[m9x];
            if (t2a.markerHolder) {
                n8Z.removeChild(t2a.markerHolder);
                t2a.markerHolder = null;
            }
        }
        for (var D9j in this.plugins) {
            r0I = this.plugins[D9j];
            if (r0I.display) {
                if (r0I.initializeChart) {
                    r0I.initializeChart(this);
                }
            }
        }
        if (!this.resizeListenerInitialized) {
            x_H = this;
            this.resizeListenerInitialized = !0;
            Y_d = function () {
                return function (r5T) {
                    x_H.resizeChart();
                };
            };
            this.addDomEventListener(window, 'resize', Y_d(), !!1);
        }
        if (U4g.baseline.userLevel) {
            U4g.baseline.userLevel = null;
        }
        this.setResizeTimer(this.resizeDetectMS);
        this.runAppend(E2b, arguments);
    };
    k4o.ChartEngine.prototype.destroy = function () {
        j13.r2m();
        var m9y, U1E, b0M, z1B;
        this.setResizeTimer(+'0');
        if (this.quoteDriver) {
            this.quoteDriver.die();
        }
        this.styles = {};
        for (var O17 = 0; O17 < this.eventListeners.length; O17++) {
            m9y = this.eventListeners[O17];
            m9y.element.removeEventListener(m9y.event, m9y['function'], m9y.options);
        }
        this.touchAndMouseEventsRegistered = !'1';
        this.eventListeners = [];
        if (this.streamParameters.timeout) {
            clearTimeout(this.streamParameters.timeout);
        }
        U1E = k4o.ChartEngine.registeredContainers;
        b0M = U1E.indexOf(this.chart.container);
        if (b0M > -('1' ^ 0)) {
            U1E.splice(b0M, 1);
        }
        if (this.slider) {
            z1B = U1E.indexOf(this.slider.slider.chart.container);
            if (z1B > -1) {
                U1E.splice(z1B, 1);
            }
        }
    };
    k4o.ChartEngine.prototype.preAdjustScroll = function (F2u) {
        j13.J8h();
        if (!F2u) {
            F2u = this.chart;
        }
        this.previousAdjust = { chart: F2u, scroll: F2u.scroll, maxTicks: F2u.maxTicks };
    };
    k4o.ChartEngine.prototype.postAdjustScroll = function () {
        var c79;
        if (!this.previousAdjust) {
            return;
        }
        c79 = this.previousAdjust.chart;
        c79.scroll = this.previousAdjust.scroll + (c79.maxTicks - this.previousAdjust.maxTicks);
        if (this.displayInitialized) {
            this.draw();
        }
    };
    k4o.ChartEngine.prototype.translateIf = function (r$d) {
        if (this.translationCallback) {
            return this.translationCallback(r$d);
        }
        j13.J8h();
        return r$d;
    };
    k4o.ChartEngine.prototype.doCleanupDates = function (V3q, s1j) {
        var T1A, S_5, R0y, u90, U8e, A0H, M0X;
        j13.J8h();
        if (!V3q || !V3q.length) {
            return;
        }
        for (var z4t = 0; z4t < V3q.length; z4t++) {
            T1A = '[obj';
            T1A += 'ect Stri';
            T1A += 'ng]';
            S_5 = V3q[z4t];
            R0y = S_5.DT;
            if (!R0y && !S_5.Date) continue;
            if (S_5.DT && Object.prototype.toString.call(R0y) == T1A && R0y.length <= 10) {
                R0y = new Date(R0y);
                R0y.setMinutes(R0y.getMinutes() + R0y.getTimezoneOffset());
            } else {
                u90 = '[obj';
                u90 += 'ect Da';
                u90 += 'te]';
                U8e = !'';
                if (!S_5.DT) {
                    R0y = k4o.strToDateTime(S_5.Date);
                    if (S_5.Date.length <= 10) {
                        U8e = ![];
                    }
                }
                if (Object.prototype.toString.call(R0y) != u90) {
                    R0y = new Date(R0y);
                }
                if (S39.Date && this.dataZone && U8e) {
                    A0H = new S39.Date(
                        R0y.getFullYear(),
                        R0y.getMonth(),
                        R0y.getDate(),
                        R0y.getHours(),
                        R0y.getMinutes(),
                        this.dataZone
                    );
                    j13.M8Y(77);
                    var t_5 = j13.c6Y(8804, 4, 10, 980);
                    M0X = R0y.getSeconds() * t_5 + R0y.getMilliseconds();
                    R0y = new Date(A0H.getTime() + M0X);
                }
                if (k4o.ChartEngine.isDailyInterval(s1j)) {
                    j13.C$o(38);
                    R0y.setHours(0, +'0', 0, j13.d58('0', 1));
                }
            }
            if (!S_5.DT) {
                S_5.Date = k4o.yyyymmddhhmmssmmm(R0y);
            }
            S_5.DT = R0y;
        }
    };
    k4o.ChartEngine.prototype.doCleanupGaps = function (X3C, h2L, g6B) {
        var M$v, U3l, I6D, T8G, I5b, Y3d, p_l, p_$, C8r, v9p, Y1v, g4e, b6X, Y_8, c2w;
        function S7D(I$j, q4Y) {
            var J$C, h17, v69, J5d, P7$;
            J$C = 'u';
            J$C += 'ndefin';
            J$C += 'ed';
            h17 = g6B.field;
            if (h17) {
                v69 = 'undefin';
                v69 += 'ed';
                if (typeof I$j[h17] != 'undefined' && typeof q4Y[h17] == v69) {
                    q4Y[h17] = T8G ? null : I$j[h17];
                }
                return;
            }
            if (T8G) {
                return;
            }
            J5d = I$j[g4e];
            P7$ = q4Y[g4e];
            if (typeof J5d != 'undefined' && typeof P7$ == J$C) {
                k4o.ensureDefaults(q4Y, {
                    Close: J5d,
                    Open: J5d,
                    High: J5d,
                    Low: J5d,
                    Volume: 0,
                    Adj_Close: I$j.Adj_Close,
                });
            }
        }
        M$v = 'w';
        M$v += 'e';
        M$v += 'e';
        M$v += 'k';
        if (!X3C || !X3C.length) {
            return X3C;
        }
        function N1h(k1I, a$6) {
            var k4l, v6w, m5D, L8o, l1e;
            k4l = g6B.field;
            j13.r2m();
            v6w = k4l ? p_$[k4l] : p_$;
            if (v6w === undefined) {
                v6w = {};
            }
            m5D = T8G ? null : v6w[g4e];
            L8o = T8G ? null : v6w.Adj_Close;
            while (+k1I < +a$6) {
                l1e = { DT: k1I };
                if (k4l) {
                } else {
                    p_l.push(l1e);
                    k4o.extend(l1e, { Open: m5D, High: m5D, Low: m5D, Close: m5D, Volume: 0, Adj_Close: L8o });
                }
                k1I = Y1v.next();
            }
        }
        U3l = this.layout.interval;
        g6B = g6B ? g6B : {};
        if (!h2L) {
            h2L = this.chart;
        }
        if (!k4o.Market || !h2L.market) {
            return X3C;
        }
        if (!g6B.noCleanupDates) {
            this.doCleanupDates(X3C, U3l);
        }
        I6D = g6B.cleanupGaps;
        if (I6D === !!0) {
            return X3C;
        }
        if (!I6D || I6D === !![]) {
            I6D = this.cleanupGaps || I6D;
        }
        j13.M8Y(106);
        T8G = j13.c6Y(I6D, 'gap');
        if (!I6D) {
            return X3C;
        }
        if (U3l == 'tick') {
            return X3C;
        }
        if (U3l == 'month' || U3l == M$v) {
            I5b = 'd';
            I5b += 'a';
            I5b += 'y';
            if (this.dontRoll) {
                return X3C;
            }
            U3l = I5b;
        }
        Y3d = function (m08) {
            j13.J8h();
            if (m08.DT) {
                if (Object.prototype.toString.call(m08.DT) != '[object Date]') {
                    return new Date(m08.DT);
                }
                return new Date(+m08.DT);
            }
            return k4o.strToDateTime(m08.Date);
        };
        p_l = [];
        p_$ = X3C[0];
        j13.J8h();
        p_l.push(p_$);
        C8r = { begin: Y3d(p_$), interval: U3l, periodicity: 1, timeUnit: this.layout.timeUnit };
        v9p = new k4o.Market(h2L.market.market_def);
        Y1v = v9p.newIterator(C8r);
        if (this.extendedHours && this.extendedHours.filter) {
            Y1v.market.enableAllAvailableSessions();
        }
        g4e = h2L.defaultPlotField;
        for (var G0h = 0; G0h < X3C.length; G0h++) {
            if (X3C[G0h][g4e] !== undefined) break;
            if (X3C[G0h].Value !== undefined) {
                g4e = 'Value';
                break;
            }
        }
        for (var P2x = 1; P2x < X3C.length; P2x++) {
            Y_8 = X3C[P2x];
            b6X = Y1v.next();
            c2w = Y3d(Y_8);
            if (b6X < c2w) {
                N1h(b6X, c2w);
                b6X = Y1v.market._convertFromMarketTZ(Y1v.begin, Y1v.outZone);
            }
            while (c2w < b6X) {
                if (++P2x == X3C.length) {
                    return p_l;
                }
                S7D(p_$, Y_8);
                p_l.push(Y_8);
                p_$ = Y_8;
                Y_8 = X3C[P2x];
                c2w = Y3d(Y_8);
            }
            if (b6X < c2w) {
                P2x--;
                b6X = Y1v.previous();
            } else {
                S7D(p_$, Y_8);
                p_l.push(Y_8);
                p_$ = Y_8;
            }
        }
        return p_l;
    };
    k4o.ChartEngine.prototype.getCreatingLibrary = function () {
        j13.r2m();
        return V1n;
    };
};
m1 = Y_z => {
    var g4U = x2dci;
    var c4S;
    c4S = Y_z.CIQ;
    g4U.r2m();
    c4S.ChartEngine.Panel = function (M3j, r1o) {
        if (r1o) {
            this.yAxis = r1o;
        } else {
            this.yAxis = new c4S.ChartEngine.YAxis();
        }
        this.name = M3j;
        g4U.J8h();
        this.state = {};
    };
    c4S.extend(
        c4S.ChartEngine.Panel.prototype,
        {
            name: null,
            display: null,
            chart: null,
            yAxis: null,
            shareChartXAxis: null,
            top: null,
            bottom: null,
            height: null,
            percent: null,
            displayEdgeIfPadded: !!1,
            noDrag: ![],
            exportable: !!{},
        },
        !!'1'
    );
    c4S.ChartEngine.prototype.whichPanel = function (x2Z) {
        var z8v;
        for (var y3q in this.panels) {
            z8v = this.panels[y3q];
            if (z8v.hidden) continue;
            if (x2Z >= z8v.top && x2Z < z8v.bottom) {
                return z8v;
            }
        }
        return null;
    };
    c4S.ChartEngine.prototype.panelExists = function (j1C) {
        var r7D;
        for (var c4d in this.panels) {
            r7D = this.panels[c4d];
            if (r7D.name == j1C) {
                return !!1;
            }
        }
        return !{};
    };
    c4S.ChartEngine.prototype.storePanels = function () {
        var w26, j3g;
        if (!this.layout) {
            this.layout = {};
        }
        w26 = this.layout;
        w26.panels = {};
        for (var H2_ in this.panels) {
            j3g = this.panels[H2_];
            w26.panels[j3g.name] = { percent: j3g.percent, display: j3g.display, yAxis: j3g.yAxis };
        }
    };
    c4S.ChartEngine.prototype.savePanels = function (d1M) {
        this.storePanels();
        if (d1M !== ![]) {
            this.changeOccurred('layout');
        }
    };
    c4S.ChartEngine.prototype.privateDeletePanel = function (p8s) {
        var W2y, x$k, C26;
        for (var b3q in this.layout.studies) {
            W2y = this.layout.studies[b3q];
            if (W2y.panel == p8s.name) {
                this.cleanupRemovedStudy(W2y);
            }
        }
        delete this.panels[p8s.name];
        for (var g9r in this.overlays) {
            if (this.overlays[g9r].panel == p8s.name) {
                if (this.layout.studies) {
                    this.cleanupRemovedStudy(this.layout.studies[g9r]);
                }
                delete this.overlays[g9r];
            }
        }
        for (var U7g in this.chart.series) {
            if (this.chart.series[U7g].parameters.panel == p8s.name) {
                this.removeSeries(this.chart.series[U7g], this.chart);
            }
        }
        if (p8s.holder) {
            this.chart.container.removeChild(p8s.holder);
            if (this.getMarkerArray) {
                x$k = 'p';
                x$k += 'anelName';
                C26 = this.getMarkerArray(x$k, p8s.name);
                for (var w3$ = 0; w3$ < C26.length; w3$++) {
                    this.removeFromHolder(C26[w3$]);
                }
            }
        }
        if (p8s.handle) {
            p8s.handle.remove();
        }
        this.currentPanel = null;
    };
    c4S.ChartEngine.prototype.plotsInPanel = function (J8j) {
        var w6p, L3w, T0Z, y3o;
        w6p = [];
        L3w = J8j;
        if (typeof J8j == 'object') {
            L3w = J8j.name;
        }
        for (var b5U in this.layout.studies) {
            T0Z = this.layout.studies[b5U];
            if (L3w === T0Z.panel) {
                w6p.push(T0Z);
            }
        }
        for (var Y63 in this.chart.seriesRenderers) {
            y3o = this.chart.seriesRenderers[Y63];
            if (L3w === y3o.params.panel) {
                w6p.push(y3o);
            }
        }
        return w6p;
    };
    c4S.ChartEngine.prototype.checkForEmptyPanel = function (s5e, j$f, s0N) {
        g4U.r2m();
        var S0U, G9j;
        if (!s5e) {
            return ![];
        }
        S0U = s5e;
        if (typeof s5e == 'object') {
            S0U = s5e.name;
        }
        if (S0U === this.chart.name) {
            return ![];
        }
        if (!s0N) {
            s0N = [];
        } else if (!(s0N instanceof Array)) {
            s0N = [s0N];
        }
        G9j = this.plotsInPanel(s5e);
        for (var o_B = 0; o_B < G9j.length; o_B++) {
            if (s0N.indexOf(G9j[o_B]) == -+'1') {
                return ![];
            }
        }
        if (!j$f) {
            this.panelClose(this.panels[S0U]);
        }
        return !0;
    };
    c4S.ChartEngine.prototype.panelClose = function (F18) {
        var H$V;
        if (!F18) {
            return;
        }
        if (this.runPrepend('panelClose', arguments)) {
            return;
        }
        this.cancelTouchSingleClick = !!{};
        c4S.ChartEngine.drawingLine = ![];
        if (F18.soloing) {
            this.panelSolo(F18);
        }
        if (this.charts[F18.name]) {
            for (var b2b in this.panels) {
                H$V = this.panels[b2b];
                if (H$V.chart.name == F18.name) {
                    this.privateDeletePanel(H$V);
                }
            }
            delete this.charts[F18.name];
        } else {
            this.privateDeletePanel(F18);
        }
        if (!this.currentlyImporting) {
            this.showCrosshairs();
            this.resetDynamicYAxis({ noRecalculate: !!'1' });
            this.calculateYAxisPositions();
            this.draw();
            this.savePanels();
        }
        this.userPointerDown = this.grabbingScreen = !{};
        if (this.openDialog) {
            this.openDialog = '';
        }
        this.runAppend('panelClose', arguments);
    };
    c4S.ChartEngine.prototype.deleteAllPanels = function () {
        var Z_Q;
        for (var t4T in this.panels) {
            Z_Q = this.panels[t4T];
            this.privateDeletePanel(Z_Q);
        }
        this.layout.panels = {};
        this.panels = {};
    };
    c4S.ChartEngine.prototype.panelUp = function (o27) {
        var j3d, c$q, y4h, S4R;
        this.cancelTouchSingleClick = !!1;
        c4S.ChartEngine.drawingLine = ![];
        this.showCrosshairs();
        j3d = {};
        c$q = 0;
        g4U.r2m();
        for (y4h in this.panels) {
            if (y4h == o27.name) break;
            c$q++;
        }
        if (!c$q) {
            return;
        }
        S4R = 0;
        for (y4h in this.panels) {
            if (S4R == c$q - 1) {
                j3d[o27.name] = o27;
            }
            if (y4h == o27.name) continue;
            j3d[y4h] = this.panels[y4h];
            S4R++;
        }
        this.panels = j3d;
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    c4S.ChartEngine.prototype.panelDown = function (y9C) {
        var J3w, Q8z, F0d, X8j, e8e;
        g4U.r2m();
        this.cancelTouchSingleClick = !'';
        c4S.ChartEngine.drawingLine = !!0;
        this.showCrosshairs();
        J3w = {};
        Q8z = +'0';
        for (F0d in this.panels) {
            if (F0d == y9C.name) break;
            Q8z++;
        }
        X8j = +'0';
        for (F0d in this.panels) {
            X8j++;
        }
        if (Q8z == X8j - 1) {
            return;
        }
        e8e = 0;
        for (F0d in this.panels) {
            if (F0d == y9C.name) {
                e8e++;
                continue;
            }
            J3w[F0d] = this.panels[F0d];
            if (e8e == Q8z + 1) {
                J3w[y9C.name] = y9C;
            }
            e8e++;
        }
        this.panels = J3w;
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    c4S.ChartEngine.prototype.panelSolo = function (n0k) {
        var Q4A, V7z, y0n, g5m, k7N, Q9K;
        this.cancelTouchSingleClick = !!{};
        c4S.ChartEngine.drawingLine = !{};
        this.showCrosshairs();
        Q4A = !!{};
        if (n0k.soloing) {
            y0n = 's';
            y0n += 'tx_solo_lit';
            Q4A = !1;
            n0k.soloing = !!0;
            n0k.solo.classList.remove(y0n);
            n0k.percent = n0k.oldPercent;
            if (n0k.name != 'chart') {
                if (this.soloPanelToFullScreen) {
                    if (n0k.percent == 1) {
                        for (V7z in this.panels) {
                            g5m = this.panels[V7z];
                            if (g5m != n0k) {
                                n0k.percent -= g5m.percent;
                            }
                        }
                    }
                } else {
                    this.chart.panel.percent = this.chart.panel.oldPercent;
                }
            }
            if (this.soloPanelToFullScreen) {
                this.xAxisAsFooter = this.chart.panel.oldXAxisAsFooter;
            }
        } else {
            k7N = 'ch';
            k7N += 'art';
            Q9K = 'st';
            Q9K += 'x_solo_lit';
            n0k.soloing = !!1;
            n0k.solo.classList.add(Q9K);
            n0k.oldPercent = n0k.percent;
            this.chart.panel.oldXAxisAsFooter = this.xAxisAsFooter;
            if (n0k.name != k7N) {
                if (this.soloPanelToFullScreen) {
                    this.xAxisAsFooter = !!'1';
                } else {
                    this.chart.panel.oldPercent = this.chart.panel.percent;
                    g4U.M8Y(16);
                    var M4T = g4U.c6Y(10, 0, 12, 119);
                    n0k.percent = M4T - this.chart.panel.percent;
                }
            }
        }
        for (V7z in this.panels) {
            this.panels[V7z].hidden = Q4A;
        }
        if (!this.soloPanelToFullScreen) {
            this.chart.panel.hidden = ![];
        }
        n0k.hidden = !'1';
        this.resetDynamicYAxis({ noRecalculate: !!1 });
        this.calculateYAxisPositions();
        this.draw();
        this.savePanels();
    };
    c4S.ChartEngine.prototype.calculatePanelPercent = function (C7y) {
        var A1b;
        A1b = C7y.bottom - C7y.top;
        C7y.percent = A1b / this.chart.canvasHeight;
    };
    c4S.ChartEngine.prototype.resizePanels = function () {
        var P_d, U6c, D8t, A9x, m5S, T9v, d35, F5L, S92;
        if (!c4S.ChartEngine.resizingPanel) {
            return;
        }
        P_d = 1868099388;
        g4U.C$o(38);
        U6c = -g4U.d58('872807414', 1);
        D8t = 2;
        for (var S$Q = 1; g4U.q2D(S$Q.toString(), S$Q.toString().length, 39756) !== P_d; S$Q++) {
            F5L = c4S.ChartEngine.crosshairY >= this.resolveY(c4S.ChartEngine.resizingPanel.top);
            D8t += 2;
        }
        if (g4U.O$R(D8t.toString(), D8t.toString().length, 42342) !== U6c) {
            F5L = c4S.ChartEngine.crosshairY > this.resolveY(c4S.ChartEngine.resizingPanel.top);
        }
        for (var h2n in this.panels) {
            if (this.panels[h2n] == c4S.ChartEngine.resizingPanel) break;
            if (this.panels[h2n].hidden) continue;
            A9x = this.panels[h2n];
        }
        S92 = this.backOutY(c4S.ChartEngine.crosshairY);
        if (F5L) {
            T9v = c4S.ChartEngine.resizingPanel.yaxisLHS.concat(c4S.ChartEngine.resizingPanel.yaxisRHS);
            for (d35 = 0; d35 < T9v.length; d35++) {
                g4U.M8Y(16);
                var f$d = g4U.c6Y(10, 1, 3, 23);
                m5S = T9v[d35].initialMarginTop + T9v[d35].initialMarginBottom + f$d;
                if (S92 > T9v[d35].bottom - m5S) {
                    S92 = T9v[d35].bottom - m5S;
                }
            }
        } else {
            T9v = A9x.yaxisLHS.concat(A9x.yaxisRHS);
            for (d35 = '0' << 64; d35 < T9v.length; d35++) {
                m5S = T9v[d35].initialMarginTop + T9v[d35].initialMarginBottom + +'10';
                if (S92 < T9v[d35].top + m5S) {
                    S92 = T9v[d35].top + m5S;
                }
            }
        }
        c4S.ChartEngine.crosshairY = this.resolveY(S92);
        A9x.bottom = S92;
        c4S.ChartEngine.resizingPanel.top = S92;
        this.calculatePanelPercent(A9x);
        g4U.r2m();
        this.calculatePanelPercent(c4S.ChartEngine.resizingPanel);
        this.adjustPanelPositions();
        this.draw();
        this.savePanels();
    };
    c4S.ChartEngine.prototype.isPanelAboveChart = function (m6F) {
        g4U.J8h();
        for (var N4c in this.panels) {
            if (N4c == 'chart') {
                return !!0;
            }
            if (N4c == m6F.name) {
                return !![];
            }
        }
        return !!0;
    };
    c4S.ChartEngine.prototype.adjustPanelPositions = function () {
        var h91,
            B6w,
            D7X,
            r9z,
            I3b,
            i9Z,
            j3I,
            M0k,
            a2K,
            F9T,
            q1D,
            Z2Z,
            U6$,
            w7K,
            H7M,
            K9n,
            h7_,
            x1B,
            y5H,
            G99,
            f_z,
            v72,
            P$0,
            V5s,
            l2T,
            p0U,
            w2r;
        h91 = 'stx-sho';
        h91 += 'w';
        B6w = 'adjus';
        B6w += 'tPanelPos';
        B6w += 'ition';
        B6w += 's';
        var { chart: D2O, panels: S_J } = this;
        if (D2O.tempCanvas) {
            c4S.clearCanvas(D2O.tempCanvas, this);
        }
        if (this.runPrepend(B6w, arguments)) {
            return;
        }
        D7X = 0;
        r9z = D2O.canvasHeight;
        I3b = !{};
        i9Z = 0;
        g4U.J8h();
        j3I = 0;
        M0k = ![];
        for (a2K in S_J) {
            F9T = S_J[a2K];
            if (isNaN(F9T.percent) || F9T.percent <= +'0') {
                F9T.percent = 0.05;
            }
            if (F9T.hidden) continue;
            i9Z += F9T.percent;
            j3I++;
            if (F9T.soloing) {
                M0k = !!'1';
            }
        }
        for (a2K in S_J) {
            q1D = 0;
            F9T = S_J[a2K];
            if (F9T.hidden) {
                if (F9T.markerHolder) {
                    F9T.markerHolder.style.display = 'none';
                }
                continue;
            }
            if (this.manageTouchAndMouse) {
                if (F9T.up) {
                    if (!I3b) {
                        I3b = !![];
                        F9T.up.classList.remove('stx-show');
                    } else {
                        Z2Z = 'stx-sho';
                        Z2Z += 'w';
                        if (this.displayIconsUpDown) {
                            F9T.up.classList.add(Z2Z);
                        }
                    }
                }
                if (F9T.solo) {
                    if (M0k) {
                        if (F9T.soloing && this.displayIconsSolo) {
                            F9T.solo.classList.add('stx-show');
                        } else {
                            F9T.solo.classList.remove('stx-show');
                        }
                    } else if (j3I == +'1') {
                        F9T.solo.classList.remove('stx-show');
                    } else if (j3I == 2 && !this.soloPanelToFullScreen) {
                        F9T.solo.classList.remove('stx-show');
                    } else {
                        U6$ = 'stx';
                        U6$ += '-show';
                        if (this.displayIconsSolo) {
                            F9T.solo.classList.add(U6$);
                        }
                    }
                }
                if (F9T.down) {
                    if (j3I == 1) {
                        w7K = 'st';
                        w7K += 'x-sh';
                        w7K += 'ow';
                        F9T.down.classList.remove(w7K);
                    } else {
                        if (this.displayIconsUpDown) {
                            F9T.down.classList.add('stx-show');
                        }
                    }
                }
                if (F9T.edit) {
                    if (F9T.editFunction) {
                        F9T.edit.classList.add('stx-show');
                    } else {
                        F9T.edit.classList.remove('stx-show');
                    }
                }
                if (F9T.close) {
                    H7M = 's';
                    H7M += 'tx-show';
                    K9n = 'st';
                    K9n += 'x-show';
                    if (this.displayIconsClose) {
                        F9T.close.classList.add(K9n);
                    } else {
                        F9T.close.classList.remove(H7M);
                    }
                }
            }
            F9T.percent = F9T.percent / i9Z;
            F9T.top = D7X;
            F9T.bottom = F9T.top + r9z * F9T.percent;
            F9T.height = F9T.bottom - F9T.top;
            if (F9T.chart.name == F9T.name) {
                F9T.chart.top = F9T.top;
                F9T.chart.bottom = F9T.bottom;
                F9T.chart.height = F9T.height;
            }
            D7X = F9T.bottom;
            if (F9T.yaxisLHS) {
                h7_ = F9T.yaxisLHS.concat(F9T.yaxisRHS);
                for (var c1_ = 0; c1_ < h7_.length; c1_++) {
                    x1B = 'n';
                    x1B += 'o';
                    x1B += 'ne';
                    y5H = h7_[c1_];
                    if (y5H.zoom && y5H.height > 0) {
                        q1D = y5H.zoom / y5H.height;
                    }
                    this.adjustYAxisHeightOffset(F9T, y5H);
                    y5H.height = y5H.bottom - y5H.top;
                    if (q1D) {
                        y5H.scroll *= (q1D * y5H.height) / y5H.zoom;
                        y5H.zoom = q1D * y5H.height;
                        if (y5H.zoom > y5H.height) {
                            y5H.zoom = 0;
                            y5H.scroll = 0;
                        }
                    }
                    if (!y5H.high && y5H.high !== 0) {
                        y5H.high = 100;
                        y5H.low = 0;
                        y5H.shadow = 100;
                    }
                    y5H.multiplier = y5H.height / y5H.shadow;
                    if (y5H.position === x1B) {
                        this.calculateYAxisMargins(y5H);
                    }
                }
            }
            if (F9T.holder) {
                G99 = 'p';
                G99 += 'x';
                f_z = 'p';
                f_z += 'x';
                F9T.holder.style.right = '0px';
                F9T.holder.style.top = F9T.top + 'px';
                F9T.holder.style.left = '0px';
                F9T.holder.style.height = F9T.height + 'px';
                F9T.subholder.style.left = F9T.left + f_z;
                F9T.subholder.style.width = F9T.width + 'px';
                F9T.subholder.style.top = '0px';
                if (F9T.yAxis.height >= 0) {
                    F9T.subholder.style.height = F9T.yAxis.height + G99;
                }
            }
        }
        if (a2K && S_J[a2K].down) {
            S_J[a2K].down.classList.remove(h91);
        }
        if (this.manageTouchAndMouse && j3I == 2 && !M0k && D2O.panel.solo) {
            D2O.panel.solo.classList.add('stx-show');
        }
        if (D2O.panel) {
            v72 = 'p';
            v72 += 'x';
            if (M0k && this.soloPanelToFullScreen) {
                P$0 = D2O.canvasHeight - F9T.yAxis.bottom + +'12';
            } else {
                g4U.M8Y(0);
                var x6W = g4U.c6Y(43, 11);
                P$0 = D2O.canvasHeight - D2O.panel.yAxis.bottom + ('12' >> x6W);
            }
            V5s = this.controls;
            var { chartControls: a$m, home: o$h, notificationTray: j_s } = V5s;
            l2T = this.width - D2O.panel.right;
            if (a$m) {
                g4U.C$o(22);
                a$m.style.bottom = g4U.d58(v72, P$0);
            }
            if (o$h) {
                p0U = 'p';
                p0U += 'x';
                g4U.M8Y(22);
                o$h.style.bottom = g4U.d58('px', P$0);
                g4U.M8Y(22);
                o$h.style.marginRight = g4U.d58(p0U, l2T);
            }
            if (j_s) {
                w2r = 'p';
                w2r += 'x';
                g4U.C$o(22);
                j_s.style.bottom = g4U.c6Y('px', P$0);
                g4U.M8Y(22);
                j_s.style.marginRight = g4U.d58(w2r, l2T);
            }
        }
        this.clearPixelCache();
        if (this.drawingObjects.length) {
            this.adjustDrawings();
        }
        this.runAppend('adjustPanelPositions', arguments);
    };
    c4S.ChartEngine.prototype.createPanel = function (c9n, J3S, T$y, c9W, T_4, N6X) {
        var J63, h$u, B7S, T1u, C$a;
        if (this.runPrepend('createPanel', arguments)) {
            return;
        }
        if (!c9W) {
            c9W = 'chart';
        }
        J63 = this.chart.canvasHeight;
        if (!T$y) {
            g4U.M8Y(38);
            T$y = g4U.d58(J63, 0.2);
        }
        if (T$y > J63) {
            g4U.M8Y(38);
            T$y = g4U.d58(J63, 0.5);
        }
        g4U.M8Y(40);
        h$u = g4U.c6Y(J63, T$y);
        g4U.C$o(0);
        B7S = g4U.c6Y(1, h$u);
        T1u = !{};
        for (var a$i in this.panels) {
            C$a = this.panels[a$i];
            C$a.percent *= B7S;
            if (C$a.soloing) {
                T1u = !!{};
            }
        }
        this.stackPanel(c9n, J3S, h$u, c9W, T_4);
        this.panels[J3S].hidden = T1u;
        this.panels[J3S].exportable = !N6X;
        this.adjustPanelPositions();
        this.savePanels(!{});
        this.runAppend('createPanel', arguments);
        return this.panels[J3S];
    };
    c4S.ChartEngine.prototype.modifyPanel = function (P$X, x09) {
        var F0a, O$X, Y23, y07, z0r, q_1, H3w, o_9;
        F0a = P$X.name;
        var { studies: N_F } = this.layout;
        var { series: T77 } = this.chart;
        var { name: i6Z, display: n0L, yAxis: D1c } = x09 || {};
        if (!i6Z) {
            i6Z = c4S.uniqueID();
        }
        if (!n0L) {
            n0L = i6Z;
        }
        if (!D1c) {
            D1c = P$X.yAxis;
            D1c.name = i6Z;
        }
        O$X = {};
        for (var s_B in this.panels) {
            if (s_B === P$X.name) {
                Y23 = this.panels[s_B];
                Y23.name = i6Z;
                Y23.display = n0L;
                Y23.yAxis = D1c;
                P$X = O$X[i6Z] = Y23;
                if (this.moveMarkers && F0a !== i6Z) {
                    this.moveMarkers(F0a, i6Z);
                }
            } else {
                O$X[s_B] = this.panels[s_B];
            }
        }
        this.panels = O$X;
        y07 = ![];
        for (var W3E in N_F) {
            z0r = N_F[W3E];
            if (z0r.panel === F0a) {
                z0r.panel = i6Z;
                if (z0r.parameters && z0r.parameters.panelName) {
                    y07 = !!'1';
                    z0r.parameters.panelName = i6Z;
                }
            }
        }
        for (var h4W in T77) {
            if (T77[h4W].parameters.panel === F0a) {
                y07 = !0;
                q_1 = { panel: i6Z };
                if (T77[h4W].parameters.yAxis && T77[h4W].parameters.yAxis.name === F0a) {
                    q_1.yAxis = D1c;
                }
                this.modifySeries(h4W, q_1, !'');
            }
        }
        if (y07) {
            this.changeOccurred('layout');
        }
        H3w = !'1';
        for (var t2K = 0; t2K < this.drawingObjects.length; t2K++) {
            o_9 = this.drawingObjects[t2K];
            if (F0a === o_9.panelName) {
                o_9.panelName = i6Z;
                H3w = !![];
            }
        }
        if (H3w) {
            this.changeOccurred('vector');
        }
        this.calculateYAxisPositions();
    };
    c4S.ChartEngine.prototype.setPanelHeight = function (a8W, i_D) {
        var J5R, c4J, Q53, E0l;
        if (!i_D) {
            return;
        }
        if (Object.values(this.panels).slice(-1)[0] === a8W) {
            i_D += this.xaxisHeight;
        }
        var { canvasHeight: R0a } = this.chart;
        var { percent: U7x } = a8W;
        g4U.M8Y(40);
        J5R = g4U.c6Y(R0a, i_D);
        g4U.C$o(0);
        c4J = g4U.c6Y(1, U7x);
        g4U.M8Y(145);
        Q53 = g4U.c6Y(64, J5R, '1');
        g4U.M8Y(40);
        E0l = g4U.d58(Q53, c4J);
        Object.values(this.panels).forEach(d5X => {
            var z$L, s0I, w7U;
            g4U.r2m();
            g4U.C$o(74);
            z$L = -g4U.d58('390080432', 16);
            s0I = -522222260;
            w7U = +'2';
            for (var W$f = 1; g4U.O$R(W$f.toString(), W$f.toString().length, 35159) !== z$L; W$f++) {
                d5X.percent %= E0l;
                w7U += 2;
            }
            if (g4U.q2D(w7U.toString(), w7U.toString().length, 9733) !== s0I) {
                d5X.percent /= E0l;
            }
        });
        a8W.percent = J5R;
        this.adjustPanelPositions();
        this.savePanels();
    };
    c4S.ChartEngine.prototype.electNewPanelOwner = function (s2N, B8W) {
        g4U.r2m();
        var a7U, L4M, U5P, L1V, f$z, L$9, Q$a, x5x, V2Q, u6a, Z48;
        function e9U(M0n) {
            return M0n.name != L4M.name;
        }
        if (typeof s2N == 'string') {
            s2N = this.panels[s2N];
        }
        L4M = s2N.yAxis;
        if (s2N && s2N != this.chart.panel) {
            U5P = s2N.yAxis;
            L1V = U5P.studies[0];
            if (!L1V || L1V == L4M.name) {
                L1V = U5P.renderers[0];
            }
            if (!L1V || L1V == L4M.name) {
                L1V = U5P.studies[1];
            }
            if (!L1V) {
                L1V = U5P.renderers[1];
            }
            if (B8W) {
                U5P = s2N.yAxis = B8W;
                f$z = -2012665674;
                L$9 = -592765991;
                Q$a = 2;
                for (var T9Z = 1; g4U.q2D(T9Z.toString(), T9Z.toString().length, '84711' * 1) !== f$z; T9Z++) {
                    a7U = B8W.name;
                    Q$a += 2;
                }
                if (g4U.q2D(Q$a.toString(), Q$a.toString().length, 21447) !== L$9) {
                    a7U = B8W.name;
                }
                a7U = B8W.name;
            } else if (!L1V) {
                if (s2N.yaxisLHS) {
                    x5x = s2N.yaxisRHS.concat(s2N.yaxisLHS).filter(e9U);
                    V2Q = x5x[0];
                    for (var F96 = '0' >> 64; F96 < x5x.length; F96++) {
                        if (!x5x[F96].position) {
                            V2Q = x5x[F96];
                            break;
                        }
                    }
                    if (V2Q) {
                        U5P = s2N.yAxis = V2Q;
                        a7U = V2Q.studies[0] || V2Q.renderers[0];
                    }
                }
            } else {
                U5P = this.addYAxis(s2N, new c4S.ChartEngine.YAxis({ name: L1V, position: U5P.position }));
                U5P.renderers = s2N.yAxis.renderers;
                U5P.studies = s2N.yAxis.studies;
                a7U = L1V;
            }
            if (a7U) {
                L1V = a7U;
                if (L4M.name != s2N.name) {
                    L1V = s2N.name;
                }
                Z48 = this.layout.studies;
                if (Z48 && Z48[a7U]) {
                    u6a = Z48[a7U].inputs.display;
                }
                this.modifyPanel(s2N, { name: L1V, display: u6a || a7U, yAxis: U5P });
                this.deleteYAxisIfUnused(s2N, L4M);
                this.calculateYAxisMargins(this.panels[L1V].yAxis);
            } else {
                this.checkForEmptyPanel(s2N);
            }
        }
        return a7U;
    };
    c4S.ChartEngine.prototype.configurePanelControls = function (e4M) {
        var u4H, D7_, Y9m, R6C, k2F, H8j, j2s;
        u4H = '.stx-ic';
        u4H += 'o-';
        u4H += 'edit';
        D7_ = '.stx';
        D7_ += '-ico-down';
        Y9m = e4M.icons;
        if (!Y9m) {
            return;
        }
        R6C = e4M.name == e4M.chart.name;
        Y9m.classList.add('stx-show');
        e4M.title = Y9m.querySelector('.stx-panel-title');
        e4M.up = Y9m.querySelector('.stx-ico-up');
        if (e4M.up) {
            e4M.up = e4M.up.parentNode;
        }
        e4M.solo = Y9m.querySelector('.stx-ico-focus');
        if (e4M.solo) {
            e4M.solo = e4M.solo.parentNode;
        }
        e4M.down = Y9m.querySelector(D7_);
        if (e4M.down) {
            e4M.down = e4M.down.parentNode;
        }
        e4M.edit = Y9m.querySelector(u4H);
        if (e4M.edit) {
            e4M.edit = e4M.edit.parentNode;
        }
        e4M.close = Y9m.querySelector('.stx-ico-close');
        if (e4M.close) {
            e4M.close = e4M.close.parentNode;
        }
        if (e4M.title) {
            e4M.title.innerHTML = '';
            if (e4M.display) {
                e4M.title.appendChild(document.createTextNode(e4M.display));
            }
            if (R6C) {
                k2F = 'stx-chart-';
                k2F += 'panel';
                e4M.title.classList.add('chart-title');
                Y9m.classList.add(k2F);
            }
        }
        if (!c4S.touchDevice || c4S.isSurface) {
            this.makeModal(Y9m);
        }
        if (e4M.handle) {
            if (!c4S.touchDevice || c4S.isSurface) {
                e4M.handle.onmouseover = (function (R9g) {
                    return function () {
                        R9g.hideCrosshairs();
                    };
                })(this);
            }
            if (!c4S.touchDevice || c4S.isSurface) {
                e4M.handle.onmouseout = (function (W7c) {
                    return function () {
                        g4U.J8h();
                        W7c.showCrosshairs();
                    };
                })(this);
            }
            H8j = function (y_H, A2L) {
                return function (q5R) {
                    if (c4S.ChartEngine.resizingPanel || y_H.openDialog !== '') {
                        return;
                    }
                    y_H.grabHandle(A2L);
                };
            };
            if (c4S.isSurface) {
                e4M.handle.onpointerdown = H8j(this, e4M);
            } else {
                e4M.handle.onmousedown = H8j(this, e4M);
            }
            if (c4S.touchDevice) {
                e4M.handle.ontouchstart = H8j(this, e4M);
            }
        }
        if (e4M.up) {
            c4S.safeClickTouch(
                e4M.up,
                (function (d$Y, n4T) {
                    g4U.r2m();
                    return function () {
                        g4U.r2m();
                        d$Y.panelUp(n4T);
                    };
                })(this, e4M)
            );
        }
        if (e4M.down) {
            c4S.safeClickTouch(
                e4M.down,
                (function (c4h, u3D) {
                    g4U.J8h();
                    return function () {
                        g4U.r2m();
                        c4h.panelDown(u3D);
                    };
                })(this, e4M)
            );
        }
        if (e4M.solo) {
            c4S.safeClickTouch(
                e4M.solo,
                (function (N7b, L50) {
                    g4U.r2m();
                    return function () {
                        g4U.r2m();
                        N7b.panelSolo(L50);
                    };
                })(this, e4M)
            );
        }
        if (e4M.close) {
            if (e4M.name == 'chart') {
                j2s = 'non';
                j2s += 'e';
                e4M.close.style.display = j2s;
            } else {
                c4S.safeClickTouch(
                    e4M.close,
                    (function (Y4t, h60) {
                        return function () {
                            g4U.J8h();
                            Y4t.panelClose(h60);
                        };
                    })(this, e4M)
                );
            }
        }
    };
    c4S.ChartEngine.prototype.stackPanel = function (o2M, z_G, L7g, R7_, X2L) {
        var A2v, e9m, J3U, T3x, Y4n, F_D, U_c;
        A2v = 'd';
        A2v += 'i';
        A2v += 'v';
        e9m = 'd';
        e9m += 'i';
        e9m += 'v';
        J3U = 'cha';
        J3U += 'rt';
        if (this.runPrepend('stackPanel', arguments)) {
            return;
        }
        if (!R7_) {
            R7_ = J3U;
        }
        T3x = this.charts[R7_];
        g4U.M8Y(106);
        Y4n = g4U.c6Y(z_G, R7_);
        if (Y4n) {
            o2M = T3x.symbol;
            if (T3x.symbolDisplay) {
                o2M = T3x.symbolDisplay;
            }
            if (!X2L) {
                X2L = T3x.yAxis;
            }
        }
        F_D = this.panels[z_G] = new c4S.ChartEngine.Panel(z_G, X2L);
        if (!Y4n && T3x.yAxis && F_D.yAxis.position == T3x.yAxis.position) {
            F_D.yAxis.width = T3x.yAxis.width;
        }
        if (Y4n && !T3x.panel) {
            T3x.panel = F_D;
        }
        F_D.percent = L7g;
        F_D.chart = T3x;
        F_D.display = o2M;
        F_D.holder = c4S.newChild(this.container, e9m, 'stx-holder');
        F_D.subholder = c4S.newChild(F_D.holder, A2v, 'stx-subholder');
        F_D.subholder.style.zIndex = 1;
        F_D.holder.panel = F_D;
        U_c = Y4n ? 'stx-panel-chart' : 'stx-panel-study';
        F_D.holder.classList.add(U_c);
        if (this.controls.handleTemplate && this.manageTouchAndMouse) {
            F_D.handle = this.controls.handleTemplate.cloneNode(!![]);
            this.container.appendChild(F_D.handle);
            F_D.handle.panel = F_D;
        }
        if (this.controls.iconsTemplate) {
            F_D.icons = this.controls.iconsTemplate.cloneNode(!![]);
            F_D.subholder.appendChild(F_D.icons);
            this.configurePanelControls(F_D);
        }
        if (!this.currentlyImporting) {
            this.resizeCanvas();
        }
        this.runAppend('stackPanel', arguments);
    };
    c4S.ChartEngine.prototype.setPanelEdit = function (p18, x_W) {
        p18.editFunction = x_W;
        if (p18.edit) {
            c4S.safeClickTouch(p18.edit, x_W);
        }
        this.adjustPanelPositions();
    };
    c4S.ChartEngine.prototype.drawPanels = function () {
        var r2E, E0H, h$S, N4M, w63, s7y, b4q, O6J, a0R, u6T, T40, U79;
        r2E = 'draw';
        r2E += 'P';
        r2E += 'a';
        r2E += 'nels';
        g4U.J8h();
        if (this.runPrepend('drawPanels', arguments)) {
            return;
        }
        E0H = !!0;
        for (var k3E in this.panels) {
            h$S = this.panels[k3E];
            h$S.state = {};
            N4M = this.translateIf(h$S.display);
            if (h$S.title && h$S.title.textContent != N4M) {
                h$S.title.innerHTML = '';
                h$S.title.appendChild(document.createTextNode(N4M));
            }
            if (h$S.icons) {
                h$S.icons.classList.add('stx-show');
            }
            if (h$S.hidden) {
                w63 = 'non';
                w63 += 'e';
                if (h$S.icons) {
                    h$S.icons.classList.remove('stx-show');
                }
                if (h$S.handle) {
                    h$S.handle.style.display = 'none';
                }
                h$S.holder.style.display = w63;
                continue;
            } else {
                if (h$S.name != 'chart') {
                    s7y = this.manageTouchAndMouse;
                    if (h$S.up) {
                        h$S.up.style.display = this.displayIconsUpDown && s7y ? '' : 'none';
                    }
                    if (h$S.down) {
                        h$S.down.style.display = this.displayIconsUpDown && s7y ? '' : 'none';
                    }
                    if (h$S.solo) {
                        h$S.solo.style.display = this.displayIconsSolo && s7y ? '' : 'none';
                    }
                    if (h$S.close) {
                        h$S.close.style.display = this.displayIconsClose && s7y ? '' : 'none';
                    }
                    if (h$S.edit) {
                        h$S.edit.style.display = h$S.editFunction && s7y ? '' : 'none';
                    }
                }
                h$S.holder.style.display = 'block';
            }
            if (h$S.displayEdgeIfPadded) {
                b4q = 'se';
                b4q += 'g';
                b4q += 'ment';
                O6J = Math.round(h$S.left) + 0.5;
                a0R = h$S.yAxis.top - 0.5;
                u6T = h$S.yAxis.bottom + 0.5;
                if (h$S.yaxisCalculatedPaddingLeft && !h$S.yaxisTotalWidthLeft) {
                    this.plotLine(
                        O6J,
                        O6J,
                        a0R,
                        u6T,
                        this.canvasStyle('stx_grid_border'),
                        b4q,
                        this.chart.context,
                        !!0,
                        { lineWidth: 1 }
                    );
                }
                g4U.M8Y(58);
                var Y1R = g4U.d58(3, 5, 4, 16, 5);
                O6J = Math.round(h$S.right) + '0.5' * Y1R;
                if (h$S.yaxisCalculatedPaddingRight && !h$S.yaxisTotalWidthRight) {
                    this.plotLine(
                        O6J,
                        O6J,
                        a0R,
                        u6T,
                        this.canvasStyle('stx_grid_border'),
                        'segment',
                        this.chart.context,
                        !!'',
                        { lineWidth: 1 }
                    );
                }
            }
            if (!E0H) {
                if (h$S.handle) {
                    h$S.handle.style.display = 'none';
                }
                E0H = !!{};
                continue;
            }
            T40 = h$S.top;
            T40 = Math.round(T40) + 0.5;
            this.plotLine(
                h$S.left - 0.5,
                h$S.right + 0.5,
                T40,
                T40,
                this.canvasStyle('stx_panel_border'),
                'segment',
                this.chart.context,
                !{},
                {}
            );
            if (h$S.handle) {
                if (!this.displayPanelResize) {
                    U79 = 'non';
                    U79 += 'e';
                    h$S.handle.style.display = U79;
                } else {
                    h$S.handle.style.display = '';
                }
                g4U.M8Y(81);
                var C$P = g4U.c6Y(3, 19, 6, 340);
                h$S.handle.style.top = T40 - h$S.handle.offsetHeight / C$P + 'px';
            }
        }
        this.runAppend(r2E, arguments);
    };
};
k4 = b0E => {
    var V3n;
    V3n = b0E.CIQ;
    V3n.ChartEngine.isDailyInterval = function (U1C) {
        var k_y, a8x;
        k_y = 'w';
        x2dci.J8h();
        k_y += 'e';
        k_y += 'e';
        k_y += 'k';
        a8x = 'd';
        a8x += 'a';
        a8x += 'y';
        if (U1C == a8x) {
            return !![];
        }
        if (U1C == k_y) {
            return !0;
        }
        if (U1C == 'month') {
            return !!'1';
        }
        return !{};
    };
    V3n.ChartEngine.prototype.setPeriodicity = function (L_r, z_5) {
        var E_N = x2dci;
        var S2x, G6z, s6C, x43, e$J, M$T, Q5$, w2t, K9b, C9Q, k_E, g8G, a5q, q_O, x36, N3E, G72;
        S2x = 'set';
        S2x += 'P';
        S2x += 'e';
        S2x += 'riodicity';
        if (this.runPrepend(S2x, arguments)) {
            return;
        }
        if (typeof arguments[0] !== 'object') {
            L_r = { period: arguments[0], interval: arguments[1], timeUnit: arguments[2] };
            E_N.C$o(97);
            var o4M = E_N.c6Y(4, 10, 121, 3, 1);
            z_5 = arguments[arguments.length - o4M];
            if (arguments.length === 3) {
                L_r.timeUnit = undefined;
            }
        }
        var { period: H6g, interval: D3w, timeUnit: c5R } = L_r;
        if (typeof z_5 !== 'function') {
            z_5 = null;
        }
        ({ period: H6g, interval: D3w, timeUnit: c5R } = V3n.cleanPeriodicity(H6g, D3w, c5R));
        var { layout: Q8n } = this;
        Q8n.setSpan = {};
        Q8n.range = {};
        function R6V() {
            var f7t;
            f7t = 'p';
            f7t += 'eriodi';
            f7t += 'ci';
            f7t += 'ty';
            x43.dispatch(f7t, e$J);
            if (z_5) {
                z_5(null);
            }
        }
        this.chart.inflectionPoint = null;
        G6z = ![];
        if (this.chart.symbol) {
            G6z = this.needDifferentData({ period: H6g, interval: D3w, timeUnit: c5R });
        }
        var { candleWidth: L$8, periodicity: S_A, interval: X_z, timeUnit: x5j } = Q8n;
        s6C = { prvPeriodicity: S_A, prvInterval: X_z, prvTimeUnit: x5j };
        Q8n.periodicity = H6g;
        Q8n.interval = D3w;
        Q8n.timeUnit = c5R;
        x43 = this;
        e$J = { stx: x43, differentData: G6z, prevPeriodicity: s6C };
        if (G6z) {
            M$T = 'la';
            M$T += 'yout';
            this.changeOccurred(M$T);
            this.clearCurrentMarketData();
            if (this.quoteDriver) {
                for (var D5P in this.charts) {
                    Q5$ = this.charts[D5P];
                    if (Q5$.symbol) {
                        if (this.displayInitialized) {
                            this.quoteDriver.newChart(
                                { symbol: Q5$.symbol, symbolObject: Q5$.symbolObject, chart: Q5$ },
                                R6V
                            );
                        } else {
                            this.loadChart(Q5$.symbol, { chart: Q5$ }, R6V);
                        }
                    }
                }
            } else if (this.dataCallback) {
                this.dataCallback();
                R6V();
            } else {
                console.log('cannot change periodicity because neither dataCallback or quoteDriver are set');
            }
            this.home();
            return;
        }
        for (var l8q in this.charts) {
            w2t = this.charts[l8q];
            var { dataSegment: x0E, dataSet: R_i, maxTicks: b91, scroll: z3z } = w2t;
            K9b = x0E ? x0E.length : +'0';
            C9Q = R_i ? R_i.length : '0' * 1;
            k_E = void +'0';
            g8G = Math.round(w2t.maxTicks / 2);
            this.setCandleWidth(L$8, w2t);
            a5q = !!1;
            q_O = !'1';
            if (z3z <= b91) {
                a5q = !{};
            } else if (x0E && !x0E[g8G]) {
                a5q = !{};
                E_N.C$o(0);
                q_O = E_N.d58(z3z, C9Q);
            }
            if (a5q && K9b > 0) {
                if (b91 < (Math.round(this.chart.width / L$8 - +'0.499') - ('1' << 64)) / 2) {
                    E_N.C$o(0);
                    g8G = E_N.d58(K9b, 1);
                }
                if (g8G >= K9b) {
                    k_E = x0E[K9b - 1].DT;
                    E_N.C$o(0);
                    g8G = E_N.d58(K9b, 1);
                } else {
                    k_E = x0E[g8G].DT;
                }
            }
            this.createDataSet();
            if (a5q) {
                if (K9b > 0) {
                    for (var M63 = C9Q - 1; M63 >= 0; M63--) {
                        x36 = R_i[M63].DT;
                        if (x36.getTime() < k_E.getTime()) {
                            E_N.C$o(111);
                            w2t.scroll = E_N.d58(1, C9Q, g8G, M63);
                            break;
                        }
                    }
                }
            } else if (!q_O) {
                N3E = Math.round(this.preferences.whitespace / L$8);
                E_N.C$o(30);
                w2t.scroll = E_N.d58(N3E, b91, 1);
            } else {
                w2t.scroll = R_i.length + q_O;
            }
        }
        if (this.displayInitialized) {
            this.draw();
        }
        this.changeOccurred('layout');
        if (this.quoteDriver) {
            for (var Y_9 in this.charts) {
                G72 = this.charts[Y_9];
                if (G72.symbol && (G72.moreAvailable || !G72.upToDate)) {
                    this.quoteDriver.checkLoadMore(G72);
                }
            }
        }
        R6V();
        this.runAppend('setPeriodicity', arguments);
    };
    V3n.ChartEngine.prototype.needDifferentData = function (R9i) {
        var i8v, w4v, O80, X_F, Y1F, T74;
        i8v = 'min';
        i8v += 'ute';
        w4v = 'minu';
        w4v += 't';
        w4v += 'e';
        O80 = this.layout;
        X_F = V3n.ChartEngine.isDailyInterval(R9i.interval);
        Y1F = V3n.ChartEngine.isDailyInterval(O80.interval);
        T74 = !{};
        if (this.dontRoll || !Y1F) {
            if (O80.interval != R9i.interval) {
                T74 = !!'1';
            }
        } else {
            if (X_F != Y1F) {
                T74 = !!{};
            }
        }
        if (!X_F && !R9i.timeUnit) {
            R9i.timeUnit = w4v;
        }
        if (!Y1F && !O80.timeUnit) {
            O80.timeUnit = i8v;
        }
        if (R9i.timeUnit != O80.timeUnit) {
            T74 = !!{};
        }
        x2dci.J8h();
        if (!this.masterData || !this.masterData.length) {
            T74 = !'';
        }
        return T74;
    };
    V3n.ChartEngine.prototype.getPeriodicity = function () {
        var l$n, s1b, H2Z;
        l$n = this.layout;
        s1b = l$n.interval;
        x2dci.r2m();
        H2Z = l$n.timeUnit;
        if (!H2Z) {
            H2Z = s1b;
            s1b = 1;
        }
        return { period: l$n.periodicity, interval: s1b, timeUnit: H2Z };
    };
};
C1 = q_S => {
    var V2m = x2dci;
    var X85;
    X85 = q_S.CIQ;
    X85.ChartEngine.prototype.isHistoricalMode = function () {
        var H2d, C7N, l1G, r88, V2s, m7B, M06;
        H2d = new Date();
        C7N = !![];
        l1G = this.masterData;
        if (!this.isHistoricalModeSet) {
            return !!0;
        }
        if (l1G.length) {
            r88 = 'D';
            r88 += 'T';
            V2s = this.getFirstLastDataRecord(l1G, r88, !'');
            m7B = this.standardMarketIterator(V2s.DT);
            C7N = (m7B ? m7B.next() : V2s.DT) <= H2d;
            if (C7N && X85.ChartEngine.isDailyInterval(m7B.interval)) {
                M06 = this.chart.market.getOpen();
                if (M06 && H2d < M06) {
                    V2m.M8Y(19);
                    H2d.setHours(0, V2m.d58(0, '0'), 0, 0);
                    if (+H2d == +m7B.begin) {
                        C7N = ![];
                    }
                }
            }
        }
        return C7N;
    };
    V2m.r2m();
    X85.ChartEngine.prototype.isHome = function () {
        var O7U, r0G, j4a;
        O7U = this.chart;
        r0G = O7U.dataSet;
        j4a = O7U.animatingHorizontalScroll;
        V2m.M8Y(0);
        V2m.r2m();
        var w40 = V2m.c6Y(12, 10);
        V2m.C$o(36);
        var g10 = V2m.d58(31, 11, 47, 517);
        return this.pixelFromTick(r0G.length - (j4a ? w40 : '1' >> g10), O7U) < O7U.width + O7U.panel.left;
    };
    X85.ChartEngine.prototype.getPreviousBar = function (Y2C, T4t, g02) {
        return this.getNextBarInternal(Y2C, T4t, g02, -+'1');
    };
    X85.ChartEngine.prototype.getNextBar = function (P$U, U1a, b_R) {
        return this.getNextBarInternal(P$U, U1a, b_R, 1);
    };
    X85.ChartEngine.prototype.getNextBarInternal = function (k45, R3c, Y16, E1w) {
        var g4T, U_u, g3h, z5L;
        g4T = k45.dataSegment && k45.dataSegment[Y16];
        if (g4T) {
            U_u = g4T.tick;
            while (U_u > 0 && U_u < k45.dataSet.length) {
                V2m.M8Y(22);
                U_u = V2m.c6Y(E1w, U_u);
                g3h = k45.dataSet[U_u];
                if (g3h) {
                    z5L = X85.existsInObjectChain(g3h, R3c);
                    if (z5L && z5L.obj[z5L.member]) {
                        return g3h;
                    }
                }
            }
        }
        return null;
    };
    X85.ChartEngine.prototype.getFirstLastDataRecord = function (d8c, U8d, w7d) {
        var p7r;
        if (d8c && d8c.length) {
            p7r = w7d ? d8c.length - 1 : 0;
            while (p7r >= 0 && p7r < d8c.length) {
                if (d8c[p7r] && typeof d8c[p7r][U8d] != 'undefined') {
                    return d8c[p7r];
                }
                if (w7d) {
                    p7r--;
                } else {
                    p7r++;
                }
            }
        }
        return null;
    };
    X85.ChartEngine.prototype.leftTick = function () {
        return this.chart.dataSet.length - this.chart.scroll;
    };
    X85.ChartEngine.prototype.getNextInterval = function (v_s, k8f, C9S) {
        var O2N;
        if (!k8f) {
            k8f = 1;
        }
        if (C9S !== !{}) {
            C9S = !0;
        }
        O2N = this.standardMarketIterator(v_s, C9S ? this.dataZone : this.displayZone);
        if (!O2N) {
            return v_s;
        }
        if (k8f < +'1') {
            V2m.C$o(146);
            return O2N.previous(V2m.d58(k8f, 1));
        }
        return O2N.next(k8f);
    };
    X85.ChartEngine.prototype.standardMarketIterator = function (a4o, n8O, U8U) {
        var y5w, o_E;
        y5w = U8U || this.chart;
        if (!y5w.market) {
            return null;
        }
        o_E = {
            begin: a4o,
            interval: this.layout.interval,
            periodicity:
                this.layout.interval == 'tick' ? this.chart.xAxis.futureTicksInterval : this.layout.periodicity,
            timeUnit: this.layout.timeUnit,
            outZone: n8O,
        };
        return y5w.market.newIterator(o_E);
    };
};
t_ = Q8V => {
    var H4T = x2dci;
    var v21, J59;
    if (!Q8V.SplinePlotter) {
        Q8V.SplinePlotter = {};
    }
    v21 = Q8V.CIQ;
    J59 = Q8V.SplinePlotter;
    v21.ChartEngine.prototype.draw = function () {
        var v4O, J_6, l_b, y$_, G1a, I6g, w9M, A91, M0E, J02, t4y, r25, h$k, B9X;
        v4O = 'dr';
        v4O += 'a';
        v4O += 'w';
        J_6 = 'n';
        J_6 += 'o';
        J_6 += 'n';
        J_6 += 'e';
        this.debug();
        l_b = this.chart;
        y$_ = this.layout;
        if (!l_b.canvas) {
            return;
        }
        if (!l_b.dataSet) {
            return;
        }
        if (!l_b.canvasHeight) {
            return;
        }
        H4T.M8Y(85);
        var u_I = H4T.c6Y(0, 15, 13, 7, 7);
        this.offset = (y$_.candleWidth * this.candleWidthPercent) / u_I;
        v21.clearCanvas(l_b.canvas, this);
        if (!this.masterData) {
            return;
        }
        if (this.runPrepend('draw', arguments)) {
            return;
        }
        if (!this.defaultColor) {
            this.getDefaultColor();
        }
        this.vectorsShowing = ![];
        this.drawPanels();
        this.yAxisLabels = [];
        this.correctIfOffEdge();
        this.createDataSegment();
        this.setBaselines(l_b);
        w9M = this.createXAxis(l_b);
        this.initializeDisplay(l_b);
        this.drawXAxis(l_b, w9M);
        try {
            this.renderYAxis(l_b);
        } catch (k8a) {
            var L86;
            L86 = 'reboo';
            L86 += 't draw';
            if (k8a && k8a.message === L86) {
                return this.draw();
            }
            throw k8a;
        }
        l_b.tmpWidth = Math.floor(y$_.candleWidth * this.candleWidthPercent);
        if (l_b.tmpWidth % 2 === '0' * 1) {
            l_b.tmpWidth += 1;
            if (l_b.tmpWidth > y$_.candleWidth) {
                H4T.M8Y(74);
                l_b.tmpWidth -= H4T.c6Y('2', 2);
            }
        }
        H4T.r2m();
        if (l_b.tmpWidth < 0.5) {
            l_b.tmpWidth = 0.5;
        }
        for (G1a in this.plugins) {
            I6g = this.plugins[G1a];
            if (I6g.display) {
                if (I6g.drawUnder) {
                    I6g.drawUnder(this, l_b);
                }
            }
        }
        if (l_b.legend) {
            l_b.legend.colorMap = null;
        }
        if (this.controls.baselineHandle) {
            this.controls.baselineHandle.style.display = J_6;
        }
        this.rendererAction(l_b, 'underlay');
        v21.getFn('Studies.displayStudies')(this, l_b, !!'1');
        this.displayChart(l_b);
        v21.getFn('Studies.displayStudies')(this, l_b, !{});
        this.rendererAction(l_b, 'overlay');
        if (l_b.legend && l_b.legend.colorMap && l_b.legendRenderer) {
            A91 = -914919967;
            M0E = 761783298;
            H4T.C$o(74);
            J02 = H4T.d58('2', 2);
            for (var Q9G = 1; H4T.O$R(Q9G.toString(), Q9G.toString().length, '98158' << 0) !== A91; Q9G++) {
                l_b.legendRenderer(this, {
                    chart: l_b,
                    legendColorMap: l_b.legend.colorMap,
                    coordinates: { x: l_b.legend.x, y: l_b.legend.y % l_b.panel.yAxis.top },
                });
                J02 += 2;
            }
            if (H4T.q2D(J02.toString(), J02.toString().length, '41546' | 66) !== M0E) {
                l_b.legendRenderer(this, {
                    chart: l_b,
                    legendColorMap: l_b.legend.colorMap,
                    coordinates: { x: l_b.legend.x, y: l_b.legend.y + l_b.panel.yAxis.top },
                });
            }
        }
        for (G1a in this.plugins) {
            I6g = this.plugins[G1a];
            if (I6g.display) {
                if (I6g.drawOver) {
                    I6g.drawOver(this, l_b);
                }
            }
        }
        for (var L92 in this.panels) {
            if (!this.panels[L92].hidden) {
                this.plotYAxisText(this.panels[L92]);
            }
        }
        for (var N2V = 0; N2V < this.yAxisLabels.length; N2V++) {
            t4y = this.yAxisLabels[N2V];
            if (t4y.src == 'series' && t4y.args[6] && t4y.args[6].drawSeriesPriceLabels === !1) continue;
            this.createYAxisLabel.apply(this, t4y.args);
        }
        if (this.createCrosshairs) {
            this.createCrosshairs();
        }
        if (this.drawVectors) {
            this.drawVectors();
        }
        this.drawCurrentHR();
        this.displayInitialized = !!{};
        r25 = this.controls;
        if (r25) {
            h$k = 'n';
            h$k += 'one';
            B9X = this.manageTouchAndMouse && (!this.mainSeriesRenderer || !this.mainSeriesRenderer.nonInteractive);
            if (r25.home) {
                r25.home.style.display = B9X && !this.isHome() ? 'block' : 'none';
            }
            if (r25.chartControls) {
                r25.chartControls.style.display = B9X ? 'block' : h$k;
            }
        }
        if (v21.Marker) {
            this.positionMarkers();
        }
        if (this.quoteDriver && this.animations.zoom.hasCompleted) {
            this.quoteDriver.checkLoadMore(l_b);
        }
        this.runAppend(v4O, arguments);
        this.makeAsyncCallbacks();
    };
    v21.ChartEngine.prototype.setSeriesRenderer = function (f9r) {
        var { baseline: e2o, name: V8T, panel: d6b, yAxis: x$c } = f9r.params;
        if (this.chart.seriesRenderers[V8T]) {
            return this.chart.seriesRenderers[V8T];
        }
        if (x$c) {
            f9r.params.yAxis = this.addYAxis(this.panels[d6b], x$c);
            this.resizeChart();
        }
        H4T.r2m();
        f9r.stx = this;
        this.chart.seriesRenderers[V8T] = f9r;
        if (e2o) {
            this.registerBaselineToHelper(f9r);
        }
        return f9r;
    };
    v21.ChartEngine.prototype.setMainSeriesRenderer = function (T2N) {
        var F7Y, u$6, O8U, J9h, I0C, T_V;
        F7Y = 'sta';
        F7Y += 'nda';
        F7Y += 'loneBars';
        u$6 = 'highLow';
        u$6 += 'Bars';
        O8U = 'o';
        O8U += 'hl';
        O8U += 'c';
        var { chartType: C7o, aggregationType: W_f } = this.layout;
        var { chart: R8Y } = this;
        var { custom: G08 } = R8Y;
        J9h = this.mainSeriesRenderer;
        I0C = this.displayInitialized;
        if (J9h) {
            if (T2N) {
                this.setMasterData();
            }
            this.displayInitialized = !{};
            J9h.removeAllSeries();
            this.removeSeriesRenderer(J9h);
            J9h = this.mainSeriesRenderer = null;
        }
        if (G08 && G08.chartType) {
            C7o = G08.chartType;
        }
        if (C7o == 'none') {
            return;
        }
        if (W_f && W_f != O8U) {
            C7o = W_f;
        }
        T_V = v21.Renderer.produce(C7o, {
            panel: R8Y.panel.name,
            name: '_main_series',
            highlightable: !1,
            useChartLegend: !![],
        });
        if (T_V) {
            this.setSeriesRenderer(T_V).attachSeries(null, { display: R8Y.symbol });
            J9h = this.mainSeriesRenderer = T_V;
        }
        this.displayInitialized = I0C;
        [u$6, F7Y, 'barsHaveWidth'].forEach(
            function (e98) {
                H4T.r2m();
                R8Y[e98] = this.mainSeriesRenderer && this.mainSeriesRenderer[e98];
            }.bind(this)
        );
    };
    v21.ChartEngine.prototype.removeSeriesRenderer = function (D6A) {
        var u9t;
        H4T.J8h();
        var { baseline: E0M, name: T_o } = D6A.params;
        u9t = this.controls[`${T_o} baseline-handle`];
        if (E0M) {
            this.removeBaselineFromHelper(D6A);
            if (u9t) {
                this.container.removeChild(u9t);
                delete this.controls[u9t];
            }
        }
        delete this.chart.seriesRenderers[T_o];
    };
    v21.ChartEngine.prototype.getSeriesRenderer = function (M_U) {
        return this.chart.seriesRenderers[M_U];
    };
    v21.ChartEngine.prototype.getRendererFromSeries = function (w7D) {
        var F2a;
        F2a = this.chart.seriesRenderers;
        H4T.J8h();
        for (var i_z in F2a) {
            for (var U2j in F2a[i_z].seriesParams) {
                if (F2a[i_z].seriesParams[U2j].id == w7D) {
                    return F2a[i_z];
                }
            }
        }
        return null;
    };
    v21.ChartEngine.prototype.startClip = function (c8m, q6C) {
        var t1v, z4V, D_K, V27, t1I;
        if (!c8m) {
            c8m = this.chart.panel.name;
        }
        t1v = this.panels[c8m];
        z4V = t1v.yAxis;
        D_K = this.chart;
        D_K.context.save();
        D_K.context.beginPath();
        V27 = t1v.left;
        t1I = t1v.width;
        if (q6C) {
            V27 = 0;
            t1I = this.width;
        } else if (t1v.yaxisLHS && t1v.yaxisLHS.length) {
            V27++;
            t1I--;
        }
        D_K.context.rect(V27, z4V.top, t1I, z4V.height);
        D_K.context.clip();
    };
    v21.ChartEngine.prototype.endClip = function () {
        H4T.r2m();
        this.chart.context.restore();
    };
    v21.ChartEngine.prototype.setLineStyle = function (b4Y, o3c) {
        var Q3S, a$R;
        Q3S = {};
        if (b4Y && typeof b4Y == 'object') {
            Q3S = b4Y;
        } else {
            Q3S.color = b4Y;
        }
        if (!Q3S.color && !Q3S.pattern && !Q3S.width && !Q3S.baseColor) {
            Q3S = null;
        }
        if (!o3c) {
            o3c = this.chart;
        }
        a$R = 1;
        if (Q3S && Q3S.width) {
            a$R = Q3S.width;
        }
        if (Q3S && Q3S.pattern) {
            Q3S.pattern = v21.borderPatternToArray(a$R, Q3S.pattern);
        }
        o3c.lineStyle = Q3S;
    };
    v21.ChartEngine.prototype.setGapLines = function (s0A, P1G) {
        var b22;
        if (!P1G) {
            P1G = this.chart;
        }
        b22 = {};
        if (s0A && typeof s0A == 'object') {
            b22 = s0A;
        } else if (typeof s0A === 'boolean') {
            return (P1G.gaplines = s0A);
        } else {
            b22.color = s0A;
        }
        if (!b22.color && !b22.pattern && !b22.fillMountain) {
            b22 = null;
        }
        if (b22 && b22.pattern) {
            b22.pattern = v21.borderPatternToArray(b22.width, b22.pattern);
        }
        if (b22 && b22.width <= 0) {
            b22.width = null;
        }
        P1G.gaplines = b22;
    };
    v21.ChartEngine.prototype.getGapColorFunction = function (T0V, b6D, x85, U$7, L8C) {
        if (typeof x85 != 'object') {
            x85 = { color: x85 };
        }
        return function (o8B, u_O, R$k) {
            var B$b, u_l;
            B$b = L8C ? L8C(o8B, u_O, R$k) : x85;
            if (B$b.color) {
                B$b = B$b.color;
            }
            H4T.r2m();
            u_l = u_O[T0V];
            if (!u_l && u_l !== 0) {
                u_l = u_O[b6D];
            }
            if (!R$k && (u_l || u_l === 0)) {
                return { color: B$b, pattern: x85.pattern, width: x85.width };
            }
            if (!U$7) {
                return null;
            }
            if (typeof U$7 != 'object') {
                if (typeof U$7 == 'string') {
                    U$7 = { color: U$7 };
                } else {
                    U$7 = {};
                }
            }
            return { color: U$7.color || B$b, pattern: U$7.pattern || x85.pattern, width: U$7.width || x85.width };
        };
    };
    v21.ChartEngine.prototype.drawLineChart = function (Z15, W36, y9q, c2m) {
        var e9q, W9C, S$t, i9O, j03, s84, T2W, U0c, D$i, s3p, a06, r8W, J8A;
        e9q = 'C';
        H4T.r2m();
        e9q += 'lo';
        e9q += 'se';
        W9C = this.chart;
        S$t = W9C.context;
        i9O = W9C.lineStyle || {};
        j03 = this.canvasStyle(W36);
        if (!c2m) {
            c2m = {};
        }
        this.startClip(Z15.name);
        s84 = c2m.width || i9O.width || j03.width;
        if (s84 && parseInt(s84, 10) <= 25) {
            S$t.lineWidth = Math.max(1, v21.stripPX(s84));
        } else {
            S$t.lineWidth = +'1';
        }
        c2m.pattern = c2m.pattern || i9O.pattern || j03.borderTopStyle;
        c2m.pattern = v21.borderPatternToArray(S$t.lineWidth, c2m.pattern);
        this.canvasColor(W36);
        T2W = c2m.color || i9O.color;
        if (T2W) {
            U0c = 'a';
            U0c += 'u';
            U0c += 'to';
            if (T2W == U0c) {
                T2W = this.defaultColor;
            }
            if (c2m.opacity && c2m.opacity !== 1) {
                T2W = v21.hexToRgba(v21.colorToHex(T2W), parseFloat(c2m.opacity));
            }
            S$t.strokeStyle = T2W;
        }
        c2m.skipProjections = !'';
        D$i = c2m.field || W9C.defaultPlotField;
        s3p = c2m.subField || W9C.defaultPlotField || e9q;
        a06 = c2m.gapDisplayStyle;
        if (!a06 && a06 !== !!'') {
            a06 = c2m.gaps;
        }
        if (!a06 && a06 !== ![]) {
            a06 = W9C.gaplines;
        }
        if (!a06) {
            a06 = 'transparent';
        }
        c2m.gapDisplayStyle = a06;
        r8W = this.getGapColorFunction(
            D$i,
            s3p,
            { color: S$t.strokeStyle, pattern: c2m.pattern, width: S$t.lineWidth },
            a06,
            y9q
        );
        if (Z15.chart.tension) {
            c2m.tension = Z15.chart.tension;
        }
        J8A = this.plotDataSegmentAsLine(D$i, Z15, c2m, r8W);
        if (!J8A.colors.length) {
            J8A.colors.push(S$t.strokeStyle);
        }
        S$t.lineWidth = 1;
        this.endClip();
        return c2m.returnObject ? J8A : J8A.colors;
    };
    v21.ChartEngine.prototype.drawChannelChart = function (J$F, A88, i_3) {
        var t3l, X$M, i4W, j0M, N8N, B0e, v2_, q8$, u1z, X5f, g84, H47;
        t3l = 'subFi';
        t3l += 'eld';
        X$M = 'H';
        X$M += 'igh';
        i4W = v21.clone(i_3);
        i4W.color = i_3.color;
        j0M = this.drawLineChart(J$F, i4W.style, A88, i4W);
        N8N = i4W.border_color_up || this.getCanvasColor('stx_channel_up');
        B0e = i4W.border_color_down || this.getCanvasColor('stx_channel_down');
        i4W[i_3.field ? 'subField' : 'field'] = i4W.field_high || X$M;
        i4W.color = N8N;
        v2_ = this.drawLineChart(J$F, i4W.style, A88, i4W);
        i4W[i_3.field ? t3l : 'field'] = i4W.field_low || 'Low';
        i4W.color = B0e;
        q8$ = this.drawLineChart(J$F, i4W.style, A88, i4W);
        i4W[i_3.field ? 'subField' : 'field'] = i_3.subField || this.chart.defaultPlotField || 'Close';
        X5f = [];
        g84 = [];
        for (u1z = 0; u1z < v2_.points.length; u1z += 2) {
            X5f.push([v2_.points[u1z], v2_.points[u1z + 1]]);
        }
        for (u1z = 0; u1z < q8$.points.length; u1z += 2) {
            g84.push([q8$.points[u1z], q8$.points[u1z + +'1']]);
        }
        H47 = this.chart.context.lineWidth / +'2';
        for (u1z = j0M.points.length - 2; u1z >= 0; u1z -= 2) {
            X5f.push([j0M.points[u1z], j0M.points[u1z + 1] - H47]);
            g84.push([j0M.points[u1z], j0M.points[u1z + 1] + H47]);
        }
        this.startClip(J$F.name);
        i4W.color = N8N;
        v21.fillArea(this, X5f, i4W);
        i4W.color = B0e;
        v21.fillArea(this, g84, i4W);
        this.endClip();
        j0M.colors = j0M.colors.concat(v2_.colors).concat(q8$.colors);
        H4T.J8h();
        return i_3.returnObject ? j0M : j0M.colors;
    };
    v21.ChartEngine.prototype.connectTheDots = function (e0E, A1J, A$D, P4s, u0Z, d8E) {
        var d63, B4I, Q9E, S7F, A$0, w2Z, t0y, P_J, U6f, H5$, W$X, x6G, Z_k, P83, O4Q, r6b, S08, x5V, W92, G6I;
        H4T.J8h();
        if (!d8E) {
            d8E = {};
        }
        if (d8E.pattern == 'none') {
            return;
        }
        if (u0Z === !'') {
            u0Z = this.chart.panel;
        }
        if (P4s === null || typeof P4s == 'undefined') {
            P4s = this.chart.context;
        }
        if (e0E.length < 4) {
            return;
        }
        d63 = 0;
        B4I = this.chart.canvasHeight;
        Q9E = 0;
        S7F = this.chart.width;
        if (u0Z) {
            B4I = u0Z.yAxis.bottom;
            d63 = u0Z.yAxis.top;
        }
        P4s.lineWidth = +'1.1';
        if (typeof A1J == 'object') {
            P4s.strokeStyle = A1J.color;
            if (A1J.opacity) {
                P4s.globalAlpha = A1J.opacity;
            } else {
                P4s.globalAlpha = 1;
            }
            P4s.lineWidth = v21.stripPX(A1J.width);
        } else {
            if (!A1J || A1J == 'auto' || v21.isTransparent(A1J)) {
                P4s.strokeStyle = this.defaultColor;
            } else {
                P4s.strokeStyle = A1J;
            }
        }
        if (d8E.opacity) {
            P4s.globalAlpha = d8E.opacity;
        }
        if (d8E.lineWidth) {
            P4s.lineWidth = d8E.lineWidth;
        }
        A$0 = v21.borderPatternToArray(P4s.lineWidth, d8E.pattern);
        P4s.beginPath();
        for (var D0Q = 0; D0Q < e0E.length - 2; D0Q += 2) {
            w2Z = e0E[D0Q];
            H4T.M8Y(22);
            t0y = e0E[H4T.c6Y(1, D0Q)];
            H4T.C$o(22);
            P_J = e0E[H4T.d58(2, D0Q)];
            H4T.M8Y(22);
            U6f = e0E[H4T.d58(3, D0Q)];
            if (isNaN(w2Z) || isNaN(P_J) || isNaN(t0y) || isNaN(U6f)) {
                return;
            }
            H5$ = 0.0;
            W$X = 1.0;
            H4T.M8Y(0);
            x6G = H4T.c6Y(P_J, w2Z);
            H4T.M8Y(0);
            Z_k = H4T.d58(U6f, t0y);
            for (var p9c = 0; p9c < +'4'; p9c++) {
                if (p9c === +'0') {
                    P83 = -x6G;
                    H4T.M8Y(0);
                    O4Q = -H4T.d58(Q9E, w2Z);
                }
                if (p9c == 1) {
                    P83 = x6G;
                    H4T.C$o(0);
                    O4Q = H4T.c6Y(S7F, w2Z);
                }
                if (p9c == 2) {
                    P83 = -Z_k;
                    H4T.C$o(0);
                    O4Q = -H4T.d58(d63, t0y);
                }
                if (p9c == ('3' ^ 0)) {
                    P83 = Z_k;
                    H4T.M8Y(0);
                    O4Q = H4T.d58(B4I, t0y);
                }
                H4T.C$o(40);
                r6b = H4T.d58(P83, O4Q);
                if ((U6f || U6f === 0) && P83 === 0 && O4Q < 0) {
                    return ![];
                }
                if (P83 < 0) {
                    if (r6b > W$X) {
                        return ![];
                    } else if (r6b > H5$) {
                        H5$ = r6b;
                    }
                } else if (P83 > 0) {
                    if (r6b < H5$) {
                        return !!0;
                    } else if (r6b < W$X) {
                        W$X = r6b;
                    }
                }
            }
            H4T.M8Y(147);
            S08 = H4T.c6Y(w2Z, H5$, x6G);
            H4T.C$o(147);
            x5V = H4T.c6Y(t0y, H5$, Z_k);
            H4T.C$o(147);
            W92 = H4T.c6Y(w2Z, W$X, x6G);
            H4T.M8Y(147);
            G6I = H4T.c6Y(t0y, W$X, Z_k);
            try {
                P4s.setLineDash(A$0 && A$0.length ? A$0 : []);
                P4s.moveTo(S08, x5V);
                P4s.lineTo(W92, G6I);
            } catch (s0v) {}
        }
        P4s.stroke();
        P4s.closePath();
        P4s.globalAlpha = 1;
        P4s.lineWidth = 1;
    };
    v21.ChartEngine.prototype.plotSpline = function (A7T, L36, w2c, V3V, X8N, P2N, y$a) {
        var b8h, T5W;
        if (!y$a) {
            y$a = {};
        }
        if (y$a.pattern == 'none') {
            return;
        }
        if (P2N === !0) {
            P2N = this.chart.panel;
        }
        if (X8N === null || typeof X8N == 'undefined') {
            X8N = this.chart.context;
        }
        X8N.save();
        H4T.J8h();
        X8N.lineWidth = 1.1;
        if (typeof w2c == 'object') {
            X8N.strokeStyle = w2c.color;
            if (w2c.opacity) {
                X8N.globalAlpha = w2c.opacity;
            } else {
                X8N.globalAlpha = 1;
            }
            X8N.lineWidth = v21.stripPX(w2c.width);
        } else {
            b8h = 'a';
            b8h += 'uto';
            if (!w2c || w2c == b8h || v21.isTransparent(w2c)) {
                X8N.strokeStyle = this.defaultColor;
            } else {
                X8N.strokeStyle = w2c;
            }
        }
        if (y$a.opacity) {
            X8N.globalAlpha = y$a.opacity;
        }
        if (y$a.lineWidth) {
            X8N.lineWidth = y$a.lineWidth;
        }
        T5W = v21.borderPatternToArray(X8N.lineWidth, y$a.pattern);
        if (y$a.pattern && X8N.setLineDash) {
            X8N.setLineDash(T5W);
            X8N.lineDashOffset = 0;
        }
        X8N.beginPath();
        J59.plotSpline(A7T, L36, X8N);
        X8N.stroke();
        X8N.closePath();
        X8N.restore();
    };
    v21.ChartEngine.prototype.rawWatermark = function (M8u, s28, U0t, G6w) {
        this.canvasFont('stx_watermark', M8u);
        M8u.fillStyle = this.defaultColor;
        M8u.globalAlpha = 0.5;
        this.chart.context.textBaseline = 'alphabetic';
        M8u.fillText(G6w, s28, U0t);
        M8u.globalAlpha = 1;
    };
    H4T.r2m();
    v21.ChartEngine.prototype.watermark = function (a$7, R5k) {
        var P0w, x5i, v8o, q6p, M5X, T75, r_3, f_p, k6L, u4$, b5o, q_G;
        P0w = 'ri';
        P0w += 'g';
        P0w += 'ht';
        x5i = 'm';
        x5i += 'iddle';
        v8o = 'to';
        H4T.r2m();
        v8o += 'p';
        q6p = 'bo';
        q6p += 'ttom';
        M5X = 'obj';
        M5X += 'e';
        M5X += 'c';
        M5X += 't';
        if (R5k && typeof R5k != M5X) {
            R5k = { h: arguments[1], v: arguments[+'2'], text: arguments[3] };
        }
        R5k = {
            h: R5k.h || 'left',
            v: R5k.v || q6p,
            text: R5k.text || '',
            hOffset: R5k.hOffset === 0 ? 0 : R5k.hOffset || 10,
            vOffset: R5k.vOffset === 0 ? 0 : R5k.vOffset || 20,
            context: R5k.context || this.chart.context,
        };
        T75 = R5k.context;
        if (!T75) {
            return;
        }
        r_3 = this.panels[a$7];
        if (!r_3 || r_3.hidden) {
            return;
        }
        f_p = r_3.yAxis.bottom - R5k.vOffset;
        if (R5k.v == v8o) {
            f_p = r_3.top + R5k.vOffset;
        } else if (R5k.v == x5i) {
            H4T.M8Y(2);
            var s9o = H4T.c6Y(17, 15);
            f_p = (r_3.top + r_3.yAxis.bottom) / s9o;
        }
        T75.save();
        this.canvasFont('stx_watermark', T75);
        this.canvasColor('stx_watermark', T75);
        T75.textBaseline = 'alphabetic';
        k6L = r_3.left + R5k.hOffset;
        if (R5k.h == P0w) {
            k6L = r_3.right - R5k.hOffset;
        } else if (R5k.h == 'center') {
            H4T.C$o(25);
            var B3O = H4T.d58(8, 8, 2);
            k6L = (r_3.right + r_3.left - T75.measureText(R5k.text).width) / B3O;
        }
        T75.globalAlpha = +'0.5';
        if (this.highlightedDraggable) {
            H4T.C$o(38);
            T75.globalAlpha *= H4T.c6Y('0.3', 1);
        }
        u4$ = 1137626162;
        b5o = +'255910138';
        q_G = 2;
        for (var o29 = 1; H4T.O$R(o29.toString(), o29.toString().length, 46519) !== u4$; o29++) {
            T75.fillText(R5k.text, k6L, f_p);
            T75.restore();
            q_G += +'2';
        }
        if (H4T.O$R(q_G.toString(), q_G.toString().length, 5622) !== b5o) {
            T75.fillText(R5k.text, k6L, f_p);
            T75.restore();
        }
    };
    v21.ChartEngine.prototype.displayErrorAsWatermark = function (L$P, Z2N) {
        var E06, P5i, m8y, u8G, n6w, A7a, c3A, E7K, Z9k, B6W, A3P, E0I;
        E06 = 'c';
        E06 += 'hart';
        if (!Z2N) {
            return;
        }
        if (!L$P) {
            L$P = E06;
        }
        P5i = this.panels[L$P];
        if (!P5i || P5i.hidden) {
            return;
        }
        m8y = P5i.state;
        if (!m8y) {
            P5i.state = m8y = {};
        }
        u8G = m8y.studyErrors;
        if (!u8G) {
            m8y.studyErrors = u8G = new Set();
        }
        if (u8G.has(Z2N)) {
            return;
        }
        n6w = m8y.watermarkOffset || 10;
        A7a = +'10';
        c3A = this.getCanvasFontSize('stx_watermark');
        if (this.chart && this.chart.chartControls) {
            E7K = P5i.yAxis.bottom;
            Z9k = this.chart.chartControls;
            H4T.M8Y(0);
            B6W = H4T.d58(E7K, n6w);
            H4T.M8Y(0);
            A3P = H4T.c6Y(B6W, c3A);
            if (
                (B6W > Z9k.offsetTop && B6W < Z9k.offsetTop + Z9k.offsetHeight) ||
                (A3P > Z9k.offsetTop && A3P < Z9k.offsetTop + Z9k.offsetHeight)
            ) {
                n6w = E7K - Z9k.offsetTop + A7a;
            }
        }
        u8G.add(Z2N);
        E0I = { h: 'center', v: 'bottom', text: Z2N, vOffset: n6w };
        H4T.M8Y(22);
        n6w += H4T.d58(A7a, c3A);
        m8y.watermarkOffset = n6w;
        this.watermark(L$P, E0I);
    };
    v21.ChartEngine.prototype.displayChart = function (n9k) {
        if (this.runPrepend('displayChart', arguments)) {
            return;
        }
        this.rendererAction(n9k, 'main');
        this.runAppend('displayChart', arguments);
    };
};
b$ = x21 => {
    var y$5 = x2dci;
    y$5.r2m();
    var c_h;
    c_h = x21.CIQ;
    c_h.ChartEngine.prototype.cloneStyle = function (X99) {
        var y50, J4U, B$L, g8o, j9Z, Q_r, h8K, f6E;
        y50 = {};
        function B0c(e0Z) {
            return e0Z[1].toUpperCase();
        }
        J4U = !1;
        for (var K$d in X99) {
            B$L = X99[K$d];
            if (K$d == 'backgroundAttachment') {
                J4U = !0;
            }
            if (J4U) {
                if (B$L && B$L.constructor == String && isNaN(K$d)) {
                    y50[K$d] = B$L;
                }
            } else if (!isNaN(K$d)) {
                g8o = X99.getPropertyValue(B$L);
                if (g8o) {
                    B$L = B$L.split(
                        9782 == ('615.87' * 1, 5740)
                            ? 5017 == '128' * 1
                                ? 227.77
                                : 1420 > 344.34
                                ? (!![], 0x7a)
                                : ('l', 0x249e)
                            : '-'
                    );
                    j9Z = 0;
                    Q_r = B$L.length;
                    h8K = B$L[0];
                    while (++j9Z < Q_r) {
                        h8K += B$L[j9Z].charAt(0).toUpperCase() + B$L[j9Z].slice(+'1');
                    }
                    y50[h8K] = g8o;
                }
            } else {
                f6E = K$d.replace(c_h.camelCaseRegExp, B0c);
                y50[f6E] = B$L;
            }
        }
        return y50;
    };
    c_h.ChartEngine.prototype.canvasStyle = function (A3W) {
        var r1L, y0u, z3c;
        y$5.J8h();
        r1L = this.styles[A3W];
        if (!r1L) {
            y0u = document.createElement('div');
            y0u.className = A3W;
            this.container.appendChild(y0u);
            z3c = getComputedStyle(y0u);
            r1L = this.styles[A3W] = this.cloneStyle(z3c);
            this.container.removeChild(y0u);
            if (!z3c) {
                this.styles[A3W] = null;
            }
        }
        return r1L;
    };
    c_h.ChartEngine.prototype.colorOrStyle = function (W7V) {
        if (
            W7V.indexOf(
                ('7160' ^ 0) != (3900, +'1006')
                    ? '#'
                    : 18.45 !== (199.03, +'1770')
                    ? +'163.98' === (3230, 763.82)
                        ? !![]
                        : (374.2, +'0x4f2')
                    : ('6.56e+3' | 0, 'c')
            ) != -1
        ) {
            return W7V;
        }
        y$5.r2m();
        if (W7V.indexOf('(') != -1) {
            return W7V;
        }
        if (W7V == 'transparent') {
            return W7V;
        }
        return this.canvasStyle(W7V);
    };
    c_h.ChartEngine.prototype.clearStyles = function () {
        this.styles = {};
        this.defaultColor = '';
    };
    c_h.ChartEngine.prototype.setStyle = function (P_Z, l$x, w96) {
        if (!this.styles[P_Z]) {
            this.canvasStyle(P_Z);
        }
        if (!this.styles[P_Z]) {
            this.styles[P_Z] = {};
        }
        y$5.J8h();
        this.styles[P_Z][c_h.makeCamelCase(l$x)] = w96;
    };
    c_h.ChartEngine.prototype.canvasFont = function (R_7, t_3) {
        var s7R, B6b, B6f, S9D;
        s7R = 'und';
        s7R += 'e';
        s7R += 'fine';
        s7R += 'd';
        if (!t_3) {
            t_3 = this.chart.context;
        }
        B6b = this.canvasStyle(R_7);
        if (!B6b) {
            return;
        }
        y$5.M8Y(124);
        var F1X = y$5.d58(2446, 20, 10, 17);
        y$5.C$o(76);
        var v2K = y$5.d58(1961, 2, 966, 7);
        y$5.J8h();
        y$5.M8Y(148);
        var Q$F = y$5.c6Y(3, 1, 6075, 12142, 3);
        y$5.M8Y(77);
        var o53 = y$5.d58(178169, 19, 9, 20360);
        y$5.M8Y(0);
        var r6X = y$5.d58(2552, 12);
        y$5.M8Y(0);
        var u_Z = y$5.c6Y(3028, 8);
        y$5.M8Y(8);
        var F3o = y$5.d58(11, 10, 1);
        B6f =
            B6b.fontStyle +
            (497.5 < 544.17 ? ' ' : (293.58, ![])) +
            B6b.fontWeight +
            ' ' +
            B6b.fontSize +
            (('586.2' - 0, F1X) >= (v2K, Q$F) ? (o53 <= (r6X, u_Z) ? ('688.76' * F3o, 516.59) : 475.96) : ' ') +
            B6b.fontFamily;
        if (B6f.indexOf(s7R) == -1) {
            t_3.font = B6f;
        } else {
            S9D = 'bad css style for clas';
            S9D += 's ';
            this.styles[R_7] = null;
            y$5.M8Y(22);
            console.log(y$5.c6Y(R_7, S9D));
        }
    };
    c_h.ChartEngine.prototype.canvasColor = function (x3b, K8a) {
        y$5.J8h();
        var t1s, a2h, m6n;
        if (!K8a) {
            K8a = this.chart.context;
        }
        t1s = this.canvasStyle(x3b);
        if (!t1s) {
            return;
        }
        a2h = t1s.color;
        if (!a2h) {
            a2h = this.defaultColor;
        }
        K8a.globalAlpha = +'1';
        K8a.fillStyle = a2h;
        K8a.strokeStyle = a2h;
        m6n = t1s.opacity;
        if (typeof m6n != 'undefined') {
            K8a.globalAlpha = m6n;
        }
    };
    c_h.ChartEngine.prototype.getCanvasFontSize = function (Z6c) {
        var P06, r0x;
        P06 = this.canvasStyle(Z6c);
        r0x = P06.fontSize;
        if (!r0x) {
            r0x = '12';
        }
        return parseInt(c_h.stripPX(r0x), 10);
    };
    c_h.ChartEngine.prototype.getCanvasColor = function (X1w) {
        var a7O;
        y$5.J8h();
        a7O = this.canvasStyle(X1w);
        return a7O.color;
    };
    c_h.ChartEngine.prototype.getDefaultColor = function () {
        var i3t, S37, p7Y, o0Z, Z$R, v5B, M1N, f5s;
        y$5.J8h();
        this.defaultColor = '#000000';
        i3t = null;
        S37 = this.chart.container;
        while (!i3t || c_h.isTransparent(i3t)) {
            p7Y = getComputedStyle(S37);
            if (!p7Y) {
                return;
            }
            i3t = p7Y.backgroundColor;
            if (c_h.isTransparent(i3t)) {
                i3t = 'transparent';
            }
            S37 = S37.parentNode;
            if (!S37 || !S37.tagName) break;
        }
        if (i3t) {
            o0Z = '#';
            o0Z += 'FF';
            o0Z += 'FFFF';
            Z$R = 'tr';
            Z$R += 'anspar';
            Z$R += 'ent';
            if (i3t == Z$R) {
                i3t = o0Z;
            }
            this.containerColor = i3t;
            if (!c_h.isTransparent(i3t)) {
                v5B = c_h.hsv(i3t);
                M1N = v5B[2];
                if (M1N > 0.65) {
                    this.defaultColor = '#000000';
                } else {
                    this.defaultColor = '#FFFFFF';
                }
            } else {
                this.defaultColor = '#000000';
            }
        } else {
            f5s = '#FF';
            f5s += 'FFFF';
            this.containerColor = f5s;
        }
    };
};
l5 = p83 => {
    var x7$;
    x7$ = p83.CIQ;
    x7$.ChartEngine.XAxis = function (q_v) {
        for (var h8o in q_v) {
            this[h8o] = q_v[h8o];
        }
    };
    x7$.extend(
        x7$.ChartEngine.XAxis.prototype,
        {
            formatter: null,
            adjustTimeZone: !!{},
            idealTickSizePixels: null,
            timeUnit: null,
            timeUnitMultiplier: null,
            displayBorder: !![],
            displayGridLines: !!1,
            noDraw: null,
            minimumLabelWidth: 50,
            futureTicks: !![],
            futureTicksInterval: 1,
        },
        !!{}
    );
    x7$.ChartEngine.XAxisLabel = function (o3n, h_7, q2n) {
        this.hz = o3n;
        x2dci.J8h();
        this.grid = h_7;
        this.text = q2n;
    };
    x7$.ChartEngine.prototype.createXAxis = function (U6W) {
        var P8v, a9k, d$6;
        P8v = 'crea';
        P8v += 'teX';
        P8v += 'Axis';
        if (U6W.dataSegment.length <= 0) {
            return null;
        }
        if (U6W.xAxis.noDraw) {
            return null;
        }
        a9k = [U6W];
        x2dci.J8h();
        d$6 = this.runPrepend('createXAxis', a9k);
        if (d$6) {
            return d$6;
        }
        if (this.mainSeriesRenderer && this.mainSeriesRenderer.createXAxis) {
            d$6 = this.mainSeriesRenderer.createXAxis(U6W);
        } else {
            d$6 = this.createTickXAxisWithDates(U6W);
        }
        this.headsUpHR();
        this.runAppend(P8v, a9k);
        return d$6;
    };
    x7$.ChartEngine.prototype.createXAxisLabel = function (z27) {
        var S2q = x2dci;
        var E0R, U6S, T1Y, Q_I, I$x, S3p, I0I, L0a, R87, b6U, Y7x, q2L, V9f, z19;
        if (arguments[0] instanceof x7$.ChartEngine.Panel) {
            z27 = {
                panel: arguments['0' - 0],
                txt: arguments[1],
                x: arguments[2],
                backgroundColor: arguments[+'3'],
                color: arguments[4],
                pointed: arguments[5],
                padding: arguments[6],
            };
        }
        E0R = z27.panel;
        U6S = z27.txt;
        S2q.r2m();
        T1Y = z27.x;
        Q_I = z27.backgroundColor;
        I$x = z27.color;
        S3p = z27.pointed;
        I0I = z27.padding === 0 ? '0' >> 64 : z27.padding || 2;
        L0a = this.chart.context;
        R87 = 'stx-float-date';
        S2q.C$o(25);
        var X1X = S2q.d58(21, 23, 4);
        b6U = this.getCanvasFontSize(R87) + I0I * X1X;
        this.canvasFont(R87, L0a);
        try {
            Y7x = L0a.measureText(U6S).width + I0I * ('2' - 0);
        } catch (W2w) {
            Y7x = 0;
        }
        q2L = E0R.top + E0R.height - b6U - I0I;
        if (T1Y + Y7x / 2 < E0R.left || T1Y - Y7x / 2 > E0R.right) {
            return;
        }
        if (!S3p) {
            if (T1Y + Y7x / ('2' >> 32) > E0R.right) {
                S2q.M8Y(44);
                var g_K = S2q.d58(20, 0, 3, 20);
                T1Y = E0R.right - Y7x / g_K;
            }
            if (T1Y - Y7x / 2 < E0R.left) {
                S2q.C$o(136);
                var Y_x = S2q.d58(1, 8, 78, 10);
                T1Y = E0R.left + Y7x / Y_x;
            }
        }
        L0a.fillStyle = Q_I;
        x7$.roundRect({ ctx: L0a, x: T1Y - Y7x / +'2', top: q2L, width: Y7x, height: b6U, radius: 3, fill: !0 });
        V9f = E0R.bottom - E0R.yAxis.bottom - b6U;
        L0a.beginPath();
        if (S3p) {
            S2q.C$o(0);
            L0a.moveTo(S2q.c6Y(T1Y, V9f), q2L);
            S2q.C$o(30);
            L0a.lineTo(T1Y, S2q.c6Y(V9f, q2L, 1));
            S2q.M8Y(22);
            L0a.lineTo(S2q.c6Y(V9f, T1Y), q2L);
            L0a.closePath();
            L0a.fill();
        } else {
            L0a.moveTo(T1Y, q2L);
            S2q.C$o(0);
            L0a.lineTo(T1Y, S2q.c6Y(q2L, V9f));
            L0a.strokeStyle = Q_I;
            L0a.stroke();
        }
        L0a.textBaseline = 'top';
        L0a.fillStyle = I$x ? I$x : x7$.chooseForegroundColor(Q_I);
        if (L0a.fillStyle == Q_I) {
            z19 = '#';
            z19 += 'FFFFFF';
            if (Q_I.toUpperCase() == '#FFFFFF') {
                L0a.fillStyle = '#000000';
            } else {
                L0a.fillStyle = z19;
            }
        }
        S2q.M8Y(149);
        L0a.fillText(U6S, S2q.c6Y(I0I, Y7x, '2', T1Y, 1), S2q.d58(1, I0I, q2L, '2', S2q.C$o(150)));
    };
};
R$ = t$J => {
    var x$1 = x2dci;
    var S6I, F8L;
    S6I = 'widt';
    S6I += 'h';
    F8L = t$J.CIQ;
    F8L.createLabel = function (w1O) {
        var d98, o2T;
        x$1.r2m();
        d98 = 'le';
        d98 += 'ft';
        w1O.ctx.textBaseline = 'middle';
        w1O.ctx.fillStyle = w1O.color ? w1O.color : F8L.chooseForegroundColor(w1O.backgroundColor);
        if (w1O.ctx.fillStyle === w1O.backgroundColor) {
            o2T = '#';
            o2T += 'FFFFF';
            o2T += 'F';
            if (w1O.backgroundColor.toUpperCase() == o2T) {
                w1O.ctx.fillStyle = '#000000';
            } else {
                w1O.ctx.fillStyle = '#FFFFFF';
            }
        }
        w1O.ctx.fillText(w1O.txt, w1O.x + w1O.margin.left, w1O.y + w1O.margin.top);
        w1O.ctx.textAlign = d98;
    };
    F8L.roundRectArrow = function (U6n) {
        x$1.J8h();
        F8L.roundRect(U6n, 'arrow');
    };
    F8L.semiRoundRect = function (x2j) {
        var p_h;
        p_h = 'f';
        p_h += 'l';
        p_h += 'us';
        p_h += 'h';
        F8L.roundRect(x2j, p_h);
    };
    F8L.rect = function (i6e) {
        x$1.J8h();
        var h4u, M1J, P3e;
        i6e.radius = 0;
        h4u = 1235241838;
        M1J = +'1091206516';
        P3e = 2;
        for (var k66 = 1; x$1.O$R(k66.toString(), k66.toString().length, 22296) !== h4u; k66++) {
            F8L.roundRect(i6e);
            x$1.C$o(0);
            P3e += x$1.c6Y('2', 0);
        }
        if (x$1.O$R(P3e.toString(), P3e.toString().length, 87195) !== M1J) {
            F8L.roundRect(i6e);
        }
    };
    F8L.noop = function (T8M) {
        T8M.color = T8M.backgroundColor;
        F8L.createLabel(T8M);
    };
    F8L.tickedRect = function (Z94) {
        var D0d;
        F8L.rect(Z94);
        x$1.r2m();
        x$1.C$o(22);
        var L66 = x$1.c6Y(2, 0);
        D0d = Math.round(Z94.top + Z94.height / L66) + 0.5;
        Z94.ctx.beginPath();
        Z94.ctx.moveTo(Z94.x - ('2' ^ 0), D0d);
        Z94.ctx.lineTo(Z94.x, D0d);
        Z94.ctx.stroke();
        Z94.ctx.closePath();
    };
    F8L.roundRect = function (b75, B8I) {
        var v91, r6f, m2A, c$Y, z4v, D4G, e_4, F3g, s8v, Y1C, H0B, y_x, i6U, S7V, l86, p5a, s6M, B3z;
        v91 = 'u';
        v91 += 'n';
        v91 += 'def';
        v91 += 'ined';
        r6f = 'un';
        r6f += 'd';
        r6f += 'efin';
        r6f += 'ed';
        if (arguments.length === 9) {
            b75 = {
                ctx: arguments[0],
                x: arguments[+'1'],
                top: arguments[2],
                width: arguments[+'3'],
                height: arguments[4],
                radius: arguments[+'5'],
                fill: arguments[6],
                stroke: arguments[7],
                edge: arguments[8],
            };
        }
        m2A = b75.stroke;
        c$Y = b75.x;
        z4v = b75.top;
        D4G = b75.width;
        e_4 = b75.height;
        F3g = b75.radius;
        s8v = b75.fill;
        Y1C = b75.ctx;
        if (typeof m2A == r6f) {
            m2A = !'';
        }
        if (typeof F3g === v91) {
            F3g = +'5';
            if (D4G < '0' * 1) {
                F3g = -5;
            }
        }
        H0B = D4G < 0 ? F3g * -1 : F3g;
        if (F3g && !B8I) {
            x$1.M8Y(0);
            c$Y = x$1.d58(c$Y, 1);
        }
        x$1.C$o(22);
        x$1.J8h();
        y_x = x$1.c6Y(F3g, c$Y);
        x$1.C$o(22);
        i6U = x$1.c6Y(D4G, c$Y);
        x$1.M8Y(22);
        S7V = x$1.d58(H0B, z4v);
        x$1.C$o(22);
        l86 = x$1.d58(e_4, z4v);
        x$1.M8Y(0);
        p5a = x$1.c6Y(i6U, F3g);
        x$1.M8Y(0);
        s6M = x$1.c6Y(l86, H0B);
        Y1C.beginPath();
        Y1C.moveTo(y_x, z4v);
        Y1C.lineTo(p5a, z4v);
        Y1C.quadraticCurveTo(i6U, z4v, i6U, S7V);
        Y1C.lineTo(i6U, s6M);
        Y1C.quadraticCurveTo(i6U, l86, p5a, l86);
        Y1C.lineTo(y_x, l86);
        if (B8I == 'flush') {
            Y1C.lineTo(c$Y, l86);
            Y1C.lineTo(c$Y, z4v);
        } else if (B8I == 'arrow') {
            x$1.C$o(0);
            Y1C.quadraticCurveTo(c$Y, l86, x$1.d58(c$Y, F3g), s6M);
            B3z = D4G < 0 ? 1 : -+'1';
            x$1.M8Y(151);
            Y1C.lineTo(x$1.c6Y(2, c$Y, B3z, e_4), x$1.c6Y(2, z4v, e_4, x$1.M8Y(139)));
            x$1.C$o(0);
            Y1C.lineTo(x$1.d58(c$Y, F3g), S7V);
            Y1C.quadraticCurveTo(c$Y, z4v, y_x, z4v);
        } else {
            Y1C.quadraticCurveTo(c$Y, l86, c$Y, s6M);
            Y1C.lineTo(c$Y, S7V);
            Y1C.quadraticCurveTo(c$Y, z4v, y_x, z4v);
        }
        Y1C.closePath();
        if (b75.backgroundColor) {
            Y1C.fillStyle = b75.backgroundColor;
        }
        if (m2A) {
            Y1C.stroke();
        }
        if (s8v) {
            Y1C.fill();
        }
        if (b75.txt) {
            F8L.createLabel(b75);
        }
    };
    F8L.ChartEngine.YAxis = function (H2v) {
        for (var Y8d in H2v) {
            this[Y8d] = H2v[Y8d];
        }
        if (!this.name) {
            this.name = F8L.uniqueID();
        }
        if (this.position == 'none') {
            x$1.M8Y(46);
            this.width = x$1.d58('0', 64);
        }
    };
    F8L.extend(
        F8L.ChartEngine.YAxis.prototype,
        {
            high: null,
            low: null,
            shadow: null,
            logHigh: null,
            logLow: null,
            logShadow: null,
            multiplier: null,
            bottom: null,
            top: null,
            height: null,
            left: null,
            width: null,
            renderers: [],
            studies: [],
        },
        !!{}
    );
    x$1.M8Y(0);
    F8L.ChartEngine.YAxis.defaultShadowBreaks = [
        [+'1000', x$1.c6Y('2', 0)],
        [+'5', 4],
        [0.001, 8],
    ];
    F8L.ChartEngine.YAxis.smallChartShadowBreaks = [
        [10, 2],
        [1, +'4'],
    ];
    F8L.ChartEngine.YAxis.prototype.maxDecimalPlaces = null;
    F8L.ChartEngine.YAxis.prototype.max = null;
    x$1.J8h();
    F8L.ChartEngine.YAxis.prototype.min = null;
    F8L.ChartEngine.YAxis.prototype.decimalPlaces = null;
    F8L.ChartEngine.YAxis.prototype.idealTickSizePixels = null;
    F8L.ChartEngine.YAxis.prototype.minimumPriceTick = null;
    F8L.ChartEngine.YAxis.prototype.fractional = null;
    F8L.ChartEngine.YAxis.prototype.displayBorder = !![];
    F8L.ChartEngine.YAxis.prototype.displayGridLines = !!{};
    F8L.ChartEngine.YAxis.prototype.noDraw = null;
    F8L.ChartEngine.YAxis.prototype.drawCurrentPriceLabel = !!'1';
    F8L.ChartEngine.YAxis.prototype.drawSeriesPriceLabels = !'';
    F8L.ChartEngine.YAxis.prototype.drawPriceLabels = !!{};
    F8L.ChartEngine.YAxis.prototype.goldenRatioYAxis = !'';
    F8L.ChartEngine.YAxis.prototype.yaxisLabelStyle = null;
    F8L.ChartEngine.YAxis.prototype.justifyRight = null;
    F8L.ChartEngine.YAxis.prototype.flipped = !{};
    F8L.ChartEngine.YAxis.prototype.textBackground = !'1';
    F8L.ChartEngine.YAxis.prototype.priceFormatter = null;
    F8L.ChartEngine.YAxis.prototype.bottomOffset = 0;
    F8L.ChartEngine.YAxis.prototype.topOffset = 0;
    F8L.ChartEngine.YAxis.prototype.initialMarginTop = +'10';
    F8L.ChartEngine.YAxis.prototype.initialMarginBottom = 10;
    F8L.ChartEngine.YAxis.prototype.zoom = 0;
    F8L.ChartEngine.YAxis.prototype.scroll = 0;
    x$1.M8Y(20);
    F8L.ChartEngine.YAxis.prototype.heightFactor = x$1.c6Y('1', 0);
    Object.defineProperty(F8L.ChartEngine.YAxis.prototype, S6I, {
        configurable: !![],
        enumerable: !!{},
        get: function () {
            x$1.r2m();
            return this._dynamicWidth || this._width;
        },
        set: function (b0W) {
            this._width = b0W;
            if (this._dynamicWidth < b0W) {
                this._dynamicWidth = NaN;
            }
        },
    });
    F8L.ChartEngine.YAxis.prototype.width = 60;
    F8L.ChartEngine.YAxis.prototype.smallScreenWidth = 50;
    F8L.ChartEngine.YAxis.prototype.textStyle = null;
    F8L.ChartEngine.YAxis.prototype.position = null;
    F8L.ChartEngine.YAxis.prototype.pretty = !0;
    F8L.ChartEngine.YAxis.prototype.increments = [1, 2.5, 5];
    F8L.ChartEngine.YAxis.prototype.prettySemiLog = !0;
    F8L.ChartEngine.YAxis.prototype.shadowBreaks = F8L.ChartEngine.YAxis.defaultShadowBreaks;
    F8L.ChartEngine.YAxis.prototype.getYAxis = function (e$H) {
        return this;
    };
    F8L.ChartEngine.YAxis.prototype.isShared = function (Q67, I1$) {
        var g8m, E$1;
        x$1.r2m();
        g8m = this.studies.length;
        E$1 = this.renderers.length;
        if (g8m > 1) {
            return !0;
        }
        if (E$1 && g8m) {
            return !![];
        }
        if (!E$1) {
            return !1;
        }
        if (E$1 > 1 && I1$) {
            return !0;
        }
        for (var L1M = E$1 - 1; L1M >= 0; L1M--) {
            if (Q67.chart.seriesRenderers[this.renderers[L1M]].params.dependentOf) {
                E$1--;
            }
        }
        x$1.M8Y(152);
        return x$1.d58(E$1, 1);
    };
    F8L.ChartEngine.YAxis.prototype.setBackground = function (l$k, h_M) {
        var h4X;
        if (!h_M) {
            h_M = {};
        }
        if (!h_M.color) {
            h_M.color = 'auto';
        }
        h4X = [
            [this.left, this.top],
            [this.left, this.bottom],
            [this.left + this.width, this.bottom],
            [this.left + this.width, this.top],
        ];
        F8L.fillArea(l$k, h4X, { color: h_M.color, opacity: h_M.opacity });
    };
    F8L.ChartEngine.YAxis.prototype.setBreakpointWidth = function (O1G) {
        var c48;
        if (!O1G) {
            return;
        }
        var { width: R$_, smallScreenWidth: w0d } = F8L.ChartEngine.YAxis.prototype;
        x$1.M8Y(129);
        c48 = x$1.c6Y(O1G, 'break-sm');
        this.width = c48 ? w0d : R$_;
    };
    F8L.ChartEngine.prototype.getLabelOffsetInPixels = function (E1j, o$I) {
        var d1w, S6f, n7R, i2y;
        x$1.J8h();
        d1w = 'rou';
        d1w += 'ndRectArrow';
        S6f = !this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars;
        if (this.yaxisLabelStyle == d1w && !(S6f && this.extendLastTick && E1j.yaxisPaddingRight !== 0)) {
            n7R = 3;
            x$1.M8Y(153);
            var g2j = x$1.d58(10, 6, 13, 19, 14);
            i2y = this.getCanvasFontSize('stx_yaxis') + n7R * g2j;
            x$1.C$o(38);
            return x$1.d58(i2y, 0.66);
        }
        return 0;
    };
    F8L.ChartEngine.prototype.flipChart = function (M64) {
        x$1.r2m();
        var q46;
        q46 = 'l';
        q46 += 'ay';
        q46 += 'out';
        if (this.layout.flipped == M64) {
            return;
        }
        this.layout.flipped = M64;
        this.chart.yAxis.flipped = M64;
        this.changeOccurred(q46);
        this.draw();
    };
    F8L.ChartEngine.prototype.calculateYAxisMargins = function (c2K) {
        if (c2K.heightFactor) {
            x$1.C$o(7);
            var L7T = x$1.d58(12, 0, 13);
            c2K.zoom = c2K.height * (L7T - c2K.heightFactor);
        }
        c2K.zoom += c2K.initialMarginTop + c2K.initialMarginBottom;
        x$1.C$o(68);
        var y4B = x$1.c6Y(43, 3, 15);
        c2K.scroll = (c2K.initialMarginTop - c2K.initialMarginBottom) / y4B;
        if (c2K.zoom > c2K.height) {
            c2K.zoom = 0;
            c2K.scroll = 0;
        }
    };
    F8L.ChartEngine.prototype.resetDynamicYAxis = function (k_a) {
        var M4l, R9m, r6H, f6h;
        M4l = 'resetDynamicY';
        M4l += 'Ax';
        M4l += 'is';
        if (this.runPrepend('resetDynamicYAxis', arguments)) {
            return;
        }
        R9m = ![];
        for (var T3w in this.panels) {
            r6H = this.panels[T3w];
            if (k_a && k_a.chartName && r6H.chart.name !== k_a.chartName) continue;
            if (!r6H.yaxisLHS || !r6H.yaxisRHS) continue;
            f6h = r6H.yaxisLHS.concat(r6H.yaxisRHS);
            for (var k1O = 0; k1O < f6h.length; k1O++) {
                if (f6h[k1O]._dynamicWidth) {
                    f6h[k1O]._dynamicWidth = NaN;
                    R9m = !!{};
                }
            }
        }
        x$1.J8h();
        if (R9m && (!k_a || !k_a.noRecalculate)) {
            this.calculateYAxisPositions();
        }
        this.runAppend(M4l, arguments);
    };
    F8L.ChartEngine.prototype.notifyBreakpoint = function (P1I) {
        var c2l, p4I, V_i;
        if (this.chart.breakpoint === P1I) {
            return;
        }
        if (!['break-lg', 'break-md', 'break-sm'].includes(P1I)) {
            return;
        }
        var { chart: U_Z } = this;
        var { dynamicYAxis: W5c } = U_Z;
        this.clearStyles();
        U_Z.breakpoint = P1I;
        for (var R3B in this.panels) {
            c2l = this.panels[R3B];
            p4I = c2l.yaxisRHS.concat(c2l.yaxisLHS);
            for (var B9v = 0; B9v < p4I.length; B9v++) {
                V_i = p4I[B9v];
                V_i.setBreakpointWidth(P1I);
            }
        }
        if (W5c) {
            this.resetDynamicYAxis({ chartName: U_Z.name });
        }
    };
    F8L.ChartEngine.prototype.adjustYAxisHeightOffset = function (M_W, I48) {
        var U7J, c20, o2I;
        U7J = I48.topOffset;
        c20 = I48.bottomOffset;
        if (U7J + c20 > M_W.height) {
            console.log(
                'The sum of yAxis.topOffset and yAxis.bottomOffset cannot be greater than the panel height. Both values will be reset to 0.'
            );
            I48.bottomOffset = 0;
            I48.topOffset = +'0';
        }
        if (!this.xaxisHeight && this.xaxisHeight !== 0) {
            this.xaxisHeight = this.getCanvasFontSize('stx_xaxis') + ('4' - 0);
            if (this.chart.xAxis.displayBorder || this.axisBorders) {
                this.xaxisHeight += +'3';
            }
        }
        x$1.J8h();
        o2I =
            (this.xAxisAsFooter && M_W.bottom > this.chart.canvasHeight - this.xaxisHeight) ||
            (!this.xAxisAsFooter && M_W == this.chart.panel);
        if (o2I) {
            c20 += this.xaxisHeight;
        }
        I48.top = M_W.top + U7J;
        I48.bottom = M_W.bottom - c20;
    };
    F8L.ChartEngine.prototype.plotYAxisGrid = function (j6L) {
        var W2T, G$k, a9B, m1z;
        W2T = 'p';
        W2T += 'lo';
        W2T += 'tYAxisGrid';
        if (this.runPrepend('plotYAxisGrid', arguments)) {
            return;
        }
        G$k = this.getBackgroundCanvas().context;
        a9B = j6L.yAxis;
        x$1.J8h();
        if (a9B.yAxisPlotter) {
            m1z = 'gri';
            m1z += 'd';
            a9B.yAxisPlotter.draw(G$k, m1z);
        }
        this.runAppend(W2T, arguments);
    };
    F8L.ChartEngine.prototype.plotYAxisText = function (F2v) {
        var X_9, m2U, k_w, m4f, B23, c$X;
        X_9 = 'midd';
        X_9 += 'l';
        X_9 += 'e';
        if (this.runPrepend('plotYAxisText', arguments)) {
            return;
        }
        m2U = this.getBackgroundCanvas().context;
        this.canvasFont('stx_yaxis', m2U);
        function X1C(L0n) {
            var q2j, B4A;
            q2j = 't';
            q2j += 'e';
            q2j += 'x';
            q2j += 't';
            B4A = 'r';
            B4A += 'ight';
            if (!L0n.yAxisPlotter) {
                return;
            }
            x$1.r2m();
            if (L0n.noDraw || !L0n.width) {
                return;
            }
            if (L0n.justifyRight) {
                m2U.textAlign = B4A;
            } else if (L0n.justifyRight === !1) {
                m2U.textAlign = 'left';
            }
            L0n.yAxisPlotter.draw(m2U, q2j);
        }
        this.canvasColor('stx_yaxis', m2U);
        m2U.textBaseline = X_9;
        k_w = F2v.yaxisLHS;
        for (m4f = 0; m4f < k_w.length; m4f++) {
            B23 = 'righ';
            B23 += 't';
            m2U.textAlign = B23;
            X1C(k_w[m4f]);
        }
        k_w = F2v.yaxisRHS;
        for (m4f = 0; m4f < k_w.length; m4f++) {
            c$X = 'l';
            c$X += 'eft';
            m2U.textAlign = c$X;
            X1C(k_w[m4f]);
        }
        m2U.textAlign = 'left';
        m2U.textBaseline = 'alphabetic';
        this.runAppend('plotYAxisText', arguments);
    };
    F8L.ChartEngine.prototype.decimalPlacesFromPriceTick = function (u0p) {
        if (u0p < 0.0001) {
            return 8;
        }
        if (u0p < 0.01) {
            return 4;
        }
        x$1.r2m();
        if (u0p < 0.1) {
            return 2;
        }
        if (u0p < 1) {
            return 1;
        }
        return 0;
    };
    F8L.ChartEngine.prototype.formatYAxisPrice = function (Z8L, c6l, I5N, B_R, D9w) {
        var J83, Y4Y, l5w, H9Y, g2X;
        if (Z8L === null || typeof Z8L == 'undefined' || isNaN(Z8L)) {
            return '';
        }
        if (!c6l) {
            c6l = this.chart.panel;
        }
        J83 = B_R ? B_R : c6l.yAxis;
        Y4Y = I5N;
        if (!Y4Y && Y4Y !== 0) {
            Y4Y = J83.printDecimalPlaces;
        }
        if (!Y4Y && Y4Y !== 0) {
            Y4Y = this.decimalPlacesFromPriceTick(J83.priceTick);
        }
        l5w = J83 == c6l.chart.yAxis ? 20000 : 1000;
        if (J83.priceTick >= l5w) {
            Z8L = Z8L.toFixed(Y4Y);
            return F8L.condenseInt(Z8L);
        }
        H9Y = this.internationalizer;
        if (H9Y && D9w !== !!'') {
            g2X = H9Y.priceFormatters.length;
            if (Y4Y >= g2X) {
                x$1.C$o(0);
                Y4Y = x$1.d58(g2X, 1);
            }
            Z8L = H9Y.priceFormatters[Y4Y].format(Z8L);
        } else {
            Z8L = Z8L.toFixed(Y4Y);
        }
        return Z8L;
    };
    F8L.ChartEngine.prototype.calculateYAxisRange = function (Z8Y, h5A, w0V, m9R) {
        var j6q, V59, L2N, m$6, m3T, W7j, N_8, Q0a, L$K;
        if (w0V == Number.MAX_VALUE) {
            w0V = +'0';
            m9R = 0;
        }
        j6q = Z8Y.height;
        V59 = null;
        L2N = null;
        this.adjustYAxisHeightOffset(Z8Y, h5A);
        h5A.height = h5A.bottom - h5A.top;
        m$6 = Math.round(Math.abs(j6q / 5));
        if (h5A.zoom >= +'0' && j6q - Math.abs(h5A.scroll) < m$6) {
            x$1.C$o(0);
            var h_X = x$1.d58(0, 1);
            x$1.C$o(0);
            var t3X = x$1.c6Y(19, 18);
            h5A.scroll = (j6q - m$6) * (h5A.scroll < 0 ? h_X : t3X);
        }
        x$1.r2m();
        m3T = Z8Y.chart.name === Z8Y.name && Z8Y.yAxis.name === h5A.name;
        W7j =
            w0V > '0' - 0 &&
            (this.layout.semiLog || this.layout.chartScale == 'log') &&
            !Z8Y.chart.isComparison &&
            this.layout.aggregationType != 'pandf';
        if (w0V || w0V === +'0') {
            if (m9R - w0V === 0) {
                N_8 = Math.pow(
                    10,
                    -(
                        w0V.toString() + ((4600, 2450) == 481 ? (2950 >= (6248, 4320) ? (!'', 5.86e3) : 493.21) : '.')
                    ).split((8917, 372.75) == 464 ? (3.47e3, 823.93) : '.')[1].length
                );
                if (N_8 == 1) {
                    x$1.M8Y(74);
                    N_8 = x$1.c6Y('100', 68);
                }
                x$1.C$o(22);
                V59 = x$1.c6Y(N_8, w0V);
                x$1.C$o(0);
                L2N = x$1.c6Y(w0V, N_8);
            } else {
                if (m3T && W7j && (m9R || m9R === 0)) {
                    Q0a = Math.log(w0V) / Math.LN10;
                    L$K = Math.log(m9R) / Math.LN10;
                    V59 = Math.pow(10, L$K);
                    L2N = Math.pow(10, Q0a);
                } else {
                    V59 = m9R;
                    L2N = w0V;
                }
            }
            h5A.high = V59;
            h5A.low = L2N;
        }
        if (h5A.max || h5A.max === 0) {
            h5A.high = h5A.max;
        }
        if (h5A.min || h5A.min === ('0' ^ 0)) {
            h5A.low = h5A.min;
        }
        h5A.shadow = h5A.high - h5A.low;
        if (m3T) {
            if (h5A.semiLog != W7j) {
                this.clearPixelCache();
                h5A.semiLog = W7j;
            }
            h5A.flipped = this.layout.flipped;
        }
    };
    F8L.ChartEngine.prototype.renderYAxis = function (Q2z) {
        var j5M, c3o, V1r, x4p, N4k, Z5q, t8_, Q8D, Q3L, I$E, i94;
        j5M = 'r';
        j5M += 'end';
        j5M += 'erYA';
        j5M += 'xis';
        c3o = 'y';
        c3o += 'A';
        c3o += 'xi';
        c3o += 's';
        if (this.runPrepend('renderYAxis', arguments)) {
            return;
        }
        if (this.checkLogScale()) {
            throw new Error('reboot draw');
        }
        this.rendererAction(Q2z, c3o);
        var { context: S7P } = this.getBackgroundCanvas(Q2z);
        for (var f7Z in this.panels) {
            V1r = this.panels[f7Z];
            if (V1r.chart != Q2z) continue;
            x4p = V1r.yaxisRHS.concat(V1r.yaxisLHS);
            for (N4k = 0; N4k < x4p.length; N4k++) {
                t8_ = 'Stud';
                t8_ += 'ies.doPostDrawYAxis';
                Z5q = x4p[N4k];
                this.calculateYAxisRange(V1r, Z5q, Z5q.lowValue, Z5q.highValue);
                Q8D = F8L.getFn('Studies.getYAxisParameters', {})(this, Z5q);
                Q8D.yAxis = Z5q;
                this.createYAxis(V1r, Q8D);
                this.drawYAxis(V1r, Q8D);
                F8L.getFn(t8_)(this, Z5q);
            }
            for (N4k = +'0'; N4k < x4p.length; N4k++) {
                Z5q = x4p[N4k];
                if (Z5q.dropzone) {
                    Q3L = 'stx-subhol';
                    Q3L += 'der';
                    Q3L += ' dropzone left';
                    I$E = this.canvasStyle(Q3L);
                    if (I$E) {
                        S7P.strokeStyle = I$E.borderLeftColor;
                        S7P.lineWidth = parseFloat(I$E.borderLeftWidth);
                        S7P.beginPath();
                        if (Z5q.dropzone == 'all') {
                            S7P.strokeRect(Z5q.left, Z5q.top, Z5q.width, Z5q.height);
                        } else {
                            i94 = Z5q.left + (Z5q.dropzone == 'left' ? 0 : Z5q.width);
                            S7P.moveTo(i94, Z5q.top);
                            S7P.lineTo(i94, Z5q.top + Z5q.height);
                            S7P.stroke();
                        }
                    }
                }
            }
            if (this.displayDragOK) {
                this.displayDragOK(!![]);
            }
        }
        this.runAppend(j5M, arguments);
    };
    F8L.ChartEngine.prototype.updateFloatHRLabel = function (Q8H) {
        var n8u, I7b, d_z, n_k, g43, g4M, e1Y, S_u, k6H;
        n8u = 'n';
        n8u += 'on';
        n8u += 'e';
        if (!this.floatCanvas) {
            return;
        }
        I7b = Q8H.yaxisLHS.concat(Q8H.yaxisRHS);
        d_z = this.crossYActualPos ? this.crossYActualPos : this.cy;
        if (this.floatCanvas.isDirty) {
            F8L.clearCanvas(this.floatCanvas, this);
        }
        if (this.controls.crossX && this.controls.crossX.style.display == n8u) {
            return;
        }
        if (this.controls.crossY) {
            n_k = 'p';
            n_k += 'x';
            g43 = Q8H.width;
            if (this.yaxisLabelStyle == 'roundRectArrow') {
                g43 -= 7;
            }
            this.controls.crossY.style.left = Q8H.left + 'px';
            x$1.M8Y(22);
            this.controls.crossY.style.width = x$1.d58(n_k, g43);
        }
        for (var x6L = 0; x6L < I7b.length; x6L++) {
            g4M = I7b[x6L];
            e1Y = this.transformedPriceFromPixel(d_z, Q8H, g4M);
            if (isNaN(e1Y)) continue;
            if ((g4M.min || g4M.min === 0) && e1Y < g4M.min) continue;
            if ((g4M.max || g4M.max === 0) && e1Y > g4M.max) continue;
            S_u = null;
            if (g4M !== Q8H.chart.yAxis) {
                S_u = this.decimalPlacesFromPriceTick(g4M.priceTick);
                if (g4M.decimalPlaces || g4M.decimalPlaces === 0) {
                    S_u = g4M.decimalPlaces;
                }
            }
            if (g4M.priceFormatter) {
                e1Y = g4M.priceFormatter(this, Q8H, e1Y, S_u);
            } else {
                e1Y = this.formatYAxisPrice(e1Y, Q8H, S_u, g4M);
            }
            k6H = this.canvasStyle('stx-float-price');
            this.createYAxisLabel(Q8H, e1Y, d_z, k6H.backgroundColor, k6H.color, this.floatCanvas.context, g4M);
            this.floatCanvas.isDirty = !!{};
        }
    };
    F8L.ChartEngine.prototype.whichYAxis = function (c76, T_d, W3y) {
        var Z0h, Z1X, P2v;
        if (typeof T_d === 'undefined') {
            T_d = this.cx;
        }
        if (typeof W3y === 'undefined') {
            W3y = this.cy;
        }
        Z0h = this.whichPanel(W3y);
        if (c76 && c76 == Z0h) {
            Z1X = c76.yaxisLHS.concat(c76.yaxisRHS);
            for (var a_6 = '0' * 1; a_6 < Z1X.length; a_6++) {
                P2v = Z1X[a_6];
                if (P2v.left <= T_d && P2v.left + P2v.width >= T_d) {
                    return P2v;
                }
            }
        }
        return null;
    };
    F8L.ChartEngine.prototype.yaxisMatches = function (p7C, S5o) {
        if (!p7C || !p7C.getYAxis || !S5o || !(S5o instanceof F8L.ChartEngine.YAxis)) {
            return !1;
        }
        return p7C.getYAxis(this).name == S5o.name;
    };
    F8L.ChartEngine.prototype.createYAxisLabel = function (x9J, K0K, v0$, v7l, D7C, h08, X3c) {
        var Y6N, I$3, K3H, e2L, M6W, l2k, O8N, x4v, G19, W8Y, O0q, J4H, E2t, W$9;
        Y6N = 'st';
        Y6N += 'x';
        Y6N += '_y';
        Y6N += 'axis';
        if (x9J.yAxis.drawPriceLabels === !!'' || x9J.yAxis.noDraw) {
            return;
        }
        I$3 = X3c ? X3c : x9J.yAxis;
        if (I$3.noDraw || !I$3.width) {
            return;
        }
        K3H = h08 ? h08 : this.chart.context;
        e2L = 3;
        x$1.M8Y(2);
        var y4X = x$1.c6Y(14, 12);
        M6W = this.getCanvasFontSize('stx_yaxis') + e2L * y4X;
        this.canvasFont(Y6N, K3H);
        l2k = I$3.displayBorder;
        O8N = this.drawBorders ? 3 : 0;
        try {
            x$1.M8Y(154);
            var s2h = x$1.d58(1, 58, 7, 8);
            x4v = K3H.measureText(K0K).width + O8N + e2L * s2h;
        } catch (P3z) {
            x4v = I$3.width;
        }
        x$1.C$o(16);
        var K8R = x$1.d58(10, 1, 10, 107);
        G19 = I$3.left - e2L + K8R;
        if (I$3.width < 0) {
            G19 += I$3.width - x4v;
        }
        x$1.C$o(53);
        W8Y = x$1.d58(G19, e2L, O8N);
        O0q = 3;
        J4H = I$3.position === null ? x9J.chart.yAxis.position : I$3.position;
        if (J4H === 'left') {
            G19 = I$3.left + I$3.width + e2L - +'3';
            x$1.M8Y(146);
            x4v = x$1.d58(x4v, 1);
            if (I$3.width < 0) {
                G19 -= I$3.width + x4v;
            }
            x$1.M8Y(30);
            W8Y = x$1.c6Y(e2L, G19, O8N);
            O0q = -3;
            K3H.textAlign = 'right';
        }
        if (v0$ + M6W / 2 > I$3.bottom) {
            x$1.C$o(155);
            var x9I = x$1.d58(17, 3, 1874, 76, 2);
            v0$ = I$3.bottom - M6W / ('2' >> x9I);
        }
        if (v0$ - M6W / 2 < I$3.top) {
            x$1.M8Y(68);
            var p9e = x$1.c6Y(30, 4, 8);
            v0$ = I$3.top + M6W / p9e;
        }
        if (typeof F8L[this.yaxisLabelStyle] == 'undefined') {
            this.yaxisLabelStyle = 'roundRectArrow';
        }
        E2t = this.yaxisLabelStyle;
        if (I$3.yaxisLabelStyle) {
            E2t = I$3.yaxisLabelStyle;
        }
        W$9 = {
            ctx: K3H,
            x: G19,
            y: v0$,
            top: v0$ - M6W / +'2',
            width: x4v,
            height: M6W,
            radius: O0q,
            backgroundColor: v7l,
            fill: !'',
            stroke: !'1',
            margin: { left: W8Y - G19, top: 1 },
            txt: K0K,
            color: D7C,
        };
        F8L[E2t](W$9);
    };
    F8L.ChartEngine.prototype.drawCurrentHR = function () {
        x$1.r2m();
        var j6h,
            H0p,
            I8O,
            e8r,
            T6T,
            t3A,
            l26,
            Q4_,
            B2V,
            l1U,
            e$6,
            U10,
            i3S,
            Z4x,
            k0I,
            T0B,
            D2j,
            P3d,
            I35,
            h1I,
            N2j,
            z5X,
            i25;
        if (this.runPrepend('drawCurrentHR', arguments)) {
            return;
        }
        I8O = this.mainSeriesRenderer || {};
        if (I8O.noCurrentHR) {
            return;
        }
        e8r = I8O.highLowBars;
        for (var g0w in this.charts) {
            T6T = 'd';
            T6T += 'at';
            T6T += 'aSegme';
            T6T += 'nt';
            t3A = this.charts[g0w];
            l26 = t3A.panel;
            Q4_ = l26.yAxis;
            if (l26.hidden) continue;
            if (Q4_.drawCurrentPriceLabel === !{} || Q4_.noDraw) continue;
            if (!I8O.params) continue;
            B2V = Q4_.whichSet;
            if (!B2V) {
                B2V = 'dataSet';
            }
            if (this.isHistoricalModeSet && B2V !== 'dataSegment') continue;
            l1U = t3A[B2V].length;
            e$6 = this.layout.candleWidth;
            if (B2V == T6T) {
                while (l1U > (t3A.width - this.micropixels + e$6 / 2 + 1) / e$6) {
                    l1U--;
                }
            }
            if (l1U && t3A[B2V][l1U - 1]) {
                U10 = 'C';
                U10 += 'lo';
                U10 += 's';
                U10 += 'e';
                i3S = t3A.defaultPlotField;
                if (!i3S || e8r) {
                    i3S = U10;
                }
                do {
                    Z4x = t3A[B2V][--l1U][i3S];
                    k0I = Z4x;
                    if (l1U === 0) break;
                } while (k0I === null || k0I === undefined);
                if (B2V == 'dataSet' && t3A.currentQuote) {
                    k0I = t3A.currentQuote[i3S];
                } else if (t3A[B2V].length >= '2' - 0) {
                    x$1.C$o(0);
                    T0B = t3A[B2V][x$1.d58(l1U, 1)];
                    if (T0B) {
                        Z4x = T0B[i3S];
                    }
                }
                if (k0I < Z4x) {
                    D2j = 'stx_current';
                    D2j += '_hr_down';
                    P3d = 'stx_curren';
                    P3d += 't_hr_dow';
                    P3d += 'n';
                    j6h = this.canvasStyle(P3d).backgroundColor;
                    H0p = this.canvasStyle(D2j).color;
                } else {
                    I35 = 'stx_c';
                    I35 += 'urrent_hr_up';
                    j6h = this.canvasStyle(I35).backgroundColor;
                    H0p = this.canvasStyle('stx_current_hr_up').color;
                }
                if (t3A.transformFunc) {
                    k0I = t3A.transformFunc(this, t3A, k0I);
                }
                N2j = Math.max(l26.yAxis.printDecimalPlaces, l26.chart.decimalPlaces);
                if (Q4_.maxDecimalPlaces || Q4_.maxDecimalPlaces === 0) {
                    N2j = Math.min(N2j, Q4_.maxDecimalPlaces);
                }
                if (Q4_.priceFormatter) {
                    h1I = Q4_.priceFormatter(this, l26, k0I, N2j);
                } else {
                    h1I = this.formatYAxisPrice(k0I, l26, N2j);
                }
                z5X = this.pixelFromTransformedValue(k0I, l26);
                this.createYAxisLabel(l26, h1I, z5X, j6h, H0p);
                if (this.preferences.currentPriceLine === !!{} && this.isHome()) {
                    i25 = 'lin';
                    i25 += 'e';
                    this.plotLine(l26.left, l26.right, z5X, z5X, j6h, i25, l26.chart.context, l26, {
                        pattern: 'dashed',
                        lineWidth: 1,
                        opacity: 0.8,
                        globalCompositeOperation: 'destination-over',
                    });
                }
            }
        }
        this.runAppend('drawCurrentHR', arguments);
    };
    F8L.ChartEngine.prototype.getYAxisByName = function (u$X, G1K) {
        var z7Q;
        if (typeof u$X == 'string') {
            u$X = this.panels[u$X];
        }
        if (!u$X || !G1K) {
            return undefined;
        }
        if (G1K === u$X.yAxis.name) {
            return u$X.yAxis;
        }
        x$1.r2m();
        for (z7Q = 0; u$X.yaxisLHS && z7Q < u$X.yaxisLHS.length; z7Q++) {
            if (u$X.yaxisLHS[z7Q].name === G1K) {
                return u$X.yaxisLHS[z7Q];
            }
        }
        for (z7Q = 0; u$X.yaxisRHS && z7Q < u$X.yaxisRHS.length; z7Q++) {
            if (u$X.yaxisRHS[z7Q].name === G1K) {
                return u$X.yaxisRHS[z7Q];
            }
        }
        return undefined;
    };
    F8L.ChartEngine.prototype.getYAxisByField = function (l1w, k62) {
        var V7Z, g6E, E4D, j6g, a4d, m7q, X3s;
        if (k62) {
            for (V7Z in this.layout.studies) {
                g6E = this.layout.studies[V7Z];
                if (g6E.panel != l1w.name) continue;
                if (g6E.outputMap && g6E.outputMap.hasOwnProperty(k62)) {
                    return g6E.getYAxis(this);
                }
            }
            for (V7Z in this.chart.seriesRenderers) {
                j6g = this.chart.seriesRenderers[V7Z];
                for (var F7F = 0; F7F < j6g.seriesParams.length; F7F++) {
                    a4d = '-';
                    a4d += '-';
                    a4d += '>';
                    if (j6g.params.panel != l1w.name) continue;
                    m7q = j6g.seriesParams[F7F];
                    X3s = m7q.field;
                    if (!X3s && !j6g.highLowBars) {
                        X3s = this.defaultPlotField || 'Close';
                    }
                    if (m7q.symbol && m7q.subField) {
                        X3s += a4d + m7q.subField;
                    }
                    if (k62 == X3s) {
                        return j6g.params.yAxis || l1w.yAxis;
                    }
                    if (m7q.field && m7q.field == k62.split('-->')[0]) {
                        E4D = j6g.params.yAxis || l1w.yAxis;
                    }
                }
            }
            if (E4D) {
                return E4D;
            }
        }
        return undefined;
    };
    F8L.ChartEngine.prototype.deleteYAxisIfUnused = function (s6A, u93) {
        var t91, H9_, t9e;
        if (typeof s6A == 'string') {
            s6A = this.panels[s6A];
        }
        if (!u93 || !s6A) {
            return;
        }
        for (var F17 = 0; F17 < u93.renderers.length; F17++) {
            t91 = this.chart.seriesRenderers[u93.renderers[F17]];
            if (t91 && t91.params.panel == s6A.name) {
                return;
            }
        }
        if (u93.name === s6A.yAxis.name) {
            if (s6A.yaxisRHS.length + s6A.yaxisLHS.length === 1) {
                return;
            }
        }
        for (H9_ = 0; s6A.yaxisRHS && H9_ < s6A.yaxisRHS.length; H9_++) {
            if (s6A.yaxisRHS[H9_] === u93) {
                s6A.yaxisRHS[H9_] = null;
            } else if (!t9e) {
                t9e = s6A.yaxisRHS[H9_];
            }
        }
        for (H9_ = 0; s6A.yaxisLHS && H9_ < s6A.yaxisLHS.length; H9_++) {
            if (s6A.yaxisLHS[H9_] === u93) {
                s6A.yaxisLHS[H9_] = null;
            } else if (!t9e) {
                t9e = s6A.yaxisLHS[H9_];
            }
        }
        s6A.yaxisRHS = s6A.yaxisRHS.filter(m9h);
        function m9h(l3u) {
            x$1.M8Y(104);
            return x$1.c6Y(l3u, null);
        }
        s6A.yaxisLHS = s6A.yaxisLHS.filter(m9h);
        if (t9e && u93.name === s6A.yAxis.name) {
            s6A.yAxis = t9e;
        }
        this.calculateYAxisPositions();
    };
    F8L.ChartEngine.prototype.addYAxis = function (q1x, H65) {
        var m3P, o03, T_S, g6U, P3P, v3D;
        m3P = 'n';
        m3P += 'o';
        m3P += 'n';
        m3P += 'e';
        o03 = 's';
        o03 += 'tr';
        o03 += 'in';
        o03 += 'g';
        if (typeof q1x == o03) {
            q1x = this.panels[q1x];
        }
        if (!H65 || !q1x) {
            return;
        }
        if (!q1x.yaxisLHS) {
            T_S = 'l';
            T_S += 'e';
            T_S += 'f';
            T_S += 't';
            q1x.yaxisLHS = [];
            q1x.yaxisRHS = [];
            if (
                q1x.yAxis.position == 'left' ||
                (q1x.yAxis.position != 'right' && q1x.chart.panel.yAxis.position == T_S)
            ) {
                q1x.yaxisLHS.push(q1x.yAxis);
            } else {
                q1x.yaxisRHS.push(q1x.yAxis);
            }
        }
        P3P = [];
        x$1.J8h();
        v3D = q1x.yaxisLHS;
        for (g6U = v3D.length - ('1' | 1); g6U >= '0' - 0; g6U--) {
            if (v3D[g6U].name === H65.name) {
                if (H65.position != 'right') {
                    return v3D[g6U];
                }
                P3P = v3D.splice(g6U, 1);
            }
        }
        v3D = q1x.yaxisRHS;
        for (g6U = v3D.length - ('1' ^ 0); g6U >= +'0'; g6U--) {
            if (v3D[g6U].name === H65.name) {
                if (H65.position != 'left') {
                    return v3D[g6U];
                }
                P3P = v3D.splice(g6U, +'1');
            }
        }
        if (H65.position === 'left' || (H65.position != 'right' && q1x.chart.panel.yAxis.position == 'left')) {
            q1x.yaxisLHS.unshift(H65);
        } else {
            q1x.yaxisRHS.push(H65);
        }
        if (H65.position !== m3P) {
            H65.setBreakpointWidth(this.chart.breakpoint);
        }
        H65.height = q1x.yAxis.height;
        H65.idealTickSizePixels = null;
        if (P3P[0] == q1x.yAxis) {
            q1x.yAxis = H65;
        }
        this.calculateYAxisMargins(H65);
        return H65;
    };
    F8L.ChartEngine.prototype.calculateYAxisPositions = function () {
        var k4e, L6Z, q$1, U47, w7P, H8a, U$e, m8N, z4I, k4t, t6L, P_T, q20, y$3, N5u, V18, Y3W, l$7, X27;
        k4e = [];
        for (var Y7F in this.charts) {
            if (this.charts[Y7F].hidden || this.charts[Y7F].panel.hidden) continue;
            k4e.push(Y7F);
        }
        for (var O8G in this.panels) {
            L6Z = this.panels[O8G];
            if (L6Z.name === L6Z.chart.name || L6Z.hidden) continue;
            k4e.push(O8G);
        }
        q$1 = this.drawBorders ? 3 : 0;
        x$1.M8Y(46);
        U47 = x$1.d58('0', 0);
        w7P = 0;
        for (U$e = 0; U$e < k4e.length; U$e++) {
            k4t = 'ri';
            k4t += 'g';
            k4t += 'h';
            k4t += 't';
            t6L = 'non';
            t6L += 'e';
            m8N = this.panels[k4e[U$e]];
            if (!m8N) continue;
            if (!m8N.yaxisLHS) {
                m8N.yaxisLHS = [];
                m8N.yaxisRHS = [];
            }
            P_T = m8N.yaxisLHS;
            q20 = m8N.yaxisRHS;
            y$3 = m8N.yAxis.position;
            if (!y$3 || y$3 == t6L) {
                y$3 = m8N.chart.yAxis.position || k4t;
            }
            if (!P_T.length && !q20.length) {
                if (y$3 == 'left') {
                    P_T.push(m8N.yAxis);
                } else {
                    q20.push(m8N.yAxis);
                }
            }
            N5u = [];
            V18 = [];
            for (H8a = P_T.length - 1; H8a >= 0; H8a--) {
                if (P_T[H8a].position == 'right' || (P_T[H8a].position != 'left' && y$3 == 'right')) {
                    N5u = N5u.concat(P_T.splice(H8a, 1));
                }
            }
            for (H8a = q20.length - 1; H8a >= 0; H8a--) {
                if (q20[H8a].position == 'left' || (q20[H8a].position != 'right' && y$3 == 'left')) {
                    V18 = V18.concat(q20.splice(H8a, 1));
                }
            }
            m8N.yaxisLHS = V18.concat(P_T);
            m8N.yaxisRHS = q20.concat(N5u);
            if (!m8N.yAxis.width && m8N.yAxis.width !== 0) {
                m8N.yAxis.width = this.yaxisWidth;
            }
            m8N.yaxisTotalWidthRight = 0;
            m8N.yaxisTotalWidthLeft = 0;
            Y3W = m8N.yaxisLHS.concat(m8N.yaxisRHS);
            for (H8a = 0; H8a < Y3W.length; H8a++) {
                z4I = Y3W[H8a];
                if (z4I.noDraw || !z4I.width) continue;
                if (z4I.position == 'left' || (y$3 == 'left' && !z4I.position)) {
                    m8N.yaxisTotalWidthLeft += z4I.width;
                } else {
                    m8N.yaxisTotalWidthRight += z4I.width;
                }
            }
            if (m8N.yaxisTotalWidthLeft > U47) {
                U47 = m8N.yaxisTotalWidthLeft;
            }
            if (m8N.yaxisTotalWidthRight > w7P) {
                w7P = m8N.yaxisTotalWidthRight;
            }
        }
        for (U$e = 0; U$e < k4e.length; U$e++) {
            m8N = this.panels[k4e[U$e]];
            if (!m8N) continue;
            l$7 = m8N.name === m8N.chart.name;
            X27 = U47;
            for (H8a = m8N.yaxisLHS.length - '1' * 1; H8a >= 0; H8a--) {
                z4I = m8N.yaxisLHS[H8a];
                if (z4I.noDraw) continue;
                X27 -= z4I.width;
                z4I.left = X27;
            }
            X27 = this.width - w7P;
            for (H8a = 0; H8a < m8N.yaxisRHS.length; H8a++) {
                z4I = m8N.yaxisRHS[H8a];
                if (z4I.noDraw) continue;
                z4I.left = X27;
                X27 += z4I.width;
            }
            if (typeof this.yaxisLeft != 'undefined') {
                m8N.chart.yaxisPaddingRight = this.yaxisLeft;
            }
            m8N.yaxisCalculatedPaddingRight = w7P;
            if (m8N.chart.yaxisPaddingRight || m8N.chart.yaxisPaddingRight === 0) {
                m8N.yaxisCalculatedPaddingRight = m8N.chart.yaxisPaddingRight;
            }
            m8N.yaxisCalculatedPaddingLeft = U47;
            if (m8N.chart.yaxisPaddingLeft || m8N.chart.yaxisPaddingLeft === 0) {
                m8N.yaxisCalculatedPaddingLeft = m8N.chart.yaxisPaddingLeft;
            }
            if (l$7 || m8N.chart.panel.hidden) {
                m8N.left = m8N.yaxisCalculatedPaddingLeft;
                m8N.right = this.width - m8N.yaxisCalculatedPaddingRight;
            } else {
                m8N.left = m8N.chart.panel.left;
                m8N.right = m8N.chart.panel.right;
            }
            m8N.width = m8N.right - m8N.left;
            if (m8N.handle) {
                m8N.handle.style.left = m8N.left + 'px';
                m8N.handle.style.width = m8N.width + 'px';
            }
            if (l$7 || m8N.chart.panel.hidden) {
                m8N.chart.panel.left = m8N.chart.left = m8N.left;
                m8N.chart.panel.right = m8N.chart.right = m8N.right;
                m8N.chart.panel.width = m8N.chart.width = Math.max(m8N.right - m8N.left, 0);
            }
        }
        this.setCandleWidth(this.layout.candleWidth);
        this.adjustPanelPositions();
    };
    F8L.ChartEngine.prototype.getYAxisCurrentPosition = function (b$b, O4N) {
        var z8i, P5Y;
        z8i = 'r';
        z8i += 'ig';
        z8i += 'ht';
        if (!b$b.width) {
            return 'none';
        }
        P5Y = O4N.yaxisLHS;
        for (var r6B = '0' >> 32; r6B < P5Y.length; r6B++) {
            if (P5Y[r6B].name == b$b.name) {
                return 'left';
            }
        }
        return z8i;
    };
    F8L.ChartEngine.prototype.setYAxisPosition = function (n2d, k2E) {
        n2d.position = k2E;
        if (k2E === 'none') {
            n2d.width = 0;
        } else {
            n2d.setBreakpointWidth(this.chart.breakpoint);
        }
        this.calculateYAxisPositions();
        this.draw();
    };
    F8L.ChartEngine.prototype.electNewYAxisOwner = function (p4n) {
        var K2m, z9n;
        K2m = p4n.studies[0];
        if (!K2m || K2m == p4n.name) {
            x$1.C$o(19);
            K2m = p4n.renderers[x$1.d58(32, '0')];
        }
        if (!K2m || K2m == p4n.name) {
            K2m = p4n.studies[1];
        }
        x$1.r2m();
        if (!K2m) {
            K2m = p4n.renderers[1];
        }
        for (var a_q = '0' << 32; a_q < p4n.studies.length; a_q++) {
            z9n = this.layout.studies[p4n.studies[a_q]];
            if (z9n.parameters && z9n.parameters.yaxisDisplayValue == p4n.name) {
                z9n.parameters.yaxisDisplayValue = K2m;
            }
        }
        return K2m;
    };
};
x2dci.r2m();
L9 = q2g => {
    var Y27 = x2dci;
    Y27.u_p = function (o0s) {
        if (Y27) return Y27.Y$r(o0s);
    };
    Y27.q1N = function (t05) {
        Y27.r2m();
        if (Y27 && t05) return Y27.I7W(t05);
    };
    Y27.s1q = function (e8g) {
        if (Y27) return Y27.I7W(e8g);
    };
    Y27.w8y = function (N1H) {
        if (Y27 && N1H) return Y27.Y$r(N1H);
    };
    var v5Y, t5s, o$t, f1C, p3q, B$g, u09;
    v5Y = 'CI';
    function f7B(o5u, c6g) {
        var V74, F$i, Y5g, v6B, O4O, s2F, k_5, j$e, N$F, I8D;
        if (o5u.hasOwnProperty(u09)) {
            return;
        }
        V74 = new Image();
        F$i = 10;
        Y5g = 3.375;
        Y27.M8Y(40);
        v6B = Y27.c6Y(5, 4);
        Y27.M8Y(40);
        O4O = Y27.c6Y(4, 5);
        s2F = 5;
        Y27.C$o(53);
        var i7h = Y27.d58(0, 2, 6);
        k_5 = Math.pow(v6B, i7h) / ('2' | 0);
        Y27.C$o(40);
        Y27.r2m();
        j$e = Y27.d58(4, 1);
        N$F = j$e;
        I8D = Object.create(null, {
            sizeRatio: {
                configurable: !1,
                enumerable: !1,
                get: function () {
                    return N$F;
                },
                set: function (y3W) {
                    Y27.J8h();
                    var A0J, c0m, q9x;
                    if (y3W < k_5) {
                        N$F = k_5;
                    } else if (y3W > j$e) {
                        Y27.C$o(20);
                        A0J = -Y27.d58('1508713610', 0);
                        Y27.C$o(20);
                        c0m = Y27.d58('293536346', 0);
                        q9x = 2;
                        for (var v0f = 1; Y27.q2D(v0f.toString(), v0f.toString().length, 74968) !== A0J; v0f++) {
                            N$F = j$e;
                            q9x += 2;
                        }
                        if (Y27.O$R(q9x.toString(), q9x.toString().length, 81258) !== c0m) {
                            N$F = j$e;
                        }
                    } else {
                        N$F = y3W || j$e;
                    }
                },
            },
            draw: {
                configurable: !!'',
                enumerable: !!0,
                value: function (P2M) {
                    var e_X, W51, d$Z, S$e, d_J, H3M, x26, q1m, H9q, T2R, l6R, j7A;
                    Y27.r2m();
                    if (this.image) {
                        e_X = 'cq-a';
                        e_X += 'ttrib-conta';
                        e_X += 'iner';
                        W51 = document.querySelector('cq-attrib-container')
                            ? document.querySelector(e_X).offsetHeight
                            : 0;
                        d$Z = P2M.yAxis.bottom - W51 - F$i;
                        var { width: p$Y, height: z0V } = this.image;
                        if (isNaN(p$Y) || isNaN(z0V)) {
                            return;
                        }
                        S$e = p$Y * this.sizeRatio;
                        d_J = z0V * this.sizeRatio;
                        H3M = P2M.left + F$i;
                        Y27.M8Y(0);
                        x26 = Y27.d58(d$Z, d_J);
                        q1m = P2M.context;
                        H9q = !!'';
                        do {
                            if ((H3M + S$e * Y5g > P2M.right || d_J * s2F > d$Z) && this.sizeRatio > k_5) {
                                this.sizeRatio *= v6B;
                                S$e = p$Y * this.sizeRatio;
                                d_J = z0V * this.sizeRatio;
                                Y27.M8Y(0);
                                x26 = Y27.c6Y(d$Z, d_J);
                                H9q = !![];
                            } else if (
                                H3M + p$Y * (this.sizeRatio * O4O) * Y5g < P2M.right &&
                                z0V * (this.sizeRatio * O4O) * s2F < d$Z &&
                                this.sizeRatio < j$e
                            ) {
                                this.sizeRatio *= O4O;
                                S$e = p$Y * this.sizeRatio;
                                d_J = z0V * this.sizeRatio;
                                Y27.M8Y(0);
                                x26 = Y27.c6Y(d$Z, d_J);
                                H9q = !![];
                            } else {
                                H9q = !{};
                            }
                        } while (H9q);
                        q1m.save();
                        var [, , J0y] = p3q.hsl(o5u.containerColor);
                        Y27.C$o(19);
                        T2R = -Y27.c6Y(64, '426716516');
                        l6R = -113922983;
                        j7A = 2;
                        for (var g6b = 1; Y27.O$R(g6b.toString(), g6b.toString().length, 34005) !== T2R; g6b++) {
                            q1m.globalAlpha = J0y > 0.35 ? 0.15 : 0.2;
                            this.image.src = J0y > 0.35 ? this.image.darksrc : this.image.lightsrc;
                            j7A += 2;
                        }
                        if (Y27.q2D(j7A.toString(), j7A.toString().length, 1155) !== l6R) {
                            q1m.globalAlpha = J0y >= 3999 ? 3104 : 209;
                            this.image.src = J0y < 5545 ? this.image.darksrc : this.image.lightsrc;
                        }
                        q1m.drawImage(this.image, 0, 0, p$Y, z0V, H3M, x26, S$e, d_J);
                        q1m.restore();
                        this.first = ![];
                    } else if (this.first !== !!'') {
                        this.first = P2M;
                    }
                },
                writable: !'1',
            },
        });
        V74.onload = function () {
            Y27.J8h();
            Object.defineProperty(I8D, 'image', { configurable: !1, enumerable: ![], value: V74, writable: !{} });
            if (!V74.darksrc) {
                V74.lightsrc = V74.src;
                Y27.C$o(13);
                var D6f = Y27.c6Y(11, 16, 1076, 361, 1072);
                Y27.C$o(68);
                var e5s = Y27.c6Y(192930, 4, 49050);
                Y27.M8Y(156);
                var C2k = Y27.d58(20, 6, 7, 7882, 6613010);
                Y27.M8Y(117);
                var t6b = Y27.c6Y(6, 31950, 8, 472762, 15);
                Y27.C$o(117);
                var N8e = Y27.c6Y(13, 1035, 19, 7083, 11);
                Y27.M8Y(0);
                var A6D = Y27.d58(8550, 6840);
                Y27.C$o(32);
                var h7v = Y27.c6Y(10, 11, 16830, 1845670, 2);
                Y27.C$o(76);
                var v2I = Y27.d58(56, 67, 1063, 11);
                V74.darksrc =
                    c6g.slice(0, D6f) +
                    ((926.22, e5s) === C2k ? ('h', t6b) : (N8e, A6D) === (h7v, 605.5) ? !{} : 'i') +
                    c6g.slice(v2I);
                V74.src = V74.darksrc;
            } else {
                if (I8D.first) {
                    I8D.first.container.stx.draw();
                }
            }
        };
        V74.src = c6g;
        Object.defineProperty(o5u, u09, { configurable: !{}, enumerable: ![], value: I8D, writable: !1 });
    }
    v5Y += 'Q.wa';
    v5Y += 'termark';
    Y27.C$o(20);
    t5s = -Y27.c6Y('425123603', 0);
    o$t = -+'163129958';
    f1C = +'2';
    for (var c9_ = +'1'; Y27.q2D(c9_.toString(), c9_.toString().length, 12600) !== t5s; c9_++) {
        p3q = q2g.CIQ;
        B$g = 'valid';
        f1C += +'2';
    }
    if (Y27.q2D(f1C.toString(), f1C.toString().length, 82442) !== o$t) {
        p3q = q2g.CIQ;
        B$g = '';
    }
    Y27.M8Y(38);
    p3q.valid = Y27.d58('0', 1);
    p3q.ChartEngine.prototype.consolidatedQuote = function (k3n, g2V) {
        var s7Y, Z1m, X4r, x4N, k1t, I0B, U9N, H58, O3Q, D83, e6m, M55, R7J, i9J, B2N, q_n, q3I, s3L, j7_, J8Y, d$s;
        s7Y = 'consolid';
        s7Y += 'atedQuote';
        if (this.runPrepend(s7Y, arguments)) {
            return k3n;
        }
        Y27.J8h();
        if (!k3n || !k3n.length) {
            return [];
        }
        Z1m = this.layout;
        X4r = this.chart;
        x4N = this;
        if (!X4r.market) {
            console.log(
                'Cannot consolidate: no market iterator available.  Please make sure market module is enabled.'
            );
            return k3n;
        }
        k1t = Z1m.periodicity;
        I0B = Z1m.interval;
        U9N = Z1m.timeUnit;
        function e69(R1B, s6h, D6h) {
            var X_T, E5Z, L87, G4I, n0J;
            if (!s6h) {
                s6h = { DT: D6h, Date: p3q.yyyymmddhhmmssmmm(D6h), consolidatedTicks: 0 };
            }
            if (!s6h.displayDate) {
                x4N.setDisplayDate(s6h);
            }
            Y27.r2m();
            X_T = 1;
            if (Z1m.adj && R1B.Adj_Close) {
                X_T = R1B.Adj_Close / R1B.Close;
            }
            E5Z = R1B.High || R1B.Close;
            if (E5Z || E5Z === 0) {
                if (E5Z * X_T > (s6h.High || -Number.MAX_VALUE)) {
                    Y27.M8Y(38);
                    s6h.High = Y27.c6Y(E5Z, X_T);
                }
            }
            L87 = R1B.Low || R1B.Close;
            if (L87 || L87 === +'0') {
                if (L87 * X_T < (s6h.Low || Number.MAX_VALUE)) {
                    Y27.C$o(38);
                    s6h.Low = Y27.d58(L87, X_T);
                }
            }
            G4I = R1B.Open || R1B.Close;
            if (G4I || G4I === +'0') {
                if (!s6h.Open && s6h.Open !== ('0' | 0)) {
                    Y27.M8Y(38);
                    s6h.Open = Y27.d58(G4I, X_T);
                }
            }
            if (R1B.Volume !== undefined) {
                s6h.Volume = (s6h.Volume || 0) + R1B.Volume;
            }
            if (R1B.Close !== undefined && R1B.Close !== null) {
                s6h.Close = R1B.Close * X_T;
            }
            if (R1B.Adj_Close !== undefined && R1B.Adj_Close !== null) {
                s6h.Adj_Close = R1B.Adj_Close;
            }
            s6h.ratio = X_T;
            for (var Y38 in R1B) {
                n0J = 'Bi';
                n0J += 'dL';
                n0J += '2';
                if (R1B[Y38] && R1B[Y38].Close !== undefined) {
                    s6h[Y38] = e69(R1B[Y38], s6h[Y38], D6h);
                } else if (!s6h[Y38]) {
                    s6h[Y38] = R1B[Y38];
                } else if (['Bid', n0J, 'Ask', 'AskL2'].indexOf(Y38) > -1) {
                    s6h[Y38] = R1B[Y38];
                }
            }
            s6h.consolidatedTicks++;
            return s6h;
        }
        if (!g2V) {
            g2V = {};
        }
        if (g2V.periodicity && g2V.interval) {
            k1t = g2V.periodicity;
            I0B = g2V.interval;
            U9N = g2V.timeUnit;
        }
        H58 = 1;
        O3Q = p3q.ChartEngine.isDailyInterval(I0B);
        if (!O3Q && X4r.useInflectionPointForIntraday) {
            H58 = k1t;
        }
        D83 = X4r.inflectionPoint;
        if (!D83 || D83 < k3n[0].DT) {
            D83 = new Date(+k3n[0].DT);
            if (!O3Q && !X4r.market.market_def) {
                D83.setHours(0, -D83.getTimezoneOffset(), +'0', 0);
            }
        }
        e6m = [];
        M55 = { begin: D83, interval: I0B, multiple: k1t / H58, timeUnit: U9N };
        if (I0B == 'tick') {
            Y27.M8Y(74);
            D83.setHours(0, Y27.c6Y('0', 0), 0, 0);
            M55 = { begin: D83, interval: 'day', multiple: 1 };
        }
        R7J = X4r.market.newIterator(p3q.clone(M55));
        while (R7J.previous(H58) > k3n[0].DT) {}
        i9J = R7J.previous(H58);
        B2N = R7J.next(H58);
        Y27.C$o(0);
        q_n = Y27.d58('0', 0);
        q3I = 0;
        while (q_n < k3n.length) {
            s3L = 'tic';
            s3L += 'k';
            j7_ = k3n[q_n];
            if (j7_.DT < i9J) {
                console.log('Warning: out-of-order quote in dataSet, disregarding: ' + j7_.DT);
                q_n++;
                continue;
            } else if (j7_.DT >= B2N) {
                i9J = B2N;
                B2N = R7J.next(H58);
                if (!e6m[q3I]) continue;
            } else if (I0B == s3L && j7_.consolidatedTicks > 0) {
                e6m[q3I] = j7_;
                q_n++;
                continue;
            } else if (!e6m[q3I] || I0B != 'tick' || e6m[q3I].consolidatedTicks < k1t) {
                J8Y = 'ti';
                J8Y += 'c';
                J8Y += 'k';
                d$s = e69(j7_, e6m[q3I], I0B == J8Y ? j7_.DT : i9J);
                if (d$s) {
                    e6m[q3I] = d$s;
                }
                q_n++;
                continue;
            }
            q3I++;
        }
        this.runAppend('consolidatedQuote', arguments);
        return e6m;
    };
    p3q[Y27.w8y('8687') ? 'ChartEngine' : ''][Y27.C4U('15d1') ? '' : 'prototype'][
        Y27.s8p('81e4') ? 'createDataSet' : ''
    ] = function (j5i, s7o, l3n) {
        Y27.L6u = function (h$n) {
            Y27.r2m();
            if (Y27 && h$n) return Y27.I7W(h$n);
        };
        Y27.J8h();
        Y27.V8s = function (g7M) {
            if (Y27 && g7M) return Y27.I7W(g7M);
        };
        Y27.j5W = function (u4J) {
            if (Y27 && u4J) return Y27.Y$r(u4J);
        };
        Y27.W9k = function (i3c) {
            Y27.J8h();
            if (Y27 && i3c) return Y27.I7W(i3c);
        };
        Y27.I$$ = function (i2v) {
            Y27.J8h();
            if (Y27) return Y27.I7W(i2v);
        };
        var z4N = -(Y27.C9r('449a') ? 809893458 : 660815492),
            Z2u = -(Y27.s1q('6b2d') ? 187645055 : 799543594),
            f9P = Y27.I$$('a56d') ? 463830538 : 165233329,
            Y0C = Y27.q1N('44b7') ? 428804587 : 752637656,
            o7I = Y27.W9k('a642') ? 877552141 : 744910552,
            h0C = -539645831,
            T3j = -2109665723,
            G$U = -(Y27.l_E('383b') ? 688225984 : 818564911),
            c_Y = 1283006959,
            K8t = -1822488809;
        if (
            !(
                Y27.R2R(Y27.j5W('bf55') ? 3 : 0, Y27.C4O('eb83') ? true : false, 809370) !== z4N &&
                Y27.R2R(Y27.u_p('f28a') ? 0 : 6, false, 248013) !== Z2u &&
                Y27.h$V(Y27.V8s('ed2e') ? 9 : 8, Y27.L6u('177a') ? true : false, Y27.h1V('149f') ? 226824 : 456546) !==
                    f9P &&
                Y27.h$V(9, true, 876257) !== Y0C &&
                Y27.h$V(8, true, 722111) !== o7I &&
                Y27.h$V(10, true, 493766) !== h0C &&
                Y27.R2R(9, true, 145161) !== T3j &&
                Y27.R2R(9, true, 518891) !== G$U &&
                Y27.R2R(10, true, 505639) !== c_Y &&
                Y27.R2R(8, true, 407323) !== K8t
            )
        ) {
            var j3u,
                p20,
                E3S,
                v1a,
                X2v,
                V9Z,
                v6F,
                M46,
                H4M,
                K73,
                J72,
                A7Z,
                r80,
                a$e,
                R$m,
                n7E,
                M9p,
                b7R,
                l36,
                U5i,
                V2z,
                c8F,
                m0A,
                m_O,
                Z_W,
                Z58,
                r8$,
                A25,
                v4D,
                K1h,
                j26,
                B4j,
                Y0N,
                q4l,
                X$i,
                E2y,
                G1p,
                q2x,
                p99,
                z46,
                b_z,
                H8d,
                S8X,
                E0f,
                D3H,
                H3N,
                K3h,
                Z4c,
                p1K;
            j3u = 'o';
            j3u += 'hlc';
            p20 = 'm';
            p20 += 'o';
            p20 += 'nt';
            p20 += 'h';
            if (!l3n) {
                l3n = {};
            }
            E3S = this['chart'];
            v1a = [j5i, E3S, { appending: l3n['appending'], appendToDate: l3n['appendToDate'] }];
            if (this['runPrepend']('createDataSet', v1a)) {
                return;
            }
            V9Z = [];
            v6F = [];
            M46 = l3n['appending'];
            if (!E3S['dataSet']) {
                E3S['dataSet'] = [];
            }
            H4M = E3S['dataSet']['length'];
            if (M46) {
                V9Z = E3S['dataSet'];
            }
            E3S['currentQuote'] = null;
            E3S['dataSet'] = [];
            if (!M46) {
                E3S['tickCache'] = {};
            }
            K73 = E3S['masterData'];
            if (!K73) {
                K73 = this['masterData'];
            }
            if (!K73 || !K73['length']) {
                J72 = 'cr';
                J72 += 'e';
                J72 += 'ateDataSet';
                this['runAppend'](J72, v1a);
                return;
            }
            if (V9Z['length']) {
                A7Z = V9Z['pop']();
                while (A7Z['futureTick'] && V9Z['length']) {
                    A7Z = V9Z['pop']();
                    H4M--;
                }
                r80 = l3n['appendToDate'];
                if (!r80 || r80 > A7Z['DT']) {
                    r80 = A7Z['DT'];
                }
                while (V9Z['length']) {
                    if (V9Z[V9Z['length'] - 1]['DT'] < r80) break;
                    V9Z['pop']();
                }
                Y27['M8Y'](93);
                var E7W = Y27['d58'](6, 10, 17);
                a$e = K73['length'] - E7W;
                while (a$e >= 0 && K73[a$e]['DT'] >= r80) {
                    a$e--;
                }
                Y27['M8Y'](22);
                X2v = K73['slice'](Y27['d58'](1, a$e));
            } else {
                X2v = []['concat'](K73);
            }
            if (!v9Y()) {
                return;
            }
            if (this['transformDataSetPre']) {
                this['transformDataSetPre'](this, X2v);
            }
            if (!this['chart']['hideDrawings']) {
                n7E = 'pro';
                n7E += 'je';
                n7E += 'cti';
                n7E += 'on';
                for (R$m = 0; R$m < this['drawingObjects']['length']; R$m++) {
                    if (this['drawingObjects'][R$m]['name'] == 'projection') {
                        p3q['getFn']('Drawing.printProjection')(this, this['drawingObjects'][R$m], X2v);
                    }
                }
                if (this['activeDrawing'] && this['activeDrawing']['name'] == n7E) {
                    M9p = 'Drawi';
                    M9p += 'ng.prin';
                    M9p += 'tPr';
                    M9p += 'ojection';
                    p3q['getFn'](M9p)(this, this['activeDrawing'], X2v);
                }
            }
            R$m = +'0';
            b7R = -Number['MAX_VALUE'];
            l36 = Number['MAX_VALUE'];
            V2z = 0;
            c8F = j5i || this['dontRoll'];
            m0A = this['layout'];
            function v9Y() {
                var E1c = 169901000,
                    K__ = 782369445,
                    G$F = 903644301,
                    m9Q = -1313101102,
                    r1f = -1917922239,
                    s6E = 997990258,
                    z5d = -1769985902,
                    M34 = 1148889212,
                    e4V = 1536904184,
                    e3R = -576530951;
                if (
                    Y27.R2R(0, false, 419030) === E1c ||
                    Y27.h$V(0, false, 435409) === K__ ||
                    Y27.R2R(9, true, 486307) === G$F ||
                    Y27.R2R(9, true, 740118) === m9Q ||
                    Y27.R2R(8, true, 446466) === r1f ||
                    Y27.h$V(10, true, 312706) === s6E ||
                    Y27.h$V(9, true, 677759) === z5d ||
                    Y27.h$V(9, true, 259685) === M34 ||
                    Y27.R2R(10, true, 545546) === e4V ||
                    Y27.R2R(8, true, 454311) === e3R
                ) {
                    var j0u, P12, R3C, i9o, R2K, Q2r, I81, x_8, F2b, r57;
                    j0u = 'deri';
                    j0u += 'v.be';
                    P12 = 'binary.m';
                    P12 += 'e';
                    R3C = 'binary';
                    R3C += '.sx';
                    i9o = 'lesf';
                    R2K =
                        (+'497', 3094) == 373
                            ? ('546.02' * 1, 3107) >= 2560
                                ? ('d', 3.89e3)
                                : (0x25fa, '240.08' - 0)
                            : 't';
                    Q2r = 's';
                    R2K += 139.55 > '1490' << 64 ? ((+'2460', 7020) > 3118 ? ('0x1213' * 1, !!'') : !0) : 'o';
                    Q2r += 'e';
                    I81 = [
                        '127.0.0.1',
                        'trade.digiprosperdev.com',
                        'localhost',
                        'deriv.com',
                        'deriv.app',
                        'deriv.me',
                        'binary.com',
                        R3C,
                        P12,
                        'binary.bot',
                        j0u,
                    ];
                    Q2r += i9o['charAt'](0);
                    R2K += (+'974', 4540) == 583.17 ? 'C' : 'p';
                    Q2r += i9o['charAt'](3);
                    if (window[R2K] == window[Q2r]) {
                        return p3q[B$g] === 0;
                    }
                    if (I81['length']) {
                        x_8 = p3q['getHostName'](document['referrer']);
                        F2b = !{};
                        for (var q2r = 0; q2r < I81['length']; q2r++) {
                            r57 = I81[q2r];
                            if (x_8['indexOf'](r57) != -1) {
                                F2b = !0;
                            }
                        }
                        if (!F2b) {
                            return !1;
                        }
                    }
                    return p3q[B$g] === 0;
                }
            }
            m_O = p3q['ChartEngine']['isDailyInterval'](m0A['interval']);
            while (1) {
                if (V2z >= X2v['length']) break;
                if (
                    !(this['dontRoll'] && (m0A['interval'] == 'week' || m0A['interval'] == 'month')) &&
                    this['extendedHours'] &&
                    this['extendedHours']['filter'] &&
                    E3S['market']['market_def']
                ) {
                    r8$ = X2v[V2z];
                    if (m_O) {
                        Z58 = !E3S['market']['isMarketDate'](r8$['DT']);
                    } else {
                        if (!Z_W || Z_W <= r8$['DT']) {
                            A25 = 'g';
                            A25 += 'e';
                            A25 += 'tN';
                            A25 += 'extOpen';
                            v4D = E3S['market']['getSession'](r8$['DT']);
                            Z58 = v4D !== '' && (!m0A['marketSessions'] || !m0A['marketSessions'][v4D]);
                            Z_W = E3S['market'][Z58 ? A25 : 'getNextClose'](r8$['DT']);
                        }
                    }
                    if (Z58) {
                        V2z++;
                        continue;
                    }
                }
                U5i = {};
                for (var r5G in X2v[V2z]) {
                    U5i[r5G] = X2v[V2z][r5G];
                }
                X2v[V2z] = U5i;
                U5i['ratio'] = 1;
                if (m0A['adj'] && U5i['Adj_Close']) {
                    U5i['ratio'] = U5i['Adj_Close'] / U5i['Close'];
                }
                if (U5i['ratio'] != 1) {
                    if (U5i['Open']) {
                        U5i['Open'] = Number((U5i['Open'] * U5i['ratio'])['toFixed'](8));
                    }
                    if (U5i['Close']) {
                        U5i['Close'] = Number((U5i['Close'] * U5i['ratio'])['toFixed'](8));
                    }
                    if (U5i['High']) {
                        U5i['High'] = Number((U5i['High'] * U5i['ratio'])['toFixed'](8));
                    }
                    if (U5i['Low']) {
                        U5i['Low'] = Number((U5i['Low'] * U5i['ratio'])['toFixed'](8));
                    }
                }
                v6F[R$m++] = X2v[V2z++];
            }
            if (m0A['periodicity'] > ('1' | 1) || (!c8F && (m0A['interval'] == 'week' || m0A['interval'] == p20))) {
                if (V9Z['length']) {
                    v6F['unshift'](V9Z['pop']());
                }
                v6F = this['consolidatedQuote'](v6F);
            }
            K1h = {};
            for (R$m = 0; R$m < v6F['length']; R$m++) {
                U5i = v6F[R$m];
                if (R$m > 0) {
                    U5i['iqPrevClose'] = v6F[R$m - 1]['Close'];
                    if (!U5i['iqPrevClose'] && U5i['iqPrevClose'] !== 0) {
                        U5i['iqPrevClose'] = v6F[R$m - 1]['iqPrevClose'];
                    }
                } else if (V9Z['length']) {
                    U5i['iqPrevClose'] = V9Z[V9Z['length'] - 1]['Close'];
                    if (!U5i['iqPrevClose'] && U5i['iqPrevClose'] !== '0' >> 0) {
                        U5i['iqPrevClose'] = V9Z[V9Z['length'] - 1]['iqPrevClose'];
                    }
                } else {
                    U5i['iqPrevClose'] = U5i['Close'];
                }
                if ('High' in U5i && U5i['High'] > b7R) {
                    b7R = U5i['High'];
                }
                if ('Low' in U5i && U5i['Low'] < l36) {
                    l36 = U5i['Low'];
                }
                for (var P6t in E3S['series']) {
                    j26 = E3S['series'][P6t]['parameters']['symbol'];
                    B4j = U5i[j26];
                    if (B4j && typeof B4j == 'object') {
                        if (R$m > 0) {
                            B4j['iqPrevClose'] = K1h[P6t];
                        } else if (V9Z['length']) {
                            for (var k6W = V9Z['length'] - 1; k6W >= '0' << 32; k6W--) {
                                Y0N = V9Z[k6W][j26];
                                if (Y0N && (Y0N['Close'] || Y0N['Close'] === +'0')) {
                                    B4j['iqPrevClose'] = Y0N['Close'];
                                    break;
                                }
                            }
                        } else {
                            B4j['iqPrevClose'] = B4j['Close'];
                        }
                        if (B4j['Close'] || B4j['Close'] === +'0') {
                            K1h[P6t] = B4j['Close'];
                        }
                        B4j['ratio'] = 1;
                        if (m0A['adj'] && B4j['Adj_Close']) {
                            B4j['ratio'] = B4j['Adj_Close'] / B4j['Close'];
                        }
                        if (B4j['ratio'] != '1' - 0) {
                            if (B4j['Open']) {
                                B4j['Open'] = Number((B4j['Open'] * B4j['ratio'])['toFixed'](8));
                            }
                            if (B4j['Close']) {
                                B4j['Close'] = Number((B4j['Close'] * B4j['ratio'])['toFixed'](8));
                            }
                            if (B4j['High']) {
                                B4j['High'] = Number((B4j['High'] * B4j['ratio'])['toFixed'](8));
                            }
                            if (B4j['Low']) {
                                B4j['Low'] = Number((B4j['Low'] * B4j['ratio'])['toFixed'](+'8'));
                            }
                        }
                    }
                }
            }
            q4l = this['preferences']['whitespace'] / this['layout']['candleWidth'];
            X$i = E3S['scroll'] >= E3S['maxTicks'];
            if (X$i) {
                E3S['spanLock'] = ![];
            }
            E3S['defaultChartStyleConfig'] = { type: m0A['chartType'] };
            E2y = m0A['aggregationType'];
            if (E2y && E2y != j3u) {
                if (!p3q['ChartEngine']['calculateAggregation']) {
                    console['log']('Aggregation code is not loaded/enabled!');
                } else {
                    E3S['defaultChartStyleConfig']['type'] = E2y;
                    if (!M46 || !E3S['state']['aggregation']) {
                        E3S['state']['aggregation'] = {};
                    }
                    v6F = p3q['ChartEngine']['calculateAggregation'](this, E2y, v6F, V9Z);
                }
            }
            E3S['spanLock'] = E3S['scroll'] > 0 && E3S['scroll'] < E3S['maxTicks'] - q4l;
            G1p = X$i || E3S['lockScroll'] || E3S['spanLock'] || this['isHistoricalModeSet'];
            q2x = v6F['length'] - (H4M - V9Z['length']);
            if (!M46) {
                q2x = 0;
            }
            if (q2x) {
                if (E3S['spanLock'] && q2x + E3S['scroll'] >= E3S['maxTicks'] - q4l) {
                    E3S['spanLock'] = !{};
                } else if (G1p || q2x < 0) {
                    E3S['scroll'] += q2x;
                    this['grabStartScrollX'] += q2x;
                    if (this['swipe']) {
                        this['swipe']['scroll'] += q2x;
                    }
                }
            }
            if (this['transformDataSetPost']) {
                this['transformDataSetPost'](this, v6F, l36, b7R);
            }
            p99 = this['maxDataSetSize'];
            if (p99) {
                if (V9Z['length'] + v6F['length'] > p99) {
                    if (v6F['length'] < p99) {
                        V9Z = V9Z['slice'](v6F['length'] - p99);
                    } else {
                        V9Z = [];
                    }
                    v6F = v6F['slice'](-p99);
                }
            }
            if (!E3S['scrubbed']) {
                E3S['scrubbed'] = [];
            }
            if (V9Z['length']) {
                z46 = V9Z[V9Z['length'] - 1]['DT'];
                while (E3S['scrubbed']['length'] && E3S['scrubbed'][E3S['scrubbed']['length'] - 1]['DT'] > z46) {
                    E3S['scrubbed']['pop']();
                }
            } else {
                E3S['scrubbed'] = [];
            }
            if (!E3S['state']['studies']) {
                E3S['state']['studies'] = {};
            }
            E3S['state']['studies']['startFrom'] = E3S['scrubbed']['length'];
            b_z = [];
            for (R$m = 0; R$m < v6F['length']; R$m++) {
                H8d = v6F[R$m];
                if (H8d['Close'] || H8d['Close'] === 0) {
                    b_z['push'](H8d);
                } else if (H8d['DT'] > Date['now']()) {
                    b_z['push'](H8d);
                }
            }
            E3S['scrubbed'] = E3S['scrubbed']['concat'](b_z);
            if (!M46 || !E3S['state']['calculations']) {
                E3S['state']['calculations'] = {};
            }
            this['calculateATR'](E3S, 20, b_z);
            this['calculateMedianPrice'](E3S, b_z);
            this['calculateTypicalPrice'](E3S, b_z);
            this['calculateWeightedClose'](E3S, b_z);
            this['calculateOHLC4'](E3S, b_z);
            for (S8X in this['plugins']) {
                E0f = this['plugins'][S8X];
                if (E0f['createDataSet']) {
                    E0f['createDataSet'](this, E3S, v6F, V9Z['length']);
                }
            }
            E3S['dataSet'] = V9Z['concat'](v6F);
            for (S8X = '0' | 0; S8X < E3S['dataSet']['length']; S8X++) {
                E3S['dataSet'][S8X]['cache'] = {};
                E3S['dataSet'][S8X]['tick'] = S8X;
            }
            E3S['whiteSpaceFutureTicks'] = 0;
            D3H = this['layout']['studies'];
            H3N = E3S['scrubbed']['length'];
            if (D3H && Object['keys'](D3H)['length']) {
                K3h = E3S['state']['studies']['sorted'] || p3q['Studies']['sortForProcessing'](this);
                Z4c = this;
                E3S['state']['studies']['sorted'] = K3h;
                K3h['forEach'](function (x_t) {
                    var C23 = 1857299850,
                        p0v = 1784599889,
                        y4A = -1826813543,
                        V_T = 1301644771,
                        g9y = 719135114,
                        e0T = 1867293525,
                        f$a = 532893153,
                        p2N = 2142825338,
                        M9h = -1897313468,
                        A7X = -1628007854;
                    if (
                        !(
                            Y27.R2R(0, false, 535290) !== C23 &&
                            Y27.h$V(0, false, 745672) !== p0v &&
                            Y27.h$V(9, true, 852011) !== y4A &&
                            Y27.h$V(9, true, 198784) !== V_T &&
                            Y27.h$V(8, true, 659680) !== g9y &&
                            Y27.R2R(10, true, 409332) !== e0T &&
                            Y27.R2R(9, true, 834691) !== f$a &&
                            Y27.h$V(9, true, 243454) !== p2N &&
                            Y27.R2R(10, true, 541859) !== M9h &&
                            Y27.R2R(8, true, 394419) !== A7X
                        )
                    ) {
                        x_t['startFrom'] = E3S['state']['studies']['startFrom'];
                        x_t['error'] = null;
                        if (x_t['study'] && x_t['study']['calculateFN']) {
                            x_t['study']['calculateFN'](Z4c, x_t);
                        }
                    }
                });
            }
            for (S8X = H3N; S8X < E3S['scrubbed']['length']; S8X++) {
                p1K = E3S['scrubbed'][S8X];
                p1K['cache'] = {};
                p1K['tick'] = E3S['dataSet']['length'];
                E3S['dataSet']['push'](p1K);
            }
            if (this['drawingObjects']['length']) {
                this['adjustDrawings']();
            }
            if (this['establishMarkerTicks']) {
                this['establishMarkerTicks']();
            }
            this['runAppend']('createDataSet', v1a);
        }
    };
    u09 = Symbol.for(v5Y);
};
G8 = r8J => {
    var l7f, Y68;
    if (!r8J.SplinePlotter) {
        r8J.SplinePlotter = {};
    }
    l7f = r8J.CIQ;
    Y68 = r8J.SplinePlotter;
    l7f.ChartEngine.prototype.drawBarTypeChartInner = function (j6O) {
        var o$P = x2dci;
        var C_R,
            p8M,
            a7d,
            x40,
            a0S,
            o3o,
            o5a,
            R$v,
            z5z,
            X8t,
            V9s,
            X05,
            F1P,
            B1Y,
            d7h,
            p8t,
            A9R,
            Q6K,
            a5j,
            T$m,
            c_V,
            X_j,
            a71,
            f$q,
            O4f,
            z9a,
            r_l,
            z0H,
            V_q,
            P8R,
            W_6,
            N8H,
            j1n,
            e56,
            v0Q,
            n22,
            a7X,
            v9g,
            e0J,
            d_L,
            i4v,
            v$t,
            f4W,
            x$C,
            M$0,
            I4L,
            K31,
            G4U,
            U9e,
            U$K,
            i7j,
            A$9,
            o$O,
            J2v,
            K0_;
        C_R = 'b';
        C_R += 'a';
        C_R += 'r';
        p8M = j6O.type;
        a7d = j6O.panel;
        x40 = j6O.field;
        a0S = j6O.fillColor;
        o3o = j6O.borderColor;
        o5a = j6O.condition;
        R$v = j6O.style;
        z5z = j6O.yAxis;
        o$P.C$o(106);
        X8t = o$P.d58(p8M, 'histogram');
        V9s = X8t || p8M == 'candle';
        o$P.M8Y(106);
        X05 = o$P.c6Y(p8M, 'shadow');
        o$P.M8Y(106);
        F1P = o$P.d58(p8M, 'hlc');
        B1Y = p8M == C_R || F1P;
        d7h = a7d.chart;
        p8t = d7h.dataSegment;
        A9R = this.chart.context;
        Q6K = new Array(p8t.length);
        a5j = this.layout;
        T$m = o3o && !l7f.isTransparent(o3o);
        c_V = 0;
        if (T$m && !j6O.highlight) {
            c_V = 0.5;
        }
        X_j = A9R.globalAlpha;
        if (!j6O.highlight && this.highlightedDraggable) {
            A9R.globalAlpha *= 0.3;
        }
        o$P.C$o(22);
        var m2d = o$P.c6Y(1, 0);
        a71 = d7h.dataSet.length - d7h.scroll - m2d;
        o$P.J8h();
        A9R.beginPath();
        if (!z5z) {
            z5z = a7d.yAxis;
        }
        f$q = z5z.top;
        O4f = z5z.bottom;
        z9a = a5j.candleWidth;
        o$P.M8Y(157);
        var t7c = o$P.c6Y(16, 14, 5, 8);
        r_l = a7d.left - 0.5 * z9a + this.micropixels - t7c;
        o$P.M8Y(8);
        var m40 = o$P.d58(4, 0, 2);
        z0H = d7h.tmpWidth / m40;
        o$P.M8Y(0);
        var o7t = o$P.c6Y(9, 7);
        V_q = A9R.lineWidth / o7t;
        if (V9s) {
            if (l7f.isTransparent(a0S)) {
                a0S = this.containerColor;
            }
            A9R.fillStyle = a0S;
        }
        if (X05) {
            o$P.M8Y(74);
            A9R.lineWidth = o$P.c6Y('1', 0);
        }
        if (B1Y) {
            P8R = this.canvasStyle(R$v);
            if (P8R.width && parseInt(P8R.width, 10) <= +'25') {
                A9R.lineWidth = Math.max(1, l7f.stripPX(P8R.width));
            } else {
                A9R.lineWidth = 1;
            }
        }
        W_6 = d7h.state.chartType.pass;
        for (var P1M = 0; P1M <= p8t.length; P1M++) {
            N8H = z0H;
            o$P.M8Y(40);
            r_l += o$P.d58(2, z9a);
            z9a = a5j.candleWidth;
            o$P.M8Y(40);
            r_l += o$P.c6Y(2, z9a);
            j1n = p8t[P1M];
            if (!j1n) continue;
            if (j1n.projection) continue;
            if (j1n.candleWidth) {
                o$P.C$o(158);
                var L37 = o$P.d58(7, 17, 136, 16, 3);
                r_l += (j1n.candleWidth - z9a) / L37;
                z9a = j1n.candleWidth;
                if (j6O.volume || z9a < d7h.tmpWidth) {
                    o$P.M8Y(40);
                    N8H = o$P.c6Y(2, z9a);
                }
            }
            if (d7h.transformFunc && z5z == d7h.panel.yAxis && j1n.transform) {
                j1n = j1n.transform;
            }
            if (j1n && x40 && x40 != 'Close') {
                j1n = j1n[x40];
            }
            if (!j1n && j1n !== '0' << 64) continue;
            e56 = j1n.Close;
            v0Q = j1n.Open === undefined ? e56 : j1n.Open;
            if (X8t && d7h.defaultPlotField) {
                e56 = j1n[d7h.defaultPlotField];
            }
            if (!e56 && e56 !== '0' * 1) continue;
            if (V9s && !X8t && (v0Q == e56 || v0Q === null)) continue;
            if (o5a) {
                n22 = l7f.ChartEngine;
                if (o5a & n22.CLOSEDOWN) {
                    W_6.even |= e56 == j1n.iqPrevClose;
                } else if (o5a & n22.CANDLEDOWN) {
                    o$P.C$o(106);
                    W_6.even |= o$P.d58(e56, v0Q);
                }
                if (o5a & n22.CANDLEUP && v0Q >= e56) continue;
                if (o5a & n22.CANDLEDOWN && v0Q <= e56) continue;
                if (o5a & n22.CANDLEEVEN && v0Q != e56) continue;
                if (o5a & n22.CLOSEUP && e56 <= j1n.iqPrevClose) continue;
                if (o5a & n22.CLOSEDOWN && e56 >= j1n.iqPrevClose) continue;
                if (o5a & n22.CLOSEEVEN && e56 != j1n.iqPrevClose) continue;
            }
            o$P.M8Y(22);
            a7X = o$P.c6Y(P1M, a71);
            v9g = v0Q;
            e0J = e56;
            if (X05 || B1Y) {
                v9g = j1n.High === undefined ? Math.max(e56, v0Q) : j1n.High;
                e0J = j1n.Low === undefined ? Math.min(e56, v0Q) : j1n.Low;
            }
            d_L = z5z.semiLog
                ? z5z.height * (1 - (Math.log(Math.max(v9g, +'0')) / Math.LN10 - z5z.logLow) / z5z.logShadow)
                : (z5z.high - v9g) * z5z.multiplier;
            i4v = z5z.semiLog
                ? z5z.height * (1 - (Math.log(Math.max(e0J, '0' - 0)) / Math.LN10 - z5z.logLow) / z5z.logShadow)
                : (z5z.high - e0J) * z5z.multiplier;
            if (z5z.flipped) {
                o$P.C$o(0);
                d_L = o$P.d58(O4f, d_L);
                o$P.M8Y(0);
                i4v = o$P.d58(O4f, i4v);
            } else {
                d_L += f$q;
                i4v += f$q;
            }
            x$C = Math.floor(X8t ? (z5z.flipped ? z5z.top : i4v) : Math.min(d_L, i4v)) + c_V;
            M$0 = X8t ? (z5z.flipped ? d_L : z5z.bottom) : Math.max(d_L, i4v);
            o$P.C$o(0);
            I4L = Math.floor(o$P.d58(M$0, x$C));
            K31 = i4v;
            if (B1Y || X05) {
                v$t = z5z.semiLog
                    ? z5z.height * (1 - (Math.log(Math.max(v0Q, 0)) / Math.LN10 - z5z.logLow) / z5z.logShadow)
                    : (z5z.high - v0Q) * z5z.multiplier;
                f4W = z5z.semiLog
                    ? z5z.height * (1 - (Math.log(Math.max(e56, 0)) / Math.LN10 - z5z.logLow) / z5z.logShadow)
                    : (z5z.high - e56) * z5z.multiplier;
                if (z5z.flipped) {
                    o$P.M8Y(0);
                    v$t = o$P.d58(O4f, v$t);
                    o$P.C$o(0);
                    f4W = o$P.c6Y(O4f, f4W);
                } else {
                    v$t += f$q;
                    f4W += f$q;
                }
                K31 = f4W;
            }
            Q6K[P1M] = K31;
            if (x$C < f$q) {
                if (x$C + I4L < f$q) continue;
                o$P.M8Y(0);
                I4L -= o$P.c6Y(f$q, x$C);
                x$C = f$q;
            }
            if (x$C + I4L > O4f) {
                o$P.M8Y(25);
                I4L -= o$P.c6Y(x$C, O4f, I4L);
            }
            o$P.C$o(22);
            M$0 = o$P.d58(I4L, x$C);
            if (x$C >= O4f) continue;
            if (M$0 <= f$q) continue;
            G4U = Math.floor(r_l) + (!j6O.highlight && 0.5);
            U9e = Math.floor(G4U - N8H) + c_V;
            U$K = Math.round(G4U + N8H) - c_V;
            i7j = U9e == U$K ? N8H : +'0';
            if (I4L < 2) {
                I4L = 2;
            }
            if (V9s) {
                if (X8t || e56 != v0Q) {
                    A9R.rect(U9e, x$C, Math.max(1, U$K - U9e), I4L);
                }
            } else if (X05) {
                if (e56 == v0Q) {
                    if (f4W <= O4f && f4W >= f$q) {
                        A$9 = Math.floor(f4W) + (!j6O.highlight && 0.5);
                        o$P.M8Y(0);
                        A9R.moveTo(o$P.c6Y(U9e, i7j), A$9);
                        o$P.C$o(22);
                        A9R.lineTo(o$P.c6Y(i7j, U$K), A$9);
                    }
                }
                if (v9g != e0J) {
                    A9R.moveTo(G4U, x$C);
                    A9R.lineTo(G4U, M$0);
                }
            } else if (B1Y) {
                if (x$C < O4f && M$0 > f$q && j1n.High != j1n.Low) {
                    o$P.C$o(0);
                    A9R.moveTo(G4U, o$P.d58(x$C, V_q));
                    o$P.M8Y(22);
                    A9R.lineTo(G4U, o$P.d58(V_q, M$0));
                }
                if (v$t > f$q && v$t < O4f && !F1P) {
                    o$O = Math.floor(v$t) + (!j6O.highlight && 0.5);
                    A9R.moveTo(G4U, o$O);
                    o$P.M8Y(30);
                    A9R.lineTo(o$P.d58(N8H, G4U, i7j), o$O);
                }
                if (f4W > f$q && f4W < O4f) {
                    J2v = Math.floor(f4W) + (!j6O.highlight && 0.5);
                    A9R.moveTo(G4U, J2v);
                    o$P.M8Y(53);
                    A9R.lineTo(o$P.c6Y(G4U, N8H, i7j), J2v);
                }
            }
        }
        K0_ = A9R.globalAlpha;
        if (V9s) {
            if (K0_ < 1) {
                A9R.save();
                A9R.globalAlpha = 1;
                A9R.fillStyle = this.containerColor;
                A9R.fill();
                A9R.restore();
            }
            A9R.fill();
            if (T$m) {
                A9R.lineWidth = j6O.highlight ? 2 : 1;
                A9R.strokeStyle = o3o;
                A9R.stroke();
            }
        } else if (X05 || B1Y) {
            this.canvasColor(R$v);
            A9R.globalAlpha = K0_;
            if (o3o) {
                A9R.strokeStyle = o3o;
            }
            if (j6O.highlight) {
                A9R.lineWidth *= 2;
            }
            A9R.stroke();
            A9R.closePath();
            A9R.lineWidth = 1;
        }
        A9R.globalAlpha = X_j;
        return { cache: Q6K };
    };
    l7f.ChartEngine.prototype.plotDataSegmentAsLine = function (F38, a$d, f3h, T9s) {
        var J2n = x2dci;
        var L4T,
            O4p,
            L1c,
            F8X,
            P$G,
            L6M,
            e9T,
            t7C,
            t4M,
            q$5,
            I2X,
            u3g,
            d$n,
            d_R,
            Z4v,
            A3C,
            B_V,
            K2v,
            b3B,
            s24,
            P0P,
            r5X,
            n23,
            x9w,
            j9G,
            h3i,
            A6W,
            p54,
            D$s,
            X6c,
            w5v,
            x3c,
            Z3m,
            x2J,
            R2i,
            c0s,
            T1f,
            c64,
            A40,
            h6w,
            g6F,
            v3a,
            f$Y,
            L1k,
            M8e,
            a$g,
            Y2V,
            u5O,
            X89,
            R78,
            u1n,
            e$C,
            q7q,
            U84,
            n3B,
            E1J,
            g7G,
            t4p,
            I4W,
            k$l,
            V6q,
            I5S,
            f0U,
            o2H,
            s8L,
            n_f,
            L2M,
            G1d,
            l0w,
            d1g,
            l3k,
            B3s,
            n7b,
            x3l,
            o11,
            S0b,
            r66,
            j8I,
            b6P,
            I0N,
            K97,
            b2W,
            U1b,
            O45,
            J_G,
            S8P,
            K5l,
            q1j,
            K0l,
            N54,
            D15,
            l06,
            h4a,
            A$A,
            t4b,
            i2V,
            b6G,
            s0o,
            z0C;
        L4T = !'1';
        O4p = !{};
        L1c = !'1';
        F8X = !'1';
        P$G = !0;
        L6M = null;
        e9T = null;
        t7C = null;
        t4M = 0;
        q$5 = !{};
        I2X = !!0;
        u3g = ![];
        d$n = !'1';
        d_R = null;
        Z4v = null;
        A3C = null;
        B_V = null;
        function H2u(u0h, A4G, z$2) {
            var X4z, C$p, T_c, p1J;
            X4z = 'C';
            X4z += 'ollat';
            X4z += 'edHigh';
            A6W.setLineDash([]);
            C$p = Y1S('CollatedOpen');
            T_c = Y1S(X4z);
            p1J = Y1S('CollatedLow');
            J2n.J8h();
            A6W.lineTo(u0h, C$p);
            A6W.moveTo(u0h, T_c);
            A6W.lineTo(u0h, p1J);
            A6W.moveTo(u0h, A4G);
            b3B.push(u0h, C$p);
            function Y1S(k42) {
                var u6S;
                u6S = t7C.semiLog
                    ? t7C.height * (+'1' - (Math.log(Math.max(z$2[k42], 0)) / Math.LN10 - t7C.logLow) / t7C.logShadow)
                    : (t7C.high - z$2[k42]) * t7C.multiplier;
                if (t7C.flipped) {
                    u6S = t7C.bottom - u6S;
                } else {
                    u6S += t7C.top;
                }
                return u6S;
            }
        }
        K2v = {};
        b3B = [];
        s24 = [];
        P0P = [];
        r5X = [];
        n23 = this;
        x9w = this.layout;
        j9G = a$d.chart;
        h3i = j9G.dataSegment;
        A6W = j9G.context;
        p54 = new Array(h3i.length);
        D$s = A6W.strokeStyle;
        X6c = A6W.globalAlpha;
        if (j9G.dataSet.length) {
            this.startClip(a$d.name);
            if (f3h) {
                L4T = f3h.skipProjections;
                O4p = f3h.skipTransform;
                L1c = f3h.noSlopes;
                t4M = f3h.tension;
                F8X = f3h.step;
                e9T = f3h.pattern;
                P$G = f3h.extendOffChart;
                t7C = f3h.yAxis;
                L6M = f3h.gapDisplayStyle;
                q$5 = f3h.noDraw;
                I2X = f3h.reverse;
                u3g = f3h.highlight;
                if (f3h.width) {
                    A6W.lineWidth = f3h.width;
                }
                d$n = f3h.shiftRight;
                d_R = f3h.subField;
                Z4v = f3h.threshold;
                A3C = f3h.lineTravelSpacing;
                B_V = f3h.extendToEndOfDataSet;
            }
            if (!L6M && L6M !== ![] && f3h) {
                L6M = f3h.gaps;
            }
            if (!L6M) {
                L6M = { color: 'transparent', fillMountain: !!1 };
            }
            if (e9T instanceof Array) {
                A6W.setLineDash(e9T);
            }
            if (u3g) {
                A6W.lineWidth *= +'2';
            }
            if (!u3g && this.highlightedDraggable) {
                A6W.globalAlpha *= 0.3;
            }
            if (P$G !== ![]) {
                P$G = !'';
            }
            w5v = d_R || j9G.defaultPlotField || 'Close';
            if (!t7C) {
                t7C = a$d.yAxis;
            }
            x3c = j9G.transformFunc && t7C == j9G.panel.yAxis;
            J2n.M8Y(84);
            var D$J = J2n.d58(343, 61, 20, 7);
            Z3m = A6W.lineWidth * ('2' << D$J);
            x2J = I2X ? j9G.top - Z3m : j9G.bottom + Z3m;
            if (Z4v || Z4v === +'0') {
                x2J = this.pixelFromPrice(Z4v, a$d, t7C);
            }
            R2i = !t4M && q$5 && L6M && L6M.fillMountain;
            c0s = F38;
            T1f = F38;
            for (var i_P = 0; i_P < h3i.length; i_P++) {
                c64 = 'o';
                c64 += 'bj';
                c64 += 'ect';
                A40 = h3i[i_P];
                if (A40 && typeof A40 == c64) {
                    if (A40[F38] || A40[F38] === 0) {
                        h6w = 'o';
                        h6w += 'bj';
                        h6w += 'ec';
                        h6w += 't';
                        if (typeof A40[F38] == h6w) {
                            T1f = l7f.createObjectChainNames(F38, [w5v])[J2n.d58('0', 0, J2n.M8Y(0))];
                        }
                        break;
                    }
                }
            }
            g6F = { left: null, right: null };
            J2n.M8Y(111);
            var y3t = J2n.d58(18, 0, 36, 17);
            v3a = j9G.dataSet.length - j9G.scroll - y3t;
            if (P$G) {
                g6F.left = this.getPreviousBar(j9G, T1f, 0);
                g6F.right = this.getNextBar(j9G, T1f, h3i.length - ('1' | 0));
            }
            f$Y = !!{};
            L1k = !!'';
            A6W.beginPath();
            Y2V = g6F.left;
            u5O = null;
            if (Y2V) {
                u5O = Y2V.transform;
            }
            if (Y2V) {
                a$g = x3c ? (u5O ? u5O[F38] : null) : Y2V[F38];
                if (a$g || a$g === ('0' | 0)) {
                    if (a$g[w5v] || a$g[w5v] === 0) {
                        a$g = a$g[w5v];
                    }
                    X89 = this.pixelFromTick(Y2V.tick, j9G);
                    R78 = this.pixelFromTransformedValue(a$g, a$d, t7C);
                    A6W.moveTo(X89, R78);
                    b3B.push(X89, R78);
                    if (h3i[0].tick - Y2V.tick > 1) {
                        P0P.push({ start: b3B.slice(-2), threshold: x2J, tick: Y2V });
                        L1k = !!1;
                    }
                    f$Y = ![];
                }
            }
            u1n = a$d.left + this.micropixels - +'1';
            if (d$n) {
                u1n += d$n;
            }
            if (F8X && f3h && f3h.alignStepToSide) {
                J2n.C$o(3);
                var Q8M = J2n.c6Y(35, 5, 14, 18);
                u1n -= this.layout.candleWidth / Q8M;
            }
            U84 = this.currentQuote();
            n3B = 0;
            E1J = 0;
            g7G = !{};
            t4p = { reset: !!'1' };
            for (var l4N = 0; l4N < h3i.length; l4N++) {
                I4W = 'o';
                I4W += 'bject';
                M8e = x9w.candleWidth;
                k$l = h3i[l4N];
                V6q = h3i[l4N];
                if (!k$l) {
                    k$l = {};
                }
                I5S = k$l.lineTravel;
                if (L4T && k$l.projection) {
                    g6F.right = null;
                    break;
                }
                if (k$l.candleWidth) {
                    M8e = k$l.candleWidth;
                }
                if (A3C) {
                    M8e = 0;
                }
                if (x3c && k$l.transform) {
                    k$l = k$l.transform;
                }
                f0U = k$l[F38];
                if (f0U && typeof f0U == I4W) {
                    f0U = f0U[w5v];
                    J2n.M8Y(53);
                    c0s = J2n.c6Y(F38, (7479, '4840' >> 64) <= 269.02 ? 'Z' : '.', w5v);
                }
                if (j9G.lineApproximation && x9w.candleWidth < 1 && !A3C) {
                    if (t4p.reset) {
                        t4p = {
                            CollatedHigh: -Number.MAX_VALUE,
                            CollatedLow: Number.MAX_VALUE,
                            CollatedOpen: null,
                            CollatedClose: null,
                        };
                        g7G = !1;
                    }
                    o2H = f0U;
                    if (o2H || o2H === 0) {
                        t4p.CollatedHigh = Math.max(t4p.CollatedHigh, o2H);
                        t4p.CollatedLow = Math.min(t4p.CollatedLow, o2H);
                        t4p.CollatedClose = o2H;
                        if (t4p.CollatedOpen === null) {
                            t4p.CollatedOpen = o2H;
                        } else {
                            g7G = !!'1';
                        }
                    }
                    n3B += M8e;
                    if (n3B - E1J >= 1 || l4N == h3i.length - 1) {
                        E1J = Math.floor(n3B);
                        t4p.reset = !!{};
                        t4p[F38] = t4p.CollatedClose;
                        k$l = t4p;
                        k$l.cache = {};
                    } else {
                        u1n += M8e;
                        continue;
                    }
                }
                if (!L1c) {
                    J2n.C$o(40);
                    u1n += J2n.c6Y(2, M8e);
                }
                if (!f0U && f0U !== 0) {
                    s8L = b3B.slice(-2);
                    if (R2i && !L1k && b3B.length) {
                        b3B.push(s8L['0' ^ 0], x2J);
                    }
                    if (!L1k) {
                        P0P.push({ start: s8L, threshold: x2J, tick: q7q });
                    }
                    L1k = !'';
                    u1n += L1c ? M8e : M8e / 2;
                    if ((F8X || L1c) && b3B.length) {
                        p54[l4N] = b3B.slice(-1)[0];
                    }
                    if (I5S) {
                        u1n += I5S;
                    }
                    continue;
                }
                e$C = k$l;
                n_f = k$l.cache;
                J2n.C$o(22);
                L2M = J2n.c6Y(l4N, v3a);
                if (L2M < a$d.cacheLeft || L2M > a$d.cacheRight || !n_f[F38]) {
                    n_f[c0s] = t7C.semiLog
                        ? t7C.height *
                          (('1' | 0) - (Math.log(Math.max(f0U, 0)) / Math.LN10 - t7C.logLow) / t7C.logShadow)
                        : (t7C.high - f0U) * t7C.multiplier;
                    if (t7C.flipped) {
                        n_f[c0s] = t7C.bottom - n_f[c0s];
                    } else {
                        n_f[c0s] += t7C.top;
                    }
                }
                G1d = p54[l4N] = n_f[c0s];
                if (V6q.tick == U84.tick && j9G.lastTickOffset) {
                    u1n += j9G.lastTickOffset;
                }
                l0w = b3B.slice(-2);
                if (!f$Y && T9s) {
                    if (V6q[F38] && V6q[F38][w5v]) {
                        V6q = V6q[F38];
                    }
                    d1g = T9s(this, V6q, L1k);
                    if (!d1g) {
                        u1n += L1c ? M8e : M8e / 2;
                        continue;
                    }
                    l0w = r4a(d1g);
                }
                if (f$Y) {
                    A6W.moveTo(u1n, G1d);
                    if (t4M) {
                        s24.push({
                            coord: [u1n, G1d],
                            color: A6W.strokeStyle,
                            pattern: e9T ? e9T : [],
                            width: A6W.lineWidth,
                        });
                    }
                } else {
                    if (F8X || L1c) {
                        l3k = b3B.slice(-1)[0];
                        if (g7G) {
                            H2u(u1n, l3k, k$l);
                        } else {
                            A6W.lineTo(u1n, l3k);
                        }
                        b3B.push(u1n, l3k);
                    }
                    if (g7G && !L1c) {
                        H2u(u1n, G1d, k$l);
                    } else {
                        A6W[L1c ? 'moveTo' : 'lineTo'](u1n, G1d);
                    }
                }
                if (L1k) {
                    P0P.push({ end: [u1n, G1d], threshold: x2J });
                    q7q = V6q;
                    if (R2i && !F8X && !L1c) {
                        b3B.push(u1n, x2J);
                    }
                }
                b3B.push(u1n, G1d);
                f$Y = !!0;
                L1k = !'1';
                u1n += L1c ? M8e : M8e / 2;
                if (I5S) {
                    u1n += I5S;
                }
            }
            B3s = g6F.right;
            n7b = null;
            if (B3s) {
                n7b = B3s.transform;
            }
            if (!f$Y && B3s) {
                a$g = x3c ? (n7b ? n7b[F38] : null) : B3s[F38];
                if (a$g && (a$g[w5v] || a$g[w5v] === 0)) {
                    a$g = a$g[w5v];
                }
                x3l = this.pixelFromTick(B3s.tick, j9G);
                o11 = this.pixelFromTransformedValue(a$g, a$d, t7C);
                if (B3s.tick - h3i[h3i.length - 1].tick > 1) {
                    if (!L1k) {
                        S0b = b3B.slice(-2);
                        if (R2i && b3B.length) {
                            b3B.push(S0b[0], x2J);
                        }
                        P0P.push({ start: S0b, threshold: x2J, tick: h3i[h3i.length - 1] });
                    }
                    L1k = !!{};
                }
                if (!f$Y && T9s) {
                    r66 = T9s(this, B3s, L1k);
                    if (r66) {
                        j8I = r4a(r66);
                    }
                }
                b6P = b3B.slice(-2);
                if (!e9T || !e9T.length) {
                    if (F8X || L1c) {
                        A6W.lineTo(x3l, b6P[1]);
                        b3B.push(x3l, b6P[1]);
                    }
                    A6W[L1c ? 'moveTo' : 'lineTo'](x3l, o11);
                }
                if (L1k) {
                    P0P.push({ end: [x3l, o11], threshold: x2J });
                    if (R2i && !F8X && !L1c) {
                        b3B.push(x3l, x2J);
                    }
                }
                b3B.push(x3l, o11);
            }
            for (var q7I in K2v) {
                r5X.push(q7I);
            }
            if (f3h && f3h.extendToEndOfLastBar) {
                I0N = b3B.slice(-2);
                A6W.lineTo(I0N[0] + M8e, I0N[1]);
            } else if (F8X || L1c || this.extendLastTick || B_V) {
                K97 = b3B.slice(-2);
                if (b3B.length) {
                    J2n.C$o(19);
                    b2W = K97[J2n.c6Y(32, '0')];
                    U1b = K97[1];
                    if (B_V || (F8X && B_V !== ![])) {
                        b2W = this.pixelFromTick(j9G.dataSet.length - +'1', j9G);
                        if (L1c || this.extendLastTick) {
                            J2n.C$o(40);
                            b2W += J2n.c6Y(2, M8e);
                        }
                    } else if (L1c) {
                        b2W += M8e;
                    } else if (this.extendLastTick) {
                        J2n.C$o(40);
                        b2W += J2n.c6Y(2, M8e);
                    }
                    if (b2W > K97[0]) {
                        O45 = null;
                        if (T9s) {
                            O45 = T9s(this, {}, !!1);
                        }
                        if (O45) {
                            r4a(O45);
                        }
                        A6W.lineTo(b2W, U1b);
                        if (!L1k || !R2i) {
                            b3B.push(b2W, U1b);
                        }
                    }
                }
            }
            if (!q$5) {
                if (t4M && b3B.length) {
                    A6W.beginPath();
                    if (f3h && f3h.pattern) {
                        A6W.setLineDash(f3h.pattern);
                    }
                    Y68.plotSpline(b3B, t4M, A6W, s24);
                }
                A6W.stroke();
            }
            this.endClip();
            if (!q$5 && f3h && f3h.label && e$C) {
                J_G = 'noo';
                J_G += 'p';
                K5l = e$C[F38];
                if (K5l && typeof K5l == 'object') {
                    K5l = K5l[w5v];
                }
                if (t7C.priceFormatter) {
                    S8P = t7C.priceFormatter(this, a$d, K5l, f3h.labelDecimalPlaces);
                } else {
                    S8P = this.formatYAxisPrice(K5l, a$d, f3h.labelDecimalPlaces);
                }
                q1j = this.yaxisLabelStyle;
                if (t7C.yaxisLabelStyle) {
                    q1j = t7C.yaxisLabelStyle;
                }
                K0l = q1j == J_G ? A6W.strokeStyle : null;
                N54 = q1j == 'noop' ? '#FFFFFF' : A6W.strokeStyle;
                this.yAxisLabels.push({ src: 'plot', args: [a$d, S8P, e$C.cache[c0s], N54, K0l, A6W, t7C] });
            }
            D15 = typeof L6M == 'object' ? L6M.color : L6M;
            if (l7f.isTransparent(D15)) {
                for (var I3$ = 0; I3$ < P0P.length; I3$ += 2) {
                    l06 = P0P[I3$].start;
                    if (I3$) {
                        h4a = P0P[I3$ - 1].end;
                    }
                    if (h4a && l06['0' << 0] == h4a[0] && l06[1] == h4a[1]) {
                        A6W.beginPath();
                        A$A = A6W.lineWidth;
                        if (T9s) {
                            t4b = 'o';
                            t4b += 'bj';
                            t4b += 'ec';
                            t4b += 't';
                            i2V = T9s(this, P0P[I3$].tick || {}, !!0);
                            if (typeof i2V == t4b) {
                                J2n.C$o(89);
                                var w1w = J2n.c6Y(1, 15, 4, 21);
                                J2n.C$o(159);
                                var y10 = J2n.d58(18, 1, 17, 6, 13);
                                A$A = i2V.width * (u3g ? w1w : y10);
                                i2V = i2V.color;
                            }
                            A6W.strokeStyle = A6W.fillStyle = i2V;
                        }
                        A6W.lineWidth = A$A;
                        A6W.arc(l06[0], l06[1], 1, 0, 2 * Math.PI);
                        A6W.stroke();
                        A6W.fill();
                    }
                }
            }
        }
        b6G = -43739053;
        J2n.C$o(38);
        s0o = -J2n.d58('1106869118', 1);
        z0C = +'2';
        for (var n0N = 1; J2n.O$R(n0N.toString(), n0N.toString().length, 51349) !== b6G; n0N++) {
            A6W.globalAlpha = X6c;
            z0C += 2;
        }
        if (J2n.O$R(z0C.toString(), z0C.toString().length, '20664' << 32) !== s0o) {
            A6W.globalAlpha = X6c;
        }
        function r4a(V$l) {
            var R8l, I9Y, c1r, Z4I, C$b, O7E, Z$2, f1U, S0m;
            R8l = A6W.getLineDash();
            I9Y = 1;
            c1r = V$l;
            if (typeof c1r == 'object') {
                J2n.C$o(124);
                var Z4S = J2n.c6Y(0, 6, 13, 17);
                J2n.C$o(22);
                var M7n = J2n.c6Y(1, 0);
                I9Y = c1r.width * (u3g ? Z4S : M7n);
                e9T = l7f.borderPatternToArray(I9Y, c1r.pattern);
                c1r = c1r.color;
            }
            K2v[c1r] = 1;
            if (q$5) {
                return;
            }
            Z4I = b3B.slice(-2);
            C$b = e9T instanceof Array && e9T.join();
            O7E = R8l instanceof Array && R8l.join();
            J2n.M8Y(160);
            Z$2 = J2n.c6Y(O7E, C$b);
            f1U = !l7f.colorsEqual(D$s, c1r);
            S0m = A6W.lineWidth != I9Y;
            if (f1U || Z$2 || S0m) {
                if (t4M) {
                    s24.push({ coord: Z4I, color: c1r, pattern: e9T ? e9T : [], width: I9Y });
                } else {
                    A6W.stroke();
                    A6W.lineWidth = I9Y;
                    if (Z$2) {
                        A6W.setLineDash(C$b ? e9T : []);
                    }
                    A6W.beginPath();
                    A6W.moveTo(Z4I[0], Z4I[1]);
                }
            }
            D$s = c1r;
            if (!t4M) {
                if (!c1r || c1r == 'auto') {
                    A6W.strokeStyle = n23.defaultColor;
                } else {
                    A6W.strokeStyle = c1r;
                }
            }
            J2n.r2m();
            return Z4I;
        }
        return { colors: r5X, points: b3B, cache: p54, gapAreas: P0P };
    };
    l7f.ChartEngine.prototype.drawMountainChart = function (s4M, O$t, m1I) {
        var Q6W = x2dci;
        var n16,
            z_l,
            M8k,
            k0Q,
            K8n,
            j5b,
            A3f,
            S9A,
            H7m,
            o35,
            w0v,
            x_f,
            c8r,
            T$s,
            P2t,
            V45,
            p$R,
            J54,
            v$L,
            U0L,
            i8u,
            T2f,
            F35,
            v4P,
            h5N,
            v3L,
            U4F,
            g3c,
            o1M,
            H4W,
            o$T,
            n5D,
            B4X,
            C0$,
            x6r,
            I84,
            s8c,
            F4Z,
            t5Z;
        n16 = 't';
        n16 += 'ransparent';
        z_l = 'C';
        z_l += 'l';
        z_l += 'os';
        z_l += 'e';
        M8k = 'obje';
        M8k += 'ct';
        k0Q = this.chart.context;
        K8n = O$t;
        j5b = !{};
        A3f = !!0;
        S9A = null;
        H7m = null;
        o35 = null;
        w0v = null;
        x_f = 0;
        c8r = null;
        T$s = !'1';
        P2t = null;
        V45 = null;
        p$R = !1;
        J54 = null;
        v$L = null;
        U0L = 1;
        i8u = !{};
        T2f = !{};
        F35 = !'1';
        v4P = s4M.chart;
        h5N = v4P.dataSegment;
        v3L = v4P.lineStyle || {};
        if (!O$t || typeof O$t != M8k) {
            O$t = { style: O$t };
        }
        K8n = O$t.style || 'stx_mountain_chart';
        S9A = O$t.field || v4P.defaultPlotField || z_l;
        H7m = O$t.subField || v4P.defaultPlotField || 'Close';
        c8r = O$t.gapDisplayStyle;
        if (!c8r && c8r !== !{}) {
            c8r = O$t.gaps;
        }
        if (!c8r && c8r !== ![]) {
            c8r = v4P.gaplines;
        }
        if (!c8r) {
            c8r = n16;
        }
        o35 = O$t.yAxis || s4M.yAxis;
        j5b = O$t.reverse || !1;
        w0v = O$t.tension;
        P2t = O$t.fillStyle;
        x_f = O$t.width || v3L.width;
        T$s = O$t.step;
        V45 = O$t.pattern || v3L.pattern;
        p$R = O$t.highlight;
        v$L = O$t.color || v3L.color;
        J54 = O$t.baseColor || v3L.baseColor;
        A3f = O$t.colored;
        U0L = O$t.opacity;
        i8u = O$t.extendToEndOfDataSet;
        T2f = O$t.isComparison;
        F35 = O$t.returnObject;
        U4F = this.canvasStyle(K8n);
        g3c = o35.top;
        if (isNaN(g3c) || isNaN(g3c / g3c)) {
            Q6W.C$o(74);
            g3c = Q6W.c6Y('0', 0);
        }
        o1M = v$L || (K8n && U4F.backgroundColor ? U4F.backgroundColor : this.defaultColor);
        H4W = J54 || (K8n && U4F.color ? U4F.color : this.containerColor);
        if (P2t) {
            k0Q.fillStyle = P2t;
        } else if (J54 || U4F.color) {
            o$T = k0Q.createLinearGradient(0, g3c, +'0', o35.bottom);
            o$T.addColorStop(o35.flipped ? 1 : 0, o1M);
            o$T.addColorStop(o35.flipped ? 0 : 1, H4W);
            k0Q.fillStyle = o$T;
        } else {
            k0Q.fillStyle = o1M;
        }
        this.startClip(s4M.name);
        n5D = k0Q.lineWidth;
        if (!O$t.symbol) {
            H7m = null;
        }
        O$t = {
            skipProjections: !![],
            reverse: j5b,
            yAxis: o35,
            gapDisplayStyle: c8r,
            step: T$s,
            highlight: p$R,
            extendToEndOfDataSet: i8u,
            isComparison: T2f,
        };
        if (v4P.tension) {
            O$t.tension = v4P.tension;
        }
        if (w0v || w0v === 0) {
            O$t.tension = w0v;
        }
        B4X = parseInt(U4F.paddingTop, 10);
        C0$ = v$L || U4F.borderTopColor;
        x6r = null;
        if (A3f || (C0$ && !l7f.isTransparent(C0$))) {
            if (B4X) {
                I84 = this.scratchContext;
                if (!I84) {
                    s8c = k0Q.canvas.cloneNode(!!{});
                    I84 = this.scratchContext = s8c.getContext('2d');
                }
                I84.canvas.height = k0Q.canvas.height;
                I84.canvas.width = k0Q.canvas.width;
                I84.drawImage(k0Q.canvas, 0, 0);
                l7f.clearCanvas(k0Q.canvas, this);
            }
        }
        l7f.extend(O$t, {
            panelName: s4M.name,
            direction: O$t.reverse ? -1 : 1,
            band: S9A,
            subField: H7m,
            opacity: U0L,
        });
        if (!O$t.highlight && this.highlightedDraggable) {
            O$t.opacity *= 0.3;
        }
        l7f.preparePeakValleyFill(this, O$t);
        if (A3f || (C0$ && !l7f.isTransparent(C0$))) {
            if (B4X) {
                F4Z = 'destination-ov';
                F4Z += 'er';
                k0Q.save();
                Q6W.C$o(161);
                k0Q.lineWidth += Q6W.d58(B4X, '2', 1);
                k0Q.globalCompositeOperation = 'destination-out';
                k0Q.globalAlpha = 1;
                this.plotDataSegmentAsLine(S9A, s4M, O$t);
                k0Q.globalCompositeOperation = F4Z;
                k0Q.scale(1 / this.adjustedDisplayPixelRatio, ('1' << 96) / this.adjustedDisplayPixelRatio);
                k0Q.drawImage(this.scratchContext.canvas, +'0', 0);
                k0Q.restore();
            }
        }
        k0Q.strokeStyle = C0$;
        if (x_f) {
            k0Q.lineWidth = x_f;
        } else if (U4F.width && parseInt(U4F.width, 10) <= 25) {
            k0Q.lineWidth = Math.max(+'1', l7f.stripPX(U4F.width));
        } else {
            k0Q.lineWidth = 1;
        }
        if (!V45) {
            V45 = U4F.borderTopStyle;
        }
        O$t.pattern = l7f.borderPatternToArray(k0Q.lineWidth, V45);
        t5Z = m1I;
        if (c8r) {
            t5Z = this.getGapColorFunction(
                S9A,
                H7m,
                { color: C0$, pattern: O$t.pattern, width: k0Q.lineWidth },
                c8r,
                m1I
            );
        }
        x6r = this.plotDataSegmentAsLine(S9A, s4M, O$t, t5Z);
        k0Q.lineWidth = n5D;
        this.endClip();
        if (!x6r.colors.length) {
            x6r.colors.push(C0$);
        }
        return F35 ? x6r : x6r.colors;
    };
    l7f.ChartEngine.prototype.drawBaselineChart = function (n3W, M0e) {
        var o$d,
            N6H,
            N_4,
            n4L,
            f1p,
            c8w,
            P7X,
            t6n,
            y8D,
            w0$,
            O3s,
            s5D,
            U5R,
            K8m,
            F6e,
            Q6T,
            V6n,
            q5y,
            i4F,
            T79,
            O6x,
            A_j,
            I9E,
            n3Q,
            j5s,
            x8t,
            r3M,
            j0y,
            A7$,
            X4D,
            s2K,
            W$t;
        var { chart: g5B } = n3W;
        var { field: Q3o, id: q_9, yAxis: l7m } = M0e;
        var { gaplines: g07, defaultPlotField: D_i, lineStyle: q8_ } = g5B;
        var { display: b_j } = this.baselineHelper.get(this.getRendererFromSeries(q_9));
        o$d = this.getYAxisBaseline(l7m).actualLevel;
        N6H = [];
        if (!Q3o) {
            Q3o = D_i;
        }
        if (!q8_) {
            q8_ = {};
        }
        N_4 = M0e.gapDisplayStyle;
        x2dci.J8h();
        if (!N_4 && N_4 !== !{}) {
            N_4 = M0e.gaps;
        }
        if (o$d !== null && !isNaN(o$d)) {
            n4L = 's';
            n4L += 'tx_baselin';
            n4L += 'e_down';
            f1p = 'stx_b';
            f1p += 'aseline_down';
            c8w = 'm';
            c8w += 'ou';
            c8w += 'nta';
            c8w += 'in';
            P7X = M0e.type == c8w;
            if (P7X) {
                N6H = this.drawMountainChart(n3W, {
                    style: M0e.style,
                    field: M0e.field,
                    yAxis: l7m,
                    gapDisplayStyle: N_4,
                    colored: !![],
                    tension: 0,
                });
            }
            t6n = this.pixelFromPrice(o$d, n3W, l7m);
            if (isNaN(t6n)) {
                return;
            }
            this.startClip(n3W.name);
            y8D = M0e.pattern || q8_.pattern;
            w0$ = M0e.fill_color_up || this.getCanvasColor('stx_baseline_up');
            O3s = M0e.fill_color_down || this.getCanvasColor('stx_baseline_down');
            s5D = M0e.border_color_up || this.getCanvasColor('stx_baseline_up');
            U5R = M0e.border_color_down || this.getCanvasColor(f1p);
            K8m = M0e.width || q8_.width || this.canvasStyle('stx_baseline_up').width;
            F6e = M0e.width || q8_.width || this.canvasStyle(n4L).width;
            Q6T = M0e.widthBaseline || q8_.width || l7f.stripPX(this.canvasStyle('stx_baseline').width);
            V6n = M0e.baselineOpacity || this.canvasStyle('stx_baseline').opacity;
            q5y = { fill: w0$, edge: s5D, width: K8m };
            i4F = { fill: O3s, edge: U5R, width: F6e };
            T79 = M0e.yAxis.flipped;
            O6x = { over: T79 ? i4F : q5y, under: T79 ? q5y : i4F };
            A_j = !'1';
            if (!N_4 && N_4 !== !{}) {
                N_4 = g07;
            }
            I9E = 1;
            if (!M0e.highlight && this.highlightedDraggable) {
                I9E *= 0.3;
            }
            for (var j7T in O6x) {
                n3Q = 'tra';
                n3Q += 'n';
                n3Q += 'spa';
                n3Q += 'rent';
                j5s = parseInt(Math.max(1, l7f.stripPX(O6x[j7T].width)), 10);
                if (M0e.highlight) {
                    j5s *= 2;
                }
                y8D = l7f.borderPatternToArray(j5s, y8D);
                x8t = {
                    panelName: n3W.name,
                    band: Q3o,
                    threshold: o$d,
                    color: P7X ? n3Q : O6x[j7T].fill,
                    direction: j7T == 'over' ? 1 : -('1' * 1),
                    edgeHighlight: O6x[j7T].edge,
                    edgeParameters: { pattern: y8D, lineWidth: j5s + 0.1, opacity: I9E },
                    gapDisplayStyle: N_4,
                    yAxis: M0e.yAxis,
                };
                if (l7m) {
                    x8t.threshold = this.priceFromPixel(this.pixelFromPrice(x8t.threshold, n3W, l7m), n3W, l7m);
                }
                N6H.push(O6x[j7T].edge);
                r3M = x8t.color;
                if (!P7X && r3M && r3M != 'transparent') {
                    j0y = n3W.top;
                    A7$ = n3W.bottom;
                    X4D = g5B.context.createLinearGradient(0, j7T == 'over' ? j0y : A7$, 0, t6n);
                    X4D.addColorStop(0, l7f.hexToRgba(l7f.colorToHex(r3M), 60));
                    X4D.addColorStop(+'1', l7f.hexToRgba(l7f.colorToHex(r3M), 10));
                    x8t.color = X4D;
                    x8t.opacity = I9E;
                }
                l7f.preparePeakValleyFill(this, g5B.dataSegment, x8t);
                if (g07) {
                    if (!g07.fillMountain) {
                        this.drawLineChart(n3W, null, null, {
                            color: 'transparent',
                            gapDisplayStyle: {
                                color: this.containerColor,
                                pattern: 'solid',
                                width: x8t.edgeParameters.lineWidth,
                            },
                        });
                    }
                    if (!g07.color) {
                        A_j = !![];
                        g07.color = this.defaultColor;
                    }
                }
                this.drawLineChart(n3W, null, null, { color: 'transparent', width: x8t.edgeParameters.lineWidth });
                if (A_j) {
                    g07.color = null;
                }
            }
            if (b_j) {
                s2K = '2.';
                s2K += '1';
                W$t = 'dott';
                W$t += 'e';
                W$t += 'd';
                this.plotLine(0, +'1', t6n, t6n, this.containerColor, 'line', g5B.context, n3W, { lineWidth: '1.1' });
                this.plotLine(0, 1, t6n, t6n, this.getCanvasColor('stx_baseline'), 'line', g5B.context, n3W, {
                    pattern: W$t,
                    lineWidth: Q6T || s2K,
                    opacity: V6n || 0.5 * I9E,
                });
            }
            this.endClip();
        }
        return { colors: N6H };
    };
    l7f.ChartEngine.prototype.plotLine = function (I7X) {
        var e5C = x2dci;
        var G$G,
            w5P,
            a41,
            n12,
            B5U,
            x3G,
            l5u,
            W96,
            u6K,
            W4v,
            B1M,
            T6H,
            O$m,
            l2L,
            c_y,
            w8E,
            T6c,
            e$2,
            R8z,
            G7A,
            L73,
            d8b,
            z0a,
            D8f,
            v1q,
            k3K,
            j1$,
            I9q,
            L$V,
            h_B,
            f$V,
            U87,
            A4m,
            E4C,
            P6z,
            Q9D,
            S0I,
            t6j;
        G$G = 'undefine';
        G$G += 'd';
        w5P = 'numbe';
        w5P += 'r';
        if (typeof arguments[0] == w5P) {
            I7X = {
                x0: arguments[0],
                x1: arguments[1],
                y0: arguments[2],
                y1: arguments[3],
                color: arguments[4],
                type: arguments[5],
                context: arguments[6],
                confineToPanel: arguments[+'7'],
            };
            for (var Q6i in arguments[8]) {
                I7X[Q6i] = arguments[8][Q6i];
            }
        }
        if (!I7X) {
            I7X = {};
        }
        if (I7X.pattern == 'none') {
            return;
        }
        a41 = I7X.x0;
        n12 = I7X.x1;
        B5U = I7X.y0;
        x3G = I7X.y1;
        l5u = I7X.color;
        W96 = I7X.type;
        u6K = I7X.context;
        W4v = I7X.confineToPanel;
        B1M = I7X.deferStroke;
        if (W4v === !!{}) {
            W4v = this.chart.panel;
        }
        if (u6K === null || typeof u6K == G$G) {
            u6K = this.chart.context;
        }
        if (isNaN(a41) || isNaN(n12) || isNaN(B5U) || isNaN(x3G)) {
            return;
        }
        T6H = 0;
        O$m = this.chart.canvasHeight;
        l2L = 0;
        c_y = this.right;
        if (W4v) {
            O$m = W4v.yAxis.bottom;
            w8E = 1832765480;
            T6c = -+'1049693747';
            e$2 = 2;
            for (var B8t = 1; e5C.O$R(B8t.toString(), B8t.toString().length, 50660) !== w8E; B8t++) {
                T6H = W4v.yAxis.top;
                e$2 += 2;
            }
            if (e5C.q2D(e$2.toString(), e$2.toString().length, +'23522') !== T6c) {
                T6H = W4v.yAxis.top;
            }
            l2L = W4v.left;
            c_y = W4v.right;
        }
        if (W96 == 'ray') {
            R8z = 10000000;
            if (n12 < a41) {
                R8z = -10000000;
            }
            L73 = { x0: a41, x1: n12, y0: B5U, y1: x3G };
            G7A = l7f.yIntersection(L73, R8z);
            n12 = R8z;
            x3G = G7A;
        }
        if (W96 == 'line' || W96 == 'horizontal' || W96 == 'vertical') {
            R8z = 10000000;
            d8b = -10000000;
            L73 = { x0: a41, x1: n12, y0: B5U, y1: x3G };
            G7A = l7f.yIntersection(L73, R8z);
            z0a = l7f.yIntersection(L73, d8b);
            a41 = d8b;
            n12 = R8z;
            B5U = z0a;
            x3G = G7A;
        }
        e5C.M8Y(74);
        D8f = e5C.c6Y('0.0', 0);
        e5C.M8Y(46);
        v1q = e5C.d58('1.0', 32);
        e5C.M8Y(0);
        k3K = e5C.d58(n12, a41);
        e5C.M8Y(0);
        j1$ = e5C.c6Y(x3G, B5U);
        for (var y3b = 0; y3b < 4; y3b++) {
            if (y3b === 0) {
                I9q = -k3K;
                e5C.M8Y(0);
                L$V = -e5C.c6Y(l2L, a41);
            }
            if (y3b == 1) {
                I9q = k3K;
                e5C.C$o(0);
                L$V = e5C.c6Y(c_y, a41);
            }
            if (y3b == 2) {
                I9q = -j1$;
                e5C.M8Y(0);
                L$V = -e5C.d58(T6H, B5U);
            }
            if (y3b == '3' - 0) {
                I9q = j1$;
                e5C.M8Y(0);
                L$V = e5C.c6Y(O$m, B5U);
            }
            e5C.C$o(40);
            h_B = e5C.c6Y(I9q, L$V);
            if ((x3G || x3G === 0) && I9q === 0 && L$V < 0) {
                return ![];
            }
            if (I9q < 0) {
                if (h_B > v1q) {
                    return !{};
                } else if (h_B > D8f) {
                    D8f = h_B;
                }
            } else if (I9q > 0) {
                if (h_B < D8f) {
                    return ![];
                } else if (h_B < v1q) {
                    v1q = h_B;
                }
            }
        }
        e5C.C$o(147);
        f$V = e5C.d58(a41, D8f, k3K);
        e5C.C$o(147);
        U87 = e5C.c6Y(B5U, D8f, j1$);
        e5C.M8Y(147);
        A4m = e5C.c6Y(a41, v1q, k3K);
        e5C.C$o(147);
        E4C = e5C.c6Y(B5U, v1q, j1$);
        if (!x3G && x3G !== 0 && !B5U && B5U !== 0) {
            U87 = T6H;
            E4C = O$m;
            f$V = L73.x0;
            A4m = L73.x0;
            if (L73.x0 > c_y) {
                return !1;
            }
            if (L73.x0 < l2L) {
                return !{};
            }
        } else if (!x3G && x3G !== '0' - 0) {
            if (L73.y0 < L73.y1) {
                E4C = O$m;
            } else {
                E4C = T6H;
            }
            f$V = L73.x0;
            A4m = L73.x0;
            if (L73.x0 > c_y) {
                return !1;
            }
            if (L73.x0 < l2L) {
                return !!0;
            }
        }
        if (!B1M) {
            u6K.save();
            u6K.beginPath();
        }
        u6K.lineWidth = 1.1;
        if (l5u && typeof l5u == 'object') {
            u6K.strokeStyle = l5u.color;
            if (l5u.opacity) {
                u6K.globalAlpha = l5u.opacity;
            } else {
                u6K.globalAlpha = 1;
            }
            u6K.lineWidth = l7f.stripPX(l5u.width);
        } else {
            if (!l5u || l5u == 'auto' || l7f.isTransparent(l5u)) {
                P6z = -1042000019;
                Q9D = 1879278794;
                S0I = 2;
                for (var J$f = 1; e5C.q2D(J$f.toString(), J$f.toString().length, 42263) !== P6z; J$f++) {
                    u6K.strokeStyle = this.defaultColor;
                    S0I += 2;
                }
                if (e5C.O$R(S0I.toString(), S0I.toString().length, 95438) !== Q9D) {
                    u6K.strokeStyle = this.defaultColor;
                }
                u6K.strokeStyle = this.defaultColor;
            } else {
                u6K.strokeStyle = l5u;
            }
        }
        if (I7X.opacity) {
            u6K.globalAlpha = I7X.opacity;
        }
        if (I7X.lineWidth) {
            u6K.lineWidth = I7X.lineWidth;
        }
        if (I7X.globalCompositeOperation) {
            u6K.globalCompositeOperation = I7X.globalCompositeOperation;
        }
        t6j = l7f.borderPatternToArray(u6K.lineWidth, I7X.pattern);
        u6K.setLineDash(I7X.pattern ? t6j : []);
        u6K.moveTo(f$V, U87);
        u6K.lineTo(A4m, E4C);
        if (!B1M) {
            u6K.stroke();
            u6K.restore();
        }
    };
    l7f.ChartEngine.prototype.rendererAction = function (E44, E24) {
        var d4M, U4Q, e48, Y0Y, X$H, v0M, H7q, K6h;
        function s2G() {
            var I$J, u_5;
            I$J = 'u';
            I$J += 'n';
            I$J += 'der';
            I$J += 'lay';
            if (!d4M && E24 === I$J) {
                u_5 = Symbol.for('CIQ.watermark');
                if (this[u_5]) {
                    this[u_5].draw(E44);
                    d4M = !![];
                }
            }
        }
        d4M = !!0;
        if (!this.runPrepend('rendererAction', arguments)) {
            U4Q = 'rende';
            U4Q += 'rerAction';
            for (var w9x in E44.seriesRenderers) {
                e48 = '_';
                e48 += 'main_series';
                Y0Y = 'und';
                Y0Y += 'er';
                Y0Y += 'lay';
                X$H = E44.seriesRenderers[w9x];
                v0M = X$H.params;
                H7q = v0M.panel;
                K6h = this.panels[H7q];
                if (v0M.overChart && E24 == Y0Y) continue;
                if (v0M.name == '_main_series' && E24 == 'underlay') continue;
                if (v0M.name != e48 && E24 == 'main') continue;
                if (!v0M.overChart && E24 == 'overlay') continue;
                if (!K6h) continue;
                if (K6h.chart !== E44) continue;
                if (K6h.hidden) continue;
                if (E24 == 'yAxis') {
                    X$H.adjustYAxis();
                } else {
                    s2G.apply(this);
                    X$H.draw();
                    if (X$H.cb) {
                        X$H.cb(X$H.colors);
                    }
                }
            }
            this.runAppend(U4Q, arguments);
        }
        s2G.apply(this);
    };
    l7f.ChartEngine.prototype.drawSeries = function (d$v, i5B, U7D, h0r) {
        var D3Y, f2i, Y4b, R_l, g73, K$m, t0f, T25, H3v, g$k, q6X, L0u, N0z, g3R, v42, J2E, X6P;
        D3Y = 'drawSer';
        D3Y += 'ies';
        if (this.runPrepend(D3Y, arguments)) {
            return;
        }
        f2i = d$v.dataSegment;
        Y4b = null;
        if (!i5B) {
            i5B = d$v.series;
        }
        for (var u$n in i5B) {
            Y4b = i5B[u$n];
            R_l = Y4b.parameters;
            g73 = R_l.panel ? this.panels[R_l.panel] : d$v.panel;
            K$m = R_l.color;
            t0f = R_l.width;
            T25 = R_l.field;
            if (!g73) continue;
            H3v = R_l.yAxis = U7D ? U7D : g73.yAxis;
            if (!K$m) {
                K$m = H3v.textStyle || this.defaultColor;
            }
            if (K$m == 'auto') {
                K$m = this.defaultColor;
            }
            if (!T25) {
                T25 = d$v.defaultPlotField;
            }
            g$k = R_l.subField || d$v.defaultPlotField || 'Close';
            if (!R_l._rawExtendToEndOfDataSet && R_l._rawExtendToEndOfDataSet !== ![]) {
                R_l._rawExtendToEndOfDataSet = R_l.extendToEndOfDataSet;
            }
            if (d$v.animatingHorizontalScroll) {
                R_l.extendToEndOfDataSet = !1;
            } else {
                R_l.extendToEndOfDataSet = R_l._rawExtendToEndOfDataSet;
            }
            q6X = R_l.colorFunction;
            if (Y4b.highlight || Y4b.parameters.highlight) {
                R_l.highlight = !![];
            }
            L0u = { colors: [] };
            if (h0r) {
                if (h0r.params.highlight) {
                    R_l.highlight = !!{};
                }
                if (R_l.hidden) continue;
                L0u = h0r.drawIndividualSeries(d$v, R_l) || L0u;
            } else if (R_l.type == 'mountain') {
                L0u = this.drawMountainChart(g73, l7f.extend({ returnObject: !0 }, R_l), q6X);
            } else {
                L0u = this.drawLineChart(g73, R_l.style, q6X, l7f.extend({ returnObject: !![] }, R_l));
            }
            Y4b.yValueCache = L0u.cache;
            x2dci.C$o(25);
            var U7i = x2dci.d58(0, 19, 20);
            N0z = d$v.dataSegment[d$v.dataSegment.length - U7i];
            if (N0z) {
                g3R = !R_l.skipTransform && d$v.transformFunc && H3v == d$v.panel.yAxis;
                if (!N0z[T25] && N0z[T25] !== 0) {
                    N0z = this.getPreviousBar(d$v, T25, d$v.dataSegment.length - 1);
                }
                if (g3R && N0z && N0z.transform) {
                    N0z = N0z.transform;
                }
            }
            if (R_l.displayFloatingLabel !== ![] && this.mainSeriesRenderer != h0r && N0z && !H3v.noDraw) {
                v42 = N0z[T25];
                if (v42) {
                    if (v42[g$k] || v42[g$k] === 0) {
                        v42 = v42[g$k];
                    } else {
                        v42 = v42.iqPrevClose;
                    }
                }
                if (H3v.priceFormatter) {
                    J2E = H3v.priceFormatter(this, g73, v42);
                } else {
                    J2E = this.formatYAxisPrice(v42, g73, null, H3v);
                }
                this.yAxisLabels.push({
                    src: 'series',
                    args: [
                        g73,
                        J2E,
                        this.pixelFromTransformedValue(v42, g73, H3v),
                        l7f.hexToRgba(l7f.colorToHex(K$m), parseFloat(R_l.opacity)),
                        null,
                        null,
                        H3v,
                    ],
                });
            }
            if (d$v.legend && R_l.useChartLegend) {
                if (!d$v.legend.colorMap) {
                    d$v.legend.colorMap = {};
                }
                X6P = R_l.display;
                if (!X6P) {
                    X6P = R_l.symbol;
                }
                d$v.legend.colorMap[u$n] = { color: L0u.colors, display: X6P, isBase: h0r == this.mainSeriesRenderer };
            }
        }
        x2dci.r2m();
        this.runAppend('drawSeries', arguments);
    };
};
A1 = y5U => {
    var F7J;
    x2dci.J8h();
    F7J = y5U.CIQ;
    F7J.ChartEngine.prototype.scrollTo = function (w9i, y5I, D2r) {
        var J7$, D1i;
        J7$ = this.swipe;
        J7$.end = !![];
        J7$.amplitude = J7$.target = (y5I - w9i.scroll) * this.layout.candleWidth;
        J7$.timeConstant = 100;
        J7$.timestamp = Date.now();
        x2dci.r2m();
        J7$.scroll = w9i.scroll;
        J7$.chart = w9i;
        J7$.cb = D2r;
        D1i = this;
        requestAnimationFrame(function () {
            D1i.autoscroll();
        });
    };
    F7J.ChartEngine.prototype.autoscroll = function () {
        var n9l, B7D, C2F, y4N;
        n9l = this;
        B7D = this.swipe;
        if (B7D.amplitude) {
            B7D.elapsed = Date.now() - B7D.timestamp;
            C2F = -B7D.amplitude * Math.exp(-B7D.elapsed / B7D.timeConstant);
            y4N = (B7D.target + C2F) / this.layout.candleWidth;
            B7D.chart.scroll = B7D.scroll + Math.round(y4N);
            this.draw();
            this.updateChartAccessories();
            if (C2F > 0.5 || C2F < -0.5) {
                requestAnimationFrame(function () {
                    n9l.autoscroll();
                });
            } else {
                if (this.disableBackingStoreDuringTouch) {
                    this.reconstituteBackingStore();
                }
                if (B7D.cb) {
                    B7D.cb();
                }
            }
        }
    };
};
S4 = j6S => {
    var c8l = x2dci;
    var S0i;
    S0i = j6S.CIQ;
    S0i.ChartEngine.prototype.drawXAxis = function (K9a, l5I) {
        var G0l,
            M7B,
            R4j,
            q$_,
            q86,
            Q4R,
            L1z,
            n_o,
            c3m,
            i_A,
            K8Z,
            P8w,
            o_G,
            w5u,
            a5o,
            q2u,
            D$d,
            g6u,
            u8$,
            A7h,
            g3M,
            X3m,
            v6n,
            J6b,
            n_G,
            x3z,
            w4U,
            t_$,
            Q4c,
            i$t;
        G0l = 'c';
        G0l += 'e';
        G0l += 'nte';
        G0l += 'r';
        M7B = 's';
        M7B += 't';
        M7B += 'x_xaxi';
        M7B += 's';
        R4j = 'dr';
        R4j += 'a';
        R4j += 'wXAxis';
        q$_ = [K9a, l5I];
        if (this.runPrepend(R4j, q$_)) {
            return;
        }
        if (!l5I) {
            return;
        }
        if (K9a.xAxis.noDraw) {
            return;
        }
        q86 = this.getBackgroundCanvas().context;
        this.canvasFont(M7B, q86);
        Q4R = this.getCanvasFontSize('stx_xaxis');
        q86.textAlign = G0l;
        q86.textBaseline = 'middle';
        n_o = q86.measureText('   ').width;
        for (var o2C = +'0'; o2C < l5I.length; o2C++) {
            L1z = l5I[o2C];
            c3m = q86.measureText(L1z.text).width;
            c8l.C$o(22);
            i_A = Math.max(c8l.d58(n_o, c3m), K9a.xAxis.minimumLabelWidth);
            L1z.hz = Math.floor(L1z.hz + this.micropixels) + ('0.5' - 0);
            c8l.M8Y(79);
            var L0y = c8l.c6Y(33, 11, 12, 34);
            L1z.left = L1z.hz - i_A / L0y;
            c8l.C$o(11);
            var o5b = c8l.d58(1, 8, 4, 15);
            L1z.right = L1z.hz + i_A / o5b;
            c8l.C$o(142);
            var V_B = c8l.c6Y(2, 13, 22, 20, 2);
            L1z.unpaddedRight = L1z.hz + c3m / V_B;
        }
        K8Z = this.xAxisAsFooter === !'' ? this.chart.canvasHeight : K9a.panel.bottom;
        c8l.M8Y(0);
        P8w = this.whichPanel(c8l.d58(K8Z, 1));
        if (!P8w) {
            return;
        }
        this.adjustYAxisHeightOffset(P8w, P8w.yAxis);
        o_G = K9a.xAxis.displayBorder || K9a.xAxis.displayBorder === null;
        if (this.axisBorders === !![]) {
            o_G = !!1;
        }
        if (this.axisBorders === !{}) {
            o_G = !1;
        }
        c8l.J8h();
        w5u = K8Z - this.xaxisHeight + Q4R;
        if (o_G) {
            w5u += 3;
        }
        a5o = !'';
        for (var y8P in this.panels) {
            q2u = 'b';
            q2u += 'or';
            q2u += 'de';
            q2u += 'r';
            D$d = 'l';
            D$d += 'ine';
            g6u = this.panels[y8P];
            if (g6u.hidden || g6u.shareChartXAxis === ![]) continue;
            c8l.M8Y(106);
            u8$ = c8l.d58(g6u, P8w);
            A7h = g6u.yAxis;
            if (!A7h) continue;
            g3M = -Number.MAX_VALUE;
            X3m = Number.MAX_VALUE;
            for (var c43 = 0; c43 < l5I.length; c43++) {
                v6n = 'bound';
                v6n += 'ary';
                if (l5I[c43].grid == v6n) {
                    X3m = l5I[c43].left;
                    break;
                }
            }
            q86.save();
            q86.beginPath();
            q86.rect(g6u.left, g6u.top + (a5o ? 0 : '1' >> 64), g6u.width, g6u.height - +'1');
            q86.clip();
            a5o = !{};
            J6b = new S0i.Plotter();
            J6b.newSeries(D$d, 'stroke', this.canvasStyle('stx_grid'));
            J6b.newSeries('boundary', 'stroke', this.canvasStyle('stx_grid_dark'));
            J6b.newSeries(q2u, 'stroke', this.canvasStyle('stx_grid_border'));
            for (var E_d = '0' | 0; E_d < l5I.length; E_d++) {
                L1z = l5I[E_d];
                if (E_d == c43) {
                    for (c43++; c43 < l5I.length; c43++) {
                        if (l5I[c43].grid == 'boundary') {
                            X3m = l5I[c43].left;
                            break;
                        }
                    }
                    if (c43 >= l5I.length) {
                        c43 = -1;
                        X3m = Number.MAX_VALUE;
                    }
                } else {
                    if (L1z.right > X3m) continue;
                }
                if (L1z.left < g3M) continue;
                if (L1z.left < 0) {
                    if (X3m < L1z.right) continue;
                    if (c43 >= l5I.length) {
                        if (l5I[E_d + 1] && l5I[E_d + 1].left < L1z.right) continue;
                    }
                }
                g3M = L1z.right;
                if (Math.floor(L1z.left) <= g6u.right) {
                    if (Math.floor(L1z.hz) > g6u.left) {
                        if (K9a.xAxis.displayGridLines) {
                            J6b.moveTo(L1z.grid, L1z.hz, A7h.top);
                            J6b.lineTo(L1z.grid, L1z.hz, A7h.bottom);
                        }
                        if (u8$ && o_G) {
                            n_G = 'bor';
                            n_G += 'der';
                            J6b.moveTo(n_G, L1z.hz, A7h.bottom + 0.5);
                            J6b.lineTo('border', L1z.hz, A7h.bottom + +'6');
                        }
                    }
                    if (u8$ && L1z.right > g6u.left) {
                        x3z = 'stx';
                        x3z += '_xa';
                        x3z += 'xi';
                        x3z += 's';
                        w4U = 's';
                        w4U += 'tx_xa';
                        w4U += 'xis_dark';
                        this.canvasColor(L1z.grid == 'boundary' ? w4U : x3z, q86);
                        q86.fillText(L1z.text, L1z.hz, w5u);
                    }
                }
            }
            if (o_G) {
                t_$ = 'b';
                t_$ += 'o';
                t_$ += 'rde';
                t_$ += 'r';
                Q4c = Math.round(A7h.bottom) + 0.5;
                i$t = Math.round(g6u.right) + 0.5;
                J6b.moveTo('border', g6u.left, Q4c);
                J6b.lineTo(t_$, i$t, Q4c);
            }
            J6b.draw(q86);
            q86.restore();
        }
        q86.textAlign = 'left';
        this.runAppend('drawXAxis', q$_);
    };
    c8l.J8h();
    S0i.ChartEngine.prototype.createTickXAxisWithDates = function (N8k) {
        var Z9I,
            k$V,
            C3d,
            Z52,
            Y93,
            t0u,
            j_P,
            E_y,
            j3o,
            W9z,
            n1t,
            c5i,
            z4U,
            r3i,
            R_d,
            V1L,
            t_o,
            D_c,
            R2m,
            e2x,
            m_S,
            G5f,
            h6x,
            V3I,
            H9C,
            o_o,
            q7A,
            G65,
            y$B,
            b45,
            d5W,
            X8s,
            l0a,
            g$3,
            f8_,
            W5F,
            D52,
            O5B,
            r6w,
            m56,
            Z4h,
            d2f,
            W5w,
            p5B,
            z5s,
            N9R,
            o8t,
            z7u,
            t3U,
            W1I,
            A6L,
            r67,
            O7X,
            z5m,
            O1Z,
            e8M,
            w5T,
            Y1Q,
            l2x,
            l$9,
            y8L,
            m3S,
            x2l,
            d29,
            c0C,
            D$l;
        Z9I = 'o';
        Z9I += 'h';
        Z9I += 'l';
        Z9I += 'c';
        k$V = 'm';
        k$V += 'inu';
        k$V += 'te';
        C3d = 's';
        C3d += 'e';
        C3d += 'c';
        c8l.r2m();
        C3d += 'ond';
        if (!N8k) {
            N8k = this.chart;
        }
        N8k.xaxis = [];
        Y93 = N8k.context;
        t0u = [S0i.MILLISECOND, S0i.SECOND, S0i.MINUTE, S0i.HOUR, S0i.DAY, S0i.MONTH, S0i.YEAR];
        if (!this.timeIntervalMap) {
            j_P = '2';
            j_P += '0';
            j_P += '0';
            j_P += '0';
            E_y = '10:';
            E_y += '00';
            E_y += ':';
            E_y += '00';
            j3o = '10:00:0';
            j3o += '0.000';
            W9z = Y93.measureText.bind(Y93);
            Z52 = {};
            Z52[S0i.MILLISECOND] = {
                arr: [1, '2' >> 64, +'5', 10, 20, 50, 100, 250, 500],
                minTimeUnit: 0,
                maxTimeUnit: 1000,
                measurement: W9z(j3o),
            };
            Z52[S0i.SECOND] = {
                arr: [1, 2, 3, 4, 5, 6, 10, 12, '15' - 0, +'20', 30],
                minTimeUnit: 0,
                maxTimeUnit: 60,
                measurement: W9z(E_y),
            };
            Z52[S0i.MINUTE] = {
                arr: [+'1', 2, '3' >> 32, 4, '5' | 5, 6, 10, 12, +'15', '20' * 1, 30],
                minTimeUnit: 0,
                maxTimeUnit: 60,
                measurement: W9z('10:00'),
            };
            Z52[S0i.HOUR] = {
                arr: [+'1', 2, 3, 4, 6, 12],
                minTimeUnit: '0' | 0,
                maxTimeUnit: '24' - 0,
                measurement: W9z('10:00'),
            };
            Z52[S0i.DAY] = {
                arr: [1, 2, +'7', 14],
                minTimeUnit: '1' << 32,
                maxTimeUnit: '32' << 32,
                measurement: W9z('30'),
            };
            Z52[S0i.MONTH] = {
                arr: [1, 2, 3, 6],
                minTimeUnit: '1' >> 0,
                maxTimeUnit: '13' << 0,
                measurement: W9z('Mar'),
            };
            Z52[S0i.YEAR] = { arr: [+'1', 2, +'3', 5], minTimeUnit: 1, maxTimeUnit: 20000000, measurement: W9z(j_P) };
            Z52[S0i.DECADE] = { arr: [10], minTimeUnit: 0, maxTimeUnit: 2000000, measurement: W9z('2000') };
            this.timeIntervalMap = Z52;
        }
        Z52 = this.timeIntervalMap;
        c8l.C$o(0);
        n1t = [31, 28, 31, 30, 31, 30, +'31', 31, 30, 31, c8l.d58('30', 0), +'31'];
        c5i = this.layout.periodicity;
        z4U = this.layout.interval;
        r3i = N8k.maxTicks;
        R_d = N8k.dataSegment;
        V1L = N8k.xAxis;
        t_o = R_d.length;
        D_c = V1L.idealTickSizePixels || V1L.autoComputedTickSizePixels;
        R2m = this.chart.width / D_c;
        for (var x74 = 0; x74 < t_o; x74++) {
            if (R_d[x74]) break;
        }
        if (x74 == t_o) {
            return [];
        }
        c8l.M8Y(38);
        e2x = c8l.c6Y('0', 1);
        m_S = this.layout.timeUnit || 'minute';
        if (isNaN(z4U)) {
            m_S = z4U;
            z4U = 1;
        }
        G5f = 0;
        switch (m_S) {
            case 'millisecond':
                G5f = 1;
                break;
            case C3d:
                G5f = 1000;
                c8l.C$o(19);
                t0u.splice(0, c8l.d58(96, '1'));
                break;
            case k$V:
                G5f = 60000;
                t0u.splice(0, 2);
                break;
            case 'day':
                G5f = 86400000;
                t0u.splice(0, 4);
                break;
            case 'week':
                c8l.C$o(38);
                G5f = c8l.c6Y(86400000, 7);
                t0u.splice(0, 4);
                break;
            case 'month':
                c8l.M8Y(162);
                G5f = c8l.d58(0, '30', 86400000);
                t0u.splice(0, 5);
                break;
        }
        function S$r(P$O) {
            var L7j, U4i;
            if (l0a == S0i.MILLISECOND) {
                L7j = P$O.getMilliseconds();
                U4i = P$O.getSeconds();
            } else if (l0a == S0i.SECOND) {
                L7j = P$O.getSeconds();
                U4i = P$O.getMinutes();
            } else if (l0a == S0i.MINUTE) {
                L7j = P$O.getMinutes();
                U4i = P$O.getHours();
            } else if (l0a == S0i.HOUR) {
                c8l.M8Y(22);
                var Z5u = c8l.d58(4, 56);
                L7j = P$O.getHours() + P$O.getMinutes() / Z5u;
                U4i = P$O.getDate();
            } else if (l0a == S0i.DAY) {
                L7j = P$O.getDate();
                c8l.C$o(2);
                var Q_4 = c8l.c6Y(4, 3);
                U4i = P$O.getMonth() + Q_4;
            } else if (l0a == S0i.MONTH) {
                c8l.M8Y(16);
                var A$k = c8l.c6Y(8, 0, 11, 87);
                L7j = P$O.getMonth() + A$k;
                U4i = P$O.getFullYear();
            } else if (l0a == S0i.YEAR) {
                L7j = P$O.getFullYear();
                c8l.M8Y(163);
                var G0Q = c8l.c6Y(14, 56, 4, 991, 9);
                U4i = P$O.getFullYear() + G0Q;
            } else {
                L7j = P$O.getFullYear();
                U4i = 0;
            }
            return [L7j, U4i];
        }
        h6x = this.layout.aggregationType;
        if (G5f && (!h6x || h6x == Z9I || h6x == 'heikinashi')) {
            c8l.C$o(73);
            e2x = c8l.d58(G5f, z4U, c5i, t_o);
        } else {
            e2x = R_d[t_o - 1].DT.getTime() - R_d[x74].DT.getTime();
        }
        if (e2x === 0) {
            if (N8k.market) {
                V3I = N8k.market.newIterator({ begin: new Date(), interval: 'day', periodicity: 1 });
                V3I.next();
                H9C = V3I.previous();
                V3I = this.standardMarketIterator(H9C, null, N8k);
                o_o = V3I.next();
                e2x = (o_o.getTime() - H9C.getTime()) * r3i;
            } else {
                c8l.C$o(164);
                e2x = c8l.c6Y(60, '1000', r3i, 24, 60);
            }
        } else {
            c8l.M8Y(165);
            e2x = c8l.c6Y(t_o, e2x, r3i);
        }
        c8l.M8Y(40);
        q7A = c8l.d58(R2m, e2x);
        for (G65 = 0; G65 < t0u.length; G65++) {
            if (t0u[G65] > q7A + '0.001' * 1) break;
        }
        if (q7A < 1) {
            y$B = 'createTickXAxisWithDates: Assertion';
            y$B +=
                ' error. msPerGridLine < 1. Make sure your masterData has correct time stamps for the active periodi';
            y$B += 'city and it is s';
            y$B += 'orted from OLDEST to NEWEST.';
            console.log(y$B);
        }
        if (G65 == t0u.length) {
            G65--;
        } else if (G65 > 0) {
            c8l.C$o(0);
            b45 = t0u[c8l.c6Y(G65, 1)];
            d5W = Z52[b45].arr;
            c8l.M8Y(166);
            var S1N = c8l.c6Y(5, 61, 16, 4, 19);
            X8s = d5W[d5W.length - S1N];
            if (q7A - b45 * X8s < t0u[G65] - q7A) {
                G65--;
            }
        }
        l0a = V1L.timeUnit || t0u[G65];
        V1L.activeTimeUnit = l0a;
        g$3 = Z52[l0a];
        f8_ = g$3.arr;
        for (G65 = 0; G65 < f8_.length; G65++) {
            if (f8_[G65] * l0a > q7A) break;
        }
        if (G65 == f8_.length) {
            G65--;
        } else {
            if (q7A - f8_[G65 - +'1'] * l0a < f8_[G65] * l0a - q7A) {
                G65--;
            }
        }
        if (g$3.measurement.width * 2 < this.layout.candleWidth) {
            G65 = 0;
        }
        W5F = V1L.timeUnitMultiplier || f8_[G65];
        D52 = [];
        O5B = this.layout.candleWidth;
        for (G65 = 0; G65 <= r3i; G65++) {
            if (R_d[G65]) break;
        }
        if (G65 > 0 && G65 < r3i) {
            if (N8k.market) {
                r6w = this.standardMarketIterator(R_d[G65].DT, V1L.adjustTimeZone ? this.displayZone : null);
            }
            for (var D0Z = G65; D0Z > 0; D0Z--) {
                m56 = {};
                if (r6w && !(N8k.lineApproximation && O5B < 1)) {
                    m56.DT = r6w.previous();
                }
                N8k.xaxis.unshift(m56);
            }
        }
        Z4h = 0;
        d2f = g$3.minTimeUnit;
        W5w = -+'1';
        p5B = !!{};
        z5s = S$r(R_d[G65].DT);
        o8t = 0;
        z7u = 0;
        t3U = R_d[G65].tick;
        for (o8t; o8t < t3U; o8t++) {
            N9R = S$r(this.chart.dataSet[t3U - o8t].DT);
            if (N9R[+'1'] != z5s[1]) break;
            z5s = N9R;
        }
        for (z7u; z7u < this.chart.dataSet.length - t3U; z7u++) {
            N9R = S$r(this.chart.dataSet[t3U + z7u].DT);
            if (N9R[1] != z5s[1]) break;
            z5s = N9R;
        }
        W1I = null;
        for (G65 = 0; G65 < r3i + z7u; G65++) {
            A6L = R_d[G65];
            if (!A6L) {
                A6L = N8k.xaxis[G65];
            } else if (o8t) {
                A6L = N8k.dataSet[A6L.tick - o8t];
            }
            if (G65 < t_o) {
                r67 = A6L;
                if (r67.displayDate && V1L.adjustTimeZone) {
                    Z4h = r67.displayDate;
                } else {
                    Z4h = r67.DT;
                }
                if (G65 && !o8t && N8k.segmentImage) {
                    O7X = N8k.segmentImage[G65];
                    c8l.C$o(118);
                    var Z3w = c8l.c6Y(19, 4, 14, 26, 150);
                    O5B = (O7X.leftOffset - O7X.candleWidth / Z3w) / G65;
                }
            } else if (N8k.market) {
                z5m = 'tic';
                z5m += 'k';
                if (this.layout.interval == z5m && !V1L.futureTicksInterval) break;
                if (N8k.lineApproximation && O5B < 1) break;
                if (!V1L.futureTicks) break;
                if (!W1I) {
                    W1I = this.standardMarketIterator(R_d[t_o - 1].DT, V1L.adjustTimeZone ? this.displayZone : null);
                }
                Z4h = W1I.next();
            }
            if (!Z4h) continue;
            O1Z = null;
            c8l.M8Y(0);
            w5T = c8l.c6Y(G65, o8t);
            Y1Q = { DT: Z4h };
            if (G65 < t_o) {
                Y1Q.data = A6L;
            } else {
                Y1Q.data = null;
            }
            if (o8t) {
                o8t--;
                G65--;
            } else if (!N8k.xaxis[G65] && G65 < r3i) {
                N8k.xaxis.push(Y1Q);
            }
            z5s = S$r(Z4h);
            c8l.M8Y(46);
            l2x = z5s[c8l.c6Y('0', 0)];
            l$9 = z5s[1];
            if (W5w != l$9) {
                if (l2x <= d2f) {
                    d2f = g$3.minTimeUnit;
                }
                c8l.C$o(167);
                var f6b = c8l.c6Y(11, 7, 113, 3, 8);
                e8M = N8k.left + w5T * O5B - f6b;
                O1Z = null;
                if (l0a == S0i.HOUR || (l0a == S0i.MINUTE && W5w > l$9)) {
                    if (this.internationalizer) {
                        O1Z = this.internationalizer.monthDay.format(Z4h);
                    } else {
                        c8l.C$o(14);
                        var h2_ = c8l.d58(18, 9, 3);
                        O1Z = Z4h.getMonth() + h2_ + '/' + Z4h.getDate();
                    }
                    if (V1L.formatter) {
                        y8L = 'bo';
                        y8L += 'undary';
                        O1Z = V1L.formatter(Z4h, y8L, S0i.DAY, 1, O1Z);
                    }
                } else if (l0a == S0i.DAY) {
                    if (W5w > l$9) {
                        O1Z = Z4h.getFullYear();
                        if (V1L.formatter) {
                            O1Z = V1L.formatter(Z4h, 'boundary', S0i.YEAR, 1, O1Z);
                        }
                    } else {
                        O1Z = S0i.monthAsDisplay(Z4h.getMonth(), !{}, this);
                        if (V1L.formatter) {
                            O1Z = V1L.formatter(Z4h, 'boundary', S0i.MONTH, 1, O1Z);
                        }
                    }
                } else if (l0a == S0i.MONTH) {
                    O1Z = Z4h.getFullYear();
                    if (V1L.formatter) {
                        m3S = 'boun';
                        m3S += 'dary';
                        O1Z = V1L.formatter(Z4h, m3S, S0i.YEAR, 1, O1Z);
                    }
                }
                if (O1Z && W5w != -1) {
                    D52.push(new S0i.ChartEngine.XAxisLabel(e8M, 'boundary', O1Z));
                }
            }
            if (l2x >= d2f) {
                if (d2f == g$3.minTimeUnit) {
                    if (l$9 == W5w) continue;
                }
                x2l = new Date(+Z4h);
                c8l.M8Y(8);
                var I8b = c8l.d58(18, 7, 2);
                c8l.M8Y(0);
                var y$8 = c8l.d58(16, 15);
                c8l.M8Y(8);
                var B8s = c8l.d58(34, 0, 17);
                e8M = N8k.left + ((I8b * w5T + y$8) * O5B) / B8s - ('1' ^ 0);
                d29 = Math.floor(l2x / W5F) * W5F;
                if (d29 < l2x) {
                    c0C = 'we';
                    c0C += 'ek';
                    if (this.layout.interval == c0C) {
                        d29 = l2x;
                    } else {
                        c8l.C$o(40);
                        e8M -= c8l.c6Y(2, O5B);
                    }
                }
                if (l0a == S0i.MILLISECOND) {
                    x2l.setMilliseconds(d29);
                } else if (l0a == S0i.SECOND) {
                    x2l.setMilliseconds(0);
                    x2l.setSeconds(d29);
                } else if (l0a == S0i.MINUTE) {
                    x2l.setMilliseconds(0);
                    x2l.setSeconds(0);
                    x2l.setMinutes(d29);
                } else if (l0a == S0i.HOUR) {
                    x2l.setMilliseconds(0);
                    x2l.setSeconds(0);
                    x2l.setMinutes(0);
                    x2l.setHours(d29);
                } else if (l0a == S0i.DAY) {
                    x2l.setDate(Math.max(+'1', d29));
                } else if (l0a == S0i.MONTH) {
                    x2l.setDate(1);
                    c8l.C$o(0);
                    x2l.setMonth(c8l.c6Y(d29, 1));
                } else if (l0a == S0i.YEAR) {
                    x2l.setDate(1);
                    x2l.setMonth(0);
                } else {
                    c8l.M8Y(46);
                    x2l.setDate(c8l.c6Y('1', 0));
                    x2l.setMonth(0);
                }
                c8l.M8Y(22);
                d2f = c8l.d58(W5F, d29);
                if (l0a == S0i.DAY) {
                    c8l.C$o(168);
                    var u12 = c8l.c6Y(10, 16, 17, 18, 26);
                    g$3.maxTimeUnit = n1t[x2l.getMonth()] + u12;
                }
                if (d2f >= g$3.maxTimeUnit) {
                    d2f = g$3.minTimeUnit;
                }
                W5w = l$9;
                if (p5B && d29 < l2x) {
                    p5B = !{};
                    continue;
                }
                if (l0a == S0i.DAY) {
                    O1Z = x2l.getDate();
                } else if (l0a == S0i.MONTH) {
                    O1Z = S0i.monthAsDisplay(x2l.getMonth(), !{}, this);
                } else if (l0a == S0i.YEAR || l0a == S0i.DECADE) {
                    O1Z = x2l.getFullYear();
                } else {
                    O1Z = S0i.timeAsDisplay(x2l, this, l0a);
                }
                if (V1L.formatter) {
                    D$l = 'l';
                    D$l += 'i';
                    D$l += 'n';
                    D$l += 'e';
                    O1Z = V1L.formatter(x2l, D$l, l0a, W5F, O1Z);
                }
                D52.push(new S0i.ChartEngine.XAxisLabel(e8M, 'line', O1Z));
            }
        }
        return D52;
    };
};
t3 = y$n => {
    var k9J = x2dci;
    var d_N;
    d_N = y$n.CIQ;
    k9J.r2m();
    d_N.ChartEngine.prototype.createYAxis = function (I1y, B12) {
        var g1H,
            B2e,
            J3A,
            N9Z,
            U4I,
            W6_,
            u_n,
            q9V,
            W0T,
            s67,
            D22,
            X9n,
            l0H,
            q5F,
            u1x,
            a8m,
            X5p,
            m8X,
            Q8Z,
            M4I,
            R$W,
            k8u,
            X7B,
            W1C,
            Z6C,
            r_p,
            Q3m;
        g1H = 'cr';
        g1H += 'eat';
        g1H += 'eYA';
        g1H += 'xis';
        if (this.runPrepend(g1H, arguments)) {
            return;
        }
        B2e = I1y.chart;
        J3A = I1y.name == B2e.name;
        if (!B12) {
            B12 = {};
        }
        B12.noChange = !{};
        N9Z = B12.yAxis ? B12.yAxis : I1y.yAxis;
        if (d_N.ChartEngine.enableCaching && N9Z.high == I1y.cacheHigh && N9Z.low == I1y.cacheLow) {
            k9J.M8Y(169);
            var I_b = k9J.d58(10, 1, 12, 23);
            U4I = B2e.dataSet.length - B2e.scroll - I_b;
            k9J.M8Y(75);
            var K65 = k9J.d58(9, 359, 15, 11, 14);
            W6_ = U4I + B2e.maxTicks + K65;
            I1y.cacheLeft = U4I;
            I1y.cacheRight = W6_;
            B12.noChange = !!{};
        } else {
            I1y.cacheLeft = +'1000000';
            I1y.cacheRight = -1;
            I1y.cacheHigh = N9Z.high;
            I1y.cacheLow = N9Z.low;
        }
        u_n = B2e.xAxis.idealTickSizePixels ? B2e.xAxis.idealTickSizePixels : B2e.xAxis.autoComputedTickSizePixels;
        if (N9Z.goldenRatioYAxis) {
            if (N9Z.idealTickSizePixels != u_n / ('1.618' - 0)) {
                B12.noChange = !{};
            }
        }
        if (!B12.noChange) {
            this.adjustYAxisHeightOffset(I1y, N9Z);
            W0T = N9Z.height = N9Z.bottom - N9Z.top;
            s67 = (N9Z.high - N9Z.low) / (W0T - N9Z.zoom);
            if (!N9Z.semiLog) {
                if (B12.ground) {
                    D22 = -295149038;
                    X9n = 1734369358;
                    k9J.M8Y(46);
                    l0H = k9J.c6Y('2', 64);
                    for (var r0R = 1; k9J.q2D(r0R.toString(), r0R.toString().length, 16719) !== D22; r0R++) {
                        N9Z.high = N9Z.high * (N9Z.zoom - s67);
                        l0H += 2;
                    }
                    if (k9J.q2D(l0H.toString(), l0H.toString().length, 25369) !== X9n) {
                        N9Z.high = N9Z.high + N9Z.zoom * s67;
                    }
                } else {
                    k9J.M8Y(0);
                    var t$Y = k9J.d58(10, 8);
                    N9Z.high = N9Z.high + (N9Z.zoom / t$Y + N9Z.scroll) * s67;
                    k9J.M8Y(65);
                    var H6U = k9J.d58(5, 1, 7, 0);
                    N9Z.low = N9Z.low - (N9Z.zoom / H6U - N9Z.scroll) * s67;
                }
            }
            if (N9Z.min || N9Z.min === ('0' ^ 0)) {
                N9Z.low = N9Z.min;
            }
            if (N9Z.max || N9Z.max === 0) {
                N9Z.high = N9Z.max;
            }
            N9Z.shadow = N9Z.high - N9Z.low;
            if (N9Z.semiLog && (!this.activeDrawing || this.activeDrawing.name != 'projection')) {
                q5F = function () {
                    var V2N;
                    N9Z.logHigh = Math.log(N9Z.high) / Math.LN10;
                    V2N = Math.max(N9Z.low, 0.000000001);
                    N9Z.logLow = Math.log(V2N) / Math.LN10;
                    if (N9Z.low <= 0) {
                        N9Z.logLow = 0;
                    }
                    N9Z.logShadow = N9Z.logHigh - N9Z.logLow;
                };
                if (N9Z.semiLog) {
                    q5F();
                }
                u1x = N9Z.height / (N9Z.height - N9Z.zoom);
                if (N9Z.flipped) {
                    N9Z.high = this.transformedPriceFromPixel(N9Z.bottom + u1x * (N9Z.zoom / 2 + N9Z.scroll), I1y, N9Z);
                    N9Z.low = this.transformedPriceFromPixel(
                        N9Z.top - u1x * (N9Z.zoom / ('2' - 0) - N9Z.scroll),
                        I1y,
                        N9Z
                    );
                    k9J.C$o(74);
                    a8m = -k9J.d58('1121413743', 44);
                    X5p = -2021505169;
                    m8X = 2;
                    for (var L9p = 1; k9J.O$R(L9p.toString(), L9p.toString().length, 45142) !== a8m; L9p++) {
                        k9J.M8Y(20);
                        m8X += k9J.d58('2', 0);
                    }
                    if (k9J.O$R(m8X.toString(), m8X.toString().length, 15993) !== X5p) {
                    }
                } else {
                    N9Z.high = this.transformedPriceFromPixel(N9Z.top - u1x * (N9Z.zoom / 2 + N9Z.scroll), I1y, N9Z);
                    N9Z.low = this.transformedPriceFromPixel(N9Z.bottom + u1x * (N9Z.zoom / 2 - N9Z.scroll), I1y, N9Z);
                }
                N9Z.shadow = N9Z.high - N9Z.low;
                if (N9Z.semiLog) {
                    q5F();
                }
            }
            if (N9Z.goldenRatioYAxis && J3A && N9Z == I1y.yAxis) {
                k9J.M8Y(40);
                N9Z.idealTickSizePixels = k9J.d58(1.618, u_n);
                if (N9Z.idealTickSizePixels === +'0') {
                    M4I = 'stx_yax';
                    M4I += 'i';
                    M4I += 's';
                    Q8Z = this.getCanvasFontSize(M4I);
                    k9J.C$o(170);
                    N9Z.idealTickSizePixels = k9J.c6Y(64, Q8Z, '5');
                }
            } else {
                if (!N9Z.idealTickSizePixels) {
                    Q8Z = this.getCanvasFontSize('stx_yaxis');
                    if (J3A) {
                        k9J.M8Y(38);
                        N9Z.idealTickSizePixels = k9J.d58(Q8Z, 5);
                    } else {
                        k9J.M8Y(38);
                        N9Z.idealTickSizePixels = k9J.c6Y(Q8Z, 2);
                    }
                }
            }
            R$W = Math.round(W0T / N9Z.idealTickSizePixels);
            q9V = B12.range ? B12.range[1] - B12.range[+'0'] : N9Z.shadow;
            k9J.M8Y(40);
            N9Z.priceTick = Math.floor(k9J.d58(R$W, q9V));
            k8u = 1;
            for (var u3x = 0; u3x < 10; u3x++) {
                if (N9Z.priceTick > 0) break;
                k8u *= 10;
                N9Z.priceTick = Math.floor((q9V / R$W) * k8u) / k8u;
            }
            if (u3x == +'10') {
                N9Z.priceTick = 0.00000001;
            }
            N9Z.priceTick = Math.round((q9V / R$W) * k8u) / k8u;
            X7B = Math.round(q9V / N9Z.priceTick);
            if (B12.range && X7B < q9V && !N9Z.noEvenDivisorTicks) {
                while (X7B >= 1) {
                    if (q9V % X7B === 0) break;
                    X7B--;
                }
                k9J.M8Y(40);
                N9Z.priceTick = k9J.d58(X7B, q9V);
            }
            if (N9Z.minimumPriceTick) {
                W1C = N9Z.minimumPriceTick;
                Q8Z = this.getCanvasFontSize('stx_yaxis');
                for (var n3o = 0; n3o < 100; n3o++) {
                    k9J.C$o(40);
                    Z6C = k9J.d58(W1C, q9V);
                    if (W0T / Z6C < Q8Z * 2) {
                        W1C += N9Z.minimumPriceTick;
                    } else break;
                }
                if (n3o < 100) {
                    N9Z.priceTick = W1C;
                }
            }
        }
        if (N9Z.priceTick <= 0 || N9Z.priceTick === Infinity) {
            N9Z.priceTick = 1;
        }
        N9Z.multiplier = N9Z.height / N9Z.shadow;
        if (N9Z.multiplier == Infinity) {
            N9Z.multiplier = +'0';
        }
        if (!N9Z.decimalPlaces && N9Z.decimalPlaces !== 0) {
            if (J3A) {
                r_p = 0;
                for (var K4J = 0; K4J < I1y.yAxis.shadowBreaks.length; K4J++) {
                    Q3m = I1y.yAxis.shadowBreaks[K4J];
                    if (I1y.yAxis.shadow < Q3m['0' * 1]) {
                        r_p = Q3m[1];
                    }
                }
                N9Z.printDecimalPlaces = r_p;
            } else {
                N9Z.printDecimalPlaces = null;
            }
        } else {
            N9Z.printDecimalPlaces = N9Z.decimalPlaces;
        }
        this.runAppend('createYAxis', arguments);
    };
    d_N.ChartEngine.prototype.drawYAxis = function (A2Q, U9i) {
        var U$T,
            i$6,
            y54,
            Q4u,
            g2E,
            F_W,
            d50,
            t6O,
            E8y,
            o5F,
            d4W,
            b1a,
            t_q,
            Y6q,
            s7w,
            M2t,
            T9K,
            K5U,
            V4t,
            I3B,
            P2b,
            Y4R,
            N$H,
            f0q,
            z3P,
            P$p,
            w1I,
            G7S,
            O4m,
            z2x,
            U3V,
            q$8,
            K5a,
            l3G,
            D96,
            e0C,
            a_4,
            e0d,
            s6W,
            t7D,
            V7C,
            X1b;
        if (!U9i) {
            U9i = {};
        }
        U$T = U9i.yAxis ? U9i.yAxis : A2Q.yAxis;
        if (A2Q.hidden || U$T.noDraw || !U$T.width) {
            return;
        }
        if (!d_N.Comparison || U$T.priceFormatter != d_N.Comparison.priceFormat) {
            i$6 = U$T.fractional;
            if (i$6) {
                if (!U$T.originalPriceFormatter) {
                    U$T.originalPriceFormatter = { func: U$T.priceFormatter };
                }
                if (!i$6.resolution) {
                    i$6.resolution = U$T.minimumPrice;
                }
                if (!i$6.formatter) {
                    i$6.formatter = (+'75.45', 8516) === (604.84, +'9230') ? 9.56e3 : "'";
                }
                if (!U$T.priceFormatter) {
                    U$T.priceFormatter = function (w0z, s4S, Q0K) {
                        var v7$, N05, G8m, V6w;
                        if (!i$6) {
                            return;
                        }
                        v7$ = '';
                        if (Q0K < 0) {
                            v7$ = 8050 < 7390 ? 4.0e3 : '-';
                            Q0K = Math.abs(Q0K);
                        }
                        N05 = Math.floor(Math.round(Q0K / i$6.resolution) * i$6.resolution);
                        G8m = Math.round((Q0K - N05) / i$6.resolution);
                        V6w = Math.floor(G8m);
                        k9J.M8Y(7);
                        var R_X = k9J.c6Y(15, 6012, 12);
                        k9J.M8Y(68);
                        var e9x = k9J.c6Y(20754, 4, 6923);
                        k9J.C$o(1);
                        var f1G = k9J.c6Y(352, 6, 18, 10, 31031);
                        k9J.C$o(120);
                        var a13 = k9J.c6Y(565, 8, 568, 565);
                        k9J.C$o(171);
                        var j_S = k9J.d58(6, 15, 44808, 6, 8967);
                        return (
                            v7$ +
                            N05 +
                            i$6.formatter +
                            (V6w < +'10'
                                ? 211.56 > ('888.96' - 0, 187.49)
                                    ? ('7762' ^ 0, 104.62) === R_X
                                        ? (603.56, e9x) >= (f1G, 234.37)
                                            ? (a13, 340.92)
                                            : j_S
                                        : '0'
                                    : '760.23' - 0
                                : '') +
                            V6w +
                            (G8m - V6w >= 0.5 ? '+' : '')
                        );
                    };
                }
            } else {
                if (U$T.originalPriceFormatter) {
                    U$T.priceFormatter = U$T.originalPriceFormatter.func;
                    U$T.originalPriceFormatter = null;
                }
            }
        }
        y54 = this.colorOrStyle(U$T.textStyle || 'stx_yaxis');
        Q4u = this.highlightedDraggable;
        g2E = 0;
        if (Q4u && this.yaxisMatches(Q4u, U$T)) {
            g2E = 0.15;
        } else if (U$T.highlight) {
            g2E = +'0.1';
        }
        k9J.J8h();
        if (g2E) {
            F_W = y54.constructor == String ? y54 : y54.color;
            U$T.setBackground(this, { color: F_W, opacity: g2E });
        }
        if (U$T.pretty) {
            return this.drawYAxisPretty(A2Q, U9i);
        }
        if (this.runPrepend('drawYAxis', arguments)) {
            return;
        }
        if (!U9i.noDraw && !U$T.noDraw) {
            d50 = U$T.yAxisPlotter;
            if (!d50 || !U9i.noChange) {
                t6O = 's';
                t6O += 'tx_yax';
                t6O += 'is';
                E8y = 'l';
                E8y += 'eft';
                o5F = 'stro';
                o5F += 'ke';
                d4W = 'g';
                d4W += 'rid';
                d50 = U$T.yAxisPlotter = new d_N.Plotter();
                b1a = A2Q.chart;
                t_q = A2Q.name == b1a.name && U$T.name === A2Q.yAxis.name;
                if (!U$T.priceTick) {
                    return;
                }
                Y6q = U$T.shadow;
                s7w = U9i.range;
                if (s7w) {
                    k9J.C$o(115);
                    var Y0j = k9J.d58(4, 7, 7, 1, 4);
                    Y6q = s7w[Y0j] - s7w[0];
                }
                M2t = Y6q / U$T.priceTick;
                M2t = Math.round(M2t);
                if (U$T.semiLog) {
                    T9K = Math.log(this.valueFromPixel(U$T.flipped ? U$T.top : U$T.bottom, A2Q)) / Math.LN10;
                    K5U = (U$T.logHigh - U$T.logLow) / M2t;
                }
                d50.newSeries(d4W, 'stroke', this.canvasStyle('stx_grid'));
                d50.newSeries('text', 'fill', y54);
                d50.newSeries('border', o5F, this.canvasStyle('stx_grid_border'));
                V4t = 0;
                I3B = s7w ? s7w[1] : U$T.high;
                P2b = s7w ? s7w[0] : U$T.low;
                Y4R = U$T.displayBorder === null ? b1a.panel.yAxis.displayBorder : U$T.displayBorder;
                if (this.axisBorders === !1) {
                    Y4R = !{};
                }
                if (this.axisBorders === !!{}) {
                    Y4R = !!{};
                }
                f0q = b1a.dynamicYAxis;
                z3P = f0q ? U$T.width : NaN;
                P$p = this.getYAxisCurrentPosition(U$T, A2Q);
                if (P$p == 'left') {
                    N$H = U$T.left + U$T.width;
                } else {
                    N$H = U$T.left;
                }
                w1I = Math.round(N$H) + 0.5;
                G7S = Y4R ? 3 : 0;
                if (P$p == E8y) {
                    G7S = Y4R ? -3 : +'0';
                }
                if (t_q) {
                    if (U$T.shadow < '1' * 1) {
                        k9J.C$o(172);
                        var L2y = k9J.d58(17, 11, 152, 9);
                        V4t = (parseInt(P2b / U$T.priceTick, L2y) + ('1' - 0)) * U$T.priceTick - P2b;
                    } else {
                        V4t = U$T.priceTick - Math.round((P2b % U$T.priceTick) * A2Q.chart.roundit) / A2Q.chart.roundit;
                    }
                } else {
                    V4t = I3B % U$T.priceTick;
                }
                O4m = this.getCanvasFontSize(t6O);
                for (var a$k = +'0'; a$k < M2t; a$k++) {
                    if (U$T.semiLog) {
                        k9J.M8Y(147);
                        U3V = k9J.c6Y(T9K, a$k, K5U);
                        z2x = Math.pow(10, U3V);
                    } else {
                        if (t_q) {
                            z2x = P2b + a$k * U$T.priceTick + V4t;
                        } else {
                            z2x = I3B - a$k * U$T.priceTick - V4t;
                        }
                    }
                    q$8 = this.pixelFromTransformedValue(z2x, A2Q, U$T);
                    K5a = Math.round(q$8) + 0.5;
                    if (K5a + O4m / +'2' > A2Q.bottom) continue;
                    if (K5a - O4m / ('2' - 0) < A2Q.top) continue;
                    if (Math.abs(K5a - U$T.bottom) < 1) continue;
                    if (U$T.flipped) {
                        K5a = U$T.top + U$T.bottom - K5a;
                    }
                    if (U$T.displayGridLines) {
                        l3G = 'g';
                        l3G += 'ri';
                        l3G += 'd';
                        d50.moveTo('grid', A2Q.left + 1, K5a);
                        d50.lineTo(l3G, A2Q.right - 1, K5a);
                    }
                    if (Y4R) {
                        D96 = 'bo';
                        D96 += 'rd';
                        D96 += 'er';
                        k9J.M8Y(0);
                        d50.moveTo('border', k9J.c6Y(w1I, 0.5), K5a);
                        k9J.M8Y(22);
                        d50.lineTo(D96, k9J.c6Y(G7S, w1I), K5a);
                    }
                    if (U$T.priceFormatter) {
                        z2x = U$T.priceFormatter(this, A2Q, z2x);
                    } else {
                        z2x = this.formatYAxisPrice(z2x, A2Q, null, U$T);
                    }
                    e0C = U$T.textBackground ? this.containerColor : null;
                    a_4 = 3;
                    k9J.M8Y(53);
                    e0d = k9J.c6Y(N$H, G7S, a_4);
                    if (P$p == 'left') {
                        e0d = U$T.left + a_4;
                        if (U$T.justifyRight !== !'1') {
                            e0d = U$T.left + U$T.width + G7S - a_4;
                        }
                    } else {
                        if (U$T.justifyRight) {
                            e0d = N$H + U$T.width;
                        }
                    }
                    d50.addText('text', z2x, e0d, K5a, e0C, null, O4m);
                    if (f0q) {
                        z3P = Math.max(z3P, b1a.context.measureText(z2x).width + Math.abs(G7S) + a_4);
                    }
                }
                if (Y4R) {
                    s6W = 'bor';
                    s6W += 'der';
                    t7D = 'bo';
                    t7D += 'rd';
                    t7D += 'er';
                    V7C = Math.round(U$T.bottom) + 0.5;
                    d50.moveTo(t7D, w1I, U$T.top);
                    d50.lineTo(s6W, w1I, V7C);
                    d50.draw(this.getBackgroundCanvas(b1a).context, 'border');
                }
                if (f0q && z3P > U$T.width) {
                    U$T._dynamicWidth = z3P;
                    this.calculateYAxisPositions();
                    throw new Error('reboot draw');
                } else if (!f0q && U$T._dynamicWidth) {
                    X1b = 'rebo';
                    X1b += 'ot draw';
                    this.resetDynamicYAxis({ chartName: b1a.name });
                    throw new Error(X1b);
                }
            }
            if (U$T == A2Q.yAxis) {
                this.plotYAxisGrid(A2Q);
            }
        }
        this.runAppend('drawYAxis', arguments);
    };
    d_N.ChartEngine.prototype.drawYAxisPretty = function (B3J, k_4) {
        var J1q,
            O1F,
            F_Y,
            K6G,
            O64,
            j3W,
            R$O,
            Y8M,
            x1F,
            i8b,
            x8w,
            V7y,
            j2q,
            d0e,
            T4O,
            u2M,
            L26,
            n53,
            x3k,
            r5f,
            n6O,
            c2c,
            O18,
            O1K,
            w7T,
            N4Z,
            A7y,
            m7V,
            L7S,
            v7z,
            E6G,
            S3Z,
            v68,
            F72,
            E2J,
            B8A,
            J6x,
            i8x,
            S2B,
            b1s,
            p2_,
            D8n,
            v4f,
            a$J,
            F0l,
            c4e,
            G1h,
            h8J,
            w3o,
            x6Y,
            C8J,
            a7N,
            G80;
        if (this.runPrepend('drawYAxis', arguments)) {
            return;
        }
        k9J.J8h();
        if (!k_4) {
            k_4 = {};
        }
        J1q = k_4.yAxis ? k_4.yAxis : B3J.yAxis;
        if (B3J.hidden || J1q.noDraw || !J1q.width) {
            return;
        }
        if (!k_4.noDraw) {
            O1F = J1q.yAxisPlotter;
            if (!O1F || !k_4.noChange) {
                F_Y = 'st';
                F_Y += 'x_';
                F_Y += 'yax';
                F_Y += 'is';
                K6G = 'bor';
                K6G += 'der';
                O64 = 'f';
                O64 += 'ill';
                j3W = 't';
                j3W += 'e';
                j3W += 'x';
                j3W += 't';
                R$O = 'stx_';
                R$O += 'grid';
                Y8M = 'stx';
                Y8M += '_';
                Y8M += 'ya';
                Y8M += 'xis';
                O1F = J1q.yAxisPlotter = new d_N.Plotter();
                x1F = B3J.chart;
                if (!J1q.priceTick) {
                    return;
                }
                if (isNaN(J1q.high) || isNaN(J1q.low)) {
                    return;
                }
                i8b = J1q.shadow;
                if (k_4.range) {
                    k9J.M8Y(7);
                    var g2r = k9J.d58(17, 0, 18);
                    i8b = k_4.range[g2r] - k_4.range[0];
                }
                x8w = J1q.height / J1q.idealTickSizePixels;
                x8w = Math.round(x8w);
                V7y = J1q.textStyle || Y8M;
                O1F.newSeries('grid', 'stroke', this.canvasStyle(R$O));
                O1F.newSeries(j3W, O64, this.colorOrStyle(V7y));
                O1F.newSeries(K6G, 'stroke', this.canvasStyle('stx_grid_border'));
                j2q = k_4.range;
                d0e = j2q ? j2q[1] : J1q.high;
                T4O = j2q ? j2q[0] : J1q.low;
                u2M = J1q.displayBorder === null ? x1F.panel.yAxis.displayBorder : J1q.displayBorder;
                if (this.axisBorders === ![]) {
                    u2M = !{};
                }
                if (this.axisBorders === !!1) {
                    u2M = !![];
                }
                n53 = x1F.dynamicYAxis;
                x3k = n53 ? J1q.width : NaN;
                r5f = this.getYAxisCurrentPosition(J1q, B3J);
                if (r5f == 'left') {
                    L26 = J1q.left + J1q.width;
                } else {
                    L26 = J1q.left;
                }
                n6O = Math.round(L26) + 0.5;
                c2c = u2M ? 3 : 0;
                if (r5f == 'left') {
                    c2c = u2M ? -3 : 0;
                }
                O18 = this.getCanvasFontSize(F_Y);
                O1K = J1q.increments;
                w7T = O1K.length;
                N4Z = 0;
                A7y = 1;
                m7V = 0;
                L7S = 0;
                v7z = 0;
                E6G = Number.MAX_VALUE;
                for (var y$0 = 0; y$0 < 100; y$0++) {
                    k9J.M8Y(25);
                    var M0$ = k9J.d58(0, 8, 18);
                    m7V = O1K[N4Z] * Math.pow(M0$, v7z);
                    k9J.C$o(40);
                    A7y = Math.floor(k9J.c6Y(m7V, i8b));
                    k9J.M8Y(0);
                    S3Z = Math.abs(k9J.c6Y(x8w, A7y));
                    if (S3Z > E6G) {
                        break;
                    } else {
                        E6G = S3Z;
                    }
                    if (A7y == x8w) {
                        L7S = m7V;
                        break;
                    } else if (A7y > x8w) {
                        N4Z++;
                        if (N4Z >= w7T) {
                            N4Z = 0;
                            v7z++;
                        }
                    } else {
                        N4Z--;
                        if (N4Z < 0) {
                            k9J.M8Y(0);
                            N4Z = k9J.d58(w7T, 1);
                            v7z--;
                        }
                    }
                    L7S = m7V;
                }
                v68 = Math.ceil(T4O / L7S) * L7S;
                F72 = J1q.bottom - this.pixelFromTransformedValue(v68, B3J, J1q);
                E2J = 0;
                if (F72 > J1q.idealTickSizePixels && J1q.semiLog && J1q.prettySemiLog) {
                    B8A = Math.ceil(T4O);
                    J6x = 0;
                    while (v68 - B8A >= 10000 && J6x <= '15' >> 32) {
                        v68 /= 10;
                        B8A /= 10;
                        J6x++;
                    }
                    v68 = Math.ceil(v68);
                    B8A = Math.ceil(B8A);
                    for (B8A; B8A < v68 && v68 % B8A !== 0; ++B8A) {}
                    v68 *= Math.pow(10, J6x);
                    B8A *= Math.pow(10, J6x);
                    if (B8A < v68) {
                        if (v68 === L7S) {
                            L7S = B8A;
                            E2J = B8A;
                        }
                        v68 = B8A;
                    }
                }
                if (J1q.height > J1q.zoom) {
                    k9J.C$o(38);
                    i8x = k9J.d58('0', 1);
                    S2B = Number.MAX_VALUE;
                    x1F.context.save();
                    this.canvasFont('stx_yaxis', x1F.context);
                    for (var R$c = 0; R$c < 100; R$c++) {
                        b1s = 'le';
                        b1s += 'f';
                        b1s += 't';
                        k9J.C$o(147);
                        p2_ = k9J.d58(v68, i8x, L7S);
                        if (p2_ > d0e) break;
                        L7S += E2J;
                        i8x++;
                        D8n = this.pixelFromTransformedValue(p2_, B3J, J1q);
                        if (S2B - D8n < O18 + 1 && E2J > ('0' | 0)) {
                            R$c = i8x = 0;
                            S2B = Number.MAX_VALUE;
                            L7S = E2J;
                            E2J *= 2;
                            O1F.reset();
                            continue;
                        }
                        S2B = D8n;
                        k9J.M8Y(34);
                        var z79 = k9J.c6Y(17, 203, 1, 12);
                        v4f = Math.round(D8n) + '0.5' * z79;
                        if (v4f + O18 / 2 > B3J.bottom) continue;
                        if (v4f - O18 / +'2' < B3J.top) continue;
                        if (Math.abs(v4f - J1q.bottom) < 1) continue;
                        if (J1q.displayGridLines) {
                            O1F.moveTo('grid', B3J.left + 1, v4f);
                            O1F.lineTo('grid', B3J.right - +'1', v4f);
                        }
                        if (u2M) {
                            k9J.C$o(0);
                            O1F.moveTo('border', k9J.c6Y(n6O, 0.5), v4f);
                            k9J.C$o(22);
                            O1F.lineTo('border', k9J.d58(c2c, n6O), v4f);
                        }
                        if (J1q.priceFormatter) {
                            p2_ = J1q.priceFormatter(this, B3J, p2_);
                        } else {
                            p2_ = this.formatYAxisPrice(p2_, B3J, null, J1q);
                        }
                        a$J = J1q.textBackground ? this.containerColor : null;
                        k9J.M8Y(20);
                        F0l = k9J.d58('3', 0);
                        k9J.C$o(53);
                        c4e = k9J.d58(L26, c2c, F0l);
                        if (r5f == b1s) {
                            k9J.C$o(67);
                            var B31 = k9J.d58(18, 1, 9);
                            c4e = J1q.left + B31;
                            if (J1q.justifyRight !== ![]) {
                                c4e = J1q.left + J1q.width + c2c - F0l;
                            }
                        } else {
                            if (J1q.justifyRight) {
                                c4e = L26 + J1q.width;
                            }
                        }
                        O1F.addText('text', p2_, c4e, v4f, a$J, null, O18);
                        if (n53) {
                            k9J.C$o(22);
                            G1h = k9J.c6Y('\xA0', p2_);
                            x3k = Math.max(x3k, x1F.context.measureText(G1h).width + Math.abs(c2c) + F0l);
                        }
                    }
                    x1F.context.restore();
                    if (R$c >= 100) {
                        console.log('drawYAxisPretty: assertion error. zz reached 100');
                    }
                }
                if (u2M) {
                    h8J = 'bor';
                    h8J += 'd';
                    h8J += 'er';
                    w3o = 'bo';
                    w3o += 'rder';
                    x6Y = Math.round(J1q.bottom) + 0.5;
                    O1F.moveTo(w3o, n6O, J1q.top);
                    O1F.lineTo('border', n6O, x6Y);
                    O1F.draw(this.getBackgroundCanvas(x1F).context, h8J);
                }
                if (n53 && x3k > J1q.width) {
                    J1q._dynamicWidth = x3k;
                    this.calculateYAxisPositions();
                    throw new Error('reboot draw');
                } else if (!n53 && J1q._dynamicWidth) {
                    C8J = -668306934;
                    a7N = 1199601349;
                    G80 = 2;
                    for (var x8M = 1; k9J.O$R(x8M.toString(), x8M.toString().length, 99153) !== C8J; x8M++) {
                        this.resetDynamicYAxis({ chartName: x1F.name });
                        G80 += 2;
                    }
                    if (k9J.q2D(G80.toString(), G80.toString().length, '70338' * 1) !== a7N) {
                        this.resetDynamicYAxis({ chartName: x1F.name });
                    }
                    throw new Error('reboot draw');
                }
            }
            if (J1q == B3J.yAxis) {
                this.plotYAxisGrid(B3J);
            }
        }
        this.runAppend('drawYAxis', arguments);
    };
};
u = {};
F(u);
S(u);
Z(u);
Q(u);
A(u);
G(u);
C(u);
E(u);
K(u);
O(u);
M(u);
B(u);
J(u);
P(u);
T(u);
W(u);
U(u);
R(u);
D(u);
N(u);
L0(u);
W_(u);
f9(u);
o8(u);
d7(u);
m1(u);
k4(u);
C1(u);
t_(u);
b$(u);
l5(u);
R$(u);
L9(u);
G8(u);
A1(u);
S4(u);
t3(u);
var { CIQ: u8, SplinePlotter: e_, timezoneJS: g2, $$: t8, $$$: W5 } = u;
export {
    u8 as CIQ,
    e_ as SplinePlotter,
    g2 as timezoneJS,
    t8 as $$,
    W5 as $$$,
}; /* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */
