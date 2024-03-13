function bubble_sort(arr: number[]): void {
    let n: number = arr.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i: number = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);
}
