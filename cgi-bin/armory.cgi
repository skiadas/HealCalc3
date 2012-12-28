#!/usr/bin/python
import sys;
import os;
import urllib;
import urllib2;
import cgi;
# 
try:
    form = cgi.FieldStorage();
    if not("region" in form and "server" in form and "character" in form):
        print "Status: 403 Forbidden"
        print
        sys.exit()
    region = form["region"].value;
    server = form["server"].value;
    character = form["character"].value;
    host = os.environ["HTTP_HOST"];
    if not(host == "192.168.1.3" or host == "www.healadinne.com"):
        print "Status: 403 Forbidden"
        # print "Content-Type: text/plain"
        print
        cgi.print_environ()
        sys.exit()
    stringRequest = "http://" + urllib.quote(region + ".battle.net/api/wow/character/" + server + "/" + character) + "?fields=stats,talents"

    val = urllib2.urlopen(stringRequest).read()
    print "Content-Type: application/json; charset=utf-8"
    print
    print val
    # print stringRequest

    # js = json.loads(val)
    # spec = {5: "disc", 2: "pally", 11: "druid", 7: "shaman"}[js["class"]]
    # stats = js["stats"]
    # pickStats = dict([(k,stats[v]) for k,v in {"int": "int", "spi": "spr", "critR": "critRating", "mastR": "masteryRating", "hasteR": "hasteRating", "sp": "spellPower"}.iteritems()])
    # pickStats['spec'] = spec

    # print json.dumps(pickStats)
except  urllib2.HTTPError as e:
    print "Status: 400 Bad Request"
    print
    print "Something went wrong with: " + stringRequest
    print "Error code: ", e.error