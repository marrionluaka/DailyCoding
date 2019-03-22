/**
 * Time Complexity: O(n)
 */
export default function plusOne(arr: number[]): number[] {
    const len               = arr.length;
    const last              = arr[len-1];
    const isNine            = (n: number) => arr[n] === 9;
    const isLessThanNine    = (n: number) => n < 9;
    const addTens = () => {
        arr[0] = 0;
        arr.unshift(1);
        return arr;
    };

    if(isLessThanNine(last)){
        arr[len-1] = last + 1;
        return arr;
    }

    if(len === 1) return addTens();

    for(let i = len-1; i >= 0; i--){
        if(i === 0 && isNine(i)){
            addTens();
            break;
        }

        if(isNine(i)){
            arr[i] = 0;
            continue;
        }

        if(isLessThanNine(arr[i])){
            arr[i] += 1;
            break;
        }
    }

    return arr;
}