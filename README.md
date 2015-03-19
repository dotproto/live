# live

**live** is a quick starting point for prototyping UI and webby things. Pairs quite nicely with [Frameless](http://stakes.github.io/Frameless/).


# How to use

Assuming you already have node and gulp installed:

```bash
git clone git@github.com:svincent/live.git
cd live
npm install
gulp
```


# Questions

**Q: What's with the checkerboard?**

A: I wanted a simple way to get a feel for finger size on mobile devices. Each square in the pattern is 45x45 pixels. This is a "round" average of the touch target size recommendations of several OS providers.

* [Apple recommends](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Controls.html) 44x44 points
* [Microsoft recommends](https://msdn.microsoft.com/en-us/library/windows/apps/hh465415.aspx) 40x40 to 50x50 pixels (7x7 to 9x9 mm)
* [Google recommends](http://developer.android.com/design/patterns/accessibility.html) 48x48 dp


# Resources
* Google's [Pixel-Perfect UI in the WebView](https://developer.chrome.com/multidevice/webview/pixelperfect)
* W3C's [Mobile Web Application Best Practices](http://www.w3.org/TR/mwabp/)
