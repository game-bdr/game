let questions = [
    {
        "name": "Avastin",
        "type": 0,
        "text": `In 2004, Avastin became the first anti-angiogenic therapy made widely available for the treatment of 
    patients with an advanced cancer. Today, Avastin is approved in Europe for the treatment of advanced stages of 
    breast, colorectal, non-small cell lung, kidney, ovarian and cervical cancers.`,
        "img": "avastin.png"
    },
    {
        "name": "Herceptin",
        "type": 0,
        "text": `Herceptin was the first HER2-targeted therapy for breast cancer. Herceptin is a monoclonal antibody that 
    binds to HER2 receptors present on the surface of HER2-positive tumour cells, blocking them from receiving growth 
    signals and flagging them for destruction by the immune system.`,
        "img": "herceptin.png"
    },
    {
        "name": "Tamiflu",
        "type": 0,
        "text": "Tamiflu is a medicine for the prevention and treatment of influenza.",
        "img": "tamiflu.png"
    },
    {
        "name": "Pegasys",
        "type": 0,
        "text": "Pegasys is used in the treatment of patients with viral hepatitis.",
        "img": "pegasys.png"
    },
    {
        "name": "Ocrevus",
        "type": 0,
        "text": `Ocrevus is a medicine that represents a different scientific approach to treating multiple sclerosis.`,
        "img": "ocrevus.png"
    },
    {
        "name": "MabThera",
        "type": 0,
        "text": `MabThera is the first therapeutic monoclonal antibody to target cells that have the CD20 marker on 
        their surface. These cells are central to many blood cancers, including common forms of lymphoma and leukaemia. 
        MabThera attacks these cells both directly and together with the body’s immune system!`,
        "img": "MabThera.png"
    },
    {
        "name": "Gazyva",
        "type": 0,
        "text": `Gazyva is the first type II, glycoengineered antibody to target cells that have the CD20 marker on 
        their surface. These cells are central to many blood cancers, including common forms of lymphoma and leukemia. 
        Gazyva attacks these cells both directly and together with the body’s immune system!`,
        "img": "Gazyva.png"
    },


    {
        "name": "Presto",
        "type": 1,
        "text": `Presto is an open source Distributed SQL Query Engine for running Interactive Analytic Queries against 
        data sources of all sizes ranging from Gigabytes to Petabytes. 
        Presto allows querying data in Hive, Cassandra, Relational Databases and Proprietary Data Stores.`,
        "img": "presto.png"
    },
    {
        "name": "Tableau",
        "type": 1,
        "text": `Tableau is a Powerful and Fastest growing Data Visualization tool used in the Business Intelligence 
        Industry. Data analysis is very fast with Tableau and the Visualizations created are in the form of Dashboards 
        and Worksheets.`,
        "img": "tableau.png"
    },
    {
        "name": "Kafka",
        "type": 1,
        "text": `Apache Kafka is a Distributed Streaming platform. A streaming platform has Three Key Capabilities that 
        are as follows: Publisher Subscriber Consumer This is similar to a Message Queue or an Enterprise Messaging System.`,
        "img": "Kafka.png"
    },
    {
        "name": "Knime",
        "type": 1,
        "text": `KNIME allows users to visually create Data Flows, Selectively execute some or All Analysis steps, and 
        Inspect the Results, Models, and Interactive views. KNIME is written in Java and based on Eclipse and makes use 
        of its Extension mechanism to add Plugins providing Additional Functionality.`,
        "img": "KNIME.png"
    },
    {
        "name": "Kubernetes",
        "type": 1,
        "text": `Kubernetes is a Vendor-Agnostic Cluster and Container Management tool, Open Sourced by Google in 2014. 
        It provides a platform for Automation, Deployment, Scaling, and Operations of Application Containers across Clusters of Hosts.`,
        "img": "Kubernetes.png"
    },
    {
        "name": "Spark",
        "type": 1,
        "text": `Spark provides In-Memory Computing capabilities to deliver Speed, a Generalized Execution Model to 
        support a wide variety of applications, and Java, Scala, and Python APIs for ease of development.`,
        "img": "spark.png"
    },
    {
        "name": "Hadoop",
        "type": 1,
        "text": `Hadoop Framework was designed to store and process data in a Distributed Data Processing Environment 
        with commodity hardware with a simple programming model. It can Store and Analyse the data present in different 
        machines with High Speeds and Low Costs.`,
        "img": "hadoop.png"
    },

];

let result = 0;
let qNum = 0;
let itemSelected = [];
let i;

function selectNum() {
    i = Math.floor(Math.random() * questions.length);
    if (!itemSelected.includes(i) && itemSelected.length < questions.length) {
        itemSelected.push(i);
        return true;
    }
    if (itemSelected.length >= questions.length) {
        return false;
    }
    selectNum();
    return true;
}

function startGame() {
    let res = selectNum();
    if (res) {
        document.getElementById('demo').innerHTML = '<h1>' + questions[i].name + '</h1><br/>' +
            '<p>Is it <b>BigData Technology</b> or <b>Roche Product</b>?</p><br/>' +
            '<div class="row justify-content-around mb-3">' +
            '<button class="btn btn-info btn-md sel" tag="product" onclick="checkAnswer(0,' + i + ',' + questions[i].type + ')">Roche Product</button>' +
            '<button class="btn btn-info btn-md sel" tag="bigdata" onclick="checkAnswer(1,' + i + ',' + questions[i].type + ')">BigData</button>' +
            '</div>';
    } else {
        showResult();
    }
}

function checkAnswer(x, i, p) {
    qNum++;
    let next = 'Next Question';
    let finish = 'See your Result';
    let correctAnswer = 'No, ';
    if (p === x) {
        correctAnswer = 'Yes, ';
        result++;
    }
    let button =
        qNum === 10 ?
            '<button class="btn btn-info btn-md mb-3" onclick="showResult();">' + finish + '</button>' :
            '<div class="row justify-content-around mb-3">' +
            '<button class="btn btn-info btn-md mb-3" onclick="showResult();">' + finish + '</button>' +
            '<button class="btn btn-success btn-md mb-3" onclick="startGame()">' + next + '</button>' +
            '</div>';

    let type = questions[i].type === 0 ? 'Roche Product' : 'BigData Technology';
    document.getElementById('demo').innerHTML =
        '<h3>' + correctAnswer + '<b>' + questions[i].name + '</b> is <br/><b>' + type + '</b></h3><br/>' +
        '<img src="img/' + questions[i].img + '" style="max-width:250px; max-height:250px"/>' +
        '<p class="description">' + questions[i].text + '</p><br/>' + button;
}

function showResult() {
    document.getElementById('demo').innerHTML =
        '<h2><b>Thank you for playing the game</b></h2><br/>' +
        '<p><b>You answered ' + result + ' correct question(s) from ' + qNum + ' question(s):</b></p><br/>' +
        '<p style="font-size: 18px"><b>your score is: ' + parseInt((result / qNum) * 100) + ' from 100</b></p><br/><br/>' +
        '<button class="btn btn-success btn-lg" onclick="location.reload(); ">Play again!</button>'
}
 