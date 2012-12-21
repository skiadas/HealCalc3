#!/usr/bin/python
import base64
execfile('../js/app/util/image_namelist.js')  # Creates a 'names' table with shortened filenames
fullpaths = ['../images/'+ x + '_large.jpg' for x in names]
with open('../js/app/util/big_one.jpg', 'wb') as f:
    for img in fullpaths:
        with open(img, 'rb') as g:
            f.write(base64.b64encode(g.read()))
            f.write(unichr(1))
