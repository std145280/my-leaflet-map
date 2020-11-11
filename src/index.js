var myPosition;

const geojsonFeature = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.738708496093746, 37.97451499202459]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.766174316406246, 38.08052761936274]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.812866210937496, 37.89219554724437]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.1092529296875, 35.29943548054545]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.9119873046875, 37.861844098370945]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.982177734375, 36.266421331439375]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.806640624999996, 37.73162487017297]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.015625, 38.28131307922966]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.0540771484375, 39.198205348894795]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.3958740234375, 38.543869175876154]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.3466796875, 39.55064761909318]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.0223388671875, 39.6437675734185]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.500244140625, 37.75768707689704]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.807861328125, 38.229550455326134]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.159423828125, 37.112145754751516]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.6153564453125, 36.91915611148194]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.6373291015625, 37.66208079655377]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.269287109374996, 37.46613860234406]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.972412109375, 40.693134153308065]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.686767578125, 40.64730356252251]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.038330078125, 40.613952441166596]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.741943359375, 39.5866406233146]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.510742187499996, 41.10005163093046]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.510742187499996, 39.985538414809746]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.169921875, 41.11453808726831]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.96917724609375, 41.1290213474951]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.4278564453125, 41.10212132036491]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.87005615234375, 40.871987756697415]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.54296875, 41.481833430076065]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.7137451171875, 40.75453936473234]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.2518310546875, 37.607704112428394]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.389404296875, 37.083666782415534]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.24884033203125, 36.8708321556463]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.17742919921875, 35.52104976129943]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.6695556640625, 35.15809124619013]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.73822021484375, 35.03224538129597]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.4720458984375, 35.33977430038646]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.9776611328125, 35.48527461007853]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.60687255859375, 35.45395828344931]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.521484375, 35.209721645221386]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.51922607421875, 36.785091795976946]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.6705322265625, 37.501010429493284]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.4508056640625, 37.65120864327176]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.225341796875, 38.13887716726548]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.11822509765625, 38.01564013749379]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.8245849609375, 37.779398571318765]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.0657958984375, 36.542742833547834]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.14544677734375, 37.37015718405753]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.38165283203125, 37.507547084964116]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.9447021484375, 37.71641767847623]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.9447021484375, 38.14751758025121]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.97491455078125, 38.067554724225275]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.57415771484375, 38.6233081913603]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.65631103515625, 38.47294404791815]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.950439453125, 39.37252570201878]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.81036376953125, 39.29392267616436]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.49176025390625, 40.23550866893913]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.17864990234375, 39.926588421909436]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.953430175781246, 39.35341418045878]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.00860595703125, 39.15136267949029]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.5828857421875, 38.23170796744926]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.684509277343746, 38.77978137804918]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.76141357421875, 38.96795115401593]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.8577880859375, 39.609920257000795]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.99163818359375, 36.25977754677541]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.30474853515625, 35.875698032496665]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.914245605468746, 37.42252593456307]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.370178222656246, 37.448696585910376]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.98516845703125, 36.9806150652861]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.31524658203125, 36.72567681977065]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.38690185546875, 36.69485094156225]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.444335937499996, 36.39696752441776]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.5050048828125, 38.89530825492018]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.705749511718746, 39.11727568585598]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.464050292968746, 39.17478791493289]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.13946533203125, 39.86969567045658]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.143341064453125, 35.12103184646136]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.900268554687496, 35.100810518502904]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.788345336914062, 35.10979839484955]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.681228637695312, 35.31008240129421]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.598831176757812, 35.20298910562885]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.390090942382812, 35.303918565311704]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.51643371582031, 35.01762569539653]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.159378051757812, 35.32913128859357]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.16555786132812, 35.319047142528305]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.114059448242188, 35.33193221705642]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.40931701660156, 35.29943548054545]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.694961547851562, 35.19457264621338]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.703201293945312, 35.17773711131324]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.450759887695312, 35.35601619488275]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.469985961914062, 35.36273602350485]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.498825073242184, 35.35377612773399]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.880599975585938, 35.04405168034866]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.987030029296875, 35.123278350923385]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.155258178710938, 35.22711145535215]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.22760009765625, 35.37225482334385]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.020919799804688, 35.50316417759601]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.014053344726562, 35.49981018711523]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.023666381835938, 35.48751102385376]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.007186889648438, 35.475209977972064]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.134902954101562, 35.20747752737927]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.158248901367188, 35.19850043580171]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.689712524414062, 35.10249582081071]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.75494384765625, 34.99470688991258]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.77691650390625, 35.40248356426937]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.138092041015625, 35.33347268633966]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.13723373413086, 35.32605015518501]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.048095703124996, 36.20882309283712]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.0206298828125, 36.1822249804225]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.7352294921875, 37.74465712069939]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.7249755859375, 37.93553306183642]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.77784729003906, 37.98804554529461]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.768234252929688, 38.035112420612975]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.699569702148438, 37.99832709721297]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.654251098632812, 37.98371603967817]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.46954345703125, 37.91603433975963]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.609619140625, 37.972349871995256]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.933715820312496, 37.847748103485365]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.92547607421875, 37.93661617256258]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.880157470703125, 38.182068998322094]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.137451171875, 38.013476231041935]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.96142578125, 37.84666368454913]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.8900146484375, 38.42347008084991]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.68402099609375, 38.39979663000095]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.71148681640625, 37.38979975341983]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.84332275390625, 37.16688291460905]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.57440185546875, 37.142803443716836]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.68701171875, 37.23032838760387]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.24481201171875, 37.85100126460795]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.49774169921875, 38.14967752360809]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.29998779296875, 39.49556336059472]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.36041259765625, 39.30667511534216]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.5499267578125, 39.208847057702286]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.651306152343746, 40.48038142908172]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.62933349609375, 40.44694705960048]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.40386962890625, 40.60769725157612]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.4395751953125, 40.78678041401646]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.879516601562496, 39.6035720419788]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.79986572265625, 39.614152077002664]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.85205078125, 39.50192146626985]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.72296142578125, 40.04654018618778]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.4510498046875, 39.47648555419739]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.966918945312496, 40.66813955408042]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.862548828125, 40.707710007867334]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.83782958984375, 41.01099329360268]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.90374755859375, 40.643135583312805]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.0218505859375, 40.576412521044425]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.972412109375, 40.622291783092706]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.51348876953125, 41.06692773019345]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.90325927734375, 41.089702205437405]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.9554443359375, 41.11867648776222]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.886779785156246, 41.166249339092]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.4278564453125, 41.0607151401866]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.477294921874996, 41.10832999732831]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.78216552734375, 40.88444793903562]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.914001464843746, 40.85744791303121]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.1204833984375, 40.92388970852945]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.28228759765625, 39.86547951378614]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.84033203125, 40.096983167279575]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.20562744140625, 40.27533480732468]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.42010498046875, 40.386304853509046]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.524475097656246, 40.55554790286311]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.09027099609375, 38.61687046392973]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.148193359374996, 38.94232097947902]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.29925537109375, 38.30502529053749]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.78790283203125, 37.8813571797486]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.169677734375, 37.06175259706909]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.833862304687496, 36.59347887826919]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.73797607421875, 37.38161597475995]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.551895141601562, 37.355967684576406]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.553268432617184, 37.30519097732609]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.833763122558594, 37.15292870103413]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.955299377441406, 37.04312056092881]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.579830169677734, 36.14480610055561]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.589786529541016, 36.1464695411456]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.58566665649414, 36.13759745038377]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.573993682861328, 36.13662700458573]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.63527679443359, 36.11499681282482]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [29.493656158447266, 36.155340628507616]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.125, 36.38591277287651]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.0645751953125, 36.09127994838079]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.773437499999996, 35.94910642813857]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.336730957031246, 36.45884507478879]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.84259033203125, 36.80268739459133]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.00189208984375, 36.91256828285194]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.463806152343746, 37.18220222107978]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.44183349609375, 37.411618795843026]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.3292236328125, 37.622933594900864]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.70001220703125, 36.96525497589677]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.01287841796875, 38.41055825094609]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.421722412109375, 39.63636488778663]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.471160888671875, 39.67865527503048]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.3846435546875, 39.67442740076734]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.635955810546875, 39.97501535728991]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.38739013671875, 39.63848002167708]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.754302978515625, 39.56970506644249]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.765289306640625, 39.536880650643056]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.17889404296875, 39.7642140375156]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.226959228515625, 39.86653357724533]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.994873046875, 39.13432124527173]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.03744506835937, 39.131125517089906]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.166534423828125, 38.99570671505043]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.673675537109375, 35.192889249680945]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.143585205078125, 35.31288398967159]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.50088500976562, 35.348735749472546]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.767547607421875, 37.93444993515032]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.81011962890625, 38.037275688165614]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.69476318359375, 38.04268357749736]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.6260986328125, 37.9593578107923]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.404754638671875, 38.024295124443995]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.324462890625, 38.47939467327645]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.70849609375, 38.12591462924157]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.323242187499996, 39.06184913429154]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.224365234375, 39.308800296002914]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.279541015625, 41.1290213474951]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.224853515625, 41.104190944576466]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.466552734375, 40.94671366508002]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.939453125, 40.43858586704331]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.34619140625, 37.413800350662896]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.927246093749996, 36.06686213257888]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.960693359374996, 38.212288054388175]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.9716796875, 39.172658670429946]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.400146484375, 38.96795115401593]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.390136718749996, 40.002371935876475]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.390136718749996, 39.308800296002914]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.4066162109375, 38.89103282648846]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.43408203125, 38.865374851611634]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.1429443359375, 37.38761749978395]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.0660400390625, 37.339591851359174]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.7364501953125, 38.19502155795575]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.7474365234375, 38.16479533621134]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.654052734375, 38.13455657705411]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.33544921875, 37.792422407988575]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.7479248046875, 39.72831341029745]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.9456787109375, 39.45316112807394]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.576950073242188, 39.88603083007855]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.389495849609375, 39.84966661865516]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [19.527511596679688, 39.7636862226434]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.6597900390625, 38.438530965643004]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.09027099609375, 34.844239868225415]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.32574462890625, 36.86424015502008]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.1746826171875, 36.58465761247169]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.975555419921875, 37.45469273789926]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.95289611816406, 37.47104343647654]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.088165283203125, 37.28375072616894]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.09056854248047, 37.30054838399498]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.099666595458984, 37.2807458716566]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.514816284179688, 37.62837193983584]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.51275634765625, 37.58811876638322]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.44683837890625, 37.57614740608468]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.9769287109375, 37.75062946877242]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.693344116210938, 37.71152898951815]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.700210571289062, 37.78536811469731]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.92474365234375, 37.69577435330179]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.882171630859375, 37.77342854582093]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.129608154296875, 38.36965556758702]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.121368408203125, 38.40948216095896]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.036911010742184, 38.5626633622084]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.344528198242188, 39.308800296002914]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.47430419921875, 39.166802915605444]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.5484619140625, 39.098094501249086]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.931167602539062, 39.161479079034876]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.197586059570312, 39.21044317496811]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.181793212890625, 39.08370518740625]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.572982788085934, 40.6306300839918]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.692459106445312, 40.71863980562837]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.50088500976562, 40.98197154086656]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.429473876953125, 40.97678774053034]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.261444091796875, 41.187955905820026]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.1474609375, 41.70265266117473]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.55670166015625, 41.58668835697237]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.19140625, 41.38711263243966]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.290283203124996, 40.99544751505735]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.067810058593746, 40.80237530523985]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.21063232421875, 40.90417176411099]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.013854980468746, 40.79925662005228]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.39862060546875, 40.78678041401646]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.18438720703125, 40.55763465737646]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.0772705078125, 40.75974059207392]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.67327880859375, 40.67647212850004]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.06329345703125, 40.61812224225511]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.20611572265625, 40.526326510744006]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.807861328125, 40.329795743702064]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.77490234375, 40.300476079749494]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.8023681640625, 39.930800820752765]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.26104736328125, 39.12366825402605]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.09075927734375, 39.310925412127155]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.676025390625, 38.55890491799819]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.79962158203125, 38.37826858136171]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.379150390625, 38.515937313413474]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.16241455078125, 38.846125291387025]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.9454345703125, 38.69408504756833]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [20.96466064453125, 38.67050053364344]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.4617919921875, 38.40410147066251]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.42608642578125, 38.36965556758702]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.7474365234375, 38.25651475638941]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.76116943359375, 38.329807044201374]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.38763427734375, 38.037275688165614]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.608489990234375, 38.07404145941957]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.982025146484375, 37.9799275127006]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.9229736328125, 37.924701076802094]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.3624267578125, 37.58376576718623]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.459930419921875, 37.727280276860036]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.499755859375, 37.97884504049713]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.53408813476562, 38.05674222065296]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.35418701171875, 37.996162679728116]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.829833984375, 36.81808022778526]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [22.4560546875, 36.48314061639213]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.17242431640625, 39.977120098439634]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [24.99114990234375, 39.52099229357195]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.5816650390625, 38.57393751557591]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.59539794921875, 38.55246141354153]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.99639892578125, 37.5249753680482]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.48828125, 37.01571219880126]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.949462890625, 36.93013456125329]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.949462890625, 36.71907231552909]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.191162109375, 36.57142382346277]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.93023681640625, 35.418153265695125]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.58392333984375, 36.230981283477924]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.179931640625, 36.32176422120382]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.131179809570312, 36.21879505532196]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.941665649414062, 36.34057185894721]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.066635131835938, 36.09904766316007]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.219070434570312, 36.4433803110554]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.223876953125, 36.43398948608376]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.211517333984375, 36.43454191900892]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [28.115386962890625, 36.4113363510602]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.816009521484375, 36.25202575042051]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [27.7349853515625, 36.12789245231783]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.099910736083984, 35.20537361057311]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [26.10523223876953, 35.20425149932092]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.70938110351562, 35.19625600786368]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.127105712890625, 35.329691482050734]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.068054199218746, 34.959683560443565]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [25.959320068359375, 38.58467315983427]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [23.477783203124996, 40.93011520598305]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.566162109375, 40.245991504199026]
      }
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [21.8408203125, 37.00255267215955]
      }
    }
  ]
};

