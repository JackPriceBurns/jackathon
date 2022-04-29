import glob

def compress(input):
    output = ""

    return output

def decompress(input):
    output = ""

    return output


def test():
    files = glob.glob("fixtures/*.css") + glob.glob("fixtures/*.json") + glob.glob("fixtures/*.txt")
    ratioTotal = 0

    for file in files:
        with open(file, 'r') as openFile:
            input = openFile.read()

            compressed = compress(input)
            decompressed = decompress(compressed)

            if (input != decompressed):
                print("FAIL: Outputs do not match!")
            
            ratio = (1 - (len(compressed.encode('utf-8')) / len(input.encode('utf-8')))) * 100
            ratioTotal = ratioTotal + ratio

            print(f"File: {file}, Ratio: {ratio:0.2f}%")

test()
