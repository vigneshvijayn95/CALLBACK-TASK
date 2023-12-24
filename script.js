function printRange(num = 0 , action = () => {}){
    console.log(num)
    action(--num , action)
}

function displayMessage (){
    document.write("    Happy Independece Day")
}    


printRange(document.write(10) ,
           () => printRange(document.write(9),
                () => printRange(document.write(8), 
                    () => printRange(document.write(7),
                         () => printRange(document.write(6),
                              () => printRange(document.write(5),
                                      () => printRange(document.write(4),
                                         () => printRange(document.write(3),
                                                () => printRange(document.write(2)),
                                                      () => printRange(document.write(1),
                                                            
                                                            
                                                          )
                                                        ) 
                                                      )  
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                     ;

                                     
      displayMessage();