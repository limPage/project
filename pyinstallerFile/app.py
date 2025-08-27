import os, sys, webview

def resource_path(relative_path):
    """PyInstaller가 exe 내부에서 리소스를 찾을 수 있게 해주는 함수"""
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return os.path.join(os.path.abspath("."), relative_path)

html_file = resource_path("pikachu_gugudan.html")
webview.create_window("피카츄구구단", f"file:///{html_file}", width=1000, height=800, resizable=False)
webview.start()
