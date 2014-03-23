Block.defineBlock(100,"Block of Redstone",["redstone_block",0],true,5,0); 
Block.setDestroyTime(103,3); 
Block.defineBlock(101,"Redstone Repeater",["repeater_off",0],true,5,0); 
Block.setDestroyTime(113,0); 
Block.defineBlock(102,"Redstone Repeater",["repeater_off",0],true,5,0); 
Block.setDestroyTime(114,0); 
Block.defineBlock(103,"Redstone Repeater",["repeater_on",0],true,5,0); 
Block.setDestroyTime(115,0); 
Block.defineBlock(104,"Sticky Piston",[["piston_top_sticky",0],["piston_side",0],["piston_inner",0],["piston_bottom",0]],true,5,0); 
Block.setDestroyTime(121,0.5); 
Block.defineBlock(105,"Detector Rail",["rail_detector",0],true,5,13); 
Block.setDestroyTime(122,0.2); 
Block.setShape(122,0,0,0,1,1/16,1); 
Block.setRenderLayer(122,2); 
Block.defineBlock(106,"Activator Rail",["rail_activator",0],true,5,13); 
Block.setDestroyTime(123,0.2); 
Block.setShape(123,0,0,0,1,1/16,1); 
Block.setRenderLayer(123,2); 
Block.defineBlock(107,"Golden Rail",["rail_golden",0],true,5,13); 
Block.setDestroyTime(124,0.2); 
Block.setShape(124,0,0,0,1,1/16,1); 
Block.setRenderLayer(124,2); 
Block.defineBlock(108,"Redstone Torch","redstone_torch_off",true,5,13); 
Block.setDestroyTime(129,0.3); 
Block.setLightLevel(129,0); 
Block.setShape(129, 7/16,0,7/16,9/16,10/16,9/16) 
Block.setRenderLayer(129,2); 
Block.defineBlock(109,"Redstone Torch","redstone_torch_on",true,5,13); 
Block.setDestroyTime(130,0.3); 
Block.setLightLevel(130,15); 
Block.setShape(130, 7/16,0,7/16,9/16,10/16,9/16) 
Block.setRenderLayer(130,2); 
Block.defineBlock(110,"Redstone Lamp",["redstone_lamp_off",0],true,5,0); 
Block.setDestroyTime(131,0.5); 
Block.setLightLevel(131,0); 
Block.defineBlock(111,"Redstone Lamp",["redstone_lamp_on",0],true,5,0); 
Block.setDestroyTime(132,0.5); 
Block.setLightLevel(132,15); 
Block.defineBlock(112,"Lever",["lever",0],true,5,13); 
Block.setDestroyTime(133,0.2); 
Block.setShape(133, 7/16,0,7/16,9/16,10/16,9/16) 
Block.setRenderLayer(133,2); 
Block.defineBlock(114,"Redstone Dust Cross",[["redstone_dust_cross_overlay",0],["redstone_dust_cross",0]],true,5,13); 
Block.setDestroyTime(134,0.1); 
Block.setShape(134,0,0,0,1,1/16,1); 
Block.setColor(134, [0x800000,0x900000,0x950000,0x9a0000,0x9F0000,0xa00000,0xa50000,0xaa0000,0xaF0000,0xb00000,0xb50000,0xba0000,0xbF0000,0xc00000,0xc50000,0xc50000,0xca0000]) 
Block.setLightLevel(134,3) 
Block.setRenderLayer(134,2) 
ModPE.setItem(115,"comparator",0,"Comparator"); 
