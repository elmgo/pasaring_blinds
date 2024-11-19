// @ts-nocheck

export default function throttle(func, wait, options = {}) {
	let timeout = null
	let previous = 0
	const { leading = true, trailing = true } = options

	function later(context, args) {
		previous = leading === false ? 0 : Date.now()
		timeout = null
		func.apply(context, args)
	}

	const throttled = function (...args) {
		const now = Date.now()

		if (!previous && leading === false) {
			previous = now
		}

		const remaining = wait - (now - previous)

		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout)
				timeout = null
			}
			previous = now
			func.apply(this, args)
		} else if (!timeout && trailing !== false) {
			timeout = setTimeout(() => later(this, args), remaining)
		}
	}

	throttled.cancel = function () {
		clearTimeout(timeout)
		timeout = null
		previous = 0
	}

	return throttled
}
