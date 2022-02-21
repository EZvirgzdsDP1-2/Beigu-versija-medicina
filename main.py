from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def index():
  return render_template("index.html")


@app.route('/vizites')
def vizites():
  return render_template("vizites.html")
 
 
@app.route('/kontakti')
def kontakti():
  return render_template("kontakti.html")

@app.route('/doktoratiunpoliklinikas')
def doktorati():
  return render_template("doktoratiunpoliklinikas.html")

@app.route('/klients')
def klients():
  return render_template("sakums.html")

@app.route('/admin')
def admin():
  return render_template("sakumsadmin.html") 

app.run(host='0.0.0.0', port=8080)