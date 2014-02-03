define(['angular','angular-mocks','app'], function(angular, mocks, app) {
  

  describe("transform", function() {
    var transform

    beforeEach(mocks.module("Brownbag"))

    beforeEach(mocks.inject(function(_transform_) {
      transform = _transform_
    }))

    it("should handle empty strings, undefineds and nulls", function() {
      var a = transform.run("lowercase", "")
        , b = transform.run("lowercase", undefined)
        , c = transform.run("lowercase", null)
      expect(a).toBe("")
      expect(b).toBe("")
      expect(c).toBe("")
    })

    it("should make the thing lowercase", function() {
      var a = transform.run("lowercase", "Hello World")
      expect(a).toBe("hello world")
    })

    it("should make the thing uppercase", function() {
      var a = transform.run("uppercase", "Hello World")
      expect(a).toBe("HELLO WORLD")
    })

    it("should make the thing ermahgerd", function() {
      var a = transform.run("ermahgerd", "Hello World")
      expect(a).toBe("HERLER WERLD")
    })

    it("should make the thing doge", function() {
      var a = transform.run("doge", "Hello World", false)
      expect(a).toBe("much hello\nsuch world\nwow")
    })

    it("should doge despite weird spacing", function() {
      var a = transform.run("doge", "Hello        World   sup", false)
      expect(a).toBe("much hello\nsuch world\nso sup\nwow")
    })

    it("should just say \"wow\" if you doge with no text", function() {
      var a = transform.run("doge", "")
        , b = transform.run("doge", "      ")
      expect(a).toBe("wow")
      expect(b).toBe("wow")
    })
  })
})