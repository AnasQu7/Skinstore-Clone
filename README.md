# -organic-horn-8005
Team lead - fw19_0524 - Mohd Anas Quraishi
member-1 - fw19_0603 - Lokesh Ahire
member-2 - fw19_1038 - Sourav Bandyopadhyay
member-3 - fw20_1057 - Abhishek Kumar Amber
member-4 - fw20_1137 - Vivek Belwal



BRANDS 
{ brand: 'nyx' }
{ brand: 'rejuva minerals' 
{ brand: 'stila' }
{ brand: 'deciem' }
{ brand: 'marienatie' }
{ brand: 'clinique' }
{ brand: 'dior' }
{ brand: 'sally b\'s skin yummies' }
{ brand: 'w3llpeople' }
{ brand: 'mineral fusion' }
{ brand: 'marcelle' }
{ brand: 'iman' }
{ brand: 'maia\'s mineral galaxy' }
{ brand: 'colourpop' } }
{ brand: 'glossier' }
{ brand: 'penny lane organics' }
{ brand: 'coastal classic creation' 
{ brand: 'lotus cosmetics usa' }
{ brand: 'alva' }
 { brand: 'smashbox' } }
 { brand: 'boosh' } }
 { brand: 'zorah biocosmetiques' } }
 { brand: 'SkinCeuticals' } }
 { brand: 'benefit' } }
 { brand: 'c\'est moi' } }
 { brand: 'nudus' } }
 { brand: 'fenty' } }
 
 PRODUCT TYPES
 { product_type: 'eyebrow' } }
 { product_type: 'eyeliner' } }
 { product_type: 'foundation' } }
 { product_type: 'eyeshadow' } }
 { product_type: 'lipstick' } }
 { product_type: 'mascara' } }
 { product_type: 'bronzer' } }
 { product_type: 'blush' } }
 { product_type: 'nail_polish' } }
 { product_type: null } }
 { product_type: 'lip_liner' } }


Fetch Requests

Fetch Product Type : http://localhost:8080/product?type=(*Product_Type)

Filter Product Data By Brands :  http://localhost:8080/product?type=(*Product_Type)&brand=(*BrandName)

Sort Data By rating : Ascending Order : http://localhost:8080/product?type=(*Product_Type)&rating="asc"

                    : Descending Order : http://localhost:8080/product?type=(*Product_Type)&rating="des"
                    
                    
Sort Data By review : Ascending Order : http://localhost:8080/product?type=(*Product_Type)&review="asc"

                    : Descending Order : http://localhost:8080/product?type=(*Product_Type)&review="des"
                    
                    
Sort Data By price : Ascending Order : http://localhost:8080/product?type=(*Product_Type)&price="asc"

                    : Descending Order : http://localhost:8080/product?type=(*Product_Type)&price="des"    
                    
 
 Sort Data By quant : Ascending Order : http://localhost:8080/product?type=(*Product_Type)&quant="asc"
 
                    : Descending Order : http://localhost:8080/product?type=(*Product_Type)&quant="des"
   

Product Details Page Request :  http://localhost:8080/product/(ID of Product)
                    
