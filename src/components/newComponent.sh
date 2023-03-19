#! /bin/sh

# This script creates a new React component. Put the script in whatever directory you are storing your component subdirectories in.
# When you run 'sh newComponent.sh <componentName>' in your terminal, the script will create a new directory with .JS and .CSS template files in it.
# Have fun.

componentName=$1

if [ -z "$componentName" ];

then  

    echo "You must specify a component name. Pascal Case is recommended for React components."

else

    # Create component directory.
    mkdir ./$componentName

    # Create component files.
    touch ./$componentName/$componentName.js
    touch ./$componentName/$componentName.css

    # Write component CSS file.
    echo "#"$componentName"Area {" >> ./$componentName/$componentName.css
    echo "  /* Add Component CSS here. */" >> ./$componentName/$componentName.css
    echo "}" >> ./$componentName/$componentName.css

    # Write component JS file.
    echo 'import React from "react";' >> ./$componentName/$componentName.js
    echo "import './"$componentName".css';" >> ./$componentName/$componentName.js
    echo "" >> ./$componentName/$componentName.js
    echo "function "$componentName"() {" >> ./$componentName/$componentName.js
    echo "    return (" >> ./$componentName/$componentName.js
    echo "        <section>" >> ./$componentName/$componentName.js
    echo '            <div id="'$componentName'Area"></div>' >> ./$componentName/$componentName.js
    echo "        </section>" >> ./$componentName/$componentName.js
    echo "    );" >> ./$componentName/$componentName.js
    echo "}" >> ./$componentName/$componentName.js
    echo "" >> ./$componentName/$componentName.js
    echo "export default "$componentName";" >> ./$componentName/$componentName.js

fi

exit 0