function spinalCase(str) {
  if (!/\s/g.test(str) && !/_/g.test(str)) {
    return str.replace(/[A-Z]/g, function(all, t) {
      if (t === 0) {
        return all.toLowerCase();
      } else {
        return '-' + all.toLowerCase();
      }
    });
  } else {
    str = str.replace(/[\s_]/g, '-');
    return str.replace(/[A-Z]/g, function(all, t) {
      return all.toLowerCase();
    });
  }
}
spinalCase("This Is Spinal Tap")