//MyIcon Setup
var myIcon = L.icon({
  iconUrl: "images/myIcon.png",

  iconSize: [48, 48], // size of the icon
  iconAnchor: [40, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-15, -20] // point from which the popup should open relative to the iconAnchor
});

// Define some maps options
var mapOptions = {
  center: [37.9844, 23.7281],
  zoom: 12
};

//Create a map and assign it to the map div
var leafletMap = L.map("leafletMapid", mapOptions);

//  Add a baselayer
var mapBoxOutdoors = L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=0XlfM4fhgeaEeNyF9jNG",
  {
    maxZoom: 18,
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
    zoomOffset: -1
  }
).addTo(leafletMap);

//Marker Layer Groups
var allMarkers = L.layerGroup();
var myMarkers = L.layerGroup();
var localMarkers = L.layerGroup();
var importedMarkers = L.layerGroup();

// Add layer options to map
var mapLayers = {
  "My Markers": myMarkers,
  "All Markers": allMarkers,
  "Imported Markers": importedMarkers,
  "Markers Around Me": localMarkers
};
L.control.layers(mapLayers, null).addTo(leafletMap);

const markerText = {
  removableAndEditable: `<h3>Επεξεργάσιμο Αναδυόμενο Παράθυρο</h3> Μπορείτε να αλλάξετε το μήνυμα πατώντας <b>Edit</b> <br>και να το αφαιρέσετε επιλέγοντας  <b>Remove this market</b><br><br>`,
  markerLocationText: "<b>Θέση σημείου:</b><br>",
  myPlace: `<h3>Είστε εδώ!</h3>`
};

