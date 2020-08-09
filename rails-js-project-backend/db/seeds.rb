# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mermaid = Word.create(name: "mermaid")
mermaid.valid_words.create([{ name: "admire" }, { name: "dammer" }, { name: "dimmer" }, 
{ name: "maimed" }, { name: "maimer" }, { name: "rammed" }, { name: "rimmed" },  
{ name: "rimmed" }, { name: "aider" }, { name: "aimed" }, { name: "aimer" }, 
{ name: "aired" }, { name: "amide" }, { name: "armed" }, { name: "damme" }, 
{ name: "deair" }, { name: "derma" }, { name: "dimer" }, { name: "diram" }, 
{ name: "dream" }, { name: "irade" }, { name: "madre" }, { name: "maire" }, 
{ name: "mamie" }, { name: "marid" }, { name: "marid" }, { name: "media" }, 
{ name: "mimed" }, { name: "mimer" }, { name: "mired" }, { name: "ramie" }, 
{ name: "redia" }, { name: "rimae" }, { name: "rimed" }, { name: "aide" }, 
{ name: "amid" }, { name: "amie" }, { name: "amir" }, { name: "ared" }, { name: "arid" },
{ name: "dame" }, { name: "dare" }, { name: "dari" }, { name: "dear" }, { name: "derm" },
{ name: "dime" }, { name: "dire" }, { name: "dram" }, { name: "eard" }, { name: "emir" },
{ name: "emma" }, { name: "idea" }, { name: "idem" }, { name: "imam" }, { name: "ired" },
{ name: "made" }, { name: "maid" }, { name: "maim" }, { name: "mair" }, { name: "mard" },
{ name: "mare" }, { name: "marm" }, { name: "mead" }, { name: "meri" }, { name: "mime" },
{ name: "mire" }, { name: "rade" }, { name: "raid" }, { name: "rami" }, { name: "read" },
{ name: "ream" }, { name: "riad" }, { name: "ride" }, { name: "riem" }, { name: "rima" }, 
{ name: "rime" }])

crooked = Word.create(name: "crooked")
crooked.valid_words.create([{ name: "cooked" }, { name: "cooker" }, { name: "corked" }, 
{ name: "docker" }, { name: "recook" }, { name: "redock" }, { name: "rocked" }, 
{ name: "rooked" }, { name: "coder" }, { name: "coked" }, { name: "cooed" }, 
{ name: "cooer" }, { name: "cored" }, { name: "credo" }, { name: "crook" }, 
{ name: "decko" }, { name: "decor" }, { name: "dooce" }, { name: "dreck" }, 
{ name: "drook" }, { name: "ocker" }, { name: "rodeo" }, { name: "roked" },
{ name: "cero" }, { name: "code" }, { name: "coed" }, { name: "coke" }, { name: "cook" },
{ name: "cord" }, { name: "core" }, { name: "cork" }, { name: "cred" }, { name: "deck" },
{ name: "deco" }, { name: "dero" }, { name: "dock" }, { name: "doco" }, { name: "doek" },
{ name: "doer" }, { name: "dook" }, { name: "door" }, { name: "dore" }, { name: "dork" },
{ name: "drek" }, { name: "ecod" }, { name: "kero" }, { name: "kore" }, { name: "koro" },
{ name: "odor" }, { name: "ordo" }, { name: "reck" }, { name: "redo" }, { name: "rock" },
{ name: "rode" }, { name: "roed" }, { name: "roke" }, { name: "rood" }, { name: "rook" }]) 

witches = Word.create(name: "witches")
witches.valid_words.create([{ name: "ethics" }, { name: "itches" }, { name: "switch" }, 
{ name: "swithe" }, { name: "theics" }, { name: "tiches" }, { name: "wechts" }, { name: "whites" }, 
{ name: "wiches" }, { name: "withes" }, { name: "cesti" }, { name: "chest" }, { name: "chews" },
{ name: "chits" }, { name: "cites" }, { name: "ethic" }, { name: "heist" }, { name: "iches" }, 
{ name: "shite" }, { name: "sicht" }, { name: "sieth" }, { name: "sithe" }, { name: "stich" }, 
{ name: "swith" }, { name: "techs" }, { name: "theic" }, { name: "thews" }, { name: "tices" }, 
{ name: "twice" }, { name: "wecht" }, { name: "whets" }, { name: "whist" }, { name: "white" }, 
{ name: "whits" }, { name: "wisht" }, { name: "witch" }, { name: "wites" }, { name: "withe" }, 
{ name: "withs" }, { name: "chew" }, { name: "chis" }, { name: "chit" }, { name: "cist" }, 
{ name: "cite" }, { name: "cits" }, { name: "echt" }, { name: "eish" }, { name: "etch" }, 
{ name: "eths" }, { name: "etic" }, { name: "ewts" }, { name: "hest" }, { name: "hets" }, 
{ name: "hews" }, { name: "hies" }, { name: "hist" }, { name: "hits" }, { name: "ices" }, 
{ name: "ichs" }, { name: "itch" }, { name: "sech" }, { name: "sect" }, { name: "shet" }, 
{ name: "shew" }, { name: "sice" }, { name: "sich" }, { name: "site" }, { name: "sith" }, 
{ name: "stew" }, { name: "stie" }, { name: "tech" }, { name: "tecs" }, { name: "tews" }, 
{ name: "thew" }, { name: "this" }, { name: "tice" }, { name: "tich" }, { name: "tics" }, 
{ name: "ties" }, { name: "west" }, { name: "wets" }, { name: "whet" }, { name: "whit" }, 
{ name: "wice" }, { name: "wich" }, { name: "wise" }, { name: "wish" }, { name: "wist" },
{ name: "wite" }, { name: "with" }, { name: "wits" }])

