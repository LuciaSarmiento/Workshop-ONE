# Metaverso en OCI

Este proyecto tiene como objetivo el demostrar como se puede tener un propio metaverso en la capa gratuita de [Oracle Cloud Infrastructure](https://www.oracle.com/lad/cloud/?source=:ad:pas:go:dg:a_lad:71700000084109784-58700007131906662-p73965233666:RC_WWMK220512P00038C0001:MainAd&gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jcOjEMVw37CqHwhCcq_AJmnqqxAyMyf30lCp3l8cYb_-mCkvydxTQUaApA2EALw_wcB&gclsrc=aw.ds) (OCI)

En los siguientes puntos se explicara :
- [Requisitos previos](#requisitos-previos)
- [Configurar cuenta OCI](#configurar-cuenta-oci)
   - [Crear cuenta](#crear-cuenta)
   - [Configurar instancia](#configurar-instancia)
   - [Configurar VCN](#configurar-vcn)
   - [Configurar Políticas](#configurar-politicas)
   - [Crear Servidor](#crear-servidor)
 - [Conectarse a la instancia](#conectarse-a-la-instancia)
 - [Configurar servidor NGINX](#configurar-servidor-nginx)
 - [Despliegue del proyecto en el servidor](#despliegue-del-proyecto-en-el-servidor)
 - [Probar](#probar)
 - [Anexos](#anexos)

## Requisitos previos
Los requisitos de conocimientos solamente son un poco de HTML, muy poco de JS, CLI y conocimientos básicos de servicios web. Esta solución se basa en una herramienta sencilla pero muy poderosa que se llama [Aframe](https://aframe.io/), un framework JS para WebXR.
También si se cuenta con conocimiento en modelado 3D con herramientas como Blender, es un plus.
Para facilidad de configuración y conexión a la instancia por SSH, descargar la aplicación [MobaXterm](https://mobaxterm.mobatek.net/).
Para correr el proyecto solamente se necesita un servidor web, lo cual es GRATUITO en OCI.

## Configurar cuenta OCI

### Crear cuenta

 1. Dirigirse a [https://www.oracle.com/cloud/sign-in.html](https://www.oracle.com/cloud/sign-in.html)
 2. Si no se tiene una cuenta, pulsar el botón Sign Up. Si ya se tiene una cuenta ingresar como de costumbre y saltar al paso ####

![](https://lh6.googleusercontent.com/0mhgLmH3EMrVyAk2qurT39LPymTxd6L-NVd7LjtFyv3gm3aLsAajcKX4SwX_CzHRgX0-pGRhjy9hgQdhjs96d_GJUant6DfMMgp_arRHCbd-eyKL_cpWG1VYfdZZA_ERqmv_9jJqU7YHnVlMfDHPQRKUNaXIg3fyobsdeRHsjWO-BYG2KT1rkdrrIWJ9Rg)

 3. Completar el formulario y el hCaptcha, luego pulsar el botón “Verify my Email”, se enviara un correo al email para que verificar el correo electrónico suministrado.

![](https://lh3.googleusercontent.com/7ubP-l7-4aeBmYsAQykIkj1EtIKp7dh-W4Ya4rbPtQPg6EdxskRCnPwNfP_EwDKAZpOiHD4Q-BrrKGBi41Q6IbfGQ5lsSzLvhsIqA_mOrGJhzksK-3Bjaq7QGf5R7asEhrJcGx-8K-ndOkjS1uSA_GklfgIunAoxCRB1rMOGNnrF3qt_fuIvzG76HhMt3w)
 4. El correo que será parecido a este:

![](https://lh5.googleusercontent.com/TVnKj5ImEHRkC9JJCiQpduKJWdOWaD94w8utSB58JpobKnk-PB7WbXhSBnPHOkNWVW25I552rol64qygDB7Pe_185nLYhDTKZ0rILfL-fcAiwJPSzCt0C7kcaqREW9hy1f6Is0rQIipcbmJmfimvr6cayfi6pyA0WtEHmIRqmeHKPz_mi-tX_VMDSv1dEA)

Pulsar el botón “Verify email” esto abrirá una nueva pestaña.
 5. 
Se te mostrará el formulario anterior y además de nuevos campos para que llenar según cada persona o empresa.
El "Cloud Account Name" es requerido para ingresar, no lo olvide.

![](https://lh3.googleusercontent.com/gyCZ7T8zqTC0XvFZUmiI1WXnQehlOL8F9W5QGhSEyxKCw0Eu2XIfPFq_IcJUxsgFUbpRnPDjVGc2xmv-dHVCiPNKQQ1XYHtANGCNkOdYJGM32Oj_7u69jtHLsv0lFn9SAeGglbF0znVvRDUSPjB4skQIo3JSZsBdzc_S8QQ7puGOwQ5O8vUcsINJhUVQow)

Pulsar el botón “Continue”, se mostrará un nuevo formulario
 6. Como el paso anterior, llenar la información solicitada en el formulario y pulsar “Continue”

![](https://lh4.googleusercontent.com/QXL2VGHAc5m5wRjnAA4aWQbYjKHpCdCuxXYZ0zWYrkbnwLXcR9PvsHte3kgoqKAe__eWuSPgnIXQje7a_IHgPtDWBZb7gyI8_JK9bD7r784S5oatT25VLUK7m6dch1Hi1J75FKpd_ZK8hnnuCEXXknYyhYEA2dH3bwkKBhWvKMErkZJEIA5l6Ai97XCFBg)
 7. Se debe agregar un método de pago “Tarjeta de Crédito hábil”, a esta se le descontará 1 USD y luego se reversará el pago. Oracle nunca cobrará al menos que se actualice la cuenta a premium.

![](https://lh6.googleusercontent.com/9gWvPyD06bI6YyPL3d5GWAJ8amub246bDEMmDDfg0hkZb8FJgMf9lj51jeFc50K5X35xhSicz2nc6CBsQ543Pp78J6i1LLu_fKtyMB5hkJVxrxAxRpmfnliPFkH_L3JhaHqZlYF3FOJhDytmm1Xo22rHHDtejQCg1nVYslPYCGU4U8XZth0sz0aE9-8HsA)

![](https://lh6.googleusercontent.com/UVJ84drONaPU4xkL3bX5R_aa-4gGAnAr64BANRLkjMORLTcvtimye5IzT3Y7Sy8UBYCBVyWDDHnIctFWV-Nrk_fKfwRc_EA9o2WIRgzqoPVXDwSw9MgTDTLkmb38NGcVulyK4MgzjRIKVJ6eP3Fjdn1E3Si8XFzmvqk55Y--8Fu5SLRt9jN3de5oUlrbJw)
 8. Aceptar los términos y condiciones al pulsar el botón de Agreement. Luego pulsar “Start my free trial” Recordar que siempre será gratis al menos que actualice la cuenta.

![](https://lh6.googleusercontent.com/EEmcpuq_9w88uLc3cgPUsAevF4Ax50G_8uW8ceX41cwlPWTB0G-NSYaoRe3gETwelld96cpGk-mjCIny4DP4gMj9ZFPAXMrQgDdhiSbb1V4gFFqEjOKauYIVl9tSdEeUyOa64U-MwBTt-WPLkDEvn8jsru1WYsplBSpYU_HPHwPENhFgeS5HxPAkGV4izw)
 

 9. Se demora en cargar de unos 10 a 15 minutos, luego puede acceder de nuevo a [https://www.oracle.com/cloud/sign-in.html](https://www.oracle.com/cloud/sign-in.html) e ingresar con el Cloud Account Name y la contraseña suministrada.

![](https://lh4.googleusercontent.com/08Odg6nHktif6Wzntd9ibSzjVq_hAh779llmAktO83RmPLg34VDC_gy6QtECzPwUeROOQmXkS2QbxAZGw5UtqCq_E0qgIXM5-xOzTrHARDxwI3XJOnYmL_6NsKUYgXjUgFw9QVCJ4G1wvJfZsvy0o0vyb5x-V7OJwCLayvzcplqK6DuM1chuhLGvSki3Wg)

Una vez ingresado en el dashboard, sigues los siguientes paso para la correcta configuración de la VCN, la instancia y el servidor.
![](https://lh3.googleusercontent.com/kgCBpkPLJhRZdIjWidl84BFoYXWN-F3zmTczBpqtK7aDly-i6Uci7fEzVHWnNmPYwbyEhAXtEGxe5QMUDzdpPY4kmAlZIFEQQ_jLNojfltogwx3Hyjof377gUNVDf1O0jlPhkmZfCDI9oWosZuiGD_XPLeHNazrO8M5uoMIeHrTYalnJpAxlB8Sp-T19RA)

### Configurar VCN
La configuración de la VCN se realiza de la siguiente manera:

 1. Pulsar el botón de navegación “hamburguesa”, luego pulsar “Networking” y pulsar “Virtual Cloud Networks”![](https://lh3.googleusercontent.com/f8h0x_KmFdx5kwJaQdHxrVpPvJThVXX_AlPD85QldsbSUYdOSF4an3bYIwN_O0Tecu_fdD2qB10lQxfm4IolRvckpEKBO1N50sIZcivOEj826DWrIUYtN68J3LlfJ6rFKsJE1eMVarjzmjPvIiZQcAcaIomKrqRJkX8wUkSZ_rZKOg2faJFdJeN0D9K6NA)
 2. Pulsar en “Start VCN Wizard” y escoger la opción “Create VCN with Internet Connectivity”

![](https://lh6.googleusercontent.com/QcMdj-wnosxcQe0-iWxGJq1oa2gROTNicnLPt79iSuvtIYYVjvTkKoxsZeWfA0yZI7j0K5leRwf1AME7axVSmJJqGXMh19ewMNcYjUapStQ7jRLSW8KF6kuruaz6NtXJHjxGCjnh_RhWa_nqaEFvPuiDNIIlVEyzXv5khzhwoPlz5kiDWokZVP4DF6mvBw)

![](https://lh3.googleusercontent.com/rvffKHaxxaAM1yyLRvPmUvBSDVfOFRfZkExBuSUWhXlPEMqImAzXFGzw4464PB21wSvadG_0ECZvTaXVmrxHywQTp9zx3M5dagaeJd8mfo0msQbuxoBtvxvGeRo2A-HoRknUARBUAz3qfw83s9BXt8f2oeMdKzDiUQRTs_Hy0MVj56N3foKQ9F-QX4ok_g)
 3. Llenar el formulario de configuración con el nombre de la VCN, escoger el compartimento al cual se le asignará la VCN, en este caso es solo una opción que el root y pulsar el botón “Next”

![](https://lh4.googleusercontent.com/AkEo9VFwmnMk4gX_5nTLMWIClivlZLyKGNSD29WIORgmGsuPb4CcW_EGO1XeYGfi6aLVH-yvCJq0QQUAKT5HsKNiWq6uDyx5CZn2jDySLVTLE_sZ6tEekigq0e-szPGoUhz5u_T2KyTwrZy6Ww40UrJQatnO2MBQNElbuwILdiyAc7gZiIkkK-x9k4mgBg)
 4. Esperar a que todos los pasos están hechos, cuando termine se mostrará la nueva VCN

![](https://lh5.googleusercontent.com/CbvXrOaRjzc92k-j-oJjDyXqIpq5KyAFXuYMcQwHPR1yPFffPF2pTYrK-ynvFRXDtuWE22b1iBW_GktQ0-Qy3iIMe_7eEs4JU9RmQ25TFY-ssaVahIYAt41b4I1s0R1B-DnxFfA7tmYEBWG5upK2HCfM87OaYTYGS9c2wbH9NqcrifTQflQt6uw07NI0ag)
![](https://lh6.googleusercontent.com/VTuUEBzXBe6R60afduGCpnQN2SdlF0P2iz1z_Z1i0Jtugfgwu7YjaSAq0uXyJBGdZQOF3E5GzS1LMubsYFmAZFllreZFFN_EoMHGXdUb38U8Zc-5EWYHMPxrQOUvZjAgu13TnMjkawSAEptQjS-vDcQED-84AFw2hK9NYupxUrZwi0Y3M_1zogr8rBgFiA)
 5. Pulsar en “Public Subnet-foodverse_VCN”, luego en “Default Security List for foodverse_VCN”

![](https://lh3.googleusercontent.com/yBIEySGlXe146ErG0if_XS32acNu5Qd1SY6m_4rdonI482ygtQs8i7qxPggiVRZDUrazaFxKIZCCfc63syhYrJ8odKkV6Fx27UJk4w4_hq-jpFtIhgd96q9TuH7UFbNseCudertrTj3MOMhmr6BZi-P7bvyWO187cut5vdEcrmCj4RVqusYEyr5owFhJhQ)

![](https://lh5.googleusercontent.com/iXgRfIhQAv3KCQexOd3V82vKdfweoDnGzcoUbW40ycaXB9uVUctDHRuS5OfXoF5eIfm8qkIWnR_cTrruJSdTnrkriN5TBfVFIv4VE_EoBgsm63Wg43K5KBeRZ_IlYA2w_naWpH4hpSwna7vyomFJsdUm1basGnYV8CEMoIlzAnsIeBpQyrufXZplTZQozg)
 6. Agregar dos reglas para permitir la entrada por el puerto 80 y 443, protocolos http y https respectivamente. Para el uso del giroscopio en los celulares se debe contar con protocolo https.

Pulsar “Add ingress Rules” y llenar el formulario como se ve en la imagen.

![](https://lh6.googleusercontent.com/gvtD3aiROtLGFhkOTouDiskEndlGJfymu2MW6_UAvUIJF7DnMsxK1Yu9SJdzLd2qT03Gw9q9q_RMbucl7qBTX_hwGNK85vpKVpwJ5hP6f8OlY7ovcYwpKD9k_uPJvyAF_tk3-1smztSiJSXFD__1CqvX70JPV8zRelooDBMyeyroivlmLZ7IgcrplusMwQ)

  

Pulsar de nuevo “Add ingress Rules” y llenar el formulario como se ve en la imagen.

![](https://lh4.googleusercontent.com/w2uPGnko0egg4-asF0kQZYS8anCkKHWW4cQkg8RXrQzDeqRoXUgFWNj9KExppKtslx6fP1dEJci1hAd75fGnqd47lIgNhGFsRXJ9kDf-7heDoXWq8H7ev0tMZ67u8VuIXN1DJ9VLp2TBfCytz0RbpRgvMoYrr4vn5qEirH5ye7YoMDXOFeeL_TbsPmvXww)
 7. Ya la VCN estará lista para ser asignada a la instancia que contendrá el servidor.

![](https://lh4.googleusercontent.com/8C8b8y8136O788e6-tknmyN0ja7V0NpIK4AKqnNOKDD_9617FJgES8uTWnR-1DLivk-J9NThXFERxDoHeik9J57o3_Uav4TvXq-otjWRGStNrzIanYb5-awq8FJs2ryh7gowtrWVQXtxgXiGofpSu9U8_HuC9kb6KGrjGDpQ5glpX2TshgHErauoU_4cIw)
  
### Configurar instancia
1. Pulsar el botón de navegación “hamburguesa”, luego pulsar “Compute” y pulsar “Instances”

![](https://lh5.googleusercontent.com/66NbGTbrJ0Exnqo91TTtLHfAd9qrMpYraSeVXB4TJcC5Y_oGunQGDKsvPIvychChb1GBcG44BPjNB_KjEijIvyzvAdRVUawrO6dukyVz3sWSKhGO8-7TveBC9Ml4H9glnQjEfnSwcWAee8VsgKT05f6w5Vg8K3q5ZS9Dq0uD4KcYUXfDTJYhUyA5AHhUVA)

  

2. Pulsar en “Create instance”

![](https://lh4.googleusercontent.com/A2LEfipHlfbKV1QqAYaCzZsBq-ijZqg3YpHvuDszUvTMya8dYY0Zm8h2LO150izxixEenVRrI88KPaS8PwF7ARoih2XuoJn5RqnzI3CP1uTSp8r9_3ewBG7nsqNjXKvcyUaBpKZ_0e6Kcq31g4Zh4-myuhJa5rlTyxwnVA0pg9Vj-IMANr5-27bdiRMjqg)

  

3. Llenar el formulario de configuración con el nombre de la instancia, escoger el compartimento al cual se le asignará la instancia, en este caso es solo una opción que el root y pulsar Edit en “Placement” y seleccionar el AD

![](https://lh5.googleusercontent.com/wdFj1G7lQ3sMA9AJOA7XLF3B2EkOUtR6qSpIeUR_so7UN-hdqsY_0oWJ2LvzaXqzwHg6EcGtDxxwqDvtMbmhFtwz_qBD-pjpN8rzHCzryFcr3wPA3byTkZWzDatTnYApg6J1Y2CIVMcPwzJALZkJeemFzm7XmPy7HGg6n-o49j_XHnbNShkHHNib-Z0O0g)

![](https://lh5.googleusercontent.com/xVgi9EiBnlvnXvSsp9aomP1c5-JQVmMSEY_Vz4GinkYJI20TUFFyE-7tLjyJHnErOEhW2hj8zEJ_Rw2jJXkG-zxHf_cYziTlAcibOk0vxZc-dHhi0oefBLGVeag-jwTKSZdyRjiQm5buMnpKGk0gMUxQzEp3E4RHgjf5-KWooLclslgej7UdlojLEeu1Cg)

4. Seleccionar Edit en “Image and Shape” y verificar la imagen que sea Oracle Linux 8

![](https://lh6.googleusercontent.com/LLnlyIdJtWOIbpkKGIU2bzwKKtWokZ1B3casZCP7Gb2uXDOtSlV5JQhzWNUvZSKTVggI6AjuaODkLj4TyBJvwHF6LYs8akCZSbKMkf-YrvF5q1xNeMdUDVMv0LXmKnck6AXOSQQGFsUpLHc_Yojj0dZMxbASxr4ghup7SgfM-J2faMP5XeVJFYZ78a2Z3A)

  

pulsar “change shape” y seleccionar AMPERE OCPU y configurarlo como se ve en la imagen.

![](https://lh6.googleusercontent.com/0WDt6yylePQRlRrA55n8A3iQqCkX8yy4UhT9a3T1gZ7BEuRcv0zUMmiQBpiLxcdCggGGJ5J1XHaZwInP2psxYgQgmRDgCJ-V4Zvdu6fitJva5ykMQ2hPyVpfvA2VUH6YvjW1FV9W69sPb6aChs-ds_pd9k8cH9oxZGwpxDfqdOyBN3d4GOiLhcVqQWBI7Q)

![](https://lh4.googleusercontent.com/jYJ-kK3rZyzjXLFL4G_W94VHUn6pgRYJRAP_sgRGC9VGTnYF58LP4M1onJutn5nEXeufsEOnFLfHPJ58ZyWCbkDXaUlq9v6aDJ3XTHRernWR3Gbi3HDOIWR08l7Z9yy_x3HC82Rzjzqz3Gjgr6PTYBBaapwJqtJgsjV3DisTByoGAm2CPKlhhvvAge66KA)

y pulsar “Select shape”

  
  

5. Pulsar Edit en “Networking”

![](https://lh6.googleusercontent.com/cMeqoA-pQaF4PPI8lOj2SVeR_Yqhn_R6sNDhTZUlRUS4YX6TlSWVapED346y1EP3F4pzKhIPTgHoOjexBz6Tw6t8dJm3-5CGozQWII8NhkEWHhWd9MOncEKKMhebQCofghunXaC_d8LbcsOxI_zOwdObK6wskfsq0Z19jS9MfpOuES8qNYaKcTlgbeIsKA)

Llenar los campos vacíos como en la imagen

Asignar el VCN, seleccionar la subnet pública con las políticas de red creadas anteriormente y asignarle ipv4 pública.

![](https://lh6.googleusercontent.com/Qz9NJUwL8aaVzNiSK1mSBMlXK8LxKWaar1xYdaF0KS08fLRrJL2oFQcN7C94ePaA558pBiVqiTC7S1IIdlVW0pDrQiiljpULakU3lM-q1ZS7n57bo5B-XWb-84FJmqSJ1ILSNvcK04jVwzE-FU4N3CN5YA4cpCR1wRcYC77-EcPCt9yjXv9g0o6CE8iD2A)

  
  

6. En “Add SSH Keys” seleccionar la opción que se acomode a usted, en este caso se seleccionó “generate key pair for me” y se descargaron las llaves pública y privada para la posterior conexión por ssh.

![](https://lh6.googleusercontent.com/AIR2fyRx2BoDsN1OOf3I_tfv9dPQKt0KnV8CO_j5IxB9XXMRsjCZPdMX9OfKsmVpb_iOZsaFiIoue3i16NpafqU-P78CSXD7IU6KTDpbHEz8YX469u34QNcoARECBuvOlX5pwoxtM2iS9K0LmxxobVrNvQxhDmMGQs83dp42LVmskQknskSxX6SrAr94ig)

  

7. Seleccionar el tipo de encriptación del disco.

![](https://lh3.googleusercontent.com/ExswThLvHhKezUm2BJPMCXeJLvMgKxrzDKxTTSg9y8egMwEJMU0dm4IlZHNtlAD_7w8wQEjC2UCe0umPM9tXwc_VDOo9rSMK3XXs7ivC-0ViaSNcNNtYCncfeQjihbFdKqdkAxC16ox6rkPpRDbXjk_UWByZzzswcj4Dvg7PA6mkNZ183u6BAbwTVoI9ew)

  

8. Pulsar “Create”

![](https://lh3.googleusercontent.com/RznYN7hDKRNZmAIaePJwGQeZw3PlmJccn5n56zZE2AYtHwoXdEL2hCdBLfIpv-N-H5VHETRpRlwkFoy-CDBBST7eEp2OiZUBNxSmY5wh8KfKzHXDOfcQcMAzGfDqaZQMpjisRbOqUACwQvMr-HnbY5Lqh6ETScTDMBAW4__pbbCuDPme3mKQ8uHbluIZ0g)

Nuestra instancia demorará un par de minutos en estar lista y podemos proceder.

![](https://lh6.googleusercontent.com/9hLP7sAZy30zIDXMZtkqFOoXlII2guJ2WaLv7wlxwxPDccB0EEbCor3vwXqnR6_cwrIhEq1GJLqvZjfRDfjZvEe4I9sxfUczzRZZu249CjOgAZ3JAR6a89-Uzt6wuKrQxGM9cL-CAqHKEakMrMSQsomAJ53AC6rnjvsVpJ-v9o4e2Sems6ZUinj03WOIQg)

## Conectarse a la instancia
Nos conectaremos a la instancia por medio del protocolo SSH, por ende se necesitan el par de llaves privadas y públicas.
Cuando la instancia esté en estado verde “Running” procedemos a copiar la “Public IP address”

![](https://lh4.googleusercontent.com/xPGJYl42BtRbpjFnzOrVPFbiuCIZ4h0MW3VvRXbAUVzpHsDZNqZw-j2kNdd546Dr_0qFlVr_85-c0boPfboJe4VuhGxV7eHlob9dk-rtiSZcCLc0ffq_nNDA1gsm9jAAO00ygquS2Mh27JouL7OpgjCnqIv5UBwfchgtSGaQWPQKpvnh4S8YNV81Ew9QzA)

1.  Abrimos la aplicación MobaXterm y nos dirigimos a pulsar el botón de session
    

![](https://lh4.googleusercontent.com/T901Al2voCkHAKYkLMJzvo6oXfWdt7aRJwA2jLEorQQltnKs01pW2QcXFTE89nXDBolTJ2CsGmhkNlIdXmM2_YrS44oI-e5R-0KkPdMO-bCzfQ5ioogK-1SMMXBmVzl85VTWPbqB31waWZzc7Bep75I2tpC1G7DoCe_8yn4suBPJLHgAswGM0nzQRblkZQ)

Seleccionamos SSH y Advanced SSH settings![](https://lh3.googleusercontent.com/o98BQhxH1GrRgR55RkfpohIsKKPpeoiGqVq69UR4Kvr1YCOfYrKH5n2aA5eEOH0VwBgCKFWFNsqfqSMzgHuWQc507_T8Rio_ld_aSiekDybpBkOm84DlWV0pYpR4OTjqqVBkLHlCHXZo6vsv-A_LCzfM0XbcF2tkODE-kI4Iwc3JU6M-lbezIg7WpHoTtw)

En el campo Remote host pegamos la IP pública de la instancia. Pulsamos en “Use private key” y buscamos en nuestros archivos la ruta del archivo de la llave privada que configuramos con la instancia, en este caso la que se descargó.

![](https://lh6.googleusercontent.com/AFmRagTzQcsUKfTkNHvUhnElvbRuyyOQP7v61q8NWu4FzSHtm42NGEJvUExB70tjOIu9bPZyzAtNa_fLTvRgf4odH980B_JcqFWE7lb6c7Vn9XmSkZYpXDzg8Hlpzbawh_zgSdSxU1yp7pP3wVNzkATr4szcnS2APk5X9O62o7CWbWCPlIOsud1GCs5HVg)

Le damos ok.
2.  Digitamos el username que para las instancia de Oracle Linux es **opc**
![](https://lh3.googleusercontent.com/6iJl5n4KLg359MB772h2hIg7_4NDA9g9sQFbbS1mP0l6RhgXfIdU0NvecZYKCBY8ErTkvEG0Qs39_nvp7D-2Vx2W4q9MUgpUSaGphjsm__RTcCj7BGovGRzr4kG7FChg0Uwk1GPjkQZgcdkI5grqyVNR_CRqDjRk-RTokrUhPgezfK3e-9F2Wpep8io8iw)

Ya estamos conectados a la instancia por SSH.

## Configurar servidor NGINX
  

Procedemos a configurar un servidor NGINX en la instancia con los comandos que se muestran a continuación.

FYI <IP_address> = IP pública de la instancia.

```

### Buscar actualizaciones de los paquetes antes de instalar los paquetes de NGINX

sudo dnf update && sudo dnf upgrade

  
### Instalar NGINX

sudo dnf install -y nginx

  
### Habilite e inicie el servicio de NGINX, escucha por defecto en el puerto TCP 80

sudo systemctl enable --now nginx.service

  
### Verificación del estado

sudo systemctl status nginx


### Modifique las reglas del firewall

sudo firewall-cmd --add-service=http --permanent

sudo firewall-cmd --reload


```
### Create a custom NGINX configuration
Para cambiar la ruta raíz de su servidor web, no edite el archivo /etc/nginx/nginx.conf directamente. En su lugar, como método preferido, cree una configuración específica del sitio en el directorio /etc/nginx/conf.d. Por ejemplo, cree el archivo /etc/nginx/conf.d/default.conf y complételo con una configuración para su sitio.
```
## Crear un directorio para alojar un nuevo sitio
sudo mkdir /srv/website

## Crear index.html dummy
cat << EOF | sudo tee /srv/website/index.html
<html>
<head>
<title>Hello</title>
</head>
<body><p>Hello World!</p></body>
</html>
EOF

## Actualizar permisos
sudo chown -R nginx:nginx /srv/website
sudo chcon -Rt httpd_sys_content_t /srv/website

## Crear configuración NGINX personalizada
cat <<EOF | sudo tee /etc/nginx/conf.d/default.conf
server {
  server_name    <IP_address>;
  root           /srv/website;
  index          index.html;
}
EOF

## reiniciar NGINX
sudo systemctl restart nginx

## Para depurar y ver problemas de conexión siguiendo los archivos de registro
sudo tail -f /var/log/nginx/access.log -f /var/log/nginx/error.log
```
#### Configuración HTTPS

Esto es necesario para usar Aframe en modo VR/AR y tener acceso a los sensores del dispositivo.

#### Configurar certificados TLS/SSL

Oracle recomienda usar certificados TSL aprobados por autoridad de certificación (CA) externas.

Consulte https://docs.oracle.com/en/operating-systems/oracle-linux/certmanage/ para más información.

Para pruebas y desarrollo puede usar un certificado self-signed.

```

### Crea un directorio para almacenar las llaves y los certificados para NGINX

sudo mkdir -p /etc/pki/nginx/private

  
### Crear un certificado y una llave

openssl req -new -x509 -days 30 -nodes -newkey rsa:2048 -keyout server.key -out server.crt -subj "/C=US/ST=Ca/L=Sunnydale/CN=<IP_address>"

  
###Copie el certificado en /etc/pki/nginx/server.crt y el archivo de la llave en /etc/pki/nginx/private/server.key

sudo cp server.crt /etc/pki/nginx/

sudo cp server.key /etc/pki/nginx/private

```
  

#### Cambiar configuración NGINX
Reemplace el archivo /etc/nginx/conf.d/default.conf para que incluya una configuració para permitir un servicio web TLS y una redirección 301 para el tráfico HTTP a el sitio HTTPS.

```

cat <<'EOF' | sudo tee /etc/nginx/conf.d/default.conf

server {

server_name <IP_address>;

return 301 https://$host$request_uri;

}

  

server {

listen 443 ssl http2;

listen [::]:443 ssl http2;

server_name <IP_address>;

root /srv/website;

index index.html;

ssl_certificate "/etc/pki/nginx/server.crt";

ssl_certificate_key "/etc/pki/nginx/private/server.key";

ssl_session_cache shared:SSL:1m;

ssl_session_timeout 10m;

ssl_ciphers PROFILE=SYSTEM;

ssl_prefer_server_ciphers on;

}

EOF

  

### Reiniciar NGINX

sudo systemctl restart nginx

  

### Configure las reglas del firewall

sudo firewall-cmd --add-service=https --permanent

sudo firewall-cmd --reload

```

  
#### Confirmar que HTTPS funciona correctamente

Inicie un navegador web e ingrese en http://<IP_address>/. El navegador debe redirigirlo a https://<IP_address>/.
  
La mayoría de los navegadores mostraran una alerta cuando se accede a sitios con certificados self-signed  por el usuario. Puede aceptar el riesgo de la alerta en este caso para confirmar que el sitio funciona como se espera.

La alerta no se mostrara si usa un certificado aprobado por una autoridad de certificación.

## Despliegue del proyecto en el servidor
  

Instale git para clonar el repositorio

```

sudo dnf install git

```

Cree un directorio 

```
## Crear un directorio para alojar un nuevo sitio
sudo mkdir /srv/website
```

Elimine los archivos  dummy
```
cd /srv/website/
sudo rm index.html
```

Clone nuestra habitación del metaverso desde Github

(asegúrese de conservar el “.” ya que queremos tener el contenido del repositorio en nuestro folder)

```

sudo git clone https://github.com/LuciaSarmiento/Workshop-ONE.git .

```
## Probar
Asegurese que todo funciona correctamente conectándoselo a:

https://<IP_address>/
## Anexos

[Aframe docs ]( https://aframe.io/docs/1.3.0/introduction/)
[OCI docs ](https://docs.oracle.com/en-us/iaas/Content/home.htm)
[Figuras 3D ](https://sketchfab.com/3d-models)
[Imagenes 360 AI ](https://skybox.blockadelabs.com/)

