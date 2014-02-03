define(function() {
  var transformService = function() {
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/gm, '');
      };
    }

    return {
      run: function(type) {
        if(!this.fn[type]) throw "Invalid transform selected."
        var args = Array.prototype.slice.call(arguments, 1)
        args[0] = (!!args[0]) ? args[0] : ""
        args[0] = args[0].trim()

        return this.fn[type].apply(this, args)
      },
      fn: {
        lowercase: function(text) {
          return text.toLowerCase()
        },
        uppercase: function(text) {
          return text.toUpperCase()
        },
        ermahgerd: function(text) {
          // lifted shamelessly from https://github.com/hillmanov/node-ermahgerd
          text = text.toUpperCase()
          if (text.length == 1) {
            return text;
          }
          // Handle specific words
          switch (text) {
            case 'AWESOME':
              return 'ERSUM';
            case 'BANANA':
              return 'BERNERNER';
            case 'BAYOU':
              return 'BERU';
            case 'FAVORITE':
            case 'FAVOURITE':
              return 'FRAVRIT';
            case 'GOOSEBUMPS':
              return 'GERSBERMS';
            case 'LONG':
              return 'LERNG';
            case 'MY':
              return 'MAH';
            case 'THE':
              return 'DA';
            case 'THEY':
              return 'DEY';
            case 'WE\'RE':
              return 'WER';
            case 'YOU':
              return 'U';
            case 'YOU\'RE':
              return 'YER';
          }
          var originalWord = text;
          // Drop vowel from end of texts
          text = (originalWord.length > 2) ? text.replace(/[AEIOU]$/, '') : text;
          // Reduce duplicate letters
          text = text.replace(/[^\w\s]|(.)(?=\1)/gi, '');
          // Reduce adjacent vowels to one
          text = text.replace(/[AEIOUY]{2,}/g, 'E');
          // DOWN -> DERN
          text = text.replace(/OW/g, 'ER');
          // PANCAKES -> PERNKERKS
          text = text.replace(/AKES/g, 'ERKS');
          // The meat and potatoes: replace vowels with ER
          text = text.replace(/[AEIOUY]/g, 'ER');
          // OH -> ER
          text = text.replace(/ERH/g, 'ER');
          // MY -> MAH
          text = text.replace(/MER/g, 'MAH');
          // FALLING -> FALERNG -> FERLIN
          text = text.replace('ERNG', 'IN');
          // POOPED -> PERPERD -> PERPED
          text = text.replace('ERPERD', 'ERPED');
          // MEME -> MAHM -> MERM
          text = text.replace('MAHM', 'MERM');
          // Keep Y as first character
          // YES -> ERS -> YERS
          text = (originalWord.charAt(0) == 'Y') ? text = 'Y' + text : text;
          // Reduce duplicate letters
          text = text.replace(/[^\w\s]|(.)(?=\1)/gi, '');
          return text
        },
        doge: function(text, indent) {
          if(typeof indent === "undefined") {
            indent = true
          }

          var words = (text.trim().length) ? text.split(/[\s]+/) : []
            , max = 10
            , dogery = ["much", "such", "so"]
            , result = []
            , rand = 0
            , current = []

          for(i = 0; i < words.length && i < dogery.length; i++) {
            current = []
            if(indent) {
              rand = Math.floor(Math.random() * 10)
              for(j = 0; j < rand; j++) current.push("")
            }
            current.push(dogery[i])
            current.push(words[i])
            result.push(current.join(" "))
          }

          result.push("wow")

          return result.join("\n").toLowerCase()
        }
      }
    }
  }

  return transformService
})