cheddar = Word.create(name: "cheddar")
cheddar.valid_words.create([{ name: "arched" }, { name: "carded" }, { name: "chared" }, 
{ name: "echard" }, { name: "ached" }, { name: "acred" }, { name: "adder" }, { name: "adred" }, 
{ name: "arced" }, { name: "aredd" }, { name: "cadre" }, { name: "cared" }, { name: "cedar" }, 
{ name: "chard" }, { name: "chare" }, { name: "dared" }, { name: "decad" }, { name: "dread" }, 
{ name: "haded" }, { name: "hared" }, { name: "heard" }, { name: "raced" }, { name: "rache" }, 
{ name: "rahed" }, { name: "reach" }, { name: "readd" }, { name: "aced" }, { name: "acer" }, 
{ name: "ache" }, { name: "acre" }, { name: "ahed" }, { name: "arch" }, { name: "ared" }, 
{ name: "cade" }, { name: "card" }, { name: "care" }, { name: "chad" }, { name: "char" }, 
{ name: "cher" }, { name: "cred" }, { name: "dace" }, { name: "dare" }, { name: "dead" }, 
{ name: "dear" }, { name: "drac" }, { name: "drad" }, { name: "each" }, { name: "eard" }, 
{ name: "ecad" }, { name: "hade" }, { name: "haed" }, { name: "hard" }, { name: "hare" }, 
{ name: "head" }, { name: "hear" }, { name: "herd" }, { name: "race" }, { name: "rach" }, 
{ name: "rade" }, { name: "read" }, { name: "redd" }, { name: "rhea" }])

gesture = Word.create(name: "gesture")
gesture.valid_words.create([{ name: "egrets" }, { name: "greets" }, { name: "gutser" }, 
{ name: "regest" }, { name: "retuse" }, { name: "egers" }, { name: "egest" }, 
{ name: "egret" }, { name: "ester" }, { name: "geest" }, { name: "geres" }, { name: "geste" }, 
{ name: "grees" }, { name: "greet" }, { name: "grese" }, { name: "grues" }, { name: "guest" }, 
{ name: "reest" }, { name: "reges" }, { name: "reset" }, { name: "reuse" }, { name: "segue" }, 
{ name: "serge" }, { name: "steer" }, { name: "stere" }, { name: "sture" }, { name: "surge" }, 
{ name: "teers" }, { name: "tegus" }, { name: "teres" }, { name: "terse" }, { name: "trees" },  
{ name: "trues" }, { name: "trugs" }, { name: "urges" }, { name: "eger" }, { name: "eres" }, 
{ name: "ergs" }, { name: "erst" }, { name: "euge" }, { name: "gees" }, { name: "gere" }, 
{ name: "gers" }, { name: "gert" }, { name: "gest" }, { name: "gets" }, { name: "gree" }, 
{ name: "gues" }, { name: "gurs" }, { name: "gust" }, { name: "guts" }, { name: "rees" }, 
{ name: "regs" }, { name: "rest" }, { name: "rete" }, { name: "rets" }, { name: "rues" }, 
{ name: "rugs" }, { name: "ruse" }, { name: "rust" }, { name: "ruts" },  { name: "seer" }, 
{ name: "sere" }, { name: "suer" }, { name: "suet" }, { name: "sure" }, { name: "teer" }, 
{ name: "tees" }, { name: "tegs" }, { name: "tegu" }, { name: "tree" }, { name: "tres" }, 
{ name: "true" }, { name: "trug" }, { name: "tugs" }, { name: "ures" }, { name: "urge" }, 
{ name: "user" }, { name: "utes" }])

