//------------------------------------------------------------------------//
//                READS A GEOJson file with data
//------------------------------------------------------------------------//
var geojson = new L.GeoJSON.AJAX("data/places.geojson");
geojson.on("data:loaded", function () {
  geojson.addTo(leafletMap);
  geojson.addTo(allMarkers);
  geojson.addTo(importedMarkers);
});

//------------------------------------------------------------------------//
//                ADDS AN EDITABLE MARKER AT THE PLACE YOU CLICK
//------------------------------------------------------------------------//
leafletMap.on("click", function (e) {
  let markerPosition = e.latlng;

  let marker = L.marker(markerPosition)
    .addTo(leafletMap)
    .bindPopup(
      markerText.removableAndEditable +
        markerText.markerLocationText +
        `
      <b>Latitude:</b> ${markerPosition.lat}<br>
      <b>Longitude:</b> ${markerPosition.lng}`,
      { removable: true, editable: true, maxWidth: 600, autoPan: false }
    )
    .openPopup();
  marker.addTo(allMarkers);
  marker.addTo(myMarkers);
});

//------------------------------------------------------------------------//
//                ADDS AN EDITABLE MARKER AT YOUR PLACE
//------------------------------------------------------------------------//
var addMarkerToMe = document.querySelector("#addMarkerToMe");
addMarkerToMe.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (ex) {
    leafletMap.locate({ setView: true, maxZoom: 15 });
    myPosition = new L.latLng(ex.coords.latitude, ex.coords.longitude);
    let marker = L.marker(myPosition, { icon: myIcon })
      .addTo(leafletMap)
      .bindPopup(
        markerText.myPlace +
          markerText.markerLocationText +
          `
      <b>Latitude:</b> ${myPosition.lat}<br>
      <b>Longitude:</b> ${myPosition.lng}`,
        { removable: true, editable: true, maxWidth: 600, autoPan: false }
      )
      .openPopup();
    marker.addTo(localMarkers);
    marker.addTo(allMarkers);
    marker.addTo(myMarkers);
  });
});

document.addEventListener("removeMarker", (e) => {
  console.log(e);
});
