interface Iterator<T> {
    /** 다음 구성 데이터를 반환할 수 있으면 true */
    next(): boolean;
    /** 구성 데이터를 하나 얻어서 반환 */
    current(): T;
}

export default Iterator;
