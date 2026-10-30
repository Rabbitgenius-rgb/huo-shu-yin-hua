"""Cut the licensed excerpt so the shorter film retains the score's ending.

Output = source[0, 27.97) + equal-power crossfade (60 ms) + source[35.23, 38.6)
shifted back by 7.20 s (three 2.40 s phrase beats), then 0.8 s of silence.
Measured low onsets 35.33 / 37.77 land at 28.13 / 30.57 s.
Pure standard library (no numpy on this machine). Usage:
    python3 -I cinematic-v2/tools/splice-score.py SRC.wav OUT.wav
"""
import array, math, sys, wave

SHIFT, CUT, XFADE, TAIL = 7.20, 28.00, .060, .80

def main(src, out):
    with wave.open(src) as w:
        sr, ch, sw, n = w.getframerate(), w.getnchannels(), w.getsampwidth(), w.getnframes()
        assert sw == 2, 'expects 16-bit PCM'
        data = array.array('h'); data.frombytes(w.readframes(n))
    frame = lambda i: data[i * ch:(i + 1) * ch]
    shift, cut, half = round(SHIFT * sr), round(CUT * sr), round(XFADE * sr / 2)
    total = n - shift + round(TAIL * sr)
    res = array.array('h', bytes(2 * ch * total))
    for i in range(total):
        j = i + shift
        if i < cut - half: s = frame(i)
        elif i < cut + half:
            u = (i - (cut - half)) / (2 * half)
            ga, gb = math.cos(u * math.pi / 2), math.sin(u * math.pi / 2)
            s = [max(-32768, min(32767, round(ga * x + gb * y))) for x, y in zip(frame(i), frame(j))]
        elif j < n: s = frame(j)
        else: continue
        res[i * ch:(i + 1) * ch] = array.array('h', s)
    with wave.open(out, 'wb') as w:
        w.setnchannels(ch); w.setsampwidth(2); w.setframerate(sr); w.writeframes(res.tobytes())
    print(f'{out}: {total / sr:.3f} s')

if __name__ == '__main__':
    main(*sys.argv[1:3])
