"""Derive the small ODbL course extract from bundled OSM responses. No network needed."""
import json, math
from pathlib import Path
BASE=Path(__file__).resolve().parent.parent/'public/data'
center=json.loads((BASE/'river-centerline.json').read_text())
raw=json.loads((BASE/'river-outline-source.json').read_text())
nodes={e['id']:e for e in raw['elements'] if e['type']=='node'}
ways={e['id']:e for e in raw['elements'] if e['type']=='way'}
rel=next(e for e in raw['elements'] if e['type']=='relation' and e['id']==14038959)
remaining=[ways[m['ref']]['nodes'][:] for m in rel['members'] if m['role']=='outer']
ring=remaining.pop(0)
while remaining:
 for i,w in enumerate(remaining):
  if w[0]==ring[-1]:ring+=w[1:];remaining.pop(i);break
  if w[-1]==ring[-1]:ring+=w[-2::-1];remaining.pop(i);break
 else:raise ValueError('Disconnected outline')
assert ring[0]==ring[-1]
outline=[[nodes[n]['lat'],nodes[n]['lon']] for n in ring]
# Local metres: x east, z south; enough precision for this 5km game course.
coslat=math.cos(math.radians(13.733))
def xy(p):return ((p[1]-100.5)*111320*coslat,(13.733-p[0])*111320)
def cross(a,b):return a[0]*b[1]-a[1]*b[0]
outlineXY=list(map(xy,outline));points=list(map(xy,center['centerline']))
widths=[];left=[];right=[];qualities=[]
for i,p in enumerate(points):
 a=points[max(0,i-1)];b=points[min(len(points)-1,i+1)];dx=b[0]-a[0];dy=b[1]-a[1];dl=math.hypot(dx,dy);n=(-dy/dl,dx/dl);hits=[]
 for a,b in zip(outlineXY,outlineXY[1:]):
  s=(b[0]-a[0],b[1]-a[1]);den=cross(n,s)
  if abs(den)<1e-10:continue
  ap=(a[0]-p[0],a[1]-p[1]);t=cross(ap,s)/den;u=cross(ap,n)/den
  if 0<=u<=1:hits.append(t)
 neg=max((h for h in hits if h<0),default=None);pos=min((h for h in hits if h>0),default=None)
 if neg is None or pos is None:
  w=280.;qualities.append('authored-upstream-approach-width');left.append(140);right.append(140)
 else:
  w=pos-neg;qualities.append('OSM-outline-cross-section');left.append(round(-neg,1));right.append(round(pos,1))
 widths.append(round(w,1))
# Clip the outer polygon to the course latitude range, preserving exact shoreline nodes.
def clip_lat(poly,lat,keepHigher):
 out=[]
 for a,b in zip(poly,poly[1:]+poly[:1]):
  ina=(a[0]>=lat) if keepHigher else (a[0]<=lat);inb=(b[0]>=lat) if keepHigher else (b[0]<=lat)
  if ina:out.append(a)
  if ina!=inb:
   f=(lat-a[0])/(b[0]-a[0]);out.append([lat,a[1]+f*(b[1]-a[1])])
 return out
poly=clip_lat(outline[:-1],13.717,True);poly=clip_lat(poly,13.7465,False)
out={
 'attribution':'© OpenStreetMap contributors','license':'ODbL-1.0','licenseUrl':'https://opendatacommons.org/licenses/odbl/1-0/',
 'source':'https://api.openstreetmap.org/api/0.6/relation/14038959/full.json','centerlineSource':'river-source.json',
 'centerlineOsmTimestamp':center['osmTimestamp'],'coordinateOrder':'longitude,latitude,widthMetres',
 'direction':'north-to-south','points':[[lon,lat,w] for (lat,lon),w in zip(center['centerline'],widths)],
 'widthSource':qualities,'bankDistanceNegativeNormal':left,'bankDistancePositiveNormal':right,
 'outlineCoordinateOrder':'longitude,latitude','outline':[[round(lon,7),round(lat,7)] for lat,lon in poly],
 'notes':'Widths are measured along the normal to the OSM centerline against the OSM water polygon, not bathymetry. Upstream approach beyond the retrieved river polygon uses authored280m width. Outline is clipped at13.717 and13.7465. Authored game scenery can be scaled independently.'
}
(BASE/'river-course.json').write_text(json.dumps(out,separators=(',',':'),ensure_ascii=False))
# Add the final temple to the landmark extract.
land=json.loads((BASE/'landmarks.json').read_text());kr=json.loads((BASE/'kalayanamit-source.json').read_text());kn={e['id']:e for e in kr['elements'] if e['type']=='node'};kw=next(e for e in kr['elements'] if e['type']=='way' and e['id']==342355805);p=[[kn[n]['lat'],kn[n]['lon']] for n in kw['nodes']]
if not any(e['id']=='wat-kalayanamit' for e in land['landmarks']):land['landmarks'].append({'id':'wat-kalayanamit','osmId':342355805,'source':'https://api.openstreetmap.org/api/0.6/way/342355805/full.json','center':[round((min(v[j] for v in p)+max(v[j] for v in p))/2,7) for j in range(2)],'geometry':p,'tags':kw.get('tags',{})})
(BASE/'landmarks.json').write_text(json.dumps(land,separators=(',',':'),ensure_ascii=False))
print('course points',len(points),'outline points',len(poly),'bytes',(BASE/'river-course.json').stat().st_size)
print('measured widths',min(w for w,q in zip(widths,qualities) if q.startswith('OSM')),max(w for w,q in zip(widths,qualities) if q.startswith('OSM')))
print('ICONSIAM nearest',min(zip(center['centerline'],widths,left,right),key=lambda v:abs(v[0][0]-13.7268)))
print('landmarks',len(land['landmarks']))
