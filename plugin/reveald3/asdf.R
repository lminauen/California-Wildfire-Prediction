library(networkD3)
data(MisLinks, MisNodes)
head(MisLinks, 3)

head(MisNodes, 3)

asdf = forceNetwork(Links = MisLinks, Nodes = MisNodes, Source = "source",
             Target = "target", Value = "value", NodeID = "name",
             Group = "group", opacity = 0.9, Nodesize = 3, 
             linkDistance = 100, fontSize = 20)

saveNetwork(asdf, 'asdf.html', selfcontained = TRUE)
