import { Box, Divider, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NavStyle from './navbar.module.css'
function Brands() {
    const [brandnames , setBrandnames] = useState(["111SKIN","3LAB"])
    const [brandkeys , setBrandkeys] = useState([])
    console.log(brandnames)
    const brands = {
        "0-9" : ["111SKIN","3LAB"],
        "A":["Act + Acre","Aesop","AHAVA","Alchimie Forever","Algenist","Alo","Alpha-H","Alterna","Alurx","Ameliorate","Angela Caglia","Anna Sui","APIVITA","ARCONA","Aromatherapy Associates","Arquiste Parfumeur","Aurelia London","Avant Skincare","Avene"], 
        "B":["b.tan","Babo Botanicals","BABOR","Baby Quasar","BAWDY","Beautyblender","Beauty ORA","BeautyStat","Bioderma","BIOEFFECT","Bioelements","Biopelle","BlondMe","Bloom and Blossom","Bloomeffects","Boots No7","Borghese","Boucleme","BYNACHT","By Terry"],
        "C":["C.O. Bigelow","Cannuka","Carrière Frères","Caudalie","Cellex-C","Chantecaille","CHI","Chris Collins","Christophe Robin","ClarityRX","Clinicians Complex","Codex Beauty","Colorescience","Comfort Zone","Conair","Confessions of a Rebel","COSMEDIX","COSRX","Covergirl","Cowshed","Curlsmith"],
        "D":["Daily Concepts","Daniel Sandler","David Mallett","DECIEM","Deck of Scarlet","Decorté","Dermablend","DERMAdoctor","Dermalogica","Dermelect Cosmeceuticals","DHC","Dime Beauty","Dr. Brandt","Dr. Hauschka","Dr. Loretta","Dr. PAWPAW","Dr. Roebuck's","Dr. Zenovia","Dr Dennis Gross Skincare","Dr Kerklaan Therapeutics","Dunhill"],
        "E":["EcoTools","Elemis","Elizabeth Arden","Ellis Brooklyn","EltaMD","Embryolisse","Emepelle","Epionce","Erbaviva","Erborian","Erno Laszlo","ESPA","Estée Lauder","Eve Lom","Eve Rebirth","evo","Exuviance","Eyeko"],
        "F":["Face Halo","FEKKAI","Fillerina","Filorga","First Aid Beauty","FOREO","Foria","Freeman","Fur"],
        "G":["Gallinée","ghd","GK Hair","Glasshouse Fragrances","GLO Science","Glowbiotics MD","Glytone","Goldfaden MD","Goli","Grande Cosmetics","Grow Gorgeous","Grown Alchemist","Gryph & IvyRose"],
        "H":["Hear Me Raw","hello","Hermetica","Hero Cosmetics","High Beauty","Hollywood Browzer Beauty","Hush & Hush","HydroPeptide"],
        "I":["Illamasqua","Iluminage","IMAGE Skincare","Imbue","INIKA Organic","Intraceuticals","Invisibobble","iS Clinical"],
        "J":["Jan Marini","Jenny Patinkin","Joanna Vargas","Juice Beauty","Juliette Has a Gun","Jurlique"],
        "K":["Kat Burki","Kayo","Kenneth Cole","Kerstin Florian","Kevyn Aucoin","KLORANE","Kneipp","Knesko","Koh Gen Do","KORRES"],
        "L":["L'Occitane","Lancer Skincare","La Roche-Posay","Lee Stafford","LELO","Liquides Imaginaires","LOOKFANTASTIC","LuLuLun Face Masks","Lumene","Lumira"],
        "M":["Makeup Revolution","Mama Mio","Margaret Dabbs","Marvis","MDSolarSciences","Me","Medik8","MenScience","Merci Handy","Michael Todd Beauty","Mila Moursi","MineTan","Mio Skincare","Miriam Quevedo","Molton Brown","Murad Skin Care","Myvitamins","MZ Skin"],
        "N":["Nassif MD","Natura","Natura Bissé","Naturopathica","NCLA Beauty","Neocutis","Neogen","NEOM","NEOSTRATA","NEST New York","NIOD","Nion","Nioxin","No7","NUDESTIX","NuFACE","Nurse Jamie","NUXE"],
        "O":["Obagi Clinical","Obagi Medical","Olaplex","Omorovicza","Ordinary","Oscar de la Renta","Osmosis +Beauty","OUTRÉ"],
        "P":["Pai","Patchology","PCA Skin","Perricone MD","Pestle & Mortar","Peter Thomas Roth","Philip B.","Philip Kingsley","PHYTO","Pipette","PIXI","PMD","PRAI","PRIORI Skincare","PÜR"],
        "Q":["Q+A","Quasar MD"],
        "R":["Rahua","RAINCRY","Real Techniques","ReFa","REN Clean Skincare","René Furterer","Replenix","Revision Skincare","RevitaLash Cosmetics","RéVive","Revolution Skincare","Rituals","RMS Beauty","Rodial"],
        "S":["Sally Hansen","Sebastian","SEEN","SEKKISEI","Sensica","Sensori+","SENTÉ","Sigma","SILKE London","SiO Beauty","Sjal","Skin&Co Roma","Skin Authority","SkinCeuticals","SKIN GYM","SkinMedica","Skin Regimen","Skinstitut","Skyn Iceland","Slip","Smile Makers","Snow Fox","Soap And Glory","Soji Health","Soon Skincare","Spa Sciences","St. Tropez","STARSKIN","Stila Cosmetics","StriVectin","Sulwhasoo","Sundari","Sunday Riley","Supersmile","SYS"],
        "T":["T3","Talika","Tangle Teezer","The Beauty Chef","The Light Salon","The Ordinary Skincare","The Organic Pharmacy","The Perfect V","The Vintage Cosmetic Company","this works","TONYMOLY","Tracie Martyn","Trilogy","TriPollar","Trophy Skin","Trudon"],
        "U":["U Beauty","UNITE Hair","Uriage"],
        "V":["Vapour","VERONIQUE GABAI","Verso","Vichy","Vince Camuto","VIRTUE","Volition Beauty"],
        "W":["Wander Beauty","Weleda","Wet Brush","White Hot"],
        "Y":["Yon-Ka Paris Skincare"],
        "Z" : ["Zelens","Zutta"]
    }
    function setkeys(){
       let arr = []
        for(let keys in brands){
            arr.push(keys)
            console.log(keys)
        }
        setBrandkeys(arr)
    }
    useEffect(()=>{
        setkeys()
    },[])
    
  return (
    <Popover trigger="hover">
  <PopoverTrigger>
    <Box className={NavStyle.blackHover} p="7px">
        Brands
    </Box>
  </PopoverTrigger>
  <PopoverContent  w="100vw">
    <PopoverArrow/>
    <PopoverHeader>
            <Box h="0.5px" bg="black" w="95%" m="auto" ></Box>
        <Flex mx="50px" alignItems='center' justifyContent='space-between' >
            <Flex gap="1px">
               {brandkeys.map((e)=><Box className={NavStyle.greyHover} p="10px" onMouseOver={()=>{setBrandnames(brands[e])}}>{e}</Box>)}
            </Flex>
            <Box>
                View All Brands
            </Box>
        </Flex>
            <Box h="1px"  bg="black" w="95%" m="auto" ></Box>
    </PopoverHeader>
    <PopoverBody>
        <SimpleGrid mx="50px" columns={5}>
            {brandnames.map((e)=>{
              return <Box className={NavStyle.greyHover}>{e}</Box>
            })}
        </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default Brands
