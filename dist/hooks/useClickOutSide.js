import { useEffect } from "react";
var useClickOutSide = function (ref, handle) {
    useEffect(function () {
        var listener = function (e) {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handle();
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener);
        };
    }, [ref, handle]);
};
export default useClickOutSide;